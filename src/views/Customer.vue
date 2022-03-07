<script>
import { computed, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Customer from '../components/customers/Customer.vue';

export default {
    components: { Customer },
    async setup() {
        const route = useRoute();
        const store = useStore();
        const customer = computed(() => store.state.customer);
        await store.dispatch('fetchCustomer', route.params.id);
        return { 
            customer
        }
    }
}
</script>
<template>
<Suspense>
    <Customer :customer="customer" />
</Suspense>
</template>