<script lang="ts">
  import EventDetails from './components/EventDetails.svelte';
  import eventsJson from './data/events.json';
  import type { Event } from './models';
  import Map from './components/Map.svelte';
  import { onMount } from 'svelte';

  let showPanel: boolean = false;
  let events: Event[] = [];

  onMount(() => {
    events = eventsJson.events;
  });

  const openEventDetailsPanel = (event: Event): void => {
    showPanel = true;
  };
  const closeEventDetailsPanel = (): void => {
    showPanel = false;
  };
</script>

<div class="app-container">
  <div class="map-container">
    <Map {events} />
  </div>

  {#if showPanel}
    <div class="panel-container">
      <EventDetails on:close={closeEventDetailsPanel} />
    </div>
  {/if}
</div>

<style>
  .app-container {
    display: flex;
    height: 100%;
  }
  .map-container {
    flex: 1;
  }
  .panel-container {
    flex: 1;
  }
</style>
