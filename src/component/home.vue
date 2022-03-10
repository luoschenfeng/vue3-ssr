<template>
11111
    <!-- <el-date-picker
        v-model="value1"
        type="date"
        placeholder="Pick a date"
        :default-value="new Date(2010, 9, 1)"
      >
    </el-date-picker> -->
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
</template>
<script setup lang="ts">
import { $ref } from 'vue/macros'
import { InjectionKey, inject, watchEffect } from 'vue'

let value1 = $ref('')
function handleChange(value: Event) {
    console.log(value)
}

const key = Symbol('ID_INJECTION_KEY') as InjectionKey<{
    prefix: number,
    current: number,
}>

const a = inject(key)
watchEffect(() => {
    console.log(a)
})

</script>
<style></style>