const cl = console.log;


const logInFormCtrl = document.getElementById('logInForm')
const emailCtrl = document.getElementById('email')
const passwordCtrl = document.getElementById('password')
const eyeIconCtrl = document.getElementById('eyeIcon')
const eyeClass = document.getElementById('eyeIcon');


let usersArr = [
    { email: 'user1@gmail.com', pw: 'pw1@123' },
    { email: 'user2@gmail.com', pw: 'pw2@123' },
    { email: 'user3@gmail.com', pw: 'pw3@123' },
    { email: 'user4@gmail.com', pw: 'pw4@123' },
    { email: 'user5@gmail.com', pw: 'pw5@123' }
]


function toDashboard() {
    window.location.href = 'dashboard.html'
}

const onLogInClick = (eve) => {
    eve.preventDefault();
    setTimeout(() => {
        let emailValu = emailCtrl.value;
        let passwordValue = passwordCtrl.value;
        cl(emailValu)
        cl(passwordValue)
        let ifUserExist;

        usersArr.forEach(user => {
            if (emailValu === user.email) {
                ifUserExist = user;
                cl("user deatails are:", user)
            }
        })
        if (ifUserExist) {
            if (passwordValue === ifUserExist.pw) {
                toDashboard();
                Swal.fire({
                    icon: 'success',
                    title: 'Logged in succesfully',
                    timer: 3000
                })

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'check your password',
                    timer: 3000
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'user not found',
                timer: 3000
            })
        }
    }, 2000);

}


function eyeIconTogle() {
    eyeClass.classList.toggle('fa-eye')
    eyeClass.classList.toggle('fa-eye-slash')
}


// ######## PASSWORD SHOW/HIDE FUNCTION #########
function eyeIcon() {
    let pwType = document.getElementById("password");

    if (pwType.type === "password") {
        pwType.type = "text";
        // eyeClass.classList.add('fa-eye')
        // eyeClass.classList.remove('fa-eye-slash')
        eyeIconTogle();
    } else {
        pwType.type = "password";
        // eyeClass.classList.add('fa-eye-slash')
        // eyeClass.classList.remove('fa-eye')
        eyeIconTogle();
    }
}

logInFormCtrl.addEventListener("submit", onLogInClick)

