import React, { useState, useRef } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { cn } from '../lib/utils';

const Header: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
      setVisible(true);
    } else {
      setIsScrolled(false);
      setVisible(false);
    }
  });

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Programs", link: "#programs" },
    { name: "Get Involved", link: "#get-involved" },
    { name: "Impact", link: "#impact" },
    { name: "Contact", link: "#contact" }
  ];

  return (
    <motion.header
      ref={ref}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <motion.div
          animate={{
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible
              ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
              : "none",
            width: visible ? "80%" : "100%",
            y: visible ? 20 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 50,
          }}
          className={cn(
            "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 md:flex",
            visible && "bg-white/10"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 z-20">
            {isScrolled ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <Heart className="w-8 h-8 text-green-600" />
                <span className="font-bold text-xl">CR</span>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
              >
                <Heart className="w-8 h-8 text-green-600" />
                <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                  CommunityReach
                </span>
              </motion.div>
            )}
          </a>

          {/* Navigation Items */}
          <motion.div
            onMouseLeave={() => setHoveredItem(null)}
            className="absolute inset-0 flex-1 flex items-center justify-center space-x-2"
          >
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                onMouseEnter={() => setHoveredItem(idx)}
                className={`relative px-4 py-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                {hoveredItem === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 rounded-full bg-green-100"
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <a
            href="#donate"
            className="relative z-20 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            Donate Now
          </a>
        </motion.div>

        {/* Mobile Navigation */}
        <motion.div
          animate={{
            backdropFilter: visible ? "blur(10px)" : "none",
            boxShadow: visible
              ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05)"
              : "none",
            width: visible ? "90%" : "100%",
            y: visible ? 20 : 0,
          }}
          className={cn(
            "relative z-50 mx-auto flex md:hidden w-full items-center justify-between rounded-full px-4 py-2",
            visible && "bg-white/80"
          )}
        >
          <a href="#" className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-green-600" />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              CR
            </span>
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={isScrolled ? 'text-gray-800' : 'text-white'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute top-24 left-4 right-4 bg-white rounded-lg shadow-lg p-6 z-50"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    className="text-gray-800 hover:text-green-600 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#donate"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md text-center transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Donate Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;