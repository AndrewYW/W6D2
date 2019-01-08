class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  }

  bindEvents() {}

  makeMove($square) {}

  setupBoard() {
    const $ul = $('<ul></ul>');

    for(let i = 0; i < 9; i++){
      $ul.append($('<li class="unclicked"></li>'));
    }
    this.el.append($ul);
  }
}

module.exports = View;
