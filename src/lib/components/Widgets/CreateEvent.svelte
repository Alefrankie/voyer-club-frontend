<main>
	<span class="icons"> 00 </span>
	<span class="description"> No hay eventos </span>
	<a href="/profile/streaming" class="btn-broadcast">
		<i class="fa fa-calendar" style="font-size: 90%; line-height: 0; margin-right: .5rem" />
		¡Organiza uno ahora!
	</a>
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		border-radius: 10px;
		padding: 2rem 1rem;
		gap: 1rem;

		background-color: var(--third-color);
	}

	.icons {
		font-size: 5rem;
		color: var(--primary-color);
		// border: 1px solid white;
		text-align: center;
		&:hover {
			color: var(--red-color);
		}
	}

	.description {
		color: var(--text-color);
		// border: 1px solid white;
		text-align: center;
	}

	.btn-broadcast {
		border: 1px solid var(--border-color);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--primary-color);
		width: 50%;
		border-radius: 10px;
		font-size: 16px;
		padding: 0.5rem 0;
	}
</style>
