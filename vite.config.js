import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import CompressionPlugin from 'compression-webpack-plugin';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  base: './Vindicate',
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'vindicate',
    chunkSizeWarningLimit: 600, // 设置警告阈值为 600 KB
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash].[ext]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
      plugins: [
        // 配置极致压缩
        terser({
          compress: {
            drop_console: true, // 删除控制台日志
            drop_debugger: true, // 删除调试器语句
            pure_funcs: ['console.log'], // 删除 console.log 函数调用
            passes: 3, // 增加代码优化次数
          },
          format: {
            comments: false, // 删除所有注释
          }
        })
      ]
    },
    // 配置 Gzip 压缩
    brotliSize: false,
    compress: 'gzip', // 使用 gzip 压缩
    plugins: [new CompressionPlugin()],
  },
});
