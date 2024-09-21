<script lang="ts">
  import { Map, controls } from '@beyonk/svelte-mapbox';
  import type { Event } from '../models';

  const { NavigationControl, ScaleControl } = controls;

  export let events: Event[] = [];

  let mapComponent: Map;

  function onMapReady(): void {
    mapComponent.setCenter([116.72579249999995, 6.717405]);

    loadDetections(mapComponent.getMap());
  }

  const detectionSourceKey = (eventId: number, detectionId: number) => `detection-${eventId}-${detectionId}`;

  const loadDetections = (map: unknown): void => {
    events.forEach((event, eventIndex) => {
      event.detections.forEach((detection, detectionIndex) => {
        map.addSource(detectionSourceKey(eventIndex, detectionIndex), {
          type: 'geojson',
          data: {
            type: 'Feature',
            geometry: detection.geometry,
          },
        });

        map.addLayer({
          id: detectionSourceKey(eventIndex, detectionIndex) + '-layer',
          type: 'fill',
          source: detectionSourceKey(eventIndex, detectionIndex),
          layout: {},
          paint: {
            'fill-color': '#FAC898',
            'fill-opacity': 0.5,
          },
        });

        map.addLayer({
          id: detectionSourceKey(eventIndex, detectionIndex) + '-outline',
          type: 'line',
          source: detectionSourceKey(eventIndex, detectionIndex),
          layout: {},
          paint: {
            'line-color': '#FFA500',
            'line-width': 3,
          },
        });
      });
    });
  };
</script>

<Map
  accessToken="pk.eyJ1Ijoic2F0ZWxsaWdlbmNlLXN0YWdpbmciLCJhIjoiY2w2cWtxaGNtMGJlYjNkdGNsMXI4MnpiYSJ9.LEONl2580jXyWbjJE7iMaQ"
  style={'mapbox://styles/mapbox/light-v11'}
  zoom="6"
  version="v2.12.0"
  bind:this={mapComponent}
  on:ready={onMapReady}
>
  <NavigationControl />
  <ScaleControl />
</Map>
