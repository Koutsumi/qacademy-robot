## QAcademy - Robotframework

### Para iniciar o projeto rode os seguintes comandos
Após clonar o projeto não esqueça de dar um "yarn install" na API e na WEB

### Pasta API
    yarn dev
#### Para zerar o banco de dados
    ./up.sh

### Pasta WEB
    yarn dev

### Para rodar os testes
#### Iniciar o robot
    source robot/bin/activate

No linux precisei criar uma virtualEnv para criar um environment para o python rodar

##### Instalando o PYTHON e criando o virtualEnv
    sudo apt-get install python3
    sudo apt-get install python3-pip
    sudo apt-get install python3-venv
    python3 -m venv ./robot

O comando "source robot/bin/activate" ativa o virtualEnv (necessário para rodar os testes)

#### Rodar o teste
    robot <nomeDoArquivo>.robot