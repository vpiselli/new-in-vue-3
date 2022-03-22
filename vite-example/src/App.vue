<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<InviteForm v-model:name="inviteName" v-model:email="inviteEmail" />
	<div>{{ inviteName }}</div>
	<div>{{ inviteEmail }}</div>
</template>

<script>
import { ref } from "vue"
import InviteForm from './components/InviteForm.vue';

export default {
	name: 'App',

	components: {
		InviteForm
	},

	setup() {
		const inviteName = ref('')
		const inviteEmail = ref('')

		return {
			inviteName,
			inviteEmail
		}
	}
}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
