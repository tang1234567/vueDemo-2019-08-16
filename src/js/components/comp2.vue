<template>
    <div class="comp2">
        <h1>Component 2</h1>
        <h2>{{msg}}</h2>
        <input type="text" v-model="msg">
    </div>
</template>
<script>

export default {
  name: 'comp2',
  data() {
    return {
      msg:'小王'
    };
  },
};
</script>

