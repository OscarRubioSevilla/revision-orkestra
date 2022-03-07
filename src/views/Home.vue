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
    <div class="d-flex justify-content-center align-items-center flex-column">
      <img class="w-25" src="../assets/img/searching.png">
      <h3>{{ t('enjoy_searching') }}</h3>
    </div>
</template>

