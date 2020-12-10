<template>
  <div class="circle-container">
    <!-- right -->
    <div class="square square-right">
      <div class="square" :style="rightAngle">
        <div class="circle-inner square-left"></div>
      </div>
    </div>
    <div class="circle-text">
      {{ percentView }}
    </div>
    <!-- left -->
    <div class="square" style="left: 0">
      <div class="square" :style="[leftAngle]">
        <div class="circle-inner square-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    percent: {
      type: Number,
      default: 10,
      required: false,
    },
  },
  computed: {
    percentView() {
      return `${this.percent}%`
    },
    currentAngle() {
      return Math.floor((360 * this.percent) / 100)
    },
    rightAngle() {
      const angle = Math.min(this.currentAngle, 180)
      return {
        right: '100%',
        'transform-origin': '100% 50%',
        transform: `rotate(${angle}deg)`,
      }
    },
    leftAngle() {
      const angle = Math.min(Math.max(this.currentAngle - 180, 0), 180)
      return {
        left: '100%',
        'transform-origin': '0 50%',
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
  &-right {
    right: 0;
  }
  &-left {
    left: 0;
  }
  position: absolute;
  width: 100px;
  height: 200px;
  overflow: hidden;
}
.circle {
  &-container {
    position: relative;
    width: 200px;
    height: 200px;
  }
  &-inner {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 10px solid lightskyblue;
    box-sizing: border-box;
  }
  &-text {
    position: absolute;
    width: 200px;
    line-height: 200px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
}
</style>
