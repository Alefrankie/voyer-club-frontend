<script lang="ts">
	import { session } from '$app/stores';
	import { Chats, notReads } from '$lib/stores/Chats';
	import Avatar from '$lib/components/Avatar.svelte';
	import LinkToUser from '../Links/LinkToUser.svelte';

	Chats.getChats($session.id);

	function markAllRead() {
		Chats.markAllRead($session.id);
	}
</script>

<div class="control-icon more has-items" class:pulse={$notReads > 0 ? true : false}>
	<i class="fa fa-comments" style="font-size: 150%; color: white;" />
	<div
		class="label-avatar bg-purple"
		title={$notReads > 0 ? 'Tienes nuevos mensajes' : 'No tienes nuevos mensajes'}
	>
		{$notReads}
	</div>

	<div class="more-dropdown more-with-triangle triangle-top-center">
		<div class="ui-block-title ui-block-title-small">
			<h6 class="title">Chat / Mensajes</h6>
			<button on:click={markAllRead}>Marcar todo como leído</button>
		</div>

		{#each $Chats as item}
			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<ul class="notification-list chat-message">
					<li>
						<Avatar src={item.from.profilePhoto} />
						<div class="notification-event">
							<LinkToUser id={item.from.id} class="h6 notification-friend">
								{item.from.firstName}
								{item.from.lastName}
							</LinkToUser>

							<span class:not-read={item.read === false}>
								{item.text}
							</span>
						</div>
						<span class="notification-icon" style="cursor: pointer;">
							<i class="fa fa-comments" style="font-size: 150%; color: #ccc;" />
						</span>

						<div class="more">
							<svg class="olymp-three-dots-icon">
								<use xlink:href="#olymp-three-dots-icon" />
							</svg>
						</div>
					</li>
				</ul>
			</div>
		{:else}
			<ul class="notification-list chat-message">
				<li>No hay mensajes</li>
			</ul>
		{/each}

		<a href="/messages" class="view-all bg-red">Ver Todos los Mensajes</a>
	</div>
</div>

<style>
	.not-read {
		font-weight: 800;
	}
</style>
