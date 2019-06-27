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
  </v-layout>
  </v-container>
</v-app>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
  };
</script>

<style>

</style>
