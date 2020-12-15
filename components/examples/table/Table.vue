<template>
  <div>
    <pre>
    {{ items }}
    </pre>
    <table>
      <thead>
        <tr>
          <th>企業名</th>
          <th>電話番号</th>
          <th>住所</th>
          <th>業種</th>
          <th>従業員規模</th>
          <th>資本金</th>
          <th>タグ</th>
          <th></th>
          <th>設定</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items.contents" :key="item.id">
          <td>{{ item.companyName }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.companyName }}</td>
          <td>{{ item.companyName }}</td>
          <td>{{ item.companyName }}</td>
          <td>{{ item.companyName }}</td>
          <td>{{ item.companyName }}</td>
        </tr>
      </tbody>
    </table>
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
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped></style>
