var playlist = {artistName: songtitle};

function updatePlaylist(playlist, artist, song){
  playlist.artist = song
  return playlist
}

function removePlaylist(playlist, artist){
  delete playlist.artist
  return playlist
}
