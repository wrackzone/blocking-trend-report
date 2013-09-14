
Ext.define("MyTestCaseCalculator", {
   extend: "Rally.data.lookback.calculator.TimeSeriesCalculator",
   
    getMetrics: function () {
        var metrics = [
           {
                field: "Blocked",
                as: "Not Blocked",
                display: "column",
                f: "filteredCount",
                filterField: "Blocked",
                filterValues: [false]
           },
            {
                field: "Blocked",
                as: "Blocked",
                display: "column",
                f: "filteredCount",
                filterField: "Blocked",
                filterValues: [true]
            }
        ];
        return metrics;
    },
    getDerivedFieldsOnInput : function () { 
        return [ 
            // {
            //     as: 'NotBlocked', 
            //     f:  function(row) {
            //         return  row.Blocked == false ? 1 : 0;
            //     }
            // }
        ];
    },
    getDerivedFieldsAfterSummary : function () {
        return [
        //     {as: 'Projection', 
        //     f: function (row, index, summaryMetrics, seriesData) {
        //         if (index == 0) {
        //             //console.log(seriesData);
        //             datesData = _.pluck(seriesData,"label");
        //             acceptedData = _.pluck(seriesData,"Accepted Points");
        //             console.log("accepted date len",acceptedData.length);
        //             var today = new Date();
        //             acceptedData = _.filter(acceptedData, function(d,i){ return new Date(Date.parse(datesData[i])) < today;   });
        //             //console.log(acceptedData);
        //         }
        //         var y = linearProject( acceptedData, index);
        //         return Math.round(y * 100) / 100;
        //     }
        //   } 
        ];
    }

});