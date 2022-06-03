<script lang="ts">
	import { session } from '$app/stores'
	import { Chats, notReads } from '$lib/stores/Chats'
	import Avatar from '$lib/components/Avatar.svelte'
	import LinkToUser from '../Links/LinkToUser.svelte'
	import { useFormatDate } from '$lib/hooks/useFormatDate'
	import { http } from '$lib/hooks/http'

	Chats.getChats($session.id)

	function markAllRead() {
		Chats.markAllRead($session.id)
	}

	let UsersPromise: any = []
	let key = ''

	$: if (key.length > 0) {
		UsersPromise = http
			.Get({
				url: `/users/filter/${key}`
			})
			.then((data) => data.filter((e) => e.id !== $session.id))
	} else {
		UsersPromise = []
	}
</script>

<header class="header header-responsive" id="site-header-responsive">
	<div class="header-content-wrapper">
		<ul class="nav nav-tabs mobile-notification-tabs" id="mobile-notification-tabs" role="tablist">
			<li class="nav-item" role="presentation">
				<a
					class="nav-link"
					id="chat-tab"
					data-bs-toggle="tab"
					href="#chat"
					role="tab"
					aria-controls="chat"
					aria-selected="false"
				>
					<div class="control-icon has-items">
						<i class="fa fa-comments" style="font-size: 150%; color: white;" />
						<div class="label-avatar bg-purple">{$notReads}</div>
					</div>
				</a>
			</li>

			<li class="nav-item" role="presentation">
				<a
					class="nav-link"
					id="notification-tab"
					data-bs-toggle="tab"
					href="#notification"
					role="tab"
					aria-controls="notification"
					aria-selected="false"
				>
					<div class="control-icon has-items">
						<i class="fa fa-bell" style="font-size: 150%; color: white;" />
						<div class="label-avatar bg-green">8</div>
					</div>
				</a>
			</li>

			<li class="nav-item" role="presentation">
				<a
					class="nav-link"
					id="search-tab"
					data-bs-toggle="tab"
					href="#search"
					role="tab"
					aria-controls="search"
					aria-selected="false"
				>
					<svg class="olymp-magnifying-glass-icon">
						<use xlink:href="#olymp-magnifying-glass-icon" />
					</svg>
					<svg class="olymp-close-icon">
						<use xlink:href="#olymp-close-icon" />
					</svg>
				</a>
			</li>
		</ul>
	</div>

	<!-- Tab panes -->
	<div class="tab-content tab-content-responsive">
		<div class="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="chat-tab">
			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">Chat / Mensajes</h6>
					<button on:click={markAllRead}>Marcar todo como leído</button>
				</div>

				<ul class="notification-list chat-message">
					{#each $Chats as item}
						<li class="message-unread" title={useFormatDate(item.createdAt)}>
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
							<!-- <span class="notification-icon">
								<svg class="olymp-chat---messages-icon"
									><use xlink:href="#olymp-chat---messages-icon" /></svg
								>
							</span> -->
							<!-- <div class="more">
								<svg class="olymp-three-dots-icon">
									<use xlink:href="#olymp-three-dots-icon" />
								</svg>
							</div> -->
						</li>
					{:else}
						<li>No hay mensajes</li>
					{/each}
				</ul>

				<a href="/messages" class="view-all bg-purple">View All Messages</a>
			</div>
		</div>

		<div class="tab-pane fade" id="notification" role="tabpanel" aria-labelledby="notification-tab">
			<div class="mCustomScrollbar" data-mcs-theme="dark">
				<div class="ui-block-title ui-block-title-small">
					<h6 class="title">Notifications</h6>
					<a href="#/">Mark all as read</a>
				</div>

				<ul class="notification-list">
					<li>
						<div class="author-thumb">
							<img
								loading="lazy"
								src="/img/voyer/profile.png"
								width="34"
								height="34"
								alt="author"
							/>
						</div>
						<div class="notification-event">
							<div>
								<a href="#/" class="h6 notification-friend">Mathilda Brinker</a>
								commented on your new
								<a href="#/" class="notification-link">profile status</a>.
							</div>
							<span class="notification-date"
								><time class="entry-date updated" datetime="2004-07-24T18:18">4 hours ago</time
								></span
							>
						</div>
						<span class="notification-icon">
							<svg class="olymp-comments-post-icon"
								><use xlink:href="#olymp-comments-post-icon" /></svg
							>
						</span>

						<div class="more">
							<svg class="olymp-three-dots-icon">
								<use xlink:href="#olymp-three-dots-icon" />
							</svg>
							<svg class="olymp-little-delete">
								<use xlink:href="#olymp-little-delete" />
							</svg>
						</div>
					</li>

					<li class="un-read">
						<div class="author-thumb">
							<img
								loading="lazy"
								src="/img/voyer/profile.png"
								alt="author"
								width="34"
								height="34"
							/>
						</div>
						<div class="notification-event">
							<div>
								You and
								<a href="#/" class="h6 notification-friend">Nicholas Grissom</a>
								just became friends. Write on
								<a href="#/" class="notification-link">his wall</a>.
							</div>
							<span class="notification-date"
								><time class="entry-date updated" datetime="2004-07-24T18:18">9 hours ago</time
								></span
							>
						</div>
						<span class="notification-icon">
							<svg class="olymp-happy-face-icon"><use xlink:href="#olymp-happy-face-icon" /></svg>
						</span>

						<div class="more">
							<svg class="olymp-three-dots-icon">
								<use xlink:href="#olymp-three-dots-icon" />
							</svg>
							<svg class="olymp-little-delete">
								<use xlink:href="#olymp-little-delete" />
							</svg>
						</div>
					</li>

					<li class="with-comment-photo-wrap">
						<div class="with-comment-photo">
							<div class="author-thumb">
								<img
									loading="lazy"
									src="/img/voyer/profile.png"
									width="34"
									height="34"
									alt="author"
								/>
							</div>
							<div class="notification-event">
								<div>
									<a href="#/" class="h6 notification-friend">Sarah Hetfield</a>
									commented on your
									<a href="#/" class="notification-link">photo</a>.
								</div>
								<span class="notification-date"
									><time class="entry-date updated" datetime="2004-07-24T18:18"
										>Yesterday at 5:32am</time
									></span
								>
							</div>
							<span class="notification-icon">
								<svg class="olymp-comments-post-icon"
									><use xlink:href="#olymp-comments-post-icon" /></svg
								>
							</span>
						</div>
						<div class="comment-photo">
							<img
								loading="lazy"
								src="/img/voyer/profile.png"
								alt="comment"
								width="40"
								height="40"
							/>
							<span>“She looks incredible in that outfit! We should see each...”</span>
						</div>
						<div class="more">
							<svg class="olymp-three-dots-icon">
								<use xlink:href="#olymp-three-dots-icon" />
							</svg>
							<svg class="olymp-little-delete">
								<use xlink:href="#olymp-little-delete" />
							</svg>
						</div>
					</li>

					<li>
						<div class="author-thumb">
							<img
								loading="lazy"
								src="/img/voyer/profile.png"
								alt="author"
								width="34"
								height="34"
							/>
						</div>
						<div class="notification-event">
							<div>
								<a href="#/" class="h6 notification-friend">Green Goo Rock</a>
								invited you to attend to his event Goo in
								<a href="#/" class="notification-link">Gotham Bar</a>.
							</div>
							<span class="notification-date"
								><time class="entry-date updated" datetime="2004-07-24T18:18"
									>March 5th at 6:43pm</time
								></span
							>
						</div>
						<span class="notification-icon">
							<svg class="olymp-happy-face-icon"><use xlink:href="#olymp-happy-face-icon" /></svg>
						</span>

						<div class="more">
							<svg class="olymp-three-dots-icon">
								<use xlink:href="#olymp-three-dots-icon" />
							</svg>
							<svg class="olymp-little-delete">
								<use xlink:href="#olymp-little-delete" />
							</svg>
						</div>
					</li>

					<li>
						<div class="author-thumb">
							<img
								loading="lazy"
								src="/img/voyer/profile.png"
								alt="author"
								width="34"
								height="34"
							/>
						</div>
						<div class="notification-event">
							<div>
								<a href="#/" class="h6 notification-friend">James Summers</a>
								commented on your new
								<a href="#/" class="notification-link">profile status</a>.
							</div>
							<span class="notification-date"
								><time class="entry-date updated" datetime="2004-07-24T18:18"
									>March 2nd at 8:29pm</time
								></span
							>
						</div>
						<span class="notification-icon">
							<svg class="olymp-heart-icon"><use xlink:href="#olymp-heart-icon" /></svg>
						</span>

						<div class="more">
							<svg class="olymp-three-dots-icon">
								<use xlink:href="#olymp-three-dots-icon" />
							</svg>
							<svg class="olymp-little-delete">
								<use xlink:href="#olymp-little-delete" />
							</svg>
						</div>
					</li>
				</ul>

				<a href="/notifications" class="view-all bg-primary">Ver todas las Notificaciones</a>
			</div>
		</div>

		<div class="tab-pane fade" id="search" role="tabpanel" aria-labelledby="search-tab">
			<form class="search-bar w-search notification-list friend-requests">
				<div class="form-group with-button">
					<input
						class="form-control js-user-search"
						placeholder="Busca aquí personas o páginas..."
						bind:value={key}
					/>
				</div>
				<div
					class="selectize-dropdown multi form-control"
					style="display: block; width: 100%; top: 70px; left: 0px; visibility: visible;"
				>
					{#await UsersPromise}
						<span class="selectize-dropdown-content">
							<div class="inline-items">
								<img class="img-bottom" src="/img/loading.gif" alt="" />
							</div>
						</span>
					{:then users}
						{#each users as { id, firstName, lastName, username, profilePhoto }}
							<LinkToUser {id} class="selectize-dropdown-content">
								<div class="inline-items">
									<div class="author-thumb">
										<Avatar src={profilePhoto} />
									</div>
									<div class="notification-event">
										<span class="h6 notification-friend">
											{firstName}
											{lastName}
										</span>
										<span class="chat-message-item">@{username}</span>
										<br />
									</div>
								</div>
							</LinkToUser>
						{/each}
					{/await}
				</div>
			</form>
		</div>
	</div>
	<!-- ... end  Tab panes -->
</header>

<!-- ... end Responsive Header-BP -->
<div class="header-spacer" />

<style>
	.not-read {
		font-weight: 800;
	}
</style>
