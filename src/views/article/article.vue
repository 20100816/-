<template>
    <div>
        <hr>
        <h1>{{ title }}</h1>
        <p>{{ avti }}</p>
        <hr>
    </div>
</template>
<script>
export  default{
    props: ['avti','title'],
    data() {
        return {
        };
    },
}
</script>
<style scoped>

</style>
