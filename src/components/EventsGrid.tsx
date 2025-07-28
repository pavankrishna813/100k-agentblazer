"use client";
import { useState } from "react";
import EventCard from "../components/EventCard";
import FilterBar from "./FilterBar";
// import avatar1 from "@/assets/avatar-1.jpg";
// import avatar2 from "@/assets/avatar-2.jpg";
// import avatar3 from "@/assets/avatar-3.jpg";
// import avatar4 from "@/assets/avatar-4.jpg";

const mockEvents = [
  {
    id: 1,
    title: "AI & Machine Learning Workshop",
    description:
      "Join us for an intensive workshop on the latest AI and ML technologies. Learn practical applications and hands-on implementation.",
    date: "Jan 25, 2025",
    time: "6:00 PM",
    location: "San Francisco",
    attendees: 45,
    category: "AI & Machine Learning",
    avatar: "/avatar-1.jpg",
    isOnline: false,
  },
  {
    id: 2,
    title: "Blockchain Development Bootcamp",
    description:
      "Comprehensive bootcamp covering blockchain fundamentals, smart contracts, and decentralized application development.",
    date: "Jan 28, 2025",
    time: "2:00 PM",
    location: "New York",
    attendees: 32,
    category: "Blockchain",
    avatar: "/avatar-2.jpg",
    isOnline: true,
  },
  {
    id: 3,
    title: "Cloud Computing Summit",
    description:
      "Explore the latest trends in cloud computing, serverless architectures, and container orchestration.",
    date: "Feb 2, 2025",
    time: "10:00 AM",
    location: "Seattle",
    attendees: 78,
    category: "Cloud Computing",
    avatar: "/avatar-1.jpg",
    isOnline: false,
  },
  {
    id: 4,
    title: "Data Science Meetup",
    description:
      "Monthly meetup for data scientists and analysts. Share insights, discuss methodologies, and network with peers.",
    date: "Feb 5, 2025",
    time: "7:00 PM",
    location: "Austin",
    attendees: 23,
    category: "Data Science",
    avatar: "/avatar-2.jpg",
    isOnline: false,
  },
  {
    id: 5,
    title: "DevOps Automation Workshop",
    description:
      "Learn about CI/CD pipelines, infrastructure as code, and automated testing strategies.",
    date: "Feb 8, 2025",
    time: "1:00 PM",
    location: "Denver",
    attendees: 56,
    category: "DevOps",
    avatar: "/avatar-3.jpg",
    isOnline: true,
  },
  {
    id: 6,
    title: "Mobile Development Conference",
    description:
      "Two-day conference covering iOS, Android, and cross-platform mobile development frameworks.",
    date: "Feb 12, 2025",
    time: "9:00 AM",
    location: "Los Angeles",
    attendees: 124,
    category: "Mobile Development",
    avatar: "/avatar-4.jpg",
    isOnline: false,
  },
];

const EventsGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All Events");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesFilter =
      activeFilter === "All Events" || event.category === activeFilter;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No events found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                location={event.location}
                attendees={event.attendees}
                category={event.category}
                avatar={event.avatar}
                isOnline={event.isOnline}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsGrid;
