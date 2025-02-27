"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      className="relative flex items-center justify-center w-12 h-6 rounded-full bg-[#0d3445]/10 dark:bg-white/10 p-1 transition-colors focus:outline-none"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <span className="sr-only">Toggle theme</span>
      
      {/* Track */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#0d3445]/80 to-[#0d3445] dark:from-[#0d3445]/50 dark:to-[#0d3445]/70 rounded-full"
        layout
      />
      
      {/* Thumb */}
      <motion.div 
        className="h-4 w-4 rounded-full bg-white shadow-md flex items-center justify-center z-10"
        animate={{ x: theme === "dark" ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {theme === "light" ? (
          <Sun className="h-3 w-3 text-[#0d3445]" />
        ) : (
          <Moon className="h-3 w-3 text-[#0d3445]" />
        )}
      </motion.div>
      
      {/* Icons */}
      <span className={`absolute left-1 opacity-${theme === 'light' ? '0' : '70'} transition-opacity`}>
        <Sun className="h-3 w-3 text-white" />
      </span>
      <span className={`absolute right-1 opacity-${theme === 'dark' ? '0' : '70'} transition-opacity`}>
        <Moon className="h-3 w-3 text-white" />
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
