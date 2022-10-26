<template>
    <h1>DoughnutChart </h1>
    <DoughnutChart />
    
    <h1>CustomChart </h1>
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