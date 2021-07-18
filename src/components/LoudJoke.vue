<template>
    <div>
        <h3>{{ joke }}</h3>
    </div>
</template>

<script>
    export default {
        computed: {
            joke() {
                return this.$store.state.joke.toUpperCase(); 
            }
        },
    }
</script>

<style scoped>

</style>