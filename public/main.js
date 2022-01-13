class Animations {
  constructor() {
    this.img = document.querySelectorAll('img');
    this.h1 = document.querySelectorAll('h1');
    this.button = document.querySelectorAll('button')
    this.p = document.querySelectorAll('p')
    this.card = document.querySelectorAll('.card')
    this.load();
  }

  load() {
    this.img.forEach((item) => {
      item.classList.add('wow', 'fadeIn');
    });
    this.h1.forEach((item) => {
      item.classList.add('wow', 'fadeInUp');
    });
    this.button.forEach(item => {
        item.classList.add('wow', 'flipInX')
    })
    this.p.forEach(item => {
        item.classList.add('wow', 'fadeInUp')
    })
    this.card.forEach(item => {
        item.classList.add('wow', 'flipInX')
    })
  }
}
