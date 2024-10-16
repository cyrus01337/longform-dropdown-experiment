import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: "always",
    },
    compressHTML: false,
    integrations: [tailwind()],
    server: {
        port: 3000,
        host: true,
    },
});
