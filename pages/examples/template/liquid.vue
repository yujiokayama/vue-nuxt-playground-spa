<template>
  <div class="container-liquid">
    <div class="side">
      <p>side</p>
    </div>
    <div class="main">
      <p>main</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'liquid',
  components: {},
  asyncData({ app, route, store }) {},
  computed: {},
  created() {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
.container-liquid {
  display: flex;
  min-width: 1366px;
  margin: 20px;
}
.side {
  width: 250px;
  background-color: aquamarine;
}
.main {
  flex: 1;
  background-color: cornflowerblue;
}
</style>
