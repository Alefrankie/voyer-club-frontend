<script>
	import { session } from '$app/stores'
	import { http } from '$lib/hooks/http'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'

	export let post
	export let inputDisabled

	async function deletePost() {
		await http.Delete({
			url: `/posts/${post.id}`
		})

		window.alert('Publicacion Eliminada')
		SocketStore.emit('posts:remove', post.id)
	}

	async function editPost() {
		inputDisabled = !inputDisabled
	}

	SocketStore.on('posts:removed', (postId) => {
		Posts.deletePost(postId)
	})
</script>

{#if post.user.id === $session.id}
	<div class="more">
		<svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /></svg>
		<ul class="more-dropdown">
			<li>
				<button
					style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
					on:click={() => editPost()}
				>
					Editar Publicación
				</button>
			</li>
			<li>
				<button
					style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
					on:click={() => deletePost()}
				>
					Eliminar Publicación
				</button>
			</li>
		</ul>
	</div>
{/if}
