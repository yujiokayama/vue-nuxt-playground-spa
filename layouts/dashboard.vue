<template>
  <div class="dashboard-container">
    <!-- side -->
    <div class="side">
      <DashBoardSidebar />
    </div>
    <!-- /side -->
    <!-- main -->
    <div class="main">
      <DashBoardHeader />
      <Nuxt />
    </div>
    <!-- /main -->
  </div>
</template>

<script>
import DashBoardHeader from '@/components/test/DashBoardHeader.vue'
import DashBoardSidebar from '@/components/test/DashBoardSidebar.vue'
export default {
  components: {
    DashBoardHeader,
    DashBoardSidebar,
  },
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  min-width: 1366px;
}
.side {
  position: fixed;
  width: 250px;
  height: 100vh;
  border-right: 1px solid #eaeaea;
}
.main {
  position: relative;
  width: calc(100% - 250px);
  left: 258px;
  padding: 0 40px;
}
</style>
