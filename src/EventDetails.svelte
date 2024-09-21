<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const onClose = (): void => {
    dispatch('close');
  };

  export let event: any;
</script>

<div>
  <div class="header-container">
    <div class="title-container">
      <span>Event Reference: </span>
      <span>Deforestation Event</span>
    </div>
    <button type="button" on:click={onClose}>X</button>
  </div>
  <div class="share-container">
    <span>Lat: 123, Long: 123</span>
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
      <td>2</td>
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
</div>

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
</style>
