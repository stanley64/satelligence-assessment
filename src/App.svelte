<script lang="ts">
  import EventDetails from './components/EventDetails.svelte';
  import eventsJson from './data/events.json';
  import type { Event } from './models';
  import Map from './components/Map.svelte';
  import { onMount } from 'svelte';

  let events: Event[] = [];

  onMount(() => {
    events = eventsJson.events;
  });
</script>

<div class="app-container">
  <div class="map-container">
    <Map events={[events[3]]} />
  </div>

  <div class="panel-container">
    <EventDetails event={events[3]} />
  </div>
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
