<template>
  <div class="container">
    <Loader />
    <Navbar />
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import Loader from './components/Loader.vue'
export default {
  components: { Navbar, Loader}
}
</script>
