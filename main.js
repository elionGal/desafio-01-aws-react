//setTimeout(function() 
//{
//window.location.href = 'Show1.html';
//}, 4000);

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('Vector');

    if (backButton) {
        const path = window.location.pathname;

        let destination = '';

        if (path.includes('Show2.html')) 
        {
            destination = 'Show1.html';
        } else (path.includes('Show3.html')) 
        {
            destination = 'Show2.html'; 
        } 

        backButton.addEventListener('click', function() {
            window.location.href = destination;
        });
    }0
});

document.addEventListener('DOMContentLoaded', function() {
    const backButton = document.getElementById('NextButton');

    if (backButton) {
        const path = window.location.pathname;

        let destination = '';

        if (path.includes('Show1.html')) 
        {
            destination = 'Show2.html';
        } 
        else 
        if (path.includes('Show2.html')) 
        {
            destination = 'Show3.html'; 
        }
        else
        if (path.includes('Show3.html'))
        {
            destination = 'Login.html'; 
        } 

        backButton.addEventListener('click', function() {
            window.location.href = destination;
        });
    }0
});