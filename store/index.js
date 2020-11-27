export const state = () => ({
  productItemsList: [
    {
      id: 0,
      img: require('~/assets/imgs/hel1.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 1,
      img: require('~/assets/imgs/hel2.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 2,
      img: require('~/assets/imgs/hel3.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 3,
      img: require('~/assets/imgs/plane.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 4,
      img: require('~/assets/imgs/hel1.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 5,
      img: require('~/assets/imgs/hel2.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 6,
      img: require('~/assets/imgs/drone.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 7,
      img: require('~/assets/imgs/plane.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 8,
      img: require('~/assets/imgs/hel3.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 9,
      img: require('~/assets/imgs/hel1.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 10,
      img: require('~/assets/imgs/hel2.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 11,
      img: require('~/assets/imgs/drone.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
    {
      id: 12,
      img: require('~/assets/imgs/plane.jpg'),
      name: 'XR-74 «Cooper»',
      desc: 'Brief description of the project, in a few lines.',
      price: '1 278 $/h',
    },
  ],
})

export const mutations = {
  STORE_JOB_IDS(state, productItemsList) {
    state.productItemsList = productItemsList
  },
}

export const actions = {
  storeProductItems({ commit }, productItemsList) {
    commit('STORE_PRODUCT_ITEMS', productItemsList)
  },
}

export const getters = {
  getProductById: (state) => (id) => {
    return state.productItemsList.find((product) => product.id === parseInt(id))
  },
}
