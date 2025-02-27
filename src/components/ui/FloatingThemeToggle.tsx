"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const FloatingThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    // Briefly expand the label when changing theme
    setIsExpanded(true);
    setTimeout(() => setIsExpanded(false), 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        className="relative flex items-center"
      >
        {/* Theme label - shows briefly when changing theme or on hover */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isExpanded ? 1 : 0, x: isExpanded ? 0 : 10 }}
          className="absolute right-full mr-3 bg-white dark:bg-dark-card px-3 py-1 rounded-full shadow-md text-sm font-medium whitespace-nowrap"
        >
          {theme === "light" ? "Light Mode" : "Dark Mode"}
        </motion.div>
        
        <motion.button
          className="flex items-center justify-center p-3 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-100 dark:border-dark-border"
          onClick={toggleTheme}
          onHoverStart={() => setIsExpanded(true)}
          onHoverEnd={() => setIsExpanded(false)}
          whileTap={{ scale: 0.94 }}
          whileHover={{ scale: 1.1, rotate: theme === "light" ? -15 : 15 }}
          aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? (
            <Sun className="h-5 w-5 text-[#0d3445]" />
          ) : (
            <Moon className="h-5 w-5 text-white" />
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default FloatingThemeToggle;
