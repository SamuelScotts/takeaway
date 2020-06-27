<template>
  <div>
    <v-app>

      <v-app-bar color="blue darken-3" max-height="50" dense dark>
        <v-toolbar-title>Chinese Style Takeout</v-toolbar-title>
        <v-spacer></v-spacer>
        <p class="mt-4"><v-icon>mdi-phone</v-icon> 01234 567 890</p>
        <v-spacer></v-spacer>
        <p class="mt-4"><v-icon>mdi-clock</v-icon> Wednesday to Sunday. 1600 - 2300 hours</p>
      </v-app-bar>

      <v-container fluid>
        <v-layout row>

          <!-- <v-flex xs-3>
            <v-card dark tile color="red darken-1" class="ml-12 mr-2">
              <v-card-text>
                <Grid1 />
              </v-card-text>
            </v-card>
          </v-flex> -->

          <v-flex xs3>
            <v-card outlined color="blue darken-3" tile class="ml-1 mr-1">
              <v-card-title class="white--text" primary-title>1.) Choose your collection time</v-card-title>
              <v-card-text>
                <Grid4 />
                </v-card-text>
              <v-card-title class="white--text" primary-title>2.) Any special instructions?</v-card-title>
              <v-card light outlined class="ml-4 mr-4 mb-4">
                  <v-card-text>
                      <v-textarea rows="1" label="Enter any special instructions" background-color="transparent" v-model="specialInstructions"></v-textarea>
                  </v-card-text>
              </v-card>
            </v-card>
          </v-flex>

          <v-flex xs6>
            <v-card outlined tile class="mr-1 ml-1" color="blue darken-3">
              <v-card-title class="white--text" primary-title>3.) Choose your menu items</v-card-title>
              <v-card-text>
                <Grid2 />
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs3>
            <v-card outlined tile class="mr-1 ml-1" color="blue darken-3">
              <v-card-title class="white--text" primary-title>4.) Confirm order</v-card-title>
              <v-card-text>
                <Grid3 />
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
        
      </v-container>
    </v-app>
  </div>
</template>

<script>
//import Grid1 from './components/Grid1';
import Grid2 from './components/Grid2';
import Grid3 from './components/Grid3';
import Grid4 from './components/Grid4';

export default {
  name: 'App',

  components: {
    //Grid1,
    Grid2,
    Grid3,
    Grid4,
  },

  data: () => ({
    specialInstructions: "",
  }),

  computed: {
    //
  },

};
</script>
