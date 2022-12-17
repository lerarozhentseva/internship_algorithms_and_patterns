// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json());
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    let dataFromLS = 'data from local storage';
    return dataFromLS;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    this.fetch.request('vk.com');
  }
}

class LocalClient {
  constructor() {
    this.local = new LocalStorage()
  }

  clientGet() {
    this.local.get();
  }
}
class DataBase {
  constructor(client) {
    this.client = client;

  }
  getData() {
    return this.client.clientGet()
  }
}

const db = new DataBase(new LocalStorage())
console.log(db.getData('rand'))