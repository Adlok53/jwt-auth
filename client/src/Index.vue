<template>
    <div>
        <Navigation></Navigation>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Navigation from '@/components/Nav'

export default {
    name: "Index",
    components: {
        Navigation
    }
}
</script>