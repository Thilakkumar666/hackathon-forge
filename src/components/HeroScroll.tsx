// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/ArchShift_main.png";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroScroll = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const hasBeenRevealed = sessionStorage.getItem('heroRevealed') === 'true';

    if (isMobile || hasBeenRevealed) {
      setIsRevealed(true);
      if (heroRef.current) {
        heroRef.current.style.display = "none";
      }
      document.body.style.overflowY = "auto";
      return;
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setIsRevealed(true);
        sessionStorage.setItem('heroRevealed', 'true');
        controls.start({ y: "100vh" }).then(() => {
          if (heroRef.current) {
            heroRef.current.style.display = "none";
          }
          document.body.style.overflowY = "auto";
        });
        window.removeEventListener("wheel", handleWheel);
      }
      e.preventDefault();
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflowY = "auto";
    };
  }, [controls, isMobile]);

  return (
    <motion.div
      ref={heroRef}
      className={cn(
        "fixed inset-0 z-50 bg-background",
      )}
      initial={{ y: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="w-full h-full">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
      </div>

      {!isRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white"
        >
          <p className="text-sm mb-2">Scroll to reveal</p>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeroScroll;