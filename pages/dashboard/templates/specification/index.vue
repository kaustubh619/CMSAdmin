<template>
  <div class="navbar-spacing padding-top-30">
    <div class="specification">
      <div class="holder">
        <div
          class="column-padding header-bottom"
          style="display: flex; justify-content: space-between"
        >
          <h3 style="display: flex;align-items: center;">
            Specification Template
          </h3>
          <!-- <button class="btn btn-red" style="display: flex;align-items: center;">
            <i data-feather="upload"></i>
            <p class="padding-left-10 white-text">Upload New</p>
          </button>-->
        </div>

        <div class="row">
          <vue-good-table :columns="columns" :rows="subcategory">
            <template slot="table-row" slot-scope="props">
              <span v-if="props.column.field === 'details'">
                <button
                  type="button"
                  @click="goToDetails(props.row.id)"
                  class="btn btn-primary"
                >
                  EDIT
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

<script>
export default {
  name: "my-component",
  data() {
    return {
      category_selected: 0,
      subcategory: [],
      columns: [
        {
          label: "Category",
          field: "name"
        },
        {
          label: "Status",
          field: "status"
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
          details: "<p>asa</p>"
        }
      ]
    };
  },
  mounted() {
    this.getSubcategories();
  },
  methods: {
    getSubcategories: function() {
      this.$store.dispatch("getsubCategory", 0).then(res => {
        console.log(res);
        this.subcategory = res.data;
        for (var i = 0; i < res.data.length; i++) {
          if (
            res.data[i].specs == "" ||
            res.data[i].specs == null ||
            res.data[i].specs == undefined
          ) {
            this.subcategory[i].status = "Not Added";
          } else {
            this.subcategory[i].status = "Added";
          }
        }
      });
    },
    goToDetails: function(index) {
      console.log(index);
      this.$router.push("/dashboard/templates/specification/" + index);
    }
  }
};
</script>

<style></style>
