<template>
    <div class="container-fluid px-0">
        <label for="" class="w-100">
            <span class="d-flex justify-content-between"> 
                <span class="text-secondary font-weight-light">{{ label }} </span>
                <span><a href="" class="text-decoration-none" v-if="type === 'password'">Forgot your password?</a></span>
            </span>
            <input :type="type" class="input-text" v-bind="$attrs">
        </label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: [ 'label', 'type' ],

    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .input-text {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #E3E8EE;
        border-radius: 4px;
        box-sizing: border-box;
    }

    .input-text:focus {
        outline: none;
    }

</style>