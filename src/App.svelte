<script lang="ts">
  import { Map } from '@beyonk/svelte-mapbox';
  import EventDetails from './EventDetails.svelte';

  let mapComponent;
  let showPanel: boolean = false;

  function onReady() {
    mapComponent.flyTo({ center: [5, 52] });
  }

  const openEventDetailsPanel = (event: any) => {
    showPanel = true;
  };
</script>

<div class="app-container">
  <div style="flex: 1;">
    <Map
      accessToken="pk.eyJ1Ijoic2F0ZWxsaWdlbmNlLXN0YWdpbmciLCJhIjoiY2w2cWtxaGNtMGJlYjNkdGNsMXI4MnpiYSJ9.LEONl2580jXyWbjJE7iMaQ"
      style="mapbox://styles/mapbox/light-v11"
      class="map"
      zoom="6"
      version="v2.12.0"
      bind:this={mapComponent}
      on:ready={onReady}
    ></Map>
  </div>

  {#if showPanel}
    <div style="flex: 1">
      <EventDetails on:close={() => (showPanel = false)} />
    </div>
  {/if}
</div>

<style>
  .app-container {
    display: flex;
    height: 100%;
  }
  .map {
    flex: 1;
  }
</style>
