<template>
  <div class="rank">
    <span class="rating-stars" :data-rating="dataRating" v-show="showRating">
			<span class="rating-star rating-star-small-full" v-for="n in full" v-bind:key="'full-' + n"></span>
    <span class="rating-star rating-star-small-harf" v-for="n in harf" v-bind:key="'harf-' + n"></span>
    <span class="rating-star rating-star-small-gray" v-for="n in gray" v-bind:key="'gray-' + n"></span>
    </span>
    <span v-show="showRating">{{ratingValue}}</span>
    <span v-show="!showRating">暂无评分</span>
  </div>
</template>
<script>
export default {
  name: 'RatingStars',
  data() {
    return {
      dataRating: 0,
      full: 0,
      harf: 0,
      gray: 0,
      showRating: true,
      ratingValue: 0,
    }
  },
  props: ['rating'],
  created() {
    var r;
    if(!this.rating || !this.rating.value) {
      this.showRating = false;
      return;
    }
    this.ratingValue = this.rating.value;
    this.dataRating = (this.rating.value / 2).toFixed(1);
    r = this.dataRating.split(".");
    this.full = parseInt(r[0]);
    this.gray = 5 - r[0];
    this.harf = 0;
    r[1] > 5 ? (this.full += 1, this.gray -= 1) : 5 === r[1] && (this.gray -= 1, this.harf = 1);
  }
}
</script>