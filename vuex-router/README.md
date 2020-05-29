# Vuex & Router 실습 예제

## 코드 출처

맨땅에 개발하기님 유튜브 재생목록  
[Vuex & Router](https://www.youtube.com/watch?v=TSyS3hMaDfA&list=PLZzSdj89sCN2BNq2ugCT634Cazda_Ytl-)

## 01 강

Vuex 와 Router를 이용해 로그인을 하고 상태관리를 하는 프로젝트입니다

vuetify 플러그인을 추가해 UI를 구성하였습니다.

## 02 강

로컬 데이터를 통한 간단한 회원 인증을 구현했고 vuex의 필요성에 대해 이야기 한 뒤 다음 강의로 넘어갔습니다.

## 03 강

vuex 로 로그인 상태 관리를 어떻게 하는지에 대해 알아 보았습니다.

store.js

1. state에 data 를 넣는다.
2. mutations에서 data를 바꾸는 메서드를 정의한다.
3. actions에서 mutations를 호출하는 비즈니스 로직을 작성한다.

component

1. mapState(computed에서), mapActions(methods에서)를 호출
2. 컴포넌트 안에서 데이터와 methods 쓰듯이 직성

다음 강의에서는 로그인이 되었다면 로그인 페이지에 들어오지 못하도록 guard 를 사용하는 방법에 대해 알아 보겠습니다.

## 04 강
