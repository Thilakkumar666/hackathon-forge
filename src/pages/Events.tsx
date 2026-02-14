import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { events } from "@/data/eventData"; // Import events from data file

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: "hackathon" | "workshop" | "talk" | "competition";
  capacity?: number;
  isUpcoming: boolean;
  registrationLink?: string;
}

const typeColors = {
  hackathon: "bg-primary/20 text-primary border-primary/30",
  workshop: "bg-accent/20 text-accent border-accent/30",
};

const upcomingEvents = events.filter((e) => e.isUpcoming);
const pastEvents = events.filter((e) => !e.isUpcoming);

const Events = () => {
  const location = useLocation();
  const highlightedEventId = location.state?.highlightedEventId;
  const eventRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (highlightedEventId && eventRefs.current[highlightedEventId]) {
      eventRefs.current[highlightedEventId]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      // Optionally, add a temporary class for visual highlighting
      const element = eventRefs.current[highlightedEventId];
      if (element) {
        element.classList.add("border-primary", "shadow-lg", "scale-[1.02]", "transition-all", "duration-500");
        setTimeout(() => {
          element.classList.remove("border-primary", "shadow-lg", "scale-[1.02]");
        }, 3000);
      }
    }
  }, [highlightedEventId]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Events & <span className="gradient-text">Workshops</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our workshops, hackathons, and tech talks to level up your skills 
              and connect with like-minded innovators.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-muted-foreground">
              Don't miss these exciting opportunities to learn and grow
            </p>
          </motion.div>

          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                ref={(el) => (eventRefs.current[event.id] = el)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-6 md:p-8 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 ${
                  highlightedEventId === event.id ? "ring-4 ring-primary/50 shadow-primary/50" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize border ${typeColors[event.type]}`}>
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {event.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </div>
                      {event.capacity && (
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {event.capacity} spots
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="lg:flex-shrink-0">
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="glow" className="w-full lg:w-auto">
                          Register Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Past <span className="gradient-text-accent">Events</span>
            </h2>
            <p className="text-muted-foreground">
              A look back at our successful events and workshops
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl card-gradient border border-border/50"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">{event.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {event.description}
                </p>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize border ${typeColors[event.type]}`}>
                  {event.type}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Want to Host an Event?
            </h2>
            <p className="text-muted-foreground mb-8">
              Have an idea for a workshop or want to collaborate on an event? 
              We're always open to new ideas and partnerships.
            </p>
            <Button variant="neon" size="lg">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;