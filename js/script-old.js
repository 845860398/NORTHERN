

var init = function(){



    // ––––––––––––––––––––––––––/ Mapbox Starts /––––––––––––––––––––––––––––––––––
      
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

    // ––––––––––––––––––––––––––/ Mapbox Ends/–––––––––––––––––––––––––––––––––– 

    // ––––––––––––––––––––––––––/ Splash Starts/––––––––––––––––––––––––––––––––––

      $('#btn-intro').click(function() { 
        $('#splash').fadeOut(700);
      }); 

    // ––––––––––––––––––––––––––/ Splash Ends/––––––––––––––––––––––––––––––––––

    // ––––––––––––––––––––––––––/ Alert Starts/––––––––––––––––––––––––––––––––––

      document.getElementById('alrt').innerHTML = '<b>Hover over pins for acommodations</b>'; 

      setTimeout(function() {
        document.getElementById('alrt').innerHTML ='';
      },5000); 

    // ––––––––––––––––––––––––––/ Alert /––––––––––––––––––––––––––––––––––

    // ––––––––––––––––––––––––––/ Slider Animation /––––––––––––––––––––––––––––––––––

        // 0 
        $('.item0').click(function(){
          $('#page-open').show();
            $('#page-open1, #page-open2, page-open3').hide();
        });

        // 1 Queenstown
        $('.item1').click(function(){
          $('#page-open1').show();
            $('#page-open, #page-open2, page-open3').hide();
        });

        // 2
        $('.item2').click(function(){
          $('#page-open2').show();
            $('#page-open, #page-open1, page-open3').hide();
        });

        // 3
        $('.item3').click(function(){
          $('#page-open3').show();
            $('#page-open, #page-open1, page-open2').hide();
        });


        $('.fa-times').click(function(){
          console.log('v');
          $('#page-open1, #page-open2, #page-open3, #page-open').fadeOut();
        });


    // ––––––––––––––––––––––––––/ Slider Animation /––––––––––––––––––––––––––––––––––

    // ––––––––––––––––––––––––––/ Flip Animation /––––––––––––––––––––––––––––––––––

    $(document).ready(function() {

      $(".page-book-button").click('click', function() {

        getSelectValues();


        if ($(this).attr('data-click-state') == 1) {
          $(this).attr('data-click-state', 0);
          frontFlip();
        } else {
          $(this).attr('data-click-state', 1);
          backFlip();
        }
      });

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

    // ––––––––––––––––––––––––––/ Flip Animation /––––––––––––––––––––––––––––––––––

    // ––––––––––––––––––––––––––/ Date /––––––––––––––––––––––––––––––––––

    // Garston
    $(function() {
      
      $( "#datepickerA" ).datepicker({
        minDate: '-1D',
      });
      $( "#datepickerB" ).datepicker({
        maxDate: '+10D',
      });
    });

    // Queenstown
$(document).ready(function () {
    var daysToAdd = 0;
    $("#datepickerC").datepicker({
        onSelect: function (selected) {
            var dtMax = new Date(selected);
            dtMax.setDate(dtMax.getDate() + daysToAdd); 
            var dd = dtMax.getDate();
            var mm = dtMax.getMonth() + 1;
            var y = dtMax.getFullYear();
            var dtFormatted = mm + '/'+ dd + '/'+ y;
            $("#datepickerD").datepicker("option", "minDate", dtFormatted);
        }
    });
    
    $("#datepickerD").datepicker({
        maxDate: 5,
        onSelect: function (selected) {
            var dtMax = new Date(selected);
            dtMax.setDate(dtMax.getDate() + daysToAdd); 
            var dd = dtMax.getDate();
            var mm = dtMax.getMonth() + 1;
            var y = dtMax.getFullYear();
            var dtFormatted = mm + '/'+ dd + '/'+ y;
            $("#datepickerC").datepicker("option", "maxDate", dtFormatted);
        }
    });
});
    

    // Cromwell
    $(function(){
      
      $( "#datepickerE" ).datepicker({
        minDate: 0,
        dateFormat: 'dd-mm-yy'
      });
      $( "#datepickerF" ).datepicker({
        minDate: 0,
        dateFormat: 'dd-mm-yy'
      });
    });
    
    // David Peaks
    $(function(){
      
      $( "#datepickerG" ).datepicker({
        minDate: 0,
        dateFormat: 'dd-mm-yy'
      });
      $( "#datepickerH" ).datepicker({
        minDate: 0,
        dateFormat: 'dd-mm-yy'
      });
    });


    // ––––––––––––––––––––––––––/ Date /––––––––––––––––––––––––––––––––––

    // ––––––––––––––––––––––––––/ Main Playground /––––––––––––––––––––––––––––––––––


    // Check In/Out Values
    function getSelectValues(){ 
      //Check in input
      var checkinval = $('#checkInDate').val(); 
        console.log(checkinval);

      //Check out input
      var checkOutval = $('#checkOutDate').val(); 
        console.log(checkOutval);

      // Guests input
      var guestsval = $('#countGuests').val(); 
        console.log(guestsval);
    }

      
      var checkIn = document.getElementById('checkInDate');
      var checkOut = document.getElementById('checkOutDate');
      var btn = document.getElementById('bookBtn');



      // var openPage = document.getElementById('page-open');

    // $('.marker28').on('click', function(){
    //         console.log('m28');

    //       for (var i = 0; i < openPage.length; i++) {
    //         if ($('marker28').value === $('marker29')) {
    //           document.getElementById('page-open');
    //         };
    //       };
    // })


    $('.item0').on('click', function(){
        console.log('m0');
    });


    $('.item1').on('click', function(){
        console.log('m1');
    });

    $('.item2').on('click', function(){
        console.log('m2');
    });

    $('.item3').on('click', function(){
        console.log('m3');
    });


}();