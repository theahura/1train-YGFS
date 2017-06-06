function dataBuild() {
	nodes = {
        "Donald Trump": {
            "name": "Donald Trump",
            "USA": true,
            "index": 1,
            "x": width * 0.05,
            "y": height * 0.5,
            "image": "Donald-Trump.png",
            "image_source_name": "National Review",
            "image_source_url": "http://c10.nrostatic.com/sites/default/files/styles/original_image_with_cropping/public/uploaded/donald-trump-grow-up.jpg?itok=n1PW3Myr",
            "description": "President of the United States"
        },
        "Vladimir Putin": {
            "name": "Vladimir Putin",
            "USA": false,
            "index": 2,
	        "x": width * 0.95,
	        "y": height * 0.5,
            "image": "Vladimir-Putin.png",
            "image_source_name": "Daily Express",
            "image_source_url": "http://cdn.images.express.co.uk/img/dynamic/galleries/x701/73375.jpg",
            "description": "President of the Russian Federation"
        },
        // "Ivanka Trump": {
        //     "name": "Ivanka Trump",
        //     "USA": true,
        //     "index": 3,
        //     "x": 300,
        //     "y": 300,
        //     "image": "ivanka-trump.png",
        //     "source_name": "Yahoo",
        //     "source_url": "https://s.yimg.com/uu/api/res/1.2/U7k0xM2ymzzM1MgSz_2kYQ--/cT04NTtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-US/homerun/time_72/a99ef0edcd3745f65a4bf61a1f67373b",
        //     "description": "Daughter of the President of the United States"
        // },
        "Paul Manafort": {
            "name": "Paul Manafort",
            "USA": true,
            "index": 3,
            "x": width * 0.1,
            "y": height * 0.7,
            "image": "Paul-Manafort.png",
            "image_source_name": "Daily Express",
            "image_source_url": "http://cdn.images.express.co.uk/img/dynamic/galleries/x701/73375.jpg",
            "description": "American lawyer, lobbyist, and political consultant"
        },
        "Oleg Deripaska": {
            "name": "Oleg Deripaska",
            "USA": false,
            "index": 4,
            "x": width * 0.9,
            "y": height * 0.8,
            "image": "oleg-Deripaska.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Russian oligarch and philanthropist, founder and owner of industrial group Basic Element"
        },
        "Michael Flynn": {
            "name": "Michael Flynn",
            "USA": true,
            "index": 5,
            "x": width * 0.1,
            "y": height * 0.3,
            "image": "Michael-Flynn.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Retired United States Army lieutenant general"
        },
        "RT": {
            "name": "RT",
            "USA": false,
            "index": 6,
            "x": width * 0.8,
            "y": height * 0.45,
            "image": "RT.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Russian international television network funded by the Russian government"
        },
        "Sergey Kislyak": {
            "name": "Sergey Kislyak",
            "USA": false,
            "index": 7,
            "x": width * 0.6,
            "y": height * 0.3,
            "image": "Sergey-Kislyak.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Russian Ambassador to the United States"
        },
        "Kaspersky Lab": {
            "name": "Kaspersky Lab",
            "USA": false,
            "index": 8,
            "x": width * 0.7,
            "y": height * 0.7,
            "image": "Kaspersky-Lab.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Russian multinational cybersecurity and anti-virus provider"
        },
        "Volga-Dnepr Group": {
            "name": "Volga-Dnepr Group",
            "USA": false,
            "index": 9,
            "x": width * 0.8,
            "y": height * 0.8,
            "image": "Volga-Dnepr-Group.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Russian airline holding company"
        },
        "Jared Kushner": {
            "name": "Jared Kushner",
            "USA": true,
            "index": 10,
            "x": width * 0.1,
            "y": height * 0.4,
            "image": "Jared-Kushner.png",
            "image_source_name": "NYT",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "American real estate investor and developer, and newspaper owner"
        },
        "Sergey Gorkov": {
            "name": "Sergey Gorkov",
            "USA": false,
            "index": 11,
            "x": width * 0.6,
            "y": height * 0.6,
            "image": "Sergey-Gorkov.png",
            "image_source_name": "NYT",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Russian banker and attorney, chairman of state-owned Vnesheconombank"
        },
        "Jeff Sessions": {
            "name": "Jeff Sessions",
            "USA": true,
            "index": 12,
            "x": width * 0.15,
            "y": height * 0.5,
            "image": "Jeff-Sessions.png",
            "image_source_name": "NYT",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Attorney General of the United States"
        },
        "Viktor Yanukovych": {
            "name": "Viktor Yanukovych",
            "USA": false,
            "index": 13,
            "x": width * 0.6,
            "y": height * 0.8,
            "image": "Viktor-Yanukovych.png",
            "image_source_name": "NYT",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Former President of Ukraine"
        },
        "Dmytro Firtash": {
            "name": "Dmytro Firtash",
            "USA": false,
            "index": 14,
            "x": width * 0.55,
            "y": height * 0.85,
            "image": "Dmytro-Firtash.png",
            "image_source_name": "NYT",
            "image_source_url": "http://i.huffpost.com/gen/1230583/images/o-OLEG-DERIPASKA-facebook.jpg",
            "description": "Former President of Ukraine"
        }
    }

	links = [
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Paul Manafort"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Was Trump's former presidential campaign manager",
            "news_source_name":"NPR",
            "news_source_url": "http://www.npr.org/2017/06/05/531588442/russian-businessman-with-ties-to-ex-trump-campaign-official-comes-under-scrutiny"
        },
        {
            "source": nodes["Paul Manafort"],
            "target": nodes["Oleg Deripaska"],
            "type": LINK_TYPE.Business,
            "confirmed": false,
            "description":"Wrote to Deripaska in 2005 that he would work to benefit Putin's government",
            "news_source_name":"NPR",
            "news_source_url": "http://www.npr.org/2017/06/05/531588442/russian-businessman-with-ties-to-ex-trump-campaign-official-comes-under-scrutiny"
        },
        {
            "source": nodes["Paul Manafort"],
            "target": nodes["Viktor Yanukovych"],
            "type": LINK_TYPE.Business,
            "confirmed": true,
            "description":"Worked for Yanukovych, the former president of Ukraine, who was backed by the Kremlin",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/05/11/opinion/trump-russia-fbi-investigation.html?_r=0"
        },
        {
            "source": nodes["Viktor Yanukovych"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Fled to Russia with Putin's support after being ousted from Ukraine",
            "news_source_name":"BBC",
            "news_source_url": "http://www.bbc.com/news/world-europe-29761799"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Michael Flynn"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Was Trump's former National Security Advisor",
            "news_source_name":"LA Times",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Personal,
            "confirmed": true,
            "description":"Attended a Moscow dinner in 2015 where he sat next to Putin",
            "news_source_name":"LA Times",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Contacted Kislyak several times on December 29, including via telephone",
            "news_source_name":"LA Times",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["RT"],
            "type": LINK_TYPE.Business,
            "confirmed": true,
            "description":"Received more than $45,000 from RT in December 2015",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/new-details-released-on-russia-related-payments-to-flynn-before-he-joined-trump-campaign/2017/03/16/52a4205a-0a55-11e7-a15f-a58d4a988474_story.html?utm_term=.8ab41b4586ba"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Kaspersky Lab"],
            "type": LINK_TYPE.Business,
            "confirmed": true,
            "description":"Received $11,250 from Kaspersky Lab in 2015",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/new-details-released-on-russia-related-payments-to-flynn-before-he-joined-trump-campaign/2017/03/16/52a4205a-0a55-11e7-a15f-a58d4a988474_story.html?utm_term=.8ab41b4586ba"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Volga-Dnepr Group"],
            "type": LINK_TYPE.Business,
            "confirmed": true,
            "description":"Received $11,250 from Volga-Dnepr Group in 2015",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/new-details-released-on-russia-related-payments-to-flynn-before-he-joined-trump-campaign/2017/03/16/52a4205a-0a55-11e7-a15f-a58d4a988474_story.html?utm_term=.8ab41b4586ba"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Jared Kushner"],
            "type": LINK_TYPE.Personal,
            "confirmed": true,
            "description":"Married to Trump's daughter, Ivanka",
            "news_source_name":"",
            "news_source_url": ""
        },
        {
            "source": nodes["Jared Kushner"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Met with Russian ambassador Sergey Kislyak during transition into White House",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/27/us/politics/senate-jared-kushner-russia.html?_r=0"
        },
        {
            "source": nodes["Jared Kushner"],
            "target": nodes["Sergey Gorkov"],
            "type": LINK_TYPE.Business,
            "confirmed": true,
            "description":"Met with Russian businessman Sergey Gorkov at the request of the Russian ambassador",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/27/us/politics/senate-jared-kushner-russia.html?_r=0"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Jeff Sessions"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Appointed as Attorney General",
            "news_source_name":"",
            "news_source_url": ""
        },
        {
            "source": nodes["Jeff Sessions"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "confirmed": true,
            "description":"Met twice with Russian ambassador Sergey Kislyak while campaigning for Trump, did not disclose to Senate",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/02/us/politics/jeff-sessions-russia-trump-investigation-democrats.html"
        },
        {
            "source": nodes["Paul Manafort"],
            "target": nodes["Dmytro Firtash"],
            "type": LINK_TYPE.Business,
            "confirmed": true,
            "description":" Bought Park Avenue hotel site with Firtash",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/02/us/politics/jeff-sessions-russia-trump-investigation-democrats.html"
        },
	 //    {
	 //        "source": nodes["Donald Trump"],
	 //        "target": nodes["Ivanka Trump"],
	 //        "type": LINK_TYPE.Business,
	 //        "confirmed": false,
		//     "description":"norf norf norff. norf norf norff. norf norf norff.",
		//     "news_source":""
	 //    }
    ]

}