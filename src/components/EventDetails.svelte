<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Event } from '../models';

  export let event: Event;

  const dispatch = createEventDispatcher();

  const onClose = (): void => {
    dispatch('close');
  };

  const getSortedDetectionDates = () => {
    return event.detections
      .map((detection) => detection.date)
      .filter((value, index, array) => array.indexOf(value) === index)
      .sort((a: string, b: string) => {
        const aDate = new Date(a);
        const bDate = new Date(b);
        if (aDate > bDate) {
          return -1;
        } else if (aDate < bDate) {
          return 1;
        }
        return 0;
      });
  };
</script>

{#if event != null}
  <div>
    <div class="header-container">
      <div class="title-container">
        <span>Event Reference: {event.references[0]}</span>
        <span>Deforestation Event</span>
      </div>
      <button type="button" on:click={onClose}>X</button>
    </div>
    <div class="share-container">
      <span>Lat: {event.geometry.coordinates[1]}, Long: {event.geometry.coordinates[0]}</span>
      <div class="share-buttons-container">
        <button type="button">SHP</button>
        <button type="button">Copy URL</button>
      </div>
    </div>
    <table>
      <tr>
        <td>Last Detected:</td>
        <td>1</td>
      </tr>
      <tr>
        <td>Region:</td>
        <td>{event.region}</td>
      </tr>
      <tr>
        <td>Total Size:</td>
        <td>3</td>
      </tr>
      <tr>
        <td>Forest Type:</td>
        <td>4</td>
      </tr>
      <tr>
        <td>Noncompliance:</td>
        <td>5</td>
      </tr>
    </table>
    <div class="detection-dates-container">
      {#each getSortedDetectionDates() as detectionDate}
        <span>{detectionDate}</span>
      {/each}
    </div>
  </div>
{/if}

<style>
  .header-container {
    display: flex;
    justify-content: space-between;
  }

  .title-container {
    display: flex;
    flex-direction: column;
  }

  .share-container {
    display: flex;
    justify-content: space-between;
  }

  .share-buttons-container {
    display: flex;
  }

  .detection-dates-container {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }
</style>
