<template>
  <div>
    <p>table components</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
      required: false,
    },
  },
  computed: {
    ...mapGetters({
      tableData: 'components/getTableData',
    }),
  },
  created() {
    this.fetchTableData()
  },
  mounted() {},

  methods: {
    ...mapActions({
      fetchTableData: 'components/fetchTableData',
    }),
    getEvent() {},
  },
}
</script>

<style lang="scss" scoped></style>
