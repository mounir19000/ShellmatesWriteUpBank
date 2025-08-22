import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  GitBranch,
  CheckCircle,
  AlertCircle,
  Code,
  Folder,
  Terminal,
} from "lucide-react";

function HowToSubmit() {
  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="pt-8 md:pt-14 lg:pt-20">
        <div className="mx-auto px-5 sm:px-16 lg:px-28">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
              How to Submit a Writeup
            </h1>
            <p className="text-[#A9A8B3] text-base md:text-lg lg:text-xl px-2">
              Share your CTF solutions with the Shellmates community. Follow
              this guide to submit your writeups properly.
            </p>
          </div>
        </div>
      </div>

      <div className=" px-5 sm:px-16 lg:px-28 pb-2">
        {/* GitHub Setup */}
        <Card className="mb-8 bg-gradient-to-r from-[#161E19] to-[#2C3A32] border-[#59D07A] border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-[#7EE787]" />
              Step 0: GitHub Repository Setup
            </CardTitle>
            <CardDescription className="text-[#A9A8B3]">
              Before creating writeups, you need to set up your development
              environment
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-[#E6E6E6]">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7EE787] text-black flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Fork & Clone the Repository
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <ol className="list-decimal list-inside space-y-2 text-[#A9A8B3]">
                  <li>
                    Go to the{" "}
                    <a
                      href="https://github.com/mounir19000/ShellmatesWriteUpBank"
                      className="text-[#7EE787] hover:text-[#2EFF6C] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ShellmatesWriteUpBank repository
                    </a>
                  </li>
                  <li>
                    Click the &quot;Fork&quot; button to create your own copy
                  </li>
                  <li>Clone your forked repository to your local machine:</li>
                </ol>
                <pre className="text-[#7EE787] text-sm mt-3 bg-[#272C34] p-2 rounded">{`git clone https://github.com/YOUR_USERNAME/ShellmatesWriteUpBank.git
cd ShellmatesWriteUpBank`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7EE787] text-black flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Create a New Branch
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <p className="text-[#A9A8B3] mb-2">
                  Always create a new branch for your writeup contributions:
                </p>
                <pre className="text-[#7EE787] text-sm bg-[#272C34] p-2 rounded">{`git checkout -b writeup/your-writeup-name
# Example: git checkout -b writeup/pwn24web01-sql-injection`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#7EE787] text-black flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Install Dependencies
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm bg-[#272C34] p-2 rounded">{`npm install`}</pre>
              </div>
            </div>

            <div className="bg-[#272C34] p-4 rounded-lg border-l-4 border-[#7EE787]">
              <p className="text-[#7EE787] font-semibold mb-2">🔥 Important:</p>
              <p className="text-[#E6E6E6] text-sm">
                Never commit directly to the main branch! Always work on feature
                branches and create pull requests. This ensures code quality and
                allows for proper review.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Overview */}
        <Card className="mb-8 bg-gradient-to-r from-[#161E19] to-[#2C3A32] border-[#59D07A] border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#7EE787]" />
              Submission Process Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#E6E6E6]">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7EE787] text-black flex items-center justify-center font-bold">
                  0
                </div>
                <span>Setup GitHub repo</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7EE787] text-black flex items-center justify-center font-bold">
                  1
                </div>
                <span>Prepare your writeup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7EE787] text-black flex items-center justify-center font-bold">
                  2
                </div>
                <span>Use our creation script</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7EE787] text-black flex items-center justify-center font-bold">
                  3
                </div>
                <span>Submit via GitHub PR</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Method 1: Using the Script */}
        <Card className="mb-8 bg-[#161E19] border-[#272C34]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Terminal className="h-5 w-5 text-[#7EE787]" />
              Method 1: Using the Automated Script (Recommended)
            </CardTitle>
            <CardDescription className="text-[#A9A8B3]">
              The easiest way to create and submit a writeup
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Step 1: Prepare Your Content
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <p className="text-[#E6E6E6] mb-3">
                  Create a folder called{" "}
                  <code className="bg-[#272C34] px-2 py-1 rounded text-[#7EE787]">
                    YourWriteUp
                  </code>{" "}
                  in{" "}
                  <code className="bg-[#272C34] px-2 py-1 rounded text-[#7EE787]">
                    scripts/
                  </code>{" "}
                  with:
                </p>
                <ul className="list-disc list-inside text-[#A9A8B3] space-y-1">
                  <li>
                    <code>writeup.md</code> - Your writeup content (optional -
                    can be created automatically)
                  </li>
                  <li>
                    <code>images/</code> - Any images or screenshots (optional)
                  </li>
                  <li>
                    <code>challenge/</code> - Challenge files (optional)
                  </li>
                </ul>
                <div className="mt-3 p-3 bg-[#272C34] rounded">
                  <p className="text-[#7EE787] text-sm">
                    💡 <strong>Tip:</strong> You can just create the folder and
                    run the script - it will automatically create a writeup.md
                    template with proper metadata!
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Step 2: Run the Creation Script
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm">{`cd scripts
node build-writeups.js`}</pre>
              </div>
              <p className="text-[#A9A8B3] mt-2">
                The script will interactively ask you for:
              </p>
              <ul className="list-disc list-inside text-[#A9A8B3] mt-2 space-y-1">
                <li>Title of your writeup</li>
                <li>Category (Web, Crypto, Pwn, etc.)</li>
                <li>Event name (PWNYcup, Hackini, etc.)</li>
                <li>Difficulty level (Easy, Medium, Hard)</li>
                <li>Date of the challenge</li>
                <li>Brief description</li>
                <li>Author name</li>
              </ul>
              <div className="mt-3 p-3 bg-[#272C34] rounded">
                <p className="text-[#7EE787] text-sm">
                  ✨ <strong>Automatic Features:</strong>
                  <br />• Generates unique writeup ID (e.g., PWN24WEB01)
                  <br />• Creates proper metadata header in your writeup.md
                  <br />• Automatically updates the index.json file
                  <br />• Moves files to the correct location in
                  public/writeups/
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Step 3: Submit Your Changes via Pull Request
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg space-y-4">
                <div>
                  <p className="text-[#E6E6E6] mb-2">
                    1. Add and commit your changes:
                  </p>
                  <pre className="text-[#7EE787] text-sm bg-[#272C34] p-2 rounded">{`git add .
git commit -m "Add writeup: [Your Title]"`}</pre>
                </div>

                <div>
                  <p className="text-[#E6E6E6] mb-2">2. Push to your branch:</p>
                  <pre className="text-[#7EE787] text-sm bg-[#272C34] p-2 rounded">{`git push origin writeup/your-writeup-name`}</pre>
                </div>

                <div>
                  <p className="text-[#E6E6E6] mb-2">
                    3. Create a Pull Request:
                  </p>
                  <ul className="list-disc list-inside text-[#A9A8B3] space-y-1 ml-4">
                    <li>Go to your forked repository on GitHub</li>
                    <li>Click &quot;Compare & pull request&quot;</li>
                    <li>Add a descriptive title and description</li>
                    <li>Submit the pull request for review</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#272C34] rounded border-l-4 border-[#7EE787]">
                <p className="text-[#7EE787] text-sm">
                  ✅ <strong>Best Practice:</strong> Your pull request will be
                  reviewed by maintainers before being merged. This ensures
                  quality and consistency across all writeups.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Method 2: Manual Submission */}
        <Card className="mb-8 bg-[#161E19] border-[#272C34]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-[#7EE787]" />
              Method 2: Manual Submission
            </CardTitle>
            <CardDescription className="text-[#A9A8B3]">
              For advanced users or custom setups
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                File Structure
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm">{`public/writeups/
├── [WRITEUP_ID]/
│   ├── writeup.md
│   ├── images/ (optional)
│   └── challenge/ (optional)
└── index.json`}</pre>
              </div>
              <p className="text-[#A9A8B3] mt-2 text-sm">
                ⚠️ <strong>Note:</strong> Manual submission requires updating
                both the writeup files AND the index.json file. Using the
                automated script is highly recommended.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Writeup ID Format
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <p className="text-[#E6E6E6] mb-2">
                  Format:{" "}
                  <code className="bg-[#272C34] px-2 py-1 rounded text-[#7EE787]">
                    [EVENT][YEAR][CATEGORY][NUMBER]
                  </code>
                </p>
                <p className="text-[#A9A8B3] text-sm">
                  Example:{" "}
                  <code className="bg-[#272C34] px-2 py-1 rounded text-[#7EE787]">
                    PWN24WEB01
                  </code>{" "}
                  (PWNYcup 2024 Web challenge #1)
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Update index.json
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm">{`{
  "id": "PWN24WEB01",
  "title": "Your Writeup Title",
  "category": "Web Exploitation",
  "event": "PWNYcup",
  "difficulty": "Medium",
  "date": "2024-08-22",
  "description": "Brief description",
  "author": "Your Name"
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Writeup Metadata Format
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <p className="text-[#E6E6E6] mb-2">
                  Your writeup.md should start with this metadata header:
                </p>
                <pre className="text-[#7EE787] text-sm">{`# Your Writeup Title

**Category:** Web Exploitation  
**Event:** PWNYcup  
**Difficulty:** Medium  
**Date:** 2024-08-22  
**Author:** Your Name

## Description

Your writeup content starts here...`}</pre>
              </div>
              <p className="text-[#A9A8B3] mt-2 text-sm">
                💡 The automated script creates this format automatically!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Rebuilding Index */}
        <Card className="mb-8 bg-[#161E19] border-[#272C34]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Terminal className="h-5 w-5 text-[#7EE787]" />
              Rebuilding the Index
            </CardTitle>
            <CardDescription className="text-[#A9A8B3]">
              If you need to regenerate the index.json from existing writeups
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-[#E6E6E6]">
                If the index.json file gets corrupted or you need to rebuild it
                from existing writeup files:
              </p>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm">{`cd scripts
node build-writeups.js --rebuild`}</pre>
              </div>
              <p className="text-[#A9A8B3] text-sm">
                This command will scan all existing writeup directories and
                recreate the index.json file automatically.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Categories & Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-[#161E19] border-[#272C34]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Code className="h-5 w-5 text-[#7EE787]" />
                Supported Categories
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Exploitation",
                  "Binary Exploitation",
                  "Reverse Engineering",
                  "Cryptography",
                  "Forensics",
                  "OSINT",
                  "Steganography",
                  "Hardware",
                  "Mobile",
                  "Pwn",
                  "Miscellaneous",
                ].map((category) => (
                  <Badge
                    key={category}
                    variant="outline"
                    className="border-[#7E848F] text-[#A9A8B3]"
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#161E19] border-[#272C34]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Folder className="h-5 w-5 text-[#7EE787]" />
                Supported Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "PWNYcup",
                  "Hackini",
                  "Besides",
                  "HackTillShour",
                  "HackTillEid",
                  "MiniCTF",
                ].map((event) => (
                  <Badge
                    key={event}
                    variant="outline"
                    className="border-[#7E848F] text-[#A9A8B3]"
                  >
                    {event}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guidelines */}
        <Card className="mb-8 bg-[#161E19] border-[#272C34]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="h-5 w-5 text-[#7EE787]" />
              Writeup Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Clear and Detailed</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Explain your solution step-by-step with screenshots and code
                    snippets
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">
                    Use the Automated Script
                  </p>
                  <p className="text-[#A9A8B3] text-sm">
                    The script automatically generates proper metadata headers
                    and updates the index
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Educational Value</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Focus on teaching others and explaining concepts
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Include Resources</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Add references, tools used, and useful links
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Respect CTF Rules</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Only submit writeups after the competition ends
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pull Request Guidelines */}
        <Card className="mb-8 bg-[#161E19] border-[#272C34]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <GitBranch className="h-5 w-5 text-[#7EE787]" />
              Pull Request Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Descriptive Title</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Use format: &quot;Add writeup: [Challenge Name] - [Event]
                    [Year]&quot;
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Clear Description</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Explain what challenge you solved and any special techniques
                    used
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#7EE787] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Test Your Changes</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Run the development server locally to ensure everything
                    works
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Follow Branch Naming</p>
                  <p className="text-[#A9A8B3] text-sm">
                    Use &quot;writeup/challenge-name&quot; or
                    &quot;writeup/event-category-name&quot; format
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default HowToSubmit;
