<script setup lang="ts">
import { ref } from 'vue';

const todos = ref(['about', 'till']);
</script>
<template>
  <div class="about">
    <div class="container-fluid">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="sass" scoped></style>
