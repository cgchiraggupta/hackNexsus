
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users, Clock, ArrowLeft, ExternalLink, Flag, Calendar } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";
import { hackathons } from "@/data/mockData";

interface HackathonEvent {
  id: string;
  name: string;
  description: string;
  date: string;
  endDate: string;
  location: string;
  teamSize: string;
  prize: string;
  participants: string[];
  image: string;
}

interface ParticipantDetail {
  id: string;
  name: string;
  avatar: string;
  skills: string[];
}

const indianNames = [
  "Aarav Patel", "Diya Sharma", "Aryan Verma", "Siya Kapoor", "Rohan Singh",
  "Priya Kumar", "Vivaan Gupta", "Anika Reddy", "Ishaan Yadav", "Neha Mehta",
  "Arjun Khanna", "Sara Joshi", "Reyansh Bajaj", "Kavya Iyer", "Veer Malhotra",
  "Aanya Menon", "Advait Chauhan", "Myra Desai", "Kabir Verma", "Shanaya Kapoor"
];

const getRandomIndianParticipants = (count: number): ParticipantDetail[] => {
  const participants: ParticipantDetail[] = [];
  for (let i = 0; i < count; i++) {
    const name = indianNames[Math.floor(Math.random() * indianNames.length)];
    const skills = ["JavaScript", "React", "Node.js", "Python", "HTML", "CSS"].sort(() => 0.5 - Math.random()).slice(0, 3);
    participants.push({
      id: `participant-${i}`,
      name: name,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      skills: skills,
    });
  }
  return participants;
};

const fetchHackathonDetails = async (hackathonId: string | undefined): Promise<HackathonEvent | undefined> => {
  if (!hackathonId) return undefined;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));

  const hackathon = hackathons.find(h => h.id.toString() === hackathonId);
  if (hackathon) {
    return {
      id: hackathon.id.toString(),
      name: hackathon.name,
      description: hackathon.description,
      date: hackathon.date,
      endDate: hackathon.endDate,
      location: hackathon.location,
      teamSize: "2-4 members", // Adding these missing properties
      prize: "$5000", // Adding these missing properties
      participants: Array.from({length: Math.floor(Math.random() * 20) + 5}, () => `participant-${Math.random()}`),
      image: hackathon.image
    };
  }
  return undefined;
};

export default function HackathonDetails() {
  const { toast } = useToast();
  const { hackathonId } = useParams<{ hackathonId: string }>();
  const navigate = useNavigate();
  
  const { 
    isLoading, 
    error, 
    data: hackathon 
  } = useQuery({
    queryKey: ['hackathon', hackathonId],
    queryFn: () => fetchHackathonDetails(hackathonId)
  });

  const getDaysUntil = (date: string) => {
    const now = new Date();
    const hackathonDate = new Date(date);
    const diff = hackathonDate.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 3600 * 24));
    return days;
  };

  const handleJoinHackathon = () => {
    toast({
      title: "Hackathon Joined!",
      description: "You have successfully joined this hackathon. Check your profile for more details.",
    });
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Loading hackathon details...</p>
        </div>
      </Layout>
    );
  }
  
  if (error || !hackathon) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p>Error: Could not load hackathon details.</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 text-gray-600 hover:text-gray-900 flex items-center"
          onClick={() => navigate('/hackathons')}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Hackathons
        </Button>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img 
            src={hackathon.image} 
            alt={hackathon.name} 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{hackathon.name}</h1>
            <div className="flex items-center text-gray-500 mb-3">
              <MapPin size={16} className="mr-1" />
              <span>{hackathon.location}</span>
            </div>
            <div className="flex items-center text-gray-500 mb-3">
              <Users size={16} className="mr-1" />
              <span>Team Size: {hackathon.teamSize}</span>
            </div>
            <div className="flex items-center text-gray-500 mb-3">
              <Clock size={16} className="mr-1" />
              <span>Prize: {hackathon.prize}</span>
            </div>
            <Badge className="bg-green-100 text-green-800 font-semibold rounded-full px-3 py-1 mr-2">
              Open
            </Badge>
            <Badge className="bg-blue-100 text-blue-800 font-semibold rounded-full px-3 py-1">
              Online
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">About the Hackathon</h2>
              <p className="text-gray-700 mb-6">{hackathon.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Date</h4>
                    <p className="text-gray-600">
                      {new Date(hackathon.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      {' - '}
                      {new Date(hackathon.endDate).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Location</h4>
                    <p className="text-gray-600">{hackathon.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Team Size</h4>
                    <p className="text-gray-600">{hackathon.teamSize}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-gray-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Prize</h4>
                    <p className="text-gray-600">{hackathon.prize}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center">
                <div>
                  <h5 className="text-gray-700 font-medium">
                    Deadline to Apply: {new Date(hackathon.date).toLocaleDateString()}
                  </h5>
                  <p className="text-gray-500 text-sm">
                    {getDaysUntil(hackathon.date)} days left to apply
                  </p>
                </div>
                <Button onClick={handleJoinHackathon}>Join Hackathon</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">Participants</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">Avatar</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Skills</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {hackathon.participants.map((participantId) => {
                    const participant = getRandomIndianParticipants(1)[0];
                    return (
                      <TableRow key={participant.id}>
                        <TableCell>
                          <Avatar>
                            <AvatarImage src={participant.avatar} alt={participant.name} />
                            <AvatarFallback>{participant.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell>{participant.name}</TableCell>
                        <TableCell>
                          {participant.skills.map((skill) => (
                            <Badge key={skill} className="mr-1">{skill}</Badge>
                          ))}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-3">Organized By</h2>
              <div className="flex items-center mb-4">
                <Avatar className="mr-3">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Organizer" />
                  <AvatarFallback>HN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-gray-900 font-medium">hackNexus Team</h3>
                  <p className="text-gray-500 text-sm">Contact: team@hacknexus.com</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                We are a team of passionate developers and event organizers dedicated to creating amazing hackathon experiences.
              </p>
              <Button variant="outline" className="w-full mb-4">
                <ExternalLink size={16} className="mr-2" />
                Visit Website
              </Button>
              <Button className="w-full">
                <Flag size={16} className="mr-2" />
                Report Hackathon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
