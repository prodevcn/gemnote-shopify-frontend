<template>
  <div class="content">
    <div class="md-layout">
        <div class="md-layout-item md-medium-size100 md-xsmall-size-100 md-size-100">
            <p class="welcoming-text">Welcome to Gemnote, {{ username | getFirstName}} !</p>
        </div>
        <div class="md-layout-item md-medium-size100 md-xsmall-size-100 md-size-50">
            <default-card>
               <template slot="left-section">
                   <p class="">Total nubmer of orders this month</p>
                   <p class="order">{{orders | getIntegerFormat}}</p>
               </template>
               <template slot="right-section">
                   <p>Average number of shipments / month</p>
                   <div class="footer-section">
                        <p class="order">{{shipments | getIntegerFormat}}</p>
                        <default-button label="View orders"></default-button>
                   </div>
               </template>
            </default-card>
        </div>
        <div class="md-layout-item md-medium-size100 md-xsmall-size-100 md-size-50">
            <default-card>
               <template slot="left-section">
                    <doughnut-chart :chartData="inventoryChart.data" :chartOptions="inventoryChart.options"></doughnut-chart>
                    <!-- <img src="../assets/img/circle.png" alt="circle" class="inventory-circle"> -->
               </template>
               <template slot="right-section">
                   <p class="">Current Inventory</p>
                   <div class="footer-section">
                        <p class="order">{{inventory | getIntegerFormat}}</p>
                        <default-button label="Manage inventory"></default-button>
                   </div>
               </template>
            </default-card>
        </div>
        
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <gift-card>
                <template slot="content">
                    <p class="category">Trending gifts in your store</p>
                    <div class="gift-line">
                        <img src="../assets/img/jacket.png" alt="" class="gift">
                        <img src="../assets/img/bag.png" alt="" class="gift">
                        <img src="../assets/img/total.png" alt="" class="gift">
                        <img src="../assets/img/bottle.png" alt="" class="gift">
                        <default-button label="Send a gift"></default-button>
                    </div>
                </template>
            </gift-card>
        </div>
        <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
            <chart-card
                :chartData="giftChart.data"
                :chart-options="giftChart.options"
                :chart-responsive-options="giftChart.responsiveOptions"
                :chart-type="'Bar'"
                data-background-color="transparent">
                <template slot="card-header">
                    <p>Total gifts sent this year</p>
                    <default-button label="Download report"></default-button>
                </template>            
            </chart-card>
        </div>
    </div>
  </div>
</template>
<script>
import ChartCard from '../components/card/chart-card';
import DefaultCard from '../components/card/default-card';
import GiftCard from '../components/card/gift-card';
import DefaultButton from '../components/button/default-button';
import DoughnutChart from '../components/doughnut-chart';
export default {
    components: {
        ChartCard,
        DefaultCard,
        GiftCard,
        DefaultButton,
        DoughnutChart,
    },
    data: function() {
    return {
            username: 'Ashley Wong',
            inventory: 400,
            orders: 2736,
            shipments: 364,
            giftChart: {
                data: {
                    labels: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ],
                    series: [[100, 55, 70, 100, 55, 55, 55, 70, 100, 70, 55, 55]]
                },
                options: {
                    fullWidth: true,
                    axisX: {
                        showGrid: false
                    },
                    axisY: {
                        showGrid: true,
                        showLabel: false,
                    },
                    low: 0,
                    high: 100,
                    chartPadding: {
                        top: 0,
                        right: 5,
                        bottom: 0,
                        left: 0
                    }
                },
                responsiveOptions: [
                    [
                        "screen and (max-width: 640px)",
                        {
                            seriesBarDistance: 5,
                            axisX: {
                                labelInterpolationFnc: function(value) {
                                return value[0];
                                }
                            }
                        }
                    ]
                ]
            },
            inventoryChart: {
                data: {
                    labels: [
                        "Empty",
                        "Filled",
                    ],
                    series: [
                        { meta: "empty", value: 10, className: "empty" },
                        { meta: "filled", value: 30, className: "filled" },
                    ],
                    pointColorMapping: 'color', 
                    
                },
                options: {
                    fullWidth: true,
                    donut: true,
                    donutWidth: 10,
                    showLabel: false,
                    ignoreEmptyValues: false,
                    width: 100,
                    height: 100
                },
            },
        };
    },
    filters: {
        getFirstName: function (value) {
            if(!value) return ''
            return value.split(/(?<=^\S+)\s/)[0]
        },
        getIntegerFormat: function (value) {
            if(!value) return ''
            return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
    }
}
</script>
<style></style>
