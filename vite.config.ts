import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
});
