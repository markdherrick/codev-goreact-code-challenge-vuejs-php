import AllTodos from "./components/AllTodos.vue";
import CreateTodo from "./components/CreateTodo.vue";
import EditTodo from "./components/EditTodo.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: AllTodos
    },
    {
        name: "add",
        path: "/add",
        component: CreateTodo
    },
    {
        name: "edit",
        path: "/edit/:id",
        component: EditTodo
    }
];
