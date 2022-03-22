require('./bootstrap');

import { createApp } from 'vue'
import ExampleComponent from './components/ExampleComponent'
import AnotherComponent from './components/AnotherComponent'

createApp({
    components: {
        ExampleComponent,
        AnotherComponent
    }
}).mount('#app')