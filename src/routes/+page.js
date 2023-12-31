const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2U0NjNjZjI3MTU2MDhlMGRmZjdhZGQzZjg4YzZhMSIsInN1YiI6IjY0YjdiYTExMTA5Y2QwMDEzYjAyYWNkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZMEH1IBZasq3a9g8ClwLczgRIKzAqZCQZzLlA81kpx4'
	}
};

export async function load({ fetch }) {
	const response = await fetch('https://api.themoviedb.org/3/movie/popular', options);
	const data = await response.json();
	return { popularMovies: data.results };
}
