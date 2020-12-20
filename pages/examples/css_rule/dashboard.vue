<template>
  <div class="container">
    <!-- side -->
    <div class="side"></div>
    <!-- /side -->
    <!-- main -->
    <div class="main">
      <div class="card-container">
        <!-- section1 -->
        <div class="card-box col-4">
          <div class="card-list">
            <div class="card-list-left">
              <dl>
                <dt class="title">ページビュー数</dt>
                <dd class="text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-list-right">
              <span class="title">前週比</span>
              <span class="text"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
              <div>
                <md-icon class="icon">arrow_upward</md-icon>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-list">
            <div class="card-list-left">
              <dl>
                <dt class="title">ページビュー数</dt>
                <dd class="text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-list-right">
              <span class="title">前週比</span>
              <span class="text"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-list">
            <div class="card-list-left">
              <dl>
                <dt class="title">ページビュー数</dt>
                <dd class="text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-list-right">
              <span class="title">前週比</span>
              <span class="text"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-list">
            <div class="card-list-left">
              <dl>
                <dt class="title">ページビュー数</dt>
                <dd class="text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-list-right">
              <span class="title">前週比</span>
              <span class="text"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-list">
            <div class="card-list-left">
              <dl>
                <dt class="title">ページビュー数</dt>
                <dd class="text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-list-right">
              <span class="title">前週比</span>
              <span class="text"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
            </div>
          </div>
        </div>
        <div class="card-box col-4">
          <div class="card-list">
            <div class="card-list-left">
              <dl>
                <dt class="title">ページビュー数</dt>
                <dd class="text">
                  {{ commaSeparate(cmsDashBoard.pageView.view) }}
                </dd>
              </dl>
            </div>
            <div class="card-list-right">
              <span class="title">前週比</span>
              <span class="text"
                >{{ cmsDashBoard.pageView.comparedWeek }}%</span
              >
            </div>
          </div>
        </div>
        <!-- /section1 -->
      </div>
      <div class="card-container">
        <div class="card-box col-12"></div>
      </div>
      <div class="card-container">
        <div class="card-box col-12"></div>
      </div>
      <div class="card-container">
        <div class="card-box col-8"></div>
        <div class="card-box col-4"></div>
      </div>
      <div class="card-container">
        <div class="card-box col-12"></div>
      </div>
    </div>
    <!-- /main -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      cmsDashBoard: {
        pageView: {
          view: 1000,
          comparedWeek: '1.08',
        },
        uniqueUser: {
          user: 100,
          comparedWeek: '1.08',
        },
        bounceRate: {
          rate: 78,
          comparedWeek: '1.08',
        },
        conversionRate: {
          rate: 11.45,
          comparedWeek: '1.08',
        },
        stayTime: {
          time: '00:01:09',
          comparedWeek: '1.08',
        },
        newUser: {
          user: 10,
          comparedWeek: '1.08',
        },
        analytics: {
          prev: 10,
          acitve: 30,
        },
        attractingCustomers: {
          search: 10,
          mail: 10,
          site: 5,
          directInflow: 100,
        },
        sessionByDevice: {
          PC: 40.2,
          SP: 21.5,
          Tab: 9.1,
          Other: 29.2,
        },
      },
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
    &-box {
      @include component-card($padding: 32px 26px);
    }
    &-list {
      display: flex;
      align-items: center;
      &-left {
        .title {
          width: 119px;
          height: 25px;
          text-align: left;
          font: normal normal normal 17px/22px Noto Sans JP Regular;
          letter-spacing: 0px;
          color: #1e1e1e;
          opacity: 1;
        }
        .text {
          width: 134px;
          height: 41px;
          margin: 2px 0 0 0;
          text-align: left;
          font: normal normal normal 28px/34px Noto Sans JP Bold;
          font-weight: bold;
          letter-spacing: 0px;
          color: #1e1e1e;
          opacity: 1;
        }
      }
      &-right {
        display: flex;
        align-items: center;
        margin: 0 0 0 20px;
        .title {
          width: 36px;
          height: 18px;
          text-align: left;
          font: normal normal normal 12px/16px Noto Sans JP Regular;
          letter-spacing: 0px;
          color: #8a8a8e;
          opacity: 1;
        }
        .text {
          width: 52px;
          height: 25px;
          margin: 0 0 0 8px;
          text-align: left;
          font: normal normal normal 17px/22px Noto Sans JP Bold;
          letter-spacing: 0px;
          color: #34c759;
          opacity: 1;
        }
        .icon {
          margin: 0 0 0 8px;
          color: #34c759;
        }
      }
    }
  }
}
</style>
