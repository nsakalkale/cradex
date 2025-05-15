"use client";

import { motion } from "framer-motion";
import { Upload, DollarSign, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SellPage() {
  const steps = [
    {
      icon: Upload,
      title: "Upload License Details",
      description:
        "Provide information about your software license including version, purchase date, and any relevant documentation.",
    },
    {
      icon: DollarSign,
      title: "Get Instant Valuation",
      description:
        "Our algorithm calculates a fair market price based on current demand, software version, and remaining license term.",
    },
    {
      icon: ShieldCheck,
      title: "Complete Secure Sale",
      description:
        "Once you accept an offer, we handle the secure transfer and payment process from start to finish.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold sm:text-5xl md:text-6xl mb-6"
          >
            Sell Your <span className="text-purple-600">Software Licenses</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600 mb-8"
          >
            Get cash for unused software licenses in just a few simple steps
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="#start-selling">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 px-8 py-6 text-lg font-semibold">
                Start Selling Now
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">How Selling Works</h2>
              <p className="text-gray-600">
                Our process is designed to be simple, secure, and fast
              </p>
            </motion.div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="md:w-1/3 flex justify-center">
                    <div className="bg-purple-100 p-6 rounded-full text-purple-600">
                      <step.icon className="h-10 w-10" />
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">
                      <span className="text-purple-600 mr-2">{index + 1}.</span>
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="start-selling"
          className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-8 md:p-12 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Sell Your Licenses?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Get started today and receive an offer within minutes
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="text-purple-600 bg-white hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                >
                  Get a Free Valuation
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
