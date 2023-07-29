<script>
	export let movie;
</script>

<div class="movie-card">
	<a href="/movie/{movie.id}">
		<img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="" />
		<h2 class="movie-title">{movie.title}</h2>
	</a>
</div>

<style>
	.movie-card {
		width: var(--movie-card-width);
		border-radius: 1rem;
		overflow: hidden;

		transition: transform 0.25s ease-in-out;
	}

	.movie-card:hover {
		transform: scale(1.1);
	}

	.movie-title {
		bottom: 2rem;
		background-color: rgba(0, 0, 0, 0.7);
		padding: 0.4rem;
		font-size: 0.6rem;
		font-weight: 400;
		text-align: center;

		border-bottom-left-radius: inherit;
		border-bottom-right-radius: inherit;
	}

	a {
		color: var(--white);
		text-decoration: none;
	}
</style>
