import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      // Point this to your main entry file
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TaskTrackerSchemaLib',
      fileName: 'task_tracker_schema',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Ensure Zod is not bundled into your library if consumers already have it
      external: ['zod'],
    },
  },
  plugins: [dts({ insertTypesEntry: true })], // Generates type definitions
})
