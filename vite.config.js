import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Projet-5---Creez-une-application-web-de-location-immobiliere-avec-React/',
  plugins: [react()],
});