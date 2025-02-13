<script setup lang="ts">

import {Check, Delete, Edit, Message, Search, Star} from "@element-plus/icons-vue";
import {ref,onMounted} from 'vue';
const getData = async (type: string,data: any) => {
  try {
    const res = await fetch(`/api/hello`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify(data)
    });
    console.log(res)
    const result = await res.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
onMounted(() => {
})
</script>

<template>
  <test></test>
  <h1>主页</h1>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>

      <el-button type="primary" @click="getData('get',{})">调用接口</el-button>

    </el-row>
    <br/>
    <el-row>
      <el-button :icon="Search" circle/>
      <el-button type="primary" :icon="Edit" circle/>
      <el-button type="success" :icon="Check" circle/>
      <el-button type="info" :icon="Message" circle/>
      <el-button type="warning" :icon="Star" circle/>
      <el-button type="danger" :icon="Delete" circle/>
    </el-row>
  </div>
</template>

<style scoped>

</style>
