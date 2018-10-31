var playlist = {Marley: 'No Woman, No Cry'}

function updatePlaylist(playlist, artist, songtitle) {
 return Object.assign(playlist, {[artist]: songtitle})
  }
