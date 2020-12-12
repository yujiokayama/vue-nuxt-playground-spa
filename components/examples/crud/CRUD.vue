<template>
  <div>
    {{ posts }}
    <button
      class="mt-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg"
      @click="fetchPost"
    >
      API取得
    </button>

    {{ create }}
    <button
      class="mt-5 bg-blue-700 text-white border border-blue-700 font-bold py-2 px-6 rounded-lg"
      @click="createPost"
    >
      新規登録
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
      create: {},
    }
  },
  methods: {
    async fetchPost() {
      this.posts = await this.$api.getAPI()
    },
    async createPost() {
      this.create = await this.$api.postAPI()
    },
  },
}
</script>

<style lang="scss" scoped></style>
