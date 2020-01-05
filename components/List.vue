<template>
  <div style="padding: 5px; padding-left: 20px; text-align: left">
    <ul v-if="ordered">
      <li v-for="(item, i) in items" :key="i">{{item}}</li>
    </ul>
    <ul v-if="!ordered">
      <li v-for="(item, i) in items" :key="i">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ordered: this.data.data.style === "ordered",
      items: this.data.data.items
    };
  }
};
</script>

<style>
</style>
