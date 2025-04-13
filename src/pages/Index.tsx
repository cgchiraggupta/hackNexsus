
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { ArrowRight, Search, Users, Calendar, MessageSquare } from "lucide-react";
import { hackathons, users } from "@/data/mockData";
import CurrentHackathons from "@/components/CurrentHackathons";

export default function Index() {
  // Get random hackathons for the showcase
  const featuredHackathons = [...hackathons].sort(() => 0.5 - Math.random()).slice(0, 2);
  
  // Get some featured users
  const featuredUsers = [...users].sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hackNexus-purple to-indigo-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 animate-fade-in">
                Find Your Perfect Hackathon Teammates
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in">
                Connect with skilled developers, form dream teams, and create winning projects together.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-hackNexus-purple hover:bg-gray-100 transition-all">
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/find-teammates">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 transition-all">
                    Explore Teammates
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800&h=500" 
                alt="Hackathon team collaborating" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Hackathons Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Current Hackathons</h2>
            <Link to="/hackathons" className="text-hackNexus-purple hover:text-hackNexus-lightPurple flex items-center">
              Explore All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <CurrentHackathons />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Use hackNexus?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform helps you connect with the right people for your next hackathon project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover-scale">
              <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-lg mb-4">
                <Search className="h-8 w-8 text-hackNexus-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Find Skilled Teammates</h3>
              <p className="text-gray-600">
                Search for teammates based on skills, location, and interests. Find the perfect match for your project needs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover-scale">
              <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-lg mb-4">
                <Calendar className="h-8 w-8 text-hackNexus-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Discover Hackathons</h3>
              <p className="text-gray-600">
                Browse upcoming hackathons, see who's participating, and join events that match your interests.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md transition-all hover-scale">
              <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-lg mb-4">
                <MessageSquare className="h-8 w-8 text-hackNexus-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Connect & Collaborate</h3>
              <p className="text-gray-600">
                Send connection requests, message potential teammates, and start collaborating on your next winning project.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Hackathons */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Hackathons</h2>
            <Link to="/hackathons" className="text-hackNexus-purple hover:text-hackNexus-lightPurple flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredHackathons.map((hackathon) => (
              <div key={hackathon.id} className="bg-white rounded-lg shadow-md overflow-hidden hover-scale">
                <img 
                  src={hackathon.image} 
                  alt={hackathon.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{hackathon.name}</h3>
                  <div className="flex items-center text-gray-500 mb-3">
                    <Calendar size={16} className="mr-1" />
                    <span>
                      {new Date(hackathon.date).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{hackathon.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center">
                      <Users size={16} className="text-gray-500 mr-1" />
                      <span className="text-gray-500 text-sm">{hackathon.participants.length} Participants</span>
                    </div>
                    <Link to={`/hackathons/${hackathon.id}`}>
                      <Button variant="outline" className="text-hackNexus-purple border-hackNexus-purple hover:bg-hackNexus-purple hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Users */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Users</h2>
            <Link to="/find-teammates" className="text-hackNexus-purple hover:text-hackNexus-lightPurple flex items-center">
              Find More <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredUsers.map((user) => (
              <div key={user.id} className="bg-white rounded-lg shadow-md p-6 hover-scale">
                <div className="flex flex-col items-center">
                  {user.avatar ? (
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-hackNexus-purple text-white flex items-center justify-center text-xl font-semibold mb-4">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{user.name}</h3>
                  <p className="text-gray-500 mb-3">{user.location}</p>
                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {user.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="bg-secondary text-xs px-2 py-1 rounded-full text-hackNexus-purple">
                        {skill}
                      </span>
                    ))}
                    {user.skills.length > 3 && (
                      <span className="text-xs text-gray-500">+{user.skills.length - 3} more</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm text-center mb-4 line-clamp-2">
                    {user.bio}
                  </p>
                  <Link to={`/users/${user.id}`}>
                    <Button variant="outline" size="sm" className="text-hackNexus-purple border-hackNexus-purple hover:bg-hackNexus-purple hover:text-white w-full">
                      View Profile
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-hackNexus-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join hackNexus today and connect with talented developers for your next hackathon project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-white text-hackNexus-purple hover:bg-gray-100">
                Create Your Profile
              </Button>
            </Link>
            <Link to="/hackathons">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Browse Hackathons
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
