<template>
  <div class="shows-list-container">
    <h1>Shows List</h1>
    <div class="shows-list">
      <div class="show-card" v-for="item in showData" :key="item.id">
        <router-link :to="`/tvshow/${item.id}`">
          <img :src="item.img" :alt="item.name" />
        </router-link>
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShowList",
  data() {
    return {
      showData: [
        {
          id: 1,
          name: "Under the Dome",
          img:
            "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg"
        },
        {
          id: 2,
          name: "Person of Interest",
          img:
            "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg"
        },
        {
          id: 3,
          name: "Bitten",
          img:
            "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg"
        },
        {
          id: 4,
          name: "Arrow",
          img:
            "http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg"
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.shows-list-container {
  .shows-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .show-card {
      margin: 1rem 2rem;
      cursor: pointer;
      img {
        object-fit: cover;
        width: 200px;
      }
    }
  }
}
</style>