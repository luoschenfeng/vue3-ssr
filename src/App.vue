<template>
  <div @click="handleClick">click me count: {{ count }}</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { $ref } from 'vue/macros'
import { InjectionKey, provide } from 'vue'

let count = $ref(1)
function handleClick() {
  console.log(1)
    count++
}

const key = Symbol('ID_INJECTION_KEY') as InjectionKey<{
    prefix: number,
    current: number,
}>
provide(key, {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
})
</script>

<style>

</style>