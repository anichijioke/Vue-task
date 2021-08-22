<template>
    <div class="container-fluid" style="height: 100vh">
        <div class="row">
            <div class="col-2 side-nav">
                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><store-icon /></span>
                        <p class="mb-0 mx-2">Store name <span class="mx-2"><chevron-down-icon /></span></p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><home-icon /></span>
                        <p class="mb-0 mx-2">Home </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 ">
                        <div class="d-flex align-items-center">
                            <span class="pr-2"><payments-icon /></span>
                            <p class="mb-0 mx-2">Payments </p>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <ul class="list">
                                    <li class="item py-1">Reviews</li>
                                    <li class="item py-1">Disputes</li>
                                    <li class="item py-1">Top ups</li>
                                    <li class="item py-1">Collected fees</li>
                                    <li class="item py-1">Transfers</li>
                                    <li class="item py-1">Payouts</li>
                                    <li class="item py-1">All transactions</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><BalancesIcon /></span>
                        <p class="mb-0 mx-2">Balances </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><customers-icon /></span>
                        <p class="mb-0 mx-2">Customers </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><connected-accounts-icon /></span>
                        <p class="mb-0 mx-2">Connected accounts </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><products-icon /></span>
                        <p class="mb-0 mx-2">Products </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><reports-icon /></span>
                        <p class="mb-0 mx-2">Reports </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><developers-icon /></span>
                        <p class="mb-0 mx-2">Developers </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><Switch /></span>
                        <p class="mb-0 mx-2">View test data </p>
                    </div>
                </div>

                <div class="row my-3">
                    <div class="col-md-12 d-flex align-items-center">
                        <span class="pr-2"><settings-icon /></span>
                        <p class="mb-0 mx-2">Settings </p>
                    </div>
                </div>
            </div>
            <div class="col-10 mx-auto py-3 main-con">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BalancesIcon from '../../components/icons/balances.vue'
import CustomersIcon from '../../components/icons/customers.vue'
import ConnectedAccountsIcon from '../../components/icons/connected-accounts.vue'
import ProductsIcon from '../../components/icons/products.vue'
import ReportsIcon from '../../components/icons/reports.vue'
import DevelopersIcon from '../../components/icons/developers.vue'
import SettingsIcon from '../../components/icons/settings.vue'
import HomeIcon from '../../components/icons/home.vue'
import StoreIcon from '../../components/icons/store.vue'
import PaymentsIcon from '../../components/icons/payments.vue'
import ChevronDownIcon from '../../components/icons/chevron-down.vue'
import Switch from '../../components/icons/switch.vue'

export default defineComponent({
    components: {
        BalancesIcon,
        CustomersIcon,
        ConnectedAccountsIcon,
        ProductsIcon,
        ReportsIcon,
        DevelopersIcon,
        SettingsIcon,
        HomeIcon,
        StoreIcon,
        PaymentsIcon,
        ChevronDownIcon,
        Switch,
    },

    setup () {
    
        return {
        }
    }
})
</script>

<style scoped>
    * {
        color: #4F566B;
        font-size: 14px;
    }

    .list {
        list-style: none;
    }

    .side-nav {
        min-width: 200px;
        max-width: 230px;
        /* Grey 100 */

        background: #F7FAFC;
        box-shadow: inset -1px 0px 0px #E3E8EE;
        height: 100vh;
        overflow-y: scroll
    }

    .main-con {
        height: 100vh;
        overflow-y: scroll
    }

  
</style>