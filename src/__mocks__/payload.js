export const payload = {
  type: 'page',
  pageType: 'category',
  sectionId: '35bb8a90-d40e-11e2-8b8b-0800200c9a66',
  title: 'TV-serier online - Streama bra serier på nätet el ladda ned',
  description:
    'Viaplay erbjuder serier på nätet för hela familjen. Streama bra TV-serier online i hög kvalitet eller ladda ned till tablet eller mobil!',
  styles: [],
  _links: {
    curies: [
      {
        name: 'viaplay',
        href: 'http://docs.viaplay.tv/rel/{rel}',
        templated: true
      }
    ],
    self: { href: 'https://content.viaplay.se/pc-se/serier/samtliga' },
    'viaplay:root': {
      id: 'root',
      title: 'Start',
      href: 'https://content.viaplay.se/pc-se'
    },
    'viaplay:editorial': {
      id: 'editorial',
      href: 'https://content.viaplay.se/pc-se/editorial'
    },
    'viaplay:socket': { id: 'socket', href: 'https://socket.viaplay.se/' },
    'viaplay:socket2': { id: 'socket', href: 'https://socket2.viaplay.se/' },
    'viaplay:search': {
      title: 'Sök',
      href: 'https://content.viaplay.se/pc-se/search{?query}',
      templated: true
    },
    'viaplay:autocomplete': {
      title: 'autocomplete',
      href: 'https://content.viaplay.se/pc-se/autocomplete{?query}',
      templated: true
    },
    'viaplay:byGuid': {
      title: 'byGuid',
      href:
        'https://content.viaplay.se/pc-se/byguid/{guid}{?returnFirstEpisode,seasonId,tveProgram}',
      templated: true
    },
    'viaplay:validateSession': {
      id: 'validateSession',
      href: 'https://login.viaplay.se/api/validateSession/v1{?session}',
      templated: true
    },
    'viaplay:translations': {
      id: 'translations',
      href: 'https://cms-service.viaplay.se/translations/pc',
      templated: false
    },
    'viaplay:technotifier': {
      id: 'technotifier',
      href: 'https://viaplay.mtg-api.com/tech-notifications/v1/viaplay/sv-se/pc'
    },
    'viaplay:sections': [
      {
        id: '35bb8a90-d40e-11e2-8b8b-0800200c9a66',
        title: 'Serier',
        href: 'https://content.viaplay.se/pc-se/serier',
        type: 'vod',
        name: 'series',
        active: true
      },
      {
        id: '2037b330-d411-11e2-8b8b-0800200c9a66',
        title: 'Film',
        href: 'https://content.viaplay.se/pc-se/film',
        type: 'vod',
        name: 'movie'
      },
      {
        id: '8e5febf0-d4e0-11e2-8b8b-0800200c9a66',
        title: 'Sport',
        href: 'https://content.viaplay.se/pc-se/sport',
        type: 'sportPerDay',
        name: 'sport'
      },
      {
        id: '1a6a2ec0-d4e2-11e2-8b8b-0800200c9a66',
        title: 'Barn',
        href: 'https://content.viaplay.se/pc-se/barn',
        type: 'children',
        name: 'kids'
      },
      {
        id: '85561ec0-d4e1-11e2-8b8b-0800200c9a66',
        title: 'Hyr & köp',
        href: 'https://content.viaplay.se/pc-se/store',
        type: 'vod',
        name: 'rental'
      },
      {
        id: 'b35d0a33-ec9d-4e4c-9846-92addb9ec00d',
        title: 'Prova Viaplay',
        href: 'https://content.viaplay.se/pc-se/package',
        type: 'editorial',
        name: 'b35d0a33-ec9d-4e4c-9846-92addb9ec00d'
      }
    ],
    'viaplay:geolocation': {
      href:
        'https://viaplay.mtg-api.com/geolocation/viaplay/portability{?ip,country}'
    },
    'viaplay:login': {
      title: 'Login',
      href:
        'https://login.viaplay.se/api/login/v1?deviceKey=pc-se&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Fserier%2Fsamtliga{&username,password,persistent,forward}',
      templated: true
    },
    'viaplay:facebookLogin': {
      title: 'Facebook Login',
      href:
        'https://login.viaplay.se/api/facebook/login?deviceKey=pc-se&returnurl=https%3A%2F%2Fcontent.viaplay.se%2Fpc-se%2Fserier%2Fsamtliga{&code,token,persistent}',
      templated: true
    },
    'viaplay:tokenLogin': {
      href:
        'https://login.viaplay.se/api/tokenLogin?deviceKey=pc-se{&accessToken,persistent,returnurl}',
      method: 'GET',
      templated: true
    },
    'viaplay:passwordToken': {
      id: 'createPasswordToken',
      href:
        'https://viaplay.mtg-api.com/identity/viaplay/emails/{email}/user/password-token',
      method: 'POST',
      templated: true
    },
    'viaplay:resetPassword': {
      id: 'resetPassword',
      href: 'https://viaplay.mtg-api.com/identity/viaplay/passwords',
      method: 'PUT'
    },
    'viaplay:retrieveUserEmail': {
      id: 'retrieveUserEmail',
      href:
        'https://viaplay.mtg-api.com/identity/{brand}/reset-pwd-tokens/{+resetPwdToken}/user/email',
      method: 'GET',
      templated: true
    },
    'viaplay:categoryFilters': [
      {
        title: 'Alla serier',
        href: 'https://content.viaplay.se/pc-se/serier/samtliga',
        templated: false,
        tagId: '0',
        type: 'vod',
        active: true
      },
      {
        title: 'Action',
        href: 'https://content.viaplay.se/pc-se/serier/action',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99879986',
        type: 'vod'
      },
      {
        title: 'Animation',
        href: 'https://content.viaplay.se/pc-se/serier/animation',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '22740520196',
        type: 'vod'
      },
      {
        title: 'Barnserier',
        href: 'https://content.viaplay.se/pc-se/serier/barnserier',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '98856437',
        type: 'vod'
      },
      {
        title: 'Dokumentärer',
        href: 'https://content.viaplay.se/pc-se/serier/dokumentarer',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '127528063',
        type: 'vod'
      },
      {
        title: 'Drama',
        href: 'https://content.viaplay.se/pc-se/serier/drama',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '98856440',
        type: 'vod'
      },
      {
        title: 'Komedi',
        href: 'https://content.viaplay.se/pc-se/serier/komedi',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99368193',
        type: 'vod'
      },
      {
        title: 'Kriminaldrama',
        href: 'https://content.viaplay.se/pc-se/serier/kriminaldrama',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99368197',
        type: 'vod'
      },
      {
        title: 'Livsstil',
        href: 'https://content.viaplay.se/pc-se/serier/livsstil',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99368226',
        type: 'vod'
      },
      {
        title: 'Matlagning',
        href: 'https://content.viaplay.se/pc-se/serier/matlagning',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '108071990',
        type: 'vod'
      },
      {
        title: 'Reality',
        href: 'https://content.viaplay.se/pc-se/serier/reality',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '108071975',
        type: 'vod'
      },
      {
        title: 'Science fiction',
        href: 'https://content.viaplay.se/pc-se/serier/science-fiction',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99368202',
        type: 'vod'
      },
      {
        title: 'Sportdokumentärer',
        href: 'https://content.viaplay.se/pc-se/serier/sportdokumentarer',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99368449',
        type: 'vod'
      },
      {
        title: 'Thriller',
        href: 'https://content.viaplay.se/pc-se/serier/thriller',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99368200',
        type: 'vod'
      },
      {
        title: 'Underhållning',
        href: 'https://content.viaplay.se/pc-se/serier/underhallning',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '99879970',
        type: 'vod'
      },
      {
        title: 'Ungdomsserier',
        href: 'https://content.viaplay.se/pc-se/serier/ungdomsserier',
        group: { position: 1, title: 'Kategorier' },
        templated: false,
        tagId: '52266536373',
        type: 'vod'
      },
      {
        title: 'Viaplay Originals',
        href: 'https://content.viaplay.se/pc-se/serier/viaplay-originals',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '68727336337',
        type: 'vod'
      },
      {
        title: 'Viaplay Exclusives',
        href: 'https://content.viaplay.se/pc-se/serier/viaplay-exclusives',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '44464168408',
        type: 'vod'
      },
      {
        title: 'Alla säsonger',
        href: 'https://content.viaplay.se/pc-se/serier/alla-sasonger',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '37749288368',
        type: 'vod'
      },
      {
        title: 'Baserade på böcker',
        href: 'https://content.viaplay.se/pc-se/serier/baserade-pa-bocker',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '28107304398',
        type: 'vod'
      },
      {
        title: 'Kommer snart',
        href: 'https://content.viaplay.se/pc-se/premieres',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '0',
        type: 'vod'
      },
      {
        title: 'ABC Studios',
        href: 'https://content.viaplay.se/pc-se/serier/abc-studios',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '0',
        type: 'vod'
      },
      {
        title: 'FOX+',
        href: 'https://content.viaplay.se/pc-se/serier/fox',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '0',
        type: 'vod'
      },
      {
        title: 'Svenska serier',
        href: 'https://content.viaplay.se/pc-se/serier/svenska-serier',
        group: { position: 2, title: 'Teman' },
        templated: false,
        tagId: '967208351',
        type: 'vod'
      }
    ],
    'viaplay:sortings': [
      {
        id: 'most_popular',
        title: 'Populära',
        href:
          'https://content.viaplay.se/pc-se/serier/samtliga?sort=most_popular',
        active: true
      },
      {
        id: 'recently_added',
        title: 'Senast tillagda',
        href:
          'https://content.viaplay.se/pc-se/serier/samtliga?sort=recently_added'
      },
      {
        id: 'highest_ratings',
        title: 'Högst betyg',
        href:
          'https://content.viaplay.se/pc-se/serier/samtliga?sort=highest_ratings'
      },
      {
        id: 'alphabetical',
        title: 'A-Ö',
        href:
          'https://content.viaplay.se/pc-se/serier/samtliga?sort=alphabetical{&letter}',
        templated: true
      }
    ]
  },
  _embedded: {
    'viaplay:blocks': [
      {
        ablocator: '6dd481845f73b596b7a95456c2d918e0',
        id: '6dd481845f73b596b7a95456c2d918e0',
        type: 'list',
        client: {
          styles: 'landscape',
          autoAppend: true,
          module: 'collection',
          template: 'collection'
        },
        styles: ['landscape', 'list'],
        title: 'Alla serier sorterat på Populära',
        totalProductCount: 317,
        currentPage: 1,
        pageCount: 32,
        productsPerPage: 10,
        _embedded: {
          'viaplay:products': [
            {
              type: 'series',
              publicPath: 'greys-anatomy',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Cover.jpg?width=199&height=298&template=abcstudios',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Cover.jpg{?width,height}&template=abcstudios'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Packshot.jpg?width=960&height=540&template=abcstudios',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Packshot.jpg{?width,height}&template=abcstudios'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Cover.jpg{?width,height}&template=abcstudios'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/279/80/GreysAnatomy14_Packshot.jpg{?width,height}&template=abcstudios'
                  }
                },
                people: {},
                parentalRating: '12',
                series: {
                  title: "Grey's Anatomy",
                  synopsis:
                    'Ett högintensivt medicinskt drama där vi får följa Meredith Grey och hennes kollegor. De ställs dagligen inför livsavgörande beslut, men hos varandra hittar de stöd, vänskap och en hel del kärlek.',
                  seasons: 14,
                  seriesGuid: 'series-greys-anatomy'
                },
                imdb: {
                  id: 'tt0413573',
                  rating: '7.6',
                  votes: '207 500',
                  url: 'http://www.imdb.com/title/tt0413573?ref_ext_viaplay'
                },
                production: { year: 2004 }
              },
              user: { starred: false },
              system: {
                flags: ['hd', 'availableInHd'],
                guid: 'series-greys-anatomy',
                isKids: false
              },
              _links: {
                self: {
                  title: "Grey's Anatomy",
                  href:
                    'https://content.viaplay.se/pc-se/serier/greys-anatomy?partial=true'
                },
                'viaplay:page': {
                  title: "Grey's Anatomy",
                  href: 'https://content.viaplay.se/pc-se/serier/greys-anatomy'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'criminal-minds',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/CriminalMinds_Cover.jpg?width=199&height=298&template=abcstudios',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/CriminalMinds_Cover.jpg{?width,height}&template=abcstudios'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/CriminalMinds_Landscape.jpg?width=960&height=540&template=abcstudios',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/CriminalMinds_Landscape.jpg{?width,height}&template=abcstudios'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/criminalminds_hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/CriminalMinds_Cover.jpg{?width,height}&template=abcstudios'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/712/784/CriminalMinds_Landscape.jpg{?width,height}&template=abcstudios'
                  }
                },
                people: {},
                parentalRating: '12',
                series: {
                  title: 'Criminal Minds',
                  synopsis:
                    'FBI:s elitteam, the Behavioral Analysis Unit, utreder USA:s farligaste kriminella hjärnor och försöker förutse gärningsmännens nästa drag – och stoppa dem innan de hinner slå till igen.',
                  seasons: 13,
                  seriesGuid: 'series-criminal-minds'
                },
                imdb: {
                  id: 'tt0452046',
                  rating: '8.1',
                  votes: '136 070',
                  url: 'http://www.imdb.com/title/tt0452046?ref_ext_viaplay'
                },
                production: { year: 2005 }
              },
              user: { starred: false },
              system: {
                flags: [],
                guid: 'series-criminal-minds',
                isKids: false
              },
              _links: {
                self: {
                  title: 'Criminal Minds',
                  href:
                    'https://content.viaplay.se/pc-se/serier/criminal-minds?partial=true'
                },
                'viaplay:page': {
                  title: 'Criminal Minds',
                  href: 'https://content.viaplay.se/pc-se/serier/criminal-minds'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href:
                      'https://content.viaplay.se/pc-se/serier/kriminaldrama'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'blacklist-the',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/599/188/TheBlacklist6Exc_Cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/599/188/TheBlacklist6Exc_Cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/599/188/TheBlacklist6Exc_Packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/599/188/TheBlacklist6Exc_Packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/611/16/Hero_Blacklist.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/599/188/TheBlacklist6Exc_Cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/599/188/TheBlacklist6Exc_Packshot.jpg{?width,height}'
                  }
                },
                originalTitle: 'Blacklist, The',
                people: {},
                parentalRating: '12',
                series: {
                  title: 'The Blacklist',
                  synopsis:
                    'I en av Viaplays mest populära serier följer vi FBI-agenten Elizabeth Keen, som under mystiska omständigheter möter det kriminella geniet Red. Tillsammans bekämpar de världens farligaste brottslingar.',
                  availabilityInfo: '9 Mars 05.00',
                  seasons: 6,
                  seriesGuid: 'series-blacklist-the'
                },
                imdb: {
                  id: 'tt2741602',
                  rating: '8.1',
                  votes: '152 741',
                  url: 'http://www.imdb.com/title/tt2741602?ref_ext_viaplay'
                },
                production: { year: 2014 }
              },
              user: { starred: false },
              system: {
                flags: ['sd'],
                guid: 'series-blacklist-the',
                isKids: false
              },
              _links: {
                self: {
                  title: 'The Blacklist',
                  href:
                    'https://content.viaplay.se/pc-se/serier/blacklist-the?partial=true'
                },
                'viaplay:page': {
                  title: 'The Blacklist',
                  href: 'https://content.viaplay.se/pc-se/serier/blacklist-the'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  },
                  {
                    title: 'Thriller',
                    tagId: '99368200',
                    href: 'https://content.viaplay.se/pc-se/serier/thriller'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'vampire-diaries-the',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/444/784/TheVampireDiaries8_Packshot.jpg{?width,height}'
                  }
                },
                originalTitle: 'Vampire Diaries, The',
                people: {},
                parentalRating: '12',
                series: {
                  title: 'The Vampire Diaries',
                  synopsis:
                    'Två vampyrbröder, en ond och en god, återvänder till hemstaden Mystic Falls. Där förälskar de sig i samma tjej, Elena. Kampen är ett faktum och nu är det upp till Elena – vem ska hon välja?',
                  seasons: 8,
                  seriesGuid: 'series-vampire-diaries-the'
                },
                imdb: {
                  id: 'tt1405406',
                  rating: '7.7',
                  votes: '259 135',
                  url: 'http://www.imdb.com/title/tt1405406?ref_ext_viaplay'
                },
                production: { year: 2009 }
              },
              user: { starred: false },
              system: {
                flags: ['hd', 'availableInHd'],
                guid: 'series-vampire-diaries-the',
                isKids: false
              },
              _links: {
                self: {
                  title: 'The Vampire Diaries',
                  href:
                    'https://content.viaplay.se/pc-se/serier/vampire-diaries-the?partial=true'
                },
                'viaplay:page': {
                  title: 'The Vampire Diaries',
                  href:
                    'https://content.viaplay.se/pc-se/serier/vampire-diaries-the'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  },
                  {
                    title: 'Thriller',
                    tagId: '99368200',
                    href: 'https://content.viaplay.se/pc-se/serier/thriller'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'lethal-weapon',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/286/700/LethalWeapon3Exc_Packshot.jpg{?width,height}'
                  }
                },
                people: {},
                parentalRating: '12',
                series: {
                  title: 'Lethal Weapon',
                  synopsis:
                    'En av Hollywoods mest efterlängtade nyinspelningar och baserad på filmerna med samma namn. En kaxig polisduo jobbar hårt för att hålla ställningarna i ett pulserande L.A.',
                  seasons: 3,
                  seriesGuid: 'series-lethal-weapon'
                },
                imdb: {
                  id: 'tt5164196',
                  rating: '8.0',
                  votes: '31 479',
                  url: 'http://www.imdb.com/title/tt5164196?ref_ext_viaplay'
                },
                production: { year: 2016 }
              },
              user: { starred: false },
              system: {
                flags: ['sd'],
                guid: 'series-lethal-weapon',
                isKids: false
              },
              _links: {
                self: {
                  title: 'Lethal Weapon',
                  href:
                    'https://content.viaplay.se/pc-se/serier/lethal-weapon?partial=true'
                },
                'viaplay:page': {
                  title: 'Lethal Weapon',
                  href: 'https://content.viaplay.se/pc-se/serier/lethal-weapon'
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pc-se/serier/komedi'
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pc-se/serier/action'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'chicago-fire',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/chicagofire5_cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/chicagofire5_cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/chicagofire5_packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/chicagofire5_packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/ChicagoFire5_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/chicagofire5_cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/118/792/chicagofire5_packshot.jpg{?width,height}'
                  }
                },
                people: {},
                parentalRating: '15',
                series: {
                  title: 'Chicago Fire',
                  synopsis:
                    'För de modiga brandmännen på Brandstation 51 kommer alltid offrens säkerhet först. Följ dem i deras dagliga kamp fylld av dramatik, spänning och interna stridigheter.',
                  seasons: 5,
                  seriesGuid: 'series-chicago-fire'
                },
                imdb: {
                  id: 'tt2261391',
                  rating: '7.9',
                  votes: '29 842',
                  url: 'http://www.imdb.com/title/tt2261391?ref_ext_viaplay'
                },
                production: { year: 2012 }
              },
              user: { starred: false },
              system: {
                flags: ['hd', 'availableInHd'],
                guid: 'series-chicago-fire',
                isKids: false
              },
              _links: {
                self: {
                  title: 'Chicago Fire',
                  href:
                    'https://content.viaplay.se/pc-se/serier/chicago-fire?partial=true'
                },
                'viaplay:page': {
                  title: 'Chicago Fire',
                  href: 'https://content.viaplay.se/pc-se/serier/chicago-fire'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  },
                  {
                    title: 'Action',
                    tagId: '99879986',
                    href: 'https://content.viaplay.se/pc-se/serier/action'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'family-guy',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_landscape_GE.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_landscape_GE.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/935/376/FamilyGuy_landscape_GE.jpg{?width,height}'
                  }
                },
                people: {},
                parentalRating: '15',
                series: {
                  title: 'Family Guy',
                  synopsis:
                    'Denna kultserie, med fler än hundra nomineringar och priser, är en av världens mest älskade. Peter Griffin och hans dysfunktionella familj bjuder på knäppa vardagsscenarios som du sent kommer glömma.',
                  seasons: 16,
                  seriesGuid: 'series-family-guy'
                },
                imdb: {
                  id: 'tt0182576',
                  rating: '8.2',
                  votes: '279 710',
                  url: 'http://www.imdb.com/title/tt0182576?ref_ext_viaplay'
                },
                production: { year: 1999 }
              },
              user: { starred: false },
              system: { flags: [], guid: 'series-family-guy', isKids: false },
              _links: {
                self: {
                  title: 'Family Guy',
                  href:
                    'https://content.viaplay.se/pc-se/serier/family-guy?partial=true'
                },
                'viaplay:page': {
                  title: 'Family Guy',
                  href: 'https://content.viaplay.se/pc-se/serier/family-guy'
                },
                'viaplay:genres': [
                  {
                    title: 'Komedi',
                    tagId: '99368193',
                    href: 'https://content.viaplay.se/pc-se/serier/komedi'
                  },
                  {
                    title: 'Animation',
                    tagId: '22740520196',
                    href: 'https://content.viaplay.se/pc-se/serier/animation'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'blindspot',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4Exc_Cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4Exc_Cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4Exc_Packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4Exc_Packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4Exc_Cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/605/816/Blindspot4Exc_Packshot.jpg{?width,height}'
                  }
                },
                people: {},
                parentalRating: '12',
                series: {
                  title: 'Blindspot',
                  synopsis:
                    'Ett konspiratoriskt kriminaldrama som kretsar kring en kvinna som hittas på Times Square, utan minne och med kroppen täckt av mystiska tatueringar.',
                  availabilityInfo: '11 Mars 20.00',
                  seasons: 4,
                  seriesGuid: 'series-blindspot'
                },
                imdb: {
                  id: 'tt4474344',
                  rating: '7.5',
                  votes: '58 938',
                  url: 'http://www.imdb.com/title/tt4474344?ref_ext_viaplay'
                },
                production: { year: 2015 }
              },
              user: { starred: false },
              system: {
                flags: ['hd', 'availableInHd'],
                guid: 'series-blindspot',
                isKids: false
              },
              _links: {
                self: {
                  title: 'Blindspot',
                  href:
                    'https://content.viaplay.se/pc-se/serier/blindspot?partial=true'
                },
                'viaplay:page': {
                  title: 'Blindspot',
                  href: 'https://content.viaplay.se/pc-se/serier/blindspot'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href:
                      'https://content.viaplay.se/pc-se/serier/kriminaldrama'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 'good-doctor-the',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor2Exc_cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor2Exc_cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor2Exc_packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor2Exc_packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor2Exc_cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/407/556/TheGoodDoctor2Exc_packshot.jpg{?width,height}'
                  }
                },
                originalTitle: 'Good Doctor, The',
                people: {},
                parentalRating: '12',
                series: {
                  title: 'The Good Doctor',
                  synopsis:
                    'Kan en person som saknar förmågan att relatera till människor faktiskt rädda liv? En ung kirurg med svårigheter att kommunicera läker oron hos sina patienter genom sin smått övernaturliga kunskap.',
                  availabilityInfo: 'Tisdagar 20.00',
                  seasons: 2,
                  seriesGuid: 'series-good-doctor-the'
                },
                imdb: {
                  id: 'tt6470478',
                  rating: '8.3',
                  votes: '41 578',
                  url: 'http://www.imdb.com/title/tt6470478?ref_ext_viaplay'
                },
                production: { year: 2018 }
              },
              user: { starred: false },
              system: {
                flags: ['hd', 'availableInHd'],
                guid: 'series-good-doctor-the',
                isKids: false
              },
              _links: {
                self: {
                  title: 'The Good Doctor',
                  href:
                    'https://content.viaplay.se/pc-se/serier/good-doctor-the?partial=true'
                },
                'viaplay:page': {
                  title: 'The Good Doctor',
                  href:
                    'https://content.viaplay.se/pc-se/serier/good-doctor-the'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            },
            {
              type: 'series',
              publicPath: 's.w.a.t.',
              content: {
                images: {
                  boxart: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2Exc_Cover.jpg?width=199&height=298',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2Exc_Cover.jpg{?width,height}'
                  },
                  landscape: {
                    url:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2Exc_Packshot.jpg?width=960&height=540',
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2Exc_Packshot.jpg{?width,height}'
                  },
                  hero169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2_Hero.jpg{?width,height}'
                  },
                  coverart23: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2Exc_Cover.jpg{?width,height}'
                  },
                  coverart169: {
                    template:
                      'https://i-viaplay-com.akamaized.net/viaplay-prod/610/844/SWAT2Exc_Packshot.jpg{?width,height}'
                  }
                },
                people: {},
                parentalRating: '12',
                series: {
                  title: 'S.W.A.T.',
                  synopsis:
                    'En ung mörkhyad man skjuts av misstag av ledaren för S.W.A.T och Daniel ”Hondo” Harrelsson, som är född och uppvuxen i området, tvingas att axla rollen som ny ledare. Hondo slits mellan lojaliteten till gatan och plikten till sina medarbetare i strävan efter att ena samhället som är i uppror.',
                  availabilityInfo: '8 Mars 20.00',
                  seasons: 2,
                  seriesGuid: 'series-s.w.a.t.'
                },
                imdb: {
                  id: 'tt6111130',
                  rating: '6.7',
                  votes: '8 415',
                  url: 'http://www.imdb.com/title/tt6111130?ref_ext_viaplay'
                },
                production: { year: 2017 }
              },
              user: { starred: false },
              system: {
                flags: ['hd', 'availableInHd'],
                guid: 'series-s.w.a.t.',
                isKids: false
              },
              _links: {
                self: {
                  title: 'S.W.A.T.',
                  href:
                    'https://content.viaplay.se/pc-se/serier/s.w.a.t.?partial=true'
                },
                'viaplay:page': {
                  title: 'S.W.A.T.',
                  href: 'https://content.viaplay.se/pc-se/serier/s.w.a.t.'
                },
                'viaplay:genres': [
                  {
                    title: 'Drama',
                    tagId: '98856440',
                    href: 'https://content.viaplay.se/pc-se/serier/drama'
                  },
                  {
                    title: 'Kriminaldrama',
                    tagId: '99368197',
                    href:
                      'https://content.viaplay.se/pc-se/serier/kriminaldrama'
                  }
                ],
                'viaplay:peopleSearch': {
                  href:
                    'https://content.viaplay.se/pc-se/search?query="{person}"',
                  templated: true
                }
              },
              notice: {
                message: 'User must login to view content',
                code: 1002,
                _links: {
                  curies: [
                    {
                      name: 'viaplay',
                      href: 'http://docs.viaplay.tv/rel/{rel}',
                      templated: true
                    }
                  ],
                  'viaplay:accountPurchasePackage': {
                    href: '/package?recommended=viaplay',
                    templated: false,
                    redirect: false
                  }
                }
              }
            }
          ]
        },
        _links: {
          self: {
            href:
              'https://content.viaplay.se/pc-se/serier/samtliga?blockId=6dd481845f73b596b7a95456c2d918e0&partial=1&pageNumber=1'
          },
          next: {
            href:
              'https://content.viaplay.se/pc-se/serier/samtliga?blockId=6dd481845f73b596b7a95456c2d918e0&partial=1&pageNumber=2'
          },
          first: {
            href:
              'https://content.viaplay.se/pc-se/serier/samtliga?blockId=6dd481845f73b596b7a95456c2d918e0&partial=1&pageNumber=1'
          },
          last: {
            href:
              'https://content.viaplay.se/pc-se/serier/samtliga?blockId=6dd481845f73b596b7a95456c2d918e0&partial=1&pageNumber=32'
          }
        }
      }
    ]
  },
  responseCode: { httpStatus: 200, statusCode: 200, code: 1 }
};
