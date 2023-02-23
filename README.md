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
OBS.: Após atualizar o PYTHON/PIP não precisa rodar esse comando

#### Rodar o teste
    robot <nomeDoArquivo>.robot

## Comandos para iniciar o playwright
    pip install robotframework-browser
    rfbrowser init
## Rodar o testes e salvar os logs em uma pasta
    robot -d ./logs tests/online.robot
Salva os relatórios de execução na pasta logs

## Anotações
### Problemas com o pip
    curl -sS https://bootstrap.pypa.io/get-pip.py | python3.10
    curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3.10

    curl -sS https://bootstrap.pypa.io/get-pip.py | python3
    curl -sS https://bootstrap.pypa.io/get-pip.py | sudo python3

O python 3.10 tem um problema para dar upgrade na versão do pip, única solução para atualizar o pip foi com esses 4 comandos