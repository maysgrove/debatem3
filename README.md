## WELCOME TO MY SUPER SECRET PROJECT CREATED BY PT (EST. 6/15/24)

This project was created by Peyton "PT" Thompson on 6/15/2024 at 3:11pm EST. The goal of this project is to get better. I will be documenting all of the updates and giving thoughts on certain decisions. I've never kept docs before, so I'm gonna try with this and see how it goes. You need to know that my grammar is not my strong suit and there WILL be mistakes, you can count on that. Did you notice the misspelled word in the previous sentence? It was "their," it should be "there" obviously. LOL.

## TECH STACK (dev dependencies is probably more up to date lmfao)

You might be wondering why I'm already deciding a tech stack when I don't know what I'm building. I've been tinkering with the basics of React for a while, and it's good at building great UI. SASS or SCSS in this case is good because I've read that once CSS files get too big, it can cause issues, and the processing of SCSS files into CSS files is better. TypeScript because apparently, it's widely used in large codebases, making it easier to maintain a larger code base. Finally, React Router for navigation.

- **THEME:** Identical Sublime Text Monokai theme {I change all the time}
- **ICON THEME:** Material Icon Theme {this one I change only sometimes}

**EXTRA STUFF:**
- Prettier
- ESLint
- babel/plugin-proposal-optional-chaining-assign

**FRONTEND:**
- REACT.JS
- SASS
- TYPESCRIPT
- REACT ROUTER
- React Three Fiber

**BACKEND:**
- NOT DECIDED YET

# Debate.me Website

## Overview

Welcome to the Debate.me website! This application allows users to engage in and explore various debates on different topics. It includes a modern and stylish design, with a dark theme and interactive elements that enhance user experience.

## Components

### Sidebar

The `Sidebar` component is a fixed navigation menu on the left side of the screen. It includes the following features:
- **Menus:** Dynamic links with icons for various sections, such as Dashboard, Explore Page, Friends, Messages, and more.
- **Admin Panel:** Conditional display of admin-specific links when the user is an admin.
- **Ban User Feature:** Allows admins to search for and ban users, with a modal for inputting ban duration.
- **Styling:** The sidebar has a dark theme with a gradient effect and hover animations. The width of the sidebar adjusts based on whether it is open or closed.

### UniversalHeader

The `UniversalHeader` component is a fixed header at the top of the page. It features:
- **Title:** Displays "DEBATE.ME" prominently.
- **Search Bar:** Positioned to the right, with a taller height for improved visibility.
- **Create Account Button:** Toggles a modal for user account creation or sign-in.
- **Light/Dark Mode Toggle:** Allows users to switch between light and dark themes.
- **Styling:** Includes a gradient background, shadow effects, and responsive design.

### UniversalFooter

The `UniversalFooter` component is a fixed footer at the bottom of the page. It contains:
- **Links:** Provides navigation links and information about the website.
- **Styling:** Matches the dark theme with responsive design and smooth transitions.

### LandingPage

The `LandingPage` component serves as the main entry point of the website, featuring:
- **Sidebar Navigation:** Allows users to toggle the sidebar and navigate through different sections.
- **Hero Section:** A welcoming section with a gradient background and a call-to-action button.
- **Debate Categories Carousel:** A horizontal carousel for selecting debate categories, with navigation buttons to scroll through items.
- **Featured Debates:** Displays a grid of featured debates with thumbnails and descriptions.
- **Responsive Design:** Adjusts layout and styling based on screen size, ensuring a seamless experience across devices.

## Styling

- **Color Scheme:** The website uses a dark theme with a primary background color of #181818. Accent colors include gradients of blue, purple, and other vibrant hues.
- **Typography:** Utilizes modern fonts with emphasis on readability and visual appeal.
- **Layout:** Implements a 4-column layout for main content sections, with responsive adjustments for smaller screens.

## Features

- **Sidebar Behavior:** The sidebar remains fixed and adjusts its width based on whether it is open or closed. Icons are always visible, while text appears on hover when collapsed.
- **Search Functionality:** The search bar in the header allows users to find content quickly and efficiently.
- **Modals:** Includes modals for user sign-in/sign-up and banning users, with smooth animations and user-friendly design.
- **Responsive Design:** Ensures a consistent experience across different screen sizes, including horizontal and vertical carousels for debate categories.
