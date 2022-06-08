<template>
    <div>
        <ul class="navbar bg-dark justify-content-center">
            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'list'}">Users list</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'personal'}">Personal page</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'login'}">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link text-white" :to="{ name: 'registration'}">Registration</router-link>
            </li>
        </ul>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>