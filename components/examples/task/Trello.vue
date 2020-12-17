<template>
  <div>
    <div id="trello" class="flex m-10">
      <div
        v-for="(list, index) in getTasksData"
        :key="index"
        style="min-width: 260px"
        class="m-2 bg-gray-200 rounded-lg h-full"
      >
        <div class="font-bold text-sm p-4">{{ list.name }}</div>
        <div class="mx-2 mb-8">
          <div
            v-for="(task, index) in list.tasks"
            :key="index"
            class="mb-3 p-2 bg-white shadow text-xs rounded w-60"
          >
            <div>
              <div class="font-bold mb-2">
                {{ task.name }}
              </div>
              <div v-show="task.description">
                {{ task.description }}
              </div>
              <div class="text-xs flex justify-end">
                {{ task.user_name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      getTasksData: 'modules/task/getTasksData',
    }),
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
