# npm i

# npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev

#create eslint config file  .eslintrc.json
{
    "extends": "react-app"
}

# edit  vite.config.js for using eslint
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
# npm run dev

# npm i react-router-dom@6


#https://tailwindcss.com/docs/guides/vite
#npm install -D tailwindcss@3 postcss autoprefixer
#npx tailwindcss init -p #//create post css config fill
#npm install -D prettier prettier-plugin-tailwindcss
// prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
}

// google emoji as favicon

// npm i @reduxjs/toolkit react-redux