//setTimeout(function() 
//{
//window.location.href = 'Show1.html';
//}, 4000);

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
            destination = 'Show1.html'; 
        }

        backButton.addEventListener('click', function() {
            window.location.href = destination;
        });
    }
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
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona os botões
    const facebookButton = document.getElementById('FacebookButton');
    const googleButton = document.getElementById('GoogleButton');
    const appleButton = document.getElementById('AppleButton');

    // Adiciona event listeners para os botões
    facebookButton.addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com';
    });

    googleButton.addEventListener('click', () => {
        window.location.href = 'https://www.google.com';
    });

    appleButton.addEventListener('click', () => {
        window.location.href = 'https://www.apple.com';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const returnButton = document.getElementById('ReturnButton')

    if (returnButton)
    {
        const path = window.location.pathname;

        let destination = '';

        if (path.includes('Register.html')) 
        {
            destination = 'Login.html';
        } 

        returnButton.addEventListener('click', function() {
            window.location.href = destination;
        })
    }
})

// scripts.js

// Função para redirecionar e passar os dados do formulário para a página UserData.html
function handleFormSubmit() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    // Validar se as senhas coincidem
    if (password !== confirmpassword) {
        alert('Passwords do not match!');
        return;
    }

    // Redirecionar para UserData.html com os dados no URL
    var userDataUrl = 'UserData.html?' +
        'name=' + encodeURIComponent(name) +
        '&email=' + encodeURIComponent(email);

    window.location.href = userDataUrl;
}

// Função para exibir os dados do usuário na página UserData.html
function displayUserData() {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');

    document.getElementById('userName').textContent = name || 'N/A';
    document.getElementById('userEmail').textContent = email || 'N/A';
}

// Configurar eventos para a página Register.html
function setupRegisterPage() {
    document.getElementById('CreateButton').addEventListener('click', handleFormSubmit);
    document.getElementById('ReturnButton').addEventListener('click', function() {
        window.history.back();
    });
}

// Configurar eventos para a página UserData.html
function setupUserDataPage() {
    displayUserData();
}

// Verificar a página e configurar eventos apropriados
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.endsWith('Register.html')) {
        setupRegisterPage();
    } else if (window.location.pathname.endsWith('UserData.html')) {
        setupUserDataPage();
    }
});
