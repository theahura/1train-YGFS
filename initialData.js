var width = window.innerWidth,
    height = window.innerHeight,
    nodes, links;

var LINK_TYPE = {
  Business: "business",
  Political: "political",
  Personal: "personal",
  Default: "default"
}

nodes = {
    "Donald Trump": {
        "name": "United States",
        "USA": true,
        "index": 1,
        "x": width * 0.75,
        "y": height * 0.7,
        "image": "http://www.flags.net/images/largeflags/UNST0001.GIF",
        "description": "dick president",
        "source":""
    },
    "Vladimir Putin": {
        "name": "Russia",
        "USA": false,
        "index": 2,
        "x": width * 0.85,
        "y": height * 0.3,
        "image": "https://upload.wikimedia.org/wikipedia/en/archive/f/f3/20120812153730%21Flag_of_Russia.svg",
        "description": "dick prime minister",
        "source":""
    }
}

links = [
  {
    "source": nodes["Donald Trump"],
    "target": nodes["Vladimir Putin"],
    "type": LINK_TYPE.Default,
    "index": 0,
    "linknum": 0,
    "confirmed": true
  },
  {
    "source": nodes["Vladimir Putin"],
    "target": nodes["Donald Trump"],
    "type": LINK_TYPE.Default,
    "index": 1,
    "linknum": 2000,
    "confirmed": true
  },
  {
    "source": nodes["Donald Trump"],
    "target": nodes["Vladimir Putin"],
    "type": LINK_TYPE.Default,
    "index": 2,
    "linknum": 1000,
    "confirmed": true
  },
  {
    "source": nodes["Vladimir Putin"],
    "target": nodes["Donald Trump"],
    "type": LINK_TYPE.Default,
    "index": 3,
    "linknum": 0,
    "confirmed": true
  }
];