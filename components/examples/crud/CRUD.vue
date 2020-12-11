<template>
  <div>
    {{ post }}
    <button @click="fetchPost">API取得</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: [],
    }
  },
  methods: {
    async fetchPost() {
      this.post = await this.$api.getAPI()
    },
  },
}
</script>

<style lang="scss" scoped></style>
