/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
function fetchAndVisualizeData() {
  fetch('./data.json')
    .then((r) => r.json())
    .then((data) => {
      totalMatchesYearwiseArray = data[0].totalMatchesYearwiseArray;
      matchesWonPerTeamPerYearArray = data[1].matchesWonPerTeamPerYearArray;
      extraRunPerTeam2016Array = data[2].extraRunPerTeam2016Array;
      tenEconomicalBowler2015Array = data[3].tenEconomicalBowler2015Array;

      visualizeData(totalMatchesYearwiseArray);
      visualizeData1(matchesWonPerTeamPerYearArray);
      visualizeData2(extraRunPerTeam2016Array);
      visualizeData3(tenEconomicalBowler2015Array);
    });
}

function visualizeData(data) {
  Highcharts.chart('totalMatchesYearwise', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Total matches Played by sameer',
    },
    subtitle: {
      text: 'Source: Csv data released by IPL',
    },
    xAxis: {
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Total matches per year',
        data: Object.values(data),
      },
    ],
  });
}
function visualizeData1(data) {
  const teamobj = {};
  let count = 0;
  for (const eachyear in data) {
    count++;
    for (const eachteam in data[eachyear]) {
      if (eachteam in teamobj) {
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

  const arr = [];
  for (const each in teamobj) {
    const x = {};
    x.name = each;
    x.data = teamobj[each];
    arr.push(x);
  }
  Highcharts.chart('matchesWonPerTeamPerYear', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Matches Won By Each Team Per Year',
    },
    xAxis: {
      categories: Object.keys(data),
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Matches Won',
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color:
            (Highcharts.defaultOptions.title.style
              && Highcharts.defaultOptions.title.style.color)
            || 'gray',
        },
      },
    },

    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },

    series: arr,
  });
}
function visualizeData2(data) {
  Highcharts.chart('extraRunPerTeam2016', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Extra runs conceded by Teams in 2016',
    },
    subtitle: {
      text: 'Source: Csv data released by IPL',
    },
    xAxis: {
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Runs',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Extra runs conceded',
        data: Object.values(data),
      },
    ],
  });
}

function visualizeData3(data) {
  Highcharts.chart('tenEconomicalBowler2015', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Top Ten Most economical bowler 2015',
    },
    subtitle: {
      text: 'Source: Csv data released by IPL',
    },
    xAxis: {
      categories: Object.keys(data),
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Economy',
      },
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Economy',
        data: Object.values(data),
      },
    ],
  });
}
fetchAndVisualizeData();
