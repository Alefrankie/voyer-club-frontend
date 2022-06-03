<script>
	import Messages from '$lib/components/Header/Messages.svelte'
	import Home from './Home.svelte'
	import Notifications from './Notifications.svelte'
	import ProfileOptions from './ProfileOptions.svelte'
	import UserSearchEngine from './UserSearchEngine.svelte'
</script>

<header class="header" id="site-header">
	<div class="page-title">
		<a href="/" class="h6">VoyerClub</a>
	</div>

	<div class="header-content-wrapper">
		<UserSearchEngine />

		<!-- <a href="/suggestions" class="link-find-friend">
      Sugerencias de Usuarios
    </a> -->

		<div class="control-block">
			<Home />

			<Messages />

			<Notifications />

			<ProfileOptions />
		</div>
	</div>
</header>

<!-- ... end Header-BP -->

<!-- Responsive Header-BP -->
