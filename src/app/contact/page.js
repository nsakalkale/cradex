"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { LICENSE_TYPES } from "@/lib/constants";

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Our team will get back to you within 24 hours",
      value: "support@softsell.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 5pm",
      value: "+1 (555) 123-4567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Software Blvd, San Francisco, CA 94107",
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
            Contact{" "}
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
            Have questions? Get in touch with our team today
          </motion.p>
        </section>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow hover:cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full text-purple-600 dark:text-purple-300 mr-4">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {method.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {method.description}
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {method.value}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and our team will get back to you as
                soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <ContactForm licenseTypes={LICENSE_TYPES} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
