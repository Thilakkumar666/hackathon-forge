// @ts-nocheck
import ramprakash from "@/assets/ramprakash_r.jpeg";
import sheerin from "@/assets/sheerin_s.jpeg";
import harshit from "@/assets/yagna_sai_harshith_e.jpeg";
import thilak from "@/assets/thilak_kumar_k.jpeg";
import dhershini from "src/assets/dhershini_m.jpeg";
import vivin from "@/assets/vivin_k_s.jpeg";
import princeton from "@/assets/princeton_vishal_j.jpeg";

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
    email?: string;
    instagram?: string;
  };
}

// Combining the data from leadTeam and campusAmbassador in Team.tsx
export const teamMembers: TeamMember[] = [
  {
    id: 3, // Campus Ambassador ID
    name: "Ramprakash R",
    role: "Campus Ambassador",
    bio: "Spreading the word about ArcShift across campus.",
    image: "/src/assets/ramprakash-r.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/ramprakashrp2004/" },
  },
  {
    id: 4,
    name: "Sheerin S",
    role: "Creative Lead",
    bio: "Designing the future of ArcShift.",
    image: "/src/assets/sheerin-s.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/sheerin-s-500372246?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://www.instagram.com/sheerin_s/" },
  },
  {
    id: 8,
    name: "E Yagna Sai Harshith",
    role: "Community Lead",
    bio: "Building a strong and vibrant community.",
    image: "/src/assets/yagna-sai-harshith-e.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/yagna-sai-harshith-eedpuganti-118b952a8" , github: "https://github.com/Thilakkumar-K" },
  },
  {
    id: 7,
    name: "Thilak Kumar K",
    role: "Technical Lead",
    bio: "Leading the technical development of ArcShift.",
    image: "/src/assets/thilak-kumar-k.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/thilak-kumar-k/"  ,github: "https://github.com/Thilakkumar-K"},
  },
  {
    id: 6,
    name: "Dhersheni M",
    role: "Outreach Lead",
    bio: "Building industry partnerships and sponsorships.",
    image: "/src/assets/dhershini-m.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/dhersheni-murali22/", email: "dhersheni22@gmail.com", instagram: "#" },
  },
  {
    id: 9,
    name: "Vivin K S",
    role: "Operations Lead",
    bio: "Ensuring the smooth operation of ArcShift.",
    image: "/src/assets/vivin-k-s.jpeg",
    socials: { github: "#", linkedin: "https://www.linkedin.com/in/vivin-k-s-40a5a92a0" },
  },
  {
    id: 5,
    name: "Princeton Vishal J",
    role: "Communications Lead",
    bio: "Connecting ArcShift with the world.",
    image: "/src/assets/princeton-vishal-j.jpeg",
    socials: { linkedin: "https://www.linkedin.com/in/princeton-vishal-2k05" },
  },
];
