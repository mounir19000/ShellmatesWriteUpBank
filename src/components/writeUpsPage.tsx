"use client";

import type React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Filter,
  Code,
  Lock,
  FileDigit,
  Binary,
  Eye,
  Globe,
  ImageIcon,
  ChevronDown,
  X,
} from "lucide-react";

// Map categories to colors and icons
const categoryInfo: Record<string, { color: string; icon: React.ReactNode }> = {
  web: {
    color: "bg-blue-900/60 text-blue-300 border-blue-700",
    icon: <Code className="h-4 w-4 mr-1" />,
  },
  reverse: {
    color: "bg-purple-900/60 text-purple-300 border-purple-700",
    icon: <FileDigit className="h-4 w-4 mr-1" />,
  },
  forensics: {
    color: "bg-emerald-900/60 text-emerald-300 border-emerald-700",
    icon: <Eye className="h-4 w-4 mr-1" />,
  },
  crypto: {
    color: "bg-amber-900/60 text-amber-300 border-amber-700",
    icon: <Lock className="h-4 w-4 mr-1" />,
  },
  pwn: {
    color: "bg-red-900/60 text-red-300 border-red-700",
    icon: <Binary className="h-4 w-4 mr-1" />,
  },
  osint: {
    color: "bg-indigo-900/60 text-indigo-300 border-indigo-700",
    icon: <Globe className="h-4 w-4 mr-1" />,
  },
  stego: {
    color: "bg-fuchsia-900/60 text-fuchsia-300 border-fuchsia-700",
    icon: <ImageIcon className="h-4 w-4 mr-1" />,
  },
  hardware: {
    color: "bg-orange-900/60 text-orange-300 border-orange-700",
    icon: <Binary className="h-4 w-4 mr-1" />,
  },
  mobile: {
    color: "bg-cyan-900/60 text-cyan-300 border-cyan-700",
    icon: <Code className="h-4 w-4 mr-1" />,
  },
};

// Difficulty levels with colors
const difficultyColors: Record<string, string> = {
  Easy: "bg-green-900/60 text-green-300 border-green-700",
  Medium: "bg-yellow-900/60 text-yellow-300 border-yellow-700",
  Hard: "bg-red-900/60 text-red-300 border-red-700",
};

