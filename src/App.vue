<script>
import store from './store'
import router from './router'
import {mapState} from "vuex";

export default {
  name: 'App',
  components: {},
  data() {
    return {
      isHome: false,
    }
  },
  computed: {
    ...mapState("Routes", ["routes"])
  },
  store,
  router,
  mounted() {
    let images = [
      {path: "/background01.jpg", color: "#8E9B70"},
      {path: "/background02.jpg", color: "#A34537"},
      {path: "/background03.jpg", color: "#903732"},
      {path: "/background04.jpg", color: "#5092AC"},
      {path: "/background05.jpg", color: "#FD5839"},
      {path: "/background06.jpg", color: "#111A00"},
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
      <!--   导航区域   -->
      <transition appear name="nav">
        <div v-show="!isHome" class="nav">
          <div ref="title" class="title iconfont icon-fanhui" @click="isHome = true">目录列表</div>
          <div v-for="i in routes" :key="i.pathName" class="item-list">
            <router-link ref="item" :to="`/${i.pathName}`" active-class="active" class="item">{{ i.name }}
              <div class="item-background"></div>
            </router-link>
          </div>
        </div>
      </transition>
      <!--   视图区域   -->
      <div class="main">
        <transition appear name="main">
          <div v-show="isHome" class="title iconfont icon-fanhui-copy" @click="isHome = false">开始
          </div>
        </transition>
        <router-view v-show="!isHome" class="view"></router-view>
      </div>
    </div>
  </div>
</template>

<style>
@import "assets/fonts/iconfont.css";

* {
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  height: 100vh;

  overflow: hidden;
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

.main .view {
  width: 90%;
  height: 90%;

  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.nav .title {
  font-size: 2em;
  font-weight: bolder;
  padding: 20px;
  color: white;
  text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 2px;
  user-select: none;

  border-left: gray 10px solid;
  transition: 0.5s;
}

.nav .title:hover {
  background-color: rgba(0, 0, 0, 0.5);
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

  transition: 0.2s;
}

.nav .item:hover .item-background::before {
  width: 100%;
}

#app .nav .active {
  color: gray;
  background-color: rgba(0, 0, 0, 0.3);
}

.nav .icon-fanhui:after {
  margin-left: 20px;
  text-shadow: #0000 0 0 0;

  transition: 0.2s;
}

.nav .icon-fanhui:hover:after {
  margin-left: 0;
  text-shadow: #000 0 0 20px;
}

.main .title {
  color: white;

  font-size: 3em;
  font-weight: bolder;

  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);

  user-select: none;
}

.main .icon-fanhui-copy::after {
  position: absolute;
  top: 10px;
  right: -50px;
  animation: start-arrow 1s infinite alternate;
}

@keyframes start-arrow {
  from {
    transform: translateX(5px);
  }
  to {
    transform: translateX(-10px);
  }
}

.main-enter-active {
  animation: main-show 0.5s;
}

.main-leave-active {
  animation: main-show 0.5s reverse;
}

@keyframes main-show {
  from {
    opacity: 0;
    transform: translate(40vw, -50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.nav-enter-active {
  animation: nav-show 0.5s;
}

.nav-leave-active {
  animation: nav-show 0.5s reverse;
}

@keyframes nav-show {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

</style>
