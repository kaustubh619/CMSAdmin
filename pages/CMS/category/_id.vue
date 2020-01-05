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
              Edit Category CMS
            </h2>
            <label>Title</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              class="form-style"
              v-model="title"
            />
            <label>Background Image</label>
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
              style="margin-top: 30px; margin-bottom: 30px"
            />
            <div>
              <p>Current Image:</p>
              <p>
                <a :href="image_url" target="_blank" style="cursor: pointer;">{{
                  image_name
                }}</a>
              </p>
            </div>

            <button
              @click="updateCategoryCMS"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px;"
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
  let EditorJS, List;

  if (process.browser) {
    EditorJS = require("@editorjs/editorjs");
    List = require("@editorjs/list");
  }

  export default {
    data() {
      return {
        title: "",
        image_name: "",
        image_url: "",
        file: "",
        status: ""
      };
    },
    mounted() {
      this.getCategoryCMSById();
    },
    methods: {
      getCategoryCMSById: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        this.$store.dispatch("getCategoryCMSById", payload).then(res => {
          this.status = res.data.active;
          this.title = res.data.title;
          if (res.data.background_image !== null) {
            this.image_url = res.data.background_image;
            this.image_name = res.data.background_image.slice(44);
          }
        });
      },

      handleFileUpload: function() {
        this.file = this.$refs.file.files[0];
      },

      updateCategoryCMS: function() {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        payload.append("title", this.title);
        payload.append("active", this.status);
        if (this.file) {
          payload.append("background_image", this.file);
        }
        this.$store.dispatch("updateCategoryCMS", payload).then(res => {
          this.$router.push("/CMS/category");
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

