<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Customer from '../components/customers/Customer.vue';

export default {
    components: { Customer },
    setup() {
        const route = useRoute();
        const store = useStore();
        store.dispatch('fetchCustomer', route.params.id);

        
        return { 
            customer : computed(() => store.state.customer)
        }
    }
}
</script>
<template>
    <customer :customer="customer" />
</template>