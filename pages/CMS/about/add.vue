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
              Add About CMS
            </h2>
            <label>Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              class="form-style"
              v-model="title"
            />
            <label>About Image</label>
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
              style="margin-top: 30px; margin-bottom: 30px"
            />

            <label>About Info</label>
            <div
              id="editorjs"
              class="rounded my-4 shadow-lg"
              style="border: 1px solid grey; padding: 30px; width:678px;"
            ></div>
            <button
              @click="addAboutCMS"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px; margin-top: 30px"
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
  let EditorJS, List, Paragraph;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    List = require("@editorjs/list");
    Paragraph = require("@editorjs/paragraph");
  }

  export default {
    data() {
      return {
        title: "",
        location: "",
        phone1: "",
        phone2: "",
        email: "",
        file: ""
      };
    },
    mounted() {
      this.editor = new EditorJS({
        holder: "editorjs",
        tools: {
          list: List,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          }
        }
      });
    },

    methods: {
      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      addAboutCMS: function() {
        this.editor.save().then(async outputData => {
          var payload = new FormData();
          payload.append("title", this.title);
          payload.append("about_image", this.file);
          payload.append("active", false);
          payload.append("about_info", JSON.stringify(outputData.blocks));
          this.$store.dispatch("addAboutCMS", payload).then(res => {
            this.$router.push("/CMS/about");
          });
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
