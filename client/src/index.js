import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme , ThemeProvider} from '@material-ui/core/styles';
import ReactEcharts from 'echarts-for-react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Layout from './layout/Layout';
import About from './pages/About';
import Platforms from './pages/Platforms';
import Insights from './pages/Insights';
import Solution from './pages/Solution';
import Industries from './pages/Industries';
import './index.css';
import Spreadsheet from "react-spreadsheet";

import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#5680E9',
        mainGradient: "linear-gradient(to right, tomato, cyan)",

      },
      secondary: {
        main: green[500],
      },
    },
  });

  const data = [
    [{ value: "Vanilla" }, { value: "Chocolate" }],
    [{ value: "Strawberry" }, { value: "Cookies" }],
  ];

class App extends Component {
    render() {
      return (<><ReactEcharts
        option={
            {
                title: {
                    text: '漏斗图',
                    subtext: '纯属虚构'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c}%"
                },
                toolbox: {
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                legend: {
                    data: ['展现','点击','访问','咨询','订单']
                },
            
                series: [
                    {
                        name:'漏斗图',
                        type:'funnel',
                        left: '10%',
                        top: 60,
                        //x2: 80,
                        bottom: 60,
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
                            {value: 60, name: '访问'},
                            {value: 40, name: '咨询'},
                            {value: 20, name: '订单'},
                            {value: 80, name: '点击'},
                            {value: 100, name: '展现'}
                        ]
                    }
                ]
              
            }
        }
        
        />
        <Spreadsheet data={data} />

</>);}}

function Index(props) {
    return (
        <BrowserRouter forceRefresh={true}>
            <Layout>
          <Switch>
           <Route exact path="/">
               <App />
           </Route>
           <Route exact path="/solutions">
               <Solution />
           </Route>
           <Route exact path="/insights">
               <Insights />
           </Route>
           <Route exact path="/platforms">
               <Platforms />
           </Route>
           <Route exact path="/industries">
               <Industries />
           </Route>
           <Route exact path="/about">
               <About />
           </Route>
          </Switch>
          </Layout>
        </BrowserRouter>
    )
}




ReactDOM.render(

    <ThemeProvider theme={theme}>
<Index />
</ThemeProvider>
, document.getElementById('root'));