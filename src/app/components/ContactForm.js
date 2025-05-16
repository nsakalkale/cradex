"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function ContactForm({ licenseTypes }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form submitted:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  // Animation variants
  const inputAnimation = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name and Email - First Row */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Name Input */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={inputAnimation}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.name
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.name.message}
            </p>
          )}
        </motion.div>

        {/* Email Input */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          variants={inputAnimation}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full px-4 py-2 rounded-lg border ${
              errors.email
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </motion.div>
      </div>

      {/* Company - Second Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        variants={inputAnimation}
      >
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
          placeholder="Your company name"
        />
      </motion.div>

      {/* License Type - Third Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
        variants={inputAnimation}
      >
        <label
          htmlFor="licenseType"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
        >
          License Type <span className="text-red-500">*</span>
        </label>
        <select
          id="licenseType"
          {...register("licenseType", {
            required: "Please select a license type",
          })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.licenseType
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-colors appearance-none`}
        >
          <option value="">Select a license type</option>
          {licenseTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.licenseType && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.licenseType.message}
          </p>
        )}
      </motion.div>

      {/* Message - Fourth Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
        variants={inputAnimation}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Please enter your message" })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message
              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
              : "border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-colors`}
          placeholder="Tell us about your software licenses..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {errors.message.message}
          </p>
        )}
      </motion.div>

      {/* Submit Button - Fifth Row */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
        variants={inputAnimation}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed hover:cursor-pointer"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Submit Message"
          )}
        </Button>
      </motion.div>
    </form>
  );
}
