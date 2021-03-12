console.log('JS ready');

$(document).ready(handleReady);


function handleReady() {
  console.log('jQ ready!');

  $('#equalsBtn').on('click', sendNumbers);

}

function emptyInputs() {

  $('#num1In').val('');
  $('#num2In').val('');

};// end emptyInputs

function sendNumbers() {

  let numberObject = {

    num1: $('#num1In').val(),
    num2: $('#num2In').val()

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

