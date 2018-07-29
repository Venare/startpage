// +-----------+
// | POWERLINE |
// +-----------+
class Powerline {
  constructor() {
    this.tabs = {
      1: 'boards',
      2: 'music',
      3: 'tech'
    };
  }

  get on() {
    document.onkeydown = (e) => {
      if (e != undefined) {
        if (Number.isInteger(parseInt(e.key))) {
          this.activate('#tabs ul li', `#tabs ul li:nth-child(${e.key})`);
          this.activate('#panels ul', `.${this.tabs[e.key]}`);
        }
      }
    };

    setInterval(() => { $('.time').innerHTML = `${strftime('H')}<span>:${strftime('i')}</span>`; }, 1000);
  }

  activate(obj, item) {
    $$(obj).forEach((i) => i.removeAttribute('active'));
    $(item).setAttribute('active', '');
  };
}
