<script>
	import Messages from '$lib/components/Header/Messages.svelte'
	import Home from './Home.svelte'
	import Notifications from './Notifications.svelte'
	import ProfileOptions from './ProfileOptions.svelte'
	import UserSearchEngine from './UserSearchEngine.svelte'
	import { page } from '$app/stores'
</script>

<header>
	<UserSearchEngine />
	{#if $page.url.pathname !== '/'}
		<a href="/">
			<i class="fas fa-home" />
		</a>
	{/if}

	<div class="menu">
		<!-- <Messages /> -->

		<ProfileOptions />

		<Notifications />

		<Messages />

		<Home />
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 1;

		height: 5rem;
		background-color: var(--third-color);
		display: flex;
		margin-bottom: 3.5rem;
		z-index: 1;
	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		color: var(--primary-color);
	}

	.menu {
		display: flex;
		padding-right: 50px;
		align-items: center;
		flex-direction: row-reverse;
		flex: 1;
		gap: 1rem;
	}
</style>
