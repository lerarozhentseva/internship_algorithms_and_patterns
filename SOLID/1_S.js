// Single Responsibility Principles

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false; // когда создаем новую новость, флаг находится в состоянии false (была ли новость изменена)
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }

  // берет данные новости и приводит к HTML; такого быть не должно, это нарушение принципа
  // toHtml() {
  //   return `
  //     <div class='news'>
  //       <h1>${this.title}</h1>
  //       <p>${this.text}</p>
  //     </div>
  //   `
  // }
}

// надо создать отдельный класс, который будет выводить инфу к определенному формату. нельзя мешать логику эл-нта с другими методами
class NewsPrinter {
  constructor(news) {
    this.news = news;
  }

  html() {
      return `
        <div class='news'>
          <h1>${this.news.title}</h1>
          <p>${this.news.text}</p>
        </div>
      `
    }
}

const printer = new NewsPrinter(new News('Снегопад и метель', '9 декабря'))
console.log(printer.html());
