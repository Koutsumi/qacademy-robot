*** Settings ***
Documentation    Tudo começa aqui

Resource    components/nav.resource
Resource    components/toast.resource
Resource    pages/login.resource
Resource    pages/enroll.resource

*** Keywords ***
#Helpers
Do Login 
    [Arguments]    ${user}

    Go to Login Page
    Fill Credentials    ${user}[email]     ${user}[pass]
    Submit Credentials
    User Should Be Logged In    ${user}[name]