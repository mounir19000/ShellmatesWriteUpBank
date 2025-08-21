"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Trophy, Tag } from "lucide-react";
import "highlight.js/styles/github-dark.css";

// Category info mapping (same as writeUpsPage)
const categoryInfo: Record<string, { color: string; icon: React.ReactNode }> = {
  web: {
    color: "bg-blue-900/60 text-blue-300 border-blue-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  reverse: {
    color: "bg-purple-900/60 text-purple-300 border-purple-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  forensics: {
    color: "bg-emerald-900/60 text-emerald-300 border-emerald-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  crypto: {
    color: "bg-amber-900/60 text-amber-300 border-amber-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  pwn: {
    color: "bg-red-900/60 text-red-300 border-red-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  osint: {
    color: "bg-indigo-900/60 text-indigo-300 border-indigo-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  stego: {
    color: "bg-fuchsia-900/60 text-fuchsia-300 border-fuchsia-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  hardware: {
    color: "bg-orange-900/60 text-orange-300 border-orange-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  mobile: {
    color: "bg-cyan-900/60 text-cyan-300 border-cyan-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
  "Binary Exploitation": {
    color: "bg-red-900/60 text-red-300 border-red-700",
    icon: <Tag className="h-4 w-4 mr-1" />,
  },
};

// Difficulty colors mapping
const difficultyColors: Record<string, string> = {
  Easy: "bg-green-900/60 text-green-300 border-green-700",
  Medium: "bg-yellow-900/60 text-yellow-300 border-yellow-700",
  Hard: "bg-red-900/60 text-red-300 border-red-700",
};

interface WriteupMetadata {
  id: string;
  title: string;
  category: string;
  event: string;
  difficulty: string;
  date: string;
  description: string;
  author?: string;
}

// Function to remove metadata from markdown content
const removeMarkdownMetadata = (markdownContent: string): string => {
  const lines = markdownContent.split("\n");
  let startIndex = 0;

  // Skip the title if it exists (starts with #)
  if (lines[startIndex]?.trim().startsWith("#")) {
    startIndex++;
  }

  // Skip empty lines
  while (startIndex < lines.length && lines[startIndex]?.trim() === "") {
    startIndex++;
  }

  // Skip metadata lines (lines starting with **Category:**, **Event:**, etc.)
  while (startIndex < lines.length) {
    const line = lines[startIndex]?.trim();
    if (
      line &&
      line.match(/^\*\*(Category|Event|Difficulty|Date|Author):\*\*/)
    ) {
      startIndex++;
    } else if (line === "") {
      // Skip empty lines between metadata
      startIndex++;
    } else {
      break;
    }
  }

  // Return the remaining content
  return lines.slice(startIndex).join("\n").trim();
};

const WriteupPage = () => {
  const { writeupId } = useParams();
  const [writeup, setWriteup] = useState<WriteupMetadata | null>(null);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWriteup = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch metadata
        const metadataResponse = await fetch("/writeups/index.json");
        if (!metadataResponse.ok) {
          throw new Error("Failed to fetch writeup metadata");
        }
        const writeups = await metadataResponse.json();
        const writeupMetadata = writeups.find(
          (w: WriteupMetadata) => w.id === writeupId
        );

        if (!writeupMetadata) {
          throw new Error("Writeup not found");
        }

        setWriteup(writeupMetadata);

        // Fetch markdown content
        try {
          const contentResponse = await fetch(
            `/writeups/${writeupId}/writeup.md`
          );
          if (contentResponse.ok) {
            const markdownContent = await contentResponse.text();
            // Remove metadata from the beginning of the markdown content
            const processedContent = removeMarkdownMetadata(markdownContent);
            setContent(processedContent);
          } else {
            // If no markdown file, create default content
            setContent(`## Description

${writeupMetadata.description}

## Solution

*This writeup is currently being prepared. Please check back later.*

---

*Want to contribute? Learn how to [submit a writeup](/HowToSubmit).*`);
          }
        } catch (contentError) {
          console.error("Error fetching content:", contentError);
          setContent(
            `*Error loading writeup content. Please try again later.*`
          );
        }
      } catch (error) {
        console.error("Error loading writeup:", error);
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (writeupId) {
      fetchWriteup();
    }
  }, [writeupId]);

  if (loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7EE787] mx-auto mb-4" />
          <p className="text-lg">Loading writeup...</p>
        </div>
      </div>
    );
  }

  if (error || !writeup) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-4xl font-bold mb-4 text-red-400">404</h1>
          <h2 className="text-2xl font-bold mb-4">Writeup Not Found</h2>
          <p className="text-[#A9A8B3] mb-6">
            {error ||
              "The writeup you're looking for doesn't exist or has been moved."}
          </p>
          <Link href="/">
            <Button className="bg-[#59D07A] hover:bg-[#2EFF6C] text-[#112318] font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <div className="border-b border-[#272C34]">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center text-[#7EE787] hover:text-[#2EFF6C] mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to writeups
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {writeup.title}
          </h1>

          <div className="flex flex-wrap gap-3 mb-4">
            <Badge
              className={`text-sm ${
                categoryInfo[writeup.category]?.color ||
                "bg-gray-900/60 text-gray-300 border-gray-700"
              }`}
            >
              {categoryInfo[writeup.category]?.icon}
              {writeup.category}
            </Badge>
            <Badge
              className={`text-sm ${
                difficultyColors[writeup.difficulty] ||
                "bg-gray-900/60 text-gray-300 border-gray-700"
              }`}
            >
              {writeup.difficulty}
            </Badge>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-[#A9A8B3]">
            <div className="flex items-center gap-1">
              <Trophy className="h-4 w-4" />
              {writeup.event}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {writeup.date}
            </div>
            {writeup.author && (
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {writeup.author}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-8">
        <article className="prose prose-invert prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mb-6 text-white border-b border-[#272C34] pb-2">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mb-4 mt-8 text-white">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mb-3 mt-6 text-white">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-[#E6E6E6] leading-relaxed">
                  {children}
                </p>
              ),
              code: (props) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const { inline, children, ...rest } = props as any;
                return inline ? (
                  <code
                    className="bg-[#161B22] text-[#F0F6FC] px-1.5 py-0.5 rounded text-sm"
                    {...rest}
                  >
                    {children}
                  </code>
                ) : (
                  <code
                    className="block bg-[#161B22] text-[#F0F6FC] p-4 rounded-lg overflow-x-auto"
                    {...rest}
                  >
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => (
                <pre className="bg-[#161B22] rounded-lg overflow-hidden mb-4">
                  {children}
                </pre>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 list-disc list-inside text-[#E6E6E6]">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 list-decimal list-inside text-[#E6E6E6]">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="mb-1">{children}</li>,
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-[#7EE787] pl-4 italic my-4 text-[#A9A8B3]">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-[#7EE787] hover:text-[#2EFF6C] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              img: ({ src, alt }) => (
                <Image
                  src={src || ""}
                  alt={alt || ""}
                  width={800}
                  height={600}
                  className="rounded-lg border border-[#272C34] max-w-full h-auto my-4"
                />
              ),
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

export default WriteupPage;
