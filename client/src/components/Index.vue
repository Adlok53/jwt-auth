<template>
  <div class="container">

    <ul class="nav justify-content-center mb-5">
        <li class="nav-item">
          <a><router-link class="nav-link" :to="{ name: 'table.index'}">List</router-link></a>
        </li>

        <li class="nav-item">
          <a><router-link v-if="!token" class="nav-link" :to="{ name: 'user.login'}">Login</router-link></a>
        </li>

        <li class="nav-item">
          <a><router-link v-if="!token" class="nav-link" :to="{ name: 'user.registartion'}">Registartion</router-link></a>
        </li>

        <li class="nav-item">
          <a><router-link v-if="token" class="nav-link" :to="{ name: 'user.personal'}">Personal</router-link></a>
        </li>

        <li class="nav-item">
          <a href="#" v-if="token" class="nav-link" @click.prevent="logout">Logout</a>
        </li>
    </ul>
    
    <router-view></router-view>

  </div>
</template>

<script>
// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import api from '../api'

export default {
    name: "Index",

    data() {
      return {
        token: null
      }
    },

    mounted() {
      this.getToken()
    },

    updated() {
        this.getToken()
    },

    methods: {
      getToken() {
        this.token = localStorage.getItem('token')
      },

      logout() {
        api.post('http://127.0.0.1:8000/api/auth/logout')
        .then( res => {
          localStorage.removeItem('token')
          this.$router.push({ name: 'user.login'})
        })
      }
    }
}
</script>

<style>
  .forms-auth {
    max-width: 500px;
    margin: auto;
    padding: auto;
  }
</style>