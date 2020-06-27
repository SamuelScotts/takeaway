<template>
  <div>
      <v-card>
        <v-toolbar>
            <v-toolbar-title class="justify-center">MENU</v-toolbar-title>
        </v-toolbar>

        <v-list>
          <v-list-group v-for="item in items" :key="item.title">
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item v-for="subItem in item.items" :key="subItem.title">
              <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
  </div>
</template>

<script>
  export default {
    

    data: () => ({
      //
    }),
  }
</script>

<script>
  export default {

    name: 'Grid1',

    data () {
        return {
            items: [
            {
                title: 'Set Menus',
                items: [
                { title: 'List Item' }
                ]
            },
            {
                title: 'Offers',
                items: [
                { title: 'List Item' },
                ]
            },
            {
                title: 'Starters',
                items: [
                { title: 'List Item' }
                ]
            },
            {
                title: 'Chicken Dishes',
                items: [
                { title: 'List Item' }
                ]
            },
            {
                title: 'Beef Dishes',
                items: [
                { title: 'List Item' }
                ]
            },
            {
                title: 'Special Dishes',
                items: [
                { title: 'List Item' }
                ]
            },
            {
                title: 'Side Orders',
                items: [
                { title: 'Rice' },
                { title: 'Chips' },
                { title: 'Prawn Crackers' },
                ]
            }
            ]
        }
        }
  }
</script>