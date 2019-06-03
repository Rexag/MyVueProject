/**
 * @file store index
 * @author rexag.zhang@qq.com
 */

import Vue from 'vue'
import Vuex from 'vuex'

import ReData from './ReData/ReData'
import GlobalData from './ReData/GlobalData'

import ReStates from './ReStates/ReStates'
import GlobalStates from './ReStates/GlobalStates'
import NewStates from './ReStates/NewStates'

Vue.use(Vuex)

function createStore () {
  return new Vuex.Store({
    modules: {
      ReData: {
        namespaced: true,
        ...ReData,
        modules: {
          GlobalData: GlobalData
        }
      },
      ReStates: {
        namespaced: true,
        ...ReStates,
        modules: {
          GlobalStates: GlobalStates,
          NewStates: NewStates
        }
      }
    }
  })
}
export default createStore()
