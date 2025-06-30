import React from "react";
import { motion } from "framer-motion";

export default function Packages() {
  return (
    <motion.div
      className="mt-10 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold mb-10">Our Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-700/30 border border-white/20 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Standard Package</h3>
          <ul className="text-gray-300 text-left list-disc pl-6 space-y-2">
            <li>Up to 5-Page Website</li>
            <li>SEO Setup</li>
            <li>1 Month Social Media Posts</li>
            <li>Google My Business Setup</li>
          </ul>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-indigo-700/30 border border-white/20 p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-4">Premium Package</h3>
          <ul className="text-gray-300 text-left list-disc pl-6 space-y-2">
            <li>Custom Web Design & Hosting</li>
            <li>Advanced Digital Marketing</li>
            <li>Corporate Video & Photo Shoot</li>
            <li>Monthly Analytics & Reports</li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}