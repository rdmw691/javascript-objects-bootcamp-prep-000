
function updatePlaylist(playlist, artist, song) {
  return playlist.assign({}, playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}
