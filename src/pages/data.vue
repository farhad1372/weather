<template>
  <div class="row" id="explore">
    <div class="col-12">

      <vs-card type="0" class="w-100 single-chart-card ">
        <template #title>
          <div class="d-flex justify-space-between pt-2" style="min-height : 5rem ">
            <div class="fw-600">
              <h6 style="font-size : 1.5rem !important;">{{ name }}</h6>
              <div class="muted-text small fw-400 mt-2">
                <span>Population:</span>
                <span class="ml-2">{{ population?.toLocaleString() }}</span>
              </div>
            </div>
          </div>
        </template>
        <template #text>
          <div class="mt-4" ref="target" id="target">
            <div class="muted-text mb-5 smallest">
              <span>Quality of life data</span>
            </div>
            <div class="progress-container" v-if="data && data.categories">
              <div v-for="(cate, i) in data.categories" :key="i">
                <div class="muted-text mb-2 px-1 d-flex ">
                  <span class="smallest white--text">{{ cate.name }}</span>
                  <span class="d-inline-block ml-2 ">{{ cate.score_out_of_10?.toFixed(2) }}</span>
                </div>
                <k-progress :show-text="false" :percent="Number(cate.score_out_of_10) * 10" :color="cate.color"/>
              </div>
            </div>
          </div>
        </template>
      </vs-card>


    </div>
  </div>
</template>


<script>
export default {
  props: {
    p: {
      default: null,
      required: true,
    },
    d: {
      default: null,
      required: true,
    }
  },
  data() {
    return {
      name: "loading...",
      population: 0,
      data: [],
    }
  },

  methods: {
    async getPop() {
      try {
        const {data} = await this.$http.get(this.p);
        console.log("P", data);
        this.population = data.population;
        this.name = data.name
      } catch (e) {
        console.log(e.response || e)
      }
    },
    async getData() {
      try {
        const {data} = await this.$http.get(this.d);
        console.log("D", data)
        this.data = data;
      } catch (e) {
        console.log(e.response || e)
      }
    },


  },
  mounted() {

  },
  watch: {
    p: {
      handler() {
        this.getData();
        this.getPop();
      },
      deep: true,
      immediate: true
    }
  }

}
</script>