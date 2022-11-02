/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<
    Record<string, unknown>,
    Record<string, unknown>,
    unknown
  >

  export default component
}
// declare class Multiselect extends Vue {}
// declare class multiselectMixin extends Vue {}
// declare class pointerMixin extends Vue {}

// export default Multiselect
// export { Multiselect, multiselectMixin, pointerMixin }
