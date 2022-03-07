import { createStore } from 'vuex'
import axios from "axios";
import { API_URL, TOKEN } from "../consts/const";
export default createStore({
    state: {
        customers: [],
        customer: {},
        search: '',
        loading: false
    },
    mutations: {
        setCustomers(state, customers) {
            state.customers = customers;
        },
        setCustomer(state, customer) {
            state.customer = customer;
        },
        setSearch(state, search) {
            state.search = search;
        },
        setLoading(state, loading) {
            state.loading = loading;
        }
    },
    actions: {
        async fetchCustomer({ commit }, id) {
            const url = `${API_URL}customers/${id}`;

            try {
                const { data: { customer } } = await axios.get(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${TOKEN}`
                    }
                });

                commit('setCustomer', customer);

            } catch (error) {
                commit('setCustomer', {});
                console.log(error)
            }
        },
        async fetchCustomers({ commit, state }, { page, search }) {
            const url = `${API_URL}customers`;
            commit('setLoading', true);
            if (search)
                commit('setSearch', search);

            try {
                const { data: { customers } } = await axios.get(url, {
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${TOKEN}`
                    },
                    params: {
                        page,
                        search: state.search,
                        only_search: 1
                    }
                });

                commit('setCustomers', customers);
                commit('setLoading', false);

            } catch (error) {
                commit('setLoading', false);
                console.log(error)
            }
        }
    }
})