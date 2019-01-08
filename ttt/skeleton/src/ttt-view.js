class View {
  constructor(game, $el) {
    this.game = game;
    this.el = $el;
    this.setupBoard();
  }

  bindEvents() {
    const $ul = $('ul');

    $ul.on('click', 'li', e => {
      this.makeMove(e.target);
    });
  }

  makeMove($square) {

    // if (this.game.board.winner() !== null) {
    //   alert('winner');
    // }

    let pos = [];
    switch (parseInt($square.id)) {
      case 0:
        pos = [0, 0];
        break;
      case 1:
        pos = [0, 1];
        break;
      case 2:
        pos = [0, 2];
        break;
      case 3:
        pos = [1, 0];
        break;
      case 4:
        pos = [1, 1];
        break;
      case 5:
        pos = [1, 2];
        break;
      case 6:
        pos = [2, 0];
        break;
      case 7:
        pos = [2, 1];
        break;
      case 8:
        pos = [2, 2];
        break;
      default:
        break;
    }
    if (this.game.board.isEmptyPos(pos) && (!this.game.isOver())) {
      this.game.playMove(pos);
      let mark = this.game.board.grid[pos[0]][pos[1]];
      switch (mark) {
        case "x":
          $($square).append($(`<p><font color="green">${mark}</font></p>`));
          break;
        case "o":
          $($square).append($(`<p><font color="red">${mark}</font></p>`));
          break;
        default:
          break;
      }
      if (this.game.board.winner() !== null) {
        setTimeout(function() {alert('winner'); }, 50);

      }
      $($square).toggleClass('unclicked clicked');
    } else {
      (this.game.isOver()) ? alert('Stop playing') : alert('Invalid position');
    }
  }

  setupBoard() {
    const $ul = $('<ul></ul>');

    for(let i = 0; i < 9; i++){
      $ul.append($(`<li class="unclicked" id=${i}></li>`));
    }
    this.el.append($ul);
  }
}

module.exports = View;
