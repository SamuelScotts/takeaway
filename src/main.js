import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    orders:[

    ],
    satayDishes:[
      {
      item: 'Item 1',
      price: 8.00,
      },
      {
      item: 'Item 2',
      price: 8.00,
      },
      {
      item: 'Item 3',
      price: 7.60,
      },
      {
      item: 'Item 4',
      price: 7.60,
      },
      {
      item: 'Item 5',
      price: 7.60,
      },
    ],
    chickenDishes:[
      {
        item: 'Item 6',
        price: 7.00,
      },
      {
        item: 'Item 7',
        price: 7.00,
      },
      {
        item: 'Item 8',
        price: 7.50,
      },
      {
        item: 'Item 9',
        price: 7.15,
      },
      {
        item: 'Item 10',
        price: 7.10,
      },
      {
        item: 'Item 11',
        price: 7.10,
      },
      {
        item: 'Item 12',
        price: 7.30,
      },
      {
        item: 'Item 13',
        price: 7.80,
      },
      {
        item: 'Item 14',
        price: 7.00,
      },
    ],
    friedRiceDishes:[
      {
        item: 'Item 15',
        price: 8.10,
      },
      {
        item: 'Item 16',
        price: 8.10,
      },
      {
        item: 'Item 17',
        price: 7.10,
      },
      {
        item: 'Item 18',
        price: 7.40,
      },
      {
        item: 'Item 19',
        price: 7.80,
      },
      {
        item: 'Item 20',
        price: 7.90,
      },
      {
        item: 'Item 21',
        price: 7.50,
      },
      {
        item: 'Item 22',
        price: 7.10,
      },
    ],
    sweetSourDishes:[
      {
        item: 'Item 23',
        price: 8.10,
      },
      {
        item: 'Item 24',
        price: 7.10,
      },
      {
        item: 'Item 25',
        price: 7.90,
      },
    ],
    noodleDishes:[
      {
        item: 'Item 26',
        price: 7.10,
      },
      {
        item: 'Item 27',
        price: 7.10,
      },
      {
        item: 'Item 28',
        price: 8.50,
      },
      {
        item: 'Item 29',
        price: 8.50,
      },
      {
        item: 'Item 30',
        price: 8.00,
      },
      {
        item: 'Item 31',
        price: 8.90,
      },
      {
        item: 'Item 32',
        price: 8.40,
      },
      {
        item: 'Item 33',
        price: 8.40,
      },
      {
        item: 'Item 34',
        price: 7.40,
      },
      {
        item: 'Item 35',
        price: 7.20,
      },
      {
        item: 'Item 36',
        price: 8.50,
      },
      {
        item: 'Item 37',
        price: 8.00,
      },
      {
        item: 'Item 38',
        price: 7.90,
      },
    ],
    chopSueyDishes:[
      {
        item: 'Item 39',
        price: 8.50,
      }, 
      {
        item: 'Item 40',
        price: 7.90,
      }, 
      {
        item: 'Item 41',
        price: 7.90,
      }, 
      {
        item: 'Item 42',
        price: 7.60,
      }, 
      {
        item: 'Item 43',
        price: 8.60,
      }, 
      {
        item: 'Item 44',
        price: 8.90,
      }, 
    ],
  },
  getters : {
    orders: state => {
      return state.orders;
    },
    satayDishes: state => {
      return state.satayDishes;
    },
    chickenDishes: state => {
      return state.chickenDishes; 
    },
    friedRiceDishes: state => {
      return state.friedRiceDishes;
    },
    sweetSourDishes: state => {
      return state.sweetSourDishes;
    },
    noodleDishes: state => {
      return state.noodleDishes;
    },
    chopSueyDishes: state => {
      return state.chopSueyDishes;
    },
    beefDishes: state => {
      return state.beefDishes;
    },
  },
  mutations: {
    removeItem(state, order){
      let index = state.orders.indexOf(order);
      state.orders.splice(index, 1);
    },
    addItem(state, item){
      state.orders.push(item);
    }
    /* specialInstructions(state, specialInstructions){
      state.specialInstructions = specialInstructions;
    } */
  },
  actions : {

  }  
})

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
