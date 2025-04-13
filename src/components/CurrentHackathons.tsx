
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Function to fetch hackathon data
const fetchHackathons = async () => {
  try {
    // In a real app, you would fetch from your API endpoint
    // For now, we'll simulate an API call using our existing logic from Hackathons.tsx
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Import needed data
    const { hackathons } = await import("@/data/mockData");
    
    // Get only current or upcoming hackathons (those that end after today)
    const today = new Date();
    const currentHackathons = hackathons
      .filter(h => new Date(h.endDate) >= today)
      .map(h => {
        // Generate random participant count between 10-50
        const participantCount = h.participants.length;
        
        return {
          id: h.id.toString(),
          name: h.name,
          description: h.description,
          location: h.location,
          date: h.date,
          endDate: h.endDate,
          image: h.image,
          participants: participantCount,
          participantDetails: Array(Math.min(participantCount, 5)).fill(0).map((_, i) => ({
            id: `participant-${i}`,
            name: ["Arjun Sharma", "Priya Patel", "Vikram Singh", "Ananya Gupta", "Rohan Mehta"][i],
            avatar: [`https://i.pravatar.cc/150?u=arjun${i}`, `https://i.pravatar.cc/150?u=priya${i}`, null, `https://i.pravatar.cc/150?u=ananya${i}`, null][i]
          })),
          mode: Math.random() > 0.5 ? "offline" : "hybrid" as "offline" | "hybrid"
        };
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    
    return currentHackathons;
  } catch (error) {
    console.error("Error fetching current hackathons:", error);
    throw new Error("Failed to fetch hackathon data");
  }
};

export default function CurrentHackathons() {
  const { toast } = useToast();
  
  // Fetch hackathon data using React Query
  const { data: hackathons, isLoading, error } = useQuery({
    queryKey: ['currentHackathons'],
    queryFn: fetchHackathons,
  });
  
  // Calculate days until hackathon
  const getDaysUntil = (dateString: string) => {
    const hackathonDate = new Date(dateString);
    const today = new Date();
    const diffTime = hackathonDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Handle joining a hackathon
  const handleJoinHackathon = (hackathonId: string) => {
    toast({
      title: "Join Request Sent",
      description: "Your request to join this hackathon has been sent to the organizers.",
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hackNexus-purple"></div>
      </div>
    );
  }

  if (error || !hackathons || hackathons.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No upcoming hackathons found. Check back later!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {hackathons.slice(0, 3).map(hackathon => {
        const daysUntil = getDaysUntil(hackathon.date);
        
        return (
          <Card key={hackathon.id} className="overflow-hidden hover-scale">
            <div className="relative h-48">
              <img 
                src={hackathon.image} 
                alt={hackathon.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${hackathon.mode === 'offline' ? 'bg-emerald-500' : 'bg-violet-600'} hover:${hackathon.mode === 'offline' ? 'bg-emerald-600' : 'bg-violet-700'}`}>
                  {hackathon.mode === 'offline' ? 'In Person' : 'Hybrid'}
                </Badge>
              </div>
              {daysUntil > 0 && (
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                  <Clock size={14} className="mr-1.5" />
                  {daysUntil} {daysUntil === 1 ? 'day' : 'days'} left
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg line-clamp-1">{hackathon.name}</CardTitle>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin size={14} className="mr-1.5" />
                {hackathon.location}
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              <div className="flex items-center mb-2 text-sm text-gray-600">
                <Calendar size={14} className="mr-1.5" />
                <span>
                  {new Date(hackathon.date).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {hackathon.description}
              </p>
              <div className="flex items-center">
                <Users size={14} className="text-gray-500 mr-1.5" />
                <span className="text-gray-500 text-sm">
                  {hackathon.participants} Participants
                </span>
              </div>
              <div className="flex -space-x-2 overflow-hidden mt-2">
                {hackathon.participantDetails.map((participant, idx) => (
                  <Avatar key={idx} className="h-6 w-6 border-2 border-white">
                    <AvatarImage src={participant.avatar || undefined} alt={participant.name} />
                    <AvatarFallback className="bg-hackNexus-purple text-white text-xs">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Link to={`/hackathons/${hackathon.id}`} className="w-full">
                <Button 
                  className="w-full bg-hackNexus-purple hover:bg-hackNexus-lightPurple"
                >
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
