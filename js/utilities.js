function getInputFieldById(inputFieldId){
    const incomeField=document.getElementById(inputFieldId);
    const incomeString=incomeField.value;
    const incomeValue=parseFloat(incomeString);
    return incomeValue;
}

function getElementValueById(expensesFieldId){
    const elementField=document.getElementById(expensesFieldId)
    const elementString=elementField.value;
    const elementValue=parseFloat(elementString);
    return elementValue;
}
