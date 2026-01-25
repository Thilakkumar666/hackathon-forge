import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap,
  Code2,
  Users,
  Trophy,
  Calendar,
  ArrowRight,
  Rocket,
  Brain,
  Globe,
  ChevronRight,
  Target,
  Eye,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import heroBg from "@/assets/hero-bg.jpeg";

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

const features = [
  {
    icon: Code2,
    title: "Hackathon Projects",
    description:
      "Build real-world solutions for global hackathons hosted by Microsoft, Google, and more.",
  },
  {
    icon: Brain,
    title: "Technical Workshops",
    description:
      "Learn cutting-edge technologies through hands-on workshops and mentorship.",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description:
      "Compete in national and international coding competitions and showcase your skills.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work with passionate peers in cross-functional teams to solve complex problems.",
  },
];

const stats = [
  { value: "50+", label: "Active Members" },
  { value: "15+", label: "Projects Built" },
  { value: "8", label: "Hackathon Wins" },
  { value: "20+", label: "Workshops" },
];

const upcomingEvents = [
  {
    title: "Google Solution Challenge",
    date: "Feb 2024",
    type: "Hackathon",
  },
  {
    title: "Web3 Workshop Series",
    date: "Jan 2024",
    type: "Workshop",
  },
  {
    title: "AI/ML Bootcamp",
    date: "Jan 2024",
    type: "Training",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We encourage creative thinking and out-of-the-box solutions to real-world problems.",
  },
  {
    icon: Users,
    title: "Collaborative Spirit",
    description: "Success comes from teamwork. We build together, learn together, and grow together.",
  },
  {
    icon: Code2,
    title: "Technical Excellence",
    description: "We strive for clean code, best practices, and continuous improvement in our craft.",
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description: "We prepare our members to compete and win at the highest levels of hackathons.",
  },
];

const differentiators = [
  "Industry-focused project development",
  "Mentorship from experienced developers",
  "Direct industry connections and networking",
  "Hands-on workshops with real technologies",
  "Team-based learning environment",
  "Portfolio-building opportunities",
];


const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Hero background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Building the future, one hackathon at a time
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Where Innovation Meets{" "}
              <span className="gradient-text">Engineering</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Join the premier technical club dedicated to building real-world
              projects for national and international hackathons. Learn, build,
              and compete with the best.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/join">
                <Button variant="glow" size="lg" className="w-full sm:w-auto">
                  Join the Club
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="neon" size="lg" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What We <span className="gradient-text">Do</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just a club—we're a launchpad for innovation. Here's how
              we help you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.1)]"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ArcShift was founded on the principle that practical experience is paramount in the ever-evolving world of technology. We recognized a need for a student organization that not only keeps pace with industry trends but also actively contributes to them.
                </p>
                <p>
                  In 2022, a team of forward-thinking developers established ArcShift with the mission to create a startup-like environment that fosters agility, innovation, and a results-driven mindset. Our goal is to provide students with invaluable, real-world experience long before they graduate.
                </p>
                <p>
                  Today, ArcShift is a leading technical club, with members who have achieved success in hackathons hosted by major tech companies such as Microsoft, Google, and Meta.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden neon-border p-1">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center">
                  <Rocket className="w-32 h-32 text-primary/50" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl card-gradient border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower students with practical technical skills, industry exposure, 
                and collaborative experiences that prepare them to excel in hackathons 
                and build successful careers in technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-2xl card-gradient border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the most impactful student-led technical community, recognized 
                globally for producing innovative solutions and developing the next 
                generation of tech leaders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at ArcShift
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Unlike traditional college clubs, we operate with the intensity and 
                focus of a startup. Every project we take on has real-world applications, 
                and every member is pushed to grow beyond their comfort zone.
              </p>
              
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "2022", label: "Founded" },
                { value: "50+", label: "Members" },
                { value: "15+", label: "Projects" },
                { value: "8", label: "Hackathon Wins" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl card-gradient border border-border/50 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Upcoming <span className="gradient-text">Events</span>
              </h2>
              <p className="text-muted-foreground">
                Don't miss out on our latest workshops and competitions
              </p>
            </div>
            <Link to="/events">
              <Button variant="outline" className="group">
                View All Events
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">{event.date}</span>
                  <span className="px-2 py-1 rounded-full bg-secondary/20 text-secondary text-xs">
                    {event.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Rocket className="w-6 h-6 text-primary" />
              <span className="text-primary font-medium">
                Ready to start your journey?
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Join the Next Generation of{" "}
              <span className="gradient-text">Innovators</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a beginner or an experienced developer, there's a
              place for you in ArcShift. Let's build something amazing together.
            </p>
            <Link to="/join">
              <Button variant="glow" size="xl">
                Apply Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Preview */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our members work with cutting-edge technologies to build innovative solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              "React",
              "Node.js",
              "Python",
              "TensorFlow",
              "AWS",
              "Docker",
              "Kubernetes",
              "Flutter",
              "Firebase",
              "MongoDB",
              "GraphQL",
              "TypeScript",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-muted/50 border border-border/50 text-sm font-medium hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;