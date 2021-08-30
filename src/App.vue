<template>
  <div id="app">
    <router-view path='$router.key' />
  </div>
</template>

<script>
import './styles/global.css';

export default {
  name: 'App',
  components: {
  }
}
</script>
