<script>
	import MovieCard from '../components/MovieCard.svelte';

	export let data;
	let popularMovies = data.popularMovies;
	console.log(popularMovies);
</script>

<MovieCard movie={popularMovies[1]} />
