<script>
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto(`/search/${inputValue}`);
		inputValue = '';
	}

	let inputValue = '';
</script>

<form action="submit">
	<input bind:value={inputValue} type="text" />
	<button on:click|preventDefault={submitSearch}>Search</button>
</form>

<style>
	button {
		background-color: var(--primary-color-l);
		border: 2px solid var(--primary-color-l);
		color: var(--white);
		border-end-end-radius: 10px;
		position: relative;
		right: 4px;
		padding: 0.2rem 1rem;
		font-family: var(--accent-font);
	}

	input {
		outline: none;
		padding: 0.2rem 1rem;
	}

	form {
		display: flex;
	}
</style>
