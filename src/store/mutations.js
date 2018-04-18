import Vue from "vue"
import {RECEIVE_ADLIST,RECEIVE_CLASSIFY,RECEIVE_BRAND,RECEIVE_CAROUSEL} from "./mutations-types"

export default {
  [RECEIVE_ADLIST] (state, {adlist}) {
    state.adlist = adlist
  },
  [RECEIVE_CLASSIFY] (state, {classify}) {
    state.classify = classify
  },
  [RECEIVE_BRAND] (state, {brand}) {
    state.brand = brand
  },
  [RECEIVE_CAROUSEL] (state, {carousel}) {
    state.carousel = carousel
  }
}
