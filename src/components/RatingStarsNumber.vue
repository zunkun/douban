<template>
  <p class="rating">
    <span class="rating-stars" :data-rating="dataRating">
      <span class="rating-star rating-star-small-full" v-for="n in full" v-bind:key="'full-' + n"></span>
    <span class="rating-star rating-star-small-harf" v-for="n in harf" v-bind:key="'harf-' + n"></span>
    <span class="rating-star rating-star-small-gray" v-for="n in gray" v-bind:key="'gray-' + n"></span>
    <strong >{{rating.average}}</strong>
    <span v-show="rating.numRaters">{{rating.numRaters}}人评价</span>
    </span>
  </p>
</template>
<script>
export default {
  name: 'RatingStarsNumber',
  data() {
    return {
      dataRating: 0,
      full: 0,
      harf: 0,
      gray: 0,
      showRating: true,
      ratingAverage: 0,
      numRaters: 0,
    }
  },
  props: ['rating'],
  created() {
    var r;
    this.ratingAverage = this.rating.average;
    this.numRaters = this.rating.numRaters;
    this.dataRating = (this.rating.average / 2).toFixed(1);
    r = this.dataRating.split(".");
    this.full = parseInt(r[0]);
    this.gray = 5 - r[0];
    this.harf = 0;
    r[1] > 5 ? (this.full += 1, this.gray -= 1) : 5 === r[1] && (this.gray -= 1, this.harf = 1);
  },
}
</script>