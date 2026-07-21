# Full-Stack Corporate Training Platform & Lead Management System

🌐 **Live Demo:** [https://accredian-assignment-omega.vercel.app/](https://accredian-assignment-omega.vercel.app/)

A production-grade, full-stack web application built for **Accredian**, designed to showcase enterprise-level corporate training solutions, interactive components, dynamic FAQs, partner testimonials, and a secure lead-generation pipeline backed by a PostgreSQL database.

---

## 🚀 Features & Architecture

* **Modern Frontend (Next.js & Tailwind CSS):** Fully responsive, component-driven layout featuring a modular design system (`Button`, `Input`, `Select`, `Card`), smooth interactive scroll containers, and category-based dynamic accordions.
* **Global Interactive Modal:** Seamlessly integrated pop-up enquiry form accessible from anywhere across the landing page (Hero, FAQ, Footer, CTA banner).
* **Database & ORM (PostgreSQL & Drizzle ORM):** High-performance relational database storage hosted on **Neon** for capturing and persisting customer leads.
* **Strict Validation Pipeline (Zod):** Comprehensive server-side and client-side validation ensuring strict data hygiene (e.g., exact 10-digit mobile number checks, numeric-only validation for candidate counts, and alphabet-only location entries) with inline error handling.

---

## 🛠️ Setup Instructions

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites
* **Node.js** (v18+ recommended)
* A **Neon** account (or any PostgreSQL database instance)

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd my-nextjs-app
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory of your project and add your database connection string: DATABASE_URL="postgresql://your_username:your_password@your-neon-host.neon.tech/neondb?sslmode=require"

### 3. Push Database Schema
Run Drizzle Kit to migrate your schema and create the leads table in your PostgreSQL database:

```bash
npx drizzle-kit push
```

### 4. Run the Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

---

## 🧠 Approach Taken

**Component-Driven Design:** Extracted repetitive UI elements into a centralized design system (`src/components/ui/`) to maintain visual consistency, maintainability, and code reusability across the application.

**State Management & Context Separation:** Maintained clean architectural separation by utilizing layout wrappers and passing explicit callback handlers (`onEnquireClick`) down through component props, preventing server-client state conflicts in Next.js App Router.

**Robust Data Layer:** Utilized Drizzle ORM for lightweight, type-safe database queries combined with Zod schema validations to secure the API boundary against invalid data inputs.

**Graceful Error Feedback:** Intercepted validation exceptions on both the client and server layers to display instant, contextual error messages directly inside the UI modal dialogue box.

---

## 🤖 AI Usage Explanation

In this project, AI was leveraged strictly as a productivity tool for accelerating repetitive developer workflows, ensuring the primary focus remained on system architecture, database design, and business logic.

* **Boilerplate & Layout Scaffolding:** Used AI assistance to speed up basic component layout drafting and initial Tailwind CSS boilerplate generation, allowing more time to focus on component architecture and UX flow.
* **Component Styling Refinements:** Streamlined design iteration cycles by utilizing AI suggestions for visual consistency across UI components.
* **Documentation & Formatting:** Assisted in structural organization and formatting of project documentation to maintain clean, professional standards.
* **Core Ownership:** All core application logic—including database schema design (Drizzle ORM), Next.js API route implementations, client/server state management, Zod validation pipelines, and system debugging—was designed, written, and integrated independently.

---

## 📈 Improvements You Would Make with More Time

Given additional development cycles, the following production features would be prioritized:

* **Admin Dashboard:** Build a secure, authenticated dashboard view for sales teams to view, filter, sort, and export captured leads directly from the database.
* **Email Automation (Resend / SendGrid):** Trigger instant automated confirmation emails to potential corporate clients upon successful form submission and alert internal sales teams via webhook.
* **Automated End-to-End Testing:** Implement Playwright or Cypress test suites to simulate complete user flows from landing page interaction to database entry verification.
* **Internationalization (i18n):** Add multi-language localization support to expand corporate training outreach globally.
