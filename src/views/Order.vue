<template>
<v-app dark>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>UP</span>
      <span class="font-weight-light">IZZA</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      target="_blank"
      >
      <span class="mr-2">Ingresar</span>
    </v-btn>
  </v-toolbar>
  <div id="error">
    <div class="text-xs-center">
    </div>
    <v-snackbar
      v-model="alert"
      color="error"
      :timeout="3000"
      :top="true"
      >
      {{ messageAlert }}
      </v-snackbar>
  </div>
  
  <v-container>
    <v-layout row>
    <v-flex class="text-xs-center display-1" mb-4>
      {{msg}} {{ tamaño }}
    </v-flex>
    </v-layout>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" color="success" step="1">Base de la pizza</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" color="success" step="2">Ingredientes</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3" color="success">Datos de entrega</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <form @submit.prevent="validar('form-1')" data-vv-scope="form-1">
          <v-container>
            <v-layout row>
              <v-flex xs6>
              <v-card xs6>
                <v-img
                  src="https://www.laespanolaaceites.com/uploads/recetas/fotos/pizza-con-chorizo-jamon-y-queso.jpg"
                  height="200px"
                >
                </v-img>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Masa</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select name="selectMasa" v-model="selectMasa" v-validate="'required'"  :error-messages="errors.collect('select')" data-vv-name="select" required :items="itemsMasa" box label="Elija el tipo de masa"></v-select>          
                </v-card-actions>  
              </v-card>
              </v-flex>
              <v-flex xs6>
              <v-card xs6>
                <v-img
                  src="https://www.laespanolaaceites.com/uploads/recetas/fotos/pizza-con-chorizo-jamon-y-queso.jpg"
                  height="200px"
                >
                </v-img>
                <v-card-title primary-title>
                  <div>
                    <div class="headline">Salsa</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-select v-model="selectSalsa" v-validate="'required'"  :error-messages="errors.collect('select')" data-vv-name="select" :items="itemsSalsa" box label="Elija la salsa"></v-select>     
                </v-card-actions>  
              </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </form>
        <v-btn
          color="success"
          @click = "validar('form-1')"
        >
          Siguiente
        </v-btn>

        <v-btn flat>Cancelar pedido</v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card>
          <v-card-text>
            <v-layout>
              <v-checkbox
              v-model="peperoni"
              label="Peperoni"
            ></v-checkbox>
              <v-checkbox
              v-model="pollo"
              label="Pollo"
            ></v-checkbox>
              <v-checkbox
              v-model="salami"
              label="Salami"
            ></v-checkbox>
            </v-layout>
            <v-layout>
              <v-checkbox
              v-model="aceitunas"
              label="Aceitunas"
            ></v-checkbox>
              <v-checkbox
              v-model="piña"
              label="Piña"
            ></v-checkbox>
              <v-checkbox
              v-model="jamon"
              label="Jamón"
            ></v-checkbox>
            </v-layout>
          </v-card-text>
        </v-card>

        <v-btn
          color="success"
          @click="validarIngredientes()"
        >
          Continue
        </v-btn>

        <v-btn flat @click="e1 = 1">Regresar</v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <form @submit.prevent="validarPago('form-2')" data-vv-scope="form-2">
          <v-card>
            <v-card-text>
              <v-container>
                <v-layout>
                  <v-flex xs12 md4>
                    <v-text-field
                    v-validate="'required'"  :error-messages="errors.collect('campo')" data-vv-name="campo"
                      v-model="firstname"
                      :rules="nameRules"
                      label="Nombre"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field
                    v-validate="'required'"  :error-messages="errors.collect('campo')" data-vv-name="campo"
                      v-model="lastname"
                      :rules="nameRules"
                      label="Apellido"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field
                    v-validate="'required'"  :error-messages="errors.collect('campo')" data-vv-name="campo"
                      v-model="email"
                      :rules="emailRules"
                      label="E-mail"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <!--SEGUNDA PARTE DE FORM-->
                <v-badge></v-badge>
                <v-layout>
                  <v-flex xs12 md4>
                    <v-text-field
                    v-validate="'required'"  :error-messages="errors.collect('campo')" data-vv-name="campo"
                      v-model="address"
                      :rules="addressRules"
                      label="Domicilio"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field
                    v-validate="'required'"  :error-messages="errors.collect('campo')" data-vv-name="campo"
                      v-model="zip"
                      :rules="zipRules"
                      label="Codigo postal"
                      required
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-text-field
                    v-validate="'required'"  :error-messages="errors.collect('campo')" data-vv-name="campo"
                      v-model="phone"
                      :rules="phoneRules"
                      label="Telefono"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <!--TERCERA PARTE DEL FORM-->
                <v-badge></v-badge>
                <v-layout>
                  <v-flex xs12 md20>
                    <div ref="card"></div>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>

          <v-btn
            color="primary"
            @click="validarPago('form-2')"
          >
            Continue
          </v-btn>

          <v-btn flat>Cancel</v-btn>
        </form>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

  </v-container>
