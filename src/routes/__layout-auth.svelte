<script>
	import { session } from '$app/stores'
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/login/login.css" />
	<link rel="stylesheet" href="/css/generics.css" />
	<link rel="stylesheet" href="/css/voyer/fontawesome-all.min.css" />
</svelte:head>

{#if !$session.id}
	<slot />
{/if}
