# ShellmatesWriteUpBank 🏆

A modern, interactive web platform for showcasing cybersecurity CTF (Capture The
Flag) writeups and challenges. Built with Next.js, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-15.3.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- **Interactive Writeup Gallery**: Browse through categorized cybersecurity
  writeups
- **Multi-Category Support**: Web, Forensics, Cryptography, Binary Exploitation,
  PWN, OSINT, Hardware, Mobile, Steganography
- **Responsive Design**: Optimized for desktop and mobile viewing
- **Markdown Support**: Rich markdown rendering with syntax highlighting
- **Search & Filter**: Find writeups by category, difficulty, or event
- **Modern UI**: Clean, professional interface with smooth animations
- **Static Site Generation**: Fast loading with Next.js SSG

## 🎯 Categories

- 🌐 **Web Exploitation**: SQL injection, XSS, authentication bypasses
- 🔍 **Forensics**: Memory dumps, file analysis, digital evidence
- 🔐 **Cryptography**: RSA attacks, cipher breaking, hash analysis
- ⚡ **Binary Exploitation**: Buffer overflows, ROP chains, exploitation
- 🎭 **PWN**: Return-to-libc, stack smashing, privilege escalation
- 🕵️ **OSINT**: Open source intelligence gathering
- 🔧 **Hardware**: Hardware hacking and embedded systems
- 📱 **Mobile**: Android/iOS application security
- 🖼️ **Steganography**: Hidden data in images and files

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/mounir19000/ShellmatesWriteUpBank.git
   cd ShellmatesWriteUpBank
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser** Navigate to
   [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ShellmatesWriteUpBank/
├── public/
│   ├── writeups/           # Writeup markdown files and metadata
│   │   ├── index.json      # Writeups index
│   │   └── [writeupId]/    # Individual writeup folders
│   ├── pics/               # Static images and icons
│   └── jsons/              # JSON data files
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── writeups/       # Writeup pages
│   │   └── HowToSubmit/    # Submission guidelines
│   ├── components/         # React components
│   │   ├── header.tsx      # Navigation header
│   │   ├── footer.tsx      # Site footer
│   │   ├── slider.tsx      # Image slider
│   │   └── ui/             # UI components
│   └── lib/                # Utility functions
├── scripts/
│   └── build-writeups.js   # Writeup management script
└── package.json
```

## 📝 Adding New Writeups

### Method 1: Using the Build Script

1. **Run the interactive script**

   ```bash
   node scripts/build-writeups.js
   ```

2. **Follow the prompts** to enter writeup details:

   - Title
   - Category
   - Event name
   - Difficulty level
   - Author name
   - Description

3. **Edit the generated markdown file** in
   `public/writeups/[writeupId]/writeup.md`

### Method 2: Manual Creation

1. **Create a new folder** in `public/writeups/` with a unique ID
2. **Add a `writeup.md` file** with the following structure:

```markdown
# Your Writeup Title

**Category:** Web  
**Event:** Event Name  
**Difficulty:** Medium  
**Date:** 2024-08-22  
**Author:** Your Name

## Description

Brief description of the challenge...

## Solution

Your detailed solution...
```

3. **Update the index** by running:
   ```bash
   node scripts/build-writeups.js --rebuild
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality
- `node scripts/build-writeups.js` - Manage writeups

## 🎨 Tech Stack

### Frontend

- **Next.js 15.3.0** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.0** - Type safety
- **Tailwind CSS 4.0** - Utility-first CSS framework

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Swiper** - Touch slider component

### Content Processing

- **React Markdown** - Markdown rendering
- **Gray Matter** - Frontmatter parsing
- **Highlight.js** - Code syntax highlighting
- **Remark/Rehype** - Markdown processing pipeline

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy** automatically on push to main branch

### Manual Deployment

1. **Build the application**

   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding Writeups

- Follow the writeup template format
- Include clear explanations and solution steps
- Add relevant screenshots or diagrams
- Test your writeup locally before submitting

### Code Contributions

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Test your changes thoroughly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Mounir Mostefai** currently the co-lead of Shellmates - [@mounir19000](https://github.com/mounir19000)

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Contact the maintainers
- Check the [How to Submit](http://localhost:3000/HowToSubmit) page for
  guidelines

## 🎖️ Acknowledgments

- Thanks to all CTF organizers and the cybersecurity community
- Inspired by the need for quality educational content
- Built with ❤️ by the Shellmates community

---

**Happy Hacking!** 🎯
