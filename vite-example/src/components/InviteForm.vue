<template>
    <form action="">
        <div>
            <label for="name">Name</label>
            <input
                type="text"
                :value="name"
                @input="event => $emit('update:name', event.target.value)"
            >
        </div>

        <div>
            <label for="email">Email</label>
            <input
                type="text"
                :value="email"
                @input="event => $emit('update:email', event.target.value)"
            >
        </div>
    </form>
</template>

<script>
export default {
    props: [ 'name', 'email' ]
}
</script>