<template>
    <div class="container">
        <form class="mt-5">
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control">
                <div class="form-text error">Error</div>
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input v-model="password" type="password" class="form-control">
                <div class="form-text">Error</div>
            </div>
            <button @click.prevent="login" type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Login",

    data() {
      return {
        email: null,
        password: null
      }
    },
    methods: {
        login() {
            axios.post('http://127.0.0.1:8000/api/auth/login', {
                email:this.email,
                password:this.password
            })
            .then(res => {
                localStorage.setItem('token', res.data.authorisation.token)
                this.$router.push({ name: 'index'})
            })
      }
    }
}
</script>

<style>
    form {
        width: 400px;
        margin: 0 auto;
    }

    .error {
        color: red;
    }
</style>