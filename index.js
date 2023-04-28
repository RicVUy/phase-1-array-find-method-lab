// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "W"},
    { year: "2013", result: "L"}
    
  ]

function superbowlWin(record){
    let winner = record.find(({result}) => result === "W")
  if (winner) {
    return winner["year"]
  }
}
console.log(superbowlWin(record))