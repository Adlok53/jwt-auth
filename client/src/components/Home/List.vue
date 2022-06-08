<template>
    <div>
        <table class="table mt-5 m-3">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(user, index) in users" :key="index">
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
import api from '@/api'

export default {
    name: "List",

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
        api.get('http://127.0.0.1:8000/api/auth/users')
            .then(res => {
            this.users = res.data.data
        })
        }
    }
}
</script>