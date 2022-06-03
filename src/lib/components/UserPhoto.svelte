<script>
	import { session } from '$app/stores';

	// import { session } from '$app/stores'
	import { HOST_DEFAULT } from '$lib/hooks/http';
	import LinkToUser from './Links/LinkToUser.svelte';
	let src = null;
	let srcUploaded = null;
	export let user = null;

	async function uploadSrc() {
		const [file] = src.files;

		srcUploaded.src = URL.createObjectURL(file);
		// alert("Multimedia subida correctamente");

		if (file) {
			const formData = new FormData();
			formData.append('profile-photo', file);
			formData.append('id', user.id);

			await fetch(`${HOST_DEFAULT}/api/user/change-profile-photo`, {
				body: formData,
				method: 'POST'
			});
		}
	}
</script>

<div class="top-header-author">
	<div class="author-thumb">
		<img
			src={user.profilePhoto
				? `${HOST_DEFAULT}/files/${user.profilePhoto}`
				: '/img/voyer/profile.png'}
			bind:this={srcUploaded}
			alt=""
		/>
		{#if user.id === $session.id}
			<label class="hover-layer">
				<input required name="file" bind:this={src} type="file" hidden on:change={uploadSrc} />
				<i class="fas fa-edit" />
			</label>
		{/if}
	</div>

	<div class="author-content">
		<LinkToUser
			id={user.id}
			class="h4 author-name"
			style="display: flex; align-items: center; justify-content: center;"
		>
			<span
				class="icon-status"
				class:online={user.online}
				style="width: 1rem; height: 1rem; margin-bottom: 5px;"
			/>
			{user.firstName}
			{user.lastName}
		</LinkToUser>

		<div class="country">@{user.username}</div>
	</div>
</div>

<style>
	img {
		object-fit: cover;
		object-position: top;
		width: 100%;
		height: 100%;
	}

	.hover-layer {
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		color: transparent;
		font-size: 16px;
	}

	.hover-layer:hover {
		background-color: rgb(0, 0, 0, 0.5);
		cursor: pointer;
		color: #fff;
		transition: 0.2s ease all;
	}
</style>
