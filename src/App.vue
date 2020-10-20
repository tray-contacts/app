<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header/index'

export default {
  name: "App",
  components: { Header },
  computed: { }
};
</script>

