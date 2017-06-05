function dataBuild() {
	nodes = {
        "Donald Trump": {
            "name": "Donald Trump",
            "USA": true,
            "index": 1,
            "x": width * 0.1,
            "y": height * 0.5,
            "image": "donald-trump.png",
            "source_name": "National Review",
            "source_url": "http://c10.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/donald-trump-grow-up.jpg?itok=n1PW3Myr",
            "description": "dick president"
        },
        "Vladimir Putin": {
            "name": "Vladimir Putin",
            "USA": false,
            "index": 2,
	        "x": width * 0.9,
	        "y": height * 0.5,
            "image": "vladimir-putin.png",
            "source_name": "Daily Express",
            "source_url": "http://cdn.images.express.co.uk/img/dynamic/galleries/x701/73375.jpg",
            "description": "dick prime minister"
        },
        "Ivanka Trump": {
            "name": "Ivanka Trump",
            "USA": true,
            "index": 3,
            "x": 300,
            "y": 300,
            "image": "ivanka-trump.png",
            "source_name": "Yahoo",
            "source_url": "https://s.yimg.com/uu/api/res/1.2/U7k0xM2ymzzM1MgSz_2kYQ--/cT04NTtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/time_72/a99ef0edcd3745f65a4bf61a1f67373b",
            "description": "dick president's daughter"
        },
        "Rex Tillerson": {
            "name": "Rex Tillerson",
            "USA": true,
            "index": 4,
            "x": 550,
            "y": 300,
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Ivankatrump.jpg/170px-Ivankatrump.jpg",
            "description": "dick president's SecState"
        }
    }

	links = [
		{
	        "source": nodes["Donald Trump"],
	        "target": nodes["Vladimir Putin"],
	        "type": LINK_TYPE.Political,
	        "confirmed": true,
		    "description":"blah blah blahh. blah blah blahh. blah blah blahh.",
		    "news_source":""
	    },
	    {
	        "source": nodes["Donald Trump"],
	        "target": nodes["Ivanka Trump"],
	        "type": LINK_TYPE.Business,
	        "confirmed": false,
		    "description":"norf norf norff. norf norf norff. norf norf norff.",
		    "news_source":""
	    },
	    {
	        "source": nodes["Ivanka Trump"],
	        "target": nodes["Rex Tillerson"],
	        "type": LINK_TYPE.Business,
	        "confirmed": false,
		    "description":"blerg blerg blergg. blerg blerg blergg. blerg blerg blergg.",
		    "news_source":""
	    }
    ]

}