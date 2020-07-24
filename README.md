# 플랭킷 CSS 뼈대 프레임워크
- 모든 CSS는 blob 내에서 처리 되며, css 로드 속도가 굉장히 빠르고 웹 접근에 전혀 영향이 발생하지 않습니다.
## 사용방법

```javascript
// 레이아웃을 작성할 CSS 엔진을 불러옵니다.
var flnk_css = new flanket_css();
```

### 프레임워크 내 기능
```javascript
// 마진 기능 활성화
flnk_css.margin();

// 패딩 기능 활성화
flnk_css.padding();

// 길이 기능 활성화
flnk_css.width();

// 포지션 기능 활성화
flnk_css.position();

// 폰트 사이즈 조정 기능 활성화
flnk_css.fonts();

// CSS 코드 적용 (BLOB)
flnk_css.inject();
```

## 주의사항
- 인터넷 익스플로러에서는 호환성을 위하여 blob 링크로 불러오지 아니하고, CSS를 head 안에 박아버립니다.

## 사용 가능한 브라우저
- PC
  - Chrome 및 크로미움 기반 브라우저 최신버전
  - IE 9+, Edge(구버전)
  - 오페라, 파이어폭스 등

- Mobile
  - Android 크롬/내장 브라우저 최신버전
  - Safari 최신버전 (iOS 10 이상)