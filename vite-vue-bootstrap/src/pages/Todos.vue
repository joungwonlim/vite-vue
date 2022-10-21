<script setup>
import { ref } from 'vue';

const newTodo = ref('');
const todos = ref([]);

const addTodo = () => {
  todos.value.push({
    id: Date.now(),
    title: newTodo.value,
    isCompleted: false,
  });

  newTodo.value = '';
};

const isCompletedToggle = todo => {
  todo.isCompleted = !todo.isCompleted;
};

const deleteTodo = index => {
  // console.log('🚀 ~ file: Todos.vue ~ line 22 ~ deleteTodo ~ index', index);

  todos.value.splice(index, 1);
};
</script>
<template>
  <div class="todos">
    <!-- ----------- -->
    <!-- todos intro -->
    <div class="container my-4 p-2 border">
      <div class="row justify-content-center align-items-center">
        <div class="col text-center text-md-start">
          <h1>
            <div class="display-4">Willy Dreams</div>
            <div class="display-6 text-muted">
              willy dreams of coming a good person.
            </div>
          </h1>
          <div class="lead text-muted">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, earum
            id? In voluptas repudiandae fugiat ad facere cumque sed, totam illo
            tenetur ex accusantium perspiciatis unde blanditiis vero, obcaecati
            eos.
          </div>
          <button class="btn btn-secondary btn-lg my-4">Start</button>
        </div>
        <div class="col text-center text-md-start d-none d-md-block">
          <img
            src="https://image.yes24.com/goods/76105334/XL"
            alt=""
            class="fluid"
            width="260"
          />
        </div>
      </div>
    </div>
    <!-- ----------- -->
    <!-- todos input -->
    <div class="container my-4 p-2 border">
      <form class="form-control" @submit.prevent="addTodo">
        <label for="inputPassword5" class="form-label">New To do</label>
        <div class="row d-flex justify-conent between align-items-center">
          <div class="col-auto">
            <input type="text" class="form-control" v-model="newTodo" />
          </div>
          <div class="col-auto">
            <button class="btn btn-secondary btn-sm">Add</button>
          </div>
        </div>
        <div class="form-text">
          must not contain spaces, special characters, or emoji.
        </div>
      </form>
    </div>

    <!-- ----------- -->
    <!-- todos list -->
    <div class="container my-4 p-2 boarder">
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(todo, index) in todos"
          :key="todo.id"
        >
          <div
            class="form-check row jutify-content-between align-items-center d-flex"
          >
            <div class="col-auto">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
                v-model="todo.isCompleted"
                @click="isCompletedToggle(todo)"
              />
              <label
                class="form-check-label"
                :class="{ isCompleted: todo.isCompleted }"
                for="flexCheckIndeterminate"
              >
                {{ todo.title }}
              </label>
            </div>
            <div class="col-auto">
              <button
                class="btn btn-outline-light btn-sm text-dark"
                @click="deleteTodo(index)"
              >
                X
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.isCompleted {
  text-decoration: line-through;
}
</style>
