 class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }

  getData() {
    return this.data;
  }
 }

const mongo = new Database('MongoDB');
console.log(mongo.getData());
const sql = new Database('MYSQL');
console.log(sql.getData()); // но здесь также получаем предыдущий результат. тк в проверке на instance записывается старый instance(от mongo)
