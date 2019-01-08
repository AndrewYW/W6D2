class HanoiView {
  constructor (game, $el) {
    this.game = game;
    this.el = $el;
    this.setupTowers();
    this.render();
  }

  setupTowers() {
    const $ul = $('<ul id="0"></ul>');
    $ul.append("<li class='tower1'></li>");
    $ul.append("<li class='tower2'></li>");
    $ul.append("<li class='tower3'></li>");

    this.el.append($ul);
    this.el.append($('<ul id="1"></ul>'));
    this.el.append($('<ul id="2"></ul>'));
  }

  render() {
    const towers = this.game.towers;
    const $uls = $('ul');
    $('li').remove();
    for (let i = 0; i < 3; i++) {
      const $ul = $(`#${i}`);
      const tower = towers[i];
      tower.forEach((int) => {
        $ul.append(`<li class='tower${int}'></li>`);  
      });
    }
  }
}

module.exports = HanoiView;