<template>
  <div class="comp1">
    <h1>Component 1</h1>
    <h2>{{state.msg}}</h2>
    <input type="text" v-model="state.msg">
  </div>
</template>
<script>
import state from '../util';

export default {
  name: 'comp1',
  data() {
    return {
      state,
    };
  },
};
</script>

