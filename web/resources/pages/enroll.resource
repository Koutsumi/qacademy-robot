*** Settings ***
Library     Browser

*** Keywords ***
Go To Enrolls
    Click    css=a[href="/matriculas"]
    
Go To Enrolls Form    
    Click    css=a[href="/matriculas/new"]

Select Student
    [Arguments]    ${student_name}
    Fill Text     xpath=//div[contains(text(), "nome do aluno")]/..//input
    ...    ${student_name}
    Click    css=div[class$=option] >> text=${student_name}
    
Select Plan
    [Arguments]    ${student_plan}    
    Click    xpath=//label[text()="PLANO"]/..//div[contains(text(), "Selecione")]
    Click    css=div[class$=option] >> text=${student_plan}

Fill Start Date
    [Arguments]    ${start_date}
    Focus   css=input[name="start_date"]
    Keyboard Key    press    0  
    Keyboard Key    press    7
    Keyboard Key    press    0
    Keyboard Key    press    3
    Keyboard Key    press    2
    Keyboard Key    press    0
    Keyboard Key    press    2
    Keyboard Key    press    3  