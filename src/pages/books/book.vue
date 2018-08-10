<template>
  <div class="page">
    <link rel="stylesheet" href="https://img3.doubanio.com/misc/mixed_static/5ebf279801dc4d6f.css">
    <HeaderNav></HeaderNav>
    <div class="card">
      <h1 class="title" v-show="book.title">{{book.title}}</h1>
      <section class="subject-info">
        <div class="right">
          <img :src="book.image" :alt="book.title" class="cover" referrerPolicy="no-referrer">
        </div>
        <div class="left">
          <p class="rating">
            <span class="rating-stars" :data-rating="dataRating">
            <span class="rating-star rating-star-small-full" v-for="n in full" :key="'full-' + n"></span>
            <span class="rating-star rating-star-small-harf" v-for="n in harf" :key="'harf-' + n"></span>
            <span class="rating-star rating-star-small-gray" v-for="n in gray" :key="'gray-' + n"></span>
            <strong>{{rating.average}}</strong>
            <span v-show="rating.numRaters">{{rating.numRaters}}人评价</span>
            </span>
          </p>
          <p class="meta">
            <span v-for="(author, index) in book.author" :key="'author-' + index">{{author}} /</span>
            <span v-for="(translator,index) in book.translator" :key="'translator-' + index">{{translator}} /</span>
            <span v-show="book.publisher">{{book.publisher}} /</span>
            <span v-show="book.binding">{{book.binding}} /</span>
            <span v-show="book.pages">{{book.pages}}页 /</span>
            <span v-show="book.price">{{book.price}} 元 / </span>
            <span v-show="book.pubdate">{{book.pubdate}}</span>
          </p>
        </div>
      </section>
      <div class="vendors-link-group">
        <div id="douban-vendors">
          <section data-reactroot="" class="vendors-link">
            <a class="link">
              <!-- react-text: 4 -->在豆瓣购买
              <!-- /react-text --><span class="info"><!-- react-text: 6 -->31.20<!-- /react-text --><!-- react-text: 7 -->元起<!-- /react-text --></span></a>
            <!-- react-empty: 8 -->
            <!-- react-empty: 9 -->
          </section>
        </div>
        <section class="vendors-link" id="other-vendors" style="display: block;">
          <a class="link">
          <span class="text">其他电商购买</span>
          <span class="info">
            京东商城 24.60元起
          </span>
        </a>
        </section>
      </div>
      <section class="subject-mark" data-type="book" data-id="27115714">
        <div class="mark-item">
          <a href="javascript:;" rel="nofollow" name="pbtn-27115714-wish" class="">
                <span>想读</span>
            </a>
          <a href="javascript:;" rel="nofollow" name="pbtn-27115714-do" class="">
                    <span>在读</span>
                </a>
          <a href="javascript:;" rel="nofollow" name="pbtn-27115714-collect">
                <span>读过</span>
            </a>
        </div>
      </section>
      <section id="channel_tags">
        <h2>所属频道</h2>
        <ul>
          <li class="channel_tag" v-for="(tag, index) in elessar.tags" :key="'tag-' + index">
            <a :href="{path: 'channel', params: {id: tag.id}}">{{tag.name}}</a>
          </li>
        </ul>
      </section>
      <section class="subject-intro">
        <h2>大雪将至的内容简介</h2>
        <div class="bd" style="position: static;">
          <p data-clamp="3">{{book.summary | summary}}<a class="expand" href="javascript:;" style="float:right;" v-show="!expand" @click="showExpand()">(展开)</a></p>
          <p data-clamp="3" v-show="expand" v-html="book.summary">{{book.summary}}</p>
        </div>
      </section>
      <section class="subject-comments">
        <h2>{{book.title}}的短评({{comment.count}})</h2>
        <div class="bd" id="comment-list">
          <ul data-reactroot="" class="list comment-list">
            <li class="" v-for="(interest, index) in comment.interests" :key="'interest-' + index">
              <div class="desc"><a :href="{name: 'People', id: interest.user.uid}"><img :src="interest.user.avatar" :alt="interest.user.name" referrerPolicy="no-referrer"></a>
                <div class="user-info"><strong>{{interest.user.name}}</strong><span class="rating-stars" data-rating="5"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span></span>
                  <div class="date">1个月前</div>
                </div>
              </div>
              <p>{{interest.comment}}</p>
              <div class="btn-info">
                <div class="ic-btn ic-btn-like  left "><span class="text">{{interest.vote_count}}</span></div>
                <div class="ic-btn ic-btn-more   right"></div>
              </div>
            </li>
            <li class="go-comment-list"><a :href="{name: 'Comment', id: book.id}">查看全部短评</a></li>
          </ul>
        </div>
      </section>
      <div id="discussions-root">
        <div data-reactroot="" class="subject-forum-topics">
          <h2>讨论({{topic.total}})</h2>
          <ul class="list">
            <li v-for="(forum_topic, index) in topic.forum_topics" :key="'forum_topic-' + index"><a :href="{name: 'Discussion', id: forum_topic.id}"><h3>{{forum_topic.title}}</h3><div class="info">{{forum_topic.comments_count}}回应</div></a></li>
            <li class="go-list"><a :href="{name: 'BookDiscussion', id: book.id}">查看全部讨论</a></li>
          </ul>
        </div>
      </div>
      <section class="subject-annotations">
        <h2>{{book.title}}读书笔记({{annotation.total}})</h2>
        <div class="bd">
          <ul class="list">
            <li class="annotation-item annotation-item-m" v-for="(item, index) in annotation.annotations" :key="'annotation-' + index">
              <a href="/book/annotation/58009339" class="annotation-warp">
                <span class="annotation-title">第{{item.page}}页</span>
                <div class="annotation-content">
                    <p><i class="textstart"></i>{{item.abstract}}<i class="textend"></i></p>
                </div>
                <span class="annotation-author" v-show="item.author.name">{{item.author.name}}</span>
            </a>
            </li>
            <li class="go-annotation-list">
              <a :href="{name: 'Annotation', id: book.id}">查看全部笔记</a>
            </li>
          </ul>
        </div>
      </section>
      <section class="subject-rec">
        <h2>喜欢失踪的孩子的人也喜欢</h2>
        <div class="bd">
          <ul>
            <li>
              <a href="/book/subject/26630480?from=rec" rel="">
                <div class="wp">
                  <img alt="毒木圣经" data-type="cover" src="https://img3.doubanio.com/view/subject/m/public/s29259503.jpg">
                  <h3>毒木圣经</h3>
                </div>
              </a>
            </li>
            <li>
              <a href="/book/subject/27042344?from=rec" rel="">
                <div class="wp">
                  <img alt="醒来的女性" data-type="cover" src="https://img3.doubanio.com/view/subject/m/public/s29469414.jpg">
                  <h3>醒来的女性</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section class="subject-reviews">
        <h2>{{book.title}}的书评({{review.total}})</h2>
        <div class="bd">
          <ul class="list">
            <li v-for="(item, index) in review.reviews" :key="'review-' + index">
              <a href="/book/review/9469890/">
                <h3>{{item.title}}</h3>
                <div>
                  <span class="username" v-show="item.user">{{item.user.name}}</span>
                  <span class="rating-stars" data-rating="100"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span></span>
                </div>
                <p class="abstract">
                 	{{item.abstract}}
                </p>
                <div class="info">
                  {{item.likers_count}} 有用
                </div>
              </a>
            </li>
            <li class="go-review-list"><a :href="{name: 'BookReview', id: book.id}">查看全部书评</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import HeaderNav from '@/components/header'
