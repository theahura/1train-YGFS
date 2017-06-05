var width = window.innerWidth,
    height = window.innerHeight,
    nodes, links;

var LINK_TYPE = {
    Business: {
        name: "business",
        color: "#3E4D47"
    },
    Political: {
        name: "political",
        color: "#BF0603"
    },
    Personal: {
        name: "personal",
        color: "#455461"
    }
}

nodes = {
    "United States": {
        "name": "United States",
        "USA": true,
        "index": 1,
        "x": width * 0.75,
        "y": height * 0.7,
        "image": "american-flag.png",
        "source": "http://flaglane.com/download/american-flag/american-flag-large.png"
    },
    "Russia": {
        "name": "Russia",
        "USA": false,
        "index": 2,
        "x": width * 0.85,
        "y": height * 0.3,
        "image": "russia-flag.png",
        "source": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png"
    }
}

links = [

  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 30,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 30,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "linknum": 60,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "linknum": 60,
    "confirmed": true
  }
];