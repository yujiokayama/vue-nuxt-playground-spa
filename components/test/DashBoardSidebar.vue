<template>
  <div :class="['side', { 'is-open': isOpend }]">
    <div :class="['side-logo', { 'is-open': isOpend }]"></div>

    <ul v-if="isOpend" class="side-nav">
      <li class="side-nav-item">
        <nuxt-link to="#">ダッシュボード</nuxt-link>
      </li>
      <li class="side-nav-item">
        <nuxt-link to="#">基本設定</nuxt-link>
      </li>
      <li class="side-nav-item">
        <nuxt-link to="#">ページ作成</nuxt-link>
      </li>
      <li class="side-nav-item">
        <nuxt-link to="#">公開管理</nuxt-link>
      </li>
    </ul>
    <div v-else class="side-nav-menu">
      <md-icon>menu</md-icon>
    </div>

    <button
      :class="['side-btn-toggle', { 'is-open': isOpend }]"
      @click="isOpend = !isOpend"
    >
      <md-icon>keyboard_tab</md-icon>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpend: true,
      windowWidth: null,
    }
  },
  mounted() {
    window.addEventListener('resize', this.toggleSideBar)
  },
  methods: {
    toggleSideBar() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth < 768) {
        this.isOpend = false
      } else {
        this.isOpend = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.side {
  position: relative;
  width: 56px;
  height: 100vh;
  border-right: 1px solid #eaeaea;
  transition: all 200ms 0s ease;
  overflow: hidden;
  &.is {
    &-open {
      width: 250px;
    }
  }
  &-logo {
    width: 128px;
    height: 40px;
    margin: 32px 0 0 32px;
    background-color: gray;
    transition: all 200ms 0s ease;
    &:not(.is-open) {
      width: 40px;
      height: 40px;
      margin: 32px 0 0 8px;
    }
  }
  &-nav {
    margin: 32px 0 0 0;
    &-item {
      a {
        display: block;
        width: 100vw;
        padding: 13px 0 13px 32px;
        &:hover {
          background-color: #ebeced;
        }
      }
    }
    &-menu {
      margin: 29px 16px 0;
      cursor: pointer;
    }
  }
  &-btn-toggle {
    position: absolute;
    bottom: 25px;
    right: 25px;
    color: #3a435c;
    &:not(.is-open) {
      right: 17px;
    }
    &.is {
      &-open {
        transform: scale(-1, 1);
      }
    }
  }
}
</style>
