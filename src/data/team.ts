export interface TeamMember {
  id: number; // Changed to number to match existing Team.tsx
  name: string;
  role: string;
  bio: string;
  image: string; // Changed to image to match existing Team.tsx
  socials: { // Changed to socials to match existing Team.tsx
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string; // Added email
  };
}

// Combining the data from leadTeam and campusAmbassador in Team.tsx
export const teamMembers: TeamMember[] = [
  {
    id: 4,
    name: "Sheerin S",
    role: "Creative Lead",
    bio: "Designing the future of ArcShift.",
    image: "/src/assets/Sheerin.jpeg",
    socials: { linkedin: "#" },
  },
  {
    id: 5,
    name: "Princeton Vishal J",
    role: "Communications Lead",
    bio: "Connecting ArcShift with the world.",
    image: "/src/assets/princeton.jpeg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 3, // Campus Ambassador ID
    name: "Ramprakash R",
    role: "Campus Ambassador",
    bio: "Spreading the word about ArcShift across campus.",
    image: "/src/assets/ramprakash.jpeg",
    socials: { twitter: "#", linkedin: "#" },
  },
  {
    id: 6,
    name: "Dhershini M",
    role: "Outreach Lead",
    bio: "Building industry partnerships and sponsorships.",
    image: "/src/assets/Dhershini M.jpeg",
    socials: { linkedin: "#", email: "outreach@arcshift.edu" },
  },
  {
    id: 7,
    name: "Thilak Kumar",
    role: "Technical Lead",
    bio: "Leading the technical development of ArcShift.",
    image: "/src/assets/Thilak kumar k godlook.jpeg",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 8,
    name: "E Yagna Sai Harshith",
    role: "Community Lead",
    bio: "Building a strong and vibrant community.",
    image: "/src/assets/harshit.jpeg",
    socials: { github: "#", linkedin: "#" },
  },
  {
    id: 9,
    name: "Vivin K S",
    role: "Operations Lead",
    bio: "Ensuring the smooth operation of ArcShift.",
    image: "/src/assets/Vivin.jpeg",
    socials: { github: "#", linkedin: "#" },
  },
];