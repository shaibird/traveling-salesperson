const weeklyMiles = [ 8, 10, 4, 7, 20, 4 ]
let weeklyTotal = 0 

for (const run of weeklyMiles) {
    weeklyTotal += run
}

const averageRun = weeklyTotal / weeklyMiles.length
console.log(averageRun)