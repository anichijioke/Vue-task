<template>
    <div class="container-fluid px-0">
        <label for="" class="w-100 d-flex align-items-center">
            <input type="checkbox" class="input-text" v-bind="$attrs">
            <span class="px-2 text-secondary">{{ label }}</span>
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: [ 'label' ],

    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    
</style>