<template>
    <div class="echarts">
        <!-- <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart> -->
            <p>我是echarts</p>
            <div style="width:90%;height:500px" ref="chart"></div>
    </div>

</template>

<script>
const echarts = require('echarts');
    export default {
        data () {
            return {
                // orgOptions: {},
            }
        }, 
        methods:{
            initCharts() {
                let myChart = echarts.init(this.$refs.chart);
                // let that = this;
                // 绘制图表
                myChart.setOption({
                    
                   title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
                    
                });
            }
			
        }, 
        mounted() {
            this.initCharts()
        }
    }
</script>