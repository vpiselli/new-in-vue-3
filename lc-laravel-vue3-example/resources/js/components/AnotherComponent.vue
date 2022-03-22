<template>
    <div>Another Component, {{ greetings }}</div>
    <div>Foo: {{ foo }}</div>
</template>

<script>
import { ref } from 'vue'

export default {
    props: ['foo'],

    setup() {
        const greetings = ref('Hello')

        return {
            greetings
        }
    }
}
</script>