/// <reference types="vite/client" />

// 解决引用vue文件报错问题
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const vueComponent: DefineComponent<{}, {}, any>;
    export default vueComponent;
}
