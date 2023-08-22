<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
//import ThreeJS from './components/Three.JS.vue'
import threejs from './components/threeJS.vue'
import RequestPermission from './components/RequestPermission.vue'
import indoorNavigation from './components/IndoorNavigation.vue'
</script>

<template>
  <RequestPermission></RequestPermission>
  <indoorNavigation></indoorNavigation>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
