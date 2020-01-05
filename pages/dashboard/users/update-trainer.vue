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
              Edit Trainer
            </h2>
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              class="form-style"
              v-model="username"
            />

            <label for="fullname">Full Name</label>
            <input
              type="text"
              id="fullname"
              class="form-style"
              v-model="fullname"
            />

            <div style="display: block; margin-bottom: 20px; padding:8px 14px">
              <label style="margin-right: 10px">Gender:</label>
              <input
                type="radio"
                name="gender"
                value="M"
                style="margin-right:5px"
              />Male
              <input
                type="radio"
                name="gender"
                value="F"
                style="margin-right:5px; margin-left: 10px"
              />Female
            </div>

            <label for="location">Location</label>
            <input
              type="text"
              id="location"
              class="form-style"
              v-model="location"
            />

            <label for="email">Email</label>
            <input type="email" id="email" class="form-style" v-model="email" />

            <button
              @click="updateUser"
              type="submit"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto"
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
export default {
  name: "my-component",

  middleware: "auth",

  data() {
    return {
      username: "",
      fullname: "",
      email: "",
      location: ""
    };
  },

  mounted() {
    // console.log(this.$route.params.id);
    this.getUserDetail();
    this.getUserExtDetail();
  },

  methods: {
    getUserDetail: function() {
      this.$store.dispatch("getUserDetail", this.$route.params.id).then(res => {
        // console.log(res);
        this.username = res.data.username;
        this.fullname = res.data.first_name;
        this.email = res.data.email;
        // this.allproducts = JSON.parse(JSON.stringify(res.data));
      });
    },
    getUserExtDetail: function() {
      this.$store
        .dispatch("getUserExtDetail", this.$route.params.id)
        .then(res => {
          // console.log(res);
          this.location = res.data.location;
          if (res.data.gender == "M") {
            $("input[value=M]").prop("checked", true);
          } else {
            $("input[value=F]").prop("checked", true);
          }
        });
    },
    updateUser: function() {
      var payload = {
        id: this.$route.params.id,
        // specs: JSON.stringify(this.data)
        username: this.username,
        first_name: this.fullname,
        email: this.email,
        location: this.location,
        gender: $("input[name='gender']:checked").val()
      };
      this.$store.dispatch("updateUser", payload).then(res => {
        console.log(res);
      });
      this.$store.dispatch("updateUserExt", payload).then(res => {
        console.log(res);
      });
      this.$router.push("/dashboard/users/trainer");
    }
  }
};
</script>

<style scoped>
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
