<script>
	export let movie;
</script>

<div class="movie-card">
	<img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="" />
	<h2 class="movie-title">{movie.title}</h2>
</div>

<style>
	.movie-card {
		width: 275px;
		border-radius: 1rem;
		overflow: hidden;
	}

	.movie-title {
		position: fixed;
		transform: translateY(-100%);
		background-color: rgba(0, 0, 0, 0.7);
		padding: 0.4rem;
		font-size: 1rem;
		font-weight: 400;
		text-align: center;

		width: inherit;
		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
	}
</style>
