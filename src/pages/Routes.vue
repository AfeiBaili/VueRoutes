<script>

export default {
  name: 'RoutesList',
  data() {
    return {}
  },
}
</script>

<template>
  <transition appear name="container">
    <div class="container">
      <div class="nav"></div>
      <div class="main"></div>
    </div>
  </transition>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}

.container .nav {
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