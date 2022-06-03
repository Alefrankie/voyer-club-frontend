<script lang="ts">
	import { session } from '$app/stores'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '$lib/components/Links/LinkToUser.svelte'
	import { http } from '$lib/hooks/http'
	import { Posts } from '$lib/stores/Posts'
	import { SocketStore } from '$lib/stores/Socket'

	export let post

	async function deleteComment(commentId) {
		const postUpdated = await http.Delete({
			url: `/posts/${post.id}/comments/${commentId}`
		})

		SocketStore.emit('comments:remove', postUpdated)
	}

	SocketStore.on('comments:removed', (postUpdated) => {
		post = postUpdated
		Posts.updateComments(postUpdated)
	})
</script>

<ul class="comments-list">
	{#each post.comments.slice(0, 2) as { id, user, text }}
		<!-- {#each comments as comment, index} -->
		<li class="comment-item">
			<div class="post__author author vcard inline-items">
				<Avatar src={user.profilePhoto} />

				<div class="author-date">
					<LinkToUser id={user.id} class="h6 post__author-name fn">
						{user.username}
					</LinkToUser>
					Falta un TimeAgo
					<!-- <div class="post__date">
      <time class="published" datetime="2004-07-24T18:18">
        38 mins ago
      </time>
    </div> -->
				</div>

				<!-- Comments Options -->
				{#if $session.id === user.id}
					<div class="more">
						<svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /></svg>
						<ul class="more-dropdown">
							<li>
								<button
									style="padding: 7px 0;	font-size: 12px;	color: #515365; display: block;	font-weight: 700"
									on:click={() => deleteComment(id)}
								>
									Eliminar
								</button>
							</li>
						</ul>
					</div>
				{/if}
			</div>

			<p>
				{text}
			</p>
		</li>

		<!-- ... end Comments -->
	{:else}
		<p class="more-comments">Sin Comentarios</p>
	{/each}

	{#if post.comments.length > 2}
		<a href="#/" class="more-comments"> View more comments + </a>
	{/if}
</ul>
