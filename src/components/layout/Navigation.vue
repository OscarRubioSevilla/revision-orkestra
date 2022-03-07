<template>
<div>

<nav class="navbar bg-cl-solitude">
  <router-link to="/" class="cl-carrot w-600">{{ t('home') }}</router-link>
  <div class="d-flex justify-content-between flex-wrap">
    <div>
        <router-link to="/customers" class="cl-carrot w-600 mr-5">{{ t('customers')}}</router-link>
    </div>
    <div class="d-flex justify-content-end align-items-center">
       <img class="mr-3" :src="require(`../../assets/img/flag_lang_${locale}.png`)"  alt="">
        <select v-model="locale">
            <option value="es">{{ t('lang_es') }}</option>
            <option value="en">{{ t('lang_en') }}</option>
            <option value="cn">{{ t('lang_cn') }}</option>
        </select>
    </div>
  </div>
</nav>

</div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    
    setup() {
        const { locale, t } = useI18n({ useScope: 'global' });
        return {
            locale, t
        }

    }
}
</script>
<style scoped>
    img {
        width: 2em;
    }
</style>