</v-app>
</template>
<script lang="ts">
let stripe = Stripe(`pk_test_IQrl5Ley7vuMVuMKJQ2y7mtK00S2xQwKx0`),
elements = stripe.elements(),
card = undefined;
import Vue from 'vue';
import { Component} from 'vue-property-decorator';
import router from '../router';
import VeeValidate from 'vee-validate';
import axios from 'axios';
Vue.use(VeeValidate);
export default {
    $_veeValidate: {
      validator: 'new'
    },
    data: () => ({
        string:"",
        precio: 0,
          e1: 0,
          alert:false,
          messageAlert: '',
          valid:false,
          peperoni:false,
          pollo:false,
          salami:false,
          aceitunas:false,
          piña:false,
          jamon:false,
          selectSalsa: '',
          selectMasa: '',
          itemsMasa: ['Normal', 'Crunchy', 'Sarten'],
          itemsSalsa: ['Salsa normal', 'Salsa doble'],
          tamaño : 'none',
          msg: 'Estas por pedir una pizza de tamaño: ',
          dictionary: {
            attributes: {
              email: 'E-mail Address'
              // custom attributes
            },
            custom: {
              name: {
                required: () => 'Name can not be empty',
                max: 'The name field may not be greater than 10 characters'
                // custom messages
              },
              select: {
                required: 'Seleccione una opcion correcta.'
              },
              campo: {
                required: 'Ingrese un dato'
              }
            }
          },
          firstname: '',
      lastname: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
      ],
      address: '',
      addressRules: [
        v => !!v || 'El domicilio es requerido',
      ],
      zip: '',
      zipRules: [
        v => !!v || 'El codigo postal es requerido',
      ],
      phone: '',
      phoneRules: [
        v => !!v || 'El telefono es requerido',
        
        v => /(\d{3})(\d{3})(\d{4})/.test(v) || 'El telefono debe ser valido'
      ],
      email: '',
      emailRules: [
        v => !!v || 'El correo es requerido',
        v => /.+@.+/.test(v)  || 'El correo debe ser valido'
      ],
      order:<any> {},
      listaOrder:<any> [],
      owner :<any>{} 
    }),
    
    mounted () {
      card = elements.create('card')
      card.mount(this.$refs.card)
      this.$validator.localize('es', this.dictionary)
      if(localStorage.tamaño){
        this.tamaño = localStorage.tamaño
      }
    },
    created () {
       // axios.get( 'https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (console.log(response)))
        this.tamaño = this.$route.params.tamaño;
        let array = JSON.parse(localStorage.getItem('listaOrden'))
        console.log("EN STORAGE: ", array[0])
    },
    methods: {
      validar(scope:any){
        console.log("VALIDANDO P1...")
        this.$validator.validateAll(scope).then((result) => {
          if(result){
            console.log("FUNCIONA")
            this.e1 = 2
          }else{
            console.log("No valido")
            this.messageAlert = "Falta rellenar los campos."
            this.alert = true
          }
        })
      },
      validarIngredientes(){
            this.order={
              peperoni:this.peperoni,
              pollo:this.pollo,
              salami:this.salami,
              aceitunas:this.aceitunas,
              piña:this.piña,
              jamon:this.jamon,
              selectSalsa: this.selectSalsa,
              selectMasa: this.selectMasa,
              precio: this.precio,
              tamaño: this.tamaño,
              
              };
          console.log("Esta es la orden: ", this.order)
              this.e1 = 3
      },
      validarPago(scope:any){
        console.log("VALIDANDO P1...")
        this.$validator.validateAll(scope).then((result) => {
          if(result){
            console.log("FUNCIONA")
            for (var x in this.order ){
              if(this.order[x] == true){
                this.order.precio = this.order.precio + 10;
              }
              else if(this.order[x] == 'Normal'){
                this.order.precio = this.order.precio + 100;
              }
              else if(this.order[x] == 'Crunchy'){
                this.order.precio = this.order.precio + 130;
              }
              else if(this.order[x] == 'Sarten'){
                this.order.precio = this.order.precio + 150;
              }
              else if(this.order[x] == 'Salsa normal'){
                this.order.precio = this.order.precio + 20;
              }
              else if(this.order[x] == 'Salsa doble'){
                this.order.precio = this.order.precio + 40;
              }
              if(this.order[x]=='chico'){
                this.order.precio = this.order.precio + 20;
              }else if(this.order[x]=='mediano'){
                this.order.precio = this.order.precio + 40;
              }else if(this.order[x]=='grande'){
                this.order.precio = this.order.precio + 60;
              }else if(this.order[x]=='xgrande'){
                this.order.precio = this.order.precio + 80;
              }
            }
            this.string = JSON.stringify(this.order)
            console.log("Este es el strung: ", this.string)
            console.log("Alfinal",JSON.stringify(this.order))
            this.listaOrder.push(this.order)
            localStorage.setItem('listaOrden',JSON.stringify(this.listaOrder))
            
            this.owner={
              nombre: this.firstname,
              apellido:this.lastname,
              direccion:this.address,
              cp:this.zip,
              telefono:this.phone,
              correo:this.email
            }
            }else{
              console.log("No valido")
              this.messageAlert = "Falta rellenar los campos."
              this.alert = true
            }
          console.log("Este es quien pide: ", this.owner)
          
          
          let data = {
            orden: this.string
          }
          console.log("DATA: ",data )
           axios.post('http://127.0.0.1:3333/api/v1/ordenes',data).then(result => console.log("BASE DE TADOS",result))
          })

          this.purchase()
      },
      purchase() {
    stripe.createToken(card).then(function(result:any) {
      //axios.post('http://127.0.0.1:3333/api/v1/ordenes',this.order)
      console.log("LA WEA DE LA TARJETA: ", result)
    });
  },
      submit () {
        this.$validator.validateAll()
      },
    },
    watch: {
      tamaño(nuevoTamaño) {
        localStorage.tamaño = nuevoTamaño;
      },
    }
    
}
</script>

<style lang="stylus">
</style>

