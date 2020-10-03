function getDogByBreed(breedName) {
    //Use the Dog API to find all of its images of a specific breed
    console.log(breedName)
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random
`)
        .then(response => response.json())
        .then (responseJson => displayBreed(responseJson))
        .catch(error => alert (`Something went wrong. Try again later.`));
}

function displayBreed(responseJson){
  console.log(responseJson);
if(responseJson.status === 'success'){
  $('.results').html('<h2>Check out this breed of dog</h2>');
  $('.results').append(`<img src="${responseJson.message}">`)
}else{
  $('.results').html('<h2> oops dog not found, Try again!</h2>');
}

// display the results section
$('.results').removeClass('hidden');
}


//This function looks out for submit events on the Form
function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    let breedName=$('input[class="breedNumber"]').val();
    getDogByBreed(breedName);
  });
}


//function that runs when the DOM is loaded
$(function(){
  console.log('App loaded! Waiting for submit!');
  watchForm();
});