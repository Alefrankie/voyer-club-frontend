<script>
	import { session } from '$app/stores'
	import Header from '$lib/components/Header/Header.svelte'
	import HeaderResponsive from '$lib/components/HeaderResponsive/HeaderResponsive.svelte'
	import OnlineBar from '$lib/components/OnlineBar/OnlineBar.svelte'
	import { http } from '$lib/hooks/http'
	import { Chats } from '$lib/stores/Chats'
	import { SocketStore } from '$lib/stores/Socket'

	SocketStore.on('notify-new-message', (notification) => {
		if ($session.username === notification.to) {
			alert(notification.from + ' te ha enviado un nuevo mensaje')
			Chats.getChats($session.id)
		}
	})

	async function whoAmI() {
		const headers = new Headers({
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `bearer ${localStorage.getItem('token')}`
		})

		const { user } = await http.Get({
			url: '/users/who-am-i',
			headers
		})
		session.set(user)
	}

	SocketStore.emit('connection', $session, (data) => {
		console.log(data)
	})
</script>

<svelte:head>
	<!-- <title>VoyerClub - Dashboard</title> -->
	<link rel="stylesheet" href="/css/voyer/theme-font.min.css" />
	<link rel="stylesheet" href="/css/voyer/bootstrap.css" />
	<link rel="stylesheet" href="/css/voyer/fontawesome-all.min.css" />
	<link rel="stylesheet" href="/css/voyer/main.css" />
	<link rel="stylesheet" href="/css/generics.css" />
</svelte:head>

<div>
	<script src="/js/voyer/polyfills.js"></script>
	<script src="/js/voyer/webp-hero.js"></script>
</div>

{#await whoAmI()}
	<img class="img-bottom" src="/img/loading.gif" style="width: 20%;" alt="" />
{:then}
	<body class="page-has-right-panels">
		<Header />
		<HeaderResponsive />

		<slot />
		<OnlineBar />
	</body>
{:catch { message }}
	{#if (message = 'Unauthorized')}
		<div class="main-header" style="text-align: center;">
			<div class="content-bg-wrap bg-badges" style="height: 100vh; background-size: 100% 100%" />
			<div class="container">
				<div class="row">
					<div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
						<div class="main-header-content">
							<h1>VoyerClub</h1>
							<p>Disculpe las molestias, pero necesita iniciar sesión primero antes de continuar</p>
						</div>
						<br />
						<br />
						<br />
						<a href="/auth/sign-in" class="btn btn-primary btn-md-2"> Iniciar Sesión </a>
					</div>
				</div>
			</div>
		</div>
	{/if}
{/await}

<!-- <a class="back-to-top" href="/#">
	<svg class="back-icon" height="18" width="14">
		<use xlink:href="#olymp-back-to-top" />
	</svg>
</a> -->

<div>
	<script src="/js/voyer/bootstrap.js"></script>
	<script src="/js/voyer/svg-loader.js"></script>
</div>
