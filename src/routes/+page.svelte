<script>
	import MovieGrid from '../components/MovieGrid.svelte';
	import PopularMovies from '../components/SiteComponents/PopularMovies.svelte';

	export let data;
	let popularMovies = data.popularMovies;
</script>

<PopularMovies {popularMovies} />
