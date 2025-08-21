# Reverse Engineering a Custom Protocol

**Category:** Reverse Engineering  
**Event:** picoCTF 2023  
**Difficulty:** Hard  
**Date:** 2023-09-22

## Description

Analysis and reverse engineering of a custom binary protocol to extract hidden
data and capture the flag.

## Solution

### Step 1: Initial Analysis

Let's start by examining the provided binary:

```bash
file protocol_analyzer
strings protocol_analyzer | grep -i flag
```

### Step 2: Dynamic Analysis

Running the binary to understand its behavior:

```bash
./protocol_analyzer
strace ./protocol_analyzer 2>&1 | head -20
```

### Step 3: Protocol Reverse Engineering

Using Wireshark and custom scripts to analyze the network protocol:

```python
import struct
import socket

def parse_protocol_header(data):
    # Custom protocol has 16-byte header
    magic, version, length, checksum = struct.unpack('!IIII', data[:16])
    return {
        'magic': magic,
        'version': version,
        'length': length,
        'checksum': checksum
    }
```

### Step 4: Finding the Hidden Data

After analyzing the protocol structure, we discover hidden data in unused
protocol fields.

## Flag

```
picoCTF{pr0t0c0l_r3v3rs3_3ng1n33r1ng_m4st3r}
```

## Tools Used

- IDA Pro
- Wireshark
- Python
- GDB

## References

- [Protocol Analysis Techniques](https://example.com)
- [Reverse Engineering Guide](https://example.com)
