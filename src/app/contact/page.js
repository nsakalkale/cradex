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
            Contact <span className="text-purple-600">SoftSell</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Have questions? Get in touch with our team today
          </motion.p>
        </section>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-full text-purple-600 mr-4">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{method.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-medium">{method.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and our team will get back to you as
                soon as possible
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <ContactForm licenseTypes={LICENSE_TYPES} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
