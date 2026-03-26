/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0F172A', 
          800: '#1E293B', 
          700: '#334155', 
        },
        tech: {
          blue: '#3B82F6', 
          hover: '#2563EB', 
          glow: '#60A5FA', 
        },
        slate: {
          50: '#F8FAFC', 
          100: '#F1F5F9', 
          400: '#94A3B8', 
          800: '#1E293B', 
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}