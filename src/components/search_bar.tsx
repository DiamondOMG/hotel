"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  on_search?: (query: string) => void;
}

export default function SearchBar({ on_search }: SearchBarProps) {
  const [search_query, set_search_query] = useState("");

  const handle_search = () => {
    if (on_search) {
      on_search(search_query);
    }
  };

  return (
    <div className="flex items-center gap-2 w-full max-w-2xl mx-auto">
      <div className="flex-1 relative">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="ค้นหาที่พัก สถานที่..."
          value={search_query}
          onChange={(e) => set_search_query(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handle_search()}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
        />
      </div>
      <Button
        onClick={handle_search}
        className="rounded-full px-6 py-3 h-auto bg-primary hover:bg-primary/90"
      >
        ค้นหา
      </Button>
    </div>
  );
}
