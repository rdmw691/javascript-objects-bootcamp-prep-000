playlist = {artist, song};

function updatePlaylist(playlist, artist, song) {
  return playlist.assign({}, obj, {[artist]: song})
}

