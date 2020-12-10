<template>
  <div>
    {{ currentAngle }}
    {{ leftAngle }}
    {{ rightAngle }}

    <div style="position: relative; width: 200px; height: 200px">
      <!-- 右側の180度分の領域 -->
      <div class="square" style="right: 0">
        <div
          class="square"
          style="
            right: 100%;
            transform-origin: 100% 50%;
            transform: rotate(180deg);
          "
        >
          <div class="circle" style="left: 0"></div>
        </div>
      </div>
      <!-- 左側の180度分の領域 -->
      <div class="square" style="left: 0">
        <div
          class="square"
          style="left: 100%; transform-origin: 0 50%; transform: rotate(30deg)"
        >
          <div class="circle" style="right: 0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 100,
      required: false,
    },
  },
  computed: {
    currentAngle() {
      return Math.floor((360 * this.percent) / 100)
    },
    rightAngle() {
      const angle = Math.min(this.currentAngle, 180)
      return {
        transform: `rotate(${angle}deg)`,
      }
    },
    leftAngle() {
      const angle = Math.min(Math.max(this.currentAngle - 180, 0), 180)
      return {
        transform: `rotate(${angle}deg)`,
      }
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.square {
  position: absolute;
  width: 100px;
  height: 200px;
  overflow: hidden;
}
.circle {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 10px solid green;
  box-sizing: border-box;
}
</style>
