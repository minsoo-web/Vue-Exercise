# Vue Router 실습

## 코드 출처

맨땅에 개발하기님 유튜브 재생목록  
[Vue Router](https://www.youtube.com/watch?v=aeczJLcr8xc&list=PLZzSdj89sCN0IRcwT4lJWg_qgfBFmcF6A&index=1)

## 01. Learning the Basics -1

환경 세팅 및 라우터의 기본 구조에 대해 추론해 보았습니다.

## 02. Learning the Basics -2

전체 컴포넌트를 다 불러오고 라우터가 주소창에 입력된 값에 따라 하나의 페이지를 불러 오는 방식  
그럼 모든 컴포넌트들을 다 불러오는 과정이 시간이 조금 걸린다.

예를 들어

```vue
<script>
import Home from "./views/Home.vue";
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: Home,
      // 이 방식이 조금 더 오래걸리고
    },
    {
      path: "/about",
      name: "about",
      // 필요에 따라 그때 불러오기 때문에 조금 더 빠르다.
      components: () => import("./views/About.vue"),
    },
  ],
});
</script>
```

### 링크 연결하는 법

```vue
<template>
  <!--다 같은 페이지로 간다 -->
  <li @click="$router.push({ name: 'home' })">홈으로</li>
  <li @click="$router.push({ path: '/' })">홈으로</li>
  <li @click="$router.push('/')">홈으로</li>
  <router-link :to="{ name: 'home' }">홈으로</router-link>
</template>
```

객체 형태로 다른 값들을 함께 전달할 수 있다.

### vuetify 에서 router 활용하기

```vue
<template>
  <v-list-tile router :to="{ name: 'home' }" exact> </v-list-tile>
</template>
```

exact 속성을 통해 path가 정확히 일치하는 경우에만

## 03. history mode? hash mode?

router js 파일에 가보면 mode 에 대한 명시가 되어 있는 것을 볼 수 있다.

```vue
<script>
export default new Vue({
  mode: "history",
});
</script>
```

default는 hash 모드이고 path 앞에 `/#/` 이 앞에 붙게 된다  
history 모드는 `/#/` 를 없애준다.

## 04. 값 전달하기 - parameters

router로 주소를 이동하면서 값을 함께 넘기는 방법에 대해 알아보았습니다.

주소창을 통해 전달하는 방법

```vue
<script>
// router.js
const Users = () = > import("./views/Users");
export default new Vue({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/users/:id",
      name: "users",
      component: Users,
    },
  ],
});

// Users.vue
export default {
    computed :{
        userId : {
            return this.$route.params; // { "id" : "123"}
        }
    }
}
</script>
```

또한 파라미터 값은 template에서 전달할 수도 있다.

```vue
<template>
  <router-link
    :to="{
      name: 'home',
      params: {
        id: 1234,
        name : "name"
      },
    }"
    >홈으로</router-link
  >
</template>
```

## 05. 값 전달하기 - query

전달 방법은 주소창에 직접 입력하거나, link에서 객체로 전달이 가능하다

```vue
<template>
  <router-link
    :to="{
      name: 'users',
      query: {
        name: 'minsoo',
        age: '26',
      },
    }"
    >유저
  </router-link>
</template>

// Users
<template>
  {{ $route.query.name }}
  <!--minsoo -->
</template>
```

## 06 Children - 하위 경로 설정하기

만약에

1. /users
2. /users/:id
3. /users/:id/edit

이 세가지의 경로를 다 따로따로 route를 지정해주는 것과 하나의 route에서 children을 이용해서 선언하는 것과의 차이가 어떨까

### children 선언

```vue
<script>
const Users = () => import("./views/Users");
const UsersDetail = () => import("./views/UsersDetail");

export default new Router({
  routes: [
    {
      path: "/users",
      name: "users",
      component: Users,
      children: [
        {
          path: "/users/:id", // ":id" 라고만 적어도 된다
          name: "users-detail",
          component: UsersDetail,
        },
      ],
    },
  ],
});
</script>

<!-- template -->
<template>
  <!-- name을 이용한 방법  -->
  <v-btn
    @click="
      $router.push({
        name: 'users-detail',
        params: {
          id: userId,
        },
      })
    "
  ></v-btn>

  <!-- name을 이용한 방법  -->
  <v-btn
    @click="
      $router.push({
        path: `users/${userId}`,
      })
    "
  ></v-btn>
</template>
```

## 07. Guard

라우터 가드는 라우터를 지키는 무언가입니다.  
로그인을 못하면 mypage에 못 들어 오듯이  
접근성에 대한 제한을 정해주는 기능입니다.

```vue
<script>
export default new Router({
  routes: [
    {
      path: "/users",
      name: "Users",
      component: Users,
      beforeEnter: (to, from, next) => {
        console.log("to 는 어디로 갈 것인지", to);
        console.log("from은 어디에서 요청한 것인지", from);
        next(); // 요청한 페이지로 가기
        next("component name"); //지정한 컴포넌트로 갈 수 도 있음
      },
    },
  ],
});
</script>
```

beforeEnter 함수는 (라우터 가드는) 해당 컴포넌트가 created 되기 전에 먼저 호출된다. 

추가로 `beforeEnter()`는 해당 라우트의 컴포넌트의 인스턴스에서 직접 속성값으로 선언이 가능하다. 이때 메서드 이름은 `beforeRouteEnter()`이다.

비슷한 속성 메소드로 `beforeRouteLeave()`가 있다.  
이는 destroy가 되기 직전에 호출이 되고 그 다음에 destroy가 된다는 것을 확인 할 수 있었다. (이는 컴포넌트 내에서만 선언할 수 있다.)

## 08. Redirection

우리가 지정하지 않은 곳으로 주소를 치고 들어왔을 때 지정한 곳으로 `redirect` 하는 방법에 대해 배웠습니다.

우선 redirect를 하는 법에 대해 배웠습니다.

```vue
<script>
export default new Router({
  routes: [
    // 지정된 경로
    {
      path: "redirect-me",
      redirect: {
        name: "users",
      },
    },
    {
      // 지정한 경로가 아닌 모든 경로에 대해
      path: "/*",
      redirect: {
        name: "home",
      },
    },
  ],
});
</script>
```
