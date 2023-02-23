*** Settings ***
Library     Browser

*** Keywords ***
Go to Login Page
    New Browser    headless=False    browser=chromium
    New page       http://localhost:3000

Fill Credentials
    [Arguments]    ${email}    ${pass}    
    Fill Text      css=input[placeholder="Seu e-mail"]   ${email} 
    Fill Text      css=input[placeholder="Sua Senha"]    ${pass}

Submit Credentials
    Click          css=button >> text=Entrar no sistema
    #   Click          text=Entrar no sistema   
    #   Click          xpath=//button[text()="Entrar no sistema"]

Verify Toaster      
    Wait For Elements State
    ...    css=.Toastify__toast-body div >> text=Suas credenciais são inválidas, por favor tente novamente!
    ...    visible    5

User Should Be Logged In 
    ${logged_user}     Set Variable       css=aside strong
    Wait For Elements State     ${logged_user}    visible    15
    Get Text       ${logged_user}    equal    Admin