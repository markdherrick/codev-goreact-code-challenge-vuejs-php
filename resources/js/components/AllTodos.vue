<template>
    <div>
        <h3 class="text-center">All Todos</h3>
        <br />

        <div class="row">
            <div class="col">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    v-model="search"
                />
            </div>
        </div>

        <br />

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="todo in filteredTodo" :key="todo.id">
                    <td>{{ todo.title }}</td>
                    <td>{{ todo.description }}</td>
                    <td>{{ todo.status ? "Done" : "On going" }}</td>
                    <td>
                        <div class="btn-group" role="group">
                            <router-link
                                :to="{ name: 'edit', params: { id: todo.id } }"
                                class="btn btn-primary"
                                >Edit
                            </router-link>
                            <button
                                class="btn btn-danger"
                                @click="deleteTodo(todo.id)"
                            >
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [],
            search: ""
        };
    },
    computed: {
        filteredTodo() {
            return this.todos.filter(post => {
                return post.title
                    .toLowerCase()
                    .includes(this.search.toLowerCase());
            });
        }
    },
    created() {
        this.axios.get("http://localhost:8000/api/todo").then(response => {
            this.todos = response.data;
        });
    },
    methods: {
        deleteTodo(id) {
            this.axios
                .delete(`http://localhost:8000/api/todo/delete/${id}`)
                .then(response => {
                    let i = this.todos.map(item => item.id).indexOf(id); // find index of your object
                    this.todos.splice(i, 1);
                    flash(response.data, "success");
                });
        }
    }
};
</script>
