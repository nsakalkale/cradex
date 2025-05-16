"use client";
import { motion } from "framer-motion";
import { Users, Globe, Shield, BarChart } from "lucide-react";
export default function AboutPage() {
  const stats = [
    {
      value: "10,000+",
      label: "Licenses Sold",
      icon: Users,
      bgcolor: "bg-purple-100",
      iconcolor: "text-purple-600",
    },
    {
      value: "$50M+",
      label: "Paid to Sellers",
      icon: BarChart,
      bgcolor: "bg-blue-100",
      iconcolor: "text-blue-600",
    },
    {
      value: "500+",
      label: "Enterprise Clients",
      icon: Globe,
      bgcolor: "bg-green-100",
      iconcolor: "text-green-600",
    },
    {
      value: "100%",
      label: "Secure Transactions",
      icon: Shield,
      bgcolor: "bg-amber-100",
      iconcolor: "text-amber-600",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Former VP at a major software company with 15+ years in the industry.",
      profilepic: "/images/alex.png",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Security expert and software architect with a passion for marketplace platforms.",
      profilepic: "/images/sarah.png",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Sales",
      bio: "Helped build three successful SaaS startups from the ground up.",
      profilepic: "/images/alex.png",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 font-js">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6 text-gray-900 dark:text-white"
          >
            About{" "}
            <span className="text-purple-600 dark:text-purple-400">
              SoftSell
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300"
          >
            Revolutionizing the way businesses handle their unused software
            assets
          </motion.p>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-3 rounded-full ${stat.bgcolor} dark:bg-opacity-20 dark:text-current`}
                    >
                      <Icon className={`h-6 w-6 ${stat.iconcolor}`} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-center p-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                SoftSell was founded in 2020 by a team of software industry
                veterans who recognized the massive inefficiency in how
                businesses manage their unused software licenses.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                After seeing companies waste millions on shelfware while others
                struggled to afford necessary tools, we set out to create a
                secure, transparent marketplace for software license resale.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, SoftSell is the leading platform for software license
                resale, trusted by businesses of all sizes to maximize the value
                of their software investments.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl aspect-video w-full h-auto">
                <img src="/images/about.png" width="100%" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team */}
        <section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Meet Our Leadership
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A team of passionate experts dedicated to transforming the
              software resale industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full aspect-square w-32 h-32 mx-auto mb-6 flex justify-center items-center">
                  <img src={`${member.profilepic}`} width="75%" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
