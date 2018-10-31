var playlist = {Marley: 'No Woman, No Cry'}

function updatePlaylist(obj, artist, songtitle) {
var a = Object.assign({}, obj,{[artist]: songtitle})
  return a
}
