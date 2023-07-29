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
		height: 300px;
		object-fit: cover;
		filter: blur(0.5rem);
	}

	h2 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-shadow: 0 0 10px black;
		font-size: 3rem;
	}
</style>
