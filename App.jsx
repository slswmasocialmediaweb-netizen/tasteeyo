import React, { useState } from 'react';
import { Menu, X, Pipette, Leaf, Sparkles, Snowflake, ShoppingCart } from 'lucide-react';

// --- Icon Definitions ---
const icons = {
  Pipette, 
  Leaf,    
  Sparkles, 
  Snowflake, 
  ShoppingCart, 
};

// Mock Product Data
const PRODUCTS = [
  { 
    name: "Strawberry Surge", 
    color: "bg-rose-500/30 border-rose-500", 
    bgColor: "bg-rose-50",
    text: "text-rose-700",
    description: "Sweet, tangy strawberry swirl—a fan favorite for a reason.",
    image: "https://placehold.co/300x400/F43F5E/ffffff?text=Strawberry"
  },
  { 
    name: "Blueberry Blast", 
    color: "bg-indigo-500/30 border-indigo-500", 
    bgColor: "bg-indigo-50",
    text: "text-indigo-700",
    description: "Rich blueberry flavor, packed with antioxidants and fun.",
    image: "https://placehold.co/300x400/6366F1/ffffff?text=Blueberry"
  },
  { 
    name: "Mango Tango", 
    color: "bg-amber-500/30 border-amber-500", 
    bgColor: "bg-amber-50",
    text: "text-amber-700",
    description: "Tropical mango goodness that melts in your mouth (or stays frozen!).",
    image: "https://placehold.co/300x400/F59E0B/ffffff?text=Mango"
  },
  { 
    name: "Pure Original", 
    color: "bg-gray-400/30 border-gray-400", 
    bgColor: "bg-gray-50",
    text: "text-gray-700",
    description: "Creamy, classic yogurt taste for the purists. Perfect plain or mixed.",
    image: "https://placehold.co/300x400/9CA3AF/ffffff?text=Original"
  },
];

// --- Components ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Our Flavors', href: '#flavors' },
    { name: 'Why Icicles?', href: '#usp' },
    { name: 'Shop Now', href: '#shop' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <a href="#" className="text-3xl font-extrabold text-teal-600 tracking-wider font-display">
          Tastee<span className="text-rose-500">Yo</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-teal-600 font-medium transition duration-150 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-xl">
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-lg text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="bg-gradient-to-br from-teal-50 to-white py-16 md:py-24 rounded-b-3xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Hero Content */}
      <div className="lg:pr-12 text-center lg:text-left">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-gray-900 leading-tight">
          Yogurt, Reimagined. <span className="text-teal-600">TasteeYo Icicles.</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
          The creamy, nutritious goodness of yogurt, packed into a fun, freezer-ready, mess-free tube. Grab and go!
        </p>
        <div className="mt-8 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
          <a
            href="#flavors"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg text-white bg-rose-500 hover:bg-rose-600 transition duration-300 transform hover:scale-[1.03]"
          >
            Explore Flavors
          </a>
          <a
            href="#usp"
            className="inline-flex items-center justify-center px-8 py-3 border border-rose-500 text-base font-semibold rounded-full text-rose-500 bg-white hover:bg-rose-50 transition duration-300"
          >
            <Snowflake className="w-5 h-5 mr-2" />
            Freeze Fun
          </a>
        </div>
      </div>

      {/* Hero Image Mockup */}
      <div className="relative flex justify-center lg:justify-end">
        <img
          src="https://placehold.co/400x550/0D9488/ffffff?text=TasteeYo+Icicle+Variety"
          alt="A collection of TasteeYo yogurt icicle tubes"
          className="w-full max-w-sm h-auto rounded-3xl shadow-2xl shadow-teal-500/50 transform rotate-3 hover:rotate-0 transition duration-500"
          onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x550/0D9488/ffffff?text=Yogurt+Icicle+Product"; }}
        />
        <div className="absolute -bottom-4 -left-4 bg-teal-200 p-4 rounded-full shadow-lg hidden md:block">
          <Sparkles className="h-8 w-8 text-teal-700" />
        </div>
      </div>
    </div>
  </section>
);