export default function WriteUpsPage() {
  const [writeups, setWriteups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWriteups = async () => {
      try {
        setLoading(true);
        const response = await fetch("/writeups/index.json");
        if (!response.ok) {
          throw new Error("Failed to fetch writeups");
        }
        const data = await response.json();
        setWriteups(data);
      } catch (error) {
        console.error("Error loading writeups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWriteups();
  }, []);

  // Events for filtering
  const events = Array.from(new Set(writeups.map((w) => w.event)));

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>(
    []
  );
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activeTab, setActiveTab] = useState("category");

  // Get unique categories
  const categories = Array.from(new Set(writeups.map((w) => w.category)));

  // Get unique difficulties
  const difficulties = Array.from(new Set(writeups.map((w) => w.difficulty)));

  // Toggle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Toggle difficulty selection
  const toggleDifficulty = (difficulty: string) => {
    if (selectedDifficulties.includes(difficulty)) {
      setSelectedDifficulties(
        selectedDifficulties.filter((d) => d !== difficulty)
      );
    } else {
      setSelectedDifficulties([...selectedDifficulties, difficulty]);
    }
  };

  // Toggle event selection
  const toggleEvent = (event: string) => {
    if (selectedEvents.includes(event)) {
      setSelectedEvents(selectedEvents.filter((e) => e !== event));
    } else {
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDifficulties([]);
    setSelectedEvents([]);
    setSearchQuery("");
  };

  // Filter writeups based on search and filters
  const filteredWriteups = writeups.filter((writeup) => {
    // Search query filter
    const matchesSearch =
      searchQuery === "" ||
      writeup.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      writeup.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(writeup.category);

    // Difficulty filter
    const matchesDifficulty =
      selectedDifficulties.length === 0 ||
      selectedDifficulties.includes(writeup.difficulty);

    // Event filter
    const matchesEvent =
      selectedEvents.length === 0 || selectedEvents.includes(writeup.event);

    return (
      matchesSearch && matchesCategory && matchesDifficulty && matchesEvent
    );
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with search */}
      <div className="py-8 md:py-14 lg:py-20">
        <div className="mx-auto px-5 sm:px-16 lg:px-28">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white">
              CTF Writeups
            </h1>
            <p className="text-[#A9A8B3] text-base md:text-lg lg:text-xl px-2">
              Explore detailed walkthroughs of Capture The Flag challenges from
              various competitions
            </p>
          </div>

          <div className="relative max-w-xl md:max-w-2xl mx-auto">
            <Input
              type="text"
              placeholder="Search for writeups..."
              className="pl-3.5 py-6 text-base md:text-lg bg-black bg-opacity-90 border-[#59D07A] text-white placeholder:text-[#727274]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="filter"
              className="absolute inset-y-0 right-0 px-2 md:px-3 flex items-center justify-center text-[#7EE787] hover:text-[#2EFF6C] h-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              <div className="flex px-2 py-1 rounded-sm gap-1.5 items-center justify-center hover:bg-[#272C34]/50">
                <Filter className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
                <span className="hidden sm:inline cursor-pointer">Filters</span>
                <ChevronDown
                  className={`h-3 w-3 md:h-4 md:w-4 ml-0 sm:ml-1 transition-transform ${
                    showFilters ? "rotate-180" : ""
                  }`}
                />
              </div>
            </Button>
          </div>

          {/* Filters section */}
          {showFilters && (
            <div className="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-4 md:mt-6 p-4 md:p-6 rounded-lg shadow-lg border border-[#59D07A] animate-in fade-in-50 slide-in-from-top-5 duration-300 bg-black bg-opacity-90">
              <div className="flex justify-between items-center mb-3 md:mb-4">
                <h3 className="text-base md:text-lg font-bold text-white">
                  Filter Writeups
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-[#7EE787] hover:text-[#2EFF6C] hover:bg-[#272C34]/50 h-8 px-2 md:px-3"
                >
                  <X className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span className="text-xs md:text-sm cursor-pointer">
                    Clear all
                  </span>
                </Button>
              </div>

              <Tabs
                defaultValue="category"
                value={activeTab}
                onValueChange={setActiveTab}
                className="text-[#FFFFF]"
              >
                <TabsList className="mb-3 md:mb-4 bg-black h-9 md:h-10 p-1 border-1 border-[#59D07A]">
                  <TabsTrigger
                    value="category"
                    className="text-xs md:text-sm text-[#A9A9B3] cursor-pointer data-[state=active]:bg-[#272C34] data-[state=active]:text-[#7EE787] px-2 md:px-4"
                  >
                    Category
                  </TabsTrigger>
                  <TabsTrigger
                    value="difficulty"
                    className="text-xs md:text-sm text-[#A9A9B3] cursor-pointer data-[state=active]:bg-[#272C34] data-[state=active]:text-[#7EE787] px-2 md:px-4"
                  >
                    Difficulty
                  </TabsTrigger>
                  <TabsTrigger
                    value="event"
                    className="text-xs md:text-sm text-[#A9A9B3] cursor-pointer data-[state=active]:bg-[#272C34] data-[state=active]:text-[#7EE787] px-2 md:px-4"
                  >
                    Event
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="category" className="mt-0 space-y-4">
                  <div className="flex flex-wrap gap-2 md:gap-2">
                    {categories.map((category) => (
                      <Badge
                        key={category}
                        variant={
                          selectedCategories.includes(category)
                            ? "default"
                            : "outline"
                        }
                        className={`cursor-pointer text-xs md:text-sm py-1 rounded-xl ${
                          selectedCategories.includes(category)
                            ? categoryInfo[category]?.color
                            : "border-[#7E848F] text-[#A9A8B3] hover:bg-[#272C34]"
                        }`}
                        onClick={() => toggleCategory(category)}
                      >
                        {categoryInfo[category]?.icon}
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="difficulty" className="mt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {difficulties.map((difficulty) => (
                      <Badge
                        key={difficulty}
                        variant={
                          selectedDifficulties.includes(difficulty)
                            ? "default"
                            : "outline"
                        }
                        className={`cursor-pointer text-xs md:text-sm py-1 ${
                          selectedDifficulties.includes(difficulty)
                            ? difficultyColors[difficulty]
                            : "border-[#7E848F] text-[#A9A8B3] hover:bg-[#272C34]"
                        }`}
                        onClick={() => toggleDifficulty(difficulty)}
                      >
                        {difficulty}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="event" className="mt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {events.map((event) => (
                      <Badge
                        key={event}
                        variant={
                          selectedEvents.includes(event) ? "default" : "outline"
                        }
                        className={`cursor-pointer text-xs md:text-sm py-1 ${
                          selectedEvents.includes(event)
                            ? "bg-teal-900/60 text-teal-300 border-teal-700"
                            : "border-[#7E848F] text-[#A9A8B3] hover:bg-[#272C34]"
                        }`}
                        onClick={() => toggleEvent(event)}
                      >
                        {event}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="mt-3 md:mt-4 flex items-center justify-between text-xs md:text-sm text-[#7E848F]">
                <span>
                  Showing {filteredWriteups.length} of {writeups.length}{" "}
                  writeups
                </span>
                {(selectedCategories.length > 0 ||
                  selectedDifficulties.length > 0 ||
                  selectedEvents.length > 0) && (
                  <span className="text-[#7EE787]">Filters applied</span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results section */}
      <div className="flex-grow">
        <div className="mx-auto px-5 sm:px-16 lg:px-28">
          {loading ? (
            <div className="text-center py-12 md:py-16 text-white">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#7EE787] mx-auto mb-4" />
              <p className="text-lg">Loading writeups...</p>
            </div>
          ) : filteredWriteups.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-9">
                {filteredWriteups.map((writeup) => (
                  <Card
                    className="h-full px-6 py-5 flex flex-col justify-between gap-3 hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] bg-gradient-to-t from-[#161E19] to-[#2C3A32] rounded-3xl border-0"
                    key={writeup.id}
                  >
                    <CardHeader className="flex flex-col gap-2">
                      <CardTitle className="text-lg md:text-xl font-bold text-white line-clamp-2">
                        {writeup.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        <Badge
                          className={`text-xs py-0.5 ${
                            categoryInfo[writeup.category]?.color || ""
                          }`}
                        >
                          {categoryInfo[writeup.category]?.icon}
                          {writeup.category.charAt(0).toUpperCase() +
                            writeup.category.slice(1)}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={`text-xs py-0.5 ${
                            difficultyColors[writeup.difficulty]
                          }`}
                        >
                          {writeup.difficulty}
                        </Badge>
                      </div>
                      <div className="w-full text-[#A9A8B3] text-xs flex flex-row justify-between gap-1">
                        <span className="truncate">{writeup.event}</span>
                        <span>{writeup.date}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="line-clamp-3 text-[#7E848F] text-xs">
                        {writeup.description}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link
                        href={`/writeups/${writeup.id}`}
                        className="w-full flex justify-end"
                      >
                        <Button className="bg-[#3fa15b] hover:bg-[#22b84f] text-white font-medium text-sm md:text-base px-10 rounded-xl">
                          Read More
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Scroll indicator */}
              {filteredWriteups.length > 6 && (
                <div className="flex justify-center mb-4 mt-4 md:mt-6 text-[#7EE787] animate-bounce">
                  <ChevronDown className="h-5 w-5 md:h-6 md:w-6" />
                  <span className="sr-only">Scroll for more</span>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12 md:py-16">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                No writeups found
              </h3>
              <p className="text-[#A9A8B3] mb-4 md:mb-6 px-4">
                Try adjusting your search or filters to find what you`re looking
                for.
              </p>
              <Button
                onClick={clearFilters}
                className="bg-[#2EFF6C] hover:bg-[#7EE787] text-[#112318] font-medium"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
