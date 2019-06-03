/**
 * @file store index
 * @author rexag.zhang@qq.com
 */

import Vue from 'vue'
import Vuex from 'vuex'
import global from './stores/global'
import rexag from './stores/rexag'

Vue.use(Vuex)

function createStore () {
  return new Vuex.Store({
    modules: {
      global: {
        namespaced: true,
        ...global,
        modules: {
          rexag: rexag
        }
      }
    }
  })
}
export default createStore()
