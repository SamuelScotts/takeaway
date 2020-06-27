<template>
  <div>
    <v-layout>
        <v-flex xs12 >
        <v-card light outlined>
            <v-card-text>
                <p v-if="orders.length >= 1">You've ordered:</p>
                <p v-else>Your basket is empty...</p>
                <ul>
                    <li v-for="(order, index) in orders" :key="index">
                        {{order.item}} - {{order.price.toFixed(2)}}
                        <v-btn @click="$store.commit('removeItem', order)" x-small><v-icon x-small color="red">mdi-minus</v-icon></v-btn>
                    </li>
                </ul>

                <h3 class='mt-3'>Your total is: £{{this.total}}</h3>
            </v-card-text>
        </v-card>
        </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'Grid3',

    data: ()=>({
        total: 0,
  }),

    computed:{

        orders(){
            return this.$store.getters.orders;
        },

    },

  }
</script>