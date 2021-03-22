import React from 'react';
import ReactEcharts from "echarts-for-react";

function Funnel(props) {
    const option = {
        title: {
            text: 'Sales Funnel',
            subtext: 'Software Sales Workflow'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
            feature: {
                dataView: {readOnly: false},
                saveAsImage: {}
            }
        },
        color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#ff0000','#000000'],
        legend: {
            data: ['Prospect','Leads','Pitched','Qualified','Proposal Sent','Negotiation','Deal Won']
        },
    
        series: [
            {
                name:'Workflow',
                type:'funnel',
               // left: '10%',
                top: 60,
                //x2: 80,
                //bottom: 60,
                width: '80%',
                // height: {totalHeight} - y - y2,
                min: 0,
                max: 100,
                minSize: '0%',
                maxSize: '100%',
                sort: 'descending',
                gap: 2,
                label: {
                    show: true,
                    position: 'inside'
                },
                labelLine: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        fontSize: 20
                    }
                },
                data: [
                    {value: 100, name: 'Prospect'},
                    {value: 90, name: 'Leads'},
                    {value: 80, name: 'Pitched'},
                    {value: 70, name: 'Qualified'},
                    {value: 60, name: 'Proposal Sent'},
                    {value: 50, name: 'Negotiation'},
                    {value: 40, name: 'Deal Won'}
                ]
            }
        ]
    };
    
    return<ReactEcharts option={option} />
}

export default Funnel;