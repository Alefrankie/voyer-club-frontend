<script>
  import { session } from '$app/stores';
  import Thinking from '$lib/components/Timeline/Thinking.svelte';
  import Timeline from '$lib/components/Timeline/Timeline.svelte';
  import CreateEvent from '$lib/components/Widgets/CreateEvent.svelte';
  import CreateStreaming from '$lib/components/Widgets/CreateStreaming.svelte';
</script>

<div class="container">
  <div class="row">
    <Thinking />
    <Timeline userId={$session.id} />

    <div
      class="col col-xl-4 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
    >
      <CreateStreaming />
      <CreateEvent />
    </div>
  </div>
</div>
