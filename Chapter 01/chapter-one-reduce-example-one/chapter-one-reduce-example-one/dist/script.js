console.clear();

const pilotData = [
{ name: "John Doe", age: 32, experience: "10 years" },
{ name: "James May", age: 32, experience: "3 years" },
{ name: "Clara Cook", age: 32, experience: "12 years" },
{ name: "Ryan Jay", age: 32, experience: "9 years" }];

const totalExp = pilotData.reduce((accumulator, item, pos) => {
  const currentExp = parseInt(item.experience.split(" ")[0], 10);
  const cumulativeExp = accumulator += currentExp;
  console.log(`Cumulative Experience after ${pos + 1} iterations => ${cumulativeExp}`);
  return cumulativeExp;
}, 0);
console.log(totalExp);