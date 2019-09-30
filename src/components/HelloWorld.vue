<template>
<v-app dark>
  <v-container>
    <v-layout row>
    <v-flex id="small" xs12 sm4 pa-2>
      <v-card>
        <v-img
          src="https://www.laespanolaaceites.com/uploads/recetas/fotos/pizza-con-chorizo-jamon-y-queso.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Pizza chica</div>
            <span class="green--text">$120.00</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" :to="{name: 'order', params: {tamaño:'chico'}}">Ordenar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Estas cosas nadie las lee por que solo ven la imagen y la compran por que estan gordos, F.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-flex id="medium" xs12 sm4 pa-2>
      <v-card>
        <v-img
          src="https://www.laespanolaaceites.com/uploads/recetas/fotos/pizza-con-chorizo-jamon-y-queso.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Pizza mediana</div>
            <span class="green--text">$120.00</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" :to="{name: 'order', params: {tamaño:'mediano'}}" >Ordenar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show2 = !show2">
            <v-icon>{{ show2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show2">
            Estas cosas nadie las lee por que solo ven la imagen y la compran por que estan gordos, F.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-flex id="large" xs12 sm4 pa-2>
      <v-card>
        <v-img
          src="https://www.laespanolaaceites.com/uploads/recetas/fotos/pizza-con-chorizo-jamon-y-queso.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Pizza grande</div>
            <span class="green--text" >$120.00</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green" :to="{name: 'order', params: {tamaño:'grande'}}">Ordenar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show3 = !show3">
            <v-icon>{{ show3 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show3">
            Estas cosas nadie las lee por que solo ven la imagen y la compran por que estan gordos, F.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
    <v-flex id="extra large" xs12 sm4 pa-2>
      <v-card>
        <v-img
          src="https://www.laespanolaaceites.com/uploads/recetas/fotos/pizza-con-chorizo-jamon-y-queso.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">Pizza Xgrande</div>
            <span class="green--text">$120.00</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="green"  :to="{name: 'order', params: {tamaño:'xgrande'}}" >Ordenar</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show4 = !show4">
            <v-icon>{{ show4 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show4">
            Estas cosas nadie las lee por que solo ven la imagen y la compran por que estan gordos, F.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  
  </v-layout>
  <!--
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="cyan" dark>
          <v-toolbar-title>Historial de pedidos</v-toolbar-title>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item) in listaPizza">
            <v-subheader
              :key="item.id"
            >
              Tamaño de pizza: {{ item.ingredientes }}
            </v-subheader>
            <v-list-tile
              :key="item.orden"
            >

              <v-list-tile-content>
                <v-list-tile-title v-html="item.orden"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.orden"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  -->
  </v-container>
  
</v-app>
</template>

<script lang="js">
import axios from 'axios';

  export default {
    data: () => ({
      items:[],
      listaPizza:[],
      pizza:{
        tamaño:"",
        ingredientes:"",
        selectSalsa:"",
        selectMasa:"",
        precio:0,
      },
      show: false,
      show2: false,
      show3: false,
      show4: false,
    }),
  created (){
    axios.get('https://a3ca6c0c.ngrok.io/api/v1/ordenes').then(response => {
      this.items = response.data;
      console.log("LO QUE CONSIGUE: ",this.items[0])
    console.log(JSON.parse(this.items.length))
    for (let index = 0; index < this.items.length; index++) {
     this.items[index] = JSON.parse(this.items[index].orden) 
     console.log("AAAAAAAAAAA",this.items[index])
    if (this.items[index].aceitunas==true) {
      console.log("Entra")
      this.pizza.ingredientes=this.pizza.ingredientes+" "+"aceitunas "
    }
    if(this.items[index].jamon==true){
      this.pizza.ingredientes=this.pizza.ingredientes+" "+"jamon "
    }
    if(this.items[index].peperoni==true){
      this.pizza.ingredientes=this.pizza.ingredientes+" "+"peperoni "
    }
    if(this.items[index].piña==true){
      this.pizza.ingredientes=this.pizza.ingredientes+" "+"piña "
    }
    if(this.items[index].pollo==true){
      this.pizza.ingredientes=this.pizza.ingredientes+" "+"pollo "
    }
    if(this.items[index].salami==true){
      this.pizza.ingredientes=this.pizza.ingredientes+" "+"salami "
    }
    this.pizza.precio = this.items[index].precio
    this.pizza.selectMasa = this.items[index].selectMasa
    this.pizza.selectSalsa = this.items[index].selectSalsa
    console.log("pizza", this.pizza)
    this.listaPizza.push(this.pizza)
    this.pizza = {
        tamaño:"",
        ingredientes:"",
        salsa:"",
        masa:""
      }
    console.log("pizzasss", this.listaPizza)
    }
    
    })
  }
  };
</script>

<style>

</style>
