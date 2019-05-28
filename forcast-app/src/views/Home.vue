<template>
    <b-container fluid>
        <b-row>
            <b-col sm="12">
                <h1>Weather forecast</h1>
            </b-col>
        </b-row>
        <b-row>
            <weather-table></weather-table>
        </b-row>
    </b-container>
</template>

<script>
import WeatherTable from '../components/WeatherTable.vue'

export default {
    name: 'home',
    components: {
        WeatherTable
    },
    data(){
        return{

        };
    },
}
</script>

<style>

</style>
