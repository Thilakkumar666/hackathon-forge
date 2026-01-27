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
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

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
    icon: CheckCircle2,
    title: "Structured Learning",
    description: "Introduce students to Microsoft Learn and structured learning paths.",
  },
  {
    icon: CheckCircle2,
    title: "Certifications & Badges",
    description: "Help students prepare for Microsoft certifications and skill badges.",
  },
  {
    icon: CheckCircle2,
    title: "Cohorts & Programs",
    description: "Encourage participation in Microsoft cohorts, challenges, and programs.",
  },
  {
    icon: CheckCircle2,
    title: "Hands-on Projects",
    description: "Build hands-on projects using Microsoft tools and platforms.",
  },
  {
    icon: CheckCircle2,
    title: "Ambassador Program",
    description: "Guide interested students towards the Microsoft Learn Student Ambassador program.",
  },
  {
    icon: CheckCircle2,
    title: "Supportive Community",
    description: "Create a supportive peer community for continuous growth.",
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

const differences = [
  {
    icon: Lightbulb,
    title: "Microsoft-Focused Learning",
    description:
      "We work entirely within the Microsoft ecosystem, ensuring students learn tools and technologies used in real-world applications.",
  },
  {
    icon: Lightbulb,
    title: "Opportunity-Driven Approach",
    description:
      "Beyond learning, we guide students toward certifications, cohorts, and programs that offer real recognition.",
  },
  {
    icon: Lightbulb,
    title: "Hands-On & Practical",
    description:
      "We emphasize projects, challenges, and practical implementation, not just theory.",
  },
  {
    icon: Lightbulb,
    title: "Career & Resume Impact",
    description:
      "Every activity is designed to add value to resumes, portfolios, and professional profiles.",
  },
  {
    icon: Lightbulb,
    title: "Peer-Led Community",
    description:
      "Led by student ambassadors and supported by faculty, ArcShift is built by students, for students.",
  },
];


const Index = () => {
  useSmoothScroll();
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
              At ArcShift, we focus on learning, practice, and opportunity.
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
      <section id="our-story" className="py-24 bg-card/30">
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
                  ArcShift was started with a simple idea: students should not just learn about technology, but learn using real industry platforms.
                </p>
                <p>
                  We noticed that many students were unaware of the opportunities available through Microsoft-free learning resources, certifications, global programs, cohorts, and recognition that can significantly strengthen their skills and resumes. ArcShift was created to bridge this gap.
                </p>
                <p>
                  Backed by a Microsoft Learn Student Ambassador and guided by faculty, ArcShift serves as a platform where students explore Microsoft technologies, work on real projects, challenge themselves through cohorts, and grow step by step in their technical and professional journey.
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
                ArcShift’s mission is to bridge the gap between students and the Microsoft ecosystem by enabling access to learning, certifications, projects, cohorts, and global recognition opportunities.
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
                To empower students with Microsoft technologies, enabling them to learn, build, and grow into confident professionals through real-world skills and global opportunities.
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
              
              <div className="space-y-8">
                {differences.map((diff, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                      <diff.icon className="w-5 h-5 text-primary flex-shrink-0" />
                      {diff.title}
                    </h3>
                    <p className="text-muted-foreground">{diff.description}</p>
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


    </Layout>
  );
};

export default Index;