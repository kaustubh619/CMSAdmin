<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div class="column-padding header-bottom" style="display: flex; justify-content: center">
          <form>
            <h2 style="margin-bottom: 20px; text-align: center">Edit Contact CMS</h2>
            <label>Title</label>
            <input type="text" id="title" placeholder="Title" class="form-style" v-model="title" />
            <label>Location</label>
            <input
              type="text"
              id="location"
              placeholder="Location"
              class="form-style"
              v-model="location"
            />
            <label>Phone 1</label>
            <input
              type="number"
              id="phone1"
              placeholder="Phone 1"
              class="form-style"
              v-model="phone1"
            />
            <label>Phone 2</label>
            <input
              type="number"
              id="phone 2"
              placeholder="Phone 2"
              class="form-style"
              v-model="phone2"
            />
            <label>Email</label>
            <input type="text" id="email" placeholder="Email" class="form-style" v-model="email" />
            <label>Contact Info</label>
            <div
              id="editorjs"
              class="rounded my-4 shadow-lg"
              style="border: 1px solid grey; padding: 30px; width:678px"
            ></div>
            <button
              @click="updateContactCMS"
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
      location: "",
      phone1: "",
      phone2: "",
      email: "",
      info: []
    };
  },
  mounted() {
    this.getContactCMSById();
  },
  methods: {
    getContactCMSById: function() {
      var payload = new FormData();
      payload.append("id", this.$route.params.id);
      this.$store.dispatch("getContactCMSById", payload).then(res => {
        this.status = res.data.active;
        this.title = res.data.title;
        this.location = res.data.location;
        this.phone1 = res.data.phone1;
        this.phone2 = res.data.phone2;
        this.email = res.data.email;
        this.info = JSON.parse(res.data.contact_info);
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

    updateContactCMS: function() {
      this.editor.save().then(async outputData => {
        var payload = new FormData();
        payload.append("id", this.$route.params.id);
        payload.append("title", this.title);
        payload.append("location", this.location);
        payload.append("phone1", this.phone1);
        payload.append("phone2", this.phone2);
        payload.append("email", this.email);
        payload.append("contact_info", JSON.stringify(outputData.blocks));
        payload.append("active", this.status);
        this.$store.dispatch("updateContactCMS", payload).then(res => {});
        this.$router.push("/CMS/contact");
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


