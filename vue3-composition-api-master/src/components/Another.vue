<template>
	<div class="border">
		<button @click="isVisible = true">Show modal</button>
		<teleport to="#modal-target">
			<Modal v-if="isVisible" @emitClosed="isVisible = false">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Commodi voluptates facere libero, delectus obcaecati illum?
				Officia placeat incidunt totam pariatur provident tenetur
				iste nisi fugit, facere itaque ex quasi! Veniam.
			</Modal>
		</teleport>
	</div>
</template>

<script>
import Modal from './Modal.vue'

export default {
	components: {
		Modal,
	},

	data() {
		return {
			isVisible: false
		}
	}
}
</script>
