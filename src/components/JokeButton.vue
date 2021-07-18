<template>
    <div>
        <button @click="getJoke()">Get New Joke</button>
    </div>
</template>

<script>
    export default {
        methods: {
            getJoke() {
                this.$store.dispatch("getNewJoke");
            }
        },
    }
</script>

<style scoped>

</style>