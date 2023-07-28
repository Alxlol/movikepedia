<script>
	import MovieCard from '../MovieCard.svelte';

	export let popularMovies = [];
</script>

{#each popularMovies as movie}
	<MovieCard {movie} />
{/each}
