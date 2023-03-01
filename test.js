let array = [1, 5, 2, 6, 3, 7, 4];
let commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  let answer = commands.map((command) => {
    return array.slice(command[0] - 1, command[1]).sort(function (a, b) {
      return a - b;
    })[command[2] - 1];
  });
  return answer;
}

console.log(solution(array, commands));
