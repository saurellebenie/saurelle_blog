<template>
   
    <div class="stats flex">
        <div class="stats_box flex">
            <span class="material-symbols-outlined account">
                supervisor_account
            </span>
            <div>
                <span class="text">20000</span>
                <p>Followers</p>
            </div>
        </div>
        <div class="stats_box flex">
            <span class="material-symbols-outlined posts"> post_add </span>
            <div>
                <span class="text">20000</span>
                <p>Posts</p>
            </div>
        </div>
        <div class="stats_box flex">
            <span class="material-symbols-outlined fav"> favorite </span>
            <div>
                <span class="text">20000</span>
                <p>Likes</p>
            </div>
        </div>
        <div class="stats_box flex">
            <span class="material-symbols-outlined com"> chat </span>
            <div>
                <span class="text">20000</span>
                <p>Comments</p>
            </div>
        </div>
    </div>
    <div class="container-blog">
    
        <div class="cartbar">
            <h1>Visitors</h1>
            <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                :width="800" :height="height" />
        </div>
        
    </div>
    <div class="lastpos">
        <Lastpost />
    </div>
</template>
  
<script>
import { Bar } from "vue-chartjs";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";
import Lastpost from "./Lastpost.vue";
ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);
export default {
    name: "BarChart",
    components: { Bar, Lastpost },
    props: {
        chartId: {
            type: String,
            default: "bar-chart",
        },
        datasetIdKey: {
            type: String,
            default: "label",
        },
        width: {
            type: Number,
            default: 300,
        },
        height: {
            type: Number,
            default: 300,
        },
        cssClasses: {
            default: "",
            type: String,
        },
        styles: {
            type: Object,
            default: () => { },
        },
        plugins: {
            type: Object,
            default: () => { },
        },
    },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                        label: 'Visitor',
                        data: [5, 10, 15, 25, 45, 70, 115, 100, 70, 75, 70, 60],
                        backgroundColor: "#333",
                        tickLength: 200,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false
            },
        };
    },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
  font-size: 2em;
  width: 100%;
}
.container-blog {
    height: auto;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
}
.cartbar {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 8px 8px 16px #3232321a;
    text-align: center;
    font-weight: bold;
}

.stats {
    width: 100%;
    margin-top: 10px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
}

.stats_box {
    align-items: center;
    border: 2px solid #eee;
    width: 150px;
    height: 80px;
    padding: 5px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 8px 8px 16px #3232321a;
    justify-content: space-around;
}

.stats_box p {
    font-size: 15px;
    
}



.stats .text {
    color: rgb(240, 153, 113);
    font-weight: bold;
}

.stats p {
    color: rgb(163, 161, 161);
}

/* .stats span {
    color: #333;
    font-weight: bold;
} */



/**bar status */
.fav,
.com,
.account,
.posts {
    padding: 5px;
    border-radius: 10px;
}

.account {
    background-color: rgb(121, 255, 255);
    color: teal;
}

.posts {
    background-color: rgb(248, 112, 88);
    color: rgb(136, 29, 10);
}

.fav {
    background-color: rgb(250, 102, 102);
    color: rgb(128, 6, 6);
}

.com {
    background-color: rgb(93, 93, 250);
    color: rgb(1, 90, 102);
}



/* media querie */

@media (max-width: 768px) {
    bar{
        width: 300px;
        height: 300px;
    }
    .social-media{
       width: 100%;
    }
    .stats{
        width: 100%;
    }
    /* .stats_box{
        wi
    } */

    /* recent post */
}
</style>