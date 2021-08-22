<template>
    <div class="container-fluid over-bg">
        <div class="row">
            <div class="col-md-2">
                <img src="../../../assets/purple-bar.svg" class="img-width right-bar" alt="">
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <img src="../../../assets/blue-bar.svg" class="img-width blue-right-bar" alt="">
            </div>
        </div>

        <div class="row">
            <div class="col-md-2">
                <img src="../../../assets/purple-bar.svg" class="img-width left-bar" alt="">
            </div>
        </div>
        <div class="row" style="height: 100vh">
            <div class="col-md-2 border" style="height: 100%"></div>
            <div class="col-md-8" style="height: 100%">

                <div class="row">
                    <div class="col-md-10 offset-md-1 my-5 main mx-auto">
                        <div class="row">
                            <div class="col-md-12">
                                <h5>stripe</h5>
                            </div>
                        </div>

                        <div class="row bg-white my-4">
                            <div class="col-md-10 offset-md-1 my-5">
                                <div class="row">
                                    <div class="col-md-12">
                                        <h6 class="font-weight-700 text-secondary">Sign in to your account</h6>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 my-2">
                                        <InputText :type="'text'" placeholder="Username" :label="'Email'"/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12 my-2">
                                        <InputText :type="'password'" placeholder="Password" :label="'Password'"/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <Checkbox :label="'Stay signed in for a week'"/>
                                    </div>
                                </div>

                                <div class="row my-4">
                                    <div class="col-md-12">
                                        <router-link to="/payments" class="btn btn-primary w-100">
                                            Continue
                                        </router-link>
                                    </div>
                                </div>

                                <div class="row my-4">
                                    <div class="col-md-12 text-center">
                                        <a class="text-primary text-decoration-none">Use single sign-on (SSO) instead</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <p><span class="text-secondary">Don’t have an account?</span> <span><a class="text-primary text-decoration-none px-1">Sign up</a></span></p>
                            </div>

                            <div class="col-md-12">
                                <p class="d-flex align-items-center text-secondary">
                                    <span class="mx-2">&copy;</span>
                                    <span class="mx-2"><a class="text-decoration-none text-secondary">Stripe</a></span> 
                                    <span class="mx-2 mb-2">.</span>
                                    <span class="mx-2"><a class="text-decoration-none text-secondary">Contact</a></span>
                                    <span class="mx-2 mb-2">.</span>
                                    <span class="mx-2"><a class="text-decoration-none text-secondary">Privacy & terms</a></span>
                                </p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-2 border" style="height: 100%"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InputText from '../../../components/InputText.vue'
import Checkbox from '../../../components/CheckBox.vue'

export default defineComponent({
    components: {
        InputText,
        Checkbox,
    },

    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .over-bg {
        background: #E5E5E5;
        height: 100vh;
        overflow-y: scroll;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    .over-bg::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
    .over-bg {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

    .main {
        max-width: 542px;
    }

    .btn-primary {
        background: #635CFF !important;
    }

    .btn-primary:focus {
        outline: none !important;
    }

    .text-primary {
        color: #635CFF !important;
    }

    .font-weight-700 {
        font-weight: 700;
    }

    .img-width {
        max-width: 100%;
    }

    .right-bar {
        position: absolute;
        width: 283px;
        bottom: 31%;
    }

    .blue-right-bar {
        position: absolute;
        width: 155px;
        bottom: 35%;
        left: 1.5rem;
    }

    .left-bar {
        position: absolute;
        width: 283px;
        top: 26%;
        right: 0;
    }

    .grey-dark {
        color: Grey !important;
    }
</style>