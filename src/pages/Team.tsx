// @ts-nocheck
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Layout from "@/components/layout/Layout";
import "@/components/Hexagon.css";
import React, { useState } from "react"; // Added useState
import AnimatedHoneycombGrid from "@/components/AnimatedHoneycombGrid"; // Import the new component
import { teamMembers } from "@/data/team"; // Import the combined team data
import chitra from "@/assets/Dr. P. Chitra.jpeg";
import jayalakshmi from "@/assets/Dr. S. Jayalakshmi.jpeg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Define TeamMember interface locally to ensure it matches the original file's structure exactly
// and is available for FacultyCard and AnimatedTeamCard within this file.
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
    instagram?: string;
  };
}

const facultyTeam: TeamMember[] = [
  {
    id: 1,
    name: "Dr. P. Chitra",
    role: "HOD (E-Tech)",
    bio: "Guiding the next generation of innovators.",
    image: chitra,
    socials: { linkedin: "#" },
  },
  {
    id: 2,
    name: "Dr. S. Jayalakshmi",
    role: "Faculty coordinator",
    bio: "Expert in machine learning and AI.",
    image: jayalakshmi,
    socials: { linkedin: "#" },
  },
];

// Re-inserting FacultyCard definition
const FacultyCard = ({ member }: { member: TeamMember }) => (
  <motion.div
    className="group p-6 rounded-2xl card-gradient border border-border/50 text-center relative overflow-hidden"
    initial={{ opacity: 0, y: 20, boxShadow: '0 0 0 transparent' }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
    whileHover={{
      scale: 1.05,
      boxShadow: '0 0 25px rgba(32, 80, 223, 0.7), 0 0 50px rgba(161, 43, 235, 0.5)',
      transition: { duration: 0.3 }
    }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <div className="rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold mx-auto mb-4 overflow-hidden w-48 h-48">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
      {member.name}
    </h3>
    <p className="text-sm text-primary mb-2">{member.role}</p>
    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
    <div className="flex gap-2 justify-center">
      {member.socials.linkedin && (
        <a
          href={member.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      )}
      {member.socials.instagram && (
        <a
          href={member.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
        >
          <Instagram className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);


// AnimatedTeamCard will now be defined here, incorporating framer-motion animations
export const AnimatedTeamCard: React.FC<{
  member: TeamMember;
  isHovered: boolean;
  onHoverStart: (id: number) => void;
  onHoverEnd: () => void;
  style?: React.CSSProperties; // For AnimatedHoneycombGrid to pass positioning
}> = ({ member, isHovered, onHoverStart, onHoverEnd, style }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleHoverStart = () => {
    onHoverStart(member.id);
    setTimeout(() => setShowDetails(true), 200);
  };

  const handleHoverEnd = () => {
    onHoverEnd();
    setShowDetails(false);
  };

  return (
    <motion.div
      className="hexagon relative"
      style={{ ...style }} // Apply calculated position
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      initial={false}
      animate={isHovered ? {
        scale: 1.35,
        z: 30,
        zIndex: 10,
        borderRadius: '15%',
      } : {
        scale: 1,
        z: 0,
        zIndex: 1,
        borderRadius: '0%',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 1,
        duration: isHovered ? 0.5 : 0.3,
        ease: isHovered ? [0.22, 1, 0.36, 1] : undefined,
      }}
    >
      <div className="hexagon-inner">
        <motion.div
          className="hexagon-image-container"
          initial={false}
          animate={isHovered ? { y: -40, scale: 0.75 } : { y: 0, scale: 1 }}
          transition={{
              type: 'spring',
              stiffness: 150,
              damping: 15,
              mass: 1,
              duration: isHovered ? 0.4 : 0.2,
          }}
        >
          <img src={member.image} alt={member.name} className="hexagon-image" />
        </motion.div>
        <motion.h3
          className="font-semibold text-lg group-hover:text-primary transition-colors"
          initial={false}
          animate={isHovered ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
          transition={{ duration: isHovered ? 0.1 : 0.2 }}
        >
          {member.role}
        </motion.h3>

        <AnimatePresence>
          {isHovered && showDetails && (
            <motion.div
              className="absolute inset-x-0 bottom-0 top-1/2 flex flex-col items-center p-4 text-center bg-gradient-to-t from-[hsl(var(--card))] to-transparent rounded-b-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, staggerChildren: 0.08 }}
            >
              <motion.h3
                className="font-bold text-xl text-foreground mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="text-sm text-primary mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 }}
              >
                {member.role}
              </motion.p>
              <motion.p
                className="text-xs text-muted-foreground mt-2 line-clamp-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.26 }}
              >
                {member.bio}
              </motion.p>
              <motion.div
                className="flex gap-2 mt-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.34 }}
              >
                {member.socials.github && (
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {member.socials.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.socials.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                )}
                {member.socials.email && (
                  <a
                    href={`mailto:${member.socials.email}`}
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};


const Team = () => {
  return (
    <Layout>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Meet Our <span className="gradient-text">Team</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground"
            >
              The passionate individuals driving innovation and building the future 
              at ArcShift.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Faculty Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Faculty <span className="gradient-text">Advisors</span>
            </h2>
            <p className="text-muted-foreground">
              Our guiding lights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {facultyTeam.map((member) => (
              <FacultyCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Team */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our <span className="gradient-text-accent">Team</span>
            </h2>
            <p className="text-muted-foreground">
              The students leading the charge
            </p>
          </motion.div>

          {/* This is where the AnimatedHoneycombGrid will be used */}
          <AnimatedHoneycombGrid members={teamMembers} />
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Join the Team?
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for passionate individuals to join our 
              leadership team. If you have skills and dedication, we want you!
            </p>
            <a href="/join" className="inline-block">
              <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                Apply to Join
              </button>
            </a>
          </motion.div>
        </div>
      </section>
      </motion.div>
    </Layout>
  );
};

export default Team;
