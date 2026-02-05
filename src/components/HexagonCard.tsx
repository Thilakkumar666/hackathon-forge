import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeamMember } from '@/data/team';
import './Hexagon.css'; // For the hexagon shape and image container
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'; // Added Mail icon

interface HexagonCardProps {
  member: TeamMember;
  isHovered: boolean;
  onHoverStart: (id: string) => void;
  onHoverEnd: () => void;
  style?: React.CSSProperties; // For grid positioning
}

const HexagonCard: React.FC<HexagonCardProps> = ({
  member,
  isHovered,
  onHoverStart,
  onHoverEnd,
  style,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleHoverStart = () => {
    onHoverStart(member.id);
    // Delay showing details to allow expansion animation to start
    setTimeout(() => setShowDetails(true), 200);
  };

  const handleHoverEnd = () => {
    onHoverEnd();
    setShowDetails(false);
  };

  return (
    <motion.div
      className="hexagon-wrapper absolute"
      style={style}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      initial={false}
      animate={isHovered ? {
        scale: 1.35,
        z: 30,
        zIndex: 10,
        borderRadius: '15%', // Morph towards rounded hexagon
      } : {
        scale: 1,
        z: 0,
        zIndex: 1,
        borderRadius: '0%', // Back to sharp hexagon
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
      <div className="hexagon relative w-full h-full bg-card shadow-lg transition-shadow duration-300 p-5"> {/* Added bg-card and p-5 for padding */}
        {/* Default State: Photo and Name */}
        <div className="flex flex-col items-center justify-center h-full text-center">
          <motion.div
            className="w-[200px] h-[200px] mb-4 hexagon-image-container" // Adjusted size and added class
            initial={false}
            animate={isHovered ? { y: -30, scale: 0.8 } : { y: 0, scale: 1 }}
            transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 1,
                duration: isHovered ? 0.3 : 0.2,
            }}
          >
            <img src={member.photo} alt={member.name} className="hexagon-image" />
          </motion.div>
          <motion.h3
            className="mt-2 text-foreground font-semibold text-lg" // Adjusted text color
            initial={false}
            animate={isHovered ? { opacity: 0, y: -10 } : { opacity: 1, y: 0 }}
            transition={{ duration: isHovered ? 0.1 : 0.2 }}
          >
            {member.name}
          </motion.h3>

          {/* Expanded Details */}
          <AnimatePresence>
            {isHovered && showDetails && (
              <motion.div
                className="absolute inset-x-0 bottom-0 top-1/2 flex flex-col items-center p-4 text-center bg-gradient-to-t from-card to-transparent rounded-b-lg" // Adjusted background
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, staggerChildren: 0.08 }}
              >
                <motion.h3
                  className="font-bold text-xl text-foreground mt-2" // Adjusted text color
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-sm text-primary mt-1" // Adjusted text color
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18 }}
                >
                  {member.role}
                </motion.p>
                <motion.p
                  className="text-xs text-muted-foreground mt-2 line-clamp-3" // Adjusted text color
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
                  {member.social.github && (
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.linkedin && (
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.email && ( // Added email social icon
                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                      <Mail className="w-4 h-4" />
                    </Button>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default HexagonCard;