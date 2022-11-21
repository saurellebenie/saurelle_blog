<template>
    <h1 class="mb-4 text-2xl lg:text-2xl font-bold text-gray-900 :text-white text-center">Doughnut-Chart </h1>
    <DoughnutChart />
    
    <h1 class="mb-4 text-2xl lg:text-2xl mt-4 font-bold text-gray-900 :text-white text-center">Custom-Chart </h1>
    <CustomChart />
</template>
<script>
import DoughnutChart from '../Chart/DoughnutChart';
import CustomChart from '../Chart/CustomChart'

export default {
    components: {
        DoughnutChart,
        CustomChart
    }
}
</script>