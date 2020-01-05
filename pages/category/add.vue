<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: center"
        >
          <form>
            <h2 style="margin-bottom: 20px; text-align: center">
              Add Category
            </h2>
            <label>Category Name</label>
            <input
              type="text"
              id="title"
              placeholder="Category Name"
              class="form-style"
              v-model="category"
            />

            <button
              @click="addCategory"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px; margin-top: 30px"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        category: "",
        added_date: "",
        added_by: "",
        deleted_flag: ""
      };
    },
    methods: {
      addCategory: function() {
        var payload = new FormData();
        payload.append("category", this.category);
        payload.append("added_by", localStorage.getItem("user_id"));
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const added_dated = year + "-" + month + "-" + day;
        payload.append("added_date", added_dated);
        this.$store.dispatch("addCategory", payload).then(res => {
          this.$router.push("/category/list");
        });
      }
    }
  };
</script>

<style>
</style>