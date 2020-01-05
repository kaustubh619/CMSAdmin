<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div id="fb-editor"></div>
        <button id="click">Update Form</button>
        <button @click="saveFormData">Save Form</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formValue: []
      };
    },
    mounted() {
      this.$store.dispatch("getContactForm").then(res => {
        jQuery(function($) {
          var options = {
            defaultFields: JSON.parse(res.data.form)
          };
          var $fbEditor = document.getElementById("fb-editor");
          var formBuilder = $($fbEditor).formBuilder(options);

          document.addEventListener("fieldAdded", function() {
            this.formValue = formBuilder.formData;
          });
          document.getElementById("click").addEventListener("click", function() {
            this.formValue = formBuilder.actions.getData();
            localStorage.setItem("form", JSON.stringify(this.formValue));
          });
        });
      });
    },

    methods: {
      saveFormData: function() {
        var payload = new FormData();
        payload.append("id", 1);
        payload.append("title", "Contact Form");
        payload.append("form", localStorage.getItem("form"));
        this.$store.dispatch("updateContactForm", payload).then(res => {
          localStorage.removeItem("form");
        });
      }
    }
  };
</script>

<style>
</style>