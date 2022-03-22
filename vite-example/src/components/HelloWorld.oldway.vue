<template>
	<h2>Dad Joke</h2>

	<div v-if="!isLoading">
		<p v-if="!isError">{{ dadJoke }}</p>
		<p v-else="">There was an error...</p>
	</div>
	<p v-else="">Loading...</p>
</template>

<script>
import axios from 'axios'
import { ref } from 'vue'

export default {
	setup() {
		const dadJoke = ref(null)
		const isLoading = ref(true)
		const isError = ref(false)

		axios.get('https://icanhazdadjoke.com/', {
			headers: {
				'Accept': 'application/json'
			}
		})
		.then(response => {
			isLoading.value = false
			dadJoke.value = response.data.joke
		})
		.catch(error => {
			isLoading.value = false
			isError.value = true
		})

		return {
			dadJoke,
			isLoading,
			isError,
		}
	}
}
</script>

<style>
	a {
		color: #42b983;
	}
</style>
