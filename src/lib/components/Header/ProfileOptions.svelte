<script>
  import { session } from '$app/stores';
  import Avatar from '$lib/components/Avatar.svelte';

  async function signOut() {
    try {
      session.set(null)
      localStorage.removeItem('token')
      window.location.replace('/auth/sign-in')
    } catch ({ message }) {
      // Alert = { message, type: 'danger' }
      alert(message)
    }
  }
</script>

<div class="author-page author vcard inline-items more">
  <div class="author-thumb">
    <Avatar src={$session.profilePhoto} />
    <span class="icon-status" class:online={$session.online} />
    <div class="more-dropdown more-with-triangle">
      <div class="mCustomScrollbar" data-mcs-theme="dark">
        <div class="ui-block-title ui-block-title-small">
          <h6 class="title">Cuenta Personal</h6>
        </div>

        <ul class="account-settings">
          <li>
            <a  href="/profile">
              <i class="fa fa-user" style="padding-right: 5%" />

              <span>Mi Perfil</span>
            </a>
          </li>

          <li>
            <a href="#/" on:click|preventDefault={signOut}>
              <i class="fa fa-sign-out-alt" style="padding-right: 5%" />

              <span>Cerrar Sesión</span>
            </a>
          </li>
        </ul>

        <div class="ui-block-title ui-block-title-small">
          <h6 class="title">Acerca de VoyerClub</h6>
        </div>

        <ul>
          <li>
            <a href="/terminos-uso">
              <span>Términos y Condiciones</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <a href="#/" class="author-name fn">
    <div class="author-title">
      {$session.firstName}
      {$session.lastName}
      <svg class="olymp-dropdown-arrow-icon">
        <use xlink:href="#olymp-dropdown-arrow-icon" />
      </svg>
    </div>

    <span class="author-subtitle" style="text-transform: uppercase;"
      >{$session.username}</span
    >
  </a>
</div>
