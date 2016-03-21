var config = {
    lang: 'en',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: false,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'phoenix,us',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: '<API Goes Here>'
        }
    },
    compliments: {
        interval: 120000,
        fadeInterval: 2500,
        morning: [
	    'And this is the testimony: God has given us eternal life, and this life is in His Son. Whoever has the Son has life; whoever does not have the Son of God does not have life. I write these things to you who believe in the name of the Son of God so that you may know that you have eternal life. (1 John 5:11-13)',
	    'The Lord is compassionate and gracious, slow to anger, abounding in love. (Psalm 103:8)',
	    'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is-His good, pleasing and perfect will. (Romans 12:2)'
        ],
        afternoon: [
            'Do not get drunk on wine, which leads to debauchery. Instead be filled with the Spirit, (Eph 5:18)',
            'do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. 7 And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. (Php 4:6-7)',
            'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work. (2 Tim 3:16-17)'
        ],
        evening: [
            'But in your hearts revere Christ as Lord. Always be prepared to give an answer to everyone who asks you to give the reason for the hope that you have. But do this with gentleness and respect, (1 Peter 3:15)',
            'Then Jesus said to his disciples, \'Whoever wants to be my disciple must deny themselves and take up their cross and follow me. For whoever wants to save their life will lose it, but whoever loses their life for me will find it.\' (Matt 16:24-25)',
            'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is-His good, pleasing and perfect will. (Rom 12:2)'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		// {
			// symbol: 'calendar-plus-o', 
			// url: ''
		// },
		// {
			// symbol: 'soccer-ball-o',
			// url: '',
		// },
		{
			symbol: 'mars',
			url: 'iCal private address',
		},
		{
			symbol: 'venus',
			url: 'iCal private address',
		},
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml',
	feed: 'http://feeds.washingtonpost.com/rss/rss_election-2012',
	feed: 'http://www.wired.com/category/underwire/feed/',
	feed: 'http://www.wired.com/category/gear/feed/',
	feed: 'http://www.wired.com/category/reviews/feed/',
	feed: 'http://www.wired.com/category/science/feed/',
    }
}
