'use strict';


function displayResults(responseJson){
  console.log(responseJson);
  $('#results-list').empty();

  var user = document.getElementById("#username");
  var url = responseJson.forEach(function (element){
    console.log(user, url);
  });

  for(let i=0; i < responseJson.length; i++) {
    $('#results-list').append(
      ` <li> "${responseJson[i].name}" </li>
      <li> 
        <h3>
          <a href="${responseJson[i].url}">${responseJson[i].url}</a> 
        </h3> 
      </li>`
    )
  };
  $('#results').removeClass('hidden');
};

function getUser(username, responseJson){
  const searchURL = `https://api.github.com/users/${username}/repos`;

  fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });
}
  

function watchForm(){
  $('form').submit(event =>{
    event.preventDefault();
    const searchTerm = $('#username').val();
    getUser(searchTerm);
  });
}

$(watchForm);
