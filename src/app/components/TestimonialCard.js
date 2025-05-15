"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-800"
    >
      <div className="p-6">
        <div className="mb-4 flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <p className="mb-6 text-gray-600 dark:text-gray-300">{content}</p>
        <div className="flex items-center">
          <div className="mr-4 h-12 w-12 rounded-full bg-gradient-to-r from-purple-100 to-blue-100"></div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {name}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
