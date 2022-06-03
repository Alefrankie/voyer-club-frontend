<script>
  import { session } from '$app/stores'
  import CoverPhoto from '$lib/components/CoverPhoto.svelte'
  import UserPhoto from '$lib/components/UserPhoto.svelte'
</script>

<div class="container">
  <div class="row">
    <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="ui-block">
        <div class="top-header">
          <CoverPhoto coverPhoto={$session.coverPhoto} />

          <div class="profile-section">
            <div class="row">
              <div
                class="col col-lg-5 col-md-5 col-sm-12 col-12"
                style="padding: 10px 0px;"
              >
                <ul class="profile-menu">
                  <li>
                    <a href="/profile" class="active">Mi Perfil</a>
                  </li>

                  <li>
                    <a href="/profile/friends" class="">Suscripciones</a>
                  </li>

                  <li>
                    <a href="/profile/followers" class="">Suscriptores</a>
                  </li>
                </ul>
              </div>
              <div
                class="col col-lg-5 ms-auto col-md-5 col-sm-12 col-12"
                style="padding: 10px 0px;"
              >
                <ul class="profile-menu">
                  <li>
                    <a href="/profile/gallery" class="">Galería</a>
                  </li>

                  <li>
                    <a href="/profile/rate" class="">Tarifa</a>
                  </li>

                  <li>
                    <a href="/profile/settings">Ajustes</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <UserPhoto user={$session} />
        </div>
      </div>
    </div>
  </div>
</div>

<slot />
