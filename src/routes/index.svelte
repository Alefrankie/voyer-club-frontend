<script>
  import { session } from '$app/stores'
  import Thinking from '$lib/components/Timeline/Thinking.svelte'
  import Timeline from '$lib/components/Timeline/Timeline.svelte'
 
  import Points from '$lib/components/Widgets/Points.svelte'
  import Suggestions from '$lib/components/Widgets/Suggestions.svelte'
</script>

<div class="container">
  <div class="row">
    <Thinking />
    <Timeline userId={$session.id} />
    <aside
      class="col col-xl-4 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12"
    >
      <Points />

      <Suggestions />
    </aside>
  </div>

</div>

<a class="back-to-top" href="#/">
  <svg class="back-icon" width="14" height="18">
    <use xlink:href="#olymp-back-to-top" />
  </svg>
</a>
