#!/usr/bin/env node
const prompts = require('prompts');
const fs = require('fs');
const path = require('path');

// Function to rebuild index.json from existing writeup directories
function rebuildIndex() {
  const writeupDir = path.join(__dirname, '../public/writeups');
  const indexPath = path.join(writeupDir, 'index.json');
  
  if (!fs.existsSync(writeupDir)) {
    console.log('❌ Writeups directory not found');
    return;
  }

  const entries = [];
  const directories = fs.readdirSync(writeupDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  for (const dir of directories) {
    const writeupPath = path.join(writeupDir, dir, 'writeup.md');
    if (fs.existsSync(writeupPath)) {
      try {
        const content = fs.readFileSync(writeupPath, 'utf8');
        
        // Extract metadata from the markdown content
        const lines = content.split('\n');
        const metadata = {};
        
        // Look for the title (first line starting with #)
        const titleMatch = content.match(/^#\s+(.+)$/m);
        metadata.title = titleMatch ? titleMatch[1].trim() : 'Untitled';
        
        // Extract metadata from bold lines
        for (const line of lines) {
          const categoryMatch = line.match(/\*\*Category:\*\*\s+(.+)/);
          if (categoryMatch) metadata.category = categoryMatch[1].trim();
          
          const eventMatch = line.match(/\*\*Event:\*\*\s+(.+)/);
          if (eventMatch) metadata.event = eventMatch[1].trim();
          
          const difficultyMatch = line.match(/\*\*Difficulty:\*\*\s+(.+)/);
          if (difficultyMatch) metadata.difficulty = difficultyMatch[1].trim();
          
          const dateMatch = line.match(/\*\*Date:\*\*\s+(.+)/);
          if (dateMatch) metadata.date = dateMatch[1].trim();
          
          const authorMatch = line.match(/\*\*Author:\*\*\s+(.+)/);
          if (authorMatch) metadata.author = authorMatch[1].trim();
        }
        
        // Extract description from ## Description section
        const descriptionMatch = content.match(/## Description\s*\n\n([^#]+)/);
        const description = descriptionMatch ? descriptionMatch[1].trim().replace(/\n/g, ' ') : 'No description available';
        
        entries.push({
          id: dir,
          title: metadata.title || 'Untitled',
          category: metadata.category || 'Miscellaneous',
          event: metadata.event || 'Unknown',
          difficulty: metadata.difficulty || 'Medium',
          date: metadata.date || '2024-01-01',
          description: description,
          author: metadata.author || 'Unknown'
        });
      } catch (error) {
        console.log(`⚠️ Warning: Could not read metadata from ${dir}/writeup.md:`, error.message);
      }
    }
  }

  fs.writeFileSync(indexPath, JSON.stringify(entries, null, 2));
  console.log(`✅ Successfully rebuilt index.json with ${entries.length} entries`);
}

// Function to add a single writeup entry to index.json
function addToIndex(writeupData) {
  const indexPath = path.join(__dirname, '../public/writeups/index.json');
  
  let existing = [];
  if (fs.existsSync(indexPath)) {
    try {
      existing = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
    } catch (error) {
      console.log('⚠️ Warning: Could not read existing index.json, creating new one');
      existing = [];
    }
  }

  // Check if writeup already exists
  const existingIndex = existing.findIndex(entry => entry.id === writeupData.id);
  if (existingIndex !== -1) {
    // Update existing entry
    existing[existingIndex] = writeupData;
    console.log(`📝 Updated existing entry for "${writeupData.id}"`);
  } else {
    // Add new entry
    existing.push(writeupData);
    console.log(`➕ Added new entry for "${writeupData.id}"`);
  }

  fs.writeFileSync(indexPath, JSON.stringify(existing, null, 2));
  console.log(`✅ Successfully updated index.json (${existing.length} total entries)`);
}

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
  // Check if rebuild flag is passed
  if (process.argv.includes('--rebuild')) {
    rebuildIndex();
    return;
  }

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
  const indexPath = path.join(__dirname, '../public/writeups/index.json');

  let existing = [];
  if (fs.existsSync(indexPath)) {
    existing = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  }

  const prefix = `${eventCode}${year}${categoryCode}`;
  const index = existing.filter(e => e.id.startsWith(prefix)).length + 1;
  const indexStr = String(index).padStart(2, '0');
  const code = `${prefix}${indexStr}`;

  // Move writeup files
  const srcDir = path.join(__dirname, 'YourWriteUp');
  const destDir = path.join(__dirname, '../public/writeups', code);
  fs.mkdirSync(destDir, { recursive: true });

  if (fs.existsSync(path.join(srcDir, 'writeup.md'))) {
    // Read the existing writeup content
    const existingContent = fs.readFileSync(path.join(srcDir, 'writeup.md'), 'utf8');
    
    // Create the metadata header
    const metadataHeader = `# ${response.title}

**Category:** ${response.category}  
**Event:** ${response.event}  
**Difficulty:** ${response.difficulty}  
**Date:** ${response.date}  
**Author:** ${response.author}

`;

    finalContent = metadataHeader + existingContent;
    
    // Write the updated content to the destination
    fs.writeFileSync(path.join(destDir, 'writeup.md'), finalContent);
    
    // Remove the source file
    fs.unlinkSync(path.join(srcDir, 'writeup.md'));
  } else {
    // Create a new writeup.md file with just the metadata header
    const metadataHeader = `# ${response.title}

**Category:** ${response.category}  
**Event:** ${response.event}  
**Difficulty:** ${response.difficulty}  
**Date:** ${response.date}  
**Author:** ${response.author}

## Description

${response.description}

## Challenge Overview

Add your challenge analysis here...

## Vulnerability Analysis

Describe the vulnerability here...

## Exploitation

Add your exploitation steps here...

## Flag

\`\`\`
Add the flag here
\`\`\`

## Files

- Add challenge files here

## References

- Add references here

---

_Educational content for learning cybersecurity techniques._
`;
    
    fs.writeFileSync(path.join(destDir, 'writeup.md'), metadataHeader);
    console.log(`📝 Created new writeup.md with metadata template`);
  }

  if (fs.existsSync(path.join(srcDir, 'images'))) {
    fs.renameSync(path.join(srcDir, 'images'), path.join(destDir, 'images'));
  } else {
    console.log(`❌ Note: images directory not found in ${srcDir}`);
  }


  if (fs.existsSync(path.join(srcDir, 'challenge'))) {
    fs.renameSync(path.join(srcDir, 'challenge'), path.join(destDir, 'challenge'));
  } else {
    console.log(`❌ Note: challenge directory not found in ${srcDir}`);
  }

  // Add the new writeup to index.json using the addToIndex function
  const newEntry = {
    id: code,
    title: response.title,
    category: response.category,
    event: response.event,
    difficulty: response.difficulty,
    date: response.date,
    description: response.description,
    author: response.author
  };

  addToIndex(newEntry);

  console.log(`✅ Successfully added writeup as "${code}"`);
})();
