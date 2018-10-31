var playlist = {Marley: 'No Woman, No Cry'}

function updatePlaylist(obj, artist, songtitle) {
  a = Object.assign({}, obj,{[artist]: songtitle})
  return a
}
