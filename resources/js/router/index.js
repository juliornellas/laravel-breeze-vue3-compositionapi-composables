import { createRouter, createWebHistory } from "vue-router";
import CompaniesIndex from "../components/companies/CompaniesIndex.vue";
import CompaniesCreate from "../components/companies/CompaniesCreate.vue";
import CompaniesEdit from "../components/companies/CompaniesEdit.vue";

const routes = [
    {
        path: "/dashboard",
        name: "companies.index",
        component: CompaniesIndex,
    },
    {
        path: "/dashboard/create",
        name: "companies.create",
        component: CompaniesCreate,
    },
    {
        path: "/dashboard/:id/edit",
        name: "companies.edit",
        component: CompaniesEdit,
        props: true,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
