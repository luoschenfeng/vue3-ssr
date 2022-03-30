<template>
  <div @click="handleClick">
    click me count: {{ count }}
  </div>
  <router-view />
  <form
    action="/"
    method="post"
  >
    <input name="username">
    <button name="submit">
      submit
    </button>
  </form>
</template>

<script setup lang="ts">
import {
  $ref, 
} from 'vue/macros'

let count = $ref(1)

function handleClick() {
  count++
}
</script>

<style>

</style>
