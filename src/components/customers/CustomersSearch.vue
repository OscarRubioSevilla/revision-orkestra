<script>
import Spinner from "../atoms/Spinner.vue";
import { ref, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
 
export default {
    components: { Spinner },
    setup() {
        const { t } = useI18n({ useScope: 'global' });
        const store = useStore();
        const enabled = ref(false);
        const params = reactive({
            search: ''
        });
        const handleSearch = () => {
            enabled.value = params.search.length > 2;
        };
        const handleInputErase = () => {
            params.search = '';
            enabled.value = false;
            store.commit('setCustomers', []);
        };
        const handleForm = () => { 
            store.dispatch('fetchCustomers', params);
        };
        return {
            enabled, params, handleSearch, handleForm, handleInputErase, t,
            loading: computed(() => store.state.loading)
        }
    }
}
</script>

<template>
    <form id="search_form" @submit.prevent="handleForm">
        <div class="search">
            <div class="search-input">
                <input 
                    v-model="params.search" 
                    @keyup="handleSearch" 
                    class="search-input__text" 
                    :placeholder="t('enter_name_or_cellphone')" 
                    type="text"
                    autofocus
                    ref="search"
                >
                <button @click="handleInputErase" type="button" class="search-input__close" v-if="enabled">x</button>
            </div>
            <button type="submit" :disabled="!enabled && !loading" class="search-input__button" :class="{ 'active' : enabled && !loading }" id="search_btn">
                 <spinner v-if="loading" /> <span v-else>{{ t('search').toUpperCase() }}</span>
            </button>
        </div>
    </form>
</template>

<style lang="scss">
    @import '../../assets/css/helpers/functions/_color.scss';
    @import '../../assets/css/variables/_colors.scss';

    $heather: color(heather);
    $carrot: color(carrot);
    $white: color(white);

    .search {
        padding: 0 .5em;
        display: flex;
        justify-content: space-between;
        gap: 1em;

        &-input {
            display: flex;
            align-items: center;
            width: 100%;
            position: relative;
            &__text {
                padding: .5em;
                width: 100%;
                border: 1px solid ;
                outline: none;
            }
            &__close { 
                position: absolute;
                right: 0.5em;
                border: 0;
                width: 1.7em;
                height: 1.7em;
                border-radius: 50%;
                font-weight: 600;
                color: $white;
                cursor: pointer;
                background-color: $heather;
                &:active {
                    background-color: $carrot;
                }
            }
            &__button {
                background-color: $heather;
                border: 2px;
                padding: 0.5em 1.5em;
                font-weight: 600;
                color: $white;
                min-width: 12em;
                &.active {
                    background-color: #F49C1E;
                }
            }
        }
        @media (max-width: 767px) {
            flex-direction: column;
        }
    }
</style>