<template>
    <b-row>
        <b-col>
            <!--<div class="forecast-time">-->
                <span>{{item.validTime}}</span>
                <span>{{item.status}}</span>
            <!--</div>-->
        </b-col>
    </b-row>
</template>

<script>
export default {
    props: {
        item: {
            type: Object, required: true
        }
    }
}
</script>

<style>

</style>
