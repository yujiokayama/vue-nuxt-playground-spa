<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <component :is="matchComponents" />
    <Graph />
  </div>
</template>

<script>
import Form from '~/components/examples/form/Form.vue'
import Table from '~/components/examples//table/Table.vue'

export default {
  components: {
    Form,
    Table,
  },
  async asyncData({ route }) {
    return {
      routeParams: await route.params,
    }
  },
  data() {
    return {
      components: ['Table', 'Form'],
    }
  },
  computed: {
    matchComponents() {
      return (
        this.routeParams.component.charAt(0).toUpperCase() +
        this.routeParams.component.slice(1)
      )
    },
  },
  created() {},
  mounted() {},
}
</script>

<style lang="scss" scoped></style>
