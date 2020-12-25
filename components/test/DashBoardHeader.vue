<template>
  <div class="header">
    <div class="header-nav">
      <div class="header-nav-item">
        <nuxt-link to="#">
          <span class="header-nav-item-icon">
            <md-icon>home</md-icon>
          </span>
          <span class="header-nav-item-text">ホーム</span>
        </nuxt-link>
      </div>
      <div class="header-nav-item">
        <nuxt-link to="#">
          <span class="header-nav-item-icon">
            <md-icon>apps</md-icon>
          </span>
          <span class="header-nav-item-text">ツール</span>
        </nuxt-link>
      </div>
      <div class="header-nav-item">
        <nuxt-link to="#">
          <span class="header-nav-item-icon">
            <md-icon>notifications</md-icon>
          </span>
          <span class="header-nav-item-text">通知</span>
        </nuxt-link>
      </div>
      <div class="header-nav-item">
        <nuxt-link to="#">
          <span class="header-nav-item-icon">
            <md-icon>account_circle</md-icon>
          </span>
          <span class="header-nav-item-text">アカウント</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  margin: 0 0 40px 0;
  padding: 16px 0;
  border-bottom: 1px solid #eaeaea;
  background-color: #fff;
  &-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-item {
      &:not(:first-child) {
        margin: 0 0 0 18px;
      }
      &-icon {
        display: block;
        text-align: center;
        color: #3a435c;
      }
      &-text {
        display: block;
        height: 20px;
        font-size: 12px;
        color: #1e1e1e;
      }
    }
  }
}
</style>
