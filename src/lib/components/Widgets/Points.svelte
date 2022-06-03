<script>
  import { session } from '$app/stores'

  import Avatar from '$lib/components/Avatar.svelte';
</script>

<div class="ui-block">
  <div class="widget w-action">
    <div class="content">
      <Avatar src={$session.profilePhoto} />
      <span>{$session.username}</span>
      <a href="#/" class="h5 title">Cantidad de Puntos</a>
      <p>¡ACUMULA PUNTOS POR CADA SUSCRIPCIÓN!</p>
      <a href="#/" class="btn btn-success btn-md">Detalles</a>
    </div>
  </div>
</div>
