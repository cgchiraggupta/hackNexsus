import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Search, Calendar, MapPin, Users, Clock, AlertCircle } from "lucide-react";
import { hackathons, users } from "@/data/mockData";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// API interface for hackathon data
interface HackathonEvent {
  id: string;
  name: string;
  description: string;
  location: string;
  city: string;
  date: string;
  endDate: string;
  image: string;
  url: string;
  participants: number;
  participantDetails?: ParticipantDetail[];
  organizer: string;
  mode: "online" | "offline" | "hybrid";
}

interface ParticipantDetail {
  id: string;
  name: string;
  avatar?: string;
}

// List of Indian names for participants
const indianNames = [
  { name: "Aarav Sharma", avatar: "https://i.pravatar.cc/150?u=aarav" },
  { name: "Aditi Patel", avatar: "https://i.pravatar.cc/150?u=aditi" },
  { name: "Arjun Singh", avatar: "https://i.pravatar.cc/150?u=arjun" },
  { name: "Diya Mehta", avatar: "https://i.pravatar.cc/150?u=diya" },
  { name: "Ishaan Kumar", avatar: "https://i.pravatar.cc/150?u=ishaan" },
  { name: "Kavya Gupta", avatar: "https://i.pravatar.cc/150?u=kavya" },
  { name: "Rohan Malhotra", avatar: "https://i.pravatar.cc/150?u=rohan" },
  { name: "Sanya Reddy", avatar: "https://i.pravatar.cc/150?u=sanya" },
  { name: "Vikram Joshi", avatar: "https://i.pravatar.cc/150?u=vikram" },
  { name: "Zara Iyer", avatar: "https://i.pravatar.cc/150?u=zara" },
  { name: "Kabir Bose", avatar: "https://i.pravatar.cc/150?u=kabir" },
  { name: "Ananya Mehra", avatar: "https://i.pravatar.cc/150?u=ananya" },
  { name: "Vihaan Kapoor", avatar: "https://i.pravatar.cc/150?u=vihaan" },
  { name: "Saanvi Verma", avatar: "https://i.pravatar.cc/150?u=saanvi" },
  { name: "Reyansh Choudhury", avatar: "https://i.pravatar.cc/150?u=reyansh" }
];

// Function to get random Indian participant names
const getRandomIndianParticipants = (count: number): ParticipantDetail[] => {
  // Shuffle the array and get the first 'count' elements
  const shuffled = [...indianNames]
    .sort(() => 0.5 - Math.random())
    .slice(0, count)
    .map((participant, index) => ({
      id: `participant-${index}`,
      name: participant.name,
      avatar: participant.avatar
    }));
  
  return shuffled;
};

// Function to fetch real hackathon data
const fetchHackathons = async (): Promise<HackathonEvent[]> => {
  try {
    // Simulating an API call - in a real app, replace with actual API endpoint
    // Example API call: const response = await fetch('https://api.example.com/hackathons/delhi-ncr');
    
    // For now, we'll transform our mock data to match the expected format
    const delhiNCRHackathons = hackathons.map(h => {
      const participantCount = h.participants.length;
      
      return {
        id: h.id.toString(),
        name: h.name,
        description: h.description,
        location: "Delhi NCR, India",
        city: "Delhi",
        date: h.date,
        endDate: h.endDate,
        image: h.image,
        url: `https://hacknexus.com/hackathons/${h.id}`,
        participants: participantCount,
        participantDetails: getRandomIndianParticipants(participantCount),
        organizer: "HackNexus Community",
        mode: Math.random() > 0.5 ? "offline" : "hybrid" as "offline" | "hybrid"
      };
    });
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return delhiNCRHackathons;
  } catch (error) {
    console.error("Error fetching hackathons:", error);
    throw new Error("Failed to fetch hackathon data. Please try again later.");
  }
};

