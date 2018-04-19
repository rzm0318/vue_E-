import ajax from "./ajax.js";

// [1、获取E宠主页广告列表](##获取E宠主页广告列表)<br/>
export const reqAdList = ()=> ajax("/api/index")

// [2、获取E宠分类列表](#获取E宠分类列表)<br/>
export const reqClassify = ()=>ajax("/api/classify")

// [3、获取E宠品牌列表](#获取E宠品牌列表)<br/>
export const reqBrand = ()=>ajax("/api/brand")

// 获取全部品牌列表
export const reqAllBrand = ()=>ajax("/api/allbrand")

// [4、获取轮播图广告和每日疯抢](#获取轮播图广告和每日疯抢)<br/>
export  const reqCarousel =()=>ajax("/api/carousel")

// [5、获取一次性验证码](#4获取一次性验证码)<br/>
export  const reqCaptcha =()=>ajax("/api/captcha")

// [6、用户名密码登陆](#4用户名密码登陆)<br/>
export  const reqLoginPwd =(name,pwd)=>ajax("/api/login_pwd",{name,pwd},"POST")

// [7、发送短信验证码](#5发送短信验证码)<br/>
export  const reqSendCode =(phone)=>ajax("/api/sendcode",{phone})

// [8、手机号验证码登陆](#6手机号验证码登陆)<br/>
export  const reqLoginSms =(phone,name,captcha)=>ajax("/api/login_sms",{phone,name,captcha},"POST")

// [9、根据会话获取用户信息](#7根据会话获取用户信息)<br/>
export  const reqUserinfo =()=>ajax("/api/userinfo")
