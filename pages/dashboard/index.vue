<template>
  <div class="navbar-spacing padding-top-30">
    <div class="holder">
      <div
        class="column-padding header-bottom"
        style="display: flex; justify-content: space-between"
      >
        <h3 style="display: flex;align-items: center;">Video Catalogue</h3>
        <button class="btn btn-red" style="display: flex;align-items: center;">
          <i data-feather="upload"></i>
          <p class="padding-left-10 white-text">Upload New</p>
        </button>
      </div>

      <div class="row">
        <div v-for="p in 8" :key="p.id" class="col s24 m8">
          <div class="video-container">
            <img src="~static/files/thumbnail.jpg" />
            <h3 class="video-title clamp2">
              20 MIN FULL BODY WORKOUT // No Equipment | Pamela Reif
            </h3>
            <p class="video-creator">Pamela Reif</p>
            <p class="video-creator">10K Views • 4 Months Ago</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    feather.replace({ color: "white" });
  }
};
</script>

<style>
.holder {
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 6px 0px #00000014;
  margin: 0 auto;
  max-width: 1280px;
}

#__layout {
  background-color: #f1f1f1;
}

.column-padding {
  padding: 0 0.75rem;
}

.video-container {
  /* height: 300px; */
  padding-bottom: 30px;
}

.video-container h3 {
  /* height: 300px; */
  font-size: 15px;
  padding-top: 10px;
  font-family: "Bold";
}

.video-container .video-title {
}

.video-container .video-creator {
  font-size: 14px;
  padding-top: 5px;
}

.video-container img {
  height: 11vw;
  width: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 1023px) and (min-width: 600px) {
  .video-container img {
    height: 18vw;
  }
}
</style>
