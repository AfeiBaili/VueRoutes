<script>

export default {
  name: 'RoutesList',
  computed: {
    route() {
      return this.$store.state.Routes.routes[0].route;
    },
  }
}
</script>

<template>
  <transition appear name="container">
    <div class="container">
      <div class="sub-nav">
        <router-link v-for="i in route" :key="i.pathName" :to="{
          name: i.pathName,
          query:{name:i.name}
        }" active-class="active" class="sub-item">{{ i.name }}
        </router-link>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.container .sub-nav {
  display: flex;
  height: 5%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  border-radius: 10px 10px 0 0;
  overflow: auto;
}

.container .main {
  width: 100%;
  height: 95%;
  background-color: #2b2b2b;

  border-radius: 0 0 10px 10px;

}

.sub-nav .sub-item {
  text-decoration: none;
  color: white;
  margin: 5px 0 0 10px;
}

.sub-nav .active {
  color: gray;
}

.container-enter-active {
  animation: container-show 0.5s reverse;
}

.container-leave-active {
  animation: container-show 0.5s;
}

@keyframes container-show {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    filter: blur(50px);
  }
}
</style>