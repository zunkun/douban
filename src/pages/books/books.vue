<template>
  <div class="page">
    <link href="https://img3.doubanio.com/f/talion/7596d5845908c46f1b54cfa6091e8b1cd48e5e0c/css/channel/book.css" rel="stylesheet">
    <HeaderNav></HeaderNav>
    <div class="card">      
      <BookHot hotname="虚构类" subject="book_fiction"></BookHot>
      <BookHot hotname="非虚构类" subject="book_nonfiction"></BookHot>
      <bookMarketProduct></BookMarketProduct>
      <bookInterests></BookInterests>
      <bookTypes></BookTypes>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import HeaderNav from '@/components/header'
import BookHot from '@/components/BookHot'
import BookInterests from '@/components/BookInterests'
import BookTypes from '@/components/BookTypes'
import BookMarketProduct from '@/components/BookMarketProduct'

export default {
  data() {
    return {
      recommends: [],
      recommendData: {},
      next_date: undefined,
    }
  },
  components: { HeaderNav, BookHot, BookInterests, BookTypes, BookMarketProduct },
  created() {
  }
}
</script>