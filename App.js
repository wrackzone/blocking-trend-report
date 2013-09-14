Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',

    launch: function() {

         var TIME_PERIOD_IN_MONTHS = 1,
             TIME_PERIOD_IN_MILLIS = 1000 * 60 * 60 * 24 * 30 * TIME_PERIOD_IN_MONTHS;
        
        // calculate time period
        var today = new Date(),
            timePeriod = new Date(today - TIME_PERIOD_IN_MILLIS);

        this.chartConfig.calculatorConfig.startDate = timePeriod;
        this.chartConfig.calculatorConfig.endDate = today;

        // get the current project
        var p = this.getContext().getProject().ObjectID;
        console.log("p",p);

        var storeConfig = {
            
            // listeners : { 
            //     load : function(store,data) {
            //         console.log("data",data.length);
            //     }
            // },

            filters: [
                {
                    property: '_ProjectHierarchy',
                    operator : 'in',
                    value : [p] // 5970178727
                },
                {
                    property: '_TypeHierarchy',
                    operator: 'in',
                    value: ['HierarchicalRequirement']
                },
                {
                    property: '_ValidFrom',
                    operator: '>',
                    value: timePeriod.toISOString()
                }
            ],
            autoLoad : true,
            limit: Infinity,
            fetch: ['ObjectID','Name', '_TypeHierarchy','Blocked','ScheduleState'],
            hydrate: ['_TypeHierarchy','ScheduleState']
		};

        this.chartConfig.storeConfig = storeConfig;

        this.add(this.chartConfig);
    },
    
    chartConfig: {
        xtype: 'rallychart',
        itemId : 'myChart',
        chartColors: ['Green', 'Red'],
        
        storeConfig: { },
        calculatorType: 'MyTestCaseCalculator',
        
        calculatorConfig: {
        },

        chartConfig: {
            plotOptions: {
                column: { stacking: 'normal'}
            },
            chart: { },
            title: { text: 'Blocking History' },
            xAxis: {
                tickInterval: 1,
                labels: {
                    formatter: function() {
                        var d = new Date(this.value);
                        return ""+(d.getMonth()+1)+"/"+d.getDate();
                    }
                },
                title: {
                    text: 'Date'
                }
            },
            yAxis: [
                {
                    title: {
                        text: 'Count'
                    }
                }
            ]
        }
    }
});
