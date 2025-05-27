import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "src/utils"),
      "@components": path.resolve(__dirname, "src/components"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@pages": path.resolve(__dirname, "src/pages"),
    },
  },
});
