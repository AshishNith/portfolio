// Update category colors
const techStacks = [
  {
    category: "Programming Languages",
    color: "from-[#0052CC] to-[#0747A6]",
    // ... rest of the code
  },
  {
    category: "Frontend Development",
    color: "from-[#2684FF] to-[#0052CC]",
    // ... rest of the code
  },
  // Update other category colors similarly
]

// Update active category button
className={`${
  activeCategory === stack.category
    ? 'bg-[#6D28D9] text-white'
    : 'bg-white/10 backdrop-blur-md text-white/60 hover:text-white'
} px-4 py-2 rounded-full transition-all duration-300`}

// Update skill cards
className="group glass p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 bg-white/10 backdrop-blur-xl" 