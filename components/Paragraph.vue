<template>
  <p :class="className" style="padding: 5px; text-align: justify">{{text}}</p>
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
      text: this.data.data.text,
      className: "h" + this.data.data.level
    };
  }
};
</script>

<style>
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-weight: 700;
}

.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-top: 3rem;
  border-bottom: 1px solid black;
}

.h1 {
  padding-bottom: 1rem;
}

.h2 {
  padding-bottom: 0.8rem;
}

.h3 {
  padding-bottom: 0.6rem;
}
</style>
