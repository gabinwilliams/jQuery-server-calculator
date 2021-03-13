console.log('JS ready');

$(document).ready(handleReady);


function handleReady() {
  console.log('jQ ready!');

  $('#equalsBtn').on('click', sendNumbers);
  $('#addBtn').on('click', operatorAdd);
  $('#minusBtn').on('click', operatorMinus);
  $('#timesBtn').on('click', operatorTimes);
  $('#divideBtn').on('click', operatorDivide);
  $('#clearBtn').on('click', emptyInputs)

  renderDom();

}
let operator = '';

function renderDom() {

  
  $.ajax({

    url: '/number',
    type: 'GET'

  }).then(function(response) {

    if(response.length === 0) {
      return response;
    }else {
    console.log('In renderDom back from server', response);

    $('#result').text(`${response[response.length -1 ].answer}`)

    for(let i = 0; i < response.length; i++) {

    
    $('#history').append(`
      
      <li>${response[i].num1} ${response[i].operator} ${response[i].num2} = ${response[i].answer}</li>
    
    `)
  }// end for

  }// end if

  }).catch(function(err) {

    console.log(err);
  });

}// end renderDom

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

  operator = '';
  
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
  $('#history').empty();
  renderDom();
  
}// end sendNumbers

