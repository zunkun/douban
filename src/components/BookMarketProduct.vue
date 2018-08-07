<template>
  <section id="market_product_book_mobile_web">
    <a :href="product.subject_collection.url" class="promBook" v-show="product.subject_collection">
    <img class="cover" :src="product.header.cover.url" :alt="product.header.title" referrerPolicy="no-referrer" />
    <div class="content">
      <div class="title">
        <span class="price" v-show="product.header.price">¥ {{product.header.price}}</span>
        <p class="name">{{product.header.title}}</p>
      </div>
      <p class="infoWithoutReviewer">{{product.header.info}}</p>
    </div>
  </a>
    <div class="section-content">
      <ul class="row items">
        <li class="item item__market_product_book" v-for="(book, index) in product.subject_collection_items" :key="'subject_collection_items-' + index">
          <a :href="book.url">
          <img class="item-poster" :src="book.cover.url" referrerPolicy="no-referrer" style="height:142px;" />
          <span class="item-title">{{book.title}}</span>
          <div class="item-rating">
            <div class="rank">
              <span v-show="book.price">¥ {{book.price}}</span>
            </div>
          </div>
        </a>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
import { getSubCollection } from '@/store/api'
export default {
  data() {
    return {
      product: {
        count: 0,
        header: {
          cover: { url: '' }
        },
        subject_collection: { url: '' },
        start: 0,
        total: 0,
        subject_collection_items: []
      },
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      Object.assign(this.product, await getSubCollection('market_product_book_mobile_web'))
    }
  }
}
</script>