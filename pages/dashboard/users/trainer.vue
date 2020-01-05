<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Trainer Register</h3>
          <nuxt-link
            to="/dashboard/users/add-trainer"
            style="text-decoration:none"
          >
            <button class="btn btn-red addTrainer">
              <!-- <i data-feather="upload"></i> -->
              <span class="white-text">Add Trainer</span>
            </button>
          </nuxt-link>
        </div>

        <div class="row">
          <vue-good-table :columns="columns" :rows="allproducts">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <nuxt-link
                  :to="{
                    name: 'dashboard-users-update-trainer',
                    params: { id: props.row.user.id }
                  }"
                  class="btn detail"
                  >Edit</nuxt-link
                >
                <button
                  type="button"
                  @click="deleteTrainer(props.row.user.id)"
                  class="btn btn-primary delete"
                >
                  Delete
                </button>
              </span>
              <span v-else>{{ props.formattedRow[props.column.field] }}</span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.addTrainer {
  background-color: rgb(76, 175, 80);
  align-items: center;
  display: flex;
}

.addTrainer:hover {
  background-color: #008000;
}

.detail {
  background-color: #1db6e0;
  color: white;
  height: auto;
  padding: 3px 12px;
  text-decoration: none;
  margin-bottom: 5px;
}

.detail:hover {
  background-color: #1d9ec2;
}

.delete {
  background-color: #e3364d;
  color: white;
  height: auto;
  padding: 3px 12px;
  margin-right: 10px;
  margin-bottom: 5px;
}

.delete:hover {
  background-color: #c00000;
}
</style>

<script>
export default {
  name: "my-component",
  middleware: "auth",
  data() {
    return {
      columns: [
        {
          label: "Username",
          field: "user.username"
        },
        {
          label: "Full Name",
          field: "user.first_name"
        },
        {
          label: "Email",
          field: "user.email"
        },
        {
          label: "Gender",
          field: "gender"
        },
        {
          label: "Location",
          field: "location"
        },
        {
          label: "Action",
          field: "details"
        }
      ],
      rows: [
        {
          id: 1,
          name: "Mobile",
          age: 20,
          createdAt: "2011-10-31",
          details: "<p>asa</p>"
        }
      ],
      allproducts: []
    };
  },
  mounted() {
    this.getAllTrainers();
  },
  methods: {
    getAllTrainers: function() {
      this.$store.dispatch("getAllTrainer").then(res => {
        // console.log(res);
        this.allproducts = JSON.parse(JSON.stringify(res.data));
      });
    },
    deleteTrainer: function(id) {
      var x = confirm("Are you sure you want to delete?");
      if (x)
        return this.$store.dispatch("deleteTrainer", id).then(res => {
          this.getAllTrainers();
        });
      else return false;
    }
  }
};
</script>

<style></style>
