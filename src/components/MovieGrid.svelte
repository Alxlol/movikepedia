<script>
	import MovieCard from './MovieCard.svelte';
	import Showcase from './Showcase.svelte';
	export let gridMovies = [];
	export let hasShowcase = true;
	export let showcaseTitle = 'example title';
</script>

<div class="showcase-container">
	{#if hasShowcase == true}
		<Showcase movie={gridMovies[0]} {showcaseTitle} />
	{/if}
</div>

<div class="movie-grid">
	{#each gridMovies as movie}
		{#if movie.poster_path !== null}
			<MovieCard {movie} />
		{/if}
	{/each}
</div>

<style>
	.movie-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(var(--movie-card-width), 1fr));
		gap: 2rem;
		margin: 4rem;
		align-items: end;
		justify-items: center;
	}

	.showcase-container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 600px) {
		:root {
			--movie-card-width: 300px;
		}
	}
</style>
