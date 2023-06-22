function initAutocomplete() {
    var input = document.getElementById('location-input');
    var autocomplete = new google.maps.places.Autocomplete(input);
  }
  initAutocomplete();