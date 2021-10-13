<template>

  <BasicLayouts>
    
    
      <Nav>

        <vueper-slides>
          <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
        </vueper-slides>

      </Nav>
    
    
      <br>
      <br>
      <br>

      <section>
        <h1 id="titulo">CREADORES IMPULSORES DE TAYSU</h1>
        <div class="texto-encima">TAY</div>
        <div class="texto-encima-suso">SUSO</div>

        <img id="tay" src="../assets/tay_arnes.jpg" alt="pastor aleman"/>
        
        <img id="suso" src="../assets/suso_corbatin.jpeg" alt="gato blanco"/>
      </section>
    
    
      <aside>
        <p>Taysu es una comunidad llena de amor y diversión, donde
        soñamos con darle amor a todos los peluditos. Para lograr
        esto, todos los productos que realizamos los hacemos con
        mucho esfuerzo y dedicación y sobre todo con mucho amor 
        para que quede perfecto para que tu peludito sienta ese 
        cariño que taysu quiere transmitirle </p>

        <div>
          <br>
          <p> Que esperas para unirte a la taysu familia </p>
          <button id="unirme" v-on:click= "dirigir" class="positive ui button" V->UNIRME</button>
          <br>
          <br>
        </div>


      </aside>
    
  </BasicLayouts> 
</template>

<script>
import BasicLayouts from '../layouts/BasicLayouts.vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'Home',
  components: {
    BasicLayouts,
    VueperSlides, 
    VueperSlide
  },
  
  setup() {
    
  },
  data: () => ({
  slides: [
    {
      image: require("../assets/imagenes_nav/murcielago.jpeg") 
    }, 
    
    {
      image: require("../assets/imagenes_nav/buso.jpg") 
    },

    {
      image: require("../assets/imagenes_nav/foto_perros.jpg") 
    }
  ]
}),

methods: {

  dirigir: function (event) {
            this.$router.push('Register') 
        },
}
  
};
</script>


<style scoped>

#tay {
  width: 25%;
  height: 25%;
}

#suso {
  width: 25%;
  height: 25%;
  float: horizontal;
}

#titulo {
  background-color:rgb(218, 206, 32);
  width: 50%;
}

section {
  width: 70%;
  float: left;
}

aside {
  width: 30%;
  float: left;
  
}

.texto-encima {
  position: absolute;
  background-color:rgb(218, 206, 32);
  font-size: 200%;
  
}

.texto-encima-suso {
  
  text-align: center;
  
  font-size: 200%;
  width: 60%;
  
}

.right {
  float:right;
}
p {
  font-size: 140%;
  float:inline-start;
  text-align: center;
}

#unirme {
  float: center;
  margin-left: 50%;
  transform: translateX(-50%);
}



</style>

