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
              Add Home CMS
            </h2>
            <label>Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              class="form-style"
              v-model="title"
            />
            <label>Header Text Line 1</label>
            <input
              type="text"
              id="line1"
              placeholder="Title"
              class="form-style"
              v-model="line1"
            />
            <label>Header Text Line 2</label>
            <input
              type="text"
              id="line2"
              placeholder="Title"
              class="form-style"
              v-model="line2"
            />
            <label>Header Image</label>
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
              style="margin-top: 30px; margin-bottom: 30px"
            />

            <button
              @click="addHomeCMS"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px;"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let EditorJS, List;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    List = require("@editorjs/list");
  }

  export default {
    data() {
      return {
        title: "",
        about_us: "",
        image_name: "",
        image_url: "",
        file: "",
        line1: "",
        line2: ""
      };
    },
    mounted() {},

    methods: {
      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      addHomeCMS: function() {
        var payload = new FormData();
        payload.append("title", this.title);
        payload.append("header_text_1", this.line1);
        payload.append("header_text_2", this.line2);
        if (this.file) {
          payload.append("header_img", this.file);
        }
        this.$store.dispatch("addHomeCMS", payload).then(res => {
          this.$router.push("/CMS/home");
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
