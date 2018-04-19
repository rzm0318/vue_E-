import {reqAdList,reqClassify,reqBrand,reqCarousel,reqAllBrand,reqCaptcha,reqLoginPwd,
  reqSendCode,reqLoginSms,reqUserinfo} from "../api/index"
import {RECEIVE_ADLIST,RECEIVE_CLASSIFY,RECEIVE_BRAND,RECEIVE_CAROUSEL,RECEIVE_ALL,
  RECEIVE_CAPTCHA,RECEIVE_LOGINPWD,RECEIVE_SENDCODE,RECEIVE_LOGINSMS,RECEIVE_USERINFO} from "./mutations-types"

export default {

  async getAdlist({commit}) {
    const result = await reqAdList();
    if (result.code === 0) {
      const adlist = result.data;
      commit(RECEIVE_ADLIST, {adlist})
    }
  },
  async getClassify({commit}) {
    const result = await reqClassify();
    if (result.code === 0) {
      const classify = result.data;
      commit(RECEIVE_CLASSIFY, {classify})
    }
  },
  async getBrand({commit}) {
    const result = await reqBrand();
    if (result.code === 0) {
      const brand = result.data;
      commit(RECEIVE_BRAND, {brand})
    }
  },
  async getAllBrand({commit}) {
    const result = await reqAllBrand();
    if (result.code === 0) {
      const all = result.data;
      commit(RECEIVE_ALL, {all})
    }
  },
  async getCarousel({commit}) {
    const result = await reqCarousel();
    if (result.code === 0) {
      const carousel = result.data;
      commit(RECEIVE_CAROUSEL, {carousel})
    }
  },

  async getCaptcha({commit}) {
    const result = await reqCaptcha();
    if (result.code === 0) {
      const captcha = result.data;
      commit(RECEIVE_CAPTCHA, {captcha})
    }
  }




}
