<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <Table :contents="contents" />
    <pagination
      :contents="contents"
      :limit="limit"
      :total-count="totalCount"
      :offset="offset"
    />
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
    // const params = {
    //   limit: 20,
    //   offset: 0,
    // }
    const responce = await $api.getAPI(url)
    const { contents, limit, offset, totalCount } = responce
    return {
      contents,
      limit,
      offset,
      totalCount,
    }
  },
  computed: {},
  created() {},
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
