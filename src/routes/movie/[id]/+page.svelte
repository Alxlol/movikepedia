<script>
	import Icon from '@iconify/svelte';
	export let data;
	const movie = data.movie;
</script>

<div class="page-wrapper">
	<div class="movie-details">
		<img src="https://image.tmdb.org/t/p/w500/{movie.poster_path}" alt="" />
		<div class="movie-details-content">
			<h2 class="movie-title">{movie.title}</h2>
			<p class="movie-description">{movie.overview}</p>
			<div class="extra-details">
				<p class="release-date">Release date: {movie.release_date}</p>
				<p class="runtime">Run time: {movie.runtime} minutes</p>
			</div>
			<ul class="links">
				<li><a href="/"><Icon width="35px" height="35px" icon="ep:back" /></a></li>
				<li>
					<a target="_blank" href="https://www.imdb.com/title/{movie.imdb_id}"
						><Icon width="35px" height="35px" icon="bxl:imdb" /></a
					>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.page-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.movie-details {
		border-radius: 2rem;
		display: flex;
		align-items: center;
		width: 850px;
		margin: 0 4rem;
		gap: 2rem;
		padding: 3rem;
		background-color: var(--primary-color-l);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 100%;
		overflow: hidden;
		box-shadow: 0 0 40px black;
		margin-top: 4rem;
	}

	.movie-title {
		font-family: var(--accent-font);
	}

	.extra-details {
		margin-top: 1rem;
		gap: 1rem;
		display: flex;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-top: 1rem;
	}

	img {
		width: 200px;
		border-radius: 2rem;
	}

	p {
		font-size: 0.8rem;
	}

	h2 {
		margin-bottom: 1rem;
	}

	li {
		transition: transform 0.1s ease-in-out;
	}

	li:hover {
		transform: scale(1.1);
	}

	@media (max-width: 750px) {
		.movie-details {
			flex-direction: column;
			margin: 2rem 2rem;
		}
	}
</style>
