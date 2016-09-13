$(document).ready(function() {
  var hosts = [];

  $.ajax({
    url: '/get-hosts',
    dataType: 'json',
    success: function(response) {
      console.log('this is the list of hosts available', response);
      hosts = response.map(function(host) {
        return host.name;
      });
      console.log('these are the hosts themselves', hosts);
      $.each(hosts, function(index, host) {
        $("#host-options")
          .append('<label><input class="host" type="checkbox" value=' + host + '>  ' + host + '</label>');
      })
    },
    error: function(error) {
      console.log('there was an error in the get-hosts call', error);
    }
  });

  $('#search-btn').click(function() {
    console.log( )
  });

  $("#submit").click(function() {
    var selectedHosts = $.map($(".host:checked"), function(host) {
      return host.value;
    });
    return console.log('User selected the following hosts:', selectedHosts); 
  });

  $('.host-options').click(function(){
    console.log('checkbox working');
    if($(this).prop("checked")){
      console.log("Checkbox prop is checked", this.value);
    }
    if($(this).is(':checked')) {
      console.log('Checkbox is checked', this.value);
    }
  });

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
    $.each(alphaHosts, function(index, host) {
      $("#host-options")
        .append('<label><input class="host" type="checkbox" value=' + host + '>  ' + host + '</label>');
    })
  });


  $('#sort-r-alpha').click(function(){
    var rAlphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x > y ? -1 : x < y ? 1 : 0;
    })

    $('#host-options').empty();
    $.each(rAlphaHosts, function(index, host) {
      $("#host-options")
        .append('<label><input class="host" type="checkbox" value=' + host + '>  ' + host + '</label>');
    })
  });

  $("#filter-button").click(function() {
    console.log('dropdown button clicked');
  });

});