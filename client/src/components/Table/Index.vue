<template>
  <div>
    <table class="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import API from '../../api'

export default {
    name: "Index",
    data() {
      return {
        users: null
      }
    },
    mounted() {
      this.getUsers()
    },
    methods: {
      getUsers() {
        API.get('http://127.0.0.1:8000/api/auth/users')
        .then(res => {
          this.users = res.data.data
        })
      }
    }
}
</script>

<style>
  
</style>