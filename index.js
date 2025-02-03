// function subscribe() {
//     const email = document.getElementById('email').value;
//     if (email) {
//         alert(`🎉 Hooray! You're now subscribed to our newsletter! 🎉\n\nStay tuned for exciting updates and offers sent to: ${email}`);
//         document.getElementById('email').value = ''; // Clear the input field
//     } else {
//         alert('Oops! Please enter a valid email address.');
//     }
// }

function subscribe() {
    const email = document.getElementById('email').value;
    // A more comprehensive email regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailPattern.test(email)) //given string matches or not
    {
        alert(`🎉 Hooray! You're now subscribed to our newsletter! 🎉\n\nStay tuned for exciting updates and offers sent to: ${email}`);
        document.getElementById('email').value = ''; // Clear the input field
    } else {
        alert('Oops! Please enter a valid email address.');
    }
}