<template>
    <div class="ui secondary menu">
        <div class="ui container">
            <div class="left menu">
                <router-link class="item" to="/">
                <img class="ui small image" src="../assets/logo.png" alt="Taysu" />                            
                </router-link>                    

                
            </div>

            <div class="right menu">
                <router-link class="item" to="/login" v-if="!token">
                    Iniciar sesión 
                </router-link>
                <router-link class="item" to="/CRUDE">
                    LISTA DE productos
                </router-link>

                <div class="item">
                    <div class="ui icon input">
                        <input type="text" placeholder="Search...">
                        <i class="search link icon"></i>
                    </div>
                </div>

                <template v-if="token">
                    <router-link class="item" to="/orders">Inventario</router-link>
                    <span class="ui item cart">
                        <i class="shopping cart icon" @click="openCart"></i>
                    </span>
                    <span class="ui item lagout" @click="logout">
                        <i class="sign-out icon"></i>
                    </span>
                </template>
            </div>              
        </div>
    </div>  
</template>

<script>
import { getTokenApi, deleteTokenApi } from '../api/token';
export default {
    name:'Menu',

    setup(){
        const token = getTokenApi();

        const logout = () => {
            deleteTokenApi();
            location.replace('/');
        };


        return {
            token,
            logout,
        };
    },




};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
    background-color: #f9f300;   

    .item{
        color: #0a0a0a;
        &:hover {
            color: #1fa1f1;
        }
    }
    .menu.left {
        width: 50%;
        .ui.image {
            width: 70px;
        }
    }

    .menu.rigth{
        width: 50%;
        justify-content: flex-end;

        .logout,
        .cart {
            &:hover {
                cursor: pointer;
            }
        }
    }
}


</style>


