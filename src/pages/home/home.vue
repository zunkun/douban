<template>
  <div class="page">
    <headerNav></headerNav>
    <link rel="stylesheet" href="https://img3.doubanio.com/misc/mixed_static/468e9211d89502ad.css">
    <div class="card">
      <ul class="quick-nav">
        <li>
          <a href="/movie/nowintheater?loc_id=108288">影院热映</a>
        </li>
        <li>
          <a href="/tv/american/">近期值得看的美剧</a>
        </li>
        <li>
          <a id="hot-topics" href="https://m.douban.com/time/?dt_time_source=douban-msite_shortcut">豆瓣时间</a>
        </li>
        <li>
          <a href="https://www.douban.com/doubanapp/app?channel=card_home&amp;direct_dl=1">使用豆瓣App</a>
        </li>
      </ul>
      <div>
      </div>
      <section id="recommend-feed">
        <div class="data-reactroot">
          <div class="feed-section" v-for="(recommend, index) in recommends" :key="recommend.date + index">
            <h2 class="date" v-show="index != 0">{{recommend.date}}</h2>
            <a class="feed-item" :href="recommend_feed.target.uri" v-for="recommend_feed in recommend.recommend_feeds" :key="recommend_feed.id">
              <div class="feed-content" v-show="!recommend_feed.target.photos_count">
                <img class="cover" style="position: relative" :src="recommend_feed.target.cover_url" v-show="recommend_feed.target.cover_url" referrerPolicy="no-referrer" />
                <h3>{{recommend_feed.title}}</h3>
                <p>{{recommend_feed.target.desc}}</p>
              </div>
              <div class="feed-content" v-show="recommend_feed.target.photos_count">
                <div class="photos">
                  <div class="main" :style='{ position: "relative", background: "url(" + recommend_feed.target.cover_url + ") center center / cover no-repeat rgb(250, 250, 250)", }'>
                    <div></div>
                  </div>
                  <div class="aside">
                    <div class="aside-pic">
                      <img class="cover" style="position: relative" :src="recommend_feed.target.more_pic_urls[0]" referrerPolicy="no-referrer" />
                    </div>
                    <div class="aside-pic">
                      <img class="cover" style="position: relative" :src="recommend_feed.target.more_pic_urls[1]" referrerPolicy="no-referrer"/>
                      <div class="more-pic"><span class="count">{{recommend_feed.target.photos_count}}+</span></div>
                    </div>
                  </div>
                </div>
                <h3>甬远</h3>
              </div>
              <div class="author">
                by&nbsp;
                <span class="name">{{recommend_feed.target.author.name}}</span>
              </div>
              <span class="feed-label"></span>
            </a>
          </div>
          <div class="infinite-scroll-trigger" @click="loadMore">
            <div class="loadmore"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import headerNav from '@/components/header'

import { getRecommend } from '@/store/api';

export default {
  data() {
    return {
      recommends: [],
      recommendData: {},
      next_date: undefined,
    }
  },
  components: { headerNav },
  created() {
    this.getFeeds(true);
    // this.setNextDate();
  },
  methods: {
    async getFeeds() {
      this.recommendData = await getRecommend({ next_date: this.next_date });
      this.recommends.push(this.recommendData);
      this.next_date = this.recommendData.date;
    },

    async loadMore() {
      this.getFeeds();
      this.setNextDate();
    },

    setNextDate() {
      let d = this.next_date ? new Date(this.next_date) : new Date();
      d = +d - 1000 * 60 * 60 * 24;
      d = new Date(d);

      this.next_date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    }
  },
}
</script>