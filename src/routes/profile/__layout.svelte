<script>
	import { session } from '$app/stores'
	import CoverPhoto from '$lib/components/CoverPhoto.svelte'
	import UserPhoto from '$lib/components/UserPhoto.svelte'
</script>

<div class="container">
	<div class="cover-photo">
		<figure>
			<img src="/img/voyer/profile.png" alt="img" />
		</figure>
	</div>

	<div class="links">
		<ul>
			<li>
				<a href="/profile/friends">Suscripciones</a>
			</li>

			<li>
				<a href="/profile/followers">Suscriptores</a>
			</li>
			<li>
				<a href="/profile/gallery">Galería</a>
			</li>

			<li>
				<a href="/profile/rate">Tarifa</a>
			</li>
		</ul>
		<UserPhoto user={$session} />
	</div>
</div>

<br />

<slot />

<style lang="scss">
	.cover-photo {
		overflow: hidden;
		border-radius: 10px 10px 0 0;
		width: 100%;
		height: 100%;
		position: relative;
		background-color: var(--third-color);

		&::before {
			content: '';
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.3);
		}
		// border: 1px solid #e6e6e6;

		figure {
			img {
				object-fit: cover;
				width: 100%;
				height: 20rem;
			}
		}
	}

	.links {
		background-color: var(--third-color);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 5rem;
		padding: 0 2rem;
		ul {
			display: flex;
			gap: 1rem;
			a {
				color: var(--primary-color);
				font-size: 15px;
				font-weight: 500;
				text-transform: uppercase;
				&:hover {
					color: var(--red-color);
				}
			}
		}
	}
</style>
