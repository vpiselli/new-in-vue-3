<template>
    <div class="border">
        <div>{{ fromHelloWorld }}</div>
        <teleport to="#destination">
            <div>I want this to Teleport somewhere else {{ fromHelloWorld }}</div>
        </teleport>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',

    props: {
        msg: String
    },

    data() {
        return {
            fromHelloWorld: 'Hello World Component'
        }
    }
}
</script>

<style scoped>
.border {
    padding: 14px;
    border: 1px solid black;
}
a {
  color: #42b983;
}
</style>
