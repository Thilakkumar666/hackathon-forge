import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import heroBg from "@/assets/ArchShift_main.png";

const HeroScroll = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const controls = useAnimation();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isRevealed) {
        window.removeEventListener("wheel", handleWheel);
        return;
      }

      e.preventDefault();

      if (e.deltaY > 0) {
        setIsRevealed(true);
        controls.start({ y: "100vh" }).then(() => {
          if (heroRef.current) {
            heroRef.current.style.display = "none";
          }
          document.body.style.overflowY = "auto";
        });
        window.removeEventListener("wheel", handleWheel);
      }
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.body.style.overflowY = "auto";
    };
  }, [isRevealed, controls]);

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
    </motion.div>
  );
};

export default HeroScroll;