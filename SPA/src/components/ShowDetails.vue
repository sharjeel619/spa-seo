<template>
  <div class="show-details-container">
    <h1>Show Details</h1>
    <h4 v-if="!showInfo">Loading ...</h4>
    <div v-else class="show-details">
      <div class="left-content">
        <img :src="showInfo.image.medium" :alt="showInfo.name">
      </div>
      <div class="right-content">
        <h2> {{showInfo.name}} <span>({{showInfo.rating.average}}/10)</span> </h2>
        <span v-html="showInfo.summary"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDetails",
  data() {
    return {
      showInfo: null
    };
  },
  mounted() {
    this.getShowDetails();
  },
  methods: {
    getShowDetails() {
      const { id } = this.$route.params;
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then(response => response.json())
        .then((data) => {
          this.showInfo = data
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="scss">
.show-details-container {
  h4 {
    text-align: center;
    margin-top: 120px;
  }
  .show-details {
    display: flex;
    justify-content: center;
    margin: 4rem; 
    .left-content {
      margin: 1rem;
      img {
        object-fit: cover;
        width: 200px;
      }
    }
    .right-content {
      margin: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
