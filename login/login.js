export function handleLogin() {
    // 이메일과 비밀번호 입력창 요소 선택
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const alertBox = document.getElementById('alert');

    // 입력된 이메일과 비밀번호 값 가져오기 (공백 제거)
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // 입력값 검증 - 이메일 또는 비밀번호가 비어 있는 경우
    if (email === '' || password === '') {
        alertBox.textContent = 'Please fill in both email and password!';
        alertBox.classList.remove('d-none');  // 경고 메시지 표시
        return; // 함수 종료
    } else {
        alertBox.classList.add('d-none');  // 경고 메시지 숨김
    }

    // 🔥 API 요청 시작 (비동기 통신)
    fetch('https://example.com/api/login', { // API URL
        method: 'POST',  // HTTP 메서드: POST (데이터 전송)
        headers: {
            'Content-Type': 'application/json' // JSON 형식의 데이터 전송
        },
        body: JSON.stringify({ email, password }) // JSON 형식으로 데이터 전송
    })
    .then(response => {
        // 서버 응답 확인
        if (response.ok) {  // 응답 상태 코드가 200번대일 때 (성공)
            return response.json();  // JSON 데이터 반환
        } else {
            throw new Error('Invalid email or password'); // 에러 발생
        }
    })
    .then(data => {
        // 로그인 성공 시 처리
        alert('로그인 성공!'); // 성공 메시지
        localStorage.setItem('token', data.token); // JWT 토큰을 LocalStorage에 저장
        window.location.href = 'dashboard.html'; // 대시보드 페이지로 이동
    })
    .catch(error => {
        // 에러 처리
        alertBox.textContent = error.message;  // 에러 메시지 표시
        alertBox.classList.remove('d-none');   // 경고 메시지 나타내기
    });
}
