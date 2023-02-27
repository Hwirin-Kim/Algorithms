// 문제 설명
// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// 제한 조건
// strings는 길이 1 이상, 50이하인 배열입니다.
// strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// 모든 strings의 원소의 길이는 n보다 큽니다.
// 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
// 입출력 예
// strings	n	return
// ["sun", "bed", "car"]	1	["car", "bed", "sun"]
// ["abce", "abcd", "cdx"]	2	["abcd", "abce", "cdx"]
// 입출력 예 설명
// 입출력 예 1
// "sun", "bed", "car"의 1번째 인덱스 값은 각각 "u", "e", "a" 입니다. 이를 기준으로 strings를 정렬하면 ["car", "bed", "sun"] 입니다.

// 입출력 예 2
// "abce"와 "abcd", "cdx"의 2번째 인덱스 값은 "c", "c", "x"입니다. 따라서 정렬 후에는 "cdx"가 가장 뒤에 위치합니다. "abce"와 "abcd"는 사전순으로 정렬하면 "abcd"가 우선하므로, 답은 ["abcd", "abce", "cdx"] 입니다.

//일단 같은 문자열일 경우 사전순으로 정렬되도록 하기 위해 미리 sort함수로 정렬하고 시작했다.
function solution(strings, n) {
  strings.sort();
  //2중 for문을 도입하여 인접한 두 수를 비교 하고, 대소비교를 해서 서로의 위치를 바꾼다. 이렇게하면 제일 큰 수는 제일 뒤에 위치하게 된다.
  //따라서 제일 큰 수는 건들 필요가 없으므로 안쪽 for문에서 strings.length-i-1을 한다.
  for (let i = 0; i < strings.length; i++) {
    for (let j = 0; j < strings.length - i - 1; j++) {
      if (strings[j][n] > strings[j + 1][n]) {
        // j와 j+1의 자리를 바꿔치기 위해서 일단 변수 a에 담아 j번째를 담아 교환한다.
        let a = strings[j];
        strings[j] = strings[j + 1];
        strings[j + 1] = a;
      }
    }
  }
  return strings;
}
