export const state = () => ({
  posts: [],
  post: {},
  user: {},
})

export const mutations = {
  updatePosts(state, data) {
    state.posts = data
  },
  updatePost(state, data) {
    state.post = data
  },
  updateUser(state, data) {
    state.user = data
  },
}

export const actions = {
  async getPosts({ commit }) {
    await this.$axios.$get('/api/posts', {}).then((res) => {
      commit('updatePosts', res.data)
    })
  },
  async getPost({ commit }, id) {
    await this.$axios.$get(`/api/posts/${id}`, {}).then((res) => {
      commit('updatePost', res.data)
      commit('updateUser', res.data.user)
    })
  },
}
