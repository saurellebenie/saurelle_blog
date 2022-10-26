<template>
    <h1 class="mb-4 text-3xl lg:text-4xl font-bold text-gray-900 :text-white text-center">DoughnutChart </h1>
    <DoughnutChart />
    
    <h1 class="mb-4 text-3xl lg:text-4xl font-bold text-gray-900 :text-white text-center">CustomChart </h1>
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