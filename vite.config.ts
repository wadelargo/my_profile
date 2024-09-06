import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      jsons: path.resolve(__dirname, 'src/jsons/'),
      common: path.resolve(__dirname, 'src/common/'),
    },
  },
});
