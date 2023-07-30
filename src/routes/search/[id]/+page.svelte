<script>
	import SearchResult from '../../../components/SiteComponents/SearchResult.svelte';
	export let data;
</script>

<SearchResult searchResult={data.searchResult.results} />
