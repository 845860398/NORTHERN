

var init = (function(){


  // Splash Function Starts*****
  $('#btn-intro').click(function() { 
    $('#splash').fadeOut(1000);
  }); 
  // Splash Function Ends*****


  // Alert Pin Starts*****
  document.getElementById('alrt').innerHTML = 
  '<b style="background-color: orange;padding: 7px;padding-left: 20px;padding-right: 20px;border-radius: 15px;">Click pins for accommodations</b>'; 

  setTimeout(function() {
    document.getElementById('alrt').innerHTML ='';
  },5000); 
  // Alert Pin Ends*****


  // Mapbox API Starts*****
  mapboxgl.accessToken = 'pk.eyJ1Ijoiam9yZGFucGFlc2UiLCJhIjoiY2phYm9taTVxMDF6cjMzbGU0bWlpcXV2MSJ9.Hv3dtmoyyD5nJb_5l5zSBg';

  var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/jordanpaese/cjahq8xy697jo2soc2pud1ck6', // stylesheet location
  center: [169.8058162, -45.138988], // starting position [lng, lat]
  zoom: 8.5 // starting zoom
  });

  // *Here we have added some geojson in the custom.js to the geojson variable
  var geojson = {
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.681937, -45.419774,]
      },
      properties: {
        title: 'Mapbox',
        description: 'Lake Wakatipu, New Zealand'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.731251, -45.016070]
      },
      properties: {
        title: 'Mapbox',
        description: 'Queenstown, New Zealand'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [169.228869, -44.992671]
      },
      properties: {
        title: 'Mapbox',
        description: 'Northburn, New Zealand'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [168.045092, -44.912978]
      },
      properties: {
        title: 'Mapbox',
        description: 'David Peaks, New Zealand'
      }
    }]
  };

  // * Here is a loop for our geojson
  // add markers to map
  geojson.features.forEach(function(marker, i) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';
    el.className += ' item' + i;

    // $('div').each(function(i) {
      // el.className =' spot' + counter;
    // });

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
  }); 
  // Mapbox API Ends*****


  // Pop up Starts*****
  // Garston
  $('.item0').click(function(){
    $('#page-open').show();
      $('#page-open1, #page-open2, page-open3').hide();
  });

  // Queenstown
  $('.item1').click(function(){
    $('#page-open1').show();
      $('#page-open, #page-open2, page-open3').hide();
  });

  // Cromswell
  $('.item2').click(function(){
    $('#page-open2').show();
      $('#page-open, #page-open1, page-open3').hide();
  });

  // David Peaks
  $('.item3').click(function(){
    $('#page-open3').show();
      $('#page-open, #page-open1, page-open2').hide();
  });


  $('.fa-times').click(function(){
    if (true) {
      frontFlip();
    }
    else {
      $('#page-open, #page-open1, #page-open2, #page-open3').fadeOut();            
    }
  });
  // Pop up Ends*****

  
  // Flip Animation Starts*****
  $(".page-book-button").click('click', false, function() {

    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      frontFlip();
    } else {
      $(this).attr('data-click-state', 1);
      backFlip();
    }
  });

  function frontFlip() {
    $(".front")
      .css('transform', 'perspective(600px) rotateY(0deg)');
    $(".back")
      .css('transform', 'perspective(600px) rotateY(180deg)');
  }

  function backFlip() {
    $(".back")
      .css('transform', 'perspective(600px) rotateY(0)');
    $(".front")
      .css('transform', 'perspective(600px) rotateY(-180deg)');
  }
  // Flip Animation Ends*****



  // Datepicker Starts*****
  var days = 0;
  
  // Queenstown*****
  $( "#datepickerC" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerD" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#datepickerD" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerC" ).datepicker( "option", "maxDate", selectedDate );
    }
  });
  
  $('#datepickerD').on('change',function(){
  days = (daydiff(parseDate($('#datepickerC').val()), parseDate($('#datepickerD').val())));
    $('.days').html('you selected a total of '+days);

    QueenstownDate(days);
  });



  // Garston*****
  $( "#datepickerA" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerB" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#datepickerB" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerA" ).datepicker( "option", "maxDate", selectedDate );
    }
  });
  
  $('#datepickerB').on('change',function(){
  days = (daydiff(parseDate($('#datepickerA').val()), parseDate($('#datepickerB').val())));
    $('.days').html('you selected a total of '+days);

    GarstonDate(days);
  });



  // Cromwell*****
  $( "#datepickerE" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerF" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#datepickerF" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerE" ).datepicker( "option", "maxDate", selectedDate );
    }
  });
  
  $('#datepickerF').on('change',function(){
  days = (daydiff(parseDate($('#datepickerE').val()), parseDate($('#datepickerF').val())));
    $('.days').html('you selected a total of '+days);

    CromwellDate(days);
  });



  // David Peaks*****
  $( "#datepickerG" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerH" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#datepickerH" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    numberOfMonths: 1,
    onClose: function( selectedDate ) {
      $( "#datepickerG" ).datepicker( "option", "maxDate", selectedDate );
    }
  });
  
  $('#datepickerH').on('change',function(){
  days = (daydiff(parseDate($('#datepickerG').val()), parseDate($('#datepickerH').val())));
    $('.days').html('you selected a total of '+days);

    DavidPeaksDate(days);
  });
  

  function parseDate(str) {
    var mdy = str.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
  }

  function daydiff(first, second) {
      return (second-first)/(1000*60*60*24);
  }
  // Datepicker Ends*****



  // Queenstown Datepicker Section Starts*****
  function QueenstownDate(numberOfDays){

  if (numberOfDays <= 5) {
    $(".page-book-button").click('click', function() {
      showDataQ();

      if ($(this).attr('data-click-state') == 1) {
        $(this).attr('data-click-state', 0);
        frontFlip();
      } 
      else {
        $(this).attr('data-click-state', 1);
        backFlip();
      }
    });
  }
    else {
        document.getElementById('page-validQ').innerHTML = 
          '<br>Maximum of 5 days</br>'; 

        setTimeout(function() {
          document.getElementById('page-validQ').innerHTML ='';
        },3000);
        frontFlip();
    }
  }


  function showDataQ(){
  var cost = document.getElementById('totalCostQ');
  var guests = document.getElementById('totalGuestsQ');
  var nights = document.getElementById('totalNightsQ');

  var checkinval = $('#datepickerC').val(); 
  var checkOutval = $('#datepickerD').val(); 
  var guestsval = $('#countGuestsQ').val();

    if ((guestsval >= dataObj["0"].minPeople) || (guestsval < dataObj["0"].maxPeople)) {
      guests.innerHTML = "<br> Attendance: </br>" + guestsval;
      cost.innerHTML = "Total Price: " + dataObj["0"].price;
      nights.innerHTML =  "<br> Check In Date: </br>" + checkinval + "<br> Check Out Date: </br>" + checkOutval;
    }
  }
  // Queenstown Datepicker Section Ends*****


  // Garston Datepicker Section Starts*****
  function GarstonDate(numberOfDaysG){
    if (numberOfDaysG <= 10) {

      $(".page-book-button").click('click', function() {
        showDataG();

        if ($(this).attr('data-click-state') == 1) {
          $(this).attr('data-click-state', 0);
          frontFlip();
        } 
        else {
          $(this).attr('data-click-state', 1);
          backFlip();
        }
      });
    }
    else {
        document.getElementById('page-validG').innerHTML = 
          '<br>Maximum of 10 days</br>'; 

        setTimeout(function() {
          document.getElementById('page-validG').innerHTML ='';
        },3000);
    }
  }


  function showDataG(){
  var cost = document.getElementById('totalCostG');
  var guests = document.getElementById('totalGuestsG');
  var nights = document.getElementById('totalNightsG');

  var checkinval = $('#datepickerA').val(); 
  var checkOutval = $('#datepickerB').val(); 
  var guestsval = $('#countGuestsG').val();

    if ((guestsval >= dataObj["1"].minPeople) || (guestsval < dataObj["1"].maxPeople)) {
      guests.innerHTML = "<br> Attendance: </br>" + guestsval;
      cost.innerHTML = "Total Price: " + dataObj["1"].price;
      nights.innerHTML =  "<br> Check In Date: </br>" + checkinval + "<br> Check Out Date: </br>" + checkOutval;
    }
  }
  // Garston Datepicker Section Starts*****


  // Cromwell Datepicker Section Starts*****
  function CromwellDate(numberOfDays){
    if ((numberOfDays >= 3) && (numberOfDays <= 10)) {

      $(".page-book-button").click('click', function() {
        showDataC();

        if ($(this).attr('data-click-state') == 1) {
          $(this).attr('data-click-state', 0);
          frontFlip();
        } 
        else {
          $(this).attr('data-click-state', 1);
          backFlip();
        }
      });
    }
    else {
        document.getElementById('page-validC').innerHTML = 
          '<br>Maximum of 10 days</br>'; 

        setTimeout(function() {
          document.getElementById('page-validC').innerHTML ='';
        },3000);
    }
  }


  function showDataC(){
  var cost = document.getElementById('totalCostC');
  var guests = document.getElementById('totalGuestsC');
  var nights = document.getElementById('totalNightsC');

  var checkinval = $('#datepickerE').val(); 
  var checkOutval = $('#datepickerF').val(); 
  var guestsval = $('#countGuestsC').val();

    if ((guestsval >= dataObj["2"].minPeople) || (guestsval < dataObj["2"].maxPeople)) {
      guests.innerHTML = "<br> Attendance: </br>" + guestsval;
      cost.innerHTML = "Total Price: " + dataObj["2"].price;
      nights.innerHTML =  "<br> Check In Date: </br>" + checkinval + "<br> Check Out Date: </br>" + checkOutval;
    }
  }
  // Cromwell Datepicker Section Ends*****


  // David Peaks Datepicker Section Starts*****
  function DavidPeaksDate(numberOfDays){
    if ((numberOfDays >= 2) && (numberOfDays <= 15)) {

      $(".page-book-button").click('click', function() {
        showDataD();

        if ($(this).attr('data-click-state') == 1) {
          $(this).attr('data-click-state', 0);
          frontFlip();
        } 
        else {
          $(this).attr('data-click-state', 1);
          backFlip();
        }
      });
    }
    else {
        document.getElementById('page-validD').innerHTML = 
          '<br>Maximum of 15 days</br>'; 

        setTimeout(function() {
          document.getElementById('page-validD').innerHTML ='';
        },3000);
    }
  }


  function showDataD(){
  var cost = document.getElementById('totalCostD');
  var guests = document.getElementById('totalGuestsD');
  var nights = document.getElementById('totalNightsD');

  var checkinval = $('#datepickerG').val(); 
  var checkOutval = $('#datepickerH').val(); 
  var guestsval = $('#countGuestsD').val();

    if ((guestsval >= dataObj["3"].minPeople) || (guestsval < dataObj["3"].maxPeople)) {
      guests.innerHTML = "<br> Attendance: </br>" + guestsval;
      cost.innerHTML = "Total Price: " + dataObj["3"].price;
      nights.innerHTML =  "<br> Check In Date: </br>" + checkinval + "<br> Check Out Date: </br>" + checkOutval;
    }
  }
  // David Peaks Datepicker Section Starts*****

})();