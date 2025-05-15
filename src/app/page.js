"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "./components/TestimonialCard";
import ChatWidget from "./components/ChatWidget";
import { HOW_IT_WORKS, WHY_CHOOSE_US, TESTIMONIALS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative">
      {/* Floating chat toggle */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-4 py-3 text-white shadow-lg transition-all hover:shadow-xl"
      >
        <Sparkles size={20} />
        <span>AI Assistant</span>
      </button>

      {/* Chat Widget */}
      <ChatWidget isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute h-full w-full bg-[url('/grid.svg')] bg-repeat [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
        </div>

        <div className="container relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Turn Unused Software Into
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                {" "}
                Cash
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
              SoftSell helps businesses monetize their unused software licenses
              with our secure, fast, and transparent marketplace.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/sell">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-6 text-lg font-semibold hover:from-purple-700 hover:to-blue-600"
                >
                  Sell My Licenses
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-lg font-semibold"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Selling your unused software licenses has never been easier
            </p>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-3">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl p-6 transition-all hover:bg-gray-50"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="mt-4 flex items-center text-purple-600 opacity-0 transition-all group-hover:opacity-100">
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Why Choose SoftSell
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We're revolutionizing the way companies handle unused software
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="overflow-hidden rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600">
                  <reason.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-semibold">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Trusted by Tech Leaders
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Don't just take our word for it
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
