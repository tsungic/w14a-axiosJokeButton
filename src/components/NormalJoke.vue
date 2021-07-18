<template>
    <div>
        <h3>{{ joke}}</h3>
    </div>
</template>

<script>
    export default {
        computed: {
            joke() {
                return this.$store.state.joke
            }
        },
    }
</script>

<style scoped>

</style>