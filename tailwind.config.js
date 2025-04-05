// tailwind.config.js
export default {
      content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}", // Make sure this matches your actual folder structure
      ],
      theme: {
            extend: {
                  keyframes: {
                        flicker: {
                              "0%, 100%": { opacity: "1" },
                              "50%": { opacity: "0.3" },
                        },
                  },
                  animation: {
                        flicker: "flicker 1s infinite",
                  },
            },
      },
      plugins: [],
};
