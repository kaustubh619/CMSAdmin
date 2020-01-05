<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div class="column-padding header-bottom" style="display: flex; justify-content: center">
          <form>
            <h2 style="margin-bottom: 20px; text-align: center">Edit About CMS</h2>
            <label>Title</label>
            <input type="text" id="title" placeholder="Title" class="form-style" v-model="title" />
            <label>About Image</label>
            <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleFileUpload()"
              style="margin-top: 30px; margin-bottom: 30px"
            />
            <div style="margin-bottom: 30px;">
              <p>Current Image:</p>
              <p>
                <a :href="image_url" target="_blank" style="cursor: pointer;">
                  {{
                  image_name
                  }}
                </a>
              </p>
            </div>
            <label>About Info</label>
            <div
              id="editorjs"
              class="rounded my-4 shadow-lg"
              style="border: 1px solid grey; padding: 30px; width:678px;"
            ></div>

            <button
              @click="updateAboutCMS"
              type="button"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto; padding: 10px 30px; margin-top: 30px"
            >Update</button>
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
      status: "",
      image_name: "",
      image_url: "",
      file: "",
      info: []
    };
  },
  mounted() {
    this.getAboutCMSById();
  },
  methods: {
    handleFileUpload: function() {
      this.file = this.$refs.file.files[0];
    },

    getAboutCMSById: function() {
      var payload = new FormData();
      payload.append("id", this.$route.params.id);
      this.$store.dispatch("getAboutCMSById", payload).then(res => {
        console.log(res.data);
        this.status = res.data.active;
        this.title = res.data.title;
        if (res.data.about_image !== null) {
          this.image_url = res.data.about_image;
          this.image_name = res.data.about_image.slice(41);
        }
        this.info = JSON.parse(res.data.about_info);
        this.editor = new EditorJS({
          holder: "editorjs",
          tools: {
            list: List,
            paragraph: {
              class: Paragraph,
              inlineToolbar: true
            }
          },
          data: { blocks: this.info }
        });
      });
    },

    updateAboutCMS: function() {
      this.editor.save().then(async outputData => {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        payload.append("title", this.title);
        payload.append("active", this.status);
        if (this.file) {
          payload.append("about_image", this.file);
        }
        payload.append("about_info", JSON.stringify(outputData.blocks));
        this.$store.dispatch("updateAboutCMS", payload).then(res => {});
        this.$router.push("/CMS/about");
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


