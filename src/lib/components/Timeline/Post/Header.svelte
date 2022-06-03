<script>
	import Avatar from '$lib/components/Avatar.svelte'
	import { useFormatDate } from '$lib/hooks/useFormatDate'
	import Options from './Options.svelte'

	export let post
	export let inputDisabled
</script>

<div class="post__author author vcard inline-items">
	<Avatar src={post.user.profilePhoto} />

	<div class="author-date">
		<a class="h6 post__author-name fn" href="/user/username">
			{post.user.firstName}
			{post.user.lastName}
		</a>

		<div class="post__date">
			<time class="published" datetime="2004-07-24T18:18">
				{useFormatDate(post.createdAt)}
			</time>
		</div>
	</div>

	<Options {post} bind:inputDisabled />
</div>
