<script>
	import SearchResult from '../../../components/SiteComponents/SearchResult.svelte';
	export let data;
	export let searchResults = data.searchResult.results;
</script>

<SearchResult searchResult={searchResults} />
