"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

export default function ContactForm({ licenseTypes }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // In a real app, you would send this data to your backend
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email Address
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
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Company
        </label>
        <input
          type="text"
          id="company"
          {...register("company")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <label
          htmlFor="licenseType"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          License Type
        </label>
        <select
          id="licenseType"
          {...register("licenseType", { required: "License type is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        >
          <option value="">Select a license type</option>
          {licenseTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.licenseType && (
          <p className="mt-1 text-sm text-red-600">
            {errors.licenseType.message}
          </p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Message is required" })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
        >
          Submit
        </Button>
      </motion.div>
    </form>
  );
}
