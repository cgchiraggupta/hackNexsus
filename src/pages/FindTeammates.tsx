
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import { Search, MapPin, UserPlus, CheckCheck, Briefcase } from "lucide-react";
import { users, skillsList, locations } from "@/data/mockData";

export default function FindTeammates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  // Filter users based on search query and filters
  const filteredUsers = users.filter(user => {
    // Filter by search query (name or bio)
    const matchesSearch = searchQuery === "" || 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.bio.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by skill
    const matchesSkill = !selectedSkill || user.skills.includes(selectedSkill);
    
    // Filter by location
    const matchesLocation = !selectedLocation || user.location === selectedLocation;
    
    return matchesSearch && matchesSkill && matchesLocation;
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search is already handled by the state changes and filtering
  };
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Find Teammates</h1>
          <p className="mt-2 text-lg text-gray-600">
            Connect with skilled developers for your next hackathon project
          </p>
        </div>
        
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  id="search" 
                  placeholder="Search by name or bio" 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="skill" className="block text-sm font-medium text-gray-700 mb-1">
                Skill
              </label>
              <Select onValueChange={(value) => setSelectedSkill(value)} value={selectedSkill || undefined}>
                <SelectTrigger id="skill">
                  <SelectValue placeholder="Any skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any skill</SelectItem>
                  {skillsList.map(skill => (
                    <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <Select onValueChange={(value) => setSelectedLocation(value)} value={selectedLocation || undefined}>
                <SelectTrigger id="location">
                  <SelectValue placeholder="Any location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any location</SelectItem>
                  {locations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </form>
        </div>
        
        {/* Results Section */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            {filteredUsers.length} {filteredUsers.length === 1 ? 'Developer' : 'Developers'} Found
          </h2>
          <div className="text-gray-600 text-sm">
            Showing {filteredUsers.length} of {users.length} developers
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <Card key={user.id} className="overflow-hidden hover-scale">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      {user.avatar ? (
                        <img 
                          src={user.avatar} 
                          alt={user.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-hackNexus-purple text-white flex items-center justify-center text-lg font-semibold">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div>
                        <CardTitle className="text-lg">{user.name}</CardTitle>
                        <CardDescription className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {user.location}
                        </CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      {user.connections.includes(1) ? (
                        <CheckCheck size={18} className="text-green-500" />
                      ) : (
                        <UserPlus size={18} className="text-hackNexus-purple" />
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {user.bio}
                  </p>
                  <div className="flex items-center mb-3">
                    <Briefcase size={16} className="mr-2 text-gray-500" />
                    <div className="text-sm font-medium">Skills</div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {user.skills.slice(0, 5).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-hackNexus-purple bg-secondary">
                        {skill}
                      </Badge>
                    ))}
                    {user.skills.length > 5 && (
                      <Badge variant="outline" className="text-gray-500">
                        +{user.skills.length - 5} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="pt-3 justify-center">
                  <Link to={`/users/${user.id}`}>
                    <Button variant="outline" className="text-hackNexus-purple border-hackNexus-purple hover:bg-hackNexus-purple hover:text-white w-full">
                      View Profile
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                <Search className="text-gray-500" size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">No developers found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
