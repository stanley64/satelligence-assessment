<script>
  import { Map } from '@beyonk/svelte-mapbox'
	import Instructions from './Instructions.svelte'
	
  let mapComponent

	function onReady() {
    mapComponent.flyTo({center:[5,52]}) 
	}
</script>

<Instructions/>

<Map accessToken="pk.eyJ1Ijoic2F0ZWxsaWdlbmNlLXN0YWdpbmciLCJhIjoiY2w2cWtxaGNtMGJlYjNkdGNsMXI4MnpiYSJ9.LEONl2580jXyWbjJE7iMaQ"
	style="mapbox://styles/mapbox/light-v11"
	zoom=6
	version="v2.12.0"
  bind:this={mapComponent} 
  on:ready={onReady}
>
</Map>
