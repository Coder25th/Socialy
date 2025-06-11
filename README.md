📱 Socially

Socially is a full-featured, modern social networking platform built with Next.js, enabling users to connect, share, and grow in an interactive environment. It integrates powerful technologies such as Clerk for secure authentication, Prisma for robust database interaction, and Tailwind CSS for a responsive and accessible UI.
🚀 Features

    🔐 User Authentication & Profiles
    Seamless sign-up, login, and profile management with Clerk.

    📝 Post Management
    Create, update, delete, and view posts with support for image uploads.

    👥 Follow System
    Follow and unfollow other users to personalize your feed.

    🛎️ Real-Time Notifications
    Instant updates for follows, likes, and other user interactions.

    🌗 Light/Dark Mode
    Theme toggle with accessible contrast and a custom ThemeProvider.

    📱 Responsive Design
    Optimized for both desktop and mobile experiences.

    📷 Image Uploads
    Easily add profile images and media content to your posts.

    ♿ Accessible UI Components
    Built using Radix UI for consistent and accessible components.

🧰 Tech Stack
Layer Tech
Framework Next.js
Auth Clerk
Database PostgreSQL + Prisma
Styling Tailwind CSS
UI Library Radix UI
Fonts Geist
Toasts react-hot-toast
📁 Project Structure

socially/
├── app/ → App directory (Next.js routing, layouts, pages)
├── components/ → Reusable UI components (Navbar, Sidebar, Post, etc.)
├── actions/ → Server-side actions (Posts, Users, Notifications)
├── lib/ → Utilities and helper functions
├── prisma/ → Prisma schema and migrations
├── public/ → Static assets (images, icons, etc.)
├── styles/ → Global styles (optional)
└── .env.example → Sample environment variables

🛠️ Getting Started
✅ Prerequisites

Ensure you have the following installed:

    Node.js v18 or higher

    A package manager: bun, npm, yarn, or pnpm

    A PostgreSQL database (or modify Prisma schema for another database)

📦 Installation

    Clone the repository

git clone https://github.com/your-username/socially.git
cd socially

    Install dependencies

npm install # or yarn / pnpm / bun install

    Set up environment variables

Create a .env file in the root directory using .env.example as a reference:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
UPLOADTHING_TOKEN=

    Set up the database

Run database migrations using Prisma:

npx prisma migrate dev

    Start the development server

npm run dev # or yarn dev / pnpm dev / bun dev

    Open the app

Visit http://localhost:3000 in your browser to explore the app.
🎨 Customization

    Fonts: Uses the Geist font for a clean, modern look.

    Themes: Toggle between light and dark modes with built-in support.

    Auth Provider: Easily replace Clerk with another auth provider if needed.

    Scalability: Modular architecture enables easy extension and scaling of features.

☁️ Deployment

The recommended deployment platform is Vercel, the creators of Next.js. Follow Next.js deployment docs for guidance.
📄 License

This project is open-source and available under the MIT License.
🤝 Contributing

We welcome contributions! If you’d like to suggest a feature, report a bug, or improve the documentation, feel free to submit a pull request or open an issue.
