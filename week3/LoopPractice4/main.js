var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

// for (var mindex = 0; mindex < months.length; mindex++ ) {
//   for (var dindex = 1; dindex <= months[mindex].days; dindex++) {
//     console.log(months[mindex].name + " " + dindex);
//   }
// }

// for (var hindex = 0; hindex < 24; hindex++)  {
//   for (var mindex = 0; mindex < 60; mindex++) {
//     for (var sindex = 0; sindex < 60; sindex++) {
//       console.log(hindex+":"+mindex+":"+sindex);
//     }
//   }
// }


for (var ap = 0; ap < 2; ap++){
  for (var hindex = 1; hindex <= 24; hindex++)  {
    for (var mindex = 0; mindex < 60; mindex++) {
      // for (var sindex = 0; sindex < 60; sindex++) {
        if (hindex > 12) {
            console.log((hindex-12)+":"+mindex+" PM");
        } else {
            console.log(hindex+":"+mindex+" AM");
        }

      }
    }
  }
