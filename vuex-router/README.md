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

> 비밀번호는 vuex 또는 vue 인스턴스에 따로 저장을 시키면 안 됩니다. 보안상 굉장히 위험

우선 로그인에 성공한 유저 정보를 담을 state를 선언해주고

actions 비지니스 로직을 통과한 유저 정보를 payload로 mutation에 commit 합니다.  
그리고 router를 import 한 뒤 push 메소드를 통해 로그인에 성공하면 mypage로 가게끔 처리 해줍니다.

넘겨준 payload를 받아 state를 업데이트 해주고

Mypage View에서 State를 조회해서 로그인한 회원을 확인합니다.

그리고 로그인 인증 여부에 따라 접근을 제한하는 것을 라우트의 `beforeEnter` 속성에 주었습니다.

## 05 강

로그아웃 기능을 만들어 보겠습니다.

toolbar에 드롭다운 버튼을 만들어서 (vuetify)

1. mypage
2. logout

버튼을 추가해보았습니다.

logout 기능은 store에 저장된 로그인 정보를 초기화 시켜주고,  
isLogin과 isLoginError 또한 초기화 시켜주면 끝입니다.
