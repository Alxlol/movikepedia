<script>
	import SearchBar from './SearchBar.svelte';
</script>

<nav class="navbar">
	<a href="/">
		<h2>Movikepedia</h2>
	</a>
	<SearchBar />
	<!-- <ul>
		<li><a href="">Popular</a></li>
		<li><a href="">Top Rated</a></li>
		<li><a href="">Something</a></li>
	</ul> -->
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 6rem;

		padding: 1rem 2rem;
	}

	h2 {
		font-family: var(--accent-font);
		font-size: 3rem;
	}

	a {
		color: var(--white);
		text-decoration: none;
	}

	@media (max-width: 760px) {
		.navbar {
			flex-direction: column;
			gap: 0.3rem;
			margin-bottom: 1rem;
		}

		h2 {
			font-size: 4rem;
		}
	}
</style>
