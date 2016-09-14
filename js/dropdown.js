$(document).ready(function() {
  var hosts = [];

  function printHosts(hosts) {
    $.each(hosts, function(index, host) {
      $("#host-options")
        .append('<label><input class="host" type="checkbox" value=' + host + '>  ' + host + '</label> ');
    })
  }

  $.ajax({
    url: '/get-hosts',
    dataType: 'json',
    success: function(response) {
      hosts = response.map(function(host) {
        return host.name;
      });
      console.log('these are the current hosts', hosts);
      printHosts(hosts);
    },
    error: function(error) {
      console.log('there was an error in the get-hosts call', error);
      $("#host-options")
        .html('<h2>There was an error in the initial host call. Please toggle the error code and try again.</h2>');
    }
  });

  $('#search-btn').click(function() {
    var searchParam = $('#search-field').val();
    var filtered = hosts.filter(function(host) {
      return host.match(searchParam);
    });
    if (filtered.length) {
      $('#host-options').empty();
      printHosts(filtered);
    } else {
      $('#host-options').empty();
      $('#host-options').html('<h2>There were no hosts that meet your search parameter. Please try again.</h2>');
    }
  });

  $('#add-random-host').click(function(){
    var newHost = Mock.getRandomHost();
    console.log('newHost is', newHost);
    hosts.push(newHost.id);
    $("#host-options")
        .append('<label><input class="host" type="checkbox" value=' + newHost.id + '>  ' + newHost.name + '</label>');
  });

  $('.host').hover(
    function() {
      $(this).append($('<a href="#" class="remove-tag"><i class="remove glyphicon glyphicon-remove"></i></a>'));
    }
  );

  $('#host-options i').click(function() {
    console.log('this remove tag was clicked', $(this)); 
  })

  $("#sort-select").click(function() {
    $.each($(".host"), function(index, host) {
      $(host).prop("checked", true);
    });
  });

  $("#sort-deselect").click(function() {
    $.each($(".host"), function(index, host) {
      $(host).prop("checked", false);
    });
  });

  $('#sort-alpha').click(function(){
    var alphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    $('#host-options').empty();
    printHosts(alphaHosts);
  });


  $('#sort-r-alpha').click(function(){
    var rAlphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x > y ? -1 : x < y ? 1 : 0;
    })

    $('#host-options').empty();
    printHosts(rAlphaHosts);
  });

  $("#submit").click(function() {
    var selectedHosts = $.map($(".host:checked"), function(host) {
      return host.value;
    });
    return console.log('User selected the following hosts:', selectedHosts); 
  });


});