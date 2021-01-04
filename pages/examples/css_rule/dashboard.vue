<template>
  <div>
    <div class="data-past">
      <span class="data-past-title"
        >過去{{ selectedPeriodTitle }}のデータ
      </span>
      <md-icon class="data-past-title-icon">push_pin</md-icon>
      <div>
        <div class="data-past-btn">
          <input
            v-for="period in periodList"
            :id="period.title_en"
            :key="period.title_en"
            ref="dataPastCheck"
            v-model="checkedPeriod"
            :class="['data-past-btn-radio']"
            type="radio"
            name="period"
            :value="period.title_en"
            @change="getPeriodData(checkedPeriod)"
            @click="radioCheckRemove($event)"
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
      <!-- box -->
      <div class="card-box col-4">
        <div class="page-view">
          <div class="page-view-data">
            <div class="page-view-data-title">ページビュー数</div>
            <div class="page-view-data-text">
              {{ commaSeparate(dashBoardData.pageView.view) }}
            </div>
          </div>
          <div class="page-view-compared">
            <span class="page-view-compared-title">前週比</span>
            <span
              :class="{
                'page-view-compared-text-up':
                  dashBoardData.pageView.state === 'up',
                'page-view-compared-text-down':
                  dashBoardData.pageView.state === 'down',
                'page-view-compared-text-stay':
                  dashBoardData.pageView.state === 'stay',
              }"
              >{{ dashBoardData.pageView.comparedWeek }}%</span
            >
            <div>
              <md-icon
                :class="{
                  'page-view-compared-arrow-upward':
                    dashBoardData.pageView.state === 'up',
                  'page-view-compared-arrow-downward':
                    dashBoardData.pageView.state === 'down',
                  'page-view-compared-arrow-forward':
                    dashBoardData.pageView.state === 'stay',
                }"
                v-html="stateArrow(dashBoardData.pageView.state)"
              >
              </md-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- /box -->
      <!-- box -->
      <div class="card-box col-4">
        <div class="unique-user">
          <div class="unique-user-data">
            <div class="unique-user-data-title">ユニークユーザー</div>
            <div class="unique-user-data-text">
              {{ commaSeparate(dashBoardData.uniqueUser.user) }}
            </div>
          </div>
          <div class="unique-user-compared">
            <span class="unique-user-compared-title">前週比</span>
            <span
              :class="{
                'unique-user-compared-text-up':
                  dashBoardData.uniqueUser.state === 'up',
                'unique-user-compared-text-down':
                  dashBoardData.uniqueUser.state === 'down',
                'unique-user-compared-text-stay':
                  dashBoardData.uniqueUser.state === 'stay',
              }"
              >{{ dashBoardData.uniqueUser.comparedWeek }}%</span
            >
            <div>
              <md-icon
                :class="{
                  'unique-user-compared-arrow-upward':
                    dashBoardData.uniqueUser.state === 'up',
                  'unique-user-compared-arrow-downward':
                    dashBoardData.uniqueUser.state === 'down',
                  'unique-user-compared-arrow-forward':
                    dashBoardData.uniqueUser.state === 'stay',
                }"
                v-html="stateArrow(dashBoardData.uniqueUser.state)"
              >
              </md-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- /box -->
      <!-- box -->
      <div class="card-box col-4">
        <div class="bounce-rate">
          <div class="bounce-rate-data">
            <div class="bounce-rate-data-title">直帰率</div>
            <div class="bounce-rate-data-text">
              {{ commaSeparate(dashBoardData.bounceRate.rate) }}%
            </div>
          </div>
          <div class="bounce-rate-compared">
            <span class="bounce-rate-compared-title">前週比</span>
            <span
              :class="{
                'bounce-rate-compared-text-up':
                  dashBoardData.bounceRate.state === 'up',
                'bounce-rate-compared-text-down':
                  dashBoardData.bounceRate.state === 'down',
                'bounce-rate-compared-text-stay':
                  dashBoardData.bounceRate.state === 'stay',
              }"
              >{{ dashBoardData.bounceRate.comparedWeek }}%</span
            >
            <div>
              <md-icon
                :class="{
                  'bounce-rate-compared-arrow-upward':
                    dashBoardData.bounceRate.state === 'up',
                  'bounce-rate-compared-arrow-downward':
                    dashBoardData.bounceRate.state === 'down',
                  'bounce-rate-compared-arrow-forward':
                    dashBoardData.bounceRate.state === 'stay',
                }"
                v-html="stateArrow(dashBoardData.bounceRate.state)"
              >
              </md-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- /box -->
      <!-- box -->
      <div class="card-box col-4">
        <div class="conversion-rate">
          <div class="conversion-rate-data">
            <div class="conversion-rate-data-title">コンバージョン率</div>
            <div class="conversion-rate-data-text">
              {{ commaSeparate(dashBoardData.conversionRate.rate) }}%
            </div>
          </div>
          <div class="conversion-rate-compared">
            <span class="conversion-rate-compared-title">前週比</span>
            <span
              :class="{
                'conversion-rate-compared-text-up':
                  dashBoardData.conversionRate.state === 'up',
                'conversion-rate-compared-text-down':
                  dashBoardData.conversionRate.state === 'down',
                'conversion-rate-compared-text-stay':
                  dashBoardData.conversionRate.state === 'stay',
              }"
              >{{ dashBoardData.conversionRate.comparedWeek }}%</span
            >
            <div>
              <md-icon
                :class="{
                  'conversion-rate-compared-arrow-upward':
                    dashBoardData.conversionRate.state === 'up',
                  'conversion-rate-compared-arrow-downward':
                    dashBoardData.conversionRate.state === 'down',
                  'conversion-rate-compared-arrow-forward':
                    dashBoardData.conversionRate.state === 'stay',
                }"
                v-html="stateArrow(dashBoardData.conversionRate.state)"
              >
              </md-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- /box -->
      <!-- box -->
      <div class="card-box col-4">
        <div class="average-stay-time">
          <div class="average-stay-time-data">
            <div class="average-stay-time-data-title">平均滞在時間</div>
            <div class="average-stay-time-data-text">
              {{ commaSeparate(dashBoardData.stayTime.time) }}
            </div>
          </div>
          <div class="average-stay-time-compared">
            <span class="average-stay-time-compared-title">前週比</span>
            <span
              :class="{
                'average-stay-time-compared-text-up':
                  dashBoardData.stayTime.state === 'up',
                'average-stay-time-compared-text-down':
                  dashBoardData.stayTime.state === 'down',
                'average-stay-time-compared-text-stay':
                  dashBoardData.stayTime.state === 'stay',
              }"
              >{{ dashBoardData.stayTime.comparedWeek }}%</span
            >
            <div>
              <md-icon
                :class="{
                  'average-stay-time-compared-arrow-upward':
                    dashBoardData.stayTime.state === 'up',
                  'average-stay-time-compared-arrow-downward':
                    dashBoardData.stayTime.state === 'down',
                  'average-stay-time-compared-arrow-forward':
                    dashBoardData.stayTime.state === 'stay',
                }"
                v-html="stateArrow(dashBoardData.stayTime.state)"
              >
              </md-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- /box -->
      <!-- box -->
      <div class="card-box col-4">
        <div class="new-user">
          <div class="new-user-data">
            <div class="new-user-data-title">新規ユーザー</div>
            <div class="new-user-data-text">
              {{ commaSeparate(dashBoardData.newUser.user) }}
            </div>
          </div>
          <div class="new-user-compared">
            <span class="new-user-compared-title">前週比</span>
            <span
              :class="{
                'new-user-compared-text-up':
                  dashBoardData.newUser.state === 'up',
                'new-user-compared-text-down':
                  dashBoardData.newUser.state === 'down',
                'new-user-compared-text-stay':
                  dashBoardData.newUser.state === 'stay',
              }"
              >{{ dashBoardData.newUser.comparedWeek }}%</span
            >
            <div>
              <md-icon
                :class="{
                  'new-user-compared-arrow-upward':
                    dashBoardData.newUser.state === 'up',
                  'new-user-compared-arrow-downward':
                    dashBoardData.newUser.state === 'down',
                  'new-user-compared-arrow-forward':
                    dashBoardData.newUser.state === 'stay',
                }"
                v-html="stateArrow(dashBoardData.newUser.state)"
              >
              </md-icon>
            </div>
          </div>
        </div>
      </div>
      <!-- /box -->
    </div>
    <div class="card">
      <div class="card-box col-12">
        <AnalyticsChart :series="dashBoardData.analytics" />
      </div>
    </div>
    <div class="card">
      <div class="card-box col-8">
        <AttractingCustomersChart :series="dashBoardData.attractingCustomers" />
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
import AnalyticsChart from '~/components/test/modules/AnalyticsChart.vue'
import AttractingCustomersChart from '~/components/test/modules/AttractingCustomersChart.vue'

