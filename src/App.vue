<template>
  <div>
    <main class="flex flex-col h-screen">
      <header>
          <title>LeetCode Bot</title>
      </header>
      <app-bar class="block"></app-bar>
      <router-view class="mx-auto h-5/6 block"></router-view>
      <footer-bar></footer-bar>
    </main>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    AppBar, FooterBar
  }
}
</script>

<style>

</style>
