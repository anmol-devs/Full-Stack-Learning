# Tailwind CSS Setup (Latest Version)

This guide explains how to install and configure the latest version of Tailwind CSS (v4+) in a new project.

> Recommended for Vite + React and other modern frameworks.

---

## 1. Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

---

## 2. Configure Vite

**vite.config.js** (or `vite.config.ts`)

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

---

## 3. Import Tailwind

Create or open your main CSS file (usually `src/index.css`) and add:

```css
@import "tailwindcss";
```

---

## 4. Import CSS

Make sure your CSS file is imported in your entry file.

Example (`main.jsx`):

```javascript
import "./index.css";
```

---

## 5. Start the Development Server

```bash
npm run dev
```

---

## 6. Test Installation

```jsx
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind CSS is Working! 🎉
      </h1>
    </div>
  );
}
```

---

# Notes

- Tailwind CSS v4 **does not require** a `tailwind.config.js` file for most projects.
- The old `@tailwind base`, `@tailwind components`, and `@tailwind utilities` directives have been replaced with:

```css
@import "tailwindcss";
```

- Automatic content detection is built in, so you usually don't need to configure file scanning manually.
- Only create a configuration file if you need advanced customization (themes, plugins, custom utilities, etc.).

---

## Official Documentation

https://tailwindcss.com/docs/installation/using-vite

https://tailwindcss.com/docs/installation/using-postcss