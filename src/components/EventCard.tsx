import { CalendarDays, MapPin, Users, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../components/ui/card";

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: string;
  avatar: string;
  isOnline?: boolean;
}

const EventCard = ({
  title,
  description,
  date,
  time,
  location,
  attendees,
  category,
  avatar,
  isOnline = false,
}: EventCardProps) => {
  return (
    <Card className="flex flex-col justify-between h-full group hover:shadow-card transition-all duration-300 hover:scale-105 animate-scale-in">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src={avatar}
              alt="Event organizer"
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                {category}
              </span>
              {isOnline && (
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                  Online
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pb-4 flex-1">
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{attendees} attendees</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button className="w-full transition-all duration-300 hover:bg-primary hover:text-white">
          Join Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
