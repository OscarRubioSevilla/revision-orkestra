<template>
    <div>
      <pagination class="mt-3" :data="customers" align="right" :limit="1" @pagination-change-page="getResults"></pagination>
      <customer v-for="(customer, index) of customers.data" :key="index" :customer="customer" />
      <pagination :data="customers" align="right" :limit="1" @pagination-change-page="getResults"></pagination>
    </div>
</template>
<script>
import Spinner from "../atoms/Spinner.vue";
    
import Pagination from 'laravel-vue-pagination';
import Customer from "./Customer.vue";
import CustomersSearch from "./CustomersSearch.vue";
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: { Pagination, Customer, CustomersSearch, Spinner },
   setup () {
    const store = useStore()
    const getResults = (page) => {
      store.dispatch('fetchCustomers', { page })
    };
    return {
      customers: computed(() => store.state.customers),
      loading: computed(() => store.state.loading),
      getResults
    }
  }
}
</script>