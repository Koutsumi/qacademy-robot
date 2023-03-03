*** Settings ***
Documentation    Representação do componente Toaster

Library     Browser

*** Keywords ***
Verify Toaster
    [Arguments]    ${expected_message} 

    # valida se o elemento esta presente no html
    Wait For Elements State
    ...    css=.Toastify__toast-body div >> text=${expected_message}
    ...    visible    5

    # Valida se o elemento sumiu do html (evitar de usar)
    # Wait For Elements State
    # ...    css=.Toastify__toast-body div
    # ...    detached    10 