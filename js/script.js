var playerCount = 0;

var players = function (count) {
  if(count == 1){
    playerCount = 1;
    console.log('you have selected a single player game.');
  }else {
    playerCount = 2;
    console.log('2 players.');
  }
  var htmlstr = `
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
  `;
  $('.textbox').html(htmlstr);
};

var markType = function (type) {
  var pm1 = type;
  var pm2 = type==='cross'?'nought':'cross';
  if(playerCount==1){
    console.log("player has selected " +type);
  }else {
    console.log(`player 1 has selected ${pm1} so player 2 will be ${pm2}`);
  }
};
