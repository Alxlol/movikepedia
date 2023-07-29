<script>
	import SearchBar from './SearchBar.svelte';
</script>

<nav class="navbar">
	<a href="/">
		<h2>Movikepedia</h2>
	</a>
	<SearchBar />
	<ul>
		<li><a href="">Popular</a></li>
		<li><a href="">Top Rated</a></li>
		<li><a href="">Something</a></li>
	</ul>
</nav>

<style>
	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 6rem;

		padding: 1rem 2rem;
	}

	h2 {
		font-family: var(--accent-font);
		font-size: 3rem;
	}

	ul {
		display: flex;
		gap: 1rem;
		list-style: none;
	}

	a {
		color: var(--white);
		text-decoration: none;
	}
</style>
