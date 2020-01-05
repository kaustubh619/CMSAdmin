<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: center"
        >
          <form>
            <h2 style="margin-bottom: 20px; text-align: center">Add Trainer</h2>
            <input
              type="text"
              id="username"
              placeholder="Username"
              class="form-style"
              v-model="username"
            />
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
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
                v-model="gender"
              />Male
              <input
                type="radio"
                name="gender"
                value="F"
                style="margin-right:5px; margin-left: 10px"
                v-model="gender"
              />Female
            </div>
            <input
              type="text"
              id="location"
              placeholder="Location"
              class="form-style"
              v-model="location"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              class="form-style"
              v-model="email"
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              class="form-style"
              v-model="password"
            />

            <button
              @click="addTrainer"
              type="submit"
              class="btn btn-primary"
              style="background-color:rgb(76, 175, 80); color: white; display: block; margin-left:auto; margin-right:auto"
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
  name: "my-component",

  data() {
    return {
      username: "",
      fullname: "",
      gender: "",
      location: "",
      email: "",
      password: ""
    };
  },

  mounted() {},

  methods: {
    addTrainer: function() {
      var payload = new FormData();
      payload.append("email", this.email);
      payload.append("password", this.password);
      payload.append("username", this.username);
      payload.append("first_name", this.fullname);

      this.$store.dispatch("addTrainer", payload).then(res => {
        // console.log(res.data.user_id)

        payload.append("user_type", 2);
        payload.append("user", res.data.user_id);
        payload.append("gender", this.gender);
        payload.append("location", this.location);

        this.$store.dispatch("addTrainerExt", payload).then(res => {
          // console.log(res)
        });
      });
      this.$router.push("trainer/");
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
