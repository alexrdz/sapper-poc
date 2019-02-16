import {Store} from 'svelte/store';
import posts from './routes/blog/_posts.js';
import axios from 'axios';

const BIN = '5bf2de2080d3c667b1e9a179';
const API_URL = 'https://api.jsonbin.io/b/';


class AppStore extends Store {
	async fetchData() {
    const data = await axios.get(API_URL + BIN, {
      headers: {
        'secret-key': '$2a$10$zxmDYqatYENctsJYaFFDmeBV.DepBNRT3go3zccvuY0svQBiO4pGy'
      }
    })
      .then(res => res.data);

    return this.set({names: data.names});
	}


	async fetchPlaylists() {
    const playlistsData = await axios.get(`https://mixtagon.hdsapps.com/admin/api/collections/get/playlists?token=636c453218ea617ed3df194ecb8b48`)
      .then(res => res);

    this.set({
      playlistsLoading: false,
      playlistsLoaded: true,
      playlists: playlistsData.data.entries,
    });

    return playlistsData;
  }


  async fetchPlaylist(slug) {
    const res = await this.fetch(`https://mixtagon.hdsapps.com/admin/api/collections/get/playlists?token=636c453218ea617ed3df194ecb8b48&populate=1&filter[title_slug]=${params.slug}`);
    const data = await res.json();

    if (res.status == 200) {
      this.store.set({
        currentPlaylist: data.entries.shift()
      });
    } 
    
    return data.entries.shift();
  }
	
}

const store = new AppStore({
  posts,
	names: [],
  playlists: [],
  playlistsLoading: true,
  playlistsLoaded: false,
  currentPlaylist: {},
});


export default store;