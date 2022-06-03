<script lang="ts">
	import { session } from '$app/stores'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'

	let haveNotification: Boolean = false
	SocketStore.on('posts:notification', (data) => {
		haveNotification = true
		console.log(data.username + ' ha subido una publicacion')
	})

	function refreshHome() {
		haveNotification = false
		Posts.getPosts($session.id)
	}
</script>

{#if haveNotification}
	<a href="/" class="control-icon more has-items pulse" on:click={refreshHome}>
		<i class="fa fa-home" style="font-size: 150%; color: white;" />
	</a>
{/if}
