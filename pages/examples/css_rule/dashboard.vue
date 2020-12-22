<template>
  <div class="container">
    <!-- side -->
    <div class="side"></div>
    <!-- /side -->
    <!-- main -->
    <div class="main">
      <!-- blcok start -->
      <div class="card">
        <div class="card-box col-4">
          <div class="card-item">
            <div class="card-item-data">
              <dl>
                <dt class="card-item-data-title">ページビュー数</dt>
                <dd class="card-item-data-text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-item-compared">
              <span class="card-item-compared-title">前週比</span>
              <span class="card-item-compared-text _up"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="card-item-compared-arrow _up"
                  >arrow_upward</md-icon
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-item">
            <div class="card-item-data">
              <dl>
                <dt class="card-item-data-title">ページビュー数</dt>
                <dd class="card-item-data-text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-item-compared">
              <span class="card-item-compared-title">前週比</span>
              <span class="card-item-compared-text _stay"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="card-item-compared-arrow _right"
                  >arrow_forward</md-icon
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-item">
            <div class="card-item-data">
              <dl>
                <dt class="card-item-data-title">ページビュー数</dt>
                <dd class="card-item-data-text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-item-compared">
              <span class="card-item-compared-title">前週比</span>
              <span class="card-item-compared-text _down"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="card-item-compared-arrow _down"
                  >arrow_downward</md-icon
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-item">
            <div class="card-item-data">
              <dl>
                <dt class="card-item-data-title">ページビュー数</dt>
                <dd class="card-item-data-text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-item-compared">
              <span class="card-item-compared-title">前週比</span>
              <span class="card-item-compared-text _up"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="card-item-compared-arrow _up"
                  >arrow_upward</md-icon
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-item">
            <div class="card-item-data">
              <dl>
                <dt class="card-item-data-title">ページビュー数</dt>
                <dd class="card-item-data-text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-item-compared">
              <span class="card-item-compared-title">前週比</span>
              <span class="card-item-compared-text _stay"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="card-item-compared-arrow _right"
                  >arrow_forward</md-icon
                >
              </div>
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-item">
            <div class="card-item-data">
              <dl>
                <dt class="card-item-data-title">ページビュー数</dt>
                <dd class="card-item-data-text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-item-compared">
              <span class="card-item-compared-title">前週比</span>
              <span class="card-item-compared-text _down"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="card-item-compared-arrow _down"
                  >arrow_downward</md-icon
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /blcok end -->
      <div class="card">
        <div class="card-box col-12"></div>
      </div>
      <div class="card">
        <div class="card-box col-12"></div>
      </div>
      <div class="card">
        <div class="card-box col-8"></div>
        <div class="card-box col-4"></div>
      </div>
      <div class="card">
        <div class="card-box col-12"></div>
      </div>
    </div>
    <!-- /main -->
  </div>
</template>

<script>
export default {
  async asyncData({ $api }) {
    return {
      cmsDashBoard: await $api.getAPI('/apis/dashboaard.json'),
    }
  },
  computed: {
    dataBlock1() {
      const {
        pageView,
        uniqueUser,
        bounceRate,
        conversionRate,
        stayTime,
        newUser,
      } = this.cmsDashBoard
      return [
        pageView,
        uniqueUser,
        bounceRate,
        conversionRate,
        stayTime,
        newUser,
      ]
    },
  },
  methods: {
    commaSeparate(num) {
      return this.$common.commaSeparate(num)
    },
  },
}
</script>

<style lang="scss" scoped>
/**
  /////////////////////////////////////////////
  基本ルール
  ・
  ・必要最低限のSCSS（アンパサンド、ネステッドルール、ミックスイン、インクルード、for、変数、パーシャルくらい？）
  /////////////////////////////////////////////
  */

/**
  * コンポーネントはmixinでデフォルトを定義しておく
  * 名前空間を付ける(ケバブケース：最大3ハイフンくらい)
  * 例）
  * ■コンポーネント
  * component-コンポーネント名-[ディティール名]
  */

@mixin component-card($margin: 0, $padding: 0) {
  margin: $margin;
  padding: $padding;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #d6d6d6;
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
  これを参考に
  https://tsudoi.org/guide/detail/2.html
  BEMの概念を取り入れる
  ブロック内の要素のクラス名が冗長にはなるが、基本的にはマルチクラスではなくシングルクラスで記述したい（マルチクラスすぎると予測や管理が煩雑になるため）
  Block-Element-Modifier
  [大枠]-[大枠中に属する要素]-[バリエーションや状態など]
  Modifierはアンダースコアを付与して命名
  例）ボタンの赤いバージョン
  <button class="button _red"></button>
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
}

/**
  * カードコンポーネントの例
  */
.card {
  @include grid-layout();
  &:not(:first-child) {
    margin: 24px 0 0 0;
  }
  @for $index from 1 through 12 {
    .col-#{$index} {
      grid-column-start: span $index;
    }
  }
  &-box {
    @include component-card($padding: 32px 26px);
  }
  &-item {
    display: flex;
    align-items: center;
    &-data {
      &-title {
        width: 119px;
        height: 25px;
        text-align: left;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 17px;
        letter-spacing: 0px;
        color: #1e1e1e;
      }
      &-text {
        width: 134px;
        height: 41px;
        margin: 2px 0 0 0;
        text-align: left;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: bold;
        font-size: 28px;
        letter-spacing: 0px;
        color: #1e1e1e;
      }
    }
    &-compared {
      display: flex;
      align-items: center;
      margin: 0 0 0 20px;
      &-title {
        width: 38px;
        text-align: left;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 12px;
        color: #8a8a8e;
      }
      &-text {
        width: 52px;
        margin: 0 0 0 8px;
        text-align: left;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 17px;
        font-weight: bold;
        letter-spacing: 0px;
        &._up {
          color: #34c759;
        }
        &._down {
          color: #ff453a;
        }
        &._stay {
          color: #8a8a8e;
        }
      }
      &-arrow {
        &._up {
          margin: 0 0 0 8px;
          color: #34c759;
        }
        &._right {
          margin: 0 0 0 8px;
          color: #8a8a8e;
        }
        &._down {
          margin: 0 0 0 8px;
          color: #ff453a;
        }
      }
    }
  }
}
</style>
