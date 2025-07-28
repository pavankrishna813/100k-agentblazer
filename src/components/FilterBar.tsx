"use client";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const categories = [
  "All Events",
  "AI & Machine Learning",
  "Blockchain",
  "Cloud Computing",
  "Data Science",
  "DevOps",
  "Mobile Development",
  "Web Development",
  "Cybersecurity",
  "IoT",
  "Robotics",
  "Networking",
];

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const FilterBar = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) => {
  const [showAllFilters, setShowAllFilters] = useState(false);

  const displayedCategories = showAllFilters
    ? categories
    : categories.slice(0, 6);

  return (
    <div className="bg-background border-b border-border py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Find Events Near You
          </h2>
          <p className="text-muted-foreground">
            Discover SmartBridge community events in your area
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for events in your city..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 h-12 text-base"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {displayedCategories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "filter-active" : "filter"}
              size="sm"
              onClick={() => onFilterChange(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Show more/less toggle */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllFilters(!showAllFilters)}
            className="text-primary hover:text-primary-foreground"
          >
            {showAllFilters ? (
              <>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Show Less
              </>
            ) : (
              <>
                Show More
                <ChevronRight className="h-4 w-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
