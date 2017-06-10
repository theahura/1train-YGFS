var width = window.innerWidth,
    height = window.innerHeight,
    nodes, links;

var LINK_TYPE = {
    Business: {
        name: "financial",
        color: "#3B8EA5"
    },
    Political: {
        name: "political",
        color: "#AB3428"
    },
    Personal: {
        name: "personal",
        color: "#F49E4C"
    }
}

function initialDataBuild() {

    var relWidth = 1150,
        relHeight = 800;

    nodes = {
        "United States": {
            "name": "United States",
            "country": "USA",
            "USA": true,
            "index": 1,
            "x": relWidth * 0.05,
            "y": relHeight * 0.8,
            "image": "american-flag.png",
            "source": "http://flaglane.com/download/american-flag/american-flag-large.png"
        },
        "Russia": {
            "name": "Russia",
            "country": "Russia",
            "USA": false,
            "index": 2,
            "x": relWidth * 0.2,
            "y": relHeight * 0.6,
            "image": "russia-flag.png",
            "source": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png"
        }
    }

    links = [

      {
        "source": nodes["United States"],
        "target": nodes["Russia"],
        "sweep": 1,
        "linknum": 1000,
        "confirmed": true
      },
      {
        "source": nodes["Russia"],
        "target": nodes["United States"],
        "sweep": 1,
        "linknum": 1000,
        "confirmed": true
      },
      {
        "source": nodes["United States"],
        "target": nodes["Russia"],
        "sweep": 1,
        "linknum": 0,
        "confirmed": true
      },
      {
        "source": nodes["Russia"],
        "target": nodes["United States"],
        "sweep": 1,
        "linknum": 0,
        "confirmed": true
      },
      {
        "source": nodes["United States"],
        "target": nodes["Russia"],
        "sweep": 1,
        "linknum": 30,
        "confirmed": true
      },
      {
        "source": nodes["Russia"],
        "target": nodes["United States"],
        "sweep": 1,
        "linknum": 30,
        "confirmed": true
      },
      {
        "source": nodes["United States"],
        "target": nodes["Russia"],
        "sweep": 1,
        "linknum": 60,
        "confirmed": true
      },
      {
        "source": nodes["Russia"],
        "target": nodes["United States"],
        "sweep": 1,
        "linknum": 60,
        "confirmed": true
      }
    ];
}

initialDataBuild();