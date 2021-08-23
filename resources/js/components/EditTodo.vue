<template>
    <div>
        <h3 class="text-center">Edit Todo</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateTodo">
                    <div class="form-group">
                        <label>Title</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="todo.title"
                        />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="todo.description"
                        />
                    </div>
                    <div class="form-check">
                        <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                            v-model="todo.status"
                        />
                        <label class="form-check-label" for="exampleCheck1">{{
                            todo.status ? "Done" : "Ongoing"
                        }}</label>
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary">
                        Update Todo
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: {}
        };
    },
    created() {
        this.axios
            .get(`http://localhost:8000/api/todo/edit/${this.$route.params.id}`)
            .then(response => {
                this.todo = response.data;
                // console.log(response.data);
            });
    },
    methods: {
        updateTodo() {
            this.axios
                .post(
                    `http://localhost:8000/api/todo/update/${this.$route.params.id}`,
                    this.todo
                )
                .then(response => {
                    flash(response.data, "success");
                    this.$router.push({ name: "home" });
                });
        }
    }
};
</script>
