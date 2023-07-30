<script>
	import { goto } from '$app/navigation';

	function submitSearch() {
		goto(`/search/${inputValue}`);
		inputValue = '';
	}

	let inputValue = '';
</script>

<form action="submit">
	<input required placeholder="Search for any movie" bind:value={inputValue} type="text" />
	<button on:click|preventDefault={submitSearch}>Search</button>
</form>

<style>
	button {
		background-color: var(--primary-color-l);
		border: none;
		color: var(--white);
		border-end-end-radius: 10px;
		position: relative;

		padding: 0.2rem 1rem;
		font-family: var(--accent-font);
	}

	button:hover {
		background-color: #4e6e7b;
		cursor: pointer;
	}

	input {
		outline: none;
		padding: 0.2rem 1rem;
	}

	form {
		display: flex;
	}

	@media (max-width: 600px) {
		input {
			width: 80%;
		}
	}
</style>
