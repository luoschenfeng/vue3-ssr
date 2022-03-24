<template>
  <div>{{ value }}</div>
</template>
<script setup lang="ts">
import {
  $ref, 
} from 'vue/macros'
let value = $ref('')
</script>
<style></style>
