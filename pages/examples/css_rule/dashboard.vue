<template>
  <div class="container">
    <!-- side -->
    <div class="side"></div>
    <!-- /side -->
    <!-- main -->
    <div class="main">
      <div class="card-container">
        <div class="card col-4"></div>
        <div class="card col-4"></div>
        <div class="card col-4"></div>
        <div class="card col-4"></div>
        <div class="card col-4"></div>
        <div class="card col-4"></div>
      </div>
      <div class="card-container">
        <div class="card col-12"></div>
      </div>
      <div class="card-container">
        <div class="card col-12"></div>
      </div>
      <div class="card-container">
        <div class="card col-8"></div>
        <div class="card col-4"></div>
      </div>
      <div class="card-container">
        <div class="card col-12"></div>
      </div>
    </div>
    <!-- /main -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmsDashBoard: {},
    }
  },
}
</script>

<style lang="scss" scoped>
/**
/////////////////////////////////////////////
 基本ルール
 ・命名ルールはケバブケース（チェインケース）
 ・必要最低限のSCSS（アンパサンド、ネステッド、ミックスイン、インクルード、forくらい）
/////////////////////////////////////////////
*/

/**
 * コンポーネントはmixinでデフォルトを定義しておく
 * 名前空間を付ける(ケバブケース：最大3ハイフンくらい)
 * 例）
 * ■レイアウト
 * layout-セクション名
 * ■コンポーネント
 * component-コンポーネント名-[ディティール名]
 */
@mixin component-input-text($color: #666, $width: 200px, $height: 30px) {
  border: 1px solid $color;
  width: $width;
  height: $height;
}

@mixin component-card($padding: 0) {
  padding: $padding;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #000000;
  border-radius: 6px;
  opacity: 1;
}

/**
 *■グリッドレイアウトについて
 *css gridを採用（12グリッド、ガーター指定など）
 */
@mixin grid-layout($column-gap: 16px, $row-gap: 16px) {
  display: grid;
  grid-template-columns: repeat(12, calc(100% / 12 - #{$column-gap}));
  grid-column-gap: $column-gap;
  grid-row-gap: $row-gap;
}

/**
 ※ブロック（各セクションheader, container, side, main, footer等）で大枠を指定する
 ※コンポーネントは各セクションに属するネステッドルールとして記述する
 ※セクション名-コンポーネント名-ディティール名
 */

.container {
  display: flex;
  min-width: 1366px;
  margin: 20px auto 0;
}
.side {
  width: 250px;
  border: 1px solid #ebeced;
}
.main {
  flex: 1;
  padding: 0 40px;
  .card {
    @include component-card($padding: 32px 26px);
    &-container {
      @include grid-layout();
      &:not(:first-child) {
        margin: 24px 0 0 0;
      }
      @for $index from 1 through 12 {
        .col-#{$index} {
          grid-column-start: span $index;
        }
      }
    }
  }
}
</style>
