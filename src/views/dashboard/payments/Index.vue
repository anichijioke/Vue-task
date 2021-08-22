<template>
    <div class="container-fluid">
        <div class="row pb-2 border-bottom">
            <div class="col-md-8">
                <span class="d-flex">
                    <span class="mr-2">
                        <SearchIcon />
                    </span>
                    <span class="mx-2">
                        <input type="text" class="border-0 w-100 outline-none" style="outline: none" name="" id="" placeholder="Search...">
                    </span>
                </span>
            </div>
            <div class="col-md-4 d-flex justify-content-end">
                <span class="mx-2"><bell-icon /></span>
                <span class="mx-2"><HelpIcon /></span>
                <span class="mx-2"><AccountIcon /></span>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-4">
                <h3 style="font-size: 28px; color: #1A1F36">Payments</h3>
            </div>
            <div class="col-md-8 d-flex justify-content-end">
                <span class="mx-2 btn btn-active d-flex align-items-center btn-height">
                    <filter-icon />
                    <span class="mx-2">Filter</span>
                </span>
                <span class="mx-2 btn btn-active d-flex align-items-center btn-height">
                    <export-icon />
                    <span class="mx-2">Export</span>
                </span>
                <span class="mx-2 flex py-2 create-payment-btn px-2 text-white d-flex align-items-center btn-height">
                    <AddIcon />
                    <span class="mx-2 text-white">Create payment</span>
                </span>
            </div>
        </div>

        <div class="row mt-3 border-bottom py-2">
            <div class="col-md-12">
                <a class="mr-3 text-decoration-none text-dark cursor-pointer" :class="{ 'active-tab': currentTab === 0 }"
                    @click="() => currentTab = 0"
                >
                    All
                </a>
                <a class="mx-3 text-decoration-none text-dark cursor-pointer" :class="{ 'active-tab': currentTab === 1 }"
                    @click="() => currentTab = 1"
                >
                    Succeeded
                </a>
                <a class="mx-3 text-decoration-none text-dark cursor-pointer" :class="{ 'active-tab': currentTab === 2 }"
                    @click="() => currentTab = 2"
                >
                    Refunded
                </a>
                <a class="mx-3 text-decoration-none text-dark cursor-pointer" :class="{ 'active-tab': currentTab === 3 }"
                    @click="() => currentTab = 3"
                >
                    Uncaptured
                </a>
            </div>
        </div>

        <div class="row py-3 border-bottom">
            <div class="col-md-1">
                <input type="checkbox" name="" id="">
            </div>
            <div class="col-md-3">
                <span class="text-uppercase">Amount</span>
            </div>
            <div class="col-md-4">
                <span class="text-uppercase">Description</span>
            </div>
            <div class="col-md-2">
                <span class="text-uppercase">Customer</span>
            </div>
            <div class="col-md-2">
                <span class="text-uppercase">Date</span>
            </div>
        </div>

        <div class="row py-2 border-bottom small-text d-md-flex align-items-center" v-for="(payment, index) in filteredPayments" :key="index">
            <div class="col-md-1">
                <input type="checkbox" name="" id="">
            </div>
            <div class="col-md-3 px-0">
                <span class="small-text  d-flex align-items-center"><span class="px-2 font-weight-500">{{ payment.currency }}{{ payment.amount }}</span> <span class="p-2 success-payment d-flex align-items-center small-height">{{ payment.status }} <span class="px-2"><CheckIcon /></span></span></span>
            </div>
            <div class="col-md-4">
                <span class="small-text">{{ payment.id }}</span>
            </div>
            <div class="col-md-2">
                <span class="small-text">{{ formatEmail(payment.email) }}</span>
            </div>
            <div class="col-md-2 d-flex justify-content-between">
                <span class="small-text">{{ payment.date }}</span>
                <span><ElipsisIcon /></span>
            </div>
        </div>

        <div class="row mt-3 d-md-flex align-items-center">
            <div class="col-md-8">
                <a class="text-decoration-none">{{ filteredPayments.length }} results</a>
            </div>
            <div class="col-md-4 d-flex justify-content-end">
                <a class="btn btn-inactive btn-height d-flex align-item-center">Previous</a>
                <a class="btn btn-active mx-3 btn-height d-flex align-item-center">Next</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import ExportIcon from '../../../components/icons/export.vue'
import AccountIcon from '../../../components/icons/account.vue'
import SearchIcon from '../../../components/icons/search.vue'
import AddIcon from '../../../components/icons/add.vue'
import FilterIcon from '../../../components/icons/filter.vue'
import BellIcon from '../../../components/icons/bell.vue'
import HelpIcon from '../../../components/icons/help.vue'
import CheckIcon from '../../../components/icons/check.vue'
import ElipsisIcon from '../../../components/icons/elipsis.vue'
export default defineComponent({
    components: {
        SearchIcon,
        ExportIcon,
        AccountIcon,
        AddIcon,
        FilterIcon,
        BellIcon,
        HelpIcon,
        CheckIcon,
        ElipsisIcon,
    },

    setup () {
        const currentTab = ref(0);

        const statuses = [ '', 'succeeded', 'refunded', 'uncaptured' ];

        const payments = [
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'refunded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'refunded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'refunded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'uncaptured'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'uncaptured'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'uncaptured'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
            { id: 'fe3d8216-58f9-4dc1-aaef-2f19463b5258', currency: 'US$', amount: 352.22, email: 'hefovo87@ereyemind.com', date: '7 Jul, 14:04', status: 'succeeded'  },
        ]

        const formatEmail = email => email.length < 15 ? email : `${email.substring(0, 15)}...`;

        const filteredPayments = computed(() => {
            if (!payments) return [ ];
            if (!currentTab.value) return payments;
            return payments.filter(i => i.status === statuses[currentTab.value]);
        })
        return {
            payments,
            formatEmail,
            currentTab,
            filteredPayments,
        }
    }
})
</script>

<style scoped>
    * {
        color: #4F566B;
        font-size: 14px;
    }

    .border-bottom {
        border-bottom: 1px solid #E3E8EE !important;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .success-payment {
        background: #CBF4C9;
        color: #0E6245;
        border-radius: 4px;
    }

    .font-weight-500 {
        font-weight: 500;
    }

    .btn-active {
        background: #FFFFFF;

        box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
    }

    .btn-inactive {
        background: #FFFFFF;
        opacity: 0.5;

        box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px rgba(60, 66, 87, 0.16), 0px 1px 1px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
    }

    .active-tab {
        padding: .7rem 0;
        border-bottom: 2px solid #5469D4;
        color: #5469D4 !important;
    }

    .create-payment-btn {
        background: #5469D4;

        box-shadow: 0px 2px 5px rgba(60, 66, 87, 0.08), 0px 0px 0px 1px #5469D4, 0px 1px 1px rgba(0, 0, 0, 0.12);
        border-radius: 4px;
    }

    .btn-height {
        max-height: 30px;
    }

    .small-height {
        max-height: 29px;
    }
</style>