import type { CSSProperties } from 'vue'

declare global {
  declare type LocaleType = 'zh-CN' | 'en'

  declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>
}
