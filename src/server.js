import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '../__sapper__/server.js';
import axios from 'axios';
import store from './store';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';


async function fetchPlaylists() {
	const playlistsData = await axios.get(`https://mixtagon.hdsapps.com/admin/api/collections/get/playlists?token=636c453218ea617ed3df194ecb8b48`)
		.then(res => res);

	store.set({
		playlistsLoading: false,
		playlistsLoaded: true,
		playlists: playlistsData.data.entries,
	});

	polka() // You can also use Express
	.use(
		// '/my-base-path',  // add base path
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware({
			store: () => {
				return store;
			}
		})
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
}

fetchPlaylists();

