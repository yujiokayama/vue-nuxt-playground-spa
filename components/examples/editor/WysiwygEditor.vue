<template>
  <div>
    <p>
      『Quill』は商用利用可能な、JavaScript製のWYSIWYGエディターです。世界的に人気の高いライブラリで、GitHubで2万6000ものスターを獲得しています。<br />
      使い方は非常に簡単。任意のDOMに、Quillが読み込まれるようJavaScriptを記述するだけです。公式のドキュメントに詳しい方法が書かれているので、ぜひ参考にしてみてください。<br />
      QuilにはCDNが提供されており、手軽に導入できることも魅力です。コードブロックの作成と強調表示を行うことが可能で、プログラミング言語を扱うサービスに利用するのにも向いています。<br />
      またQuillは「Snow」と「Bubble」の2つの外観テーマが配信されており、場面に応じて両者を使い分けられます。<br />
      Snow：<br />
      テキストボックスの上部にアイコンが並んでいる、はてなブログやWordpress4以前のようなオーソドックスなツールバー形式のテーマ。<br />
      Bubble：<br />
      装飾したい文字を選択するとツールチップが表示される、noteやWordpress5以降（Gutenberg）のようなテーマ。<br />
      なお、Quillはツールバーの日本語化には非対応となっているので注意してください。マウスオーバーによるガイド表示などもないため、ITリテラシーに自信がある方におすすめのWYSIWYGエディタです。
    </p>
    <quill-editor v-model="content" :options="editorOption" />
  </div>
</template>
<script>
// const defaultOptions = {
//   theme: 'snow',
//   boundary: document.body,
//   modules: {
//     toolbar: [
//       ['bold', 'italic', 'underline', 'strike'],
//       ['blockquote', 'code-block'],
//       [{ header: 1 }, { header: 2 }],
//       [{ list: 'ordered' }, { list: 'bullet' }],
//       [{ script: 'sub' }, { script: 'super' }],
//       [{ indent: '-1' }, { indent: '+1' }],
//       [{ direction: 'rtl' }],
//       [{ size: ['small', false, 'large', 'huge'] }],
//       [{ header: [1, 2, 3, 4, 5, 6, false] }],
//       [{ color: [] }, { background: [] }],
//       [{ font: [] }],
//       [{ align: [] }],
//       ['clean'],
//       ['link', 'image', 'video'],
//     ],
//   },
//   placeholder: 'Insert text here ...',
//   readOnly: false,
// }

export default {
  data() {
    return {
      content: 'テキスト',
      editorOption: {
        placeholder: '入力してください',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
