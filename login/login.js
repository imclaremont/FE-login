document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const alertBox = document.getElementById('alert');

    loginButton.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === '' || password === '') {
            alertBox.textContent = 'Please fill in both email and password!';
            alertBox.classList.remove('d-none');
            return;
        } else {
            alertBox.classList.add('d-none');
        }

        try {
            // API 요청
            const response = await fetch('https://example.com/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                // 로그인 성공 시 처리
                alert('로그인 성공!');
                localStorage.setItem('token', data.token); // JWT 토큰 저장
                window.location.href = 'dashboard.html';  // 로그인 후 이동할 페이지
            } else {
                // 로그인 실패 시 처리
                alertBox.textContent = 'Invalid email or password!';
                alertBox.classList.remove('d-none');
            }
        } catch (error) {
            console.error('Error:', error);
            alertBox.textContent = 'An error occurred. Please try again later.';
            alertBox.classList.remove('d-none');
        }
    });
});