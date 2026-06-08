export type Project = {
  title: string;
  tech: string;
  desc: string;
  color: string;
  url?: string; // external demo
  repo?: string;
  image?: string;
  slug: string;
  longDesc?: string;
  features?: Array<string | { title: string; desc?: string }>; 
};

const projectImage = (fileName: string) => `${import.meta.env.BASE_URL}projects/${fileName}`;

export const projects: Project[] = [
    {
    title: 'Secure Cloud Storage',
    tech: 'Java • Spring Boot • MongoDB',
    desc: 'A secure cloud storage system with encrypted uploads, access control, and resumable transfers.',
    color: 'from-purple-700/20 to-indigo-700/20',
     url: 'https://jay-file-manager.vercel.app',
    repo: 'https://github.com/jayadithya24/secure-cloud-storage-system',
    image: projectImage('crypto_1.jpeg'),
    slug: 'secure-cloud-storage',
    longDesc: 'Secure Cloud Storage implements end-to-end encryption for files stored in S3, signed URLs for controlled access, user authentication with JWTs, and resumable chunked uploads for large files.',
    features: ['Client-side encryption', 'Signed expiring URLs', 'Chunked resumable uploads', 'Role-based access control'],
  },
  {
    title: 'Hostelops FullStack',
    tech: 'React • Tailwind • Supabase',
    desc: 'A fully responsive online shopping experience with real-time inventory, cart management, and seamless checkout flow.',
    color: 'from-primary/20 to-secondary/20',
    url: 'https://hostelops-fullstack.vercel.app',
    repo: 'https://github.com/jayadithya24/hostelops-fullstack',
    image: projectImage('hostelops2.jpg'),
    slug: 'hostelops-fullstack',
    longDesc: 'Hostelops is a fullstack e-commerce demo built with React and Supabase. It demonstrates realtime inventory and checkout flows.',
    features: [
      { title: 'Realtime inventory', desc: 'Live stock updates pushed across every connected client.' },
      { title: 'Cart management', desc: 'Persisted carts with optimistic UI and quantity controls.' },
      { title: 'Checkout integration', desc: 'End-to-end checkout flow with order confirmation.' },
    ],
  },
  {
    title: 'PhishGuard AI',
    tech: 'React • TypeScript • Recharts',
    desc: 'An interactive data visualization dashboard with real-time metrics, custom charts, and filterable KPI panels.',
    color: 'from-secondary/20 to-accent/20',
    url: 'https://phishguard-omega.vercel.app',
    repo: 'https://github.com/jayadithya24/phishguard',
    image: projectImage('phisgaurd.jpeg'),
    slug: 'phishguard-ai',
    longDesc: 'PhishGuard AI is a visualization product for phishing detection metrics.',
    features: [
      { title: 'Custom charts', desc: 'Highly configurable visualizations for phishing metrics.' },
      { title: 'Filterable KPIs', desc: 'Drill into metrics with flexible filters.' },
      { title: 'Realtime updates', desc: 'Live streaming of detection events and alerts.' },
    ],
  },
  {
    title: 'Thumbnail Generator',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://thumbnail-project-beta.vercel.app',
    repo: 'https://github.com/jayadithya24/thumbnail-project',
    image: projectImage('thumbnail.jpeg'),
    slug: 'thumbnail-generator',
    longDesc: 'Thumbnail Generator creates beautiful video thumbnails with 3D effects.',
    features: [
      { title: '3D effects', desc: 'Integrated Spline scenes for depth and motion.' },
      { title: 'Framer Motion', desc: 'Smooth entrance and hover animations.' },
      { title: 'Spline integration', desc: 'Interactive 3D models embedded inline.' },
    ],
  },
  {
    title: 'Pizza Delivery Website',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://pizza-hut-frontend.netlify.app',
    repo: 'https://github.com/jayadithya24/pizza-hut',
    image: projectImage('pizza.jpeg'),
    slug: 'pizza-delivery',
    longDesc: 'Pizza Delivery demo showcasing ordering flows and animations.',
    features: [
      { title: 'Order flow', desc: 'Step-by-step ordering with confirmation.' },
      { title: 'Menu animation', desc: 'Animated product menus and interactions.' },
      { title: 'Responsive design', desc: 'Optimized for mobile and desktop.' },
    ],
  },
  {
    title: 'Hoops Basketball Store',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://hoops-basketball-store.vercel.app',
    repo: 'https://github.com/hoops-basketball-store',
    image: projectImage('basketball.jpeg'),
    slug: 'hoops-basketball-store',
    longDesc: 'Hoops store demo with product pages and cart.',
    features: [
      { title: 'Product pages', desc: 'Detailed product views with image galleries.' },
      { title: 'Cart', desc: 'Add/remove items and adjust quantities.' },
      { title: 'Checkout', desc: 'Secure payment and order confirmation.' },
    ],
  },
  {
    title: 'Digital Marketing Website',
    tech: 'React • Framer Motion • Spline',
    desc: 'A 3D-enhanced personal portfolio featuring immersive animations, smooth transitions, and glassmorphism design.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://digital-marketing-ashen.vercel.app/',
    repo: 'https://github.com/jayadithya24/digital-marketing',
    image: projectImage('digital.jpeg'),
    slug: 'digital-marketing-website',
    longDesc: 'Digital marketing landing with animations and lead capture.',
    features: [
      { title: 'Landing pages', desc: 'High-conversion hero sections and CTAs.' },
      { title: 'Animations', desc: 'Micro-interactions to improve engagement.' },
      { title: 'Lead capture', desc: 'Form flows and integrations for leads.' },
    ],
  },
  
];

export default projects;

