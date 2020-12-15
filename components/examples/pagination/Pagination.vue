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
        <nuxt-link to="#" class=""> 1 </nuxt-link>
      </div>
      <!-- //Page Num -->
      <!-- Next -->
      <div>
        <a href="#" class="" aria-label="Next" @click.prevent=""> next </a>
      </div>
      <!-- //Next -->
    </nav>
    <div>現在xxからxx件を表示</div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return []
      },
      required: false,
    },
    parPage: {
      type: Number,
      default: 10,
      required: false,
    },
    currentPage: {
      type: Number,
      default: 1,
      required: false,
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    Prev() {},
    Next() {},
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
}
</style>
