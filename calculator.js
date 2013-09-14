
Ext.define("MyTestCaseCalculator", {
   extend: "Rally.data.lookback.calculator.TimeSeriesCalculator",
   
    getMetrics: function () {
        var metrics = [
           {
                as: "Not Blocked",
                display: "column",
                f: "filteredCount",
                filterField: "Blocked",
                filterValues: [false]
           },
            {
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
        ];
    },
    getDerivedFieldsAfterSummary : function () {
        return [
        ];
    }

});