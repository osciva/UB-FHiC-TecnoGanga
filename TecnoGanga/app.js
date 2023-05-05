const miapp = Vue.createApp({
    data(){
        return{
            productos: [{
                nombre: "Lenovo IdeaPad 3 Gen 6",
                imagen: "./resource/portatil.jpg",
                propiedades:{
                    Precio: "599,00€",
                    Procesador: "Core i5-1135G7",
                    Tamaño: "8GB RAM | 512GB SSD",
                    Pantalla: "15.6 Pulgadas"
                }
            }]
        }
    }
});
miapp.component('filtros', {
    template: `
    <div>
      <h2>Filtros</h2>
      <div class="cont-bor-red" style="display: inline-block;">
        <div v-for="(filtro, index) in filtros" :key="index">
            <input class="filtro-label" type="checkbox" :id="'filtro_' + index" :value="filtro.nombre" v-model="filtroSeleccionados">
            <label :for="'filtro_' + index">{{filtro.nombre}}</label>
        </div>
      </div>
    </div>
  `,
    data() {
        return {
            filtros: [
                {nombre: 'Filtro 1'},
                {nombre: 'Filtro 2'},
                {nombre: 'Filtro 3'},
            ],
            filtroSeleccionados: [],
        }
    },
    methods: {
        // aquí puedes definir los métodos que necesites para tu componente
    },
});
miapp.component('producto',{
    template: `
    <img :src="producto.imagen" class="img" width="200" alt="Foto del producto"> 
    <h2>{{ producto.nombre }}</h2>
    <ul>
      <li v-for="(value, key) in producto.propiedades" :key="key">{{ key }}: {{ value }}</li>
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
miapp.component('hilo', {
    template: `
    <div class="row">
      <div class="col-2 col-container align-items-center">
        <img src="./resource/usario.png" class="img" width="100" alt="Foto del logo">
        <h2>Juan</h2>
      </div>
      <div class="col-10 col-container">
        <div style="font-size: xx-small">El Lenovo IdeaPad 3 Gen 6 es una excelente opción para aquellos que buscan una computadora portátil económica pero capaz de realizar múltiples tareas. Con una pantalla nítida y vibrante, una batería de larga duración y un procesador potente, este portátil superó mis expectativas. Además, su diseño elegante y delgado lo hace fácil de transportar. Lo recomendaría a cualquiera que busque una opción de presupuesto para tareas diarias de computación, como navegación web, edición de documentos y reproducción de medios.</div>
        <div class="interacciones" style="display: flex; justify-content: center; align-items: center;">
          <span style="margin-right: 10px;"><i class="material-icons" style="color: gold">star</i> 127</span>
          <span style="margin-left: 10px;"><i class="material-icons">forum</i> 15</span>
        </div>
      </div>
    </div>
  `,
    data() {
        return {}
    },
    methods: {}
})
miapp.mount('#app');
