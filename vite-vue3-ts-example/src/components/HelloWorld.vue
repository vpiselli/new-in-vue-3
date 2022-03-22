<script lang="ts">
import { ref, defineComponent, reactive } from 'vue'

interface State {
  title: string,
  year: number,
  todos: Todo[]
}

interface Todo {
  name: string,
  isComplete: boolean
}

export default defineComponent({
  name: 'HelloWorld',

  props: {
    msg: String
  },

  setup() {
    const count = ref(0)
    // const state: State = reactive({
    const state = reactive<State>({
      title: '',
      year: 2020,
      todos: [
        {
          name: 'Finish screencast',
          isComplete: false
        },
        {
          name: 'Go to store',
          isComplete: true
        },
      ]
    })

    function increment(): void  {
      count.value++
      // count.value = "A string" // (This will not work)
      // count.value = pow('another', 'error in ts')
    }

    function pow(x:number, y:number): number {
      return Math.pow(x,y)
    }

    return {
      count,
      increment
    }
  }

})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="increment">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
