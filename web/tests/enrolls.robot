*** Settings ***
Documentation     Suite de testes de matrícula de aulunos
...               Admistrador uam vez logado,consegue matricular alunos na academia

Resource    ../resources/base.resource

*** Test Cases ***
Deve matricular um aluno

    ${admin}    Create Dictionary
    ...    email=admin@smartbit.com
    ...    pass=qacademy
    ...    name=Admin

    Do Login    ${admin}

    Go To Enrolls
    Go To Enrolls Form
    Select Student    Falcão
    Select Plan    Smart
    Fill Start Date    07/03/2023
    # ${temp}    Get Page Source
    # pega o html da página na hora do sleep
    # Log    ${temp}