(function(factory) {
    window.Mock = window.Mock || factory(jQuery);
})(function($) {
    var SAMPLE_HOST_DATA = [
      {
        "id": "EXAMPLE_HOSTNAME",
        "name": "EXAMPLE_HOSTNAME"
      },
      {
        "id": "GitHub",
        "name": "GitHub"
      },
      {
        "id": "Stripe",
        "name": "Stripe"
      },
      {
        "id": "ablinux-node-v5",
        "name": "ablinux-node-v5"
      },
      {
        "id": "ip-10-10-0-10",
        "name": "ip-10-10-0-10"
      },
      {
        "id": "ip-10-10-0-21",
        "name": "ip-10-10-0-21"
      },
      {
        "id": "ip-10-10-0-22",
        "name": "ip-10-10-0-22"
      },
      {
        "id": "ip-10-10-0-23",
        "name": "ip-10-10-0-23"
      },
      {
        "id": "ip-10-10-0-24",
        "name": "ip-10-10-0-24"
      },
      {
        "id": "ip-10-10-0-25",
        "name": "ip-10-10-0-25"
      },
      {
        "id": "ip-10-10-0-26",
        "name": "ip-10-10-0-26"
      },
      {
        "id": "ip-10-10-0-27",
        "name": "ip-10-10-0-27"
      },
      {
        "id": "ip-10-11-5-15",
        "name": "ip-10-11-5-15"
      },
      {
        "id": "ip-10-11-5-181",
        "name": "ip-10-11-5-181"
      },
      {
        "id": "ip-10-11-5-183",
        "name": "ip-10-11-5-183"
      },
      {
        "id": "ip-10-11-5-19",
        "name": "ip-10-11-5-19"
      },
      {
        "id": "ip-10-11-5-207",
        "name": "ip-10-11-5-207"
      },
      {
        "id": "ip-10-11-5-239",
        "name": "ip-10-11-5-239"
      },
      {
        "id": "ip-10-11-5-69",
        "name": "ip-10-11-5-69"
      },
      {
        "id": "ip-10-11-5-85",
        "name": "ip-10-11-5-85"
      },
      {
        "id": "ip-10-11-5-87",
        "name": "ip-10-11-5-87"
      },
      {
        "id": "ip-10-11-5-93",
        "name": "ip-10-11-5-93"
      },
      {
        "id": "ip-10-11-5-95",
        "name": "ip-10-11-5-95"
      },
      {
        "id": "ip-10-11-6-121",
        "name": "ip-10-11-6-121"
      },
      {
        "id": "ip-10-11-6-135",
        "name": "ip-10-11-6-135"
      },
      {
        "id": "ip-10-11-6-16",
        "name": "ip-10-11-6-16"
      },
      {
        "id": "ip-10-11-6-182",
        "name": "ip-10-11-6-182"
      },
      {
        "id": "ip-10-11-6-233",
        "name": "ip-10-11-6-233"
      },
      {
        "id": "ip-10-11-6-86",
        "name": "ip-10-11-6-86"
      },
      {
        "id": "ip-10-11-6-88",
        "name": "ip-10-11-6-88"
      },
      {
        "id": "ip-10-11-6-94",
        "name": "ip-10-11-6-94"
      },
      {
        "id": "ip-10-11-6-96",
        "name": "ip-10-11-6-96"
      },
      {
        "id": "ip-10-12-7-10",
        "name": "ip-10-12-7-10"
      },
      {
        "id": "ip-10-12-7-121",
        "name": "ip-10-12-7-121"
      },
      {
        "id": "ip-10-12-7-197",
        "name": "ip-10-12-7-197"
      },
      {
        "id": "ip-10-12-7-21",
        "name": "ip-10-12-7-21"
      },
      {
        "id": "ip-10-12-7-22",
        "name": "ip-10-12-7-22"
      },
      {
        "id": "ip-10-12-7-23",
        "name": "ip-10-12-7-23"
      },
      {
        "id": "ip-10-12-7-234",
        "name": "ip-10-12-7-234"
      },
      {
        "id": "ip-10-12-7-24",
        "name": "ip-10-12-7-24"
      },
      {
        "id": "ip-10-12-7-25",
        "name": "ip-10-12-7-25"
      },
      {
        "id": "ip-10-12-7-26",
        "name": "ip-10-12-7-26"
      },
      {
        "id": "ip-10-12-7-27",
        "name": "ip-10-12-7-27"
      },
      {
        "id": "ip-10-12-7-30",
        "name": "ip-10-12-7-30"
      },
      {
        "id": "ip-10-12-8-105",
        "name": "ip-10-12-8-105"
      },
      {
        "id": "ip-10-12-8-17",
        "name": "ip-10-12-8-17"
      },
      {
        "id": "ip-172-31-14-25",
        "name": "ip-172-31-14-25"
      },
      {
        "id": "salt-master",
        "name": "salt-master"
      },
      {
        "id": "salty-lake-3850",
        "name": "salty-lake-3850"
      },
      {
        "id": "testbox1",
        "name": "testbox1"
      },
      {
        "id": "tg-em1",
        "name": "tg-em1"
      },
      {
        "id": "tg-em2",
        "name": "tg-em2"
      },
      {
        "id": "tg-em3",
        "name": "tg-em3"
      },
      {
        "id": "tg-es01",
        "name": "tg-es01"
      },
      {
        "id": "tg-es02",
        "name": "tg-es02"
      },
      {
        "id": "tg-es03",
        "name": "tg-es03"
      },
      {
        "id": "tg-es04",
        "name": "tg-es04"
      },
      {
        "id": "tg-es05",
        "name": "tg-es05"
      },
      {
        "id": "tg-es06",
        "name": "tg-es06"
      },
      {
        "id": "tg-es07",
        "name": "tg-es07"
      },
      {
        "id": "tg-es08",
        "name": "tg-es08"
      },
      {
        "id": "tg-es09",
        "name": "tg-es09"
      },
      {
        "id": "tg-es10",
        "name": "tg-es10"
      },
      {
        "id": "tg-es11",
        "name": "tg-es11"
      },
      {
        "id": "tg-es12",
        "name": "tg-es12"
      },
      {
        "id": "tg-es13",
        "name": "tg-es13"
      },
      {
        "id": "tg-es14",
        "name": "tg-es14"
      },
      {
        "id": "tg-es15",
        "name": "tg-es15"
      },
      {
        "id": "tg-es16",
        "name": "tg-es16"
      },
      {
        "id": "tg-es17",
        "name": "tg-es17"
      },
      {
        "id": "tg-es18",
        "name": "tg-es18"
      },
      {
        "id": "tg-es19",
        "name": "tg-es19"
      },
      {
        "id": "tg-es20",
        "name": "tg-es20"
      },
      {
        "id": "tg-es21",
        "name": "tg-es21"
      },
      {
        "id": "tg-es22",
        "name": "tg-es22"
      },
      {
        "id": "tg-es23",
        "name": "tg-es23"
      },
      {
        "id": "tg-es24",
        "name": "tg-es24"
      }
    ];

    var setup = function(mock_status) {
        $.mockjax.clear();
        $.mockjax({
            url: '/get-hosts'
          , status: mock_status
          , responseTime: [250, 1500]
          , responseText: SAMPLE_HOST_DATA
        });

        $.mockjax({
            url: '/delete-host'
          , status: mock_status
          , responseTime: [250, 750]
          , responseText: { success: true }
        });
    };

    var ERROR_MODE = 0, SUCCESS_MODE = 1;

    var mode = SUCCESS_MODE;

    var toggleMode = function() {
        if (mode === SUCCESS_MODE) {
            mode = ERROR_MODE;
        } else {
            mode = SUCCESS_MODE;
        }
        setup(mode ? 200 : 500);
    };

    var getRandomHost = function() {
        var seed = (Math.random().toString(16)+'000000000').substr(2,8);
        return {
            id: 'random-host-' + seed
          , name: 'A Random Host (' + seed + ')'
        };
    };

    return {
        toggleMode: toggleMode
      , getRandomHost: getRandomHost
    };
});
