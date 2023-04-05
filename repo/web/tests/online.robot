*** Settings ***
Documentation    Verifica se o app esta online

Library    Browser

*** Test Cases ***
Portal Admin deve estar online 
    New Browser    headless=False    browser=chromium
    New page       http://localhost:3000
    Get Text       h1    contains    Painel do Administrador
    Sleep          1