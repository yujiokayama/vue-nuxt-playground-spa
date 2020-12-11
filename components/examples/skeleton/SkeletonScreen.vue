<template>
  <div>
    <content-loader v-if="isLoading"></content-loader>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  },
}
</script>

<style lang="scss" scoped></style>
