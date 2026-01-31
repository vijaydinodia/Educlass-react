📚 EduClass – Classroom Management UI (React)

EduClass is a React-based classroom management interface designed to organize classes, manage invitation codes, and provide a structured stream for announcements and academic activities.

This project focuses on clean UI design, modular components, routing, and state persistence, making it suitable for learning and portfolio demonstration.

🚀 Features

✅ Structured dashboard layout with sidebar & top navigation

✅ Home page displaying available classes as cards

✅ Dedicated class page with Stream, Classwork, People, and Marks sections

✅ Class code visibility control (On / Off)

✅ General settings to manage invitation codes

✅ Persistent state using localStorage

✅ Reusable, well-structured React components

✅ Client-side routing with React Router

🧩 Tech Stack

React (Vite)

React Router DOM

CSS (Custom styling)

Font Awesome Icons

LocalStorage

📁 Project Structure
src/
│── assets/
│ ├── educlass.jpg
│ └── card-bg.jpg
│
│── css/
│ ├── educlass.css
│ ├── class.css
│ ├── setting.css
│ └── ClassMenu.css
│
│── App.jsx
│── main.jsx
│── Navbar.jsx
│── Sidebar.jsx
│── Home.jsx
│── Card.jsx
│── Class.jsx
│── ClassMenu.jsx
│── Setting.jsx
│
└── index.css

🧭 Application Routes
Route Purpose
/ Home dashboard
/classPage Class stream & announcements
/setting Invitation & general settings
🔐 Class Code Management

Class code visibility can be enabled or disabled

Preference is stored in localStorage

Setting remains active after page refresh

localStorage.setItem("classCodeOn", true | false);

⚙️ Core Components Overview

Navbar – Top navigation bar

Sidebar – Main navigation menu

Home – Displays available classes

Card – Reusable class card component

Class – Class stream and sidebar

ClassMenu – Toggle class code visibility

Settings – Manage invitation codes

🎯 Project Goals

Build a structured multi-page React application

Practice routing and component reusability

Implement persistent UI state

Design a clean and scalable UI architecture

🚧 Future Enhancements

🔹 Role-based access (Instructor / Student)

🔹 Backend integration

🔹 Assignment & announcement modules

🔹 Responsive layout

🔹 Theme customization

👨‍💻 Author

Vijay Dinodia
Frontend Developer | React
