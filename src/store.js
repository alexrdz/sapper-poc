import {Store} from 'svelte/store';
import posts from './routes/blog/_posts.js';

const BIN = '5bf2de2080d3c667b1e9a179';
const API_URL = 'https://api.jsonbin.io/b/';

class AppStore extends Store {
	async fetchData() {
    const data = await fetch(API_URL + BIN, {
      headers: {
        'secret-key': '$2a$10$zxmDYqatYENctsJYaFFDmeBV.DepBNRT3go3zccvuY0svQBiO4pGy'
      }
    })
      .then(r => r.json());
    
    this.set({names: data.names});
	}


	async fetchPlaylists() {
    const playlistsData = await fetch(`http://mixtagon.hdsapps.com/admin/api/collections/get/playlists?token=636c453218ea617ed3df194ecb8b48`)
      .then(r => r.json())
      .then(res => res);

    this.set({playlists: playlistsData.entries});
    return playlistsData.entries;
  }
	
}

export default new AppStore({
	posts,
	names: [],
	playlists: [],
});