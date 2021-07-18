<template>
    <div>
        <h3>{{ joke }}</h3>
    </div>
</template>

<script>
    export default {
        computed: {
            joke() {
                //relaces all spaces with under score = " ", "_"
                return this.$store.state.joke.replaceAll(" "," _") 
            }
        },
    }
</script>

<style scoped>

</style>