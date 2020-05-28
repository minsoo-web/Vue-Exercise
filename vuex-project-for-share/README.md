# Vuex 실습

## 코드출처

맨땅에 개발하기님 유튜브 재생목록  
[Vue Router](https://www.youtube.com/watch?v=gf_KAs7otf4&list=PLZzSdj89sCN292abcbI3utND8pA1T1OyB)

## 01. Vuex시작하기

컴포넌트간의 통신 방법에 대해 배워봤습니다.

데이터에 관한 중앙 관리소에 대한 개념이 Vuex입니다.

## 02. State

Vuex는 Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리 입니다.  
애플리케이션의 모든 컴포넌트에 대한 `중앙 집중식 저장소 역할`을 하며 예측 가능한 방식으로 상태를 변경할 수 있습니다.

Vuex 에는 세가지 형태의 저장소가 있습니다.

1. state
2. mutations
3. actions

우선 state에 data를 저장하고 그 값을 참조하는 방법에 대해 알아 보겠습니다.

store.js에서 (vue-cli 4.0 이후 부턴 /store/index.js) 데이터를 정리해 줍니다.

```vue
<script>
export default new Vuex.Store({
  state: {
    allUsers: [
      {
        //
      },
    ],
  },
  mutations: {},
  actions: {},
});
</script>
```

그 다음 vuex에서 데이터를 불러오고 싶은 곳에서는 어떻게 참조하는 지 알아봅시다.

```vue
<template>
  <v-list-tile v-for="(user, index) in $store.state.allUsers"> </v-list-tile>
</template>
```

router를 \$router 라고 불러오듯이 import 문으로 따로 불러오는 것이 아닌 main.js에서 호출이 이미 되어 있기 때문에
`$store`로 조회가 가능하며 그 안에 있는 state에 대한 참조이니 `$store.state.`이렇게 해주면 됩니다.

## 03. GETTERS

이런식의 중앙 통제 관리소에서 발생할 수 있는 문제점 중 하나가 vuex에 데이터 접근을 할 때,  
중복되는 코드를 반복한다는 점입니다.

예를 들어서 `$store.state.allUsers.length` 라는 코드가 컴포넌트 이곳 저곳에서 반복해서 사용된다면  
저 긴 코드를 중복해서 사용하는 일이 발생하게 되는겁니다.

간단한 계산식을 캐싱해주는 API로 `computed` 가 있었는데요,  
이와 유사한 기능이 바로 getters 입니다.(반복된 코드를 줄여준다.)

`getters`를 선언해주는 방법에 대해 알아보겠습니다.

```vue
<script>
export default new Vuex.Store({
  state: {
    allUsers: [],
  },
  getters: {
    allUsersCount: (state) => {
      return state.allUsers.length;
    },
    getters2: (state, getters) => {
      return getters;
    },
    // 위처럼 state를 사용하지 않고 getters 만을 사용할 때에도 state는 적어주어야 합니다.
    // req,res 처럼 순서가 의미가 있음
  },
});
</script>
```

이제 컴포넌트에서 getters를 어떻게 불러오는지를 알아보겠습니다.

```vue
<template>
  <Component>
    {{ $store.getters.allUsersCount }}
  </Component>
</template>
```

사실 별로 줄어들은 것 같진 않지만 지금은 복잡한 코드가 아니기 때문이라 생각하면 코드가 길어졌을 경우에 굉장한 장점을 갖는 API 임을 짐작할 수 있었습니다.

## 04 ~ 05. Mapping Getters -1,2

mutations 과 actions를 배우기 전에 getters 를 조금 더 짜임새 있게 사용하는 법에 대해 알아보겠습니다.

getters에 계산된 값들을 반복적으로 참조할 때 `$store.getters`라는 긴 코드를  
줄여줄 수 있는 것이 바로 `mapgetters`입니다.  
(getters의 지도를 제공해준다고 생각하면 됩니다.)

우선 mepGetters는 getters에서 계산된 값을 사용하고 싶은 컴포넌트에서 import 해오는 것으로 시작합니다.

코드를 통해 살펴 보겠습니다.

```vue
<template>
  <h1>{{ $store.getters.getters1 }}==={{ getters1 }}</h1>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapGetters(["getters1", "getters2"]),
    // 이런 식의 표현도 가능하며 template에서는 gettersone 이라고 작성할 수 있게 된다.
    ...mapGetters({
      getterOne: getters1,
      gettersTwo: getters2,
    }),
  },
};
</script>
```

훨씬 직관적이고 편리해 진것을 확인 할 수 있었습니다.

getters를 편한 방법으로 사용해줄 수 있듯이 `$store.state...` 또한 축약형으로 사용할 수 있게 제공해주는 것이 바로 `mapState`입니다.  
사용방법은 mapGetters와 똑같습니다.

## 06. Mutaions

