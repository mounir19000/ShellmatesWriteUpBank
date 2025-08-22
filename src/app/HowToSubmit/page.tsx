import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Upload,
  CheckCircle,
  AlertCircle,
  Code,
  Folder,
  Terminal,
} from "lucide-react";
import Link from "next/link";

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

      <div className=" px-5 sm:px-16 lg:px-28 pb-10">
        {/* Quick Overview */}
        <Card className="mb-8 bg-gradient-to-r from-[#161E19] to-[#2C3A32] border-[#59D07A] border">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#7EE787]" />
              Submission Process Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-[#E6E6E6]">
            <div className="grid md:grid-cols-3 gap-4">
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
                <span>Submit via GitHub</span>
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
                    public/script/
                  </code>{" "}
                  with:
                </p>
                <ul className="list-disc list-inside text-[#A9A8B3] space-y-1">
                  <li>
                    <code>writeup.md</code> - Your writeup content
                  </li>
                  <li>
                    <code>images/</code> - Any images or screenshots (optional)
                  </li>
                  <li>
                    <code>challenge/</code> - Challenge files (optional)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Step 2: Run the Creation Script
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm">{`cd public/script
node createWriteUp.js`}</pre>
              </div>
              <p className="text-[#A9A8B3] mt-2">
                The script will ask you for details like title, category, event,
                difficulty, and description.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Step 3: Submit Your Changes
              </h3>
              <div className="bg-[#0D1117] p-4 rounded-lg">
                <pre className="text-[#7EE787] text-sm">{`git add .
git commit -m "Add writeup: [Your Title]"
git push origin main`}</pre>
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
                <pre className="text-[#7EE787] text-sm">{`writeups/
├── [WRITEUP_ID]/
│   ├── writeup.md
│   ├── images/ (optional)
│   └── challenge/ (optional)
└── index.json`}</pre>
              </div>
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
  "category": "web",
  "event": "PWNYcup",
  "difficulty": "Medium",
  "date": "2024-08-21",
  "description": "Brief description",
  "author": "Your Name"
}`}</pre>
              </div>
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

        {/* CTA */}
        <div className="text-center">
          <p className="text-[#A9A8B3] mb-6">
            Ready to share your knowledge with the community?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#59D07A] hover:bg-[#2EFF6C] text-[#112318] font-medium">
              <Upload className="h-4 w-4 mr-2" />
              Start Writing
            </Button>
            <Link href="/">
              <Button
                variant="outline"
                className="border-[#7E848F] text-[#A9A8B3] hover:bg-[#272C34]"
              >
                Browse Existing Writeups
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToSubmit;
