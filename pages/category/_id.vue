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
              Edit Category
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
              @click="updateCategory"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px; margin-top: 30px"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let EditorJS, List, Paragraph;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    List = require("@editorjs/list");
    Paragraph = require("@editorjs/paragraph");
  }

  export default {
    data() {
      return {
        category: "",
        added_date: "",
        added_by: "",
        deleted_flag: ""
      };
    },
    mounted() {
      this.getCategoryById();
    },
    methods: {
      getCategoryById: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getCategoryById", payload).then(res => {
          this.category = res.data.category;
          this.added_date = res.data.added_date;
          this.added_by = res.data.added_by;
          this.deleted_flag = res.data.deleted_flag;
        });
      },

      updateCategory: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        payload.append("category", this.category);
        payload.append("updated_by", localStorage.getItem("user_id"));
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const updated_dated = year + "-" + month + "-" + day;
        payload.append("updated_date", updated_dated);
        payload.append("added_date", this.added_date);
        payload.append("added_by", this.added_by);
        payload.append("deleted_flag", this.deleted_flag);
        this.$store.dispatch("updateCategory", payload).then(res => {
          this.$router.push("/category/list");
        });
      }
    }
  };
</script>

<style>
.form-style {
  display: block;
  margin-bottom: 20px;
  width: 680px;
  padding: 8px 14px;
}

@media (max-width: 37.5em) {
  .form-style {
    width: 300px;
  }
}

@media (min-width: 37.5em) and (max-width: 75em) {
  .form-style {
    width: 500px;
  }
}

input,
textarea,
select {
  outline: none;
  border: 1px solid #b0b0b0;
  border-radius: 3px;
  color: #606060;
}
</style>