export default function Hackathons() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  // Fetch hackathon data using React Query
  const { data: hackathonEvents, isLoading, error } = useQuery({
    queryKey: ['delhiNCRHackathons'],
    queryFn: fetchHackathons,
  });
  
  // Filter hackathons based on search query
  const filteredHackathons = hackathonEvents?.filter(hackathon => 
    searchQuery === "" || 
    hackathon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hackathon.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    hackathon.location.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];
  
  // Paginate the filtered hackathons
  const paginatedHackathons = filteredHackathons.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );
  
  const totalPages = Math.ceil(filteredHackathons.length / itemsPerPage);
  
  // Calculate days until hackathon
  const getDaysUntil = (dateString: string) => {
    const hackathonDate = new Date(dateString);
    const today = new Date();
    const diffTime = hackathonDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Handle adding a hackathon
  const handleAddHackathon = () => {
    toast({
      title: "Coming Soon",
      description: "The ability to add hackathons will be available soon!",
    });
  };

  // Handle joining a hackathon
  const handleJoinHackathon = (hackathonId: string) => {
    toast({
      title: "Join Request Sent",
      description: "Your request to join this hackathon has been sent to the organizers.",
    });
  };

  // Handle viewing hackathon details
  const handleViewDetails = (hackathonId: string) => {
    navigate(`/hackathons/${hackathonId}`);
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Delhi NCR Hackathons</h1>
          <p className="mt-2 text-lg text-gray-600">
            Discover upcoming hackathons in Delhi NCR region, join events, and find teammates
          </p>
        </div>
        
        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="max-w-md mx-auto">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Search Hackathons
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                id="search" 
                placeholder="Search by name, description, or location" 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        {/* Results Section */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            {isLoading ? "Loading hackathons..." : `${filteredHackathons.length} Hackathons Found`}
          </h2>
          <Button 
            className="bg-hackNexus-purple hover:bg-hackNexus-lightPurple"
            onClick={handleAddHackathon}
          >
            Add a Hackathon
          </Button>
        </div>
        
        {/* Loading state */}
        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hackNexus-purple"></div>
          </div>
        )}
        
        {/* Error state */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-red-500" />
            </div>
            <h3 className="text-lg font-medium text-red-800 mb-2">Unable to load hackathons</h3>
            <p className="text-red-600">
              There was an error loading the hackathon data. Please try again later.
            </p>
          </div>
        )}
        
        {/* Results grid */}
        {!isLoading && !error && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {paginatedHackathons.length > 0 ? (
                paginatedHackathons.map(hackathon => {
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
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">{hackathon.name}</CardTitle>
                            <CardDescription className="flex items-center mt-1">
                              <MapPin size={14} className="mr-1.5" />
                              {hackathon.location}
                            </CardDescription>
                          </div>
                          <Badge className="bg-hackNexus-purple hover:bg-hackNexus-purple">
                            {new Date(hackathon.date) > new Date() ? 'Upcoming' : 'In Progress'}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center mb-3 text-gray-600">
                          <Calendar size={16} className="mr-2" />
                          <span>
                            {new Date(hackathon.date).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {hackathon.description}
                        </p>
                        <div className="flex items-center mb-3 text-gray-600">
                          <span className="font-semibold mr-2">Organizer:</span> 
                          {hackathon.organizer}
                        </div>
                        <div className="flex items-center mb-2">
                          <Users size={16} className="text-gray-600 mr-2" />
                          <span className="text-gray-600 font-medium">
                            {hackathon.participants} Participants
                          </span>
                        </div>
                        <div className="flex -space-x-2 overflow-hidden">
                          {hackathon.participantDetails?.slice(0, 5).map((participant, idx) => (
                            <Avatar key={idx} className="h-8 w-8 border-2 border-white">
                              <AvatarImage src={participant.avatar} alt={participant.name} />
                              <AvatarFallback className="bg-hackNexus-purple text-white text-xs">
                                {participant.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                          {(hackathon.participants > 5) && (
                            <div className="inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                              +{hackathon.participants - 5}
                            </div>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button 
                          variant="outline" 
                          onClick={() => handleJoinHackathon(hackathon.id)}
                        >
                          Join Hackathon
                        </Button>
                        <Button 
                          className="bg-hackNexus-purple hover:bg-hackNexus-lightPurple"
                          onClick={() => handleViewDetails(hackathon.id)}
                        >
                          View Details
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <Search className="text-gray-500" size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">No hackathons found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or check back later for new events
                  </p>
                </div>
              )}
            </div>
            
            {/* Pagination */}
            {filteredHackathons.length > itemsPerPage && (
              <div className="mt-8">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1;
                      // Show first page, last page, and pages around current page
                      if (
                        page === 1 || 
                        page === totalPages || 
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink 
                              onClick={() => setCurrentPage(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      }
                      
                      // Show ellipsis
                      if (page === 2 || page === totalPages - 1) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </>
        )}
      </div>
    </Layout>
  );
}
