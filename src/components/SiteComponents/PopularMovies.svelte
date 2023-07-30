<script>
	import MovieGrid from '../MovieGrid.svelte';
	export let popularMovies;
</script>

<MovieGrid gridMovies={popularMovies} hasShowcase={true} showcaseTitle="Popular Movies:" />
