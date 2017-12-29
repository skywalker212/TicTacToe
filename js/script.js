var playerCount = 0;
var flag = false;

var htmlmatrix = `

  <div class='row'>
      <button type="button" name="r0c0" class="column col-md-4 cell" onclick="clickedCell(this)"></button>
      <button type="button" name="r0c1" class="column leftright col-md-4 cell" onclick="clickedCell(this)"></button>
      <button type="button" name="r0c1" class="column col-md-4 cell" onclick="clickedCell(this)"></button>
  </div>
  <div class='row'>
      <button type="button" name="r1c0" class="column updown col-md-4 cell" onclick="clickedCell(this)"></button>
      <button type="button" name="r1c1" class="column middle col-md-4 cell" onclick="clickedCell(this)"></button>
      <button type="button" name="r1c2" class="column updown col-md-4 cell" onclick="clickedCell(this)"></button>
  </div>
  <div class='row'>
      <button type="button" name="r2c0" class="column col-md-4 cell" onclick="clickedCell(this)"></button>
      <button type="button" name="r2c1" class="column leftright col-md-4 cell" onclick="clickedCell(this)"></button>
      <button type="button" name="r2c2" class="column col-md-4 cell" onclick="clickedCell(this)"></button>
    </div>
  </div>
`;

var htmlmark = `
<div class="choosemark">
  Choose Your Mark
</div>
<div class='row text-center'>
  <div class='column col-md-6'>
    <button type="button" name="cross" class="cross" onclick="markType('cross')">❌</button>
  </div>
  <div class='column col-md-6'>
    <button type="button" name="nought" class="nought" onclick="markType('nought')">⭕</button>
  </div>
</div>
<button type="button" name="back" class="btn back" onclick="goBack()">Back</button>
`;

var htmlplayer = `
<div class="player text-center">
  Game Type
</div>
<div class="row">
  <div class="column col-md-6">
    <button type="button" name="one" class="btn btn-primary one" onclick="players(1)">1 Player</button>
  </div>
  <div class="column col-md-6">
    <button type="button" name="two" class="btn two" onclick="players(2)">2 Player</button>
  </div>
</div>
`;

var players = function(count) {
  if (count == 1) {
    playerCount = 1;
  } else {
    playerCount = 2;
  }

  $('.textbox').html(htmlmark);
};

var markType = function(type) {
  var pm1 = type;
  var pm2 = type === 'cross' ? 'nought' : 'cross';
  if (playerCount == 1) {
    console.log("player has selected " + type);
  } else {
    console.log(`player 1 has selected ${pm1} so player 2 will be ${pm2}`);
  }
  var scores = `
    <div>Player 1: 0 and Player 2: 0</div>
    <div class='turn'>Player 1's turn</div>
  `;
  $(".textbox").html(htmlmatrix);
  $('.scores').html(scores);
  var buttons = `
    <button type="reset" name="resetall" class="btn btn-primary resetbtn" onclick="resetall()">Reset All</button>
  `;
  $('.reset').html(buttons);
};

var clickedCell = function(cell) {
  if (cell.clicked !== true) {
    if (flag) {
      flag = false;
      $(cell).html('❌');
      $('.turn').html("Player 1's turn");
    } else {
      $(cell).html('⭕');
      $('.turn').html("Player 2's turn");
      flag = true;
    }
  }
  cell.clicked = true;
};

var goBack = function() {
  var playerCount = 0;
  $('.textbox').html(htmlplayer);
};

var resetall = function() {
  var playerCount = 0;
  var flag = false;
  $('.textbox').html(htmlplayer);
};
