<script>
import router from '@/router'

export default {
    name: "Index",

    mounted() {
        if (localStorage.getItem('token')) {
            this.routePersonal()
        } else {
            this.routeAuth()
        }
    },

    methods: {
        routePersonal() {
            router.push({ name: 'personal'})
        },
        routeAuth() {
            router.push({ name: 'login'})
        },
    }
}
</script>