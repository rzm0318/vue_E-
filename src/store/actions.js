import {reqAdList,reqClassify,reqBrand,reqCarousel} from "../api/index"
import {RECEIVE_ADLIST,RECEIVE_CLASSIFY,RECEIVE_BRAND,RECEIVE_CAROUSEL} from "./mutations-types"

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
  async getCarousel({commit}) {
    const result = await reqCarousel();

    if (result.code === 0) {
      const carousel = result.data;
      commit(RECEIVE_CAROUSEL, {carousel})
    }
  }




}
