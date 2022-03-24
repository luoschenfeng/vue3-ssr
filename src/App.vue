<template>
  <div @click="handleClick">
    click me count: {{ count }}
  </div>
  <router-view />
</template>

<script setup lang="ts">
import {
  $ref, 
} from 'vue/macros'

let count = $ref(1)

function handleClick() {
  console.log(1)
  count++
}
</script>

<style>

</style>
