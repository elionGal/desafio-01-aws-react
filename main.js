const currentPage = window.location.pathname.split('/').pop();

if (currentPage === 'LoadingPage.html') 
{
    setTimeout(function() 
    {
        window.location.href = 'Show1.html';
    }, 4000);
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('Login.html')) {
        var svgElement = document.getElementById('Vector');

        svgElement.addEventListener('mouseover', function() {
            svgElement.querySelector('path').setAttribute('fill', '#ff6064');
        });

        svgElement.addEventListener('mouseout', function() {
            svgElement.querySelector('path').setAttribute('fill', 'black');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() 
{
    const backButton = document.getElementById('Vector');

    if (backButton) 
    {
        const path = window.location.pathname;

        let destination = '';

        if (path.includes('Show2.html')) 
        {
            destination = 'Show1.html';
        } 
        else
        if (path.includes('Show3.html')) 
        {
            destination = 'Show2.html'; 
        } 
        else
        if (path.includes('Login.html'))
        {
            destination = 'LoadingPage.html'; 
        }

        backButton.addEventListener('click', function() 
        {
            window.location.href = destination;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() 
{
    const backButton = document.getElementById('NextButton');

    if (backButton) 
        {
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

        backButton.addEventListener('click', function() 
        {
            window.location.href = destination;
        });
    }
});

document.addEventListener('DOMContentLoaded', (event) => 
    {
    const facebookButton = document.getElementById('FacebookButton');
    const googleButton = document.getElementById('GoogleButton');
    const appleButton = document.getElementById('AppleButton');

    facebookButton.addEventListener('click', () => 
    {
        window.location.href = 'https://www.facebook.com';
    });

    googleButton.addEventListener('click', () => 
    {
        window.location.href = 'https://www.google.com';
    });

    appleButton.addEventListener('click', () => 
    {
        window.location.href = 'https://www.apple.com';
    });
});

document.addEventListener('DOMContentLoaded', function() 
{
    const returnButton = document.getElementById('ReturnButton')

    if (returnButton)
    {
        const path = window.location.pathname;

        let destination = '';

        if (path.includes('Register.html')) 
        {
            destination = 'Login.html';
        } 

        returnButton.addEventListener('click', function() 
        {
            window.location.href = destination;
        })
    }
})

function handleFormSubmit() 
{
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    
    if (password !== confirmpassword) 
    {
        alert('Passwords do not match!');
        return;
    }

 
    var userDataUrl = 'UserData.html?' +
        'name=' + encodeURIComponent(name) +
        '&email=' + encodeURIComponent(email);

    window.location.href = userDataUrl;
}

function displayUserData() 
{
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');

    document.getElementById('userName').textContent = name || 'N/A';
    document.getElementById('userEmail').textContent = email || 'N/A';
}


function setupRegisterPage() 
{
    document.getElementById('CreateButton').addEventListener('click', handleFormSubmit);
    document.getElementById('ReturnButton').addEventListener('click', function() 
    {
        window.history.back();
    });
}

function setupUserDataPage() 
{
    displayUserData();
}

document.addEventListener('DOMContentLoaded', function() 
{
    if (window.location.pathname.endsWith('Register.html')) 
    {
        setupRegisterPage();
    } else if (window.location.pathname.endsWith('UserData.html')) 
    {
        setupUserDataPage();
    }
});
