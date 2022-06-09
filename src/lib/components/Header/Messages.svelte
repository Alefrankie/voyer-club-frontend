<script lang="ts">
	import { session } from '$app/stores'
	import { Chats, notReads } from '$lib/stores/Chats'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '../Links/LinkToUser.svelte'

	// Chats.getChats($session._id)

	function markAllRead() {
		Chats.markAllRead($session._id)
	}
</script>

<main>
	<figure class="menu__icon">
		<i class="fa fa-comments" />
	</figure>

	<div class="menu__body">
		<header>
			<span class="menu__body__title">Chat / Mensajes</span>
			<button on:click={markAllRead}>Marcar todo como leído</button>
		</header>

		<div class="message__list">
			<ul>
				<li>
					<Avatar />
					<div>
						<a href="/users/:id">Alefrank Martínez</a>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque id aliquam voluptates
							explicabo error pariatur fugiat tempore. Esse, tempora corrupti, illo ullam quidem
							unde voluptatem eos quis consequatur doloremque dolor?
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</main>

<!-- <div class="control-icon more has-items" class:pulse={$notReads > 0 ? true : false}>
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
</div> -->
<style lang="scss">
	main {
		position: relative;

		&:hover {
			.menu__body {
				display: block;
			}
		}
	}
	.menu__icon {
		font-size: 18px;
		color: var(--primary-color);
	}

	.menu__body {
		// display: block;
		display: none;
		position: absolute;
		right: 0;
		border-radius: 10px;
		padding: 1rem;
		background-color: var(--third-color);

		width: 400px;
		header {
			display: flex;
			justify-content: space-between;
			.menu__body__title {
				color: var(--primary-color);
			}
			button {
				color: var(--primary-color);
				&:hover {
					color: var(--red-color);
				}
			}
		}

		.message__list {
			ul {
				list-style: none;
				width: 100%;
				padding-top: 1rem;
				font-size: 15px;
			}
			li {
				display: flex;
				padding: 0.5rem 0.5rem 0.5rem 0.5rem;
				div {
					display: flex;
					flex-direction: column;
					margin-left: 0.5rem;
					font-weight: 500;
					width: 90%;
					a {
						color: var(--primary-color);
						&:hover {
							color: var(--red-color);
						}
					}
					p {
						color: var(--text-color);
						white-space: nowrap;
						text-overflow: ellipsis;
						overflow: hidden;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
