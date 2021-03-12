console.log('JS ready');

$(document).ready(handleReady);


function handleReady() {
  console.log('jQ ready!');

  $('#equalsBtn').on('click', sendNumbers);
  $('#addBtn').on('click', operatorAdd);
  $('#minusBtn').on('click', operatorMinus);
  $('#timesBtn').on('click', operatorTimes);
  $('#divideBtn').on('click', operatorDivide);


}
let operator = '';

function operatorAdd() {
  if(operator != '') {
  console.log('+ clicked');
  
  }else {
    operator = '+';
  }
};// end operatorAdd

function operatorMinus() {

  if(operator != '') {
    console.log('- clicked');
    
    }else {
      operator = '-';
      console.log('operator is:', operator);
    }

};// end operatorAdd

function operatorTimes() {

  if(operator != '') {
    console.log('* clicked');
    
    }else {
      operator = '*';
      console.log('operator is:', operator);
    }

};// end operatorAdd

function operatorDivide() {

  if(operator != '') {
    console.log('- clicked');
    
    }else {
      operator = '/';
      console.log('operator is:', operator);
    }

};// end operatorAdd

function emptyInputs() {

  $('#num1In').val('');
  $('#num2In').val('');

};// end emptyInputs

function sendNumbers() {

  let numberObject = {

    num1: $('#num1In').val(),
    num2: $('#num2In').val(),
    operator: operator

  };

  console.log('Object to send:', numberObject);

  $.ajax({
    type: 'POST',
    url: '/number',
    data: numberObject

  }).then(function(response) {
    console.log('Back from POST with:', response);

  }).catch(function(err) {

    console.log(err);
  });

  emptyInputs();

}// end sendNumbers

