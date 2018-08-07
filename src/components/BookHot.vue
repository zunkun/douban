<template>
  <section :id="subject">
    <header>
      <h2>最受关注图书｜{{hotname}}</h2>
      <a href="">更多</a>
    </header>
    <div class="section-content">
      <ul class="row items">
        <li class="item item__book" v-for="(item, index) in hotItems.subject_collection_items" :key="'subject_collection_items-' + index">
          <router-link :to="{name: 'Book', params: {id: toId(item.uri) }}">
            <img :src="item.cover.url" class="item-poster" referrerPolicy="no-referrer" style="height:142px;">
            <span class="item-title">{{item.title}}</span>
            <div class="item-rating">
              <RatingStars :rating="item.rating"></RatingStars>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { getSubCollection } from '@/store/api'
import RatingStars from '@/components/RatingStars'

export default {
  data() {
    return {
      hotItems: {
        subject_collection_items: [],
      }
    }
  },
  props: ['hotname', 'subject'],
  created() {
    this.getData();
  },
  components: { RatingStars },
  methods: {
    async getData() {
      this.hotItems = await getSubCollection(this.subject)
    },
    toId(url) {
      return url.slice(url.lastIndexOf('/') +1)
    }
  },
}
</script>