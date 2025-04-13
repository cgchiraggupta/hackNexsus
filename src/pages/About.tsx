
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Users, Code, BrainCircuit, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About hackNexus</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting talented developers and fostering innovation through hackathons
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              hackNexus was founded with a simple yet powerful mission: to create a platform where developers can find the perfect teammates for hackathons, fostering collaboration and innovation.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We believe that great ideas emerge when diverse talents come together. Our platform helps you connect with developers who complement your skills, enabling you to build more innovative and impactful projects.
            </p>
            <p className="text-lg text-gray-600">
              Whether you're a seasoned developer or just starting out, hackNexus provides the tools and community to help you succeed in hackathons and beyond.
            </p>
          </div>
          <div className="bg-hackNexus-purple rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Why Choose hackNexus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Users className="h-12 w-12 text-hackNexus-purple mb-2" />
                <CardTitle>Skill Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our advanced algorithms match you with teammates based on complementary skills, ensuring balanced teams.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <Code className="h-12 w-12 text-hackNexus-purple mb-2" />
                <CardTitle>Project Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Built-in tools for team communication and project management to streamline your hackathon experience.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <BrainCircuit className="h-12 w-12 text-hackNexus-purple mb-2" />
                <CardTitle>Learning Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Connect with developers of all skill levels and learn from each other while building amazing projects.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <GraduationCap className="h-12 w-12 text-hackNexus-purple mb-2" />
                <CardTitle>Career Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Showcase your projects, gain recognition, and open doors to new career opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4">
            hackNexus began in 2023 when a group of passionate developers faced a recurring challenge: finding the right teammates for hackathons. They envisioned a platform that would connect developers based on their skills, interests, and goals.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            What started as a small project has grown into a thriving community of thousands of developers across India and beyond. We've facilitated countless successful hackathon teams and witnessed amazing projects come to life.
          </p>
          <p className="text-lg text-gray-600">
            Today, hackNexus continues to evolve with our community, constantly adding new features and improvements to make your hackathon experience better.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to find your perfect hackathon team? Join thousands of developers on hackNexus today!
          </p>
          <div className="inline-flex bg-hackNexus-purple text-white text-lg font-medium px-8 py-4 rounded-md hover:bg-hackNexus-lightPurple transition-colors">
            Sign Up Now
          </div>
        </div>
      </div>
    </Layout>
  );
}
