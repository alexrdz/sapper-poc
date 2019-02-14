import store from '../../store';
const {playlists} = store.get();

const contents = JSON.stringify(playlists.map(playlist => {
	return {
		title: playlist.title,
		slug: playlist.title_slug
	};
}));


export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}