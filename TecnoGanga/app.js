const miapp = Vue.createApp({
    data(){
        return{
            busqueda: "",
            precioMax: 0,
            productos: [{
                nombre: "Lenovo IdeaPad 3 Gen 6",
                imagen: "./resource/portatil.jpg",
                propiedades:{
                    Precio: "599,00€",
                    Procesador: "Core i5-1135G7",
                    Tamaño: "8GB RAM | 512GB SSD",
                    Pantalla: "15.6 Pulgadas"
                },
                precio: 599,
                hilos: [{
                    nombre: "Juan",
                    imagen: "./resource/usario.png",
                    titulo: "Buen producto!",
                    texto: "El Lenovo IdeaPad 3 Gen 6 es una excelente opción para aquellos que buscan una computadora portátil económica pero capaz de realizar múltiples tareas. Con una pantalla nítida y vibrante, una batería de larga duración y un procesador potente, este portátil superó mis expectativas. Además, su diseño elegante y delgado lo hace fácil de transportar. Lo recomendaría a cualquiera que busque una opción de presupuesto para tareas diarias de computación, como navegación web, edición de documentos y reproducción de medios.",
                    estrellas: 120,
                    comentarios: 46
                }]
            },{
                nombre: "ASUS ROG Strix G18",
                imagen: "./resource/portatil2.jpg",
                propiedades:{
                    Precio: "2599,00€",
                    Procesador: "Core i9-13980HX",
                    Grafica: "NVIDIA GeForce RTX 4070",
                    Tamaño: "32 GB RAM DDR5| 1TB SSD",
                    Pantalla: "18 Pulgadas"
                },
                precio: 2599,
                hilos: [{
                    nombre: "Luismi",
                    imagen: "./resource/usario.png",
                    titulo: "Calidad-precio",
                    texto: "Caro pero es lo que hay si quieres lo último y 18\" con este portátil tendrás para unos cuantos años si te lo puedes permitir no lo dudes",
                    estrellas: 17,
                    comentarios: 6
                }]
            }
            ],
            filtros: [{
                titulo: "Marcas",
                filtros: [
                    {nombre: "Asus"},
                    {nombre: "MSI"},
                    {nombre: "Lenovo"},
                    {nombre: "Apple"},
                    {nombre: "HP"},
                    {nombre: "Acer"},
                ]
            },{
                titulo: "Procesador",
                filtros: [
                    {nombre: "Intel Core I7"},
                    {nombre: "Intel Core I5"},
                    {nombre: "AMD Ryzen 7"},
                    {nombre: "AMD Ryzen 5"},
                ]
            }
            ]
        }
    },computed: {
        getPrecioMax() {
            return this.precioMax;
        }
    },
    methods:{
        setPrecioMax(num){
            this.precioMax = num;
        },
        isEmptyBusqueda(){
            return this.busqueda != "";
        },
        setBusqueda(text){
            this.busqueda = text.slice();
        },
        buscar(){
            input = document.getElementById("buscador");
            value = input.value;
            this.setBusqueda(value);
        }
    }
});
miapp.component('filtros', {
    template: `
    <div>
      <h4 class="margen">{{titulo}}</h4>  
      <div class="filtros" style="display: inline-block;">
        <div class="filtros" style="margin-left: 10px; margin-top: 10px" v-for="(filtro, index) in filtros" :key="index">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" :id="'filtro_' + index" :value="filtro.nombre" v-model="filtroSeleccionados">
            <label class="form-check-label" :for="'filtro_' + index">{{filtro.nombre}}</label>
          </div>
        </div>
      </div>
    </div>
  `,
    props: {
        titulo: String,
        filtros: Array,
    },
    data() {
        return {
            filtroSeleccionados: []
        }
    },
    methods: {
        // aquí puedes definir los métodos que necesites para tu componente
    },
});
miapp.component('producto',{
    template: `
    <img :src="producto.imagen" width="200" alt="Foto del producto"> 
    <h2 class="letra-descripción">{{ producto.nombre }}</h2>
    <ul>
      <li v-for="(value, key) in producto.propiedades" :key="key" class="letra-descripción">{{ key }}: {{ value }}</li>
    </ul>
    `,
    props:[
        "producto"
    ],
    data() {
        return {

        }
    },
})
miapp.component('barra-deslizante',{
    template: `
    <div class="filtros">
        <div class="row">
            <div class="col-12 col-container">
                <h4>{{titulo}}</h4>
            </div>
            <div class="col-12 col-container">
                <input type="range" id="price" name="price" :min="min" :max="max" :step="step" @change="onchangeRange()">
            </div>
            <div class="col-12 col-container align-items-center">
                <input type="text" id="priceInput" name="priceInput" style="border: none; background-color: transparent; text-align: center; width: 50%;" @change="onchangeText(value)">
            </div>
        </div>
    </div>
    `,
    props: {
        titulo: {type:String},
        min: {type:String},
        max: {type:String},
        step: {type:String}
    },
    data() {
        return {
        }
    },
    mounted() {
        this.setValue("3000");
    },
    computed: {

    },
    methods: {
        setValue(number){
            priceInput = document.getElementById("price")
            priceInput.value = number;
            priceText = document.getElementById("priceInput");
            priceText.value = number+"€";
            this.$parent.setPrecioMax(number)
        },
        onchangeRange() {
            priceInput = document.getElementById("price")
            currentPrice = parseInt(priceInput.value)
            priceText = document.getElementById("priceInput");
            priceText.value = currentPrice+"€";
            this.$parent.setPrecioMax(currentPrice)
        },
        onchangeText(){
            priceText = document.getElementById("priceInput");
            currentPrice = parseInt(priceText.value);
            priceInput = document.getElementById("price");
            priceInput.value = currentPrice;
            this.$parent.setPrecioMax(currentPrice)
        }
    }
})
miapp.component('hilo', {
    template: `
    <div class="row">
      <div class="col-2 col-container align-items-center">
        <img :src="hilo.imagen" class="img" width="50" alt="Foto del logo">
        <h6>{{hilo.nombre}}</h6>
      </div>
      <div class="col-10 col-container">
        <div style="font-size: larger; font-weight: bold">{{hilo.titulo}}</div>
        <div class="letra-texto">{{hilo.texto}}</div>
        <div class="interacciones" style="display: flex; justify-content: center; align-items: center;">
          <span style="margin-right: 10px;"><i class="material-icons" style="color: gold">star</i> {{hilo.estrellas}}</span>
          <span style="margin-left: 10px;"><i class="material-icons">forum</i> {{hilo.comentarios}}</span>
        </div>
      </div>
    </div>
  `,
    props:[
      "hilo"
    ],
    data() {
        return {}
    },
    methods: {}
})
miapp.mount('#app');
