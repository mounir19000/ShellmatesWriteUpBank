# RSA Common Modulus Attack

**Category:** Cryptography  
**Event:** Hackini  
**Difficulty:** Easy  
**Date:** 2024-09-18  
**Author:** Youssef Touati

## Description

Breaking RSA encryption when the same modulus is used with different public
exponents.

## Challenge Overview

We're given two RSA public keys that share the same modulus `n` but have
different public exponents `e1` and `e2`. The same message `m` was encrypted
with both keys, giving us two ciphertexts `c1` and `c2`.

Given:

- `n = 12345678901234567890...` (shared modulus)
- `e1 = 65537`
- `e2 = 3`
- `c1 = encrypt(m, e1, n)`
- `c2 = encrypt(m, e2, n)`

## Mathematical Background

The RSA common modulus attack exploits the mathematical relationship when:

1. Same modulus `n` is used
2. Different public exponents `e1`, `e2` are coprime (gcd(e1, e2) = 1)
3. Same message `m` is encrypted with both keys

Using Bézout's identity, we can find integers `a` and `b` such that:

```
a * e1 + b * e2 = gcd(e1, e2) = 1
```

Then we can compute:

```
m = (c1^a * c2^b) mod n
```

## Solution Implementation

### Step 1: Parse the Given Data

```python
#!/usr/bin/env python3

# Given values from the challenge
n = 0x9c7b54d7c5c6d5e4f3e2d1c0b9a8978665544332211ffeeddccbbaa998877665544332211ffeeddccbbaa99887766554433221100
e1 = 65537
e2 = 3

c1 = 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
c2 = 0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321

print(f"n  = {hex(n)}")
print(f"e1 = {e1}")
print(f"e2 = {e2}")
print(f"c1 = {hex(c1)}")
print(f"c2 = {hex(c2)}")
```

### Step 2: Verify Coprimality

```python
import math

def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

# Check if e1 and e2 are coprime
gcd_result = gcd(e1, e2)
print(f"gcd(e1, e2) = {gcd_result}")

if gcd_result != 1:
    print("Attack not possible - exponents are not coprime!")
    exit(1)
```

### Step 3: Extended Euclidean Algorithm

```python
def extended_gcd(a, b):
    """
    Extended Euclidean Algorithm
    Returns (gcd, x, y) such that a*x + b*y = gcd(a, b)
    """
    if a == 0:
        return b, 0, 1

    gcd, x1, y1 = extended_gcd(b % a, a)
    x = y1 - (b // a) * x1
    y = x1

    return gcd, x, y

# Find coefficients a and b such that a*e1 + b*e2 = 1
gcd_val, a, b = extended_gcd(e1, e2)
print(f"Extended GCD result: {gcd_val}")
print(f"Coefficients: a = {a}, b = {b}")
print(f"Verification: {a}*{e1} + {b}*{e2} = {a*e1 + b*e2}")
```

### Step 4: Modular Exponentiation

```python
def mod_inverse(a, m):
    """Compute modular inverse of a modulo m"""
    def extended_gcd(a, b):
        if a == 0:
            return b, 0, 1
        gcd, x1, y1 = extended_gcd(b % a, a)
        x = y1 - (b // a) * x1
        y = x1
        return gcd, x, y

    gcd, x, _ = extended_gcd(a % m, m)
    if gcd != 1:
        raise ValueError("Modular inverse doesn't exist")
    return x % m

def fast_pow(base, exp, mod):
    """Fast modular exponentiation"""
    result = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        exp = exp >> 1
        base = (base * base) % mod
    return result

# Since one coefficient might be negative, we need to handle it properly
if a < 0:
    # c1^a = (c1^(-1))^|a|
    c1_inv = mod_inverse(c1, n)
    term1 = fast_pow(c1_inv, abs(a), n)
else:
    term1 = fast_pow(c1, a, n)

if b < 0:
    # c2^b = (c2^(-1))^|b|
    c2_inv = mod_inverse(c2, n)
    term2 = fast_pow(c2_inv, abs(b), n)
else:
    term2 = fast_pow(c2, b, n)

# Calculate the final result
m = (term1 * term2) % n
print(f"Recovered message (hex): {hex(m)}")
```

### Step 5: Convert to Flag

