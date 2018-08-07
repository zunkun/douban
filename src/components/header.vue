<template>
  <div id="TalionNav">
    <header class="TalionNav">
      <div class="TalionNav-primary" v-show="talion == 'primary'"><a href="/"><h1>豆瓣</h1></a>
        <nav>
          <ul>
            <li>
              <router-link :to="{name:'Movie'}" style="color: #2384E8;">电影</router-link>
            </li>
            <li>
              <router-link :to="{name:'Books'}" style="color: #9F7860;">图书</router-link>
            </li>
            <li>
              <router-link :to="{name:'Broadcast'}" style="color: #E4A813;">广播</router-link>
            </li>
            <li>
              <router-link :to="{name:'Group'}" style="color: #2AB8CC;">小组</router-link>
            </li>
          </ul><span class=""></span></nav>
      </div>
      <div class="TalionNav-secondary" v-show="talion == 'secondary'"><a class="close-nav" href="javascript:;">关闭</a>
        <form action="/search" method="GET">
          <div>
            <input name="query" type="search">
          </div>
        </form>
        <ul>
          <li>
            <div><a href="/movie" target="_blank"><strong style="color: #2384E8;">电影</strong><span>影院热映</span></a><a href="https://douban.com/location" target=""><strong style="color: #E6467E;">同城</strong><span>周末活动</span></a><a href="https://read.douban.com" target=""><strong style="color: #9F7860;">阅读</strong><span>电子书</span></a><a href="/status" target="_blank"><strong style="color: #E1644D;">广播</strong><span>友邻动态</span></a></div>
          </li>
          <li>
            <div><a href="/tv" target="_blank"><strong style="color: #7A6ADB;">电视</strong><span>正在热播</span></a><a href="/group" target="_blank"><strong style="color: #2AB8CC;">小组</strong><span>志趣相投</span></a><a href="/game" target="_blank"><strong style="color: #5774C5;">游戏</strong><span>虚拟世界</span></a><a href="https://douban.fm" target=""><strong style="color: #40CFA9;">FM</strong><span>红心歌单</span></a></div>
          </li>
          <li>
            <div><a href="/book" target="_blank"><strong style="color: #9F7860;">图书</strong><span>畅销排行</span></a><a href="/music" target="_blank"><strong style="color: #F48F2E;">音乐</strong><span>新碟榜</span></a><a href="/mobileapp" target="_blank"><strong style="color: #596CDD;">应用</strong><span>玩手机</span></a><a href="https://market.douban.com/?utm_campaign=mobile_web_douban_nav&amp;utm_source=douban&amp;utm_medium=mobile_web" target=""><strong style="color: #42BD56;">豆品</strong><span>生活美学</span></a></div>
          </li>
        </ul>
        <div class="navBottom">
          <div class="nav-item"><a class="toLogin" href="http://accounts.douban.com/passport/login?redir=https://m.douban.com/">登录豆瓣</a></div>
          <div class="nav-item"><a class="toPC" href="/to_pc/?url=https%3A%2F%2Fm.douban.com%2F">使用桌面版</a><a class="toApp">使用豆瓣App</a></div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      talion: 'primary'
    }
  }
}
</script>