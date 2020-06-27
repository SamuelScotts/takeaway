<template>
  <div>
    <!-- <v-tabs centered class="primary">
        <v-tab @click="clearCollection" ripple>DELIVERY</v-tab>
        <v-tab @click="clearDelivery" ripple>COLLECTION</v-tab> -->

       <!--  <v-tab-item>
            <v-card>
            <v-card-text>
                <h3 class="">1.) SELECT DELIVERY TIME.</h3>
                <v-select :items="deliveryTimes" label="Delivery Times" outline v-model="selectedDeliveryTime"></v-select>
                <p>Your selected time is: {{selectedDeliveryTime}}</p>
                <v-divider></v-divider>
                <h3 class="mt-6">2.) ENTER YOUR ADDRESS.</h3>
                <v-form>
                    <v-text-field v-model="deliveryAddress.first" label="First Line" required></v-text-field>
                    <v-text-field v-model="deliveryAddress.city" label="Town/City" required></v-text-field>
                    <v-text-field v-model="deliveryAddress.postcode" label="Postcode" required></v-text-field>
                </v-form>
                <h3 class="">3.) SPECIAL INSTRUCTIONS?</h3>
                <v-textarea rows="1" label="Enter any special instructions" background-color="transparent" v-model="specialInstructions"></v-textarea>
            </v-card-text>
            </v-card>
        </v-tab-item> -->

        <!-- <v-tab-item> -->
            <v-card light outlined>
            <v-card-text>
                <v-select :items="deliveryTimes" label="Collection Times" outline v-model="selectedCollectionTime"></v-select>
                <p>Your selected time is: {{selectedCollectionTime}}</p>
            </v-card-text>
            </v-card>
            
<!--         </v-tab-item>
    
    </v-tabs> -->

  </div>
</template>

<script>
  export default {
    name: 'Grid4',

    data: () => ({
      deliveryTimes: [
      '1600 hours',
      '1615 hours',
      '1630 hours',
      '1645 hours',
      '1700 hours',
      '1715 hours',
      '1730 hours',
      '1745 hours',
      '1800 hours',
      ],
      deliveryAddress:{
        first: '',
        city: '',
        postcode: '',
      },
      selectedDeliveryTime: '',
      selectedCollectionTime: '',
    }),

    computed:{
      //
    },

    methods:{
/*       clearDelivery(){
          this.selectedDeliveryTime = '';
      },
      clearCollection(){
          this.selectedCollectionTime = '';
      }, */
      /* specialInstructions(specialInstructions){
      this.$store.commit('specialInstructions', specialInstructions)
      }, */
    }
  }
</script>