<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">Category</h3>
          <nuxt-link to="/category/add" style="text-decoration:none">
            <button class="btn btn-red addTrainer">
              <span class="white-text">Add Category</span>
            </button>
          </nuxt-link>
        </div>

        <div class="row">
          <vue-good-table :columns="columns" :rows="category_cms">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <nuxt-link
                  :to="{
                    name: 'category-id',
                    params: { id: props.row.id }
                  }"
                  class="btn detail"
                  >Edit</nuxt-link
                >
                <!-- <button
                  type="button"
                  class="btn btn-primary delete"
                  @click="deleteHomeCMS(props.row.id)"
                >
                  Delete
                </button> -->
              </span>
              <span v-if="props.column.field === 'status'">
                <input
                  type="checkbox"
                  v-bind:id="props.row.id"
                  v-on:change="getId(props.row.id)"
                />
                <span style="margin-left: 5px">Active</span>
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
            label: "Name",
            field: "category"
          },

          {
            label: "Action",
            field: "details"
          },
          {
            label: "Status",
            field: "status"
          }
        ],
        category_cms: []
      };
    },
    mounted() {
      this.CMSgetCategory();
    },
    methods: {
      CMSgetCategory: function() {
        this.$store.dispatch("CMSgetCategory").then(res => {
          this.category_cms = JSON.parse(JSON.stringify(res.data.reverse()));
          setTimeout(function() {
            for (this.i in res.data) {
              if (res.data[this.i].deleted_flag == false) {
                $("#" + res.data[this.i].id).prop("checked", true);
              }
            }
          }, 100);
        });
      },

      getId: function(id) {
        if ($("#" + id).is(":checked")) {
          var payload = new FormData();
          payload.append("id", id);
          payload.append("deleted_flag", false);
          this.$store.dispatch("categoryStatus", payload);
        } else {
          var payload = new FormData();
          payload.append("id", id);
          payload.append("deleted_flag", true);
          this.$store.dispatch("categoryStatus", payload);
        }
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

