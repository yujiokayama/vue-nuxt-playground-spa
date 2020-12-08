<template>
  <div class="max-w-4xl mt-10 mx-auto px-5">
    <div class="flex justify-between items-center">
      <nuxt-link to="/examples/components/BarChart">
        <div class="border-2 border-gray-300 rounded-xl bg-white mr-5">
          <div class="p-5">
            <h1 class="text-2xl font-bold text-green-800 py-2">
              highchart sample bar
            </h1>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/examples/components/FunnelChart">
        <div class="border-2 border-gray-300 rounded-xl bg-white mr-5">
          <div class="p-5">
            <h1 class="text-2xl font-bold text-green-800 py-2">
              highchart sample Funnel
            </h1>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    components: {
      type: Array,
      default: () => [],
      required: false,
    },
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
