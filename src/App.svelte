<script lang="ts">
  import { Map } from '@beyonk/svelte-mapbox';
  import EventDetails from './EventDetails.svelte';
  import eventsJson from './data/events.json';
  import type { Events } from './models';

  let mapComponent: Map;
  let showPanel: boolean = false;
  let events: Events;

  const onMount = (): void => {
    events = eventsJson;
  };

  function onReady(): void {
    mapComponent.flyTo({ center: [5, 52] });
  }

  const openEventDetailsPanel = (event: Event): void => {
    showPanel = true;
  };
  const closeEventDetailsPanel = (): void => {
    showPanel = false;
  };
</script>

<div class="app-container">
  <div style="flex: 1;">
    <Map
      accessToken="pk.eyJ1Ijoic2F0ZWxsaWdlbmNlLXN0YWdpbmciLCJhIjoiY2w2cWtxaGNtMGJlYjNkdGNsMXI4MnpiYSJ9.LEONl2580jXyWbjJE7iMaQ"
      style="mapbox://styles/mapbox/light-v11"
      zoom="6"
      version="v2.12.0"
      bind:this={mapComponent}
      on:ready={onReady}
    ></Map>
  </div>

  {#if showPanel}
    <div style="flex: 1">
      <EventDetails on:close={closeEventDetailsPanel} />
    </div>
  {/if}
</div>

<style>
  .app-container {
    display: flex;
    height: 100%;
  }
</style>
