<script lang="ts">
	import Content from '$lib/components/Timeline/Post/Content.svelte'
	import Details from '$lib/components/Timeline/Post/Details.svelte'
	import Header from '$lib/components/Timeline/Post/Header.svelte'
	import FormComment from '$lib/components/Timeline/Post/FormComment.svelte'
	import Comments from './Comments.svelte'

	export let post
	let inputDisabled: boolean = true
</script>

<div class="ui-block">
	<article class="hentry post video">
		<Header {post} bind:inputDisabled />

		<Content {post} bind:inputDisabled />

		<Details {post} />
	</article>

	<Comments {post} />
	<FormComment {post} />
</div>
