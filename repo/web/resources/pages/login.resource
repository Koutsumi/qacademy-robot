*** Settings ***
Library     Browser

*** Keywords ***
Go to Login Page
    New Browser    headless=False    browser=firefox
    New page       http://localhost:3000

Fill Credentials
    [Arguments]    ${email}    ${password}    
    Fill Text      css=input[placeholder="Seu e-mail"]   ${email} 
    Fill Text      css=input[placeholder="Sua Senha"]    ${password}

Submit Credentials
    Click          css=button >> text=Entrar no sistema
    #   Click          text=Entrar no sistema   
    #   Click          xpath=//button[text()="Entrar no sistema"]

Field Type Should Be Email
    Get Attribute   css=input[placeholder="Seu e-mail"]    
    ...    type    equal    email

Alert Text Should Be
    [Arguments]    ${field}    ${expected_text}
    
    Get Text    xpath=//input[@type="${field}"]/..//span
    ...    equal    ${expected_text}