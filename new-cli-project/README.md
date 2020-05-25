# Vue.js CLI 실습

## 코드 출처

맨땅에 개발하기님 유튜브 재생목록  
[Vue CLI 3 Tutorial](https://www.youtube.com/watch?v=G6rhxMuqnhU&list=PLZzSdj89sCN0sLqrTKf2m7lXe_93C19UG&index=1)

## 1강 설치 및 세팅

## 2강 프로젝트 생성 및 plugins(feat.vuetify)

## 3강 Vue File

## 4강 컴포넌트의 생성 및 사용

컴포넌트 전역 선언 및 사용을 배웠습니다.

## 5강 Vue 부모 자식 간의 데이터 전달 Props

## 6강 Props의 활용

Props의 데이터 타입을 지정하는 방법을 익혔습니다.

react에서와 마찬가지지만 조금 더 간편하고 직관적으로 작성할 수 있었습니다.

```vue
<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      // default(){"기본 값"} 
    },
  },
};
</script>
```

props는 자식 컴포넌트에서 직접 수정하면 안 된다.

## 7강 \$emit

`$emit`: 자식 컴포넌트가 부모 컴포넌트에게 값을 바꾸고 싶다는 신호를 보낸다.

## 8강 event bus

형제 컴포넌트 간의 데이터 이동에 대해 배워보았습니다.  
형제 컴포넌트는 main.js 에서 export 하는 eventBus 라는 Vue 인스턴스를 부모 컴포넌트 삼아 $emit 으로 신호를 보내고 $on 으로 리스닝한다.

## 9강 Mixin (1)

자주 사용되는 함수들을 Vue API 중 하나인 mixins 를 사용해서 전역적으로 선언 및 관리하는 법을 배웠습니다.

## 10강 Mixins (2)

mixins 에 함수를 등록해서 메서드를 사용하는 것은 메서드에 직접 등록해서 사용하는 것과 동일하다.

mixins에는 메서드 뿐만 아니라 data 와 같은 Vue 의 다른 API를 사용할 수 있으며 호출한 Vue 인스턴스의 속성 안으로 녹아 들어간다.

mixins 에 있는 API들을 먼저 넣은 다음 뷰 컴포넌트가 렌더링 되기 때문에 그 값이 덮어 씌워져서 컴포넌트 본연이 갖고 있는 API가 우선시 된다.
