
// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}", // Your files
        "./node_modules/flowbite/**/*.js"    // Flowbite source files (required)
    ],
    plugins: [
        require('flowbite/plugin') // ✅ Loads Flowbite's plugin
    ]
};