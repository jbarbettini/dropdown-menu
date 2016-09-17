$(document).ready(function() {
  var hosts = [];

  // reuseable function to print hosts to DOM
  function printHosts(hosts) {
    $.each(hosts, function(index, host) {
      $("#host-options")
        .append('<label><input class="host" type="checkbox" value=' + host + '>  ' + host + '<a href="#" class="remove-tag"><i class="remove glyphicon glyphicon-remove"></i></a></label>');
    });
    // addHover();
  }

  // GET call for initial host list 
  $.ajax({
    url: '/get-hosts',
    dataType: 'json',
    success: function(response) {
      hosts = response.map(function(host) {
        return host.name;
      });
      console.log('these are the current hosts', hosts);
      printHosts(hosts)
    },
    error: function(error) {
      console.log('there was an error in the get-hosts call', error);
      $("#host-options")
        .html('<h2>There was an error in the initial host call. Please toggle the error code and try again.</h2>');
    }
  });

  // Register search by click or 'enter' keypress
  $('#search-btn').click(function() {
    searchHosts();
  });

  $('#search-field').keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      searchHosts();
    }
  })

  function searchHosts() {
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
  }

  // Add new host 
  $('#add-random-host').click(function(){
    var newHost = Mock.getRandomHost();
    console.log('newHost is', newHost);
    hosts.push(newHost.id);
    $("#host-options")
        .append('<label><input class="host" type="checkbox" value=' + newHost.id + '>  ' + newHost.name + '<a href="#" class="remove-tag"><i class="remove glyphicon glyphicon-remove"></i></a></label>');
  });

  // delete host
  $('#host-options').on('click', '.remove-tag', (function() {
    var deletedHost = $(this).parent().children()[0].value;
    var position = hosts.indexOf(deletedHost);
    hosts.splice(position, 1); 
    $(this).parent().remove();
  }));

  // select all hosts 
  $("#sort-select").click(function() {
    $.each($(".host"), function(index, host) {
      $(host).prop("checked", true);
    });
  });

  // deselect all hosts 
  $("#sort-deselect").click(function() {
    $.each($(".host"), function(index, host) {
      $(host).prop("checked", false);
    });
  });

  // sort hosts alphabetically
  $('#sort-alpha').click(function(){
    var alphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    $('#host-options').empty();
    printHosts(alphaHosts);
  });

  // sort hosts reverse alphabetically 
  $('#sort-r-alpha').click(function(){
    var rAlphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x > y ? -1 : x < y ? 1 : 0;
    })

    $('#host-options').empty();
    printHosts(rAlphaHosts);
  });

  // console.log selected hosts 
  $("#submit").click(function() {
    var selectedHosts = $.map($(".host:checked"), function(host) {
      return host.value;
    });
    return console.log('User selected the following hosts:', selectedHosts); 
  });

});