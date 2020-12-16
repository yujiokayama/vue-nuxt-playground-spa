<template>
  <div>
    <nav class="pagination">
      <!-- Prev -->
      <div>
        <a href="#" class="" aria-label="Previous" @click.prevent=""> prev </a>
      </div>
      <!-- //Prev -->
      <!-- Page Num -->
      <div>
        <nuxt-link
          v-for="page in totalPage"
          :key="page"
          :to="`${page}`"
          class=""
          >{{ page }}</nuxt-link
        >
      </div>
      <!-- //Page Num -->
      <!-- Next -->
      <div>
        <a href="#" class="" aria-label="Next" @click.prevent=""> next </a>
      </div>
      <!-- //Next -->
    </nav>
    <div>現在fromからto件を表示</div>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 扱うデータ
     */
    contents: {
      type: Array,
      default: () => {
        return []
      },
      required: false,
    },
    /**
     * 表示上限数
     */
    limit: {
      type: Number,
      default: 10,
      required: false,
    },
    /**
     * 現在のページ番号
     */
    currentPage: {
      type: Number,
      default: 1,
      required: false,
    },
    /**
     * 扱うデータの総件数
     */
    totalCount: {
      type: Number,
      default: 0,
      required: false,
    },
    /**
     * 表示するデータの先頭
     */
    offset: {
      type: Number,
      default: 0,
      required: false,
    },
  },
  computed: {
    /**
     * totalPage
     * 全データ / 表示上限数
     */
    totalPage() {
      return this.totalCount / this.limit
    },
  },
  created() {},
  mounted() {},
  methods: {
    async Prev() {
      await this.$api.getAPI(`https://ys-note.microcms.io/api/v1/company`)
    },
    Next() {},
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
}
</style>
