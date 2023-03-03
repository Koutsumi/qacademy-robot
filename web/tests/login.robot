*** Settings ***
Documentation     Suite de testes de autenticação
...               Admistrador deve acessar o portal de gestão de academias

Resource    ../resources/base.resource

*** Test Cases ***
Login do Administrador

    Go to Login Page
    Fill Credentials    admin@smartbit.com    qacademy
    Submit Credentials
    User Should Be Logged In    Admin

Email não cadastrado

    Go to Login Page
    Fill Credentials    404@smartbit.com    qacademy
    Submit Credentials
    Verify Toaster    Suas credenciais são inválidas, por favor tente novamente!

Senha inválida

    Go to Login Page
    Fill Credentials    admin@smartbit.com    abc123
    Submit Credentials
    Verify Toaster    Suas credenciais são inválidas, por favor tente novamente!

E-mail no formarto incorreto
    Go to Login Page
    Fill Credentials    @com.br    123Mudar
    Submit Credentials    
    Field Type Should Be Email

Senha em branco

    Go to Login Page
    Fill Credentials    admin@smartbit.com    ${EMPTY}
    Submit Credentials
    Alert Text Should Be    password    A senha é obrigatória

Email em branco
    # [Tags]    temp (permite rodar apenas esse teste = robot -d ../logs -i temp  login.robot)
    Go to Login Page
    Fill Credentials    ${EMPTY}   qacademy
    Submit Credentials
    Alert Text Should Be    email    O e-mail é obrigatório

Email e senha são obrigatórios
    Go to Login Page
    Fill Credentials    ${EMPTY}   ${EMPTY}
    Submit Credentials
    Alert Text Should Be    email    O e-mail é obrigatório
    Alert Text Should Be    password    A senha é obrigatória