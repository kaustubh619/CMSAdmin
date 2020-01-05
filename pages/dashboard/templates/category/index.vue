<template>
  <div class="navbar-spacing padding-top-30">
    <div v-if="showDropdown" class="popup">
      <div class="popup-main">
        <div class="popup-title">
          <h3>Add Category</h3>
        </div>
        <div class="popup-body">
          <div>
            <input v-model="newCategory" type="text" style="width:70%" />
          </div>
        </div>
        <div class="popup-action">
          <div class="pointer" @click="addCategory">Save</div>
          <div class="pointer" @click="closeDropdownPanel">Cancel</div>
        </div>
      </div>
    </div>
    <div v-if="showDropdown1" class="popup">
      <div class="popup-main">
        <div class="popup-title">
          <h3>Add Sub Category</h3>
        </div>
        <div class="popup-body">
          <div>
            <select v-model="selected_category" style="width:70%">
              <option v-for="p in category" :key="p.id" :value="p.id">{{
                p.name
              }}</option>
            </select>

            <input v-model="sub_Category" type="text" style="width:70%" />
          </div>
        </div>
        <div class="popup-action">
          <div class="pointer" @click="addSubCategory">Save</div>
          <div class="pointer" @click="closeSubCatModel">Cancel</div>
        </div>
      </div>
    </div>

    <div class="holder">
      <div
        class="column-padding header-bottom"
        style="display: flex; justify-content: space-between"
      >
        <h3 style="display: flex;align-items: center;">All Categories</h3>
        <button
          @click="openDropdownPanel"
          class="btn btn-red"
          style="display: flex;align-items: center;"
        >
          <p class="white-text">+ Add New</p>
        </button>
      </div>

      <div class="row">
        <vue-good-table :columns="columns" :rows="category">
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'details'">
              <button
                type="button"
                @click="deleteCategory(props.row.id)"
                class="btn btn-primary"
              >
                Delete
              </button>
            </span>
            <span v-else>{{ props.formattedRow[props.column.field] }}</span>
          </template>
        </vue-good-table>
      </div>
    </div>

    <div class="holder">
      <div
        class="column-padding header-bottom"
        style="display: flex; justify-content: space-between"
      >
        <h3 style="display: flex;align-items: center;">All Sub Categories</h3>
        <button
          @click="openSubCatModel"
          class="btn btn-red"
          style="display: flex;align-items: center;"
        >
          <p class="white-text">+ Add New</p>
        </button>
      </div>

      <div class="row">
        <vue-good-table :columns="sub_columns" :rows="subcategory">
          <template slot="table-row" slot-scope="props">
            <span v-if="props.column.field === 'details'">
              <button
                type="button"
                @click="deleteSubCategory(props.row.id)"
                class="btn btn-primary"
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
</template>

<script>
export default {
  data: () => ({
    allproducts: [],
    newCategory: "",
    selected_category: 0,
    sub_Category: "",
    category: [],
    category_selected: 0,
    subcategory: [],
    showDropdown: false,
    subcategory_selected: 0,
    brand: [],
    brand_selected: 0,
    showDropdown1: false,
    columns: [
      {
        label: "Category",
        field: "name"
      },
      {
        label: "Action",
        field: "details"
      }
    ],
    sub_columns: [
      {
        label: "Sub Category",
        field: "name"
      },
      {
        label: "Category",
        field: "name"
      },
      {
        label: "Action",
        field: "details"
      }
    ],
    rows: []
  }),

  mounted() {
    this.getCategory();
    this.getSubcategories();
    // this.getBrand();
  },
  methods: {
    getCategory: function() {
      this.$store.dispatch("getCategory").then(res => {
        console.log(res);
        this.category = JSON.parse(JSON.stringify(res.data));
      });
    },
    addCategory: function() {
      var payload = new FormData();

      payload.append("name", this.newCategory);

      this.$store.dispatch("addCategory", payload).then(res => {
        console.log(res);
        this.getCategory();
        this.newCategory = "";
        this.closeDropdownPanel();
        // this.category = JSON.parse(JSON.stringify(res.data));
      });
    },
    addSubCategory: function() {
      this.closeSubCatModel();

      var payload = {
        category: this.selected_category,
        name: this.sub_Category
      };

      this.$store.dispatch("addSubCategory", payload).then(res => {
        console.log(res);
        this.getSubcategories();
        // this.category = JSON.parse(JSON.stringify(res.data));
      });
    },
    getSubcategories: function() {
      this.$store
        .dispatch("getsubCategory", this.category_selected)
        .then(res => {
          console.log(res);
          this.subcategory = res.data;

          // for (var i = 0; i < this.subcategory.length; i++) {
          //   this.subcategory[i].category_id = this.category.filter(
          //     v => v.id === this.subcategory[i].category     )["name"];
          // }
        });
    },
    getBrand: function() {
      this.$store.dispatch("getBrand", this.subcategory_selected).then(res => {
        console.log(res);
        this.brand = res.data;
      });
    },
    deleteCategory: function(id) {
      this.$store.dispatch("deleteCategory", id).then(res => {
        console.log(res);
        this.getCategory();
        this.getSubcategories();
        this.getBrand();
      });
    },
    deleteSubCategory: function(id) {
      this.$store.dispatch("deleteSubCategory", id).then(res => {
        console.log(res);
        this.getSubcategories();
        this.getBrand();
      });
    },
    deleteBrand: function(id) {
      this.$store.dispatch("deleteBrand", id).then(res => {
        console.log(res);
        this.getBrand();
      });
    },
    openDropdownPanel: function() {
      this.showDropdown = true;
    },
    openSubCatModel: function() {
      this.showDropdown1 = true;
    },
    closeDropdownPanel: function() {
      this.showDropdown = false;
      this.newCategory = "";
    },
    closeSubCatModel: function() {
      this.showDropdown1 = false;
    }
  }
};
</script>

<style scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.popup-main {
  background-color: white;
  margin: auto;
  position: absolute;
  max-width: 400px;
  height: 290px;
  left: 260px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  border-radius: 5px;
}

.popup-body {
  height: 300px;
  overflow: auto;
  padding: 30px;
}

.popup-title {
  padding: 30px 30px 16px;
  border-bottom: 1px solid #00000024;
}
.popup-action {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 25px;
  box-shadow: 0px -7px 10px 0px #0000000d;
}

.popup:after {
  background-color: rgba(0, 0, 0, 0.83);
  margin: auto;
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
