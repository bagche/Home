import type { RouterConfig } from "@nuxt/schema";
import type { RouteRecordRaw } from "vue-router";

// 👉 Redirects
const redirects: RouteRecordRaw[] = [];

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (scannedRoutes) => [...redirects, ...scannedRoutes],
  scrollBehaviorType: "smooth",
};
