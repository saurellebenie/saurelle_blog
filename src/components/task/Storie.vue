<template>
    <div class="search-bar flex">
        <input type="text" name="" id="" />
        <button>
            <span class="material-symbols-outlined"> search </span>
        </button>
    </div>
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
    <div class="container flex">
        <div class="cartbar">
            <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                :width="width" :height="height" />
        </div>
        <div class="social-media">
            <p>Top social Media Shared</p>
            <div class="face book">
                <div class="icon flex">
                    <span><i class="fab fa-facebook-f"></i></span>
                    <span>Facebook</span>
                </div>
                <span>90k</span>
            </div>
            <div class="what face">
                <div class="icon flex">
                    <span><i class="fa fa-whatsapp"></i></span>
                    <span>Google</span>
                </div>
                <span>90k</span>
            </div>
            <div class="Link face">
                <div class="icon flex">
                    <span><i class="fab fa-linkedin-in"></i></span>
                    <span>linkedin</span>
                </div>
                <span>90k</span>
            </div>
            <div class="twit face">
                <div class="icon flex">
                    <span><i class="fa fa-twitter"></i></span>
                    <span>twiter</span>
                </div>
                <span>90k</span>
            </div>
            <div class="tele face">
                <div class="icon flex">
                    <span><i class="fa fa-telegram"></i></span>
                    <span>telegram</span>
                </div>
                <span>90k</span>
            </div>
        </div>
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
    components: { Bar },
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
                        backgroundColor: "teal",
                        tickLength: 200,
                    },
                ],
            },
            chartOptions: {
                responsive: true,
            },
        };
    },
};
</script>

<style scoped>
/* .container {
    height: auto;
} */

.cartbar {
    width: 400px;
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
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

.stats_box p {
    font-size: 12px;
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

.stats .text {
    color: #333;
    font-weight: bold;
}

.stats p {
    color: rgb(163, 161, 161);
}

/* .stats span {
    color: #333;
    font-weight: bold;
} */

.search-bar input {
    width: 100%;
    outline: none;
}

/**bar status */
.fav,
.com,
.account,
.posts {
    padding: 5px;
    border-radius: 10px;
}

.account {
    background-color: rgb(197, 247, 247);
    color: teal;
}

.posts {
    background-color: rgb(245, 171, 158);
    color: tomato;
}

.fav {
    background-color: rgb(248, 185, 185);
    color: red;
}

.com {
    background-color: rgb(151, 151, 250);
    color: rgb(0, 225, 255);
}

/* social*/
.social-media {
    background-color: #fff;
    width: 40%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 20px;
}

.social-media p {
    margin-bottom: 3rem;
    margin-top: 1rem;
    font-size: 20px;
    font-weight: 400;
}

.face,
.icon {
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin: 5px;
    font-weight: lighter;
}

.icon i {
    padding: 10px;
    font-size: 12px;
    color: brown;
    background-color: rgb(233, 225, 225);
    margin-right: 10px;
    border-radius: 10px;
}

.book i {
    color: blue;
    background-color: rgb(167, 149, 248);
}

.what i {
    color: green;
    background-color: rgb(222, 238, 222);
}

.Link i {
    color: blue;
    background-color: rgb(167, 149, 248);
}

.twit i {
    color: aqua;
    background-color: rgb(218, 247, 247);
}

.tele i {
    color: rgb(92, 255, 71);
    background-color: rgb(247, 229, 225);
}

/* table style */
.table-wrapper {
    width: 100%;
}

.table-wrapper thead {}
</style>