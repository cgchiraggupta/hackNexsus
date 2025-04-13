
// Skills data
export const skillsList = [
  "JavaScript", "React", "Node.js", "Python", "Java", "C++", "Ruby", "Go", 
  "Swift", "Kotlin", "Flutter", "Vue.js", "Angular", "TypeScript", "PHP", 
  "HTML/CSS", "AWS", "Firebase", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", 
  "MySQL", "Redis", "GraphQL", "REST API", "CI/CD", "DevOps", "Mobile Development", 
  "Web Development", "Machine Learning", "AI", "Data Science", "Blockchain", 
  "Game Development", "AR/VR", "UI/UX Design", "Product Management"
];

// Locations
export const locations = [
  "Delhi, India", "Mumbai, India", "Bangalore, India", "Hyderabad, India", "Chennai, India", 
  "Pune, India", "Kolkata, India", "Ahmedabad, India", "Jaipur, India", "Noida, India",
  "Gurugram, India", "Remote"
];

// User data with Indian names
export const users = [
  {
    id: 1,
    name: "Arjun Sharma",
    username: "arjundev",
    avatar: "https://i.pravatar.cc/150?u=arjun",
    bio: "Full-stack developer with 5 years of experience. Passionate about creating user-friendly applications and solving complex problems.",
    location: "Bangalore, India",
    skills: ["JavaScript", "React", "Node.js", "TypeScript", "MongoDB"],
    interests: ["Web Development", "Open Source", "AI"],
    hackathons: [1, 3],
    connections: [2, 3, 5],
    connectionRequests: [4, 6]
  },
  {
    id: 2,
    name: "Priya Patel",
    username: "priyatech",
    avatar: "https://i.pravatar.cc/150?u=priya",
    bio: "Backend developer specializing in scalable systems. Currently working on microservices architecture and cloud solutions.",
    location: "Mumbai, India",
    skills: ["Java", "Spring Boot", "AWS", "Docker", "Kubernetes"],
    interests: ["Cloud Computing", "System Design", "DevOps"],
    hackathons: [1, 2],
    connections: [1, 3, 4],
    connectionRequests: []
  },
  {
    id: 3,
    name: "Vikram Singh",
    username: "vikramcode",
    avatar: null,
    bio: "Frontend developer with a passion for creating beautiful and accessible user interfaces. Experienced in modern JavaScript frameworks.",
    location: "Delhi, India",
    skills: ["React", "Vue.js", "HTML/CSS", "UI/UX Design", "TypeScript"],
    interests: ["Web Design", "Accessibility", "User Experience"],
    hackathons: [2, 3],
    connections: [1, 2, 6],
    connectionRequests: [5]
  },
  {
    id: 4,
    name: "Ananya Gupta",
    username: "ananyaml",
    avatar: "https://i.pravatar.cc/150?u=ananya",
    bio: "Machine learning engineer focused on NLP and computer vision. Looking to collaborate on innovative AI projects.",
    location: "Hyderabad, India",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning", "Data Science"],
    interests: ["Artificial Intelligence", "NLP", "Computer Vision"],
    hackathons: [4],
    connections: [2],
    connectionRequests: [1, 3, 5]
  },
  {
    id: 5,
    name: "Rohan Mehta",
    username: "rohandev",
    avatar: null,
    bio: "Mobile app developer with expertise in cross-platform solutions. Creating seamless user experiences on iOS and Android.",
    location: "Pune, India",
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    interests: ["Mobile Development", "UI Animation", "App Performance"],
    hackathons: [1, 4],
    connections: [],
    connectionRequests: [2]
  },
  {
    id: 6,
    name: "Kavya Iyer",
    username: "kavyagamedev",
    avatar: "https://i.pravatar.cc/150?u=kavya",
    bio: "Game developer with a background in 3D modeling and animation. Passionate about creating immersive gaming experiences.",
    location: "Chennai, India",
    skills: ["Unity", "C#", "3D Modeling", "Game Design", "AR/VR"],
    interests: ["Game Development", "Virtual Reality", "3D Animation"],
    hackathons: [2],
    connections: [3],
    connectionRequests: [1, 2]
  }
];

// Hackathon data
export const hackathons = [
  {
    id: 1,
    name: "TechCrunch Delhi",
    date: "2023-10-15",
    endDate: "2023-10-17",
    location: "Delhi, India",
    description: "Join the premier technology hackathon in India. Build innovative solutions over a 48-hour period and compete for exciting prizes.",
    participants: [1, 2, 5],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    name: "HackBangalore",
    date: "2023-11-05",
    endDate: "2023-11-07",
    location: "Bangalore, India",
    description: "Bangalore's largest annual hackathon. Create projects that address real-world challenges in healthcare, sustainability, and education.",
    participants: [2, 3, 6],
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 3,
    name: "Code for India",
    date: "2023-12-02",
    endDate: "2023-12-03",
    location: "Mumbai, India",
    description: "A social impact hackathon focused on developing technology solutions for nonprofit organizations in India. Make a difference with your code.",
    participants: [1, 3],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 4,
    name: "AI & ML Summit Hyderabad",
    date: "2024-01-20",
    endDate: "2024-01-22",
    location: "Hyderabad, India",
    description: "Focus on artificial intelligence and machine learning applications. Build projects that leverage cutting-edge AI technologies for Indian markets.",
    participants: [4, 5],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

// Messages data
export const messages = [
  {
    id: 1,
    senderId: 2,
    receiverId: 1,
    content: "Hey Arjun, I saw your profile and we're both participating in TechCrunch Delhi. Would you be interested in forming a team?",
    timestamp: "2023-09-25T14:30:45Z",
    read: true
  },
  {
    id: 2,
    senderId: 1,
    receiverId: 2,
    content: "Hi Priya! That sounds great. What kind of project are you thinking of building?",
    timestamp: "2023-09-25T15:12:22Z",
    read: true
  },
  {
    id: 3,
    senderId: 2,
    receiverId: 1,
    content: "I was thinking of a sustainability-focused app that helps people reduce their carbon footprint. Your frontend skills would be perfect for this!",
    timestamp: "2023-09-25T15:30:10Z",
    read: true
  },
  {
    id: 4,
    senderId: 3,
    receiverId: 1,
    content: "Hi Arjun, I notice we have complementary skills. Would you be interested in collaborating on a project sometime?",
    timestamp: "2023-09-26T10:45:33Z",
    read: false
  },
  {
    id: 5,
    senderId: 1,
    receiverId: 3,
    content: "Hey Vikram, I'd definitely be interested! What kind of project do you have in mind?",
    timestamp: "2023-09-26T11:20:18Z",
    read: true
  }
];

// Notifications data
export const notifications = [
  {
    id: 1,
    userId: 1,
    type: "connection_request",
    from: 4,
    content: "Ananya Gupta sent you a connection request",
    timestamp: "2023-09-27T09:45:12Z",
    read: false
  },
  {
    id: 2,
    userId: 1,
    type: "connection_request",
    from: 6,
    content: "Kavya Iyer sent you a connection request",
    timestamp: "2023-09-26T14:32:55Z",
    read: false
  },
  {
    id: 3,
    userId: 1,
    type: "message",
    from: 3,
    content: "Vikram Singh sent you a message",
    timestamp: "2023-09-26T10:45:33Z",
    read: false
  },
  {
    id: 4,
    userId: 1,
    type: "hackathon_reminder",
    content: "TechCrunch Delhi is starting in 2 weeks",
    timestamp: "2023-09-25T08:00:00Z",
    read: true
  }
];
