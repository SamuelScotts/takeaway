<template>
  <div>
      <v-tabs centered class="primary">
        <v-tabs-slider></v-tabs-slider>
        <v-tab ripple>Satay</v-tab>
        <v-tab ripple>Chicken</v-tab>
        <v-tab ripple>Fried Rice</v-tab>
        <v-tab ripple>Sweet & Sour</v-tab>
        <v-tab ripple>Noodle</v-tab>
        <v-tab ripple>Chop Suey</v-tab>

        <v-tab-item>
            <v-card>
              <v-card-text>
                <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Item</th>
                          <th class="text-left">Price</th>
                          <th class="text-left">Add to order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in satayDishes" :key="index">
                          <td>{{ item.item}}</td>
                          <td>£{{ item.price.toFixed(2) }}</td>
                          <td><v-btn small @click="$store.commit('addItem', item)"><v-icon>mdi-plus</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
        </v-tab-item>

        <v-tab-item>
            <v-card>
              <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Item</th>
                          <th class="text-left">Price</th>
                          <th class="text-left">Add to order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in chickenDishes" :key="index">
                          <td>{{ item.item}}</td>
                          <td>£{{ item.price.toFixed(2) }}</td>
                          <td><v-btn small @click="$store.commit('addItem', item)"><v-icon>mdi-plus</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card>
            <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Item</th>
                          <th class="text-left">Price</th>
                          <th class="text-left">Add to order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in friedRiceDishes" :key="index">
                          <td>{{ item.item}}</td>
                          <td>£{{ item.price.toFixed(2) }}</td>
                          <td><v-btn small @click="$store.commit('addItem', item)"><v-icon>mdi-plus</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
        </v-tab-item> 

        <v-tab-item>
          <v-card>
            <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Item</th>
                          <th class="text-left">Price</th>
                          <th class="text-left">Add to order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in sweetSourDishes" :key="index">
                          <td>{{ item.item}}</td>
                          <td>£{{ item.price.toFixed(2) }}</td>
                          <td><v-btn small @click="$store.commit('addItem', item)"><v-icon>mdi-plus</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
        </v-tab-item> 

        <v-tab-item>
          <v-card>
            <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Item</th>
                          <th class="text-left">Price</th>
                          <th class="text-left">Add to order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in noodleDishes" :key="index">
                          <td>{{ item.item}}</td>
                          <td>£{{ item.price.toFixed(2) }}</td>
                          <td><v-btn small @click="$store.commit('addItem', item)"><v-icon>mdi-plus</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
        </v-tab-item>

        <v-tab-item>
          <v-card>
            <v-card-text>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">Item</th>
                          <th class="text-left">Price</th>
                          <th class="text-left">Add to order</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in chopSueyDishes" :key="index">
                          <td>{{ item.item}}</td>
                          <td>£{{ item.price.toFixed(2) }}</td>
                          <td><v-btn small @click="$store.commit('addItem', item)"><v-icon>mdi-plus</v-icon></v-btn></td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
              </v-card-text>
            </v-card>
        </v-tab-item>

    </v-tabs>
  </div>
</template>

<script>
  export default {
    name: 'Grid2',

    data: () => ({
      //
    }),

    computed:{
        satayDishes(){
            return this.$store.getters.satayDishes;
        },
        chickenDishes(){
            return this.$store.getters.chickenDishes;
        },
        friedRiceDishes(){
            return this.$store.getters.friedRiceDishes;
        },
        sweetSourDishes(){
            return this.$store.getters.sweetSourDishes;
        },
        noodleDishes(){
            return this.$store.getters.noodleDishes;
        },
        chopSueyDishes(){
            return this.$store.getters.chopSueyDishes;
        },
        beefDishes(){
            return this.$store.getters.beefDishes;
        },
    },

  }
</script>