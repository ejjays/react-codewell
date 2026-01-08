# Codewell Landing Page

A modern, responsive landing page application built to showcase HTML and CSS templates for developers. This project utilizes a component-based architecture to deliver a clean and efficient user interface.

## 🚀 Features

- **Responsive Design:** Seamlessly adapts to various screen sizes, from mobile devices to desktop displays.
- **Dynamic Header:** Includes a responsive navigation bar that switches between a desktop menu and a mobile-friendly hamburger menu.
- **Hero Section:** engaging hero area featuring:
  - Compelling headline and subtext.
  - Interactive benefits list with custom iconography.
  - Call-to-action buttons (Github Login).
- **Custom UI Components:** Reusable components such as for consistent styling and functionality.
- **Modern Styling:** Styled with Tailwind CSS for rapid and utility-first design.

## 🛠️ Technologies Used

- **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/):** Next Generation Frontend Tooling for fast development and building.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapidly building custom designs.
- **[Tabler Icons](https://tabler-icons.io/):** High-quality SVG icons for the UI.

## 📦 Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ejjays/react-codewell
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd react-codewell
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure

```
src/
├── assets/          # Images and SVG icons (Logo, Hero image, etc.)
├── components/      # Reusable React components
│   ├── ui/          # UI-specific components (e.g., Buttons)
│   ├── Header.jsx   # Main header container
│   ├── Hero.jsx     # Hero section with marketing content
│   └── Navbar.jsx   # Navigation bar
├── App.jsx          # Root component
└── main.jsx         # Entry point
```