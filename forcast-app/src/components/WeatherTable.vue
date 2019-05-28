<template>
    <b-container fluid>
        <weatherItem
        v-for="wthitem in wItems"
        :key="wthitem.validTime"
        :item="wthitem"
        />
        <b-row>
            <b-col>
                <!--<input v-model="lati" placeholder="add latitude">-->
                <!--<input v-model="long" placeholder="add longitude">-->
            </b-col>
        </b-row>    
        <b-row>    
            <b-col>
                <b-button v-on:click="geolocation">Geolocation</b-button><b-button v-on:click="persist">Store current table</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import WeatherItem from './WeatherItem.vue'
import SMHI_API from '../lib/smhi-service';
import MDT from '../lib/make-data-table';

export default {
    components: {
        WeatherItem
    },
    mounted(){
        var loadWeatherItems = localStorage.getItem("weatherItems");
        if(loadWeatherItems == null){
            localStorage.setItem("weatherItems", JSON.stringify([]));
            this.wItems = [];
        }
        else{
            this.wItems = JSON.parse(loadWeatherItems);
        }
    },
    methods: {
        generateTable(lat, lon){
            SMHI_API.getForcast(lat, lon).then(result => {
            console.log(result);
            this.wItems = MDT.makeDataTable(result);
            });
        },
        geolocation: function(){
            navigator.geolocation.getCurrentPosition(this.onSuccess, this.onFail);
        },
        onSuccess(position){
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            this.generateTable(lat, lon);
        },
        onFail(){
            console.log('failed geolocation');
        },
        persist: function(){
            var JSONWItems = JSON.stringify(this.wItems);
            localStorage.setItem("weatherItems", JSONWItems);
        }
    },
    data() {
        return {
            wItems: []
        }
    }
}
</script>

<style>

</style>
