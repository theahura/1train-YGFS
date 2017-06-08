function finalDataBuild() {
	nodes = {
        "Donald Trump": {
            "name": "Donald Trump",
            "country": "USA",
            "index": 1,
            "x": width * 0.05,
            "y": height * 0.6,
            "image": "Donald-Trump.png",
            "image_source_name": "National Review",
            "image_source_url": "http://www.nationalreview.com/article/430533/donald-trump-grow",
            "description": "President of the United States"
        },
        "Vladimir Putin": {
            "name": "Vladimir Putin",
            "country": "Russia",
            "index": 2,
	        "x": width * 0.95,
	        "y": height * 0.5,
            "image": "Vladimir-Putin.png",
            "image_source_name": "Daily Express",
            "image_source_url": "http://www.express.co.uk/pictures/galleries/3216/Vladimir-Putin-Russian-president-politician-pictures/Russian-President-Vladimir-Putin-leaves-the-Elysee-Palace-73375",
            "description": "President of the Russian Federation"
        },
        "Paul Manafort": {
            "name": "Paul Manafort",
            "country": "USA",
            "index": 3,
            "x": width * 0.05,
            "y": height * 0.9,
            "image": "Paul-Manafort.png",
            "image_source_name": "NYT",
            "image_source_url": "https://www.nytimes.com/2016/08/15/us/politics/paul-manafort-ukraine-donald-trump.html",
            "description": "American lawyer, lobbyist, and political consultant"
        },
        "Oleg Deripaska": {
            "name": "Oleg Deripaska",
            "country": "Russia",
            "index": 4,
            "x": width * 0.4,
            "y": height * 0.8,
            "image": "oleg-Deripaska.png",
            "image_source_name": "Huffington Post",
            "image_source_url": "http://www.huffingtonpost.com/2013/07/08/oleg-deripaska-bonus_n_3560778.html",
            "description": "Russian oligarch and philanthropist, founder and owner of industrial group Basic Element"
        },
        "Michael Flynn": {
            "name": "Michael Flynn",
            "country": "USA",
            "index": 5,
            "x": width * 0.06,
            "y": height * 0.4,
            "image": "Michael-Flynn.png",
            "image_source_name": "Politico",
            "image_source_url": "http://www.politico.com/story/2016/07/donald-trump-general-michael-flynn-vp-225253",
            "description": "Retired United States Army lieutenant general"
        },
        "RT": {
            "name": "RT",
            "country": "Russia",
            "index": 6,
            "x": width * 0.7,
            "y": height * 0.5,
            "image": "RT.png",
            "image_source_name": "RT",
            "image_source_url": "https://www.rt.com/",
            "description": "Russian international television network funded by the Russian government"
        },
        "Sergey Kislyak": {
            "name": "Sergey Kislyak",
            "country": "Russia",
            "index": 7,
            "x": width * 0.55,
            "y": height * 0.46,
            "image": "Sergey-Kislyak.png",
            "image_source_name": "CNN",
            "image_source_url": "http://www.cnn.com/2017/03/02/world/sergey-kislyak-russian-ambassador-us-profile/index.html",
            "description": "Russian Ambassador to the United States"
        },
        "Kaspersky Lab": {
            "name": "Kaspersky Lab",
            "country": "Russia",
            "index": 8,
            "x": width * 0.5,
            "y": height * 0.9,
            "image": "Kaspersky-Lab.png",
            "image_source_name": "Twitter",
            "image_source_url": "https://twitter.com/kaspersky",
            "description": "Russian multinational cybersecurity and anti-virus provider"
        },
        "Volga-Dnepr Group": {
            "name": "Volga-Dnepr Group",
            "country": "Russia",
            "index": 9,
            "x": width * 0.8,
            "y": height * 0.8,
            "image": "Volga-Dnepr-Group.png",
            "image_source_name": "Twitter",
            "image_source_url": "https://twitter.com/volgadneprgroup?lang=en",
            "description": "Russian airline holding company"
        },
        "Jared Kushner": {
            "name": "Jared Kushner",
            "country": "USA",
            "index": 10,
            "x": width * 0.3,
            "y": height * 0.9,
            "image": "Jared-Kushner.png",
            "image_source_name": "NYMag",
            "image_source_url": "http://nymag.com/news/features/57891/",
            "description": "American real estate investor and developer, and newspaper owner"
        },
        "Sergey Gorkov": {
            "name": "Sergey Gorkov",
            "country": "Russia",
            "index": 11,
            "x": width * 0.53,
            "y": height * 0.78,
            "image": "Sergey-Gorkov.png",
            "image_source_name": "Business Insider",
            "image_source_url": "http://www.businessinsider.com/jared-kushner-russia-vnesheconombank-ceo-putin-2017-3",
            "description": "Russian banker and attorney, chairman of state-owned Vnesheconombank"
        },
        "Jeff Sessions": {
            "name": "Jeff Sessions",
            "country": "USA",
            "index": 12,
            "x": width * 0.22,
            "y": height * 0.54,
            "image": "Jeff-Sessions.png",
            "image_source_name": "Slate",
            "image_source_url": "http://www.slate.com/articles/news_and_politics/politics/2017/01/jeff_sessions_fights_for_racist_outcomes_who_care_what_s_in_his_heart.html",
            "description": "Attorney General of the United States"
        },
        "Viktor Yanukovych": {
            "name": "Viktor Yanukovych",
            "country": "Russia",
            "index": 13,
            "x": width * 0.76,
            "y": height * 0.65,
            "image": "Viktor-Yanukovych.png",
            "image_source_name": "BBC",
            "image_source_url": "http://www.bbc.com/news/world-europe-25182830",
            "description": "Former President of Ukraine"
        },
        "Dmytro Firtash": {
            "name": "Dmytro Firtash",
            "country": "Russia",
            "index": 14,
            "x": width * 0.63,
            "y": height * 0.74,
            "image": "Dmytro-Firtash.png",
            "image_source_name": "Wikipedia",
            "image_source_url": "https://en.wikipedia.org/wiki/Dmytro_Firtash",
            "description": "Russian billionaire who funds the campaigns of pro-Russian Ukrainian politicians"
        },
        "Carter Page": {
            "name": "Carter Page",
            "country": "USA",
            "index": 15,
            "x": width * 0.17,
            "y": height * 0.9,
            "image": "Carter-Page.png",
            "image_source_name": "NBC News",
            "image_source_url": "http://www.nbcnews.com/news/us-news/trump-campaign-associate-carter-page-revealed-target-russian-spies-n742356",
            "description": "Russian billionaire who funds the campaigns of pro-Russian Ukrainian politicians"
        },
        "Sergey Yatsenko": {
            "name": "Sergey Yatsenko",
            "country": "Russia",
            "index": 16,
            "x": width * 0.9,
            "y": height * 0.84,
            "image": "",
            "image_source_name": "",
            "image_source_url": "",
            "description": "Former deputy chief financial officer at Gazprom"
        },
        "Gazprom": {
            "name": "Gazprom",
            "country": "Russia",
            "index": 16,
            "x": width * 0.87,
            "y": height * 0.65,
            "image": "Gazprom.png",
            "image_source_name": "Twitter",
            "image_source_url": "https://twitter.com/gazpromen",
            "description": "Large Russian energy company majority-owned by the government"
        },
        "Victor Podobnyy": {
            "name": "Victor Podobnyy",
            "country": "Russia",
            "index": 17,
            "x": width * 0.82,
            "y": height * 0.48,
            "image": "",
            "image_source_name": "",
            "image_source_url": "",
            "description": "Russian spy accused of committing espionage in the United States"
        },
        "Roger Stone": {
            "name": "Roger Stone",
            "country": "USA",
            "index": 18,
            "x": width * 0.105,
            "y": height * 0.78,
            "image": "Roger-Stone.png",
            "image_source_name": "Salon",
            "image_source_url": "http://www.salon.com/2015/01/28/roger_stone_vs_the_world_inside_the_conspiracy_filled_mind_of_legendary_gop_trickster/",
            "description": "American political consultant, lobbyist, and strategist"
        },
        "Guccifer 2.0": {
            "name": "Guccifer 2.0",
            "country": "Russia",
            "index": 19,
            "x": width * 0.64,
            "y": height * 0.6,
            "image": "Guccifer-2.0.png",
            "image_source_name": "Twitter",
            "image_source_url": "https://twitter.com/guccifer_2",
            "description": "Twitter account that took credit for the hacking of the Democratic National Committee"
        },
        "WikiLeaks": {
            "name": "WikiLeaks",
            "country": "Neither",
            "index": 20,
            "x": width * 0.34,
            "y": height * 0.38,
            "image": "WikiLeaks.png",
            "image_source_name": "WikiLeaks",
            "image_source_url": "https://wikileaks.org/",
            "description": "International non-profit organization that publishes secret information provided anonymously"
        },
        "Hillary Clinton": {
            "name": "Hillary Clinton",
            "country": "USA",
            "index": 21,
            "x": width * 0.38,
            "y": height * 0.65,
            "image": "Hillary-Clinton.png",
            "image_source_name": "Politifact",
            "image_source_url": "http://www.politifact.com/truth-o-meter/statements/2016/may/31/hillary-clinton/fact-checking-hillary-clintons-claim-her-email-pra/",
            "description": "2016 Democratic candidate for President of the United States"
        },
        "J.D. Gordon": {
            "name": "J.D. Gordon",
            "country": "USA",
            "index": 22,
            "x": width * 0.2,
            "y": height * 0.38,
            "image": "JD-Gordon.png",
            "image_source_name": "Wikipedia",
            "image_source_url": "https://en.wikipedia.org/wiki/J._D._Gordon",
            "description": "American communications and foreign policy advisor, former spokesman for the Pentagon"
        },
        "Andrii Artemenko": {
            "name": "Andrii Artemenko",
            "country": "Russia",
            "index": 23,
            "x": width * 0.53,
            "y": height * 0.6,
            "image": "Andrii-Artemenko.png",
            "image_source_name": "NYT",
            "image_source_url": "https://www.nytimes.com/2017/02/22/opinion/ukraine-and-the-shadowy-freelancers.html",
            "description": "Ukrainian politician with a peace plan for Ukraine"
        },
        "Felix Sater": {
            "name": "Felix Sater",
            "country": "USA",
            "index": 24,
            "x": width * 0.15,
            "y": height * 0.64,
            "image": "Felix-Sater.png",
            "image_source_name": "Twitter",
            "image_source_url": "https://twitter.com/felixsater",
            "description": "American real estate developer and former managing director of Bayrock Group LLC"
        },
        "Michael Cohen": {
            "name": "Michael Cohen",
            "country": "USA",
            "index": 25,
            "x": width * 0.12,
            "y": height * 0.5,
            "image": "Michael-Cohen.png",
            "image_source_name": "CNN",
            "image_source_url": "http://www.cnn.com/2015/07/13/politics/donald-trump-immigration-mexico-el-chapo/index.html",
            "description": "American lawyer, spokesperson for Donald Trump"
        },
        "Erik Prince": {
            "name": "Erik Prince",
            "country": "USA",
            "index": 26,
            "x": width * 0.31,
            "y": height * 0.56,
            "image": "Erik-Prince.png",
            "image_source_name": "ABC News",
            "image_source_url": "http://abcnews.go.com/US/blackwater-founder-erik-prince-regrets-working-us-state/story?id=20931184",
            "description": "American businessman and former U.S. Navy SEAL officer, Founder of government services and security company Blackwater USA"
        },
        "Rex Tillerson": {
            "name": "Rex Tillerson",
            "country": "USA",
            "index": 27,
            "x": width * 0.23,
            "y": height * 0.71,
            "image": "Rex-Tillerson.png",
            "image_source_name": "NYer",
            "image_source_url": "http://www.newyorker.com/news/news-desk/rex-tillerson-from-a-corporate-oil-sovereign-to-the-state-department",
            "description": "United States Secretary of State, diplomat, civil engineer, and former CEO of ExxonMobil"
        },
        "Yuri Milner": {
            "name": "Yuri Milner",
            "country": "Russia",
            "index": 28,
            "x": width * 0.61,
            "y": height * 0.87,
            "image": "Yuri-Milner.png",
            "image_source_name": "PopSci",
            "image_source_url": "http://www.popsci.com/who-is-yuri-milner",
            "description": "Russian entrepreneur, venture capitalist and physicist, Founder of DST Global"
        },
        "Aras Agalarov": {
            "name": "Aras Agalarov",
            "country": "Neither",
            "index": 29,
            "x": width * 0.44,
            "y": height * 0.52,
            "image": "Aras-Agalarov.png",
            "image_source_name": "Politico",
            "image_source_url": "http://www.politico.com/story/2016/05/donald-trump-russia-moscow-miss-universe-223173",
            "description": "Azerbaijani businessman, developer, and public figure"
        },
        "Dmitry Medvedev": {
            "name": "Dmitry Medvedev",
            "country": "Russia",
            "index": 30,
            "x": width * 0.74,
            "y": height * 0.9,
            "image": "Dmitry-Medvedev.png",
            "image_source_name": "Wikipedia",
            "image_source_url": "https://en.wikipedia.org/wiki/Inauguration_of_Dmitry_Medvedev",
            "description": "Prime Minister of the Russian Federation"
        },
        "George Papadopoulos": {
            "name": "George Papadopoulos",
            "country": "USA",
            "index": 31,
            "x": width * 0.32,
            "y": height * 0.74,
            "image": "George-Papadopoulos.png",
            "image_source_name": "ABC News",
            "image_source_url": "http://abcnews.go.com/Politics/meet-donald-trumps-foreign-policy-advisers/story?id=37822480",
            "description": "Former foreign policy advisor for Donald Trump"
        },
        "Sergei Millian": {
            "name": "Sergei Millian",
            "country": "Neither",
            "index": 32,
            "x": width * 0.45,
            "y": height * 0.7,
            "image": "Sergei-Millian.png",
            "image_source_name": "The Independent",
            "image_source_url": "http://www.independent.co.uk/news/world/americas/source-d-trump-russia-dossier-sergei-millian-putin-belarus-american-billionaire-christopher-steele-a7657446.html",
            "description": "Belarusian-American businessman, President of the Russian American Chamber of Commerce"
        },
    }

	links = [
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Paul Manafort"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Manafort was Trump's former presidential campaign manager",
            "news_source_name":"NPR",
            "news_source_url": "http://www.npr.org/2017/06/05/531588442/russian-businessman-with-ties-to-ex-trump-campaign-official-comes-under-scrutiny"
        },
        {
            "source": nodes["Paul Manafort"],
            "target": nodes["Oleg Deripaska"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": false,
            "description":"Manafort wrote to Deripaska in 2005 that he would work to benefit Putin's government",
            "news_source_name":"NPR",
            "news_source_url": "http://www.npr.org/2017/06/05/531588442/russian-businessman-with-ties-to-ex-trump-campaign-official-comes-under-scrutiny"
        },
        {
            "source": nodes["Paul Manafort"],
            "target": nodes["Viktor Yanukovych"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Manafort worked for Yanukovych, the former president of Ukraine, who was backed by the Kremlin",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/05/11/opinion/trump-russia-fbi-investigation.html?_r=0"
        },
        {
            "source": nodes["Viktor Yanukovych"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Yanukovych fled to Russia with Putin's support after being ousted from Ukraine",
            "news_source_name":"BBC",
            "news_source_url": "http://www.bbc.com/news/world-europe-29761799"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Michael Flynn"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Flynn was Trump's former National Security Advisor",
            "news_source_name":"LATimes",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Personal,
            "sweep": 0,
            "confirmed": true,
            "description":"Flynn attended a Moscow dinner in 2015 where he sat next to Putin",
            "news_source_name":"LATimes",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Flynn contacted Kislyak several times on December 29, including via telephone",
            "news_source_name":"LATimes",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["RT"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Flynn received more than $45,000 from RT in December 2015",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/new-details-released-on-russia-related-payments-to-flynn-before-he-joined-trump-campaign/2017/03/16/52a4205a-0a55-11e7-a15f-a58d4a988474_story.html?utm_term=.8ab41b4586ba"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Kaspersky Lab"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Flynn received $11,250 from Kaspersky Lab in 2015",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/new-details-released-on-russia-related-payments-to-flynn-before-he-joined-trump-campaign/2017/03/16/52a4205a-0a55-11e7-a15f-a58d4a988474_story.html?utm_term=.8ab41b4586ba"
        },
        {
            "source": nodes["Michael Flynn"],
            "target": nodes["Volga-Dnepr Group"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Flynn received $11,250 from Volga-Dnepr Group in 2015",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/new-details-released-on-russia-related-payments-to-flynn-before-he-joined-trump-campaign/2017/03/16/52a4205a-0a55-11e7-a15f-a58d4a988474_story.html?utm_term=.8ab41b4586ba"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Jared Kushner"],
            "type": LINK_TYPE.Personal,
            "sweep": 1,
            "confirmed": true,
            "description":"Kushner is Trump's son-in-law",
            "news_source_name":"",
            "news_source_url": ""
        },
        {
            "source": nodes["Jared Kushner"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Kushner met with Russian ambassador Sergey Kislyak during transition into White House, and they discussed the possibility of creating a secret backchannel between the Trump transition team and Kremlin",
            "news_source_name":"NYT",
            "news_source_url": "https://www.washingtonpost.com/politics/as-white-house-defends-jared-kushner-experts-question-his-back-channel-move/2017/05/28/9a82cfea-43c9-11e7-b08b-1818ab401a7f_story.html"
        },
        {
            "source": nodes["Jared Kushner"],
            "target": nodes["Sergey Gorkov"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Kushner met with Russian businessman Sergey Gorkov at the request of the Russian ambassador",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/27/us/politics/senate-jared-kushner-russia.html?_r=0"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Jeff Sessions"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Sessions was appointed as Attorney General by Trump",
            "news_source_name":"",
            "news_source_url": ""
        },
        {
            "source": nodes["Jeff Sessions"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Sessions met twice with Russian ambassador Sergey Kislyak while campaigning for Trump, did not disclose to Senate",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/02/us/politics/jeff-sessions-russia-trump-investigation-democrats.html"
        },
        {
            "source": nodes["Paul Manafort"],
            "target": nodes["Dmytro Firtash"],
            "type": LINK_TYPE.Business,
            "sweep": 0,
            "confirmed": true,
            "description":"Manafort bought a Park Avenue hotel site with Firtash",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/02/us/politics/jeff-sessions-russia-trump-investigation-democrats.html"
        },
        {
            "source": nodes["Dmytro Firtash"],
            "target": nodes["Viktor Yanukovych"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Firtash helped fund Yanukovych's political career",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/03/02/us/politics/jeff-sessions-russia-trump-investigation-democrats.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Carter Page"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Page briefly served as an advisor to Trump during his campaign",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/04/19/us/politics/carter-page-russia-trump.html"
        },
        {
            "source": nodes["Carter Page"],
            "target": nodes["Sergey Yatsenko"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Yatsenko partnered with Page's company Global Energy Capital L.L.C on some deals",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/04/19/us/politics/carter-page-russia-trump.html"
        },
        {
            "source": nodes["Sergey Yatsenko"],
            "target": nodes["Gazprom"],
            "type": LINK_TYPE.Business,
            "sweep": 0,
            "confirmed": true,
            "description":"Yatsenko used to be a deputy chief financial officer for Gazprom",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/04/19/us/politics/carter-page-russia-trump.html"
        },
        {
            "source": nodes["Gazprom"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Gazprom is majority-owned by the Russian government, and Putin maintains close ties",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/04/19/us/politics/carter-page-russia-trump.html"
        },
        {
            "source": nodes["Carter Page"],
            "target": nodes["Gazprom"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Page was an adviser on key transactions for Gazprom while working at Merrill Lynch Russia",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/business/economy/trump-advisers-public-comments-ties-to-moscow-stir-unease-in-both-parties/2016/08/05/2e8722fa-5815-11e6-9aee-8075993d73a2_story.html"
        },
        {
            "source": nodes["Carter Page"],
            "target": nodes["Victor Podobnyy"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": false,
            "description":"Page was caught speaking to Podobnyy in April 2013, unclear if Page knew Podobnyy was a spy",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/04/19/us/politics/carter-page-russia-trump.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Roger Stone"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Stone was an informal but close adviser to Trump",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/05/11/opinion/trump-russia-fbi-investigation.html?_r=0"
        },
        {
            "source": nodes["Roger Stone"],
            "target": nodes["Guccifer 2.0"],
            "type": LINK_TYPE.Personal,
            "sweep": 1,
            "confirmed": true,
            "description":"Stone exchanged messages with Guccifer 2.0 in the summer of 2016",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/05/11/opinion/trump-russia-fbi-investigation.html?_r=0"
        },
        {
            "source": nodes["RT"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"RT is funded by Putin's government in Russia",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/01/07/world/europe/russias-rt-the-network-implicated-in-us-election-meddling.html"
        },
        {
            "source": nodes["Sergey Kislyak"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Kislyak is an official in Putin's government",
            "news_source_name":"LATimes",
            "news_source_url": "http://www.latimes.com/politics/la-na-pol-trump-flynn-comey-russia-timeline-2017-htmlstory.html"
        },
        {
            "source": nodes["Victor Podobnyy"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Podobnyy was working for S.V.R, a Russian government spy agency",
            "news_source_name":"",
            "news_source_url": ""
        },
        {
            "source": nodes["Roger Stone"],
            "target": nodes["WikiLeaks"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Stone claims to have a legal back-channel to WikiLeaks",
            "news_source_name":"The Guardian",
            "news_source_url": "https://www.theguardian.com/us-news/2017/mar/05/roger-stone-trump-adviser-julian-assange"
        },
        {
            "source": nodes["WikiLeaks"],
            "target": nodes["Hillary Clinton"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"WikiLeaks published emails related to Clinton's presidential campaign",
            "news_source_name":"The Guardian",
            "news_source_url": "https://www.theguardian.com/us-news/2017/mar/05/roger-stone-trump-adviser-julian-assange"
        },
        {
            "source": nodes["Hillary Clinton"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"US Intelligence asserts that Putin was hostile to Clinton and her campaign",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/world/national-security/intelligence-chiefs-expected-in-new-york-to-brief-trump-on-russian-hacking/2017/01/06/5f591416-d41a-11e6-9cb0-54ab630851e8_story.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["J.D. Gordon"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Gordon was a former adviser to Trump",
            "news_source_name":"The Independent",
            "news_source_url": "http://www.independent.co.uk/news/world/americas/us-politics/donald-trump-adviser-jeffrey-jd-gordon-speak-russia-ambassador-sergey-kislyak-us-relations-isis-a7616436.html"
        },
        {
            "source": nodes["J.D. Gordon"],
            "target": nodes["Sergey Kislyak"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Gordon met with Kislyak during 2016 Republican National Convention",
            "news_source_name":"The Independent",
            "news_source_url": "http://www.independent.co.uk/news/world/americas/us-politics/donald-trump-adviser-jeffrey-jd-gordon-speak-russia-ambassador-sergey-kislyak-us-relations-isis-a7616436.html"
        },
        {
            "source": nodes["Andrii Artemenko"],
            "target": nodes["Paul Manafort"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Artemenko belongs to a Ukrainian political bloc whose efforts were previously aided by Manafort",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/amid-russia-scrutiny-trump-associates-received-informal-ukraine-policy-proposal/2017/02/19/72b0b264-f6eb-11e6-be05-1a3817ac21a5_story.html"
        },
        {
            "source": nodes["Michael Cohen"],
            "target": nodes["Andrii Artemenko"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Cohen met with Artemenko in January 2017 to discuss a pro-Russia peace plan for Ukraine",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/amid-russia-scrutiny-trump-associates-received-informal-ukraine-policy-proposal/2017/02/19/72b0b264-f6eb-11e6-be05-1a3817ac21a5_story.html"
        },
        {
            "source": nodes["Felix Sater"],
            "target": nodes["Andrii Artemenko"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Sater met with Artemenko in January 2017 to discuss a pro-Russia peace plan for Ukraine",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/amid-russia-scrutiny-trump-associates-received-informal-ukraine-policy-proposal/2017/02/19/72b0b264-f6eb-11e6-be05-1a3817ac21a5_story.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Michael Cohen"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Cohen has been a Trump Organization lawyer since 2007",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/amid-russia-scrutiny-trump-associates-received-informal-ukraine-policy-proposal/2017/02/19/72b0b264-f6eb-11e6-be05-1a3817ac21a5_story.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Felix Sater"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Sater is a former real-estate business partner of Trump",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/politics/amid-russia-scrutiny-trump-associates-received-informal-ukraine-policy-proposal/2017/02/19/72b0b264-f6eb-11e6-be05-1a3817ac21a5_story.html"
        },
        {
            "source": nodes["Andrii Artemenko"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Artemenko was accused by Ukrainian prosecutors of conspiring with the Russian government to commit \"subversive acts against Ukraine\"",
            "news_source_name":"NYT",
            "news_source_url": "https://www.nytimes.com/2017/02/21/world/europe/andrii-artemenko-ukraine-russia.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Erik Prince"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Prince has close ties to key Trump administrators and was seen in the Trump transition offices in December 2016",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/world/national-security/blackwater-founder-held-secret-seychelles-meeting-to-establish-trump-putin-back-channel/2017/04/03/95908a08-1648-11e7-ada0-1489b735b3a3_story.html?utm_term=.f8fb8a6b8e78"
        },
        {
            "source": nodes["Erik Prince"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": false,
            "description":"Prince and a Russian close to Putin met in January 2017 to allegedly establish a back-channel between Moscow and Trump",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/world/national-security/blackwater-founder-held-secret-seychelles-meeting-to-establish-trump-putin-back-channel/2017/04/03/95908a08-1648-11e7-ada0-1489b735b3a3_story.html?utm_term=.f8fb8a6b8e78"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Rex Tillerson"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Trump appointed Tillerson as Secretary of State",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/?utm_term=.54ee89e74afb"
        },
        {
            "source": nodes["Rex Tillerson"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Personal,
            "sweep": 1,
            "confirmed": true,
            "description":"Tillerson was awarded the \"Order of Friendship\" by Putin",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/?utm_term=.54ee89e74afb"
        },
        {
            "source": nodes["Rex Tillerson"],
            "target": nodes["Gazprom"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Tillerson negotiated an ExxonMobil project in Russia, fighting off Gazprom",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/business/economy/tillersons-relations-with-autocrats-forged-during-decades-in-industry/2016/12/13/2d4c663e-c08e-11e6-897f-918837dae0ae_story.html"
        },
        {
            "source": nodes["Jared Kushner"],
            "target": nodes["Yuri Milner"],
            "type": LINK_TYPE.Business,
            "sweep": 0,
            "confirmed": true,
            "description":"Milner is the main investor of Kushner's real estate startup Cadre",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Aras Agalarov"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Agalarov invested in and helped bring Trump's 2013 Miss Universe Pageant to Moscow",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/"
        },
        {
            "source": nodes["Aras Agalarov"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Agalarov served as a liason between Trump and Putin",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/"
        },
        {
            "source": nodes["Sergey Gorkov"],
            "target": nodes["Dmitry Medvedev"],
            "type": LINK_TYPE.Business,
            "sweep": 1,
            "confirmed": true,
            "description":"Medvedev is on the supervisory board of Gorkov's bank Vnesheconombank",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/"
        },
        {
            "source": nodes["Dmitry Medvedev"],
            "target": nodes["Vladimir Putin"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": true,
            "description":"Medvedev and Putin are famously close political allies",
            "news_source_name":"",
            "news_source_url": ""
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["George Papadopoulos"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": true,
            "description":"Papadopoulos was an \"energy and oil consultant\" according to Trump ",
            "news_source_name":"WashPo",
            "news_source_url": "https://www.washingtonpost.com/graphics/national/trump-russia/"
        },
        {
            "source": nodes["George Papadopoulos"],
            "target": nodes["Sergei Millian"],
            "type": LINK_TYPE.Political,
            "sweep": 0,
            "confirmed": false,
            "description":"According to Millian, he was in touch with Papadopoulos during the campaign and presidential transition",
            "news_source_name":"The Independent",
            "news_source_url": "http://www.independent.co.uk/news/world/americas/source-d-trump-russia-dossier-sergei-millian-putin-belarus-american-billionaire-christopher-steele-a7657446.html"
        },
        {
            "source": nodes["Donald Trump"],
            "target": nodes["Sergei Millian"],
            "type": LINK_TYPE.Political,
            "sweep": 1,
            "confirmed": false,
            "description":"Millian claims that Trump hired prostitutes at Moscow Ritz-Carlton and the Kremlin kept evidence of this",
            "news_source_name":"The Independent",
            "news_source_url": "http://www.independent.co.uk/news/world/americas/source-d-trump-russia-dossier-sergei-millian-putin-belarus-american-billionaire-christopher-steele-a7657446.html"
        }
    ]
}