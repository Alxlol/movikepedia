<script>
	export let movie;
	export let showcaseTitle;
</script>

<div class="showcase">
	<img src="https://image.tmdb.org/t/p/original/{movie.backdrop_path}" alt="" />
	<h2>{showcaseTitle}</h2>
</div>

<style>
	.showcase {
		/* margin: 0 4rem;
		overflow: hidden;
		height: 300px;
		border-radius: 1rem; */
		width: 100%;
		margin: 0 4rem;

		position: relative;
		text-align: center;
	}

	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 2rem;
		filter: blur(0.25rem);
	}

	h2 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-shadow: 0 0 10px black;
		font-size: 2rem;
		font-family: var(--accent-font);
	}

	@media (max-width: 600px) {
		h2 {
			font-size: 2rem;
			position: static;
			top: 0;
			left: 0;
			transform: translate(0, 0);
			margin-top: 3rem;
			margin-bottom: 1rem;
			text-shadow: none;
		}

		img {
			display: none;
		}
	}
</style>
