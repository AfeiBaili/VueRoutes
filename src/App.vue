<script>
import store from './store'
import router from './router'
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {},
  computed: {
    ...mapState("Routes", ["routes"])
  },
  store,
  router,
  mounted() {
    let images = [
      {path: "/background01.jpg", color: "#8E9B70"},
      {path: "/background02.jpg", color: "#A34537"},
      {path: "/background03.jpg", color: "#24242E"},
      {path: "/background04.jpg", color: "#5092AC"},
      {path: "/background05.jpg", color: "#26271E"},
      {path: "/background06.jpg", color: "#0F120F"},
      {path: "/background07.jpg", color: "#0B212E"},
      {path: "/background08.jpg", color: "#96323A"},
      {path: "/background09.jpg", color: "#6D9BBC"},
    ]
    const random = parseInt(Math.random() * images.length + "");
    this.$refs.app.style.background =
        `url("./background${images[random].path}") no-repeat center center / cover`;
    this.$refs.title.style.borderLeft = `${images[random].color} 10px solid`;
    for (let i = 0; i < this.$refs.item.length; i++) {
      this.$refs.item[i].$el.style.borderLeft = `${images[random].color} 10px solid`;
    }

  }
}
</script>

<template>
  <div id="app" ref="app">
    <div class="filter">
      <div class="nav">
        <div ref="title" class="title">目录列表</div>
        <div v-for="i in routes" :key="i.pathName" class="item-list">
          <router-link ref="item" :to="`/${i.pathName}`" active-class="active" class="item">{{ i.name }}
            <div class="item-background"></div>
          </router-link>
        </div>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

.filter {
  width: 100%;
  height: 100%;

  display: flex;
}

.nav {
  flex-grow: 1;
  width: 300px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(10px);
}

.main {
  flex-grow: 4;
  width: 100%;
  height: 100%;
}

.nav .title {
  font-size: 2em;
  font-weight: bolder;
  padding: 20px;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px;

  border-left: gray 10px solid;
}

.nav .item {
  text-decoration: none;
  color: white;
  font-size: 1.6em;
  font-weight: bolder;
  text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px;
  padding: 10px 0 10px 20px;
  display: block;
  border-left: gray solid 10px;
  margin-top: 5px;

  position: relative;
  transition: 0.5s;
}

.nav .item-background::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: -1;

  transition: 0.5s;
}

.nav .item:hover .item-background::before {
  width: 100%;
}

.nav .active {
  color: #a6a6a6;
  text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 1px;
}

</style>
