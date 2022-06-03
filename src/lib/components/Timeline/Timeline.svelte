<script lang="ts">
	import { session } from '$app/stores'

	import Post from '$lib/components/Timeline/Post/Post.svelte'
	import { Posts } from '$lib/stores/Posts'
	import { afterUpdate, beforeUpdate } from 'svelte'

	export let userId: string

	let div
	let autoscroll

	function refreshPosts() {
		Posts.getPosts($session.id)
	}

	beforeUpdate(() => {
		autoscroll = div && div.offsetHeight + div.scrollTop > div.scrollHeight - 20
	})

	afterUpdate(() => {
		if (autoscroll) div.scrollTo(0, div.scrollHeight)
	})
</script>

{#await Posts.getPosts(userId)}
	<h1>Waiting...</h1>
{:then}
	<main class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
		<div id="newsfeed-items-grid" bind:this={div}>
			{#each $Posts as post}
				<Post {post} />
			{:else}
				<article class="hentry post video">
					<div style="width: 100%; display: flex; justify-content: center;">
						<p class="h1 text-center">No hay publicaciones a la vista</p>
					</div>
				</article>
			{/each}
		</div>
		<span class="btn btn-control btn-more" on:click={refreshPosts}>
			<svg class="olymp-three-dots-icon"><use xlink:href="#olymp-three-dots-icon" /> </svg>
		</span>
	</main>
{/await}

<!-- <main
  class="col col-xl-8 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12"
>
  <div id="newsfeed-items-grid">
    {#each $Posts as post}
      <Post {post} />
    {:else}
      <article class="hentry post video">
        <div style="width: 100%; display: flex; justify-content: center;">
          <p class="h1 text-center">No hay publicaciones a la vista</p>
        </div>
      </article>
    {/each}
  </div>
  <a
    id="load-more-button"
    href="#/"
    class="btn btn-control btn-more"
    data-load-link="items-to-load.html"
    data-container="newsfeed-items-grid"
  >
    <svg class="olymp-three-dots-icon"
      ><use xlink:href="#olymp-three-dots-icon" />
    </svg>
  </a>
</main> -->
