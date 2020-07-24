// 레이아웃을 작성할 CSS 엔진을 불러옵니다.
var flnk_css = new flanket_css();

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