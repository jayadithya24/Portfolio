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
    tech: 'Java • Spring Boot • AWS S3 • AES • HMAC • BCrypt',
    desc: 'Spring Boot backend providing AES-encrypted file storage, secure tokenized sharing, and operational protections against abuse.',
    color: 'from-purple-700/20 to-indigo-700/20',
    url: 'https://jay-file-manager.vercel.app',
    repo: 'https://github.com/jayadithya24/secure-cloud-storage-system',
    image: projectImage('crypto_1.jpeg'),
    slug: 'secure-cloud-storage',
    longDesc:
      'Implemented a Spring Boot secure cloud storage backend with AES-encrypted file‑at‑rest, HMAC-signed auth tokens, and BCrypt-hashed credentials. Built REST APIs for upload and download (with on‑the‑fly decryption) and time‑limited, tokenized public share links supporting VIEW/EDIT permissions, configurable max‑download limits, and server‑side enforcement. The service also records owner audit logs for shares and actions and includes anomaly‑detection (IP‑change detection and rate‑limit checks) to flag and restrict suspicious users, improving security and misuse resilience.',
    features: [
      { title: 'AES encrypted at‑rest', desc: 'Files encrypted server-side using AES before storage.' },
      { title: 'HMAC auth tokens', desc: 'Signed tokens for API authentication and share links.' },
      { title: 'BCrypt credentials', desc: 'Secure password hashing for user accounts.' },
      { title: 'Upload / download APIs', desc: 'REST endpoints with on‑the‑fly decryption for downloads.' },
      { title: 'Tokenized share links', desc: 'Time‑limited VIEW/EDIT tokens with max‑download limits and server enforcement.' },
      { title: 'Audit logging', desc: 'Owner-visible audit logs for share actions and accesses.' },
      { title: 'Anomaly detection', desc: 'IP‑change detection and rate‑limit checks to flag suspicious activity.' },
    ],
  },
  {
    title: 'Hostelops FullStack',
    tech: 'React • Vite • Tailwind • Node.js • Express • MongoDB • Mongoose • JWT',
    desc: 'A full‑stack complaint‑management app for hostels with student and admin interfaces.',
    color: 'from-primary/20 to-secondary/20',
    url: 'https://hostelops-fullstack.vercel.app',
    repo: 'https://github.com/jayadithya24/hostelops-fullstack',
    image: projectImage('hostelops2.jpg'),
    slug: 'hostelops-fullstack',
    longDesc:
      "HostelOps is a full‑stack complaint‑management application. Students can register/login, submit complaints, and track their status. Admins can authenticate, view all complaints, update status, and delete entries. The backend is built with Node.js and Express using MongoDB with Mongoose; authentication uses JWTs and passwords are hashed with bcrypt (see server.js and User.js). The frontend is a React + Vite + Tailwind app with pages for Home, Login, Register, Dashboard and Admin that call the API via api.js. To run locally provide `MONGO_URI` and `JWT_SECRET`, start the backend, then the frontend.",
    features: [
      { title: 'User auth (register/login)', desc: 'Secure signup and login backed by JWT and bcrypt password hashing.' },
      { title: 'Submit & track complaints', desc: 'Students submit complaints and follow status updates from the dashboard.' },
      { title: 'Admin management', desc: 'Admins can view, update status, and delete complaints via the admin UI.' },
      { title: 'API integration', desc: 'Frontend calls backend endpoints via `api.js`; see server routes in server.js.' },
    ],
  },
  {
    title: 'PhishGuard AI',
    tech: 'React • TypeScript • Recharts • Node.js • Express • Python (ML)',
    desc: 'Full‑stack phishing detection: React client, Node/Express API, and a Python ML service for risk scoring.',
    color: 'from-secondary/20 to-accent/20',
    url: 'https://phishguard-omega.vercel.app',
    repo: 'https://github.com/jayadithya24/phishguard',
    image: projectImage('phisgaurd.jpeg'),
    slug: 'phishguard-ai',
    longDesc:
      'PhishGuard is a full‑stack phishing detection system combining a React front‑end with a Node/Express backend and a separate Python ML service. The frontend provides registration, login, URL scanning, and analytics components (e.g. `ScanForm`, `HistoryTable`, `ThreatTrendChart`). The server handles auth, scan endpoints, and persistence via models such as `User` and `ScanReport`. The ML service (train.py, app.py) exposes training and inference endpoints used by server‑side services (urlService, riskService, domainService). Heuristic helpers (e.g. entropy calculations in utils/entropy.js) are combined with ML signals to produce risk scores and reports. Users can submit URLs for automated analysis, view historical reports and trends, and update detection models independently.',
    features: [
      { title: 'URL scanning flow', desc: 'Frontend components to submit URLs and view scan results.' },
      { title: 'Node/Express API', desc: 'Server endpoints for auth, scanning, and report persistence (User, ScanReport models).' },
      { title: 'Python ML service', desc: 'Separate service (train.py, app.py) for training and inference of risk models.' },
      { title: 'Heuristics + ML', desc: 'Combines entropy/feature heuristics with ML scores for robust risk assessment.' },
      { title: 'Historical reports', desc: 'Store and visualize scan history and trends via charts and tables.' },
      { title: 'Extensible architecture', desc: 'ML models and services can be updated independently from the frontend and API.' },
    ],
  },
  {
    title: 'Thumbnail Project',
    tech: 'Python • Flask (or similar) • HTML templates • JS frontend',
    desc: 'A small Python web app that generates, manages, and serves image thumbnails with a browser UI.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://thumbnail-project-beta.vercel.app',
    repo: 'https://github.com/jayadithya24/thumbnail-project',
    image: projectImage('thumbnail.jpeg'),
    slug: 'thumbnail-generator',
    longDesc:
      'Thumbnail Project is a compact Python web application (root `app.py`) providing backend API endpoints and a separate frontend UI. It uses `models.py`, `database.py`, and `config.py` for persistence and configuration, serves HTML from `templates` and static assets from `static` (client JS/CSS under `js` and `css`), and includes deployment files such as `Procfile` and `requirements.txt`. The app generates and manages image thumbnails via backend endpoints and exposes a browser interface for upload, preview, and download.',
    features: [
      { title: 'Python backend (app.py)', desc: 'Server app exposing API endpoints to generate and serve thumbnails.' },
      { title: 'Persistence & config', desc: 'Uses `models.py`, `database.py`, and `config.py` for storage and settings.' },
      { title: 'Templates & static', desc: 'Renders HTML from `templates` and serves JS/CSS under `static/js` and `static/css`.' },
      { title: 'Deployment-ready', desc: 'Includes `Procfile` and `requirements.txt` for easy deployment.' },
    ],
  },
  {
    title: 'Pizza Delivery Website',
    tech: 'Node.js • Express • JavaScript • HTML • CSS',
    desc: 'A simple pizza ordering demo with a Node/Express API and static frontend pages.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://pizza-hut-frontend.netlify.app',
    repo: 'https://github.com/jayadithya24/pizza-hut',
    image: projectImage('pizza.jpeg'),
    slug: 'pizza-delivery',
    longDesc:
      'This repository implements a small pizza ordering web app. The backend is Node.js/Express and exposes pizza-related APIs with models, controllers, routes, a database configuration, and a seeder to populate sample pizzas. The frontend is a static site (HTML, CSS, client JS) providing pages for menu, cart, checkout, login/register, and contact. The server and frontend are separated: the frontend consumes the server APIs to browse pizzas, add items to a cart, and complete orders, demonstrating a lightweight e‑commerce flow.',
    features: [
      { title: 'Node/Express API', desc: 'Pizza model, controllers, routes and database config on the server.' },
      { title: 'Seeder & sample data', desc: 'Seeder script to populate example pizzas for development.' },
      { title: 'Static frontend', desc: 'HTML/CSS/JS pages for menu, cart, checkout, auth and contact.' },
      { title: 'Client consumes APIs', desc: 'Frontend calls backend pizza APIs to browse and order items.' },
    ],
  },
  {
    title: 'Hoops Basketball Store',
    tech: 'React • TypeScript • Vite • Tailwind • Node.js • Express • Prisma',
    desc: 'E‑commerce web app for basketball products with shop, cart, checkout, auth, admin and blog.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://hoops-basketball-store.vercel.app',
    repo: 'https://github.com/hoops-basketball-store',
    image: projectImage('basketball.jpeg'),
    slug: 'hoops-basketball-store',
    longDesc:
      'Hoops is a full e‑commerce web application focused on basketball‑related products. The backend is a Node.js + TypeScript API (Express‑style) using Prisma ORM for database access, with a DB seeder and authentication/authorization middleware for protected admin routes. The frontend is a React + TypeScript app scaffolded with Vite and styled with Tailwind CSS; a shared component library lives under `src/ui`. The app includes product listing and detail pages, cart management, a checkout flow, user auth and account pages, admin product management, and a blog for content. API routes cover products, cart, and checkout, enabling the frontend to perform product queries, cart updates, and place orders.',
    features: [
      { title: 'Product listing & pages', desc: 'Catalog, product details, and image galleries.' },
      { title: 'Cart & checkout', desc: 'Add/remove items, quantity management and checkout flow.' },
      { title: 'Auth & admin', desc: 'User authentication plus admin routes for product management.' },
      { title: 'Prisma + seeded DB', desc: 'Type‑safe ORM with seeder scripts to populate initial data.' },
      { title: 'React + Vite frontend', desc: 'Fast React + TypeScript SPA styled with Tailwind and reusable `src/ui` components.' },
      { title: 'API routes', desc: 'Server endpoints for products, cart operations and order checkout.' },
    ],
  },
  {
    title: 'Digital Marketing Website',
    tech: 'Node.js • Express • TypeScript • React • Vite • Tailwind • Supabase',
    desc: 'Full‑stack marketing and portfolio site with lead capture, newsletter, and project pages.',
    color: 'from-accent/20 to-primary/20',
    url: 'https://digital-marketing-ashen.vercel.app/',
    repo: 'https://github.com/jayadithya24/digital-marketing',
    image: projectImage('digital.jpeg'),
    slug: 'digital-marketing-website',
    longDesc:
      'This is a full‑stack digital‑marketing web app. The backend is Node/Express (server.js) with controllers and routes for contact, newsletter, and projects and models like `Lead` and `Project`. The frontend is a TypeScript React app built with Vite and Tailwind, containing pages for Home, Services, Portfolio, Contact, About and Auth, plus components such as `NewsletterSignup`, `Navigation`, and `Footer`. The app collects leads and project data, supports a newsletter signup flow backed by Supabase serverless functions and a subscription table migration, and serves as a marketing/portfolio site for client acquisition and outreach.',
    features: [
      { title: 'Lead collection', desc: 'Contact form and lead model to capture prospects.' },
      { title: 'Newsletter signup', desc: 'Signup flow backed by Supabase serverless functions and migration-ready subscription table.' },
      { title: 'Pages & components', desc: 'Home, Services, Portfolio, Contact, About, Auth and reusable UI components.' },
      { title: 'Server controllers & routes', desc: 'Backend endpoints for contact, newsletter, and projects.' },
      { title: 'Project data', desc: 'Manage and serve project entries for the Portfolio section.' },
      { title: 'Deploy-ready', desc: 'Structured for deployment with serverless functions and backend API.' },
    ],
  },
  
];

export default projects;

