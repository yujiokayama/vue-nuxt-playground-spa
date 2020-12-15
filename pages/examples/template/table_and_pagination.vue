<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <Table :items="apiData" />
    <pagination />
  </div>
</template>

<script>
import Table from '~/components/examples/table/Table.vue'
import Pagination from '~/components/examples/pagination/Pagination.vue'
export default {
  components: {
    Table,
    Pagination,
  },
  async asyncData({ $api }) {
    const url = `https://ys-note.microcms.io/api/v1/company`
    const params = {
      limit: 10,
      offset: 10,
    }
    return {
      apiData: await $api.getAPI(url, params),
    }
  },
  computed: {},
  created() {},
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
