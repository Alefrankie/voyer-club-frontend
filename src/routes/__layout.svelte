<script lang="ts" context="module">
	import { browser } from '$app/env'
	import Header from '$lib/components/Header/Header.svelte'
	import HeaderResponsive from '$lib/components/HeaderResponsive/HeaderResponsive.svelte'
	import OnlineBar from '$lib/components/OnlineBar/OnlineBar.svelte'

	/** @type {import('./[slug]').Load} */
	export const load = async ({ session }) => {
		if (!session?.authenticated) {
			return {
				status: 302,
				redirect: '/auth/sign-in',
			}
		}
		// console.count()
		if (browser) {
			// Customers
		}
		return {}
	}
</script>

<script lang="ts">
	// import { SocketStore } from '$lib/stores/Socket'

	// SocketStore.on('notify-new-message', (notification) => {
	// 	if ($session.username === notification.to) {
	// 		alert(notification.from + ' te ha enviado un nuevo mensaje')
	// 		Chats.getChats($session.id)
	// 	}
	// })

	// SocketStore.emit('connection', $session, (data) => {
	// 	console.log(data)
	// })
</script>

<svelte:head>
	<link rel="stylesheet" href="/css/voyer/theme-font.min.css" />
	<link rel="stylesheet" href="/css/voyer/bootstrap.css" />
	<link rel="stylesheet" href="/css/voyer/fontawesome-all.min.css" />
	<link rel="stylesheet" href="/css/voyer/main.css" />
	<link rel="stylesheet" href="/css/generics.css" />
</svelte:head>

<Header />
<slot />
<!-- <OnlineBar /> -->
<a
	class="back-to-top"
	href="/#"
	style="display: flex; justify-content: center; align-items: center;"
>
	<i class="fas fa-arrow-up" style="color: var(--primary-color); font-size: 16px" />
</a>

<div>
	<script src="/js/voyer/polyfills.js"></script>
	<script src="/js/voyer/webp-hero.js"></script>
	<script src="/js/voyer/bootstrap.js"></script>
	<script src="/js/voyer/svg-loader.js"></script>
</div>

<style>
	:root {
		--primary-color: #e4e6eb;
		--secondary-color: #ffffff1a;
		--third-color: #242526;
		--red-color: #be3333;
		--text-primary-color: #b0b3b8;
		--border-color: #3e4042;
		--body-color: #18191a;
		--border-radius-block: 10px;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--body-color);
	}
</style>
