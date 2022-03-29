import User from "@/models/User";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: new User(),
    children: [new User()],
  },
  getters: {
    getUser: (state) => state.user,
    getChildren: (state) => state.children,
    validData: (state) => {
      let validChildren = true;
      for (const child of state.children) {
        if (!child.isValid) {
          validChildren = false;
          break;
        }
      }

      return state.user.isValid && validChildren;
    },
  },
});
