<template>
<basic-layouts>
    <div>
    <transition name="fade">
        <div class="popup-modal" id="a" v-if="isVisible">
            <div class="window">
                <slot>
                    <h1> AÑADIR PRODUCTO </h1>
                    <label> Codigo </label>
                    <br>
                    <input v-model="codigo_new" type="text" placeholder="00a">
                    <br>
                    <br>
                    <label> Producto </label>
                    <br>
                    <input v-model="producto_new" type="text"  placeholder="pañoleta tiburon">
                    <br>
                    <br>
                    <label> Categoria </label>
                    <br>
                    <input v-model="categoria_new" type="text"  placeholder="pañoletas">
                    <br>
                    <br>
                    <label> Talla </label>
                    <br>
                    <input v-model="talla_new" type="text"  placeholder="talla S">
                    <br>
                    <br>
                    <label> Cantidad </label>
                    <br>
                    <input v-model="cantidad_new" type="number" id="cantidad" placeholder="10">
                    <br>
                    <br>
                    <label> Precio </label>
                    <br>
                    <input v-model="precio_new" type="text"  placeholder="$ 25.000">
                </slot>
                <br>
                <br>
                <button v-on:click= "confirmar" class="positive ui button" V->CONFIRMAR</button>

                <button v-on:click= "cancelar" class="negative ui button">CANCELAR</button>
            </div>
        </div>
    </transition>
    <header>
    <br>
    <br>
    </header>
    <section id="Si">
        <h1 id="titulo">
            LISTA DE PRODUCTOS
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button v-on:click= "agregar" class="positive ui button" V->AGREGAR</button>

            <button v-on:click= "refresh" class="ui icon button" id="act">
                <i class="refresh icon"></i>
            </button>
            </h1>
    </section>
    <br><br><br>
    <section>
        <table id="tabla">
            <thead>
                <tr>
                    <th>codigo</th>
                    <th>Nombre Producto</th>
                    <th>Categoria</th>
                    <th>Talla</th>
                    <th>Cantidad</th>
                    <th>Precio</th>   
                    </tr>
            </thead>
            <tbody>
                <tr v-for="producto in this.productos" :key="producto._id">
                    <td>{{ producto.codigo }}</td>
                    <td>{{ producto.producto }}</td>
                    <td>{{ producto.categoria }}</td>
                    <td>{{ producto.talla }}</td>
                    <td>{{ producto.cantidad }}</td>
                    <td>{{ producto.precio }}</td>
                    <td>
                        <!-- Botón para guardar la información actualizada -->
                        <span v-if="formActualizar && idActualizar == index">
                            <button @click="guardarActualizacion(index)" class="btn btn-success">Guardar</button>
                        </span>
                        <span v-else>
                            <!-- Botón para mostrar el formulario de actualizar -->
                            <button @click="verFormActualizar(index)" class="ui icon button" id="editar">
                                <i class="edit icon"></i>
                            </button>
                            <!-- Botón para borrar -->
                            <button @click="borrarProducto(index)" class="negative ui button">Borrar</button>
                            </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>

</div>
</basic-layouts>


</template>

<script>
import BasicLayouts from '../layouts/BasicLayouts.vue';
export default {
    name: 'CRUDE',
    components: {
        BasicLayouts,
    },
    setup() {
        
    },
    data: () => ({
        
        
        formActualizar: false,
            // La posición de tu lista donde te gustaría actualizar 
        idActualizar: -1,
            // Input nombre dentro del formulario de actualizar
        codigoActualizar: '',
            // Input edad dentro del formulario de actualizar
        productoActualizar: '',
        productos: [
            {
                producto_id: + new Date(), 
                codigo: "01ph",
                producto: "Pañoleta hamburguesa",
                categoria: "Pañoletas",
                talla: "Talla S",
                cantidad: 4,
                precio: '$ 18.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "02ph",
                producto: "Pañoleta hamburguesa",
                categoria: "Pañoletas",
                talla: "Talla M",
                cantidad: 4,
                precio: '$ 20.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "03ph",
                producto: "Pañoleta hamburguesa",
                categoria: "Pañoletas",
                talla: "Talla L",
                cantidad: 2,
                precio: '$ 24.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "01am",
                producto: "Arnes Militar",
                categoria: "Arneses",
                talla: "Talla M",
                cantidad: 5,
                precio: '$ 35.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "01bd",
                producto: "Buso dinosaurio",
                categoria: "busos",
                talla: "Talla s",
                cantidad: 5,
                precio: '$ 35.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "04ps",
                producto: "Pañoleta Stich",
                categoria: "Pañoletas",
                talla: "Talla s",
                cantidad: 6,
                precio: '$ 18.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "05ps",
                producto: "Pañoleta Stich",
                categoria: "Pañoletas",
                talla: "Talla M",
                cantidad: 4,
                precio: '$ 20.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "06ps",
                producto: "Pañoleta Stich",
                categoria: "Pañoletas",
                talla: "Talla L",
                cantidad: 2,
                precio: '$ 24.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "07pb",
                producto: "Pañoleta Bombones",
                categoria: "Pañoletas",
                talla: "Talla s",
                cantidad: 1,
                precio: '$ 18.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "08pb",
                producto: "Pañoleta Bombones",
                categoria: "Pañoletas",
                talla: "Talla M",
                cantidad: 1,
                precio: '$ 20.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "08pb",
                producto: "Pañoleta Bombones",
                categoria: "Pañoletas",
                talla: "Talla L",
                cantidad: 1,
                precio: '$ 24.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "02bc",
                producto: "Buso conejo",
                categoria: "busos",
                talla: "Talla s",
                cantidad: 3,
                precio: '$ 35.000',
            },

            {
                producto_id: + new Date(), 
                codigo: "03bs",
                producto: "Taysu Shark Buso",
                categoria: "Busos",
                talla: "Talla s",
                cantidad: 2,
                precio: '$ 35.000',
            },
            ], 
        isVisible: false
    }),
    
    methods: {
        
        agregar: function (event) {
            this.open()
        },
        refresh: function (event) {
            this.$forceUpdate();
        },
    
        editar() {},
        
        confirmar: function (event) {
            this.productos.push (
                
                {
                    producto_id: + new Date(),
                    codigo: this.codigo_new,
                    producto: this.producto_new,
                    categoria: this.categoria_new,
                    talla: this.talla_new,
                    cantidad: this.cantidad_new,
                    precio: this.precio_new,
                },
            )
            this.close()
        },
        cancelar: function (event) {
            this.close()
        },
        
        open() {
            this.isVisible = true
            
        },
        close() {
            this.isVisible = false
        },
        borrarProducto: function (producto_id) {
                // Borramos de la lista
            this.productos.splice(producto_id, 1);
        },
    },
    
    computed: {
    }
}
</script>



<style scoped>
section {
    width: 80%;
    margin: 0 auto;
    align-items: center;
}
#titulo {
    background-color:rgb(218, 206, 32);
    width: 70%;
    float: left;
    text-align: center;
}
h1 {
    text-align: center;
}
label {
    font-style: oblique;
}
button {
    vertical-align: inherit;
}
#editar {
    background-color: aqua;
}
#act {
    background-color:beige;
    width: 12%;
    justify-items: center;
}
#tabla {
    width: 70%;
    background-color:rgb(205, 228, 228);
}
tbody {
    background-color: white;
    text-align: center;
}
.popup-modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    z-index: 1; }
    .window {
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
}
</style>