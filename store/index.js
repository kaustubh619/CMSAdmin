import axios from "axios";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

export const state = () => ({
  getCategory: [],
  getAllProducts: [],
  getAllOrder: [],
  getAllAuction: [],
  getAllCompletedAuction: [],
  getAllOngoingAuction: [],
  singleProduct: []
});

export const mutations = {
  getCategory(state, getCategory) {
    console.log("selecting exercise mutation, " + getCategory);
    state.getCategory = getCategory;
  },
  getAllProducts(state, getAllProducts) {
    // console.log('selecting exercise mutation, ' + getAllProducts)
    state.getAllProducts = getAllProducts;
  },
  getAllOrder(state, getAllOrder) {
    console.log("selecting exercise mutation, " + getAllOrder);
    state.getAllOrder = getAllOrder;
  },
  getAllAuction(state, getAllAuction) {
    console.log("selecting exercise mutation, " + getAllAuction);
    state.getAllAuction = getAllAuction;
  },
  getAllCompletedAuction(state, getAllCompletedAuction) {
    console.log("selecting exercise mutation, " + getAllCompletedAuction);
    state.getAllCompletedAuction = getAllCompletedAuction;
  },
  getAllOngoingAuction(state, getAllOngoingAuction) {
    console.log("selecting exercise mutation, " + getAllOngoingAuction);
    state.getAllOngoingAuction = getAllOngoingAuction;
  },
  singleProduct(state, singleProduct) {
    console.log("selecting exercise mutation, " + singleProduct);
    state.singleProduct = singleProduct;
  }
};

export const getters = {
  get_selectedUserMessage(state) {
    return state.selectedUserMessage;
  }
};

export const actions = {
  getHomeCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getHomeCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getHomeCMSById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getHomeCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  updateHomeCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getHomeCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  deleteHomeCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.deleteHomeCMS + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  addHomeCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.getHomeCMS,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activateHomeCmsById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.activateHomeCmsById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activatedHomeCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedHomeCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getCategoryCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoryCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getCategoryCMSById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoryCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  updateCategoryCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getCategoryCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activatedCategoryCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedCategoryCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  addCategoryCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.getCategoryCMS,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activateCategoryCmsById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.activateCategoryCmsById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getContactCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getContactCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getContactCMSById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getContactCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  updateContactCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getContactCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activateContactCmsById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.activateContactCmsById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activatedContactCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedContactCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  addContactCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.getContactCMS,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getAboutCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getAboutCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getAboutCMSById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getAboutCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  updateAboutCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getAboutCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activatedAboutCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedAboutCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  activateAboutCmsById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.activateAboutCmsById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  CMSgetCategory({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.CMSgetCategory,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  getCategoryById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getCategoryById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  updateCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getCategoryById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  addCategory({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.CMSgetCategory,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  categoryStatus({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.categoryStatus + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  addAboutCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.getAboutCMS,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getFooterCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getFooterCMS,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  addFooterCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "POST",
        data: payload,
        url: state.api.getFooterCMS,
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  activatedFooterCMS({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.activatedFooterCMS,
        contentType: "application/json"
        // headers: {
        //   Authorization: "Token " + localStorage.getItem("token")
        // }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  activateFooterCmsById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.activateFooterCmsById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getFooterCMSById({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.getFooterCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  },

  updateFooterCMS({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.getFooterCMSById + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  updateContactForm({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      axios({
        method: "PUT",
        data: payload,
        url: state.api.updateContactForm + payload.get("id"),
        contentType: "application/json",
        headers: {
          Authorization: "token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
        });
    });
  },

  getContactForm({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: state.api.updateContactForm + 1,
        contentType: "application/json",
        headers: {
          Authorization: "Token " + localStorage.getItem("token")
        }
      })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log("Error In HTTP Request - ", err);
        });
    });
  }
};
