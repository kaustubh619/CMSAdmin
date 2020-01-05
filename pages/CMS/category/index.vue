<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Category CMS</h3>
          <nuxt-link to="/CMS/category/add" style="text-decoration:none">
            <button class="btn btn-red addTrainer">
              <span class="white-text">Add Category CMS</span>
            </button>
          </nuxt-link>
        </div>

        <div class="row">
          <vue-good-table :columns="columns" :rows="category_cms">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <nuxt-link
                  :to="{
                    name: 'CMS-category-id',
                    params: { id: props.row.id }
                  }"
                  class="btn detail"
                  >Edit</nuxt-link
                >
                <button
                  type="button"
                  class="btn btn-primary delete"
                  @click="deleteHomeCMS(props.row.id)"
                >
                  Delete
                </button>
              </span>
              <span v-if="props.column.field === 'status'">
                <input
                  type="radio"
                  name="status"
                  v-on:change="getId(props.row.id)"
                  v-bind:id="props.row.id"
                />
              </span>
              <span v-else>{{ props.formattedRow[props.column.field] }}</span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            label: "Active",
            field: "status"
          },
          {
            label: "Title",
            field: "title"
          },

          {
            label: "Action",
            field: "details"
          }
        ],
        category_cms: [],
        activatedId: ""
      };
    },
    mounted() {
      this.getCategoryCMS();
      this.activatedCategoryCMS();
      this.$store.dispatch("activatedCategoryCMS").then(res => {
        res.data.map(item => {
          this.activatedId = item.id;
          $("#" + this.activatedId).attr("checked", true);
        });
      });
    },
    methods: {
      getCategoryCMS: function() {
        this.$store.dispatch("getCategoryCMS").then(res => {
          this.category_cms = JSON.parse(JSON.stringify(res.data.reverse()));
        });
      },

      activatedCategoryCMS: function() {
        this.$store.dispatch("activatedCategoryCMS").then(res => {
          res.data.map(item => {
            this.activatedId = item.id;
            $("#" + this.activatedId).attr("checked", true);
          });
        });
      },

      deleteHomeCMS: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        payload.append("deleted_flag", true);
        var x = confirm("Are you sure you want to delete?");
        if (x)
          return this.$store.dispatch("deleteHomeCMS", payload).then(res => {
            this.getHomeCMS();
          });
        else return false;
      },

      getId: function(id) {
        var payload = new FormData();
        payload.append("id", id);
        this.$store.dispatch("activateCategoryCmsById", payload).then(res => {});
      }
    }
  };
</script>

<style>
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

