<template>
  <div>
    <div id="box1" class="box">
      <draggable tag="ul" :options="{ group: 'ITEMS' }">
        <li v-for="item in items" :key="item.no">
          {{ item.name }}-(No.{{ item.no }})
        </li>
      </draggable>
    </div>
    <div id="box2" class="box">
      <draggable tag="ul" :options="{ group: 'ITEMS' }">
        <li v-for="item in items2" :key="item.no">
          {{ item.name }}-(No.{{ item.no }})
        </li>
      </draggable>
    </div>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      items: [
        { no: 1, name: 'コンポーネント1', categoryNo: '1' },
        { no: 2, name: 'コンポーネント2', categoryNo: '2' },
      ],
      items2: [
        { no: 3, name: 'コンポーネント3', categoryNo: '1' },
        { no: 4, name: 'コンポーネント4', categoryNo: '2' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 50%;
  float: left;
  padding: 20px 0;
}
#box1 {
  background-color: #fdd;
}
#box2 {
  background-color: #ddf;
}

li {
  cursor: pointer;
  padding: 10px;
  border: solid #ddd 1px;
  background-color: #fff;
}
</style>
