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

---

# Vue & Axios

이전에 실습하던 프로젝트를 이어서 작업환경으로 진행하는 실습 입니다.

## 코드 출처

맨땅에 개발하기님 유튜브 재생목록  
[Vue & Axios](https://www.youtube.com/watch?v=FxT0koabbWw&list=PLZzSdj89sCN3EbxoMjhPnMFW14k6dpVv1)

## 01. 환경 설정 및 axios 설치

package.json 에 대한 설명과 npm install 에 대한 간단한 설명 후 module 설치를 하였습니다.

## 02. fake 서버 & post man

서버 개발을 굳이 하지 않고 프론트 개발에만 집중할 수 있게 도와주는 fake 서버에 대한 소개와  
api 테스트를 도와주는 post man에 대한 소개 강의였습니다.

## 03~04. axios 실습

axios를 통해 GET / POST 방식의 통신 방법에 대해 실습해 보았으며

axios 응답 코드를 살펴보았습니다.

## 05. 로그인 프로세스 톺아보기

1. 유저가 서버에게 로그인 요청
2. (성공시) 서버가 유저에게 토큰으로 응답
3. 유저는 토큰을 저장
4. 다음부턴 토큰을 통해 서버에게 요청
5. 서버는 토큰을 통해 회원임을 인증

여기서 토큰은 보통 짧은 주기로 갱신하여 사용하기때문에  
토큰이 탈취가 되더라도 정해놓은 시간이 지나면 무용지물이다.  
-> 보안성

## 06. 헤더에 토큰 담아 보내기

1.  axios post 형식에는 파라미터를 객체에 담아서 보낼 수 있다.
2.  get 형식에서는 설정에 대한 정보를 담아 보낼 수 있으며 이때 token 정보를 담아서 보낸다

다음 강의에서는 새로고침을 해도 로그인을 유지할 수 있도록 하는 방법에 대해 알아보겠습니다.

## 07. 새로고침시 로그인 해제 방지

1. 회원 정보를 쿠키에 담아서 로그인을 유지하는 것은 보안상 굉장히 취약하다.
2. 로그인 이후에 토큰을 받아오고 그 토큰을 로컬 스토리지에 저장해서 로그인을 유지하는 방법에 대해 알아보자

---

1. 먼저 회원 인증을 통해 토큰을 발급 받고
2. 받은 토큰을 localStorate에 저장한다.

```js
localStorage.setItem("access_token", token);
```

3. 화면을 구성할때마다 인증을 거쳐서 토큰이 있는지 없는지에 대해 검증하면 된다.