export default {
  layout: 'dashboard',
  components: {
    AnalyticsChart,
    AttractingCustomersChart,
  },
  async asyncData({ $api }) {
    // デフォルトで表示するデータを取得する
    return {
      dashBoardData: await $api.getAPI('/apis/dashboaard_days7.json'),
    }
  },
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
            arrow = 'arrow_upward'
            break
          case 'down':
            arrow = 'arrow_downward'
            break
          case 'stay':
            arrow = 'arrow_forward'
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
     * @param {string} period URIの指定
     */
    async getPeriodData(period) {
      this.$nuxt.$loading.start()
      this.dashBoardData = await this.$api.getAPI(
        `/apis/dashboaard_${period}.json`
      )
      this.$nuxt.$loading.finish()
    },
    /**
     * カンマ区切りにする
     * @param {number} num
     */
    commaSeparate(num) {
      return this.$common.commaSeparate(num)
    },
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
/**
  * ページ内共通mixin
  */
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

@mixin card-box-container() {
  display: flex;
  align-items: center;
}

@mixin data-title() {
  height: 25px;
  text-align: left;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 17px;
  letter-spacing: 0px;
  color: #1e1e1e;
}

@mixin data-text() {
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

@mixin compared() {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 20px;
}

@mixin compared-title() {
  width: 38px;
  margin: 0 8px 0 0;
  text-align: left;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  color: #8a8a8e;
}

@mixin compared-text() {
  width: 52px;
  margin: 0 0 0 8px;
  text-align: left;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 0px;
}

@mixin compared-up() {
  color: #34c759;
}
@mixin compared-stay() {
  color: #ff453a;
}
@mixin compared-down() {
  color: #8a8a8e;
}

@mixin compared-upward() {
  margin: 0 0 0 8px;
  @include compared-up;
  animation: 0.2s ease 0s 1 normal none running arrow_anime_upward;
}
@mixin compared-downward() {
  margin: 0 0 0 8px;
  @include compared-down;
  animation: 0.2s ease 0s 1 normal none running arrow_anime_downward;
}
@mixin compared-forward() {
  margin: 0 0 0 8px;
  @include compared-stay;
  animation: 0.2s ease 0s 1 normal none running arrow_anime_forward;
}

/**
  * カードレイアウト
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
}

/**
 * ページビュー
 * ユニークユーザー
 * 直帰率
 * コンバージョン率
 */
.page-view,
.unique-user,
.bounce-rate,
.conversion-rate,
.average-stay-time,
.new-user {
  @include card-box-container;
  &-data {
    &-title {
      @include data-title;
    }
    &-text {
      @include data-text;
    }
  }
  &-compared {
    @include compared;
    &-title {
      @include compared-title;
    }
    &-text {
      &-up {
        @include compared-up;
      }
      &-down {
        @include compared-down;
      }
      &-stay {
        @include compared-stay;
      }
      @include compared-text;
    }
    &-arrow {
      &-upward {
        @include compared-upward;
      }
      &-downward {
        @include compared-downward;
      }
      &-forward {
        @include compared-forward;
      }
    }
  }
}

/**
 * 過去のデータ
 */
.data-past {
  display: flex;
  align-items: center;
  & > * {
    margin: 0;
    &:last-child {
      margin: 0 0 0 auto;
    }
  }
  &-title {
    width: 190px;
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
      &.is {
        &-checked {
          border: 1px solid #e0e0e0;
          border-right: none;
          border-left: none;
          background-color: #4f7df0;
          color: #fff;
        }
      }
    }
  }
}

/**
 * アナリティクス
 */
.analytics {
  &-title {
    text-align: left;
    font-size: 20px;
    letter-spacing: 0px;
    color: #1e1e1e;
    opacity: 1;
  }
}

/**
 * 集客
 */
.attracting-customers {
  &-title {
    text-align: left;
    font-size: 20px;
    letter-spacing: 0px;
    color: #1e1e1e;
    opacity: 1;
  }
}

/**
 * デバイス別セッション数
 */
.sessions-device {
  &-title {
    text-align: left;
    font-size: 20px;
    letter-spacing: 0px;
    color: #1e1e1e;
    opacity: 1;
  }
}

/**
 * フォーム
 */
.form {
  &-title {
    text-align: left;
    font-size: 20px;
    letter-spacing: 0px;
    color: #1e1e1e;
    opacity: 1;
  }
}

/**
 * アニメーション
 */

// 矢印
@keyframes arrow_anime_upward {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes arrow_anime_forward {
  0% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0px);
  }
}
@keyframes arrow_anime_downward {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
