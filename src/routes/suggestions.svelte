<script>
	import { session } from '$app/stores'
	import LinkToUser from '$lib/components/Links/LinkToUser.svelte'
	import { HOST_DEFAULT, http } from '$lib/hooks/useFetch'

	$: suggestions = http.Get({
		url: `/api/users/suggestions/`,
	})
</script>

<svelte:head>
	<title>VoyerClub | Sugerencias</title>
</svelte:head>

<div class="container">
	<div class="row">
		<div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
			<div class="ui-block responsive-flex">
				<div class="ui-block-title">
					<div class="h6 title">Sugerencias de Perfiles del Momento</div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container">
	<div class="row">
		{#await suggestions}
			<h1>Loading...</h1>
		{:then suggestions}
			{#each suggestions as item}
				<div class="col col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
					<div class="ui-block">
						<div class="friend-item">
							<div class="friend-header-thumb">
								<img
									src={item.coverPhoto || '/img/voyer/encabezado.jpg'}
									style="width: 318px; height: 122px"
									alt=""
								/>
							</div>
							<div class="friend-item-content">
								<div class="friend-avatar">
									<div class="author-thumb">
										<img
											src={item.profilePhoto
												? `${HOST_DEFAULT}/files/${item.profilePhoto}`
												: '/img/voyer/profile.png'}
											style="width: 92px; height: 92px; object-fit: cover;"
											alt="avatar"
										/>
									</div>
									<div class="author-content">
										<a href="/users/id" id={item.id}>
											{item.firstName}
											{item.lastName}
										</a>

										<!-- <a href="#/" class="h5 author-name">ALEFRANKIE</a> -->
										<div class="country">@{item.username}</div>
									</div>
								</div>
								<div
									class="swiper-container swiper-swiper-unique-id-3 initialized"
									data-slide="fade"
									id="swiper-unique-id-3"
								>
									<div class="swiper-wrapper">
										<div class="swiper-slide">
											<div class="friend-count" data-swiper-parallax="-500">
												<a href="#/" class="friend-count-item">
													<div class="h6">1</div>
													<div class="title">Seguidores</div>
												</a>

												<a href="#/" class="friend-count-item">
													<div class="h6">3</div>
													<div class="title">Seguidos</div>
												</a>

												<a href="#/" class="friend-count-item">
													<div class="h6">3</div>
													<div class="title">Amigos</div>
												</a>
											</div>
											<div
												class="control-block-button"
												style="display: flex; justify-content: center;"
											>
												<button class="btn btn-control bg-red">
													<span>
														<i class="fas fa-comments" />
													</span>
												</button>

												<button class="btn btn-control bg-red">
													<span>
														<i class="fas fa-user-plus" />
													</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			{:else}
				No hay sugerencias
			{/each}
		{:catch error}
			<h1>Ha ocurrido un error {error}</h1>
		{/await}
	</div>
</div>
