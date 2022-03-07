<script>

import moment from 'moment';
import { useI18n } from 'vue-i18n'
import { computed } from 'vue';
export default {
    name: 'Customer',
    props: ['customer'],
    setup({ customer }) {
        const { t } = useI18n();
        const cellphoneformat = customer.cellphone.replace('6', '*').replace('7', '*'); 
        const lastContactFormat = customer.last_contact?.last_contact_human_format;
        const isVisited = computed(() => moment(customer.last_contact?.created_at).isBefore(moment().subtract(60, 'days')));

        return { t, lastContactFormat, cellphoneformat, isVisited, customer }
    }
}
</script>
<template>
    <section class="card mb-4">
        <div class="card__header">
            <p class="client-name">
                {{ customer.name }}
            </p>
            <p class="client-email" v-if="customer.email">{{ customer.email }}</p>
        </div>
        <div class="card__body">
            <div class="client-info">
                <div class="client-info__row">
                    <div class="flex-1 d-flex justify-content-end">
                        <div class="client-info__group text-center">
                            <p>{{ t('cellphone') }}</p>
                            <div class="d-flex align-items-center justify-content-center">
                                <p class="client-info__cellphone">{{ cellphoneformat }}</p>
                                <img v-if="customer.verified_cellphone" src="../../assets/img/success.png" class="cellphone-icon">
                                <img v-if="customer.cliente_repetido" src="../../assets/img/failure.png" class="cellphone-icon">
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="client-info__group text-center">
                            <p> {{ t('highest_ticket_amount') }}</p>
                            <p class="client-info__ticket">{{ customer.highest_ticket_amount_format }}</p>
                        </div>
                    </div>
                </div>
                <div class="client-info__row">
                    <div class="flex-1 d-flex justify-content-end">
                        <div class="client-info__group text-center">
                            <p>{{ t('no_purchase_period') }}</p>
                            <p class="client-info__period">{{ customer.period_without_purchase_human_format }}</p>
                        </div>
                    </div>
                    <div class="flex-1 d-flex">
                        <div class="client-info__group text-center">
                        <p>{{ t('last_contact') }}</p>
                        <div class="d-flex align-items-center justify-content-center"> 
                            <img v-if="!isVisited" src="../../assets/img/warning.png" class="last-contact-icon">
                            <p class="client-info__last-contact">{{ lastContactFormat || 'N/D' }}</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
@import '../../assets/css/helpers/functions/_color.scss';
@import '../../assets/css/variables/_colors.scss';

$mischka: color(mischka);
$blue-bayoux: color(blue-bayoux); 
$white: color(white);

.card {
    margin-bottom: 2em;
}

.card__header {
    padding: .5em;
    background-color: $mischka;
}

.card__body {
    padding: 1em;
    background-color: $white;
}

.client-title {
    color: $blue-bayoux;
    font-weight: 500;
}

.client-name {
    margin: 0;
    text-decoration: underline;
    color:  $blue-bayoux;
    font-weight: 600;
}

.client-email {
    margin: 0;
    color:  $blue-bayoux;
    font-size: 12px;
    word-break: break-all;
}

.client-info__row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    gap: 2em;
}

.cellphone-icon,
.last-contact-icon {
    width: 1em;
    height: 1em;
    max-width: 100%;
}
 
.client-info__group {
    width: 10em;
}

@media (max-width: 360px) {
    .client-info__row {
        gap: 0;
        flex-direction: column;
    }
}
</style>