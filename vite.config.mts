import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import EslintPlugin from 'vite-plugin-eslint'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { type UserConfig, type ConfigEnv, loadEnv } from 'vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

import Unocss from 'unocss/vite'
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

const root = process.cwd()

const pathResolve = (dir: string) => {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  // Get environment variable
  let env = {} as any
  const isBuild = command === 'build'
  if (!isBuild) {
    env = loadEnv(process.argv[3] === '--mode' ? process.argv[4] : process.argv[3], root)
  } else {
    env = loadEnv(mode, root)
  }

  return {
    // BASE
    base: env.VITE_BASE_PATH,
    // PLUGINS
    plugins: [
      vue(),
      ElementPlus({
        useSource: true
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ],
        dts: 'types/components.d.ts'
      }),
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons({
            scale: 1.2,
            warn: true,
            extraProperties: {
              display: 'inline-block',
              'vertical-align': 'middle'
              // ...
            }
          })
        ],
        transformers: [transformerDirectives(), transformerVariantGroup()]
      }),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
      })
    ],
    // CSS
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    },
    // RESOLVE
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    // BUILD
    build: {
      minify: 'terser',
      outDir: env.VITE_OUT_DIR || 'dist',
      sourcemap: env.VITE_SOURCEMAP === 'true' ? 'inline' : false,
      terserOptions: {
        compress: {
          drop_console: env.VITE_DROP_CONSOLE === 'true',
          drop_debugger: env.VITE_DROP_DEBUGGER === 'true'
        }
      }
    },
    // SERVER
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: 'http//127.0.0.1:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
      host: '0.0.0.0'
    },
    // OPTIMIZE DPENDENCIES
    optimizeDeps: {
      include: ['vue']
    }
  }
}
