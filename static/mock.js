/**
 * ・公式リファレンス
 * https://www.npmjs.com/package/faker
 * ・Demo
 * https://cdn.rawgit.com/Marak/faker.js/master/examples/browser/index.html
 */
const faker = require('faker')
// 日本語化
faker.locale = 'ja'

const db = {
  users: [],
}

const mockLength = 10

for (let i = 0; i < mockLength; i++) {
  db.users.push({
    //id
    id: faker.random.number(),
    //名前
    name: faker.name.findName(),
    //メールアドレス
    email: faker.internet.email(),
  })
}

/**
 * スペース4文字でインデント
 */
console.log(JSON.stringify(db, null, 2))
