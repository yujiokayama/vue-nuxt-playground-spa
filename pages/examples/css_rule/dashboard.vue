<template>
  <div>
    <div class="data-past">
      <span class="data-past-title"
        >過去{{ selectedPeriodTitle }}のデータ
        <md-icon class="data-past-title-icon">push_pin</md-icon></span
      >
      <div>
        <div class="data-past-btn">
          <input
            v-for="period in periodList"
            :id="period.title_en"
            :key="period.title_en"
            ref="dataPastCheck"
            v-model="checkedPeriod"
            @change="getPeriodData(checkedPeriod)"
            @click="radioCheckRemove($event)"
            :class="['data-past-btn-radio']"
            type="radio"
            name="period"
            :value="period.title_en"
          />
          <label
            v-for="period in periodList"
            :key="period.title_ja"
            :for="period.title_en"
            :class="[
              'data-past-btn-label',
              { 'is-checked': checkedPeriod === period.title_en },
            ]"
            >{{ period.title_ja }}</label
          >
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-box col-4">
        <div class="card-item">
          <div class="card-item-data">
            <div class="card-item-data-title">ページビュー数</div>
            <div class="card-item-data-text">
              {{ commaSeparate(dashBoardData.pageView.view) }}
            </div>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-up"
              >{{ dashBoardData.pageView.comparedWeek }}%</span
            >
            <div v-html="stateArrow(dashBoardData.pageView.state)"></div>
          </div>
        </div>
      </div>
      <div class="card-box col-4">
        <div class="card-item">
          <div class="card-item-data">
            <dl>
              <dt class="card-item-data-title">ページビュー数</dt>
              <dd class="card-item-data-text">{{}}</dd>
            </dl>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-stay">{{}}%</span>
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
              <dd class="card-item-data-text">{{}}</dd>
            </dl>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-down">{{}}%</span>
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
              <dd class="card-item-data-text">{{}}</dd>
            </dl>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-up">{{}}%</span>
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
              <dd class="card-item-data-text">{{}}</dd>
            </dl>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-stay">{{}}%</span>
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
              <dd class="card-item-data-text">{{}}</dd>
            </dl>
          </div>
          <div class="card-item-compared">
            <span class="card-item-compared-title">前週比</span>
            <span class="card-item-compared-text-down">{{}}%</span>
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
      <div class="card-box col-12">
        <span>アナリティクス</span>
      </div>
    </div>
    <div class="card">
      <div class="card-box col-8">
        <span>集客</span>
      </div>
      <div class="card-box col-4">
        <span>デバイス別セッション数</span>
      </div>
    </div>
    <div class="card">
      <div class="card-box col-12">
        <table>
          <thead>
            <th>head</th>
          </thead>
          <tbody>
            <tr>
              body
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'dashboard',
  data() {
    return {
      checkedPeriod: '',
      periodData: this.dashBoardData,
      periodList: [
        {
          title_en: 'days7',
          title_ja: '7日間',
        },
        {
          title_en: 'month1',
          title_ja: '1ヶ月',
        },
        {
          title_en: 'month3',
          title_ja: '3ヶ月',
        },
      ],
    }
  },
  async asyncData({ $api }) {
    // デフォルトで表示するデータを取得する
    return {
      dashBoardData: await $api.getAPI('/apis/dashboaard_days7.json'),
    }
  },
  computed: {
    /**
     * 選択している期間のタイトル
     */
    selectedPeriodTitle() {
      const selectedPeriod = this.periodList.filter((data) => {
        return data.title_en.match(this.checkedPeriod)
      })
      return selectedPeriod[0].title_ja
    },
    /**
     * 矢印の向きを算出する
     */
    stateArrow() {
      return (state) => {
        let arrow = null
        switch (state) {
          case 'up':
            arrow =
              '<md-icon class="card-item-compared-arrow-up">arrow_upward</md-icon>'
            break
          case 'down':
            arrow =
              '<md-icon class="card-item-compared-arrow-downward">arrow_downward</md-icon>'
            break
          case 'stay':
            arrow =
              '<md-icon class="card-item-compared-arrow-forward">arrow_forward</md-icon>'
            break
          default:
            break
        }
        return arrow
      }
    },
  },
  mounted() {
    // デフォルトで7日間のラジオボタンをチェック状態にする
    this.$refs.dataPastCheck[0].checked = true
    // デフォルトで7日間のラジオボタンの値を代入する
    this.checkedPeriod = this.$refs.dataPastCheck[0].value
  },
  methods: {
    /**
     * 表示するデータの範囲
     * @param {string} period
     */
    async getPeriodData(period) {
      this.dashBoardData = await this.$api.getAPI(
        `/apis/dashboaard_${period}.json`
      )
    },
    /**
     * カンマ区切りにする
     * @param {number} num
     */
    commaSeparate(num) {
      return this.$common.commaSeparate(num)
    },
    /**
     * 選択したの期間のデータを返す
     * @param {string} period
     */
    // changePeriod(period) {
    //   const periodData = Object.values(this.dashBoardData).filter((data) => {
    //     return data.title_ja.match(period)
    //   })
    //   this.periodData = periodData[0]
    // },
    /**
     * 二回クリックでラジオのチェックを外す
     * @param {string} radio
     */
    radioCheckRemove(radio) {
      if (this.checkedPeriod === radio.value) {
        radio.checked = false
        this.checkedPeriod = ''
      } else {
        this.checkedPeriod = radio.value
      }
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

/**
  * card
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
.data-past {
  display: flex;
  & > * {
    &:last-child {
      margin-left: auto;
    }
  }
  &-title {
    font-size: 22px;
    text-align: left;
    letter-spacing: 0px;
    color: #1e1e1e;
    opacity: 1;
    &-icon {
      transform: rotate(30deg);
    }
  }
  &-btn {
    display: flex;
    &-radio {
      display: none;
    }
    &-label {
      display: block;
      cursor: pointer;
      width: calc(198px / 3);
      height: 32px;
      line-height: 1.3;
      margin: 0;
      padding: 7px 5px;
      border: 1px solid #e0e0e0;
      background: #fff;
      color: #1e1e1e;
      font-size: 13px;
      text-align: center;
      transition: 0.2s;
      &:first-of-type {
        border: 1px solid #e0e0e0;
        border-right: none;
        border-radius: 4px 0 0 4px;
      }
      &:last-of-type {
        border: 1px solid #e0e0e0;
        border-left: none;
        border-radius: 0 4px 4px 0;
      }
      &.is-checked {
        border: 1px solid #e0e0e0;
        border-right: none;
        border-left: none;
        background-color: #4f7df0;
        color: #fff;
      }
    }
  }
}
</style>
