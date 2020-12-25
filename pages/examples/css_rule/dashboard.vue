<template>
  <div>
    <div class="row">
      <div class="col-3">AAA</div>
      <div class="col-3">AAA</div>
      <div class="col-3">AAA</div>
    </div>
    <div class="card">
      <div class="card-box col-4">
        <div class="card-item">
          <div class="card-item-data">
            <div class="card-item-data-title">ページビュー数</div>
            <div class="card-item-data-text">
              {{ commaSeparate(cmsDashBoard.pageView.view) }}
            </div>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-up"
              >{{ cmsDashBoard.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon class="card-item-compared-arrow-up"
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
            <span class="card-item-compared-text-stay"
              >{{ cmsDashBoard.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon class="card-item-compared-arrow-right"
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
            <span class="card-item-compared-text-down"
              >{{ cmsDashBoard.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon class="card-item-compared-arrow-down"
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
            <span class="card-item-compared-text-up"
              >{{ cmsDashBoard.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon class="card-item-compared-arrow-up"
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
            <span class="card-item-compared-text-stay"
              >{{ cmsDashBoard.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon class="card-item-compared-arrow-right"
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
            <span class="card-item-compared-text-down"
              >{{ cmsDashBoard.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon class="card-item-compared-arrow-down"
                >arrow_downward</md-icon
              >
            </div>
          </div>
        </div>
      </div>
    </div>
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
</template>

<script>
export default {
  layout: 'dashboard',
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
@mixin grid-layout($column-gap: 16px, $row-gap: 16px) {
  display: grid;
  grid-template-columns: repeat(12, calc(100% / 12 - #{$column-gap}));
  grid-column-gap: $column-gap;
  grid-row-gap: $row-gap;
}

@mixin component-card($margin: 0, $padding: 0) {
  margin: $margin;
  padding: $padding;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #d6d6d6;
  border-radius: 6px;
  opacity: 1;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -16px 0 0;
  @for $i from 1 through 12 {
    .col-#{$i} {
      width: calc(100% / #{$i} - 16px);
      margin: 0 16px 0 0;
      padding: 32px 26px;
      background: #ffffff 0% 0% no-repeat padding-box;
      box-shadow: 0px 1px 5px #d6d6d6;
      border-radius: 6px;
      opacity: 1;
    }
  }
}

/**
  * カードコンポーネントの例
  */
.card {
  margin: 0 -16px 0 0;
  @include grid-layout();
  &:not(:first-child) {
    margin: 24px -16px 0 0;
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
      width: 50%;
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
      width: 50%;
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
        &-up {
          color: #34c759;
        }
        &-down {
          color: #ff453a;
        }
        &-stay {
          color: #8a8a8e;
        }
      }
      &-arrow {
        &-up {
          margin: 0 0 0 8px;
          color: #34c759;
        }
        &-right {
          margin: 0 0 0 8px;
          color: #8a8a8e;
        }
        &-down {
          margin: 0 0 0 8px;
          color: #ff453a;
        }
      }
    }
  }
}
</style>
