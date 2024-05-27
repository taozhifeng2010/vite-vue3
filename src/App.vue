<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
  <div>{{ tel }}</div>
  <button @click="nameFn">修改名字</button>
  <button @click="ageFn">修改年龄</button>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

let name: Ref<string> = ref('张杰');
let age = ref(18);
let tel = ref('18710582218');

function nameFn() {
  name.value = 'zhangjie';
  console.log('222', name);

};

function ageFn() {
  age.value += 1
};

</script>

<style lang="scss" scoped></style>