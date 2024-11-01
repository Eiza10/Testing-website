window.onload = () =>  {
    const register = document.getElementById('register');
    
    const user = document.getElementById('user');
    const email = document.getElementById('email');
    const pass = document.getElementById('pass');
    const phone = document.getElementById('phone');
    const checkbox1 = document.getElementById('checkbox1');
    
    
    register.addEventListener('click', () => {
        if (user.value === '' || email.value === '' || pass.value === '' || phone.value === ''|| checkbox1.checked === false) {
            alert('Please fill all fields');
        } else {
             const userData = {
                user: user.value,
                email: email.value,
                pass: pass.value,
                phone: phone.value
            };
            localStorage.setItem('user', JSON.stringify(userData));
            alert('User registered successfully!');
    
            window.location.href = 'login.html';
        }
    });
}