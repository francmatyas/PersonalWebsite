var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('<here_your_access_token>');
spotifyApi
  .getUserPlaylists() // note that we don't pass a user id
  .then(
    function (data) {
      console.log('User playlists', data);
    },
    function (err) {
      console.error(err);
    }
  );