# Debate.me Website

## Overview
Welcome to the Debate.me website! This application allows users to engage in and explore various debates on different topics. The app features a sleek, modern design with a dark theme by default and numerous interactive elements to enhance the user experience.

## Created By
Peyton "PT" Thompson  
**Created On:** 6/15/2024 at 3:11 PM EST

## Tech Stack

### Frontend
- **React.js** (with TypeScript)
- **Tailwind CSS**
- **React Router**
- **React Slick Carousel**
- **Framer Motion**: For animations
- **@mui/material**: For UI components
- **@emotion/react** and **@emotion/styled**: For styling
- **@react-three/fiber**: For 3D graphics

### Backend
- **PostgreSQL**: For database management

### Dev Tools
- **Vite**: Fast build tool and development server
- **Prettier**: Code formatter
- **ESLint**: Linting tool
- **Babel**: JavaScript compiler with plugins
- **TypeScript**: For static type checking
- **PostCSS**: Tool for transforming CSS
- **Autoprefixer**: Adds vendor prefixes to CSS

## Features
- **Debate Formats:** 1v1, 2v2, 3v3 formats.
- **Carousel for Debates:** A dynamic video carousel featuring debates, categorized and organized by relevance.
- **Responsive Design:** A fluid, responsive design that ensures a consistent experience across all device sizes.
- **Dark/Light Mode:** Toggle between dark and light modes, with dark mode enabled by default.
- **User Modals:** Modals for signing up, logging in, and viewing debate details.

## Components

### `Header`
The `Header` component includes:
- **Search Bar:** Toggling on smaller screens, taller for better visibility.
- **Create Account Button:** Opens a sign-up modal.
- **Light/Dark Mode Toggle:** Switch themes with a sun/moon icon and hover tooltip.
- **Styling:** Gradient backgrounds, shadow effects, responsive behavior.

### `LandingPage`
- **Hero Section:** Features the site title, "Debate Me," along with a call-to-action button.
- **Cards Section:** Features 3 cards that highlight options to join, create, or watch debates.
- **Video Carousel Section:** A video carousel showcasing debates across categories like Education, Politics, and Tech.
- **Tutorial Modal:** The tutorial modal guides new users through site features.

### `UniversalFooter`
A footer at the bottom of the page, styled to match the dark theme with smooth transitions. It contains navigation links and information about the website.

## Future Updates
- **Expand Backend:** Integrate backend features for authentication, user profiles, and debate data storage with PostgreSQL.
- **Enhance Tutorials:** Further improve the tutorial system for new users and provide certifications for debate expertise.
- **Moderation Tools:** Add more advanced tools for moderators and admin users to manage content and debates effectively.
