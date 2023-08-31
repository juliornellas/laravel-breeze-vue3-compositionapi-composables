import "./bootstrap";
import "../css/app.css";

import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

import { createApp } from "vue/dist/vue.esm-bundler";
import router from "./router";
import CompaniesIndex from "./components/companies/CompaniesIndex.vue";

createApp({
    components: {
        CompaniesIndex,
    },
})
    .use(router)
    .mount("#app");
