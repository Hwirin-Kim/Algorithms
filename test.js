let id_list = ["muzi", "frodo", "apeach", "neo"];

let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];

let k = 2;

//id별 신고한 목록
function getMyReportInfo(id_list, report) {
  let myReportInfo = id_list.map((id) => {
    let myReport_list = [];
    for (let i = 0; i < report.length; i++) {
      //아이디가 같으면서, 중복된것이 없도록 if를 걸었음
      if (
        report[i].split(" ")[0] === id &&
        !myReport_list.includes(report[i].split(" ")[1])
      ) {
        myReport_list.push(report[i].split(" ")[1]);
      }
    }
    return { id, myReport: myReport_list };
  });
  return myReportInfo;
}
function getIsReportedInfo(myReportInfo, id_list, k) {
  let isReportedInfo = id_list.map((id) => {
    // isReported 각 id가 신고당한 횟수
    let isReported;
    let isReportedCnt = 0;
    for (let i = 0; i < myReportInfo.length; i++) {
      for (let j = 0; j < myReportInfo[i].myReport.length; j++) {
        if (myReportInfo[i].myReport[j] === id) {
          isReportedCnt = isReportedCnt + 1;
        }
      }
    }
    if (isReportedCnt >= k) {
      isReported = true;
    } else {
      isReported = false;
    }
    return { id, isReported };
  });
  return isReportedInfo;
}

function getCnt(myReportInfo, isReportedInfo) {
  let cnt = myReportInfo.map((info) => {
    let cnt = 0;
    for (let i = 0; i < isReportedInfo.length; i++) {
      if (
        isReportedInfo[i].isReported === true &&
        info.myReport.includes(isReportedInfo[i].id)
      ) {
        cnt = cnt + 1;
      }
    }
    return cnt;
  });
  return cnt;
}
const myReportInfo = getMyReportInfo(id_list, report);
const isReportedInfo = getIsReportedInfo(myReportInfo, id_list, k);
getCnt(myReportInfo, isReportedInfo);
