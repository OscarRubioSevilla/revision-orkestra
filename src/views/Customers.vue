<script>
  import CustomersSearch from "../components/customers/CustomersSearch.vue";
  import CustomersWithPagination from "../components/customers/CustomerWithPagination.vue";
  import CustomerNotFound from "../components/customers/CustomerNotFound.vue";

  import { useStore } from 'vuex';
  import { computed } from 'vue';
  import { useI18n } from 'vue-i18n';
          
  export default {
    components: { CustomersSearch, CustomersWithPagination, CustomerNotFound },
    setup () {
      const store = useStore()
      const { t } = useI18n({ useScope: 'global' });

      const isCustomers = computed(() => {
        const customers = store.state.customers;
        if (!customers.data)
          return true;

        return customers.data.length > 0;
      });

      return {
        loading: computed(() => store.state.loading),
        customers: computed(() => store.state.customers),
        isCustomers,
        t
      }
    }
  }
</script>
<template>
  <div class="container-main">
    <customers-search />
    <Transition>
      <customers-with-pagination v-if="!loading" />
    </Transition>
    <Transition>
      <customer-not-found v-if="!isCustomers" />
    </Transition>
  </div>
</template>
