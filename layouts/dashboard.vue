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
}
.main {
  position: relative;
  width: calc(100% - 250px);
  left: 250px;
  padding: 0 40px;
}
</style>
