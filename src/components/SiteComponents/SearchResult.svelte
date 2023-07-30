<script>
	import MovieGrid from '../MovieGrid.svelte';
	export let searchResult;
</script>

<MovieGrid gridMovies={searchResult} hasShowcase={false} showcaseTitle="Search Results:" />