import RatingStarsNumber from '@/components/RatingStarsNumber'

import { getBook, getBookMarket, getElessar, getInterests, getForumTopics, getAnnotations, getReviews } from '@/store/api'

export default {
  data() {
    return {
      full: 0,
      harf: 0,
      gray: 0,
      book: {},
      bookMarket: {},
      elessar: {},
      comment: {},
      topic: {},
      annotation: {},
      review: {},
      dataRating: '',
      rating: {
        average: '',
        numRaters: 0,
        max: 0,
        min: 0
      },
      expand: false,
    }
  },
  components: { HeaderNav, RatingStarsNumber },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      var r;
      this.book = await getBook(this.$route.params.id);
      this.bookMarket = await getBookMarket(this.$route.params.id);
      this.elessar = await getElessar(this.$route.params.id);
      this.comment = await getInterests(this.$route.params.id);
      this.topic = await getForumTopics(this.$route.params.id);
      this.annotation = await getAnnotations(this.$route.params.id);
      this.review = await getReviews(this.$route.params.id);

      this.ratingAverage = this.rating.average;
      this.numRaters = this.rating.numRaters;
      this.dataRating = (this.rating.average / 2).toFixed(1);
      r = this.dataRating.split(".");
      this.full = parseInt(r[0]);
      this.gray = 5 - r[0];
      this.harf = 0;
      r[1] > 5 ? (this.full += 1, this.gray -= 1) : 5 === r[1] && (this.gray -= 1, this.harf = 1);
    },
    showExpand() {
      this.expand = !this.expand;
    }
  },
  filters: {
    summary(str) {
      if (!str) {
        str = ''
      }
      return str.slice(0, 75) + '...';
    }
  }
}
</script>