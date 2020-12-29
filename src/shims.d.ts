declare module '*.vue' {
  import { Component } from 'vue'
  const _default: Component
  export default _default
}


declare module 'vue-router' {
  interface RouteMeta {
    // 权限
    permission?: string[]
  }
}