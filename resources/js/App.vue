<template>
    <div class="container">
        <div class="text-center" style="margin: 20px 0px 20px 0px;">
            <span class="text-secondary"
                >CoDev Challenge - Laravel & Vue.js CRUD</span
            >
        </div>

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/" class="nav-item nav-link"
                        >Home</router-link
                    >
                    <router-link to="/add" class="nav-item nav-link"
                        >Add Todo</router-link
                    >
                </div>
            </div>
        </nav>
        <br />
        <flash message=""></flash>
        <router-view></router-view>
    </div>
</template>

<script>
import Flash from "./components/Flash.vue";

export default {
    components: { Flash }
};
</script>
