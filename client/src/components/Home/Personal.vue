<template>
    <div>
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <ul class="list-group m-3">
                        <li class="list-group-item disabled">{{ name }}</li>
                        <li class="list-group-item disabled">{{ email }}</li>
                    </ul>
                    <button @click.prevent="logout" type="button" class="btn btn-dark mb-4">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/api'
import axios from 'axios'

export default {

    data() {
        return {
            name: null,
            email: null
        }
    },
    mounted() {
        this.getUser()
    },
    methods: {
        getUser() {
            api.get('http://127.0.0.1:8000/api/auth/me')
            .then( res => {
                this.name = res.data.user.name
                this.email = res.data.user.email
            })
            .catch( res => {
                axios.post('http://localhost:8000/api/auth/refresh', {}, {
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                })
                .then(res => {
                    localStorage.setItem('token', res.data.authorisation.token)
                    this.getUser()
                })
            })
        },
        logout() {
        this.$router.push({ name: 'login'})
        api.post('http://127.0.0.1:8000/api/auth/logout')
        .then( res => {
            localStorage.removeItem('token')
            this.$router.push({ name: 'index'})
        })
      }
    }
}
</script>

<style>
    .btn {
        display: block;
        margin: 0 auto;
        margin-top: 50px;
    }

    .list-group-item {
        display: block;
        margin: 0 auto;
        border: none;
    }
</style>