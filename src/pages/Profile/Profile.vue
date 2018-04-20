<template>
  <div class="myEpet">
    <div class="header">
      <div class="header-top">
        <i class="iconfont icon-back" @click="$router.back()"></i>
        <div class="register">注册</div>
      </div>
      <div class="bgImg">
        <img src="./1.jpg" alt="">
      </div>
      <div class="header-title">
        <div class="left" @click="isVision">
          <div >普通登录</div>
          <i class="iconfont icon-xiaosanjiaoup" v-show="isShow"></i>
        </div>
        <div class="right" @click="isVision">
          <div>手机动态密码登录</div>
          <i class="iconfont icon-xiaosanjiaoup" v-show="!isShow"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <form action="" >
        <div class="normal" v-show="isShow" @submit.prevent="handleSubmit">
          <div class="first">
            <i class="iconfont icon-yonghu"></i>
            <input type="text" placeholder="手机号/邮箱/用户名" v-model="user_psd">
          </div>
          <div class="second">
            <i class="iconfont icon-mima"></i>
            <input type="password" placeholder="输入密码" v-model="user_psd">
          </div>
          <span class="psd">忘记密码？</span>
          <button class="login_submit">登录</button>
        </div>
        <div class="phone"  v-show="!isShow" @submit.prevent="handleSubmit">
          <div class="first">
            <i class="iconfont icon-yonghu"></i>
            <input type="text" placeholder="已注册的手机号" v-model="iphone">
          </div>
          <div class="second">
            <i class="iconfont icon-mima"></i>
            <input type="password" placeholder="请输入图片内容" v-model="affirm">
            <img class="get_verification" src="http://localhost:3000/captcha"
                 @click="updateCaptcha">
          </div>
          <div class="third">
            <i class="iconfont icon-mima"></i>
            <input type="password" placeholder="动态密码密码" v-model="phone_psd" >
            <a @click="sendMsg"  v-show="!time">获取动态验证码</a>
            <a @click="sendMsg" v-show="time">还剩{{time}}秒</a>
          </div>
          <span>忘记密码？</span>
          <button class="login_submit">登录</button>
        </div>
      </form>
    </div>
    <span class="cooperation">合作网站登录</span>
    <div class="footer">
      <div class="money">
        <a href="https://passport.epet.com/Oauth.html?type=4&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
          <img src="//static.epetbar.com/mpet/images/login/login_ico4.png">
        </a>
      </div>
      <div class="qq">
        <a href="https://passport.epet.com/Oauth.html?type=2&returnurl=https%3A%2F%2Fwap.epet.com%2Fuser%2FUserCenter.html">
          <img src="//static.epetbar.com/mpet/images/login/login_ico2.png">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        isShow:true,
        phone_user:'',
        user_psd:'',
        iphone:'',
        affirm:'',
        phone_psd:'',
        time: 0
      }
    },
    methods:{
      isVision(){
        this.isShow=!this.isShow
      },
      sendMsg () {
        if (!this.time) {
          this.time = 60
          this.intervalId = setInterval(() => {
            this.time--
            if (this.time === 0) {
              clearInterval(this.intervalId)
            }
          }, 1000)
        }
      },
      handleSubmit () {
        if (this.isShow) { // 用户密码登录
          const {name, pwd} = this
          if (!name || !pwd) {
            MessageBox.alert('请输入用户名或密码！')
            return
          }
          const regExp = /[A-Za-z0-9_\-\u4e00-\u9fa5]+/
          if (regExp.test(name)) {
            // 发送后台请求，验证用户密码是否正确
          }else {
            MessageBox.alert("请输入正确的用户名格式！")
          }

        }else { // 手机号码登录
          const {phone, code, captcha} = this
          if (!phone || !code) {
            MessageBox.alert('请输入手机号或密码！')
            return
          }else if (!captcha) {
            MessageBox.alert("请输入图片验证码内容")
            return
          }
          const regExp = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
          if (regExp.test(phone)) {
            // 发送后台请求，验证用户密码是否正确
          }else {
            MessageBox.alert("请输入正确的手机号码！")
          }
        }
      },
      updateCaptcha (event) {
        event.target.src='http://localhost:3000/captcha?time='+Date.now()
      },
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .myEpet
    .header
      .header-top
        .iconfont
          position absolute
          top 8px
          left  10px
          color white
          font-size 18px
        .register
          position absolute
          top 12px
          right 10px
          font-size 17px
          color white
      .bgImg
        background-image url("1.jpg")
        img
          width 100%
          height 100%
      .header-title
        display flex
        position absolute
        top 160px
        width 100%
        background-color: rgba(255,255,255,0.3)
        .left
          width 50%
          text-align center
          div
            line-height 44px
            height 44px
            font-size 15px
            color white
          .iconfont
            font-size 34px
            color white
            position absolute
            bottom -10px
            display block
            width 50%
            text-align center
        .right
          text-align center
          div
            line-height 44px
            height 44px
            color white
            font-size 15px
          .iconfont
            font-size 34px
            color white
            position absolute
            bottom -10px
            display block
            width 30%
            text-align center


    .content
      .normal
        width 90%
        margin 0 auto
        position relative
        .first
          height 45px
          line-height 45px
          border-bottom #e2e2e2 solid 1px
          input
            color #666
            font-size 15px
            padding-left 4px
            caret-color #a6a79d
            outline 0
            &::placeholder
              color #e2e2e2
          i
            font-size 20px
            color #e2e2e2
        .second
          height 45px
          line-height 45px
          border-bottom #e2e2e2 solid 1px
          caret-color #a6a79d
          input
            color #666
            font-size 15px
            padding-left 4px
            outline 0
            caret-color #a6a79d
            &::placeholder
              color #e2e2e2
          i
            font-size 20px
            color #e2e2e2
        span
          color #898989
          position absolute
          top 112px
          font-size 14px
          right 10px
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 55px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0

      .phone
        width 90%
        margin 0 auto
        position relative
        .first
          height 45px
          line-height 45px
          border-bottom #e2e2e2 solid 1px
          input
            color #666
            font-size 15px
            padding-left 4px
            outline 0
            caret-color #a6a79d
            &::placeholder
              color #e2e2e2
          i
            font-size 20px
            color #e2e2e2
        .second
          height 45px
          line-height 45px
          border-bottom #e2e2e2 solid 1px
          position relative
          input
            color #666
            font-size 15px
            padding-left 4px
            outline 0
            caret-color #a6a79d
            &::placeholder
              color #e2e2e2
          i
            font-size 20px
            color #e2e2e2
          .get_verification
            width 85px
            height 30px
            position absolute
            right 10px
            top 7px
        .third
          height 45px
          line-height 45px
          border-bottom #e2e2e2 solid 1px
          position relative
          input
            color #666
            font-size 15px
            padding-left 4px
            outline 0
            caret-color #a6a79d
            &::placeholder
              color #e2e2e2
          i
            font-size 20px
            color #e2e2e2
          a
            color #ff4259
            width 100px
            border 1px solid lightcoral
            border-radius 3px
            text-align center
            font-size 13px
            position absolute
            bottom  6px
            right 4px
            height 30px
            line-height 30px

        span
          color #898989
          position absolute
          font-size 14px
          right 10px
          bottom 62px
        .login_submit
          display block
          width 100%
          height 42px
          margin-top 55px
          border-radius 4px
          background #4cd96f
          color #fff
          text-align center
          font-size 16px
          line-height 42px
          border 0
    .login_submit
      display block
      width 100%
      height 42px
      margin-top 55px
      border-radius 4px
      background #4cd96f
      color #fff
      text-align center
      font-size 16px
      line-height 42px
      border 0
    .cooperation
      padding-top 30px
      color #d7d7d7
      display block
      text-align center
    .footer
      display flex
      justify-content space-around
      .money
        width 60px
        height 60px
        img
          width 100%
      .qq
        width 60px
        height 60px
        img
          width 100%
</style>
