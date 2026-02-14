import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Users, Code2, Trophy, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

const benefits = [
  {
    icon: Code2,
    title: "Hands-on Experience",
    description: "Work on real projects for actual hackathons, building your portfolio.",
  },
  {
    icon: Users,
    title: "Amazing Community",
    description: "Connect with like-minded peers, mentors, and industry professionals.",
  },
  {
    icon: Trophy,
    title: "Competitive Edge",
    description: "Get prepared to compete and win at national and international hackathons.",
  },
  {
    icon: Sparkles,
    title: "Skill Development",
    description: "Learn new technologies through workshops, training sessions, and mentorship.",
  },
];

const whoCanJoin = [
  "Students from any year or department",
  "Beginners eager to learn programming",
  "Experienced developers looking to level up",
  "Designers interested in tech products",
  "Anyone passionate about innovation",
];

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    department: "",
    skills: "",
    why: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true on submission

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx4eJhHRDa8MvtK6fM1y6R-zlpj_lxt_p4VzsmptC8rTicGMQzAF2kFy8NmvC3yZBHf/exec",
        {
          method: "POST",
          mode: "no-cors",   // ⭐ VERY IMPORTANT
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Since we cannot read response in no-cors mode,
      // reaching here means SUCCESS 🎉
      setIsSubmitted(true);
      setIsLoading(false); // Set loading to false after success

      setFormData({
        name: "",
        email: "",
        year: "",
        department: "",
        skills: "",
        why: "",
      });

    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Something went wrong. Please try again.");
      setIsLoading(false); // Set loading to false after error
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Applications Open</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join <span className="gradient-text">ArcShift</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Become part of a community that builds, learns, and wins together. 
              Your journey to hackathon success starts here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-card/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Join <span className="gradient-text">ArcShift?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Being part of ArcShift opens doors to opportunities you won't find anywhere else
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl card-gradient border border-border/50 text-center group hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Join + Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Who Can Join */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who Can <span className="gradient-text">Join?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                ArcShift welcomes everyone who is curious about technology and willing 
                to put in the effort to learn and grow. No prior experience required!
              </p>

              <div className="space-y-4 mb-8">
                {whoCanJoin.map((item, index) => (
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

              <div className="p-6 rounded-2xl neon-border">
                <h3 className="font-semibold mb-2">Selection Process</h3>
                <p className="text-sm text-muted-foreground">
                  We review applications on a rolling basis. Shortlisted candidates 
                  will be invited for a casual interaction to understand their interests 
                  and goals. No hardcore technical interviews—we value passion and potential!
                </p>
              </div>
            </motion.div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-8 rounded-2xl card-gradient border border-border/50">
                <h3 className="text-2xl font-bold mb-6">Apply Now</h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Application Submitted!</h4>
                    <p className="text-muted-foreground">
                      Thank you for your interest in ArcShift. We'll review your 
                      application and get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="bg-muted/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                          className="bg-muted/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Year of Study</label>
                        <Input
                          name="year"
                          value={formData.year}
                          onChange={handleChange}
                          placeholder="e.g., 2nd Year"
                          required
                          className="bg-muted/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Department</label>
                        <Input
                          name="department"
                          value={formData.department}
                          onChange={handleChange}
                          placeholder="e.g., Computer Science"
                          required
                          className="bg-muted/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Skills & Technologies (optional)
                      </label>
                      <Input
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="e.g., Python, React, Machine Learning"
                        className="bg-muted/50"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Why do you want to join ArcShift?
                      </label>
                      <Textarea
                        name="why"
                        value={formData.why}
                        onChange={handleChange}
                        placeholder="Tell us about your interests and what you hope to achieve..."
                        rows={4}
                        required
                        className="bg-muted/50"
                      />
                    </div>

                    <Button variant="glow" type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? "Submitting..." : "Submit Application"}
                      {isLoading ? null : <ArrowRight className="w-4 h-4" />}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
