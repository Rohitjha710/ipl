function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(data => {
      TotalMatchesYearwiseArray = data[0]["TotalMatchesYearwiseArray"];
      MatchesWonPerTeamPerYearArray = data[1]["MatchesWonPerTeamPerYearArray"];
      ExtraRunPerTeam2016Array = data[2]["ExtraRunPerTeam2016Array"];
      TenEconomicalBowler2015Array = data[3]["TenEconomicalBowler2015Array"];

      visualizeData(TotalMatchesYearwiseArray);
      visualizeData1(MatchesWonPerTeamPerYearArray);
      visualizeData2(ExtraRunPerTeam2016Array);
      visualizeData3(TenEconomicalBowler2015Array);
    });
}

function visualizeData(data) {
  Highcharts.chart("TotalMatchesYearwise", {
    chart: {
      type: "column"
    },
    title: {
      text: "Total matches Played"
    },
    subtitle: {
      text: "Source: Csv data released by IPL"
    },
    xAxis: {
      categories: /*data.categories*/ Object.keys(data),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    } /*
      tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat:
          '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: "</table>",
        shared: true,
        useHTML: true
      },*/,
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: "Total matches per year",
        data: Object.values(data)
      }
    ]
  });
}
function visualizeData1(data) {
  let teamobj = {};
  let count = 0;
  for (let eachyear in data) {
    count++;
    // console.log(data);
    for (let eachteam in data[eachyear]) {
      // console.log(eachteam)//team name;
      if (teamobj.hasOwnProperty(eachteam)) {
        teamobj[eachteam].push(data[eachyear][eachteam]);
      } else {
        teamobj[eachteam] = [];
        for (let i = 1; i < count; i++) {
          teamobj[eachteam].push(0);
        }
        teamobj[eachteam].push(data[eachyear][eachteam]);
      }
    }
  }

  let arr = [];
  for (let each in teamobj) {
    let x = {};
    x["name"] = each;
    x["data"] = teamobj[each];
    arr.push(x);
  }
  Highcharts.chart("MatchesWonPerTeamPerYear", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Won By Each Team Per Year"
    },
    xAxis: {
      categories: Object.keys(data)
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches Won"
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
          color:
            // theme
            (Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            "gray"
        }
      }
    },
    // legend: {
    //     align: 'right',
    //     x: -30,
    //     verticalAlign: 'top',
    //     y: 25,
    //     floating: true,
    //     backgroundColor:
    //         Highcharts.defaultOptions.legend.backgroundColor || 'white',
    //     borderColor: '#CCC',
    //     borderWidth: 1,
    //     shadow: false
    // },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}"
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true
        }
      }
    },

    series: arr
    //  series: [{
    //     name: 'John',
    //     data: [5, 3, 4, 7, 2]
    // }, {
    //     name: 'Jane',
    //     data: [2, 2, 3, 2, 1]
    // }, {
    //     name: 'Joe',
    //     data: [3, 4, 4, 2, 5]
    // }]
  });
}
function visualizeData2(data) {
  Highcharts.chart("ExtraRunPerTeam2016", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra runs conceded by Teams in 2016"
    },
    subtitle: {
      text: "Source: Csv data released by IPL"
    },
    xAxis: {
      categories: /*data.categories*/ Object.keys(data),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    } /*
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },*/,
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: "Extra runs conceded",
        data: Object.values(data)
      }
    ]
  });
}

function visualizeData3(data) {
  Highcharts.chart("TenEconomicalBowler2015", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top Ten Most economical bowler 2015"
    },
    subtitle: {
      text: "Source: Csv data released by IPL"
    },
    xAxis: {
      categories: /*data.categories*/ Object.keys(data),
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy"
      }
    } /*
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true
    },*/,
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [
      {
        name: "Economy",
        data: Object.values(data)
      }
    ]
  });
}
fetchAndVisualizeData();
// fetchAndVisualizeData1();
// fetchAndVisualizeData2();
// fetchAndVisualizeData3();
