<template>
    <div class="search-bar flex">
        <input type="text" name="" id="">
        <button>
            <span class="material-symbols-outlined">
                search
            </span>
        </button>
    </div>
    <div class="stats flex">
        <div class="stats_box flex">
            <span class="material-symbols-outlined">
                supervisor_account
            </span>
            <div>
                <span>20000</span>
                <span>Followers</span>
            </div>
        </div>
        <div class="stats_box flex">
            <span class="material-symbols-outlined">
                post_add
            </span>
            <div>
                <span>20000</span>
                <span>Posts</span>
            </div>
        </div>
        <div class="stats_box flex">
            <span class="material-symbols-outlined">
                favorite
            </span>
            <div>
                <span>20000</span>
                <span>Likes</span>
            </div>
        </div>
        <div class="stats_box flex">
            <span class="material-symbols-outlined">
                chat
            </span>
            <div>
                <span>20000</span>
                <span>Comments</span>
            </div>
        </div>
    </div>
    <div class="cartbar">
        <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId" :dataset-id-key="datasetIdKey"
            :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width" :height="height" />
    </div>

</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        chartId: {
            type: String,
            default: 'bar-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            chartData: {
                labels: ['January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'],

                datasets: [{
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
                    backgroundColor: "blue",
                }]
            },
            chartOptions: {
                responsive: true
            }
        }
    }
}
</script>

<style scoped>
.cartbar {
    width: 300px;
}

.stats {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    justify-content: space-between;
    flex-wrap: wrap;
}

.stats_box {
    align-items: center;
    border: 2px solid #eee;
    width: 150px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
}

.stats_box div {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding: 5px;
}

.search-bar {
    margin-top: 20px;
    padding: 5px;
    background-color: #fff;
    border-radius: 10px;
    align-items: center;
}

span {
    color: #333;
}

.search-bar input {
    width: 100%;
    outline: none;
}
</style>