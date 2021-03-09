// React Testing Library 모듈 불러오기
// render, screen 모듈 추출
import { render, screen } from '@testing-library/react';

// 테스트할 컴포넌트 불러오기
import App from './App';

// 어떤 컴포넌트를 테스트할 것인지 기술 하시오.

// 첫번째 테스트 케이스
test('App이 정상적으로 랜더링 되는가?', () => {
  // 컴포넌트 렌더링
  render(<App />);
  // 스크린 디버깅
  screen.debug();
});

// 두번째 테스트 케이스
test('App 컴포넌트의 링크 요소의 텍스트가 learn react 인가?', () => {
  // 컴포넌트 렌더링
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});