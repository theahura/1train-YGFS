var width = window.innerWidth,
    height = window.innerHeight,
    nodes, links;

var LINK_TYPE = {
    Business: {
        name: "business",
        color: "#8FD5A6"
    },
    Political: {
        name: "political",
        color: "#FC7753"
    },
    Personal: {
        name: "personal",
        color: "#EB5160"
    },
    Default: {
        name: "default",
        color: "#FFF"
    }
}

nodes = {
    "United States": {
        "name": "United States",
        "USA": true,
        "index": 1,
        "x": width * 0.75,
        "y": height * 0.7,
        "image": "http://www.flags.net/images/largeflags/UNST0001.GIF"
    },
    "Russia": {
        "name": "Russia",
        "USA": false,
        "index": 2,
        "x": width * 0.85,
        "y": height * 0.3,
        "image": "https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg"
    }
}

links = [

  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "type": LINK_TYPE.Default,
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "type": LINK_TYPE.Default,
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "type": LINK_TYPE.Default,
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "type": LINK_TYPE.Default,
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "type": LINK_TYPE.Default,
    "linknum": 30,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "type": LINK_TYPE.Default,
    "linknum": 30,
    "confirmed": true
  },
  {
    "source": nodes["United States"],
    "target": nodes["Russia"],
    "type": LINK_TYPE.Default,
    "linknum": 60,
    "confirmed": true
  },
  {
    "source": nodes["Russia"],
    "target": nodes["United States"],
    "type": LINK_TYPE.Default,
    "linknum": 60,
    "confirmed": true
  }
];