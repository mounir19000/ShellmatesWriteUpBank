const fs = require('fs');
const path = require('path');

const writeupDirs = fs.readdirSync(path.join(__dirname, 'public', 'writeups'), { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

const writeups = [];

for (const dir of writeupDirs) {
  const writeupPath = path.join(__dirname, 'public', 'writeups', dir, 'writeup.md');
  
  if (fs.existsSync(writeupPath)) {
    const content = fs.readFileSync(writeupPath, 'utf8');
    
    // Extract metadata from markdown frontmatter
    const titleMatch = content.match(/^# (.+)$/m);
    const categoryMatch = content.match(/\*\*Category:\*\* (.+)$/m);
    const eventMatch = content.match(/\*\*Event:\*\* (.+)$/m);
    const difficultyMatch = content.match(/\*\*Difficulty:\*\* (.+)$/m);
    const dateMatch = content.match(/\*\*Date:\*\* (.+)$/m);
    const authorMatch = content.match(/\*\*Author:\*\* (.+)$/m);
    const descriptionMatch = content.match(/## Description\s+(.+?)(?=\s*##|$)/s);
    
    if (titleMatch && categoryMatch && eventMatch && difficultyMatch && dateMatch && authorMatch) {
      writeups.push({
        id: dir,
        title: titleMatch[1].trim(),
        category: categoryMatch[1].trim(),
        event: eventMatch[1].trim(),
        difficulty: difficultyMatch[1].trim(),
        date: dateMatch[1].trim(),
        description: descriptionMatch ? descriptionMatch[1].trim().replace(/\n+/g, ' ').substring(0, 200) + '...' : 'No description available',
        author: authorMatch[1].trim()
      });
    }
  }
}

// Write the index.json file
fs.writeFileSync(
  path.join(__dirname, 'public', 'writeups', 'index.json'),
  JSON.stringify(writeups, null, 2)
);

console.log(`✅ Generated index.json with ${writeups.length} writeups:`, writeups.map(w => w.id));
