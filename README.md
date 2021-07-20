# checku-api

# API 목록
## /login
### Parameter
| Name | Description        | Required |
| ---- | ------------------ | -------- |
| id   | kuis 포털 아이디   | O        |
| pwd  | kuis 포털 비밀번호 | O        |


## /onload
### Parameter
| Name     | Description | Required |
| -------- | ----------- | -------- |
| strStdNo | 학번        | O        |


## /user
### Parameter
| Name     | Description | Required |
| -------- | ----------- | -------- |
| strStdNo | 학번        | O        |


## /user/load


## /grade/now
### Parameter
| Name     | Description | Required |
| -------- | ----------- | -------- |
| basiYy   | 년도        | O        |
| basiShtm | 학기 코드   | O        |
| stdNo    | 학번        | O        |


## /grade/now/:id
### Parameter
| Name     | Description | Required |
| -------- | ----------- | -------- |
| basiYy   | 년도        | O        |
| basiShtm | 학기 코드   | O        |
| stdNo    | 학번        | O        |


## /grade/all
### Parameter
| Name     | Description | Required |
| -------- | ----------- | -------- |
| strStdNo | 학번        | O        |


## /graduate
### Parameter
| Name  | Description | Required |
| ----- | ----------- | -------- |
| stdNo | 학번        | O        |


## /subject/ltShtm


## /subject/openSust
### Parameter
| Name   | Description | Required |
| ------ | ----------- | -------- |
| KOR_NM | 학과명      | O        |


## /subject/v1
### Parameter
| Name     | Description    | Required |
| -------- | -------------- | -------- |
| openSust | 학과 코드      | X        |
| ltYy     | 년도           | O        |
| ltShtm   | 학기 코드      | O        |
| pobtDiv  | 이수 구분 코드 | X        |
| stdNo    | 학번           | O        |
| sbjtId   | 과목 코드      | X        |


## /subject/v1/:id
### Parameter
| Name     | Description    | Required |
| -------- | -------------- | -------- |
| openSust | 학과 코드      | X        |
| ltYy     | 년도           | O        |
| ltShtm   | 학기 코드      | O        |
| pobtDiv  | 이수 구분 코드 | X        |
| stdNo    | 학번           | O        |
| sbjtId   | 과목 코드      | X        |


## /subject/v2
### Parameter
| Name      | Description    | Required |
| --------- | -------------- | -------- |
| ltYy      | 년도           | O        |
| ltShtm    | 학기 코드      | O        |
| openSust  | 학과 코드      | X        |
| pobtDiv   | 이수 구분 코드 | X        |
| sbjtId    | 과목 코드      | X        |
| corsKorNm | 과목명         | X        |
