<template>
  <div class="home-page container">
    <div class="row ">
      <div class="col-5 lef-text-col">
        <div class="mt-16 ">
          <h1>Quality of life data for Planet Earth</h1>
          <p class="muted-text fw-500 large mt-3">cities and quality of life</p>
          <vs-button to="#explore" color="primary" size="xl">
            Explore now
          </vs-button>
        </div>
      </div>

      <div class="col-7">
        <div id="globeViz"></div>
      </div>
    </div>

    <vs-card type="0" class="w-100 single-chart-card mb-4 ">
      <template #title>
        <h2 class="mb-3">Select City</h2>
      </template>
      <template #text>
       <div style="max-width: 400px">
         <vs-select
             color="primary"
             dark
             filter
             placeholder="city name"
             v-model="value"
             block
         >
           <vs-option dark v-for="city in cities" :key="city.id" :label="city.text" :value="city.id">
             {{city.text}}
           </vs-option>
         </vs-select>
       </div>
      </template>
    </vs-card>

    <dataComponent :p="item.p" :d="item.d"/>

    <div style="height: 200px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      item : {p: "/cities/geonameid:5391959", d: "/urban_areas/slug:san-francisco-bay-area/scores"},

      cities: [
        {id: 1, text: "San Francisco", p: "/cities/geonameid:5391959", d: "/urban_areas/slug:san-francisco-bay-area/scores"},
        {id: 2, text: "Buenos Aires", p: "/cities/geonameid:3435910", d: "/urban_areas/slug:buenos-aires/scores"},
        {id: 3, text: "Mumbai", p: "/cities/geonameid:1275339", d: "/urban_areas/slug:mumbai/scores"},
        {id: 4, text: "Beijing", p: "/cities/geonameid:1816670", d: "/urban_areas/slug:beijing/scores"},
        {id: 5, text: "Ankara", p: "/cities/geonameid:323786", d: "/urban_areas/slug:ankara/scores"},
        {id: 6, text: "Amsterdam", p: "/cities/geonameid:2759794", d: "/urban_areas/slug:amsterdam/scores"},
        {id: 7, text: "New York City", p: "/cities/geonameid:5128581", d: "/urban_areas/slug:new-york/scores"},
        {id: 8, text: "Taipei", p: "/cities/geonameid:1668341", d: "/urban_areas/slug:taipei/scores"},
        {id: 9, text: "Cairo", p: "/cities/geonameid:360630", d: "/urban_areas/slug:cairo/scores"},
        {id: 10, text: "Berlin", p: "/cities/geonameid:2950159", d: "/urban_areas/slug:berlin/scores"},
        {id: 11, text: "Mexico City", p: "/cities/geonameid:3530597", d: "/urban_areas/slug:mexico-city/scores"},
        {id: 12, text: "Hong Kong", p: "/cities/geonameid:1795565", d: "/urban_areas/slug:hong-kong/scores"},
        {id: 13, text: "Seoul", p: "/cities/geonameid:1835848", d: "/urban_areas/slug:seoul/scores"},
        {id: 14, text: "Sao_Paulo", p: "/cities/geonameid:3448439", d: "/urban_areas/slug:sao-paulo/scores"},
      ]
    };
  },
  watch : {
    value : {
      handler(val) {
        let _city = this.cities.find(c => c.id === val );
        this.item = _city;
        console.log("Founded" , _city)
      },
      deep : true,
    },

  },
  components: {
    dataComponent: () => import("./data")
  }
};
</script>

<style lang="scss">


</style>
