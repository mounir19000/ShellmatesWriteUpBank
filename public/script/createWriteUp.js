#!/usr/bin/env node
const prompts = require('prompts');
const fs = require('fs');
const path = require('path');

// Event and category maps
const eventCodes = {
  'PWNYcup': 'PWN',
  'Hackini': 'HKN',
  'Besides': 'BSD',
  'HackTillShour': 'HTS',
  'HackTillEid': 'HTE',
  'MiniCTF': 'MIN'
};

const categoryCodes = {
  'Binary Exploitation': 'BIN',
  'Reverse Engineering': 'REV',
  'Cryptography': 'CRY',
  'Forensics': 'FOR',
  'Web Exploitation': 'WEB',
  'Pwn': 'PWN',
  'Steganography': 'STG',
  'Miscellaneous': 'MSC',
  'OSINT': 'OSI',
  'Hardware': 'HWD',
  'Mobile': 'MOB',
  'Networking': 'NET',
  'Programming / Scripting': 'PRG',
  'Social Engineering': 'SOC',
  'Blockchain': 'BLK'
};

(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'title',
      message: '📌 Title'
    },
    {
      type: 'multiselect',
      type: 'select',
      name: 'category',
      message: '📂 Category',
      choices: Object.keys(categoryCodes).map(c => ({ title: c, value: c }))
    },
    {
      type: 'select',
      name: 'event',
      message: '🎯 Event',
      choices: Object.keys(eventCodes).map(e => ({ title: e, value: e }))
    },
    {
      type: 'select',
      name: 'difficulty',
      message: '🔥 Difficulty',
      choices: ['Easy', 'Medium', 'Hard'].map(d => ({ title: d, value: d }))
    },
    {
      type: 'text',
      name: 'date',
      message: '📅 Date (YYYY-MM-DD)',
      initial: new Date().toISOString().slice(0, 10)
    },
    {
      type: 'text',
      name: 'description',
      message: '📝 Description'
    },
    {
      type: 'text',
      name: 'author',
      message: '👤 Author'
    }
  ]);

  const year = response.date.slice(2, 4);
  const eventCode = eventCodes[response.event];
  const categoryCode = categoryCodes[response.category];
  const indexPath = path.join(__dirname, '../writeups/index.json');

  let existing = [];
  if (fs.existsSync(indexPath)) {
    existing = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  }

  const prefix = `${eventCode}${year}${categoryCode}`;
  const index = existing.filter(e => e.id.startsWith(prefix)).length + 1;
  const indexStr = String(index).padStart(2, '0');
  const code = `${prefix}${indexStr}`;

  const newEntry = {
    id: code,
    ...response
  };

  existing.push(newEntry);
  fs.writeFileSync(indexPath, JSON.stringify(existing, null, 2));

  // Move writeup files
  const srcDir = path.join(__dirname, 'YourWriteUp');
  const destDir = path.join(__dirname, '../writeups', code);
  fs.mkdirSync(destDir, { recursive: true });

  // Create template writeup.md if it doesn't exist
  const templateContent = `# ${response.title}

**Category:** ${response.category}  
**Event:** ${response.event}  
**Difficulty:** ${response.difficulty}  
**Date:** ${response.date}  
**Author:** ${response.author}  

## Description

${response.description}

## Solution

[Write your solution here]

## Flag

\`\`\`
[flag here]
\`\`\`

## Files

- [Challenge files if any]

## References

- [Any references or resources used]
`;

  if (fs.existsSync(path.join(srcDir, 'writeup.md'))) {
    fs.renameSync(path.join(srcDir, 'writeup.md'), path.join(destDir, 'writeup.md'));
  } else {
    fs.writeFileSync(path.join(destDir, 'writeup.md'), templateContent);
    console.log(`📝 Created template writeup.md for "${code}"`);
  }

  if (fs.existsSync(path.join(srcDir, 'images'))) {
    fs.renameSync(path.join(srcDir, 'images'), path.join(destDir, 'images'));
  } else {
    // Create empty images directory
    fs.mkdirSync(path.join(destDir, 'images'), { recursive: true });
    console.log(`📁 Created images directory for "${code}"`);
  }


  if (fs.existsSync(path.join(srcDir, 'challenge'))) {
    fs.renameSync(path.join(srcDir, 'challenge'), path.join(destDir, 'challenge'));
  } else {
    // Create empty challenge directory
    fs.mkdirSync(path.join(destDir, 'challenge'), { recursive: true });
    console.log(`📁 Created challenge directory for "${code}"`);
  }

  console.log(`✅ Successfully added writeup as "${code}"`);
})();
