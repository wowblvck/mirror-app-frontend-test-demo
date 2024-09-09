import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const resolvePath = (dir: string) => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@/app": resolvePath("./src/app"),
      "@/pages": resolvePath("./src/pages"),
      "@/features": resolvePath("./src/features"),
      "@/widgets": resolvePath("./src/widgets"),
      "@/entities": resolvePath("./src/entities"),
      "@/shared": resolvePath("./src/shared"),
      "@/": resolvePath("./src"),
    },
  },
});
