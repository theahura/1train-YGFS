var nodes, links;

var LINK_TYPE = {
  Business: "business",
  Political: "political",
  Personal: "personal",
  Default: "default"
}

function initialize() {
	nodes = {
        "Donald Trump": {
            "name": "Donald Trump",
            "USA": true,
            "index": 1,
            "x": 100,
            "y": 100,
            "image": "http://media.boingboing.net/wp-content/uploads/2016/11/trump.jpg",
            "description": "dick president",
            "source":"",
        	"largeRadius": false
        },
        "Vladimir Putin": {
            "name": "Vladimir Putin",
            "USA": false,
            "index": 2,
            "x": 500,
            "y": 500,
            "image": "http://static2.businessinsider.com/image/5232093ceab8ea8a68966704/meet-the-pr-firm-that-helped-vladimir-putin-troll-the-entire-country.jpg",
            "description": "dick prime minister",
            "source":"",
        	"largeRadius": false
        },
        "Ivanka Trump": {
            "name": "Ivanka Trump",
            "USA": true,
            "index": 3,
            "x": 300,
            "y": 500,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivankatrump.jpg/170px-Ivankatrump.jpg",
            "description": "dick president's daughter",
            "source":""
        }
    }

	links = [
	{
        source: nodes["Donald Trump"],
        target: nodes["Vladimir Putin"],
        type: LINK_TYPE.Political,
        confirmed: true
    },
    {
        source: nodes["Donald Trump"],
        target: nodes["Ivanka Trump"],
        type: LINK_TYPE.Business,
        confirmed: false
    }
    ]

}