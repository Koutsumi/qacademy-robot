*** Settings ***
Documentation    Consumindo a roda services da API REST

Library    RequestsLibrary

*** Keywords ***
Get Service Token
    [Arguments]    ${user}

    ${response}    POST    http://localhost:3333/sessions
    ...                    json=${user}
    ...                    expected_status=200

    ${token}    Set Variable         Baerer ${response.json()}[token]

    [return]    ${token}