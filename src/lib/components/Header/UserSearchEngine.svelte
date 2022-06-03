<script lang="ts">
  import { session } from '$app/stores'
  import Avatar from '$lib/components/Avatar.svelte'
  import { http } from '$lib/hooks/http'
  import LinkToUser from '../Links/LinkToUser.svelte'

  let response: any = []
  let key = ''

  $: if (key.length > 0) {
    response = http
      .Get({
        url: `/users/filter/${key}`
      })
      .then((data) => data.filter((e) => e.id !== $session.id))
  } else {
    response = []
  }
</script>

<form class="search-bar w-search notification-list friend-requests">
  <div class="form-group with-button">
    <input
      class="form-control"
      placeholder="Busca aquí personas o páginas..."
      type="text"
      bind:value={key}
    />

    <div
      class="selectize-dropdown multi form-control"
      style="display: block; width: 300px; top: 70px; left: 0px; visibility: visible;"
    >
      {#await response}
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
  </div>
</form>
