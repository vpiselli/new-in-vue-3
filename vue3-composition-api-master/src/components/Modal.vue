<template>
    <div class="modal">
        <div class="container">
            <p>
                <slot></slot>
            </p>
            <div>
                <button @click="emitClosed">Close Modal</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        emitClosed() {
            this.$emit('emitClosed')
        }
    }
}
</script>
