<script>

import { useI18n } from 'vue-i18n';
        
export default {
 setup () {
    const { t } = useI18n({ useScope: 'global' });
    return { t }
  }
}
</script>

<template>
    <div>
        <div class="d-flex flex-column align-items-center justify-content-center">
        <img src="../../assets/img/search_no_result.png" class="w-25">
        <h3>{{ t('no_found_results') }}</h3>
        </div>
    </div>
</template>