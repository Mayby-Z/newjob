<script setup lang="ts">
import {ref,onMounted} from "vue";
const userList = ref([])
const getUserList = async(type:string,data:any)=>{
  try {
    const res = await fetch(`/api/getUserList`, {
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
  getUserList('get',{a:1,b:2})
})
</script>

<template>
<h1>用户页</h1>
  <div>
    {{userList}}
  </div>
</template>

<style scoped>

</style>
