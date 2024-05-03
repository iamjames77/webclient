const registerForm = document.querySelector('#register-form');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const id = registerForm.querySelector('#id').value;
    const password = registerForm.querySelector('#password').value;
    const passwordConfirm = registerForm.querySelector('#password-confirm').value;

    if (id.length > 0 && password.length > 0 && passwordConfirm.length > 0) {
        if (password === passwordConfirm) {
            // AJAX를 사용하여 회원가입 요청 전송
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'register.php');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = () => {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.success) {
                        alert('회원가입이 완료되었습니다!');
                        window.location.href = 'login.html'; // 로그인 페이지로 이동
                    } else {
                        alert('회원가입에 실패했습니다.\n' + response.message);
                    }
                } else {
                    alert('회원가입 요청에 실패했습니다.');
                }
            };

            const formData = new FormData();
            formData.append('id', id);
            formData.append('password', password);

            xhr.send(formData);
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    } else {
        alert('아이디와 비밀번호를 입력해주세요.');
    }
});
