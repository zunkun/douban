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
        <h2>大雪将至的短评(61)</h2>
        <div class="bd" id="comment-list">
          <ul data-reactroot="" class="list comment-list">
            <li class="">
              <div class="desc"><a href="/people/1924391/"><img src="https://img3.doubanio.com/icon/up1924391-21.jpg" alt="金水"></a>
                <div class="user-info"><strong>金水</strong><span class="rating-stars" data-rating="5"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span></span>
                  <div class="date">1个月前</div>
                </div>
              </div>
              <p>山区小村版的斯通纳，碌碌无为的一生被压缩在170多页的篇幅里。</p>
              <div class="btn-info">
                <div class="ic-btn ic-btn-like  left "><span class="text">11</span></div>
                <div class="ic-btn ic-btn-more   right"></div>
              </div>
            </li>
            <li class="">
              <div class="desc"><a href="/people/2696818/"><img src="https://img1.doubanio.com/icon/up2696818-9.jpg" alt="已注销人士暗蓝"></a>
                <div class="user-info"><strong>已注销人士暗蓝</strong><span class="rating-stars" data-rating="4"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-gray"></span></span>
                  <div class="date">1个月前</div>
                </div>
              </div>
              <p>男人的一生，其实不过几个瞬间：他逃离的瞬间，拥有爱的瞬间，担负起责任的瞬间，失去爱的瞬间，热爱祖国却徒劳无获的瞬间，怯懦的瞬间，以及最终一切不再，“大雪将至”的瞬间——而串联起这一切的，便是所谓的生活。每个瞬间都无法被夺去，但从一个瞬间到下一个，却需要付出万般的努力和勇气。所以不是所有人，都可以完整地走完这段路程，幸运与不幸的分野或许正在于此——可是没人说的清，体验了这一切，究竟意味着幸运，还是不幸。</p>
              <div class="btn-info">
                <div class="ic-btn ic-btn-like  left "><span class="text">11</span></div>
                <div class="ic-btn ic-btn-more   right"></div>
              </div>
            </li>
            <li class="">
              <div class="desc"><a href="/people/3482644/"><img src="https://img3.doubanio.com/icon/up3482644-61.jpg" alt="图图"></a>
                <div class="user-info"><strong>图图</strong><span class="rating-stars" data-rating="5"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span></span>
                  <div class="date">3周前</div>
                </div>
              </div>
              <p>看哭，这才不是乡村版斯通纳好么。“如果已经在开往地狱的路上，那就应该和魔鬼一起笑着去”，艾格尔的人生经历了大风大浪，他幸运顽强地活下来，他陪魔鬼走了一路。就这些了么？可这一路的风景并不好啊，艾格尔想转头，然而魔鬼说你已到终点。</p>
              <div class="btn-info">
                <div class="ic-btn ic-btn-like  left "><span class="text">6</span></div>
                <div class="ic-btn ic-btn-more   right"></div>
              </div>
            </li>
            <li class="">
              <div class="desc"><a href="/people/1078120/"><img src="https://img3.doubanio.com/icon/up1078120-55.jpg" alt="阿巴厮"></a>
                <div class="user-info"><strong>阿巴厮</strong><span class="rating-stars" data-rating="5"><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span><span class="rating-star rating-star-medium-full"></span></span>
                  <div class="date">1个月前</div>
                </div>
              </div>
              <p>高超的作者，就可以这样用简短的篇幅勾勒出平凡人的一生，而且让人不忍心读完读完也不忍心放下，写的好啊！温柔的不切实际，但是又似乎真是他的个性。明明是残酷的人生，但是没有一点怨恨，只是安安静静地流露出竟然是美好的诗意。在周日的早晨就翻完一本这样的书，简直是对生活的一次美好冲击。</p>
              <div class="btn-info">
                <div class="ic-btn ic-btn-like  left "><span class="text">4</span></div>
                <div class="ic-btn ic-btn-more   right"></div>
              </div>
            </li>
            <li class="go-comment-list"><a href="/book/subject/27115714/comments?from=subject">查看全部短评</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import HeaderNav from '@/components/header'
import RatingStarsNumber from '@/components/RatingStarsNumber'

import { getBook, getBookMarket, getElessar } from '@/store/api'

export default {
  data() {
    return {
      full: 0,
      harf: 0,
      gray: 0,
      book: {},
      bookMarket: {},
      elessar: {},
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