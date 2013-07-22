// function update_player_position(player, position) {
//   var player_row = $('#' + player);
//   var updated_position = 'td:nth-child(' + position + ')';

//   player_row.find('.active').removeClass('active');
//   player_row.find(updated_position).addClass('active');

// }

function move_player_forward(player) {
  var player_row = $('#' + player);
  var current_position = player_row.find('.active');
  var updated_position = current_position.next();
  if (updated_position.length !== 0){
    current_position.removeClass('active');
    updated_position.addClass('active');
  }
  else {
    alert(player+' wins!');
    reset_players();
  }
}

function reset_players() {
  $('#player1').find('.active').removeClass('active');
  $('#player2').find('.active').removeClass('active');
  $('#player1').find('td').first().addClass('active');
  $('#player2').find('td').first().addClass('active');
}

$(function() {
  $(document).on('keyup', function(e) {
    var code = e.which;
    if(code == 68) { //'D L'
       move_player_forward('player1');
    }
    else if(code == 76) { //'D L'
       move_player_forward('player2');
    }
  });
});
