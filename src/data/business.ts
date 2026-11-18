export const business = {
  name: "JN Glass & Mirror",
  phone: "281-714-0745",
  phoneHref: "tel:+12817140745",
  email: "info@jnglassandmirror.com",
  tagline: "Commercial & Residential | Quality Service You Can Trust",
  hours: "Open 24 Hours",
  location: "Proudly Serving Houston, Texas",
  mapEmbed: "https://www.google.com/maps?q=Houston,TX&output=embed",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  { icon: "AppWindow", title: "Windows", text: "New installs, replacements and repairs for homes and businesses — energy-efficient glass that seals tight." },
  { icon: "DoorOpen", title: "Doors", text: "Glass entry, patio and sliding doors fitted precisely for smooth, secure everyday use." },
  { icon: "ShowerHead", title: "Shower Doors", text: "Custom frameless and semi-frameless shower enclosures that make any bathroom feel bigger." },
  { icon: "Square", title: "Mirrors", text: "Wall mirrors, gym mirrors and custom-cut vanity mirrors, polished and installed flawlessly." },
  { icon: "Store", title: "Storefronts", text: "Commercial storefront glass and aluminum framing that looks sharp and stands up to Houston weather." },
  { icon: "Fence", title: "Glass Railings", text: "Modern glass railings for stairs, balconies and patios — safe, clean and open views." },
] as const;

export const whyUs = [
  { icon: "Clock", title: "24-Hour Service", text: "Day or night, we answer the phone and show up." },
  { icon: "Zap", title: "Fast Response", text: "Quick dispatch across the Houston area." },
  { icon: "Award", title: "Quality Workmanship", text: "Precise measurements and clean installs every time." },
  { icon: "Building2", title: "Residential & Commercial", text: "Experienced with homes, offices and retail spaces." },
  { icon: "BadgeDollarSign", title: "Fair Pricing", text: "Honest, upfront quotes with no surprises." },
  { icon: "ClipboardCheck", title: "Free Estimates", text: "We'll measure and quote at no cost to you." },
] as const;

export const galleryCategories = ["All", "Shower Doors", "Storefronts", "Railings", "Mirrors"] as const;

// Replace `src` with your real project photos.
export const gallery = [
  { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=900&q=70", alt: "Frameless glass shower door", category: "Shower Doors" },
  { src: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=900&q=70", alt: "Modern shower enclosure", category: "Shower Doors" },
  { src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=70", alt: "Retail storefront glass", category: "Storefronts" },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=70", alt: "Office glass partitions", category: "Storefronts" },
  { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=70", alt: "Glass balcony railing", category: "Railings" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=70", alt: "Staircase glass railing", category: "Railings" },
  { src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&q=70", alt: "Large wall mirror", category: "Mirrors" },
  { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=900&q=70", alt: "Bathroom vanity mirror", category: "Mirrors" },
];

export const steps = [
  { title: "Call or Request a Quote", text: "Reach us by phone any time or send the form." },
  { title: "Free Estimate", text: "We visit, assess and give you a clear price." },
  { title: "Measure & Install", text: "Precise measurements, professional installation." },
  { title: "Final Inspection", text: "We check every detail before we leave." },
];

export const reviews = [
  { name: "Maria G.", place: "Katy, TX", text: "They replaced our shower door in a day. Beautiful work and very professional." },
  { name: "David R.", place: "Downtown Houston", text: "Our storefront glass was broken at 2am — they came out the same night. Lifesavers." },
  { name: "Ashley T.", place: "Sugar Land, TX", text: "Fair price, clean install, and the glass railing looks amazing on our balcony." },
  { name: "James L.", place: "The Heights", text: "Great communication from quote to install. Highly recommend JN Glass & Mirror." },
];
