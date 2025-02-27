// login.js에서 handleLogin 함수를 가져옴 (ES6 모듈 방식)
import { handleLogin } from './login.js';

// DOMContentLoaded 이벤트: HTML 문서가 완전히 로드된 후 실행
document.addEventListener('DOMContentLoaded', () => {
    // 로그인 버튼 요소 선택
    const loginButton = document.getElementById('loginButton');

    // 로그인 버튼 클릭 이벤트 리스너 등록
    loginButton.addEventListener('click', () => {
        handleLogin(); // 클릭 시 handleLogin() 함수 호출
    });
});