const FeaturesUSP = () => {
  const usps = [
    { icon: icons.Pipette, title: "Mess-Free Tubes", description: "No spoons, no bowls, just pure enjoyment right from the tube. Perfect for busy parents and kids." },
    { icon: icons.Snowflake, title: "Ready-to-Freeze", description: "Pop them in the freezer for a delicious, creamy yogurt popsicle, or enjoy chilled as a gogurt." },
    { icon: icons.Leaf, title: "Real Fruit Goodness", description: "Made with natural ingredients and real fruit purees. A healthy snack you can trust." },
    { icon: icons.Sparkles, title: "Kid-Approved Flavors", description: "Our exciting flavor combinations keep kids happy, making healthy snacking easy." },
  ];

  return (
    <section id="usp" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900">The <span className="text-teal-600">TasteeYo</span> Difference</h2>
          <p className="mt-3 text-xl text-gray-500 max-w-3xl mx-auto">
            It's not just yogurt, it's a convenient, fun snack revolution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp, index) => (
            <div 
              key={index} 
              className="p-6 bg-teal-50 rounded-2xl shadow-lg border-b-4 border-teal-400 hover:shadow-xl transition duration-300 text-center"
            >
              <usp.icon className="w-10 h-10 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{usp.title}</h3>
              <p className="text-gray-600 text-sm">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductFlavors = () => (
  <section id="flavors" className="py-20 bg-gray-50 rounded-3xl">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">Discover Our <span className="text-rose-500">Flavors</span></h2>
        <p className="mt-3 text-xl text-gray-500">Four amazing tastes, ready for your fridge or freezer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map((product, index) => (
          <div 
            key={index} 
            className={`p-6 ${product.bgColor} rounded-xl border-4 ${product.color} shadow-lg transition duration-300 hover:scale-[1.02]`}
          >
            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-64 object-contain rounded-lg shadow-md"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/300x400/${product.color.split('/')[0].split('-')[1]}/ffffff?text=${product.name}`; }}
              />
            </div>
            <h3 className={`text-2xl font-bold ${product.text} mb-2`}>{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <button
              className={`w-full flex items-center justify-center py-2 px-4 rounded-full font-semibold ${product.text} border-2 ${product.color.replace('/30', '')} hover:bg-white transition duration-200`}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      <div id="shop" className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-xl font-bold rounded-full shadow-2xl text-white bg-teal-600 hover:bg-teal-700 transition duration-300 transform hover:scale-105"
        >
          Shop The Variety Pack!
        </a>
      </div>
    </div>
  </section>
);


const CallToAction = () => (
  <section className="py-20 bg-rose-500">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        Stop Spooning. Start Squeezing.
      </h2>
      <p className="mt-4 text-xl text-white/90 max-w-3xl mx-auto">
        Switch to the convenience of yogurt icicles. Perfect for lunchboxes, road trips, or an after-dinner treat.
      </p>
      <a
        href="#shop"
        className="mt-8 inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg text-rose-500 bg-white hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1"
      >
        Buy Now & Get 10% Off Your First Order
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-900 mt-0 pt-12 pb-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        
        {/* Brand Info */}
        <div>
          <h4 className="text-3xl font-extrabold text-teal-600 mb-4 font-display">
            Tastee<span className="text-rose-500">Yo</span>
          </h4>
          <p className="text-gray-400 text-sm">Freshness, Fun, & Zero Mess.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#flavors" className="text-gray-400 hover:text-teal-400 transition">Our Flavors</a></li>
            <li><a href="#usp" className="text-gray-400 hover:text-teal-400 transition">Our Mission</a></li>
            <li><a href="#shop" className="text-gray-400 hover:text-teal-400 transition">Shop Online</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Shipping & Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-teal-400 transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
          <p className="text-gray-400 text-sm">
            Email: hello@tasteeyo.com<br/>
            Social: @TasteeYoSnacks
          </p>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} TasteeYo, Inc. All rights reserved.
      </div>
    </div>
  </footer>
);


// --- Main App Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesUSP />
        <ProductFlavors />
        <CallToAction />
      </main>
      
      <Footer />
      
    </div>
  );
}