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
        $(".host-options").append('<label><input class="host" type="checkbox" value=' + index + '>  ' + host + '</label>');
      })
    },
    error: function(error) {
      console.log('there was an error in the get-hosts call', error);
    }
  });

  $('.host').click(function(){
    console.log('checkbox working');
    if($(this).prop("checked")){
      console.log("Checkbox prop is checked", this.value);
    }
    if($(this).is(':checked')) {
      console.log('checkbox is checked', this.value);
    }
  });

  // $('#sort-alpha').on('click', function () {
  //   var alphabeticallyOrderedDivs = $('.host-options').sort(function (a, b) {
  //       return $(a).find("label").text() - $(b).find("label").text();
  //   });
  //   $(".host-options").html(alphabeticallyOrderedDivs);
  // });
  $('#sort-alpha').click(function(){
    console.log('alphabetical sorting clicked', hosts);
    var alphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    })
    // var pureSort = hosts.sort()
    console.log('alphaHosts hosts sorted are', alphaHosts);
    // console.log('pureSort hosts sorted are', pureSort);

    $.each(alphaHosts, function(index, host) {
      $(".host-options").replaceAll('.host').html('<label><input class="host" type="checkbox" value=' + index + '>  ' + host + '</label>');
    });
  });


  $('#sort-r-alpha').click(function(){
    console.log('reverse alphabetical sorting clicked', hosts);
    // rAlphaHosts = hosts.sort(function(a, b) {
    //   return b - a;
    // })
    var rAlphaHosts = hosts.sort(function(a, b) {
      var x = a.toLowerCase(), y = b.toLowerCase();
      return x > y ? -1 : x < y ? 1 : 0;
    })

    console.log('hosts reverse sorted are', rAlphaHosts);
    $.each(rAlphaHosts, function(index, host) {
      $(".host-options").replaceWith().html('<label><input class="host" type="checkbox" value=' + index + '>  ' + host + '</label>');
    });
  });

  // $('input[type="checkbox"]').click(function(){
  //     if($(this).prop("checked") == true){
  //         alert("Checkbox is checked.");
  //     }
  //     else if($(this).prop("checked") == false){
  //         alert("Checkbox is unchecked.");
  //     }
  // });

  $("#filter-button").click(function() {
    console.log('dropdown button clicked');
  });

});