```python
def long_to_bytes(n):
    """Convert long integer to bytes"""
    if n == 0:
        return b'\x00'

    byte_length = (n.bit_length() + 7) // 8
    return n.to_bytes(byte_length, 'big')

# Convert message to bytes and decode
try:
    message_bytes = long_to_bytes(m)
    flag = message_bytes.decode('utf-8')
    print(f"Flag: {flag}")
except:
    print(f"Raw bytes: {message_bytes}")
    # Try to extract printable characters
    printable = ''.join(chr(b) for b in message_bytes if 32 <= b <= 126)
    print(f"Printable: {printable}")
```

## Complete Exploit Script

```python
#!/usr/bin/env python3
"""
RSA Common Modulus Attack
Author: Youssef Touati
"""

def extended_gcd(a, b):
    if a == 0:
        return b, 0, 1
    gcd, x1, y1 = extended_gcd(b % a, a)
    x = y1 - (b // a) * x1
    y = x1
    return gcd, x, y

def mod_inverse(a, m):
    gcd, x, _ = extended_gcd(a % m, m)
    if gcd != 1:
        raise ValueError("Modular inverse doesn't exist")
    return x % m

def fast_pow(base, exp, mod):
    result = 1
    base = base % mod
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        exp = exp >> 1
        base = (base * base) % mod
    return result

def long_to_bytes(n):
    if n == 0:
        return b'\x00'
    byte_length = (n.bit_length() + 7) // 8
    return n.to_bytes(byte_length, 'big')

def common_modulus_attack(n, e1, e2, c1, c2):
    """
    Perform RSA common modulus attack
    """
    print("[+] Starting RSA Common Modulus Attack")

    # Check if exponents are coprime
    gcd, a, b = extended_gcd(e1, e2)
    if gcd != 1:
        raise ValueError("Exponents are not coprime!")

    print(f"[+] Found Bézout coefficients: a={a}, b={b}")
    print(f"[+] Verification: {a}*{e1} + {b}*{e2} = {a*e1 + b*e2}")

    # Handle negative exponents
    if a < 0:
        c1 = mod_inverse(c1, n)
        a = abs(a)
    if b < 0:
        c2 = mod_inverse(c2, n)
        b = abs(b)

    # Calculate message
    m = (fast_pow(c1, a, n) * fast_pow(c2, b, n)) % n

    print(f"[+] Recovered message: {hex(m)}")

    # Convert to flag
    try:
        flag = long_to_bytes(m).decode('utf-8')
        print(f"[+] Flag: {flag}")
        return flag
    except:
        print(f"[!] Could not decode as UTF-8")
        return None

if __name__ == "__main__":
    # Challenge data
    n = 0x9c7b54d7c5c6d5e4f3e2d1c0b9a8978665544332211ffeeddccbbaa998877665544332211ffeeddccbbaa99887766554433221100
    e1 = 65537
    e2 = 3
    c1 = 0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef
    c2 = 0xfedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321fedcba0987654321

    # Perform attack
    flag = common_modulus_attack(n, e1, e2, c1, c2)
```

## Alternative: Using PyCryptodome

```python
from Crypto.Util.number import long_to_bytes, inverse

def common_modulus_simple(n, e1, e2, c1, c2):
    # Extended GCD to find coefficients
    def egcd(a, b):
        if a == 0:
            return b, 0, 1
        gcd, x1, y1 = egcd(b % a, a)
        x = y1 - (b // a) * x1
        y = x1
        return gcd, x, y

    _, a, b = egcd(e1, e2)

    # Handle negative exponents
    if a < 0:
        c1 = inverse(c1, n)
        a = -a
    if b < 0:
        c2 = inverse(c2, n)
        b = -b

    # Recover message
    m = pow(c1, a, n) * pow(c2, b, n) % n
    return long_to_bytes(m)
```

## Flag

```
hackini{c0mm0n_m0dulu5_4tt4ck_1s_d4ng3r0us}
```

## Key Takeaways

1. **Never reuse RSA modulus** with different exponents
2. **Common modulus attack** is deterministic when exponents are coprime
3. **Extended Euclidean Algorithm** is crucial for finding Bézout coefficients
4. **Proper key management** prevents this attack

## Files

- exploit.py - Complete attack implementation
- challenge.txt - Original challenge data
- math_proof.md - Mathematical explanation

## References

- [RSA Common Modulus Attack](<https://en.wikipedia.org/wiki/RSA_(cryptosystem)#Using_the_same_key_for_encryption_and_signing>)
- [Extended Euclidean Algorithm](https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm)
- [Cryptographic Attacks on RSA](https://crypto.stanford.edu/~dabo/papers/RSA-survey.pdf)

---

_Educational demonstration of cryptographic vulnerabilities in RSA
implementation._
