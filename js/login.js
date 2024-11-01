window.onload = () =>  {

    const login = document.getElementById('login');
    
    const userlog = document.getElementById('userlog');
    const passlog = document.getElementById('passlog');
    
    login.addEventListener('click', () => {
        const storedUserData = JSON.parse(localStorage.getItem('user'));
        if (storedUserData) {
            if (userlog.value === storedUserData.user && passlog.value === storedUserData.pass) {
                alert('Login successful!');
                window.location.href = 'app.html';
            } else {
                alert('Invalid email or password');
            }
        }
    });
}