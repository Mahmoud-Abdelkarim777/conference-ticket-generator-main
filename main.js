const previewContainer = document.getElementById('preview-container');
const previewImage = document.getElementById('preview-image');
const actionButtons = document.getElementById('action-buttons');
const fileInput = document.getElementById('avatar');
const editImage = document.getElementById('editImage');
const removeImage = document.getElementById('removeImage');
const stateImg = document.getElementById('state-img');
const stateError = document.getElementById('state-error');
const email = document.getElementById('email');
const btnSubmit = document.getElementById('btn-submit');
const form = document.getElementById('form');
const errorEmail = document.getElementById('error-email');
const fullName = document.getElementById('fullName')
const githubUsername = document.getElementById('githubUsername')
const nameUser = document.getElementById('name-user')
const emailUser = document.getElementById('email-user')
const ticketGithubUserName = document.getElementById('ticket-github-user-name')
const ticketusername = document.getElementById('ticket-user-name')
const bannerText = document.getElementById('banner-text')
const ticket = document.getElementById('ticket')
const ticketImg = document.getElementById('ticket-img')
let imageBase64 = "";
  // Function to handle file changes
function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        const maxSizeInBytes = 0.5 * 1024 * 1024;
        if (file.size > maxSizeInBytes) {
            stateError.classList.add("hidden");
            stateImg.classList.remove("hidden");
            return;
        } else {
            stateError.classList.remove("hidden");
            stateImg.classList.add("hidden");
        }
    const reader = new FileReader();
    reader.onload = (e) => {
        imageBase64 = e.target.result
        previewImage.src = imageBase64;
        ticketImg.src = imageBase64
        previewImage.classList.remove('hidden'); 
        previewContainer.classList.add('hidden');
        actionButtons.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
    } else {
    Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "No file selected.",
        confirmButtonText: "Ok",
        focusConfirm: true,
    });
    }
}
// update the image
editImage.addEventListener('click', function () {
    fileInput.value = ''; // إعادة تعيين الإدخال (حتى لو تم اختيار نفس الملف من قبل)
    fileInput.click();
});
// Function to remove image
function removeImageHandler() {
    fileInput.value = ''; 
    previewImage.src = ''; 
    previewImage.classList.add('hidden');
    previewContainer.classList.remove('hidden');
    actionButtons.classList.add('hidden');
}
// Linking events to elements
fileInput.addEventListener('change', handleFileChange);
removeImage.addEventListener('click', removeImageHandler);
// main function
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (imageBase64) {
        sessionStorage.setItem('storedImage', imageBase64);
        } else {
            Swal.fire({
                icon: "warning",
                title: "Oops...",
                text: "Please select an image first!",
                confirmButtonText: "Ok",
                focusConfirm: true,
            });
            return;
        }

    let emailValue = email.value.trim();
    const fullNameValue = fullName.value.trim();
    const githubUsernameValue = githubUsername.value.trim();
        // validations
    if (!emailValue || !fullNameValue || !githubUsernameValue) {
        Swal.fire({
            icon: "warning",
            title: "Reminder...",
            text: "Please fill out all the required fields!",
            confirmButtonText: "Ok",
            focusConfirm: true,
        });
        return;
    } else if (!isValidEmail(emailValue)) {
        errorEmail.classList.remove("hidden");
        return;
    }
    sessionStorage.setItem('fullName', fullNameValue);
    sessionStorage.setItem('email', emailValue);
    sessionStorage.setItem('githubUsername', githubUsernameValue);
    popup.classList.remove('hidden');
    popup.classList.add('popup-animation');
    setTimeout(() => {
        popup.classList.add('hidden');
        popup.classList.remove('popup-animation');
    }, 3000);
    email.value = ""; 
    fullName.value = ""; 
    githubUsername.value = ""; 
    const storedImage = sessionStorage.getItem('storedImage');
        if (storedImage) {
            ticketImg.src = storedImage;
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "No image found in sessionStorage.",
                confirmButtonText: "Ok",
                focusConfirm: true,
            });
        }
    nameUser.textContent = ""; 
    nameUser.innerHTML = sessionStorage.getItem('fullName'); 
    emailUser.textContent = "";
    emailUser.innerHTML = sessionStorage.getItem('email');
    ticketusername.textContent = "";
    ticketusername.innerHTML = sessionStorage.getItem('fullName');
    ticketGithubUserName.textContent = "";
    ticketGithubUserName.innerHTML = sessionStorage.getItem('githubUsername');
    setTimeout(() => {
        ticket.classList.remove('hidden');
        bannerText.classList.add('hidden');
        form.classList.add('hidden');
    }, 3000);
});
// Function to validate email (Regular Expression)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// function year
const date = new Date();
date.setDate(date.getDate() + 5);
let year = date.getFullYear(); 
let monthIndex = date.getMonth(); 
let day = date.getDate();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
let monthName = monthNames[monthIndex];
document.getElementById("year").innerHTML = year;
document.getElementById("month").innerHTML = monthName;
document.getElementById("day").innerHTML = day;