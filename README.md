Fresh Harvests - Frontend Development Task
Project Title: Frontend Development Task Using Next.js
This project is a responsive and visually accurate front-end application developed as a task for SM Technology. It is designed to strictly adhere to provided Figma designs and integrate with external APIs as documented in Postman.

🎯 Objective
The primary objective of this project was to design and develop a robust, responsive, and visually accurate front-end application. Key aspects included:

Design Implementation: Translating Figma designs into a pixel-perfect UI.

Responsiveness: Ensuring seamless compatibility across various devices and browsers.

API Integration: Connecting the frontend with provided APIs using modern data fetching techniques.

Code Quality: Adhering to best practices for clean, reusable, and maintainable code.

🚀 Technology Stack
This project leverages the following modern web technologies:

Frontend Framework: Next.js

Language: TypeScript

CSS Framework: Tailwind CSS

State Management/API Integration: Redux RTK Query (Planned/Future Integration - Note: Current implementation uses direct fetch API for simplicity in initial setup, RTK Query would be integrated for complex state management and caching.)

Form Handling: React Hook Form

UI Components: Radix UI (for headless, accessible components)

Icons: React Icons, Lucide React

HTTP Client: Axios

Slider/Carousel: Swiper.js

Utility Libraries: clsx, tailwind-merge (for cn utility)

✨ Task Details & Implementation Highlights
Design Implementation
Pixel-Perfect UI: The application's UI has been meticulously developed to match the provided Figma designs, focusing on precise layouts, typography, and color schemes.

Full Responsiveness: The application is built with a mobile-first approach, ensuring optimal viewing and interaction experience across all major devices (mobile, tablet, desktop) and browser compatibility. Tailwind CSS's utility-first approach was instrumental in achieving this.

API Integration
Data Fetching: APIs are integrated as per the Postman documentation.

Next.js App Router's Server Components: For initial data fetching on page load (e.g., Shop page), Server Components are utilized to fetch data directly on the server, reducing client-side bundle size and improving performance.

Client Components: For interactive elements and dynamic data updates (e.g., product details, category filtering), useEffect and useState are used within client components to fetch and manage data.

Error Handling: Proper error handling mechanisms are implemented during API calls to gracefully manage network issues or API failures, displaying appropriate messages to the user.

Authentication Tokens: (If required by the API) The structure is in place to integrate authentication tokens as specified in the Postman documentation.

Code Quality and Standards
Clean Code: Emphasis has been placed on writing clean, readable, and self-documenting code.

Reusability: Components are designed to be modular and reusable across the application (e.g., SectionHeading, Button).

TypeScript: The entire codebase is written in TypeScript, ensuring type safety, reducing runtime errors, and enhancing developer experience.

Next.js Best Practices: Follows Next.js App Router conventions, including Server Components, Client Components, loading.tsx, error.tsx, and not-found.tsx for robust routing and error handling.

Folder Structure: The project maintains a logical and organized folder structure, separating concerns (e.g., app for pages/layouts, components for reusable UI, lib for utilities).

Testing and Debugging
The application has been thoroughly tested during development for functional correctness and responsiveness.

Browser developer tools were extensively used for debugging UI, network requests, and component behavior.

(Unit and Integration testing frameworks like Jest/React Testing Library would be integrated for a production-ready application to ensure comprehensive test coverage.)

Deployment
The application is build-ready and optimized for deployment on Vercel.

Next.js's built-in optimizations for performance and SEO (Server-Side Rendering, Image Optimization, Code Splitting) are leveraged.

📦 Deliverables
A fully functional and responsive frontend application.

All core components and pages implemented as per the provided design requirements.

Properly integrated APIs with working data display and interaction.

This Git repository containing the complete source code.

Comprehensive documentation within this README.md file.

⚙️ Project Setup
Follow these steps to get the project up and running on your local machine.

Prerequisites
Ensure you have the following installed:

Node.js (v18.x or higher recommended)

npm (Node Package Manager) or Yarn / pnpm

Git

Installation
Clone the repository:

git clone [(https://github.com/maksudulhaque2000/fresh-harvest-frontend-Job-Task)]
cd fresh-harvests

Install dependencies:

npm install
# or
# yarn install
# or
# pnpm install

Running the Project Locally
To start the development server:

npm run dev
# or
# yarn dev
# or
# pnpm dev

The application will be accessible at http://localhost:3000 (or another port if 3000 is in use).

Steps to Build and Deploy the Application
Building the Application
To create an optimized production build of the application:

npm run build
# or
# yarn build
# or
# pnpm build

This command will create a .next folder in your project, containing the optimized build output.

Deploying to Vercel
This project is configured for seamless deployment to Vercel.

Install Vercel CLI globally (if you haven't already):

npm install -g vercel

Log in to Vercel (first time only):

vercel login

Follow the prompts in your terminal and browser to complete the login process.

Deploy the project:
Navigate to your project's root directory in the terminal and run:

vercel --prod

You will be prompted to confirm project setup details (project name, scope, directory). Confirm these settings.

Vercel will then build and deploy your application to a production URL.

Upon successful deployment, Vercel will provide you with the live URL of your application.

🤝 Contributing
(Optional section, if you want to allow contributions)

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.


This project is licensed under the MIT License.

📞 Contact
For any questions or further information, please contact: +8801518474975

Maksudul Haque
[Email:smmaksudulhaque2000@gmail.com]
[Linkedin:https://www.linkedin.com/in/maksudulhaque2000/]
[GitHub:https://github.com/maksudulhaque2000]