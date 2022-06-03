<script>
	import { HOST_DEFAULT } from '$lib/hooks/http'

	export let src
</script>

<div class="author-thumb">
	<img
		loading="lazy"
		src={src ? `${HOST_DEFAULT}/files/${src}` : '/img/voyer/profile.png'}
		style="width: 36px; height: 36px;"
		alt="author"
	/>
</div>
