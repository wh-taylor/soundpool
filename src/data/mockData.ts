import type {
  User,
  FeedPost,
  Band,
  Show,
  VenuePost,
  PhotographerPost,
  ArtistPost,
} from '../types';

export const MOCK_USERS: User[] = [
  {
    "id": "user-9",
    "username": "static_sound",
    "email": "static_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Iron & Wine",
      "Townes Van Zandt"
    ],
    "favoriteGenres": [
      "Folk",
      "Metal"
    ],
    "instruments": [
      "Drums / Percussion",
      "Double Bass"
    ],
    "joinDate": "2025-04-13T03:31:25.824Z",
    "lastActive": "2026-03-01T12:18:56.770Z",
    "customization": {
      "accentColor": "#f4a261"
    },
    "instagram": "static_sound",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by metal. Looking for a drums / percussion player who gets it.",
      "customization": {
        "accentColor": "#f4a261"
      }
    }
  },
  {
    "id": "user-10",
    "username": "dronetape",
    "email": "dronetape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "New Orleans, LA",
    "favoriteArtists": [
      "Slint",
      "Battles",
      "Swans",
      "Don Caballero"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Post-Rock"
    ],
    "instruments": [
      "Drums / Percussion",
      "Bass Guitar"
    ],
    "joinDate": "2024-12-26T20:10:04.612Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "instagram": "dronetape",
    "spotify": "https://open.spotify.com/artist/mock10"
  },
  {
    "id": "user-11",
    "username": "the_neon_guitar",
    "email": "the_neon_guitar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Neutral Milk Hotel",
      "Guided By Voices",
      "Slowdive"
    ],
    "favoriteGenres": [
      "Indie Rock"
    ],
    "instruments": [],
    "joinDate": "2024-08-08T12:04:22.082Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b2226"
    }
  },
  {
    "id": "user-12",
    "username": "the_electric_horn",
    "email": "the_electric_horn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Austin, TX",
    "favoriteArtists": [
      "J. Cole",
      "Run The Jewels"
    ],
    "favoriteGenres": [
      "Trap",
      "Hip-Hop / Rap",
      "R&B / Soul"
    ],
    "instruments": [
      "Flute"
    ],
    "joinDate": "2025-05-25T19:07:36.929Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ae2012"
    },
    "instagram": "the_electric_horn",
    "spotify": "https://open.spotify.com/artist/mock12",
    "jamEntry": {
      "visible": true,
      "description": "Looking for a flute to complete our r&b / soul project.",
      "customization": {
        "accentColor": "#ae2012"
      }
    }
  },
  {
    "id": "user-13",
    "username": "synther78",
    "email": "synther78@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Gojira",
      "Pallbearer",
      "Baroness",
      "Mastodon"
    ],
    "favoriteGenres": [
      "Metal",
      "Thrash Metal"
    ],
    "instruments": [
      "Keys / Piano",
      "Trombone"
    ],
    "joinDate": "2024-05-10T08:57:31.055Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "spotify": "https://open.spotify.com/artist/mock13",
    "jamEntry": {
      "visible": true,
      "description": "Producer with thrash metal beats looking for a live keys / piano player.",
      "customization": {
        "accentColor": "#00b4d8"
      }
    }
  },
  {
    "id": "user-14",
    "username": "staticstrum",
    "email": "staticstrum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "MF DOOM",
      "billy woods",
      "JPEGmafia",
      "Earl Sweatshirt"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap",
      "Trap",
      "R&B / Soul"
    ],
    "instruments": [
      "Bass Guitar",
      "Electric Guitar"
    ],
    "joinDate": "2025-01-18T21:12:13.311Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ca6702"
    },
    "jamEntry": {
      "visible": true,
      "description": "Gigging bass guitar player looking to join a trap outfit.",
      "customization": {
        "accentColor": "#ca6702"
      }
    }
  },
  {
    "id": "user-15",
    "username": "the_bright_bow",
    "email": "the_bright_bow@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Boston, MA",
    "favoriteArtists": [
      "HAIM",
      "Lorde",
      "Robyn"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Funk"
    ],
    "instruments": [
      "Bass Guitar",
      "Electric Guitar"
    ],
    "joinDate": "2024-01-23T16:38:58.337Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "instagram": "the_bright_bow",
    "spotify": "https://open.spotify.com/artist/mock15"
  },
  {
    "id": "user-16",
    "username": "the_fuzzy_hum",
    "email": "the_fuzzy_hum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Boston, MA",
    "favoriteArtists": [
      "Kendrick Lamar",
      "J. Cole",
      "Nas",
      "Earl Sweatshirt"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Mandolin",
      "Lap Steel",
      "Banjo"
    ],
    "joinDate": "2025-03-05T16:17:28.526Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#00bbf9"
    },
    "spotify": "https://open.spotify.com/artist/mock16",
    "jamEntry": {
      "visible": true,
      "description": "Been writing hip-hop / rap tunes for years. Finally looking for a band. Play lap steel?",
      "customization": {
        "accentColor": "#00bbf9"
      }
    }
  },
  {
    "id": "user-17",
    "username": "hollow_tone",
    "email": "hollow_tone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Wayne Shorter",
      "Kamasi Washington",
      "Sharon Jones"
    ],
    "favoriteGenres": [
      "R&B / Soul"
    ],
    "instruments": [],
    "joinDate": "2024-07-19T10:25:25.405Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "instagram": "hollow_tone"
  },
  {
    "id": "user-18",
    "username": "dark_buzz",
    "email": "dark_buzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Austin, TX",
    "favoriteArtists": [
      "LCD Soundsystem",
      "Kraftwerk"
    ],
    "favoriteGenres": [
      "Dance / EDM",
      "Drum & Bass",
      "House"
    ],
    "instruments": [
      "Mandolin",
      "Banjo",
      "Pedal Steel"
    ],
    "joinDate": "2024-05-03T05:01:55.890Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#264653"
    },
    "instagram": "dark_buzz",
    "jamEntry": {
      "visible": true,
      "description": "Starting a drum & bass band. Need a pedal steel player who knows their stuff.",
      "customization": {
        "accentColor": "#264653"
      }
    }
  },
  {
    "id": "user-19",
    "username": "sonickeys",
    "email": "sonickeys@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Nashville, TN",
    "favoriteArtists": [
      "SBTRKT",
      "Boards of Canada",
      "Kraftwerk"
    ],
    "favoriteGenres": [
      "Dance / EDM",
      "House",
      "Emo"
    ],
    "instruments": [],
    "joinDate": "2024-05-12T22:07:46.530Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ca6702"
    },
    "spotify": "https://open.spotify.com/artist/mock19"
  },
  {
    "id": "user-20",
    "username": "stringswolf36",
    "email": "stringswolf36@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Memphis, TN",
    "favoriteArtists": [
      "Obituary",
      "Baroness",
      "Mastodon"
    ],
    "favoriteGenres": [
      "Sludge",
      "Metal",
      "Noise"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-07-14T01:05:51.525Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some noise with a electric guitar.",
      "customization": {
        "accentColor": "#ff6b6b"
      }
    }
  },
  {
    "id": "user-21",
    "username": "neonloop",
    "email": "neonloop@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Boston, MA",
    "favoriteArtists": [
      "Wild Nothing",
      "Men I Trust",
      "The Radio Dept.",
      "Real Estate"
    ],
    "favoriteGenres": [
      "Psychedelic",
      "Indie Rock"
    ],
    "instruments": [
      "Acoustic Guitar"
    ],
    "joinDate": "2025-03-11T06:19:15.695Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#457b9d"
    },
    "instagram": "neonloop",
    "jamEntry": {
      "visible": true,
      "description": "Starting a indie rock band. Need a acoustic guitar player who knows their stuff.",
      "customization": {
        "accentColor": "#457b9d"
      }
    }
  },
  {
    "id": "user-22",
    "username": "vintage_haze",
    "email": "vintage_haze@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Cleveland, OH",
    "favoriteArtists": [
      "Ennio Morricone",
      "Max Richter",
      "Arvo Part"
    ],
    "favoriteGenres": [
      "Ambient",
      "Classical",
      "Post-Rock"
    ],
    "instruments": [
      "Vocals",
      "Drums / Percussion"
    ],
    "joinDate": "2025-10-13T01:21:05.877Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#fee440"
    },
    "spotify": "https://open.spotify.com/artist/mock22",
    "jamEntry": {
      "visible": true,
      "description": "Looking for a vocals to complete our post-rock project.",
      "customization": {
        "accentColor": "#fee440"
      }
    }
  },
  {
    "id": "user-23",
    "username": "vapor_brass",
    "email": "vapor_brass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Danny Brown",
      "JPEGmafia"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Trap",
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Acoustic Guitar"
    ],
    "joinDate": "2024-10-15T07:07:41.043Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#f4a261"
    },
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some trap with a acoustic guitar.",
      "customization": {
        "accentColor": "#f4a261"
      }
    }
  },
  {
    "id": "user-24",
    "username": "hazeace17",
    "email": "hazeace17@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Four Tet",
      "Bicep"
    ],
    "favoriteGenres": [
      "Dance / EDM",
      "Synth-Pop",
      "Stoner Rock"
    ],
    "instruments": [],
    "joinDate": "2024-02-19T03:26:35.110Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "hazeace17"
  },
  {
    "id": "user-25",
    "username": "pure_beat",
    "email": "pure_beat@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "New York, NY",
    "favoriteArtists": [
      "Philip Glass",
      "Olafur Arnalds",
      "Steve Reich"
    ],
    "favoriteGenres": [
      "Folk",
      "Ambient",
      "Classical"
    ],
    "instruments": [],
    "joinDate": "2025-11-27T04:50:23.892Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b5de5"
    },
    "instagram": "pure_beat",
    "spotify": "https://open.spotify.com/artist/mock25"
  },
  {
    "id": "user-26",
    "username": "electric_bass",
    "email": "electric_bass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Austin, TX",
    "favoriteArtists": [
      "Nils Frahm",
      "Philip Glass"
    ],
    "favoriteGenres": [
      "Folk",
      "Classical",
      "Ambient"
    ],
    "instruments": [
      "Violin",
      "Viola"
    ],
    "joinDate": "2024-10-03T20:53:37.682Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#f4a261"
    }
  },
  {
    "id": "user-27",
    "username": "guitardog63",
    "email": "guitardog63@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Denver, CO",
    "favoriteArtists": [
      "Earl Sweatshirt",
      "J. Cole",
      "Run The Jewels",
      "Freddie Gibbs"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap",
      "Trap",
      "Disco"
    ],
    "instruments": [
      "Saxophone"
    ],
    "joinDate": "2025-11-08T02:43:39.521Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#4cc9f0"
    },
    "instagram": "guitardog63",
    "jamEntry": {
      "visible": true,
      "description": "Looking for a saxophone to complete our trap project.",
      "customization": {
        "accentColor": "#4cc9f0"
      }
    }
  },
  {
    "id": "user-28",
    "username": "amper71",
    "email": "amper71@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Max Richter",
      "Ryuichi Sakamoto",
      "Olafur Arnalds"
    ],
    "favoriteGenres": [
      "Classical",
      "Ambient"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2024-07-14T09:08:55.627Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "amper71",
    "jamEntry": {
      "visible": true,
      "description": "Starting a ambient band. Need a electric guitar player who knows their stuff.",
      "customization": {
        "accentColor": "#9b2226"
      }
    }
  },
  {
    "id": "user-29",
    "username": "the_echo_keys",
    "email": "the_echo_keys@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Metallica",
      "Neurosis",
      "Black Sabbath"
    ],
    "favoriteGenres": [
      "Thrash Metal"
    ],
    "instruments": [
      "Acoustic Guitar",
      "Banjo",
      "Vocals"
    ],
    "joinDate": "2024-04-22T03:02:17.918Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#2a9d8f"
    },
    "instagram": "the_echo_keys",
    "jamEntry": {
      "visible": true,
      "description": "Producer with thrash metal beats looking for a live vocals player.",
      "customization": {
        "accentColor": "#2a9d8f"
      }
    }
  },
  {
    "id": "user-30",
    "username": "basshead76",
    "email": "basshead76@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Indianapolis, IN",
    "favoriteArtists": [
      "Obituary",
      "Napalm Death"
    ],
    "favoriteGenres": [
      "Heavy Metal"
    ],
    "instruments": [],
    "joinDate": "2025-03-31T06:45:10.999Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#00f5d4"
    },
    "instagram": "basshead76"
  },
  {
    "id": "user-31",
    "username": "the_dark_tone",
    "email": "the_dark_tone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Baltimore, MD",
    "favoriteArtists": [
      "The Stooges",
      "Bad Brains",
      "Modern Baseball",
      "Dead Kennedys"
    ],
    "favoriteGenres": [
      "Punk",
      "Metal"
    ],
    "instruments": [
      "Viola",
      "Flute",
      "Clarinet"
    ],
    "joinDate": "2025-06-26T13:56:58.172Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "the_dark_tone",
    "jamEntry": {
      "visible": true,
      "description": "Covering all the punk classics plus originals. Need a clarinet.",
      "customization": {
        "accentColor": "#4361ee"
      }
    }
  },
  {
    "id": "user-32",
    "username": "jamhawk97",
    "email": "jamhawk97@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "New Orleans, LA",
    "favoriteArtists": [
      "Toots and the Maytals",
      "Fela Kuti",
      "Gogol Bordello",
      "Mdou Moctar"
    ],
    "favoriteGenres": [
      "Ska",
      "Reggae",
      "Pop"
    ],
    "instruments": [],
    "joinDate": "2024-02-08T03:51:35.254Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#118ab2"
    },
    "spotify": "https://open.spotify.com/artist/mock32"
  },
  {
    "id": "user-33",
    "username": "electric_loop",
    "email": "electric_loop@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Max Richter",
      "Arvo Part",
      "Hauschka",
      "Steve Reich"
    ],
    "favoriteGenres": [
      "Classical",
      "Sludge"
    ],
    "instruments": [
      "Bass Guitar",
      "Drums / Percussion"
    ],
    "joinDate": "2024-12-25T11:33:32.723Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "electric_loop",
    "jamEntry": {
      "visible": true,
      "description": "Covering all the sludge classics plus originals. Need a bass guitar.",
      "customization": {
        "accentColor": "#9b2226"
      }
    }
  },
  {
    "id": "user-34",
    "username": "vintagefuzz",
    "email": "vintagefuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Atlanta, GA",
    "favoriteArtists": [
      "Slowdive",
      "The Radio Dept.",
      "Emiliana Torrini",
      "Beach House"
    ],
    "favoriteGenres": [
      "Shoegaze",
      "Psychedelic"
    ],
    "instruments": [
      "Banjo",
      "Harmonica",
      "Vocals"
    ],
    "joinDate": "2024-05-12T21:27:05.622Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "vintagefuzz",
    "jamEntry": {
      "visible": true,
      "description": "Been writing shoegaze tunes for years. Finally looking for a band. Play vocals?",
      "customization": {
        "accentColor": "#4361ee"
      }
    }
  },
  {
    "id": "user-35",
    "username": "brightring",
    "email": "brightring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Dead Kennedys",
      "Bad Brains",
      "Turnstile"
    ],
    "favoriteGenres": [
      "Post-Hardcore"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2025-07-26T02:18:51.690Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by post-hardcore. Looking for a vocals player who gets it.",
      "customization": {
        "accentColor": "#ffd166"
      }
    }
  },
  {
    "id": "user-36",
    "username": "dark_roar",
    "email": "dark_roar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Wolves in the Throne Room",
      "Sleep",
      "Mastodon",
      "Electric Wizard"
    ],
    "favoriteGenres": [
      "Stoner Rock",
      "Metal"
    ],
    "instruments": [
      "Acoustic Guitar"
    ],
    "joinDate": "2024-06-22T12:23:46.063Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "instagram": "dark_roar",
    "spotify": "https://open.spotify.com/artist/mock36",
    "jamEntry": {
      "visible": true,
      "description": "Starting a metal band. Need a acoustic guitar player who knows their stuff.",
      "customization": {
        "accentColor": "#ffd166"
      }
    }
  },
  {
    "id": "user-37",
    "username": "pluckhead74",
    "email": "pluckhead74@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Snarky Puppy",
      "Mavis Staples",
      "Stevie Wonder",
      "Al Green"
    ],
    "favoriteGenres": [
      "Funk",
      "Blues",
      "Gospel"
    ],
    "instruments": [
      "Flute"
    ],
    "joinDate": "2024-12-06T21:14:17.370Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "instagram": "pluckhead74",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by gospel. Looking for a flute player who gets it.",
      "customization": {
        "accentColor": "#e63946"
      }
    }
  },
  {
    "id": "user-38",
    "username": "fuzzypick",
    "email": "fuzzypick@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Explosions in the Sky",
      "Hella",
      "Don Caballero",
      "Godspeed You! Black Emperor"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Math Rock"
    ],
    "instruments": [
      "Mandolin",
      "Banjo",
      "Lap Steel"
    ],
    "joinDate": "2024-09-17T13:01:52.226Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ae2012"
    },
    "instagram": "fuzzypick"
  },
  {
    "id": "user-39",
    "username": "buzzcat14",
    "email": "buzzcat14@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Denver, CO",
    "favoriteArtists": [
      "Toots and the Maytals",
      "The Skatalites",
      "Amadou & Mariam"
    ],
    "favoriteGenres": [
      "Reggaeton",
      "Synth-Pop"
    ],
    "instruments": [
      "DJ / Turntables",
      "Synthesizer"
    ],
    "joinDate": "2025-12-21T07:26:14.193Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "instagram": "buzzcat14"
  },
  {
    "id": "user-40",
    "username": "rifface24",
    "email": "rifface24@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Los Angeles, CA",
    "favoriteArtists": [
      "Tera Melos",
      "Explosions in the Sky"
    ],
    "favoriteGenres": [
      "Math Rock",
      "Post-Rock"
    ],
    "instruments": [],
    "joinDate": "2025-07-31T22:23:55.071Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#6a0572"
    }
  },
  {
    "id": "user-41",
    "username": "the_cold_amp",
    "email": "the_cold_amp@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Herbie Hancock",
      "John Coltrane",
      "Thelonious Monk"
    ],
    "favoriteGenres": [
      "Jazz",
      "Blues",
      "R&B / Soul"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2025-11-15T02:54:26.849Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "jamEntry": {
      "visible": true,
      "description": "Been writing r&b / soul tunes for years. Finally looking for a band. Play bass guitar?",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-42",
    "username": "humkid48",
    "email": "humkid48@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Toots and the Maytals",
      "Tinariwen",
      "Khruangbin",
      "Amadou & Mariam"
    ],
    "favoriteGenres": [
      "Reggae",
      "Ska",
      "Reggaeton"
    ],
    "instruments": [],
    "joinDate": "2025-06-09T08:59:46.466Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b2226"
    }
  },
  {
    "id": "user-43",
    "username": "lostring",
    "email": "lostring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "New York, NY",
    "favoriteArtists": [
      "Bill Evans",
      "Kamasi Washington",
      "Charles Mingus"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Blues"
    ],
    "instruments": [
      "Vocals",
      "Organ"
    ],
    "joinDate": "2024-08-07T09:04:18.706Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "jamEntry": {
      "visible": true,
      "description": "Working on an EP. Need a vocals for some r&b / soul tracks.",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-44",
    "username": "loudpick",
    "email": "loudpick@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Arvo Part",
      "Olafur Arnalds",
      "Nils Frahm"
    ],
    "favoriteGenres": [
      "Classical",
      "Punk"
    ],
    "instruments": [],
    "joinDate": "2025-02-11T13:23:24.670Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b5de5"
    },
    "instagram": "loudpick"
  },
  {
    "id": "user-45",
    "username": "the_broken_pluck",
    "email": "the_broken_pluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Minneapolis, MN",
    "favoriteArtists": [
      "Superchunk",
      "Dinosaur Jr.",
      "Built to Spill",
      "Archers of Loaf"
    ],
    "favoriteGenres": [
      "Indie Rock",
      "Indie"
    ],
    "instruments": [
      "Lap Steel",
      "Pedal Steel",
      "Mandolin"
    ],
    "joinDate": "2024-08-02T03:56:16.244Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "jamEntry": {
      "visible": true,
      "description": "Forming a indie group. You play lap steel?",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-46",
    "username": "the_digital_vinyl",
    "email": "the_digital_vinyl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "New Orleans, LA",
    "favoriteArtists": [
      "Jay-Z",
      "Kendrick Lamar",
      "Boldy James"
    ],
    "favoriteGenres": [
      "Trap",
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Cello"
    ],
    "joinDate": "2025-11-28T01:22:20.942Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#ee9b00"
    }
  },
  {
    "id": "user-47",
    "username": "burntbuzz",
    "email": "burntbuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Nashville, TN",
    "favoriteArtists": [
      "This Will Destroy You",
      "Swans",
      "Mogwai",
      "Hella"
    ],
    "favoriteGenres": [
      "Experimental",
      "Noise"
    ],
    "instruments": [],
    "joinDate": "2024-08-11T16:29:38.552Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#00b4d8"
    }
  },
  {
    "id": "user-48",
    "username": "the_neon_bass",
    "email": "the_neon_bass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Boston, MA",
    "favoriteArtists": [
      "Electric Wizard",
      "Neurosis",
      "Sepultura"
    ],
    "favoriteGenres": [
      "Metal",
      "Heavy Metal",
      "Sludge"
    ],
    "instruments": [
      "Mandolin",
      "Banjo",
      "Fiddle"
    ],
    "joinDate": "2025-02-22T09:34:24.992Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "the_neon_bass",
    "spotify": "https://open.spotify.com/artist/mock48"
  },
  {
    "id": "user-49",
    "username": "wild_amp",
    "email": "wild_amp@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Angel Olsen",
      "Lorde"
    ],
    "favoriteGenres": [
      "Indie Pop",
      "Dream Pop",
      "Disco"
    ],
    "instruments": [
      "Dobro",
      "Mandolin",
      "Banjo"
    ],
    "joinDate": "2025-05-04T21:04:44.347Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#2a9d8f"
    },
    "instagram": "wild_amp",
    "spotify": "https://open.spotify.com/artist/mock49",
    "jamEntry": {
      "visible": true,
      "description": "Producer with indie pop beats looking for a live mandolin player.",
      "customization": {
        "accentColor": "#2a9d8f"
      }
    }
  },
  {
    "id": "user-50",
    "username": "pure_bow",
    "email": "pure_bow@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Chicago, IL",
    "favoriteArtists": [
      "Don Caballero",
      "Slint",
      "Tera Melos",
      "Battles"
    ],
    "favoriteGenres": [
      "Progressive Rock"
    ],
    "instruments": [],
    "joinDate": "2025-01-03T11:20:04.833Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#00f5d4"
    },
    "instagram": "pure_bow"
  },
  {
    "id": "user-51",
    "username": "analogpluck",
    "email": "analogpluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Denver, CO",
    "favoriteArtists": [
      "Lucinda Williams",
      "Iron & Wine",
      "Jason Isbell",
      "Bon Iver"
    ],
    "favoriteGenres": [
      "Singer-Songwriter",
      "Country",
      "Folk"
    ],
    "instruments": [
      "Synthesizer"
    ],
    "joinDate": "2025-08-19T01:19:48.940Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "spotify": "https://open.spotify.com/artist/mock51"
  },
  {
    "id": "user-52",
    "username": "soundwolf27",
    "email": "soundwolf27@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Newark, DE",
    "favoriteArtists": [
      "Townes Van Zandt",
      "Fleet Foxes",
      "Adrianne Lenker",
      "Lucinda Williams"
    ],
    "favoriteGenres": [
      "Folk",
      "Country",
      "Thrash Metal"
    ],
    "instruments": [
      "Viola",
      "Violin"
    ],
    "joinDate": "2024-11-30T20:22:09.256Z",
    "lastActive": "2026-03-01T12:18:56.771Z",
    "customization": {
      "accentColor": "#f4a261"
    },
    "instagram": "soundwolf27",
    "jamEntry": {
      "visible": true,
      "description": "Gigging violin player looking to join a thrash metal outfit.",
      "customization": {
        "accentColor": "#f4a261"
      }
    }
  },
  {
    "id": "user-53",
    "username": "hornist34",
    "email": "hornist34@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Atlanta, GA",
    "favoriteArtists": [
      "The Radio Dept.",
      "Beach House",
      "My Bloody Valentine"
    ],
    "favoriteGenres": [
      "Post-Rock",
      "Shoegaze"
    ],
    "instruments": [],
    "joinDate": "2024-05-05T01:50:55.052Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "spotify": "https://open.spotify.com/artist/mock53"
  },
  {
    "id": "user-54",
    "username": "hollow_wave",
    "email": "hollow_wave@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "New Orleans, LA",
    "favoriteArtists": [
      "Gillian Welch",
      "Lucinda Williams"
    ],
    "favoriteGenres": [
      "Folk",
      "Country",
      "Indie Rock"
    ],
    "instruments": [],
    "joinDate": "2024-10-29T22:51:57.412Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#3f37c9"
    },
    "spotify": "https://open.spotify.com/artist/mock54"
  },
  {
    "id": "user-55",
    "username": "the_rusty_sound",
    "email": "the_rusty_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Cleveland, OH",
    "favoriteArtists": [
      "Nas",
      "billy woods",
      "Kendrick Lamar"
    ],
    "favoriteGenres": [
      "Trap",
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Vocals",
      "Acoustic Guitar"
    ],
    "joinDate": "2025-02-09T03:11:47.566Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#06d6a0"
    },
    "instagram": "the_rusty_sound"
  },
  {
    "id": "user-56",
    "username": "lostbeat",
    "email": "lostbeat@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Baltimore, MD",
    "favoriteArtists": [
      "Tortoise",
      "Tera Melos"
    ],
    "favoriteGenres": [
      "Post-Rock"
    ],
    "instruments": [],
    "joinDate": "2024-04-25T10:32:09.352Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#3f37c9"
    }
  },
  {
    "id": "user-57",
    "username": "the_neon_haze",
    "email": "the_neon_haze@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Washington, DC",
    "favoriteArtists": [
      "Curtis Mayfield",
      "Miles Davis"
    ],
    "favoriteGenres": [
      "Jazz",
      "Gospel"
    ],
    "instruments": [
      "Lap Steel",
      "Pedal Steel",
      "Dobro"
    ],
    "joinDate": "2025-11-04T06:53:44.953Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#118ab2"
    },
    "instagram": "the_neon_haze",
    "jamEntry": {
      "visible": true,
      "description": "Producer with gospel beats looking for a live lap steel player.",
      "customization": {
        "accentColor": "#118ab2"
      }
    }
  },
  {
    "id": "user-58",
    "username": "the_silent_amp",
    "email": "the_silent_amp@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Washington, DC",
    "favoriteArtists": [
      "John Prine",
      "Gillian Welch",
      "Lucinda Williams"
    ],
    "favoriteGenres": [
      "Folk",
      "Country",
      "Singer-Songwriter"
    ],
    "instruments": [
      "Vocals",
      "Organ"
    ],
    "joinDate": "2024-02-16T15:42:41.121Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#6a0572"
    },
    "spotify": "https://open.spotify.com/artist/mock58",
    "jamEntry": {
      "visible": true,
      "description": "Starting a folk band. Need a organ player who knows their stuff.",
      "customization": {
        "accentColor": "#6a0572"
      }
    }
  },
  {
    "id": "user-59",
    "username": "the_ghost_jam",
    "email": "the_ghost_jam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Turnstile",
      "Title Fight",
      "Fugazi",
      "The Menzingers"
    ],
    "favoriteGenres": [
      "Emo",
      "Punk",
      "Post-Hardcore"
    ],
    "instruments": [
      "Electric Guitar",
      "Bass Guitar"
    ],
    "joinDate": "2025-09-01T02:16:56.678Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#f15bb5"
    }
  },
  {
    "id": "user-60",
    "username": "pickdog25",
    "email": "pickdog25@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Explosions in the Sky",
      "Tortoise"
    ],
    "favoriteGenres": [
      "Progressive Rock"
    ],
    "instruments": [
      "Vocals",
      "Drums / Percussion"
    ],
    "joinDate": "2024-09-06T06:39:41.696Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#2a9d8f"
    },
    "instagram": "pickdog25",
    "spotify": "https://open.spotify.com/artist/mock60",
    "jamEntry": {
      "visible": true,
      "description": "Gigging vocals player looking to join a progressive rock outfit.",
      "customization": {
        "accentColor": "#2a9d8f"
      }
    }
  },
  {
    "id": "user-61",
    "username": "brightchord",
    "email": "brightchord@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Run The Jewels",
      "Kendrick Lamar"
    ],
    "favoriteGenres": [
      "Trap",
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Cello"
    ],
    "joinDate": "2025-10-14T15:49:02.785Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "jamEntry": {
      "visible": true,
      "description": "Lost my old band, starting fresh. trap project, need a cello.",
      "customization": {
        "accentColor": "#f15bb5"
      }
    }
  },
  {
    "id": "user-62",
    "username": "vapor_roar",
    "email": "vapor_roar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Phoenix, AZ",
    "favoriteArtists": [
      "Hot Water Music",
      "Black Flag",
      "Jawbreaker"
    ],
    "favoriteGenres": [
      "Post-Hardcore"
    ],
    "instruments": [],
    "joinDate": "2025-03-21T08:46:19.482Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#118ab2"
    },
    "instagram": "vapor_roar"
  },
  {
    "id": "user-63",
    "username": "noisesynth",
    "email": "noisesynth@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Fugazi",
      "Bad Brains",
      "Hot Water Music"
    ],
    "favoriteGenres": [
      "Punk",
      "Post-Punk",
      "Hardcore"
    ],
    "instruments": [],
    "joinDate": "2024-06-12T17:39:00.569Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "noisesynth"
  },
  {
    "id": "user-64",
    "username": "synthlord0",
    "email": "synthlord0@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Fleet Foxes",
      "Iron & Wine",
      "Adrianne Lenker"
    ],
    "favoriteGenres": [
      "Country",
      "Singer-Songwriter",
      "Folk"
    ],
    "instruments": [
      "Mandolin",
      "Banjo",
      "Lap Steel"
    ],
    "joinDate": "2024-02-18T17:59:21.379Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "instagram": "synthlord0",
    "spotify": "https://open.spotify.com/artist/mock64",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by folk. Looking for a banjo player who gets it.",
      "customization": {
        "accentColor": "#80b918"
      }
    }
  },
  {
    "id": "user-65",
    "username": "fuzzhand96",
    "email": "fuzzhand96@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Johann Johannsson",
      "Max Richter",
      "Arvo Part",
      "Olafur Arnalds"
    ],
    "favoriteGenres": [
      "Classical",
      "Ambient",
      "Folk"
    ],
    "instruments": [],
    "joinDate": "2025-03-05T07:21:33.641Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#2a9d8f"
    },
    "spotify": "https://open.spotify.com/artist/mock65"
  },
  {
    "id": "user-66",
    "username": "the_vintage_haze",
    "email": "the_vintage_haze@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "New Orleans, LA",
    "favoriteArtists": [
      "Charli XCX",
      "Lorde",
      "Paramore"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Disco",
      "Pop"
    ],
    "instruments": [
      "Violin"
    ],
    "joinDate": "2024-01-26T11:34:13.811Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "spotify": "https://open.spotify.com/artist/mock66"
  },
  {
    "id": "user-67",
    "username": "warm_cab",
    "email": "warm_cab@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Los Angeles, CA",
    "favoriteArtists": [
      "Emiliana Torrini",
      "The Radio Dept.",
      "Men I Trust"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Shoegaze",
      "Psychedelic"
    ],
    "instruments": [],
    "joinDate": "2025-11-13T02:59:53.833Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ffd166"
    }
  },
  {
    "id": "user-68",
    "username": "brokenamp",
    "email": "brokenamp@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Explosions in the Sky",
      "This Will Destroy You",
      "Swans"
    ],
    "favoriteGenres": [
      "Noise",
      "Post-Rock",
      "Indie Rock"
    ],
    "instruments": [
      "Synthesizer",
      "Keys / Piano"
    ],
    "joinDate": "2024-07-25T04:47:48.285Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#00f5d4"
    },
    "instagram": "brokenamp"
  },
  {
    "id": "user-69",
    "username": "coldpick",
    "email": "coldpick@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Fela Kuti",
      "Gogol Bordello",
      "The Skatalites"
    ],
    "favoriteGenres": [
      "Reggae"
    ],
    "instruments": [
      "Clarinet",
      "Flute"
    ],
    "joinDate": "2024-03-24T18:40:38.762Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "coldpick",
    "jamEntry": {
      "visible": true,
      "description": "Casual reggae jams every weekend. Looking for a clarinet.",
      "customization": {
        "accentColor": "#9b2226"
      }
    }
  },
  {
    "id": "user-70",
    "username": "sonicvinyl",
    "email": "sonicvinyl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "Cincinnati, OH",
    "favoriteArtists": [
      "Toots and the Maytals",
      "Burning Spear",
      "The Skatalites"
    ],
    "favoriteGenres": [
      "Cumbia"
    ],
    "instruments": [
      "Lap Steel"
    ],
    "joinDate": "2024-02-16T19:46:01.357Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "instagram": "sonicvinyl",
    "spotify": "https://open.spotify.com/artist/mock70",
    "jamEntry": {
      "visible": true,
      "description": "Lost my old band, starting fresh. cumbia project, need a lap steel.",
      "customization": {
        "accentColor": "#ffd166"
      }
    }
  },
  {
    "id": "user-71",
    "username": "wildring",
    "email": "wildring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Thelonious Monk",
      "Herbie Hancock"
    ],
    "favoriteGenres": [
      "Funk",
      "Blues"
    ],
    "instruments": [
      "Drums / Percussion"
    ],
    "joinDate": "2024-08-27T21:40:30.842Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "instagram": "wildring",
    "jamEntry": {
      "visible": true,
      "description": "Starting a funk band. Need a drums / percussion player who knows their stuff.",
      "customization": {
        "accentColor": "#ffd166"
      }
    }
  },
  {
    "id": "user-72",
    "username": "the_echo_guitar",
    "email": "the_echo_guitar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Phoenix, AZ",
    "favoriteArtists": [
      "Herbie Hancock",
      "Curtis Mayfield"
    ],
    "favoriteGenres": [
      "Blues"
    ],
    "instruments": [
      "Bass Guitar",
      "Drums / Percussion",
      "Electric Guitar"
    ],
    "joinDate": "2024-05-30T02:31:53.578Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "the_echo_guitar",
    "jamEntry": {
      "visible": true,
      "description": "Starting a blues band. Need a bass guitar player who knows their stuff.",
      "customization": {
        "accentColor": "#560bad"
      }
    }
  },
  {
    "id": "user-73",
    "username": "picklord26",
    "email": "picklord26@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Slowdive",
      "Cocteau Twins"
    ],
    "favoriteGenres": [
      "Shoegaze",
      "Post-Rock",
      "House"
    ],
    "instruments": [],
    "joinDate": "2024-07-08T00:00:00.006Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "picklord26"
  },
  {
    "id": "user-74",
    "username": "the_echo_howl",
    "email": "the_echo_howl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Swans",
      "This Will Destroy You",
      "Tera Melos"
    ],
    "favoriteGenres": [
      "Post-Rock"
    ],
    "instruments": [
      "Double Bass",
      "Trumpet"
    ],
    "joinDate": "2024-02-10T15:38:30.086Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#457b9d"
    },
    "instagram": "the_echo_howl"
  },
  {
    "id": "user-75",
    "username": "the_raw_horn",
    "email": "the_raw_horn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Kansas City, MO",
    "favoriteArtists": [
      "Toots and the Maytals",
      "Burning Spear",
      "Calexico"
    ],
    "favoriteGenres": [
      "Cumbia",
      "Post-Rock"
    ],
    "instruments": [
      "Drums / Percussion",
      "Bass Guitar"
    ],
    "joinDate": "2024-05-14T02:02:45.692Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "instagram": "the_raw_horn",
    "spotify": "https://open.spotify.com/artist/mock75"
  },
  {
    "id": "user-76",
    "username": "noisesound",
    "email": "noisesound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Sufjan Stevens",
      "Iron & Wine",
      "Hand Habits"
    ],
    "favoriteGenres": [
      "Folk",
      "Progressive Rock"
    ],
    "instruments": [
      "Pedal Steel",
      "Mandolin"
    ],
    "joinDate": "2025-03-30T18:12:55.191Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ca6702"
    },
    "instagram": "noisesound",
    "spotify": "https://open.spotify.com/artist/mock76",
    "jamEntry": {
      "visible": true,
      "description": "No egos, just vibes. folk jams, need a pedal steel.",
      "customization": {
        "accentColor": "#ca6702"
      }
    }
  },
  {
    "id": "user-77",
    "username": "bower51",
    "email": "bower51@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Chicago, IL",
    "favoriteArtists": [
      "John Prine",
      "Patty Griffin",
      "Jason Isbell",
      "Townes Van Zandt"
    ],
    "favoriteGenres": [
      "Folk",
      "Country"
    ],
    "instruments": [],
    "joinDate": "2024-01-12T15:32:03.134Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "bower51",
    "spotify": "https://open.spotify.com/artist/mock77"
  },
  {
    "id": "user-78",
    "username": "the_digital_synth",
    "email": "the_digital_synth@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Indianapolis, IN",
    "favoriteArtists": [
      "Paramore",
      "Taylor Swift",
      "HAIM",
      "Mitski"
    ],
    "favoriteGenres": [
      "Pop",
      "Disco",
      "Indie Pop"
    ],
    "instruments": [],
    "joinDate": "2025-12-20T15:24:07.427Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "instagram": "the_digital_synth"
  },
  {
    "id": "user-79",
    "username": "the_echo_synth",
    "email": "the_echo_synth@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "The Skatalites",
      "Fela Kuti",
      "Mdou Moctar"
    ],
    "favoriteGenres": [
      "Reggae",
      "Ska"
    ],
    "instruments": [
      "Bass Guitar",
      "Drums / Percussion"
    ],
    "joinDate": "2024-10-18T21:41:51.888Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ae2012"
    },
    "instagram": "the_echo_synth",
    "jamEntry": {
      "visible": true,
      "description": "Covering all the reggae classics plus originals. Need a bass guitar.",
      "customization": {
        "accentColor": "#ae2012"
      }
    }
  },
  {
    "id": "user-80",
    "username": "hazedog37",
    "email": "hazedog37@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Chicago, IL",
    "favoriteArtists": [
      "HAIM",
      "Robyn"
    ],
    "favoriteGenres": [
      "Pop"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2025-02-27T18:38:29.047Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#4cc9f0"
    }
  },
  {
    "id": "user-81",
    "username": "shadow_strum",
    "email": "shadow_strum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Bill Evans",
      "Miles Davis",
      "Kamasi Washington",
      "Snarky Puppy"
    ],
    "favoriteGenres": [
      "Blues",
      "R&B / Soul"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-11-28T20:37:22.225Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#264653"
    },
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the blues vein. Need a electric guitar and vocals.",
      "customization": {
        "accentColor": "#264653"
      }
    }
  },
  {
    "id": "user-82",
    "username": "warm_tone",
    "email": "warm_tone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Chicago, IL",
    "favoriteArtists": [
      "Calexico",
      "Gogol Bordello",
      "Amadou & Mariam",
      "The Skatalites"
    ],
    "favoriteGenres": [
      "Cumbia",
      "World Music",
      "Reggaeton"
    ],
    "instruments": [
      "Cello"
    ],
    "joinDate": "2025-09-24T03:25:30.223Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#264653"
    },
    "instagram": "warm_tone"
  },
  {
    "id": "user-83",
    "username": "droneguitar",
    "email": "droneguitar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Electric Wizard",
      "Converge"
    ],
    "favoriteGenres": [
      "Metal",
      "Reggaeton"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-07-06T21:39:05.085Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#80b918"
    }
  },
  {
    "id": "user-84",
    "username": "the_golden_sound",
    "email": "the_golden_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Townes Van Zandt",
      "Fleet Foxes"
    ],
    "favoriteGenres": [
      "Singer-Songwriter",
      "Country",
      "Folk"
    ],
    "instruments": [
      "Synthesizer"
    ],
    "joinDate": "2025-02-14T16:26:55.027Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#4cc9f0"
    },
    "jamEntry": {
      "visible": true,
      "description": "Gigging synthesizer player looking to join a singer-songwriter outfit.",
      "customization": {
        "accentColor": "#4cc9f0"
      }
    }
  },
  {
    "id": "user-85",
    "username": "synthace50",
    "email": "synthace50@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "Philip Glass",
      "Olafur Arnalds",
      "Steve Reich"
    ],
    "favoriteGenres": [
      "Classical"
    ],
    "instruments": [],
    "joinDate": "2025-08-19T07:52:05.221Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "instagram": "synthace50"
  },
  {
    "id": "user-86",
    "username": "the_heavy_tape",
    "email": "the_heavy_tape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "Emiliana Torrini",
      "Low"
    ],
    "favoriteGenres": [
      "Psychedelic"
    ],
    "instruments": [
      "Lap Steel"
    ],
    "joinDate": "2024-03-08T04:23:50.672Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "instagram": "the_heavy_tape"
  },
  {
    "id": "user-87",
    "username": "hornfox37",
    "email": "hornfox37@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Washed Out",
      "Low",
      "Mazzy Star"
    ],
    "favoriteGenres": [
      "Ambient",
      "Psychedelic",
      "Classical"
    ],
    "instruments": [
      "DJ / Turntables"
    ],
    "joinDate": "2024-02-24T22:42:23.673Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#9b5de5"
    },
    "instagram": "hornfox37",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by classical. Looking for a dj / turntables player who gets it.",
      "customization": {
        "accentColor": "#9b5de5"
      }
    }
  },
  {
    "id": "user-88",
    "username": "noise_hum",
    "email": "noise_hum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Built to Spill",
      "Superchunk",
      "Slowdive",
      "Alvvays"
    ],
    "favoriteGenres": [
      "Alternative"
    ],
    "instruments": [],
    "joinDate": "2025-06-05T21:15:20.260Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#00bbf9"
    }
  },
  {
    "id": "user-89",
    "username": "the_analog_riff",
    "email": "the_analog_riff@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Modest Mouse",
      "Dinosaur Jr."
    ],
    "favoriteGenres": [
      "Indie",
      "Shoegaze"
    ],
    "instruments": [
      "Vocals",
      "Organ",
      "Keys / Piano"
    ],
    "joinDate": "2024-04-17T05:28:27.068Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#ae2012"
    },
    "jamEntry": {
      "visible": true,
      "description": "Been writing indie tunes for years. Finally looking for a band. Play organ?",
      "customization": {
        "accentColor": "#ae2012"
      }
    }
  },
  {
    "id": "user-90",
    "username": "goldenhorn",
    "email": "goldenhorn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Deafheaven",
      "Electric Wizard",
      "Neurosis",
      "Mastodon"
    ],
    "favoriteGenres": [
      "Death Metal",
      "Rock"
    ],
    "instruments": [
      "Fiddle",
      "Mandolin",
      "Pedal Steel"
    ],
    "joinDate": "2025-12-29T19:30:30.137Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "jamEntry": {
      "visible": true,
      "description": "Lost my old band, starting fresh. rock project, need a fiddle.",
      "customization": {
        "accentColor": "#80b918"
      }
    }
  },
  {
    "id": "user-91",
    "username": "rustyring",
    "email": "rustyring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Memphis, TN",
    "favoriteArtists": [
      "Hauschka",
      "Steve Reich",
      "Olafur Arnalds"
    ],
    "favoriteGenres": [
      "Classical"
    ],
    "instruments": [
      "Acoustic Guitar",
      "Vocals"
    ],
    "joinDate": "2025-08-25T19:25:08.948Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "rustyring",
    "spotify": "https://open.spotify.com/artist/mock91",
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the classical vein. Need a vocals and vocals.",
      "customization": {
        "accentColor": "#e9c46a"
      }
    }
  },
  {
    "id": "user-92",
    "username": "fuzzy_hum",
    "email": "fuzzy_hum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Baltimore, MD",
    "favoriteArtists": [
      "Danny Brown",
      "Kendrick Lamar"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap",
      "R&B / Soul"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2024-02-18T08:08:18.740Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "fuzzy_hum",
    "jamEntry": {
      "visible": true,
      "description": "Forming a hip-hop / rap group. You play electric guitar?",
      "customization": {
        "accentColor": "#9b2226"
      }
    }
  },
  {
    "id": "user-93",
    "username": "warm_drum",
    "email": "warm_drum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "Taylor Swift",
      "Carly Rae Jepsen"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Disco"
    ],
    "instruments": [
      "Acoustic Guitar",
      "Vocals"
    ],
    "joinDate": "2024-05-27T20:09:30.544Z",
    "lastActive": "2026-03-01T12:18:56.772Z",
    "customization": {
      "accentColor": "#f4a261"
    },
    "instagram": "warm_drum",
    "jamEntry": {
      "visible": true,
      "description": "No egos, just vibes. dream pop jams, need a acoustic guitar.",
      "customization": {
        "accentColor": "#f4a261"
      }
    }
  },
  {
    "id": "user-94",
    "username": "the_hollow_fuzz",
    "email": "the_hollow_fuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Kraftwerk",
      "Flying Lotus",
      "James Blake"
    ],
    "favoriteGenres": [
      "Drum & Bass",
      "Dance / EDM",
      "Synth-Pop"
    ],
    "instruments": [],
    "joinDate": "2024-04-20T05:41:59.472Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#6a0572"
    }
  },
  {
    "id": "user-95",
    "username": "the_ghost_synth",
    "email": "the_ghost_synth@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Bad Brains",
      "Descendents",
      "Jawbreaker",
      "Turnstile"
    ],
    "favoriteGenres": [
      "Emo",
      "Post-Hardcore",
      "Hardcore"
    ],
    "instruments": [
      "Electric Guitar",
      "Bass Guitar"
    ],
    "joinDate": "2025-08-27T17:35:14.402Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#80b918"
    }
  },
  {
    "id": "user-96",
    "username": "loopkid46",
    "email": "loopkid46@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Gojira",
      "Converge",
      "Napalm Death"
    ],
    "favoriteGenres": [
      "Metal",
      "World Music"
    ],
    "instruments": [],
    "joinDate": "2025-01-31T05:15:37.994Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "instagram": "loopkid46"
  },
  {
    "id": "user-97",
    "username": "rawstrings",
    "email": "rawstrings@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Atlanta, GA",
    "favoriteArtists": [
      "Carly Rae Jepsen",
      "Charli XCX",
      "Japanese Breakfast",
      "Big Thief"
    ],
    "favoriteGenres": [
      "Indie Pop",
      "Pop",
      "Disco"
    ],
    "instruments": [],
    "joinDate": "2024-04-04T14:32:34.856Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ca6702"
    }
  },
  {
    "id": "user-98",
    "username": "crystal_bow",
    "email": "crystal_bow@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Angel Olsen",
      "Kacey Musgraves",
      "Paramore",
      "Sharon Van Etten"
    ],
    "favoriteGenres": [
      "Disco",
      "Dream Pop",
      "Indie Pop"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-02-21T04:04:55.231Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "spotify": "https://open.spotify.com/artist/mock98",
    "jamEntry": {
      "visible": true,
      "description": "Forming a indie pop group. You play electric guitar?",
      "customization": {
        "accentColor": "#e9c46a"
      }
    }
  },
  {
    "id": "user-99",
    "username": "broken_sound",
    "email": "broken_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Miami, FL",
    "favoriteArtists": [
      "Nils Frahm",
      "Philip Glass",
      "Ennio Morricone",
      "Max Richter"
    ],
    "favoriteGenres": [
      "Folk",
      "Ambient",
      "Alternative"
    ],
    "instruments": [
      "Banjo",
      "Acoustic Guitar"
    ],
    "joinDate": "2024-03-18T15:02:12.694Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#6a0572"
    }
  },
  {
    "id": "user-100",
    "username": "the_noise_howl",
    "email": "the_noise_howl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Indianapolis, IN",
    "favoriteArtists": [
      "Hand Habits",
      "John Prine"
    ],
    "favoriteGenres": [
      "Folk",
      "Country",
      "Singer-Songwriter"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2024-07-08T07:02:50.300Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "jamEntry": {
      "visible": true,
      "description": "Starting a folk band. Need a bass guitar player who knows their stuff.",
      "customization": {
        "accentColor": "#ffd166"
      }
    }
  },
  {
    "id": "user-101",
    "username": "toneer11",
    "email": "toneer11@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Snail Mail",
      "Slowdive"
    ],
    "favoriteGenres": [
      "Alternative",
      "Indie Rock",
      "Indie"
    ],
    "instruments": [],
    "joinDate": "2024-01-17T21:30:28.312Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "toneer11"
  },
  {
    "id": "user-102",
    "username": "losttone",
    "email": "losttone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Max Richter",
      "Philip Glass",
      "Steve Reich",
      "Arvo Part"
    ],
    "favoriteGenres": [
      "Ambient",
      "Classical"
    ],
    "instruments": [
      "Violin",
      "Flute",
      "Viola"
    ],
    "joinDate": "2024-06-17T02:50:09.418Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#e63946"
    }
  },
  {
    "id": "user-103",
    "username": "the_neon_vinyl",
    "email": "the_neon_vinyl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Denver, CO",
    "favoriteArtists": [
      "HAIM",
      "Lorde",
      "Carly Rae Jepsen",
      "Paramore"
    ],
    "favoriteGenres": [
      "Pop"
    ],
    "instruments": [
      "Viola",
      "Cello"
    ],
    "joinDate": "2025-09-18T21:02:51.974Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#9b2226"
    }
  },
  {
    "id": "user-104",
    "username": "synthkid63",
    "email": "synthkid63@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Bill Evans",
      "Herbie Hancock",
      "Wayne Shorter"
    ],
    "favoriteGenres": [
      "Jazz",
      "Dance / EDM"
    ],
    "instruments": [
      "Electric Guitar",
      "Bass Guitar"
    ],
    "joinDate": "2025-03-15T20:46:40.714Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#3f37c9"
    },
    "instagram": "synthkid63"
  },
  {
    "id": "user-105",
    "username": "neonroar",
    "email": "neonroar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Kansas City, MO",
    "favoriteArtists": [
      "Sigur Ros",
      "Godspeed You! Black Emperor",
      "Slint",
      "Tortoise"
    ],
    "favoriteGenres": [
      "Noise"
    ],
    "instruments": [],
    "joinDate": "2025-10-12T01:00:07.140Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#00bbf9"
    },
    "spotify": "https://open.spotify.com/artist/mock105"
  },
  {
    "id": "user-106",
    "username": "brightstrings",
    "email": "brightstrings@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Denver, CO",
    "favoriteArtists": [
      "Mazzy Star",
      "Beach House",
      "Slowdive",
      "Low"
    ],
    "favoriteGenres": [
      "Post-Rock",
      "Psychedelic",
      "Shoegaze"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2024-01-30T22:57:51.948Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#2a9d8f"
    },
    "spotify": "https://open.spotify.com/artist/mock106"
  },
  {
    "id": "user-107",
    "username": "the_hollow_bass",
    "email": "the_hollow_bass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Thelonious Monk",
      "Wayne Shorter",
      "Snarky Puppy"
    ],
    "favoriteGenres": [
      "Funk",
      "Reggae"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2025-04-12T21:25:36.432Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ee9b00"
    },
    "instagram": "the_hollow_bass",
    "jamEntry": {
      "visible": true,
      "description": "Starting a reggae band. Need a vocals player who knows their stuff.",
      "customization": {
        "accentColor": "#ee9b00"
      }
    }
  },
  {
    "id": "user-108",
    "username": "the_acid_brass",
    "email": "the_acid_brass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Newark, DE",
    "favoriteArtists": [
      "Caroline Polachek",
      "Charli XCX",
      "Big Thief",
      "Taylor Swift"
    ],
    "favoriteGenres": [
      "Indie Pop",
      "Noise"
    ],
    "instruments": [],
    "joinDate": "2024-06-20T07:00:12.619Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "spotify": "https://open.spotify.com/artist/mock108"
  },
  {
    "id": "user-109",
    "username": "the_velvet_jam",
    "email": "the_velvet_jam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Phoenix, AZ",
    "favoriteArtists": [
      "Bad Brains",
      "The Stooges"
    ],
    "favoriteGenres": [
      "Emo",
      "Post-Hardcore",
      "Hardcore"
    ],
    "instruments": [
      "Electric Guitar",
      "Vocals",
      "Bass Guitar"
    ],
    "joinDate": "2025-09-20T20:25:39.203Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "the_velvet_jam",
    "jamEntry": {
      "visible": true,
      "description": "Gigging vocals player looking to join a emo outfit.",
      "customization": {
        "accentColor": "#4361ee"
      }
    }
  },
  {
    "id": "user-110",
    "username": "the_golden_beat",
    "email": "the_golden_beat@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Archers of Loaf",
      "Superchunk",
      "Sebadoh",
      "Built to Spill"
    ],
    "favoriteGenres": [
      "Lo-Fi",
      "Shoegaze"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2024-07-09T01:20:11.053Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#4cc9f0"
    },
    "jamEntry": {
      "visible": true,
      "description": "Forming a lo-fi group. You play vocals?",
      "customization": {
        "accentColor": "#4cc9f0"
      }
    }
  },
  {
    "id": "user-111",
    "username": "velvetcab",
    "email": "velvetcab@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Austin, TX",
    "favoriteArtists": [
      "Fela Kuti",
      "Gogol Bordello"
    ],
    "favoriteGenres": [
      "World Music",
      "Reggaeton"
    ],
    "instruments": [
      "Saxophone",
      "Keys / Piano",
      "Trumpet"
    ],
    "joinDate": "2025-10-22T11:54:20.681Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ee9b00"
    },
    "instagram": "velvetcab",
    "jamEntry": {
      "visible": true,
      "description": "No egos, just vibes. reggaeton jams, need a keys / piano.",
      "customization": {
        "accentColor": "#ee9b00"
      }
    }
  },
  {
    "id": "user-112",
    "username": "the_echo_pluck",
    "email": "the_echo_pluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "New York, NY",
    "favoriteArtists": [
      "Don Caballero",
      "Slint"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Math Rock",
      "Blues"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2024-05-05T21:53:43.783Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "spotify": "https://open.spotify.com/artist/mock112",
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the blues vein. Need a bass guitar and vocals.",
      "customization": {
        "accentColor": "#ff6b6b"
      }
    }
  },
  {
    "id": "user-113",
    "username": "beatwolf73",
    "email": "beatwolf73@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Newark, DE",
    "favoriteArtists": [
      "Townes Van Zandt",
      "Hozier",
      "Sufjan Stevens"
    ],
    "favoriteGenres": [
      "Folk"
    ],
    "instruments": [
      "Drums / Percussion",
      "Bass Guitar"
    ],
    "joinDate": "2025-10-16T07:56:44.259Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#00f5d4"
    },
    "jamEntry": {
      "visible": true,
      "description": "Covering all the folk classics plus originals. Need a bass guitar.",
      "customization": {
        "accentColor": "#00f5d4"
      }
    }
  },
  {
    "id": "user-114",
    "username": "bassvox38",
    "email": "bassvox38@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Atlanta, GA",
    "favoriteArtists": [
      "Pavement",
      "Built to Spill",
      "Modest Mouse"
    ],
    "favoriteGenres": [
      "Lo-Fi",
      "Alternative"
    ],
    "instruments": [],
    "joinDate": "2025-03-21T17:04:23.511Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#9b5de5"
    },
    "instagram": "bassvox38"
  },
  {
    "id": "user-115",
    "username": "keyslord11",
    "email": "keyslord11@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Boards of Canada",
      "Arca",
      "DJ Shadow"
    ],
    "favoriteGenres": [
      "Synth-Pop",
      "Ambient",
      "Drum & Bass"
    ],
    "instruments": [
      "Organ"
    ],
    "joinDate": "2025-12-07T07:11:03.365Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "instagram": "keyslord11"
  },
  {
    "id": "user-116",
    "username": "rawhowl",
    "email": "rawhowl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "New York, NY",
    "favoriteArtists": [
      "James Blake",
      "Caribou"
    ],
    "favoriteGenres": [
      "Ambient",
      "Drum & Bass",
      "Synth-Pop"
    ],
    "instruments": [
      "Banjo",
      "Harmonica"
    ],
    "joinDate": "2024-07-31T23:10:11.376Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "instagram": "rawhowl",
    "jamEntry": {
      "visible": true,
      "description": "harmonica player seeking collaborators for synth-pop recordings.",
      "customization": {
        "accentColor": "#ff6b6b"
      }
    }
  },
  {
    "id": "user-117",
    "username": "echobow",
    "email": "echobow@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Gogol Bordello",
      "Los Lobos",
      "Fela Kuti"
    ],
    "favoriteGenres": [
      "Ska",
      "Drum & Bass"
    ],
    "instruments": [],
    "joinDate": "2025-05-02T03:01:58.857Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "echobow"
  },
  {
    "id": "user-118",
    "username": "static_ring",
    "email": "static_ring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Flying Lotus",
      "James Blake",
      "DJ Shadow"
    ],
    "favoriteGenres": [
      "Dance / EDM",
      "Techno",
      "Math Rock"
    ],
    "instruments": [],
    "joinDate": "2024-02-10T20:27:22.819Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#00bbf9"
    },
    "instagram": "static_ring"
  },
  {
    "id": "user-119",
    "username": "crystalsound",
    "email": "crystalsound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Austin, TX",
    "favoriteArtists": [
      "My Bloody Valentine",
      "Wild Nothing",
      "Beach Fossils"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Jazz"
    ],
    "instruments": [
      "Vocals",
      "Acoustic Guitar"
    ],
    "joinDate": "2024-05-01T00:19:31.491Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "jamEntry": {
      "visible": true,
      "description": "Starting a dream pop band. Need a acoustic guitar player who knows their stuff.",
      "customization": {
        "accentColor": "#f15bb5"
      }
    }
  },
  {
    "id": "user-120",
    "username": "the_raw_guitar",
    "email": "the_raw_guitar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Detroit, MI",
    "favoriteArtists": [
      "John Prine",
      "Iron & Wine",
      "Adrianne Lenker"
    ],
    "favoriteGenres": [
      "Singer-Songwriter",
      "Country"
    ],
    "instruments": [],
    "joinDate": "2025-11-25T06:32:21.708Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#264653"
    }
  },
  {
    "id": "user-121",
    "username": "digitalwave",
    "email": "digitalwave@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Phoenix, AZ",
    "favoriteArtists": [
      "Bon Iver",
      "Hand Habits",
      "John Prine",
      "Lucinda Williams"
    ],
    "favoriteGenres": [
      "Folk",
      "Country"
    ],
    "instruments": [],
    "joinDate": "2025-11-22T19:07:52.517Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#9b2226"
    }
  },
  {
    "id": "user-122",
    "username": "dark_chord",
    "email": "dark_chord@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Slowdive",
      "My Bloody Valentine",
      "Real Estate"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Ambient",
      "Shoegaze"
    ],
    "instruments": [
      "Saxophone"
    ],
    "joinDate": "2025-03-18T07:29:09.688Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "instagram": "dark_chord",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by shoegaze. Looking for a saxophone player who gets it.",
      "customization": {
        "accentColor": "#ff6b6b"
      }
    }
  },
  {
    "id": "user-123",
    "username": "crystalring",
    "email": "crystalring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Indianapolis, IN",
    "favoriteArtists": [
      "Earl Sweatshirt",
      "billy woods"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Trap",
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2024-06-29T04:01:58.904Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "jamEntry": {
      "visible": true,
      "description": "Working on an EP. Need a electric guitar for some hip-hop / rap tracks.",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-124",
    "username": "electric_sound",
    "email": "electric_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Seattle, WA",
    "favoriteArtists": [
      "Four Tet",
      "Aphex Twin",
      "Kraftwerk"
    ],
    "favoriteGenres": [
      "Ambient",
      "Drum & Bass"
    ],
    "instruments": [
      "Organ",
      "Vocals",
      "Synthesizer"
    ],
    "joinDate": "2024-06-04T08:12:47.170Z",
    "lastActive": "2026-03-01T12:18:56.773Z",
    "customization": {
      "accentColor": "#ffd166"
    },
    "instagram": "electric_sound",
    "spotify": "https://open.spotify.com/artist/mock124",
    "jamEntry": {
      "visible": true,
      "description": "synthesizer player seeking collaborators for drum & bass recordings.",
      "customization": {
        "accentColor": "#ffd166"
      }
    }
  },
  {
    "id": "user-125",
    "username": "ghostroar",
    "email": "ghostroar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Kansas City, MO",
    "favoriteArtists": [
      "J. Cole",
      "Kendrick Lamar"
    ],
    "favoriteGenres": [
      "Trap",
      "Hip-Hop / Rap",
      "R&B / Soul"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2025-11-04T13:15:03.556Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ff6b6b"
    }
  },
  {
    "id": "user-126",
    "username": "shadow_pick",
    "email": "shadow_pick@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Nashville, TN",
    "favoriteArtists": [
      "Amadou & Mariam",
      "Toots and the Maytals"
    ],
    "favoriteGenres": [
      "World Music",
      "Drum & Bass"
    ],
    "instruments": [
      "Vocals",
      "Acoustic Guitar"
    ],
    "joinDate": "2024-12-25T03:15:16.522Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "shadow_pick",
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some world music with a acoustic guitar.",
      "customization": {
        "accentColor": "#4895ef"
      }
    }
  },
  {
    "id": "user-127",
    "username": "darkpick",
    "email": "darkpick@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Charles Mingus",
      "Herbie Hancock"
    ],
    "favoriteGenres": [
      "Jazz",
      "Gospel"
    ],
    "instruments": [
      "Organ"
    ],
    "joinDate": "2025-03-09T03:02:42.813Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#9b5de5"
    },
    "instagram": "darkpick",
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some gospel with a organ.",
      "customization": {
        "accentColor": "#9b5de5"
      }
    }
  },
  {
    "id": "user-128",
    "username": "ghost_tape",
    "email": "ghost_tape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Miami, FL",
    "favoriteArtists": [
      "Hella",
      "The Mars Volta",
      "Swans"
    ],
    "favoriteGenres": [
      "Math Rock",
      "Progressive Rock",
      "Post-Rock"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-01-25T18:44:06.856Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#457b9d"
    },
    "instagram": "ghost_tape",
    "spotify": "https://open.spotify.com/artist/mock128"
  },
  {
    "id": "user-129",
    "username": "the_hollow_amp",
    "email": "the_hollow_amp@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "Washington, DC",
    "favoriteArtists": [
      "Slowdive",
      "Wild Nothing",
      "Washed Out",
      "Grouper"
    ],
    "favoriteGenres": [
      "Shoegaze",
      "Psychedelic",
      "Trap"
    ],
    "instruments": [
      "Vocals",
      "Harmonica",
      "Banjo"
    ],
    "joinDate": "2024-01-18T11:34:22.517Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "the_hollow_amp",
    "jamEntry": {
      "visible": true,
      "description": "Starting a trap band. Need a banjo player who knows their stuff.",
      "customization": {
        "accentColor": "#4361ee"
      }
    }
  },
  {
    "id": "user-130",
    "username": "silent_keys",
    "email": "silent_keys@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Metallica",
      "Electric Wizard",
      "Neurosis",
      "Pallbearer"
    ],
    "favoriteGenres": [
      "Sludge"
    ],
    "instruments": [],
    "joinDate": "2024-10-13T09:17:02.679Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#e9c46a"
    }
  },
  {
    "id": "user-131",
    "username": "the_analog_jam",
    "email": "the_analog_jam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "Detroit, MI",
    "favoriteArtists": [
      "Touche Amore",
      "Minor Threat",
      "Black Flag",
      "Hot Water Music"
    ],
    "favoriteGenres": [
      "Hardcore"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2025-05-01T06:46:11.653Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "the_analog_jam",
    "spotify": "https://open.spotify.com/artist/mock131"
  },
  {
    "id": "user-132",
    "username": "goldenjam",
    "email": "goldenjam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Nashville, TN",
    "favoriteArtists": [
      "Mogwai",
      "Slint",
      "Tortoise",
      "Swans"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Experimental",
      "Post-Rock"
    ],
    "instruments": [
      "Double Bass",
      "Saxophone"
    ],
    "joinDate": "2024-02-06T08:26:27.246Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the progressive rock vein. Need a double bass and vocals.",
      "customization": {
        "accentColor": "#ff6b6b"
      }
    }
  },
  {
    "id": "user-133",
    "username": "ringer88",
    "email": "ringer88@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Baroness",
      "Pallbearer"
    ],
    "favoriteGenres": [
      "Metal",
      "Stoner Rock"
    ],
    "instruments": [
      "Dobro",
      "Fiddle"
    ],
    "joinDate": "2025-03-04T16:23:35.958Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ae2012"
    },
    "instagram": "ringer88"
  },
  {
    "id": "user-134",
    "username": "hollowstrum",
    "email": "hollowstrum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Austin, TX",
    "favoriteArtists": [
      "Al Green",
      "Miles Davis",
      "Charles Mingus",
      "James Brown"
    ],
    "favoriteGenres": [
      "Blues",
      "Jazz",
      "Metal"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2024-10-30T23:20:33.002Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by jazz. Looking for a vocals player who gets it.",
      "customization": {
        "accentColor": "#9b2226"
      }
    }
  },
  {
    "id": "user-135",
    "username": "quiet_fuzz",
    "email": "quiet_fuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Minneapolis, MN",
    "favoriteArtists": [
      "James Brown",
      "Stevie Wonder",
      "Thelonious Monk"
    ],
    "favoriteGenres": [
      "Jazz",
      "Blues",
      "Shoegaze"
    ],
    "instruments": [
      "Acoustic Guitar",
      "Vocals"
    ],
    "joinDate": "2024-11-12T20:35:34.991Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "quiet_fuzz",
    "jamEntry": {
      "visible": true,
      "description": "Been writing blues tunes for years. Finally looking for a band. Play vocals?",
      "customization": {
        "accentColor": "#4361ee"
      }
    }
  },
  {
    "id": "user-136",
    "username": "the_analog_ring",
    "email": "the_analog_ring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "New York, NY",
    "favoriteArtists": [
      "Fugazi",
      "Black Flag",
      "The Stooges"
    ],
    "favoriteGenres": [
      "Post-Hardcore",
      "Punk",
      "Hip-Hop / Rap"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2025-09-19T14:52:33.024Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "spotify": "https://open.spotify.com/artist/mock136",
    "jamEntry": {
      "visible": true,
      "description": "vocals player seeking collaborators for punk recordings.",
      "customization": {
        "accentColor": "#80b918"
      }
    }
  },
  {
    "id": "user-137",
    "username": "wildtone",
    "email": "wildtone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Denver, CO",
    "favoriteArtists": [
      "Yo La Tengo",
      "Neutral Milk Hotel",
      "Built to Spill"
    ],
    "favoriteGenres": [
      "Shoegaze",
      "Lo-Fi",
      "Alternative"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2025-12-27T00:04:41.034Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "spotify": "https://open.spotify.com/artist/mock137",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by shoegaze. Looking for a vocals player who gets it.",
      "customization": {
        "accentColor": "#f15bb5"
      }
    }
  },
  {
    "id": "user-138",
    "username": "tonecat84",
    "email": "tonecat84@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Calexico",
      "Fela Kuti"
    ],
    "favoriteGenres": [
      "Reggae"
    ],
    "instruments": [
      "Acoustic Guitar"
    ],
    "joinDate": "2025-09-21T15:35:26.958Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "jamEntry": {
      "visible": true,
      "description": "Working on an EP. Need a acoustic guitar for some reggae tracks.",
      "customization": {
        "accentColor": "#e63946"
      }
    }
  },
  {
    "id": "user-139",
    "username": "darkbass",
    "email": "darkbass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Minneapolis, MN",
    "favoriteArtists": [
      "Olafur Arnalds",
      "Nils Frahm"
    ],
    "favoriteGenres": [
      "Classical"
    ],
    "instruments": [],
    "joinDate": "2025-10-07T09:59:30.132Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "instagram": "darkbass",
    "spotify": "https://open.spotify.com/artist/mock139"
  },
  {
    "id": "user-140",
    "username": "acidamp",
    "email": "acidamp@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Detroit, MI",
    "favoriteArtists": [
      "Fleet Foxes",
      "Lucinda Williams"
    ],
    "favoriteGenres": [
      "Folk",
      "Country"
    ],
    "instruments": [],
    "joinDate": "2024-11-07T10:12:25.031Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "instagram": "acidamp"
  },
  {
    "id": "user-141",
    "username": "acid_hum",
    "email": "acid_hum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Indianapolis, IN",
    "favoriteArtists": [
      "Fugazi",
      "Minor Threat",
      "The Gaslight Anthem",
      "Black Flag"
    ],
    "favoriteGenres": [
      "Post-Hardcore",
      "Emo",
      "Hardcore"
    ],
    "instruments": [
      "Drums / Percussion",
      "Bass Guitar",
      "Electric Guitar"
    ],
    "joinDate": "2025-10-15T17:01:30.768Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#06d6a0"
    },
    "spotify": "https://open.spotify.com/artist/mock141",
    "jamEntry": {
      "visible": true,
      "description": "Gigging drums / percussion player looking to join a post-hardcore outfit.",
      "customization": {
        "accentColor": "#06d6a0"
      }
    }
  },
  {
    "id": "user-142",
    "username": "shadowbrass",
    "email": "shadowbrass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Oakland, CA",
    "favoriteArtists": [
      "Beach House",
      "Real Estate",
      "Grouper"
    ],
    "favoriteGenres": [
      "Post-Rock",
      "Psychedelic",
      "Shoegaze"
    ],
    "instruments": [
      "Synthesizer",
      "Keys / Piano",
      "Organ"
    ],
    "joinDate": "2024-09-21T17:43:49.939Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "shadowbrass",
    "spotify": "https://open.spotify.com/artist/mock142"
  },
  {
    "id": "user-143",
    "username": "coldriff",
    "email": "coldriff@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Nashville, TN",
    "favoriteArtists": [
      "Emiliana Torrini",
      "Mazzy Star",
      "Beach House"
    ],
    "favoriteGenres": [
      "Post-Rock",
      "Shoegaze",
      "Rock"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2025-05-16T13:53:07.209Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#118ab2"
    },
    "instagram": "coldriff",
    "jamEntry": {
      "visible": true,
      "description": "bass guitar player seeking collaborators for rock recordings.",
      "customization": {
        "accentColor": "#118ab2"
      }
    }
  },
  {
    "id": "user-144",
    "username": "heavy_buzz",
    "email": "heavy_buzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Descendents",
      "Bad Brains",
      "Touche Amore",
      "Dead Kennedys"
    ],
    "favoriteGenres": [
      "Punk"
    ],
    "instruments": [],
    "joinDate": "2024-06-05T05:59:48.608Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#264653"
    },
    "instagram": "heavy_buzz"
  },
  {
    "id": "user-145",
    "username": "static_vinyl",
    "email": "static_vinyl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Fleet Foxes",
      "Bon Iver"
    ],
    "favoriteGenres": [
      "Folk",
      "Country"
    ],
    "instruments": [
      "Synthesizer",
      "Keys / Piano"
    ],
    "joinDate": "2025-06-14T03:33:05.339Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "instagram": "static_vinyl"
  },
  {
    "id": "user-146",
    "username": "bassvox87",
    "email": "bassvox87@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Tortoise",
      "This Will Destroy You",
      "Mogwai"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Math Rock",
      "Post-Rock"
    ],
    "instruments": [],
    "joinDate": "2025-06-17T15:28:23.169Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ee9b00"
    },
    "instagram": "bassvox87"
  },
  {
    "id": "user-147",
    "username": "echojam",
    "email": "echojam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Washed Out",
      "Cocteau Twins",
      "Mazzy Star",
      "Grouper"
    ],
    "favoriteGenres": [
      "Psychedelic",
      "Shoegaze",
      "Ambient"
    ],
    "instruments": [
      "Lap Steel",
      "Dobro"
    ],
    "joinDate": "2024-04-21T06:12:16.614Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ee9b00"
    },
    "instagram": "echojam",
    "jamEntry": {
      "visible": true,
      "description": "Forming a ambient group. You play lap steel?",
      "customization": {
        "accentColor": "#ee9b00"
      }
    }
  },
  {
    "id": "user-148",
    "username": "sonicstrings",
    "email": "sonicstrings@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Indianapolis, IN",
    "favoriteArtists": [
      "Burial",
      "Four Tet",
      "The Chemical Brothers",
      "Bicep"
    ],
    "favoriteGenres": [
      "Dance / EDM",
      "Post-Punk"
    ],
    "instruments": [
      "Lap Steel"
    ],
    "joinDate": "2025-08-19T10:32:17.816Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ff6b6b"
    },
    "jamEntry": {
      "visible": true,
      "description": "Forming a post-punk group. You play lap steel?",
      "customization": {
        "accentColor": "#ff6b6b"
      }
    }
  },
  {
    "id": "user-149",
    "username": "the_quiet_haze",
    "email": "the_quiet_haze@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Tortoise",
      "Don Caballero",
      "The Mars Volta"
    ],
    "favoriteGenres": [
      "Post-Rock",
      "Math Rock",
      "Noise"
    ],
    "instruments": [],
    "joinDate": "2025-07-07T23:51:25.481Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "the_quiet_haze"
  },
  {
    "id": "user-150",
    "username": "velvetjam",
    "email": "velvetjam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Baltimore, MD",
    "favoriteArtists": [
      "Charli XCX",
      "Angel Olsen",
      "Big Thief",
      "Kacey Musgraves"
    ],
    "favoriteGenres": [
      "Disco"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2024-12-11T11:35:00.044Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "instagram": "velvetjam",
    "jamEntry": {
      "visible": true,
      "description": "Been writing disco tunes for years. Finally looking for a band. Play bass guitar?",
      "customization": {
        "accentColor": "#e63946"
      }
    }
  },
  {
    "id": "user-151",
    "username": "bassdog18",
    "email": "bassdog18@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Richmond, VA",
    "favoriteArtists": [
      "Kacey Musgraves",
      "Mitski",
      "Carly Rae Jepsen"
    ],
    "favoriteGenres": [
      "Dream Pop",
      "Disco"
    ],
    "instruments": [
      "Banjo",
      "Harmonica",
      "Vocals"
    ],
    "joinDate": "2025-09-07T11:04:29.376Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4cc9f0"
    },
    "jamEntry": {
      "visible": true,
      "description": "banjo player seeking collaborators for disco recordings.",
      "customization": {
        "accentColor": "#4cc9f0"
      }
    }
  },
  {
    "id": "user-152",
    "username": "goldenfuzz",
    "email": "goldenfuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Miami, FL",
    "favoriteArtists": [
      "Hauschka",
      "Arvo Part",
      "Max Richter"
    ],
    "favoriteGenres": [
      "Classical",
      "Ambient"
    ],
    "instruments": [],
    "joinDate": "2024-11-11T16:50:41.111Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#f4a261"
    },
    "instagram": "goldenfuzz"
  },
  {
    "id": "user-153",
    "username": "the_vapor_brass",
    "email": "the_vapor_brass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "MF DOOM",
      "JPEGmafia",
      "Freddie Gibbs",
      "Nas"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Hip-Hop / Rap",
      "Indie Rock"
    ],
    "instruments": [
      "Dobro",
      "Banjo",
      "Mandolin"
    ],
    "joinDate": "2024-12-01T18:12:55.330Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#457b9d"
    },
    "instagram": "the_vapor_brass",
    "spotify": "https://open.spotify.com/artist/mock153",
    "jamEntry": {
      "visible": true,
      "description": "Working on an EP. Need a mandolin for some r&b / soul tracks.",
      "customization": {
        "accentColor": "#457b9d"
      }
    }
  },
  {
    "id": "user-154",
    "username": "velvet_loop",
    "email": "velvet_loop@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Washington, DC",
    "favoriteArtists": [
      "Turnstile",
      "Descendents",
      "The Menzingers",
      "Bad Brains"
    ],
    "favoriteGenres": [
      "Hardcore"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2024-04-11T21:50:57.326Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#00f5d4"
    },
    "instagram": "velvet_loop"
  },
  {
    "id": "user-155",
    "username": "the_velvet_brass",
    "email": "the_velvet_brass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Newark, DE",
    "favoriteArtists": [
      "Baroness",
      "Wolves in the Throne Room",
      "Sleep"
    ],
    "favoriteGenres": [
      "Death Metal",
      "Heavy Metal",
      "Thrash Metal"
    ],
    "instruments": [
      "Vocals",
      "Drums / Percussion",
      "Bass Guitar"
    ],
    "joinDate": "2024-10-21T20:56:53.909Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "the_velvet_brass",
    "jamEntry": {
      "visible": true,
      "description": "Looking for a vocals to complete our death metal project.",
      "customization": {
        "accentColor": "#4895ef"
      }
    }
  },
  {
    "id": "user-156",
    "username": "wildkeys",
    "email": "wildkeys@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Cincinnati, OH",
    "favoriteArtists": [
      "Sebadoh",
      "Modest Mouse"
    ],
    "favoriteGenres": [
      "Indie Rock",
      "Lo-Fi"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2024-12-21T23:42:47.471Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#264653"
    },
    "jamEntry": {
      "visible": true,
      "description": "Covering all the indie rock classics plus originals. Need a bass guitar.",
      "customization": {
        "accentColor": "#264653"
      }
    }
  },
  {
    "id": "user-157",
    "username": "burnt_riff",
    "email": "burnt_riff@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Los Angeles, CA",
    "favoriteArtists": [
      "Tera Melos",
      "Explosions in the Sky",
      "Hella",
      "Mogwai"
    ],
    "favoriteGenres": [
      "Noise"
    ],
    "instruments": [],
    "joinDate": "2024-08-02T13:56:15.336Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "burnt_riff"
  },
  {
    "id": "user-158",
    "username": "guitarman1",
    "email": "guitarman1@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Memphis, TN",
    "favoriteArtists": [
      "Dead Kennedys",
      "The Stooges",
      "Black Flag"
    ],
    "favoriteGenres": [
      "Hardcore",
      "Post-Punk",
      "Emo"
    ],
    "instruments": [
      "Banjo",
      "Lap Steel"
    ],
    "joinDate": "2025-09-25T11:28:09.833Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#9b2226"
    },
    "instagram": "guitarman1",
    "spotify": "https://open.spotify.com/artist/mock158",
    "jamEntry": {
      "visible": true,
      "description": "Working on an EP. Need a banjo for some post-punk tracks.",
      "customization": {
        "accentColor": "#9b2226"
      }
    }
  },
  {
    "id": "user-159",
    "username": "the_fuzzy_horn",
    "email": "the_fuzzy_horn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Philip Glass",
      "Olafur Arnalds"
    ],
    "favoriteGenres": [
      "Folk",
      "Ambient",
      "Classical"
    ],
    "instruments": [
      "Fiddle",
      "Dobro",
      "Lap Steel"
    ],
    "joinDate": "2024-06-20T10:02:39.318Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "spotify": "https://open.spotify.com/artist/mock159",
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the classical vein. Need a lap steel and vocals.",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-160",
    "username": "jamkid61",
    "email": "jamkid61@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "Pittsburgh, PA",
    "favoriteArtists": [
      "JPEGmafia",
      "Danny Brown",
      "Jay-Z"
    ],
    "favoriteGenres": [
      "Trap"
    ],
    "instruments": [
      "Vocals",
      "Electric Guitar",
      "Bass Guitar"
    ],
    "joinDate": "2024-10-06T10:41:01.535Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "jamkid61",
    "jamEntry": {
      "visible": true,
      "description": "Producer with trap beats looking for a live electric guitar player.",
      "customization": {
        "accentColor": "#e9c46a"
      }
    }
  },
  {
    "id": "user-161",
    "username": "echo_pluck",
    "email": "echo_pluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Metallica",
      "Mastodon",
      "Baroness"
    ],
    "favoriteGenres": [
      "Sludge",
      "Thrash Metal",
      "Alternative"
    ],
    "instruments": [],
    "joinDate": "2025-07-16T23:59:57.539Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "spotify": "https://open.spotify.com/artist/mock161"
  },
  {
    "id": "user-162",
    "username": "sonic_pick",
    "email": "sonic_pick@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Cleveland, OH",
    "favoriteArtists": [
      "Max Richter",
      "Olafur Arnalds",
      "Hauschka"
    ],
    "favoriteGenres": [
      "Folk",
      "Ambient",
      "Classical"
    ],
    "instruments": [
      "Electric Guitar",
      "Bass Guitar"
    ],
    "joinDate": "2025-09-24T16:46:09.857Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "sonic_pick",
    "jamEntry": {
      "visible": true,
      "description": "No egos, just vibes. ambient jams, need a bass guitar.",
      "customization": {
        "accentColor": "#4895ef"
      }
    }
  },
  {
    "id": "user-163",
    "username": "bowman19",
    "email": "bowman19@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Newark, DE",
    "favoriteArtists": [
      "Mogwai",
      "Godspeed You! Black Emperor",
      "This Will Destroy You"
    ],
    "favoriteGenres": [
      "Noise",
      "Post-Rock",
      "Experimental"
    ],
    "instruments": [
      "Synthesizer",
      "DJ / Turntables"
    ],
    "joinDate": "2025-10-01T15:59:39.610Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "instagram": "bowman19",
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some experimental with a dj / turntables.",
      "customization": {
        "accentColor": "#00b4d8"
      }
    }
  },
  {
    "id": "user-164",
    "username": "brokentone",
    "email": "brokentone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Nashville, TN",
    "favoriteArtists": [
      "Slowdive",
      "Guided By Voices",
      "Teenage Fanclub"
    ],
    "favoriteGenres": [
      "Shoegaze"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-05-30T21:52:10.556Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#3f37c9"
    },
    "instagram": "brokentone",
    "jamEntry": {
      "visible": true,
      "description": "Producer with shoegaze beats looking for a live electric guitar player.",
      "customization": {
        "accentColor": "#3f37c9"
      }
    }
  },
  {
    "id": "user-165",
    "username": "rustyhorn",
    "email": "rustyhorn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Miami, FL",
    "favoriteArtists": [
      "Jawbreaker",
      "The Menzingers"
    ],
    "favoriteGenres": [
      "Post-Punk",
      "Emo",
      "Post-Hardcore"
    ],
    "instruments": [],
    "joinDate": "2025-12-11T09:45:25.220Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "rustyhorn"
  },
  {
    "id": "user-166",
    "username": "digitalring",
    "email": "digitalring@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "New Orleans, LA",
    "favoriteArtists": [
      "billy woods",
      "Danny Brown",
      "Saba",
      "MF DOOM"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap",
      "Trap",
      "Death Metal"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-09-06T13:01:44.633Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#fee440"
    },
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the trap vein. Need a electric guitar and vocals.",
      "customization": {
        "accentColor": "#fee440"
      }
    }
  },
  {
    "id": "user-167",
    "username": "the_electric_jam",
    "email": "the_electric_jam@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "Los Angeles, CA",
    "favoriteArtists": [
      "Sepultura",
      "Converge",
      "Gojira"
    ],
    "favoriteGenres": [
      "Sludge",
      "R&B / Soul"
    ],
    "instruments": [
      "Harmonica",
      "Acoustic Guitar"
    ],
    "joinDate": "2024-12-31T11:31:28.291Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "spotify": "https://open.spotify.com/artist/mock167"
  },
  {
    "id": "user-168",
    "username": "humace24",
    "email": "humace24@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Tinariwen",
      "Fela Kuti",
      "Calexico"
    ],
    "favoriteGenres": [
      "World Music"
    ],
    "instruments": [
      "Vocals",
      "Drums / Percussion"
    ],
    "joinDate": "2025-07-16T10:11:18.564Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#e63946"
    },
    "spotify": "https://open.spotify.com/artist/mock168",
    "jamEntry": {
      "visible": true,
      "description": "Working on an EP. Need a vocals for some world music tracks.",
      "customization": {
        "accentColor": "#e63946"
      }
    }
  },
  {
    "id": "user-169",
    "username": "digitalhorn",
    "email": "digitalhorn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Chicago, IL",
    "favoriteArtists": [
      "Khruangbin",
      "Toots and the Maytals",
      "Amadou & Mariam"
    ],
    "favoriteGenres": [
      "Reggae",
      "Ska"
    ],
    "instruments": [
      "Vocals",
      "Organ",
      "Keys / Piano"
    ],
    "joinDate": "2024-01-01T03:28:53.707Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#80b918"
    },
    "spotify": "https://open.spotify.com/artist/mock169",
    "jamEntry": {
      "visible": true,
      "description": "Lost my old band, starting fresh. reggae project, need a organ.",
      "customization": {
        "accentColor": "#80b918"
      }
    }
  },
  {
    "id": "user-170",
    "username": "the_lost_tone",
    "email": "the_lost_tone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Cincinnati, OH",
    "favoriteArtists": [
      "Don Caballero",
      "Slint",
      "Swans"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Math Rock"
    ],
    "instruments": [
      "Drums / Percussion",
      "Bass Guitar"
    ],
    "joinDate": "2025-12-02T22:16:58.950Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#6a0572"
    },
    "instagram": "the_lost_tone",
    "spotify": "https://open.spotify.com/artist/mock170"
  },
  {
    "id": "user-171",
    "username": "digitaltape",
    "email": "digitaltape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Memphis, TN",
    "favoriteArtists": [
      "Hella",
      "Godspeed You! Black Emperor"
    ],
    "favoriteGenres": [
      "Progressive Rock",
      "Experimental"
    ],
    "instruments": [
      "Pedal Steel",
      "Dobro"
    ],
    "joinDate": "2024-01-31T20:06:05.133Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "spotify": "https://open.spotify.com/artist/mock171",
    "jamEntry": {
      "visible": true,
      "description": "Casual experimental jams every weekend. Looking for a dobro.",
      "customization": {
        "accentColor": "#00b4d8"
      }
    }
  },
  {
    "id": "user-172",
    "username": "the_electric_wave",
    "email": "the_electric_wave@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Cincinnati, OH",
    "favoriteArtists": [
      "Built to Spill",
      "Sebadoh",
      "Yo La Tengo"
    ],
    "favoriteGenres": [
      "Indie",
      "Alternative",
      "Indie Rock"
    ],
    "instruments": [
      "Bass Guitar"
    ],
    "joinDate": "2024-06-09T19:50:44.806Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#f4a261"
    },
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the indie rock vein. Need a bass guitar and vocals.",
      "customization": {
        "accentColor": "#f4a261"
      }
    }
  },
  {
    "id": "user-173",
    "username": "the_silent_wave",
    "email": "the_silent_wave@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Boston, MA",
    "favoriteArtists": [
      "Mdou Moctar",
      "Amadou & Mariam",
      "Calexico",
      "Gogol Bordello"
    ],
    "favoriteGenres": [
      "World Music"
    ],
    "instruments": [
      "DJ / Turntables",
      "Synthesizer"
    ],
    "joinDate": "2024-01-17T14:38:12.805Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#264653"
    },
    "instagram": "the_silent_wave",
    "spotify": "https://open.spotify.com/artist/mock173"
  },
  {
    "id": "user-174",
    "username": "the_acid_pluck",
    "email": "the_acid_pluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Baltimore, MD",
    "favoriteArtists": [
      "Steve Reich",
      "Olafur Arnalds",
      "Hauschka"
    ],
    "favoriteGenres": [
      "Folk",
      "Ambient"
    ],
    "instruments": [
      "Keys / Piano",
      "Trombone",
      "Trumpet"
    ],
    "joinDate": "2025-07-31T23:10:29.698Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "the_acid_pluck",
    "spotify": "https://open.spotify.com/artist/mock174",
    "jamEntry": {
      "visible": true,
      "description": "Producer with ambient beats looking for a live trumpet player.",
      "customization": {
        "accentColor": "#560bad"
      }
    }
  },
  {
    "id": "user-175",
    "username": "the_electric_pluck",
    "email": "the_electric_pluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Baltimore, MD",
    "favoriteArtists": [
      "Metallica",
      "Electric Wizard",
      "Neurosis"
    ],
    "favoriteGenres": [
      "Thrash Metal",
      "Death Metal",
      "Stoner Rock"
    ],
    "instruments": [
      "Electric Guitar",
      "Vocals"
    ],
    "joinDate": "2025-06-18T19:22:24.175Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "instagram": "the_electric_pluck",
    "spotify": "https://open.spotify.com/artist/mock175",
    "jamEntry": {
      "visible": true,
      "description": "Forming a death metal group. You play electric guitar?",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-176",
    "username": "neon_bass",
    "email": "neon_bass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "The Menzingers",
      "Modern Baseball"
    ],
    "favoriteGenres": [
      "Emo",
      "Post-Hardcore",
      "House"
    ],
    "instruments": [],
    "joinDate": "2025-11-18T13:49:35.468Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "neon_bass"
  },
  {
    "id": "user-177",
    "username": "acidbow",
    "email": "acidbow@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Nas",
      "Earl Sweatshirt",
      "Jay-Z",
      "billy woods"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Singer-Songwriter"
    ],
    "instruments": [],
    "joinDate": "2025-03-23T16:39:23.055Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#ca6702"
    },
    "instagram": "acidbow"
  },
  {
    "id": "user-178",
    "username": "vapor_pluck",
    "email": "vapor_pluck@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Houston, TX",
    "favoriteArtists": [
      "Superchunk",
      "Snail Mail",
      "Dinosaur Jr."
    ],
    "favoriteGenres": [
      "Alternative",
      "Lo-Fi",
      "Shoegaze"
    ],
    "instruments": [
      "Violin",
      "Viola"
    ],
    "joinDate": "2024-01-02T14:46:20.195Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#2a9d8f"
    },
    "instagram": "vapor_pluck"
  },
  {
    "id": "user-179",
    "username": "burnt_wave",
    "email": "burnt_wave@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "Arvo Part",
      "Ennio Morricone",
      "Steve Reich"
    ],
    "favoriteGenres": [
      "Ambient",
      "Folk"
    ],
    "instruments": [],
    "joinDate": "2025-09-05T19:04:48.000Z",
    "lastActive": "2026-03-01T12:18:56.775Z",
    "customization": {
      "accentColor": "#00bbf9"
    },
    "instagram": "burnt_wave"
  },
  {
    "id": "user-180",
    "username": "crystal_bass",
    "email": "crystal_bass@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Columbus, OH",
    "favoriteArtists": [
      "Kacey Musgraves",
      "Robyn"
    ],
    "favoriteGenres": [
      "Disco"
    ],
    "instruments": [
      "Cello"
    ],
    "joinDate": "2025-06-28T01:59:05.450Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "crystal_bass",
    "spotify": "https://open.spotify.com/artist/mock180",
    "jamEntry": {
      "visible": true,
      "description": "Starting a disco band. Need a cello player who knows their stuff.",
      "customization": {
        "accentColor": "#e9c46a"
      }
    }
  },
  {
    "id": "user-181",
    "username": "the_neon_tape",
    "email": "the_neon_tape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Minneapolis, MN",
    "favoriteArtists": [
      "James Brown",
      "Herbie Hancock",
      "Kamasi Washington"
    ],
    "favoriteGenres": [
      "Jazz",
      "Post-Punk"
    ],
    "instruments": [
      "Organ",
      "Vocals",
      "Keys / Piano"
    ],
    "joinDate": "2024-05-30T20:31:05.570Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#4895ef"
    },
    "instagram": "the_neon_tape",
    "jamEntry": {
      "visible": true,
      "description": "Producer with post-punk beats looking for a live keys / piano player.",
      "customization": {
        "accentColor": "#4895ef"
      }
    }
  },
  {
    "id": "user-182",
    "username": "vapor_wave",
    "email": "vapor_wave@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "Max Richter",
      "Steve Reich"
    ],
    "favoriteGenres": [
      "Classical"
    ],
    "instruments": [
      "Mandolin",
      "Fiddle"
    ],
    "joinDate": "2024-10-03T00:51:49.039Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#264653"
    },
    "instagram": "vapor_wave"
  },
  {
    "id": "user-183",
    "username": "sonic_tape",
    "email": "sonic_tape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Boston, MA",
    "favoriteArtists": [
      "Metallica",
      "Mastodon",
      "Napalm Death"
    ],
    "favoriteGenres": [
      "Sludge",
      "World Music"
    ],
    "instruments": [
      "Synthesizer"
    ],
    "joinDate": "2025-11-12T20:58:32.577Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "sonic_tape"
  },
  {
    "id": "user-184",
    "username": "the_electric_roar",
    "email": "the_electric_roar@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Cleveland, OH",
    "favoriteArtists": [
      "Kendrick Lamar",
      "J. Cole",
      "Earl Sweatshirt"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Trap",
      "Hip-Hop / Rap"
    ],
    "instruments": [],
    "joinDate": "2025-06-25T09:59:53.845Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#264653"
    }
  },
  {
    "id": "user-185",
    "username": "ringvox32",
    "email": "ringvox32@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Cleveland, OH",
    "favoriteArtists": [
      "Max Richter",
      "Olafur Arnalds",
      "Nils Frahm"
    ],
    "favoriteGenres": [
      "Classical",
      "Ambient",
      "House"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-07-16T12:55:58.681Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#06d6a0"
    },
    "instagram": "ringvox32",
    "spotify": "https://open.spotify.com/artist/mock185",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by house. Looking for a electric guitar player who gets it.",
      "customization": {
        "accentColor": "#06d6a0"
      }
    }
  },
  {
    "id": "user-186",
    "username": "guitarwolf89",
    "email": "guitarwolf89@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Cincinnati, OH",
    "favoriteArtists": [
      "Taylor Swift",
      "Caroline Polachek",
      "Mitski"
    ],
    "favoriteGenres": [
      "Disco",
      "Pop",
      "Indie Pop"
    ],
    "instruments": [],
    "joinDate": "2024-07-25T11:16:53.307Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#00bbf9"
    }
  },
  {
    "id": "user-187",
    "username": "fuzzy_loop",
    "email": "fuzzy_loop@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Miles Davis",
      "John Coltrane"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Gospel",
      "Indie"
    ],
    "instruments": [
      "Dobro",
      "Banjo"
    ],
    "joinDate": "2024-02-23T06:45:56.229Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "fuzzy_loop"
  },
  {
    "id": "user-188",
    "username": "synthhawk42",
    "email": "synthhawk42@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Sound Engineer"
    ],
    "location": "Cincinnati, OH",
    "favoriteArtists": [
      "Slowdive",
      "My Bloody Valentine",
      "Wild Nothing"
    ],
    "favoriteGenres": [
      "Dream Pop"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-08-06T06:32:27.771Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#457b9d"
    },
    "instagram": "synthhawk42"
  },
  {
    "id": "user-189",
    "username": "echo_sound",
    "email": "echo_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Memphis, TN",
    "favoriteArtists": [
      "Built to Spill",
      "Alvvays",
      "Modest Mouse"
    ],
    "favoriteGenres": [
      "Alternative",
      "Indie Rock"
    ],
    "instruments": [],
    "joinDate": "2025-09-15T11:33:32.116Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#00bbf9"
    }
  },
  {
    "id": "user-190",
    "username": "fuzzist68",
    "email": "fuzzist68@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Don Caballero",
      "Sigur Ros"
    ],
    "favoriteGenres": [
      "Experimental",
      "Math Rock"
    ],
    "instruments": [
      "Saxophone",
      "Drums / Percussion",
      "Trumpet"
    ],
    "joinDate": "2025-11-11T18:23:44.056Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "fuzzist68",
    "jamEntry": {
      "visible": true,
      "description": "Lost my old band, starting fresh. experimental project, need a trumpet.",
      "customization": {
        "accentColor": "#560bad"
      }
    }
  },
  {
    "id": "user-191",
    "username": "keyshawk29",
    "email": "keyshawk29@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Fleet Foxes",
      "Jason Isbell",
      "Bon Iver",
      "Patty Griffin"
    ],
    "favoriteGenres": [
      "Singer-Songwriter",
      "Country"
    ],
    "instruments": [],
    "joinDate": "2024-08-21T22:29:28.987Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#00b4d8"
    },
    "instagram": "keyshawk29"
  },
  {
    "id": "user-192",
    "username": "the_bright_vinyl",
    "email": "the_bright_vinyl@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Newark, DE",
    "favoriteArtists": [
      "Kendrick Lamar",
      "Noname",
      "J. Cole",
      "Boldy James"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Trap",
      "Indie Rock"
    ],
    "instruments": [
      "Trumpet"
    ],
    "joinDate": "2025-08-31T10:24:14.745Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#00bbf9"
    },
    "jamEntry": {
      "visible": true,
      "description": "Looking for a trumpet to complete our trap project.",
      "customization": {
        "accentColor": "#00bbf9"
      }
    }
  },
  {
    "id": "user-193",
    "username": "the_fuzzy_tone",
    "email": "the_fuzzy_tone@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Charlotte, NC",
    "favoriteArtists": [
      "Danny Brown",
      "Earl Sweatshirt",
      "Run The Jewels",
      "J. Cole"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Trap"
    ],
    "instruments": [],
    "joinDate": "2024-11-26T09:46:56.806Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#9b5de5"
    },
    "instagram": "the_fuzzy_tone",
    "spotify": "https://open.spotify.com/artist/mock193"
  },
  {
    "id": "user-194",
    "username": "darkhum",
    "email": "darkhum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer",
      "Artist"
    ],
    "location": "Minneapolis, MN",
    "favoriteArtists": [
      "Tinariwen",
      "Gogol Bordello",
      "Fela Kuti"
    ],
    "favoriteGenres": [
      "Reggaeton",
      "Cumbia",
      "Ska"
    ],
    "instruments": [
      "Banjo"
    ],
    "joinDate": "2025-10-23T17:38:39.888Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#06d6a0"
    },
    "spotify": "https://open.spotify.com/artist/mock194",
    "jamEntry": {
      "visible": true,
      "description": "Forming a reggaeton group. You play banjo?",
      "customization": {
        "accentColor": "#06d6a0"
      }
    }
  },
  {
    "id": "user-195",
    "username": "wild_fuzz",
    "email": "wild_fuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Los Angeles, CA",
    "favoriteArtists": [
      "Pallbearer",
      "Metallica",
      "Baroness",
      "Napalm Death"
    ],
    "favoriteGenres": [
      "Thrash Metal",
      "Death Metal",
      "Sludge"
    ],
    "instruments": [],
    "joinDate": "2025-12-08T08:05:11.328Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#3f37c9"
    },
    "instagram": "wild_fuzz"
  },
  {
    "id": "user-196",
    "username": "the_neon_horn",
    "email": "the_neon_horn@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Phoenix, AZ",
    "favoriteArtists": [
      "Ryuichi Sakamoto",
      "Steve Reich"
    ],
    "favoriteGenres": [
      "Folk",
      "Ambient",
      "Classical"
    ],
    "instruments": [
      "Electric Guitar"
    ],
    "joinDate": "2025-06-05T22:06:12.209Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#2a9d8f"
    }
  },
  {
    "id": "user-197",
    "username": "jamwolf50",
    "email": "jamwolf50@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Taylor Swift",
      "Angel Olsen",
      "Caroline Polachek"
    ],
    "favoriteGenres": [
      "Pop"
    ],
    "instruments": [
      "Bass Guitar",
      "Electric Guitar"
    ],
    "joinDate": "2025-01-06T11:23:12.495Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "jamwolf50",
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some pop with a bass guitar.",
      "customization": {
        "accentColor": "#4361ee"
      }
    }
  },
  {
    "id": "user-198",
    "username": "the_vapor_bow",
    "email": "the_vapor_bow@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Atlanta, GA",
    "favoriteArtists": [
      "Al Green",
      "John Coltrane"
    ],
    "favoriteGenres": [
      "Jazz",
      "Blues"
    ],
    "instruments": [
      "Viola",
      "Clarinet",
      "Cello"
    ],
    "joinDate": "2024-02-18T20:24:31.830Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#560bad"
    },
    "instagram": "the_vapor_bow",
    "jamEntry": {
      "visible": true,
      "description": "Gigging clarinet player looking to join a jazz outfit.",
      "customization": {
        "accentColor": "#560bad"
      }
    }
  },
  {
    "id": "user-199",
    "username": "wild_riff",
    "email": "wild_riff@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Baroness",
      "Converge",
      "Pallbearer",
      "Electric Wizard"
    ],
    "favoriteGenres": [
      "Thrash Metal",
      "Metal",
      "Heavy Metal"
    ],
    "instruments": [
      "Bass Guitar",
      "Electric Guitar"
    ],
    "joinDate": "2025-06-24T04:36:00.142Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "wild_riff",
    "jamEntry": {
      "visible": true,
      "description": "Forming a heavy metal group. You play bass guitar?",
      "customization": {
        "accentColor": "#e9c46a"
      }
    }
  },
  {
    "id": "user-200",
    "username": "the_heavy_strum",
    "email": "the_heavy_strum@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Sound Engineer"
    ],
    "location": "Memphis, TN",
    "favoriteArtists": [
      "Noname",
      "Saba"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap",
      "Trap",
      "R&B / Soul"
    ],
    "instruments": [
      "Acoustic Guitar"
    ],
    "joinDate": "2025-10-28T05:52:00.013Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#4361ee"
    },
    "instagram": "the_heavy_strum"
  },
  {
    "id": "user-201",
    "username": "soundkid95",
    "email": "soundkid95@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Portland, OR",
    "favoriteArtists": [
      "Kamasi Washington",
      "Mavis Staples",
      "Herbie Hancock"
    ],
    "favoriteGenres": [
      "R&B / Soul",
      "Funk",
      "Blues"
    ],
    "instruments": [
      "Vocals"
    ],
    "joinDate": "2025-12-26T02:27:14.099Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#e9c46a"
    },
    "instagram": "soundkid95",
    "spotify": "https://open.spotify.com/artist/mock201",
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by blues. Looking for a vocals player who gets it.",
      "customization": {
        "accentColor": "#e9c46a"
      }
    }
  },
  {
    "id": "user-202",
    "username": "pluckfox65",
    "email": "pluckfox65@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Fan"
    ],
    "location": "Chicago, IL",
    "favoriteArtists": [
      "Arvo Part",
      "Max Richter",
      "Nils Frahm"
    ],
    "favoriteGenres": [
      "Classical",
      "Synth-Pop"
    ],
    "instruments": [],
    "joinDate": "2024-12-09T07:42:24.369Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#f4a261"
    }
  },
  {
    "id": "user-203",
    "username": "fuzzy_sound",
    "email": "fuzzy_sound@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker"
    ],
    "location": "Washington, DC",
    "favoriteArtists": [
      "Carly Rae Jepsen",
      "Sharon Van Etten",
      "Caroline Polachek",
      "Charli XCX"
    ],
    "favoriteGenres": [
      "Dream Pop"
    ],
    "instruments": [],
    "joinDate": "2025-04-30T20:11:18.665Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#06d6a0"
    },
    "instagram": "fuzzy_sound",
    "spotify": "https://open.spotify.com/artist/mock203"
  },
  {
    "id": "user-204",
    "username": "vapor_chord",
    "email": "vapor_chord@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Artist"
    ],
    "location": "St. Louis, MO",
    "favoriteArtists": [
      "Lorde",
      "Carly Rae Jepsen",
      "HAIM"
    ],
    "favoriteGenres": [
      "Indie Pop",
      "Pop",
      "Dream Pop"
    ],
    "instruments": [
      "Drums / Percussion",
      "Bass Guitar"
    ],
    "joinDate": "2024-02-01T22:56:50.200Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#ae2012"
    },
    "instagram": "vapor_chord",
    "jamEntry": {
      "visible": true,
      "description": "Have a home studio. Want to record some indie pop with a bass guitar.",
      "customization": {
        "accentColor": "#ae2012"
      }
    }
  },
  {
    "id": "user-205",
    "username": "ampfox52",
    "email": "ampfox52@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "San Francisco, CA",
    "favoriteArtists": [
      "Freddie Gibbs",
      "billy woods"
    ],
    "favoriteGenres": [
      "Hip-Hop / Rap",
      "Trap",
      "Alternative"
    ],
    "instruments": [
      "Pedal Steel"
    ],
    "joinDate": "2025-02-18T16:10:59.542Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#ca6702"
    },
    "instagram": "ampfox52",
    "jamEntry": {
      "visible": true,
      "description": "Producer with alternative beats looking for a live pedal steel player.",
      "customization": {
        "accentColor": "#ca6702"
      }
    }
  },
  {
    "id": "user-206",
    "username": "the_cold_tape",
    "email": "the_cold_tape@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician"
    ],
    "location": "Dallas, TX",
    "favoriteArtists": [
      "Thelonious Monk",
      "Sharon Jones",
      "Mavis Staples",
      "James Brown"
    ],
    "favoriteGenres": [
      "Funk",
      "R&B / Soul"
    ],
    "instruments": [
      "DJ / Turntables"
    ],
    "joinDate": "2024-12-18T12:49:58.760Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#7209b7"
    },
    "instagram": "the_cold_tape",
    "jamEntry": {
      "visible": true,
      "description": "Writing originals in the funk vein. Need a dj / turntables and vocals.",
      "customization": {
        "accentColor": "#7209b7"
      }
    }
  },
  {
    "id": "user-207",
    "username": "the_fuzzy_buzz",
    "email": "the_fuzzy_buzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Musician",
      "Photographer/Videographer"
    ],
    "location": "Detroit, MI",
    "favoriteArtists": [
      "Sebadoh",
      "Alvvays"
    ],
    "favoriteGenres": [
      "Shoegaze",
      "Alternative"
    ],
    "instruments": [
      "Drums / Percussion"
    ],
    "joinDate": "2025-10-23T01:47:26.410Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#f15bb5"
    },
    "jamEntry": {
      "visible": true,
      "description": "Influenced heavily by shoegaze. Looking for a drums / percussion player who gets it.",
      "customization": {
        "accentColor": "#f15bb5"
      }
    }
  },
  {
    "id": "user-208",
    "username": "the_crystal_fuzz",
    "email": "the_crystal_fuzz@soundpool.io",
    "password": "demo1234",
    "roles": [
      "Booker",
      "Fan"
    ],
    "location": "Philadelphia, PA",
    "favoriteArtists": [
      "LCD Soundsystem",
      "Burial"
    ],
    "favoriteGenres": [
      "Dance / EDM",
      "Drum & Bass"
    ],
    "instruments": [],
    "joinDate": "2024-04-29T15:59:38.969Z",
    "lastActive": "2026-03-01T12:18:56.776Z",
    "customization": {
      "accentColor": "#ee9b00"
    }
  }
];

export const MOCK_FEED_POSTS: FeedPost[] = [
  {
    "id": "post-46",
    "authorId": "user-49",
    "content": "Wrote the bridge I have been stuck on for three weeks at 6am this morning. Brain works on its own schedule.",
    "createdAt": "2026-03-01T11:31:13.386Z",
    "comments": [],
    "location": "Portland, OR"
  },
  {
    "id": "post-28",
    "authorId": "user-57",
    "content": "Revisiting Miles Davis today. Still holds up completely.",
    "createdAt": "2026-03-01T10:31:13.386Z",
    "comments": [
      {
        "id": "b4ffaa60-d2c0-4d05-88df-e5625d7495bb",
        "authorId": "user-15",
        "content": "Needed this reminder. Thank you.",
        "createdAt": "2026-03-01T11:07:13.386Z"
      },
      {
        "id": "d76f0f6a-3d9f-4b56-8a0a-3255874a0070",
        "authorId": "user-101",
        "content": "Come play in my city please.",
        "createdAt": "2026-03-01T11:15:13.386Z"
      },
      {
        "id": "5dfcc638-335a-4974-a38d-7392afc197db",
        "authorId": "user-49",
        "content": "Real ones know.",
        "createdAt": "2026-03-01T12:11:13.386Z"
      },
      {
        "id": "655c3216-31e7-4b7c-b6b3-c63ee0494e02",
        "authorId": "user-52",
        "content": "Glad someone said it.",
        "createdAt": "2026-03-01T12:33:13.386Z"
      }
    ],
    "location": "Washington, DC"
  },
  {
    "id": "post-19",
    "authorId": "user-196",
    "content": "Started something new today. No genre, no rules, just following the sound.",
    "createdAt": "2026-03-01T09:31:13.386Z",
    "comments": [],
    "location": "Phoenix, AZ"
  },
  {
    "id": "post-7",
    "authorId": "user-170",
    "content": "That post-show feeling. Adrenaline + exhaustion + wanting to do it all again.",
    "createdAt": "2026-03-01T09:31:13.385Z",
    "comments": [
      {
        "id": "74aa1789-f293-40cf-a813-91ac6d59845a",
        "authorId": "user-162",
        "content": "This is exactly what the scene needs.",
        "createdAt": "2026-03-01T10:30:13.385Z"
      }
    ],
    "location": "Cincinnati, OH"
  },
  {
    "id": "post-13",
    "authorId": "user-122",
    "content": "Finally found a rehearsal space that does not sound like a tin can. Life changing.",
    "createdAt": "2026-03-01T07:31:13.386Z",
    "comments": [],
    "location": "Charlotte, NC"
  },
  {
    "id": "post-50",
    "authorId": "user-144",
    "content": "Looking for a producer who is into Punk. DMs open.",
    "createdAt": "2026-03-01T05:31:13.386Z",
    "comments": [
      {
        "id": "3a44f19e-a4e2-4d7a-83b2-31492ee4b04d",
        "authorId": "user-159",
        "content": "Same. Every single time.",
        "createdAt": "2026-03-01T06:15:13.386Z"
      },
      {
        "id": "91179019-1ebd-4987-aaa1-4af5f9cfb41c",
        "authorId": "user-18",
        "content": "Been there. It gets better.",
        "createdAt": "2026-03-01T06:24:13.386Z"
      },
      {
        "id": "9e98e163-9972-4858-a798-d3be17e1fe9f",
        "authorId": "user-85",
        "content": "That gear find is insane, congrats.",
        "createdAt": "2026-03-01T08:43:13.386Z"
      },
      {
        "id": "2cee2b8c-edf6-4313-b2c2-93ec870b4299",
        "authorId": "user-15",
        "content": "Drop the demo when it is ready, I want to hear it.",
        "createdAt": "2026-03-01T09:47:13.386Z"
      }
    ],
    "location": "San Francisco, CA"
  },
  {
    "id": "post-18",
    "authorId": "user-18",
    "content": "Anyone in Austin, TX doing house stuff? Trying to find my people.",
    "createdAt": "2026-03-01T04:31:13.386Z",
    "comments": [],
    "location": "Austin, TX"
  },
  {
    "id": "post-29",
    "authorId": "user-117",
    "content": "Looking for a second guitarist who is into Drum & Bass. DMs open.",
    "createdAt": "2026-03-01T04:31:13.386Z",
    "comments": [
      {
        "id": "177572df-5fd8-4d7f-908f-4dfbe078443f",
        "authorId": "user-66",
        "content": "You are going to crush it.",
        "createdAt": "2026-03-01T05:29:13.386Z"
      },
      {
        "id": "b4aaca40-a818-4e8e-88a3-4585e5e8c83a",
        "authorId": "user-149",
        "content": "Love this for you.",
        "createdAt": "2026-03-01T06:09:13.386Z"
      }
    ],
    "location": "Charlotte, NC"
  },
  {
    "id": "post-34",
    "authorId": "user-174",
    "content": "Just laid down some ambient tracks at home. Raw and rough but feeling it.",
    "createdAt": "2026-03-01T04:31:13.386Z",
    "comments": [],
    "location": "Baltimore, MD"
  },
  {
    "id": "post-42",
    "authorId": "user-125",
    "content": "Stayed up until 3am tracking parts. Worth it.",
    "createdAt": "2026-03-01T03:31:13.386Z",
    "comments": [
      {
        "id": "6db8b014-7889-48e5-afd3-770605fa322b",
        "authorId": "user-53",
        "content": "You are inspiring me to actually finish something.",
        "createdAt": "2026-03-01T04:35:13.386Z"
      }
    ],
    "location": "Kansas City, MO"
  },
  {
    "id": "post-22",
    "authorId": "user-93",
    "content": "Just laid down some disco tracks at home. Raw and rough but feeling it.",
    "createdAt": "2026-03-01T00:31:13.386Z",
    "comments": [
      {
        "id": "b8b2e9f7-234a-4fa3-b1d6-0e7eec79fb95",
        "authorId": "user-111",
        "content": "I have been saying this for years.",
        "createdAt": "2026-03-01T01:00:13.386Z"
      }
    ],
    "location": "Philadelphia, PA"
  },
  {
    "id": "post-15",
    "authorId": "user-143",
    "content": "Opened for a band I have been listening to for years last night. Surreal.",
    "createdAt": "2026-02-28T22:31:13.386Z",
    "comments": [],
    "location": "Nashville, TN"
  },
  {
    "id": "post-25",
    "authorId": "user-156",
    "content": "Does anyone else just sit with their instrument for hours without actually playing anything structured?",
    "createdAt": "2026-02-28T22:31:13.386Z",
    "comments": [],
    "location": "Cincinnati, OH"
  },
  {
    "id": "post-53",
    "authorId": "user-121",
    "content": "Wrote the bridge I have been stuck on for three weeks at 6am this morning. Brain works on its own schedule.",
    "createdAt": "2026-02-28T22:31:13.386Z",
    "comments": [
      {
        "id": "82a6024a-22f1-4e4e-98b0-a504909135ab",
        "authorId": "user-133",
        "content": "I felt this deeply.",
        "createdAt": "2026-02-28T23:05:13.386Z"
      },
      {
        "id": "0039f005-1a14-451b-b358-c0c0e7e2406c",
        "authorId": "user-166",
        "content": "Sending good vibes your way.",
        "createdAt": "2026-02-28T23:59:13.386Z"
      },
      {
        "id": "a3fb57c1-c016-41ef-a6ba-e8f7c962898e",
        "authorId": "user-189",
        "content": "Where are you recording? Sounds amazing.",
        "createdAt": "2026-03-01T00:01:13.386Z"
      }
    ],
    "location": "Phoenix, AZ"
  },
  {
    "id": "post-9",
    "authorId": "user-11",
    "content": "Does anyone else just sit with their instrument for hours without actually playing anything structured?",
    "createdAt": "2026-02-28T21:31:13.385Z",
    "comments": [
      {
        "id": "b0dce788-5de8-4aa9-a365-971abc7cfcab",
        "authorId": "user-52",
        "content": "Following for updates on this project.",
        "createdAt": "2026-02-28T22:28:13.385Z"
      },
      {
        "id": "a2f1fd80-5534-4adc-b213-96c97fd24174",
        "authorId": "user-174",
        "content": "Glad someone said it.",
        "createdAt": "2026-02-28T22:43:13.385Z"
      }
    ],
    "location": "Columbus, OH"
  },
  {
    "id": "post-30",
    "authorId": "user-35",
    "content": "A full day of nothing but listening. No phones, no distractions. Highly recommend.",
    "createdAt": "2026-02-28T18:31:13.386Z",
    "comments": [
      {
        "id": "6205c579-b762-4029-9ef4-34fc7533a700",
        "authorId": "user-90",
        "content": "Strong agree on that take.",
        "createdAt": "2026-02-28T19:06:13.386Z"
      },
      {
        "id": "813e67f3-b7f3-4bff-a903-35d54bdb9bad",
        "authorId": "user-50",
        "content": "The struggle is real but so is the music.",
        "createdAt": "2026-02-28T19:09:13.386Z"
      },
      {
        "id": "5d9b89d6-09ac-4934-b506-9c5d65278bbc",
        "authorId": "user-67",
        "content": "Been there. It gets better.",
        "createdAt": "2026-02-28T19:43:13.386Z"
      }
    ],
    "location": "Charlotte, NC"
  },
  {
    "id": "post-16",
    "authorId": "user-120",
    "content": "Anyone in Detroit, MI doing country stuff? Trying to find my people.",
    "createdAt": "2026-02-28T13:31:13.386Z",
    "comments": [],
    "location": "Detroit, MI"
  },
  {
    "id": "post-4",
    "authorId": "user-154",
    "content": "That post-show feeling. Adrenaline + exhaustion + wanting to do it all again.",
    "createdAt": "2026-02-28T13:31:13.385Z",
    "comments": [],
    "location": "Washington, DC"
  },
  {
    "id": "post-12",
    "authorId": "user-138",
    "content": "Musicians: stop apologizing before you play something. Just play it.",
    "createdAt": "2026-02-28T13:31:13.385Z",
    "comments": [],
    "location": "Richmond, VA"
  },
  {
    "id": "post-36",
    "authorId": "user-176",
    "content": "Live music is the only reason I need to leave the house.",
    "createdAt": "2026-02-28T12:31:13.386Z",
    "comments": [
      {
        "id": "d42fea6f-7d11-4eef-9d3e-6b2b2fa04146",
        "authorId": "user-20",
        "content": "Needed this reminder. Thank you.",
        "createdAt": "2026-02-28T12:45:13.386Z"
      },
      {
        "id": "e2748968-ecac-4125-b136-707a26f8f1fb",
        "authorId": "user-12",
        "content": "This hit different today.",
        "createdAt": "2026-02-28T13:13:13.386Z"
      }
    ],
    "location": "Philadelphia, PA"
  },
  {
    "id": "post-41",
    "authorId": "user-90",
    "content": "Death Metal saved my life in high school and I am still paying it back.",
    "createdAt": "2026-02-28T12:31:13.386Z",
    "comments": [],
    "location": "Seattle, WA"
  },
  {
    "id": "post-11",
    "authorId": "user-159",
    "content": "Looking for a producer who is into Ambient. DMs open.",
    "createdAt": "2026-02-28T12:31:13.385Z",
    "comments": [
      {
        "id": "ca9470f2-297b-423a-ae04-943b1360beca",
        "authorId": "user-155",
        "content": "The post-show feeling is unmatched.",
        "createdAt": "2026-02-28T12:56:13.385Z"
      },
      {
        "id": "da64b67d-274c-4fee-a70a-02dac455ce11",
        "authorId": "user-146",
        "content": "Let me know if you need a collaborator on that.",
        "createdAt": "2026-02-28T13:23:13.385Z"
      }
    ],
    "location": "Houston, TX"
  },
  {
    "id": "post-21",
    "authorId": "user-27",
    "content": "Looking for a second guitarist who is into Disco. DMs open.",
    "createdAt": "2026-02-27T12:31:13.386Z",
    "comments": [],
    "location": "Denver, CO"
  },
  {
    "id": "post-40",
    "authorId": "user-181",
    "content": "New recording rig is finally set up. Expect some jazz content soon.",
    "createdAt": "2026-02-27T12:31:13.386Z",
    "comments": [],
    "location": "Minneapolis, MN"
  },
  {
    "id": "post-43",
    "authorId": "user-169",
    "content": "That post-show feeling. Adrenaline + exhaustion + wanting to do it all again.",
    "createdAt": "2026-02-27T12:31:13.386Z",
    "comments": [
      {
        "id": "61049e3b-6b94-444f-b67e-9518f5ef25f0",
        "authorId": "user-30",
        "content": "Strong agree on that take.",
        "createdAt": "2026-02-27T13:33:13.386Z"
      }
    ],
    "location": "Chicago, IL"
  },
  {
    "id": "post-49",
    "authorId": "user-110",
    "content": "The best riff ideas always come at the worst times. 2am, shower, driving — never when you are actually set up.",
    "createdAt": "2026-02-27T12:31:13.386Z",
    "comments": [
      {
        "id": "3452d8b7-29f7-4c04-bf8f-63f9a21bdb29",
        "authorId": "user-36",
        "content": "Following for updates on this project.",
        "createdAt": "2026-02-27T12:57:13.386Z"
      },
      {
        "id": "841f231e-e64d-45fd-80c4-63d64ccabcd9",
        "authorId": "user-60",
        "content": "Say less, I am in.",
        "createdAt": "2026-02-27T13:40:13.386Z"
      },
      {
        "id": "5f1e182d-da34-45bd-954a-346b4bd76974",
        "authorId": "user-67",
        "content": "Agreed 100%.",
        "createdAt": "2026-02-27T14:21:13.386Z"
      }
    ],
    "location": "Charlotte, NC"
  },
  {
    "id": "post-51",
    "authorId": "user-182",
    "content": "Wrote the bridge I have been stuck on for three weeks at 6am this morning. Brain works on its own schedule.",
    "createdAt": "2026-02-27T12:31:13.386Z",
    "comments": [
      {
        "id": "efe14ca5-1cef-48e6-b6cd-3fb2e64bc842",
        "authorId": "user-116",
        "content": "That venue is legendary. Lucky you.",
        "createdAt": "2026-02-27T13:06:13.386Z"
      }
    ],
    "location": "Philadelphia, PA"
  },
  {
    "id": "post-31",
    "authorId": "user-39",
    "content": "Been in a reggaeton spiral this week and I have zero regrets.",
    "createdAt": "2026-02-26T12:31:13.386Z",
    "comments": [
      {
        "id": "45d1dffc-a2f5-4797-b5fe-04d80cf49b63",
        "authorId": "user-59",
        "content": "Honestly goals.",
        "createdAt": "2026-02-26T13:05:13.386Z"
      },
      {
        "id": "4a2bba59-0ecc-4659-83da-0a85294a7ff8",
        "authorId": "user-156",
        "content": "This made my day.",
        "createdAt": "2026-02-26T13:09:13.386Z"
      },
      {
        "id": "5fceaf6a-eafd-4227-9382-17d86f98868e",
        "authorId": "user-79",
        "content": "Glad someone said it.",
        "createdAt": "2026-02-26T13:58:13.386Z"
      },
      {
        "id": "7d5436fd-8c1e-4994-805d-c1addd2692a2",
        "authorId": "user-82",
        "content": "Strong agree on that take.",
        "createdAt": "2026-02-26T14:27:13.386Z"
      }
    ],
    "location": "Denver, CO"
  },
  {
    "id": "post-32",
    "authorId": "user-141",
    "content": "Just laid down some emo tracks at home. Raw and rough but feeling it.",
    "createdAt": "2026-02-26T12:31:13.386Z",
    "comments": [],
    "location": "Indianapolis, IN"
  },
  {
    "id": "post-37",
    "authorId": "user-40",
    "content": "Anyone in Los Angeles, CA doing post-rock stuff? Trying to find my people.",
    "createdAt": "2026-02-26T12:31:13.386Z",
    "comments": [
      {
        "id": "2acb252c-3f4c-45f3-aa8e-a3ac721b6cb9",
        "authorId": "user-144",
        "content": "This made my day.",
        "createdAt": "2026-02-26T13:12:13.386Z"
      },
      {
        "id": "1d523c31-a9cd-4baf-8a37-249dd69584b6",
        "authorId": "user-20",
        "content": "I have been saying this for years.",
        "createdAt": "2026-02-26T13:55:13.386Z"
      },
      {
        "id": "9a85907f-0641-4814-a8d0-3f2239968fd1",
        "authorId": "user-90",
        "content": "You are going to crush it.",
        "createdAt": "2026-02-26T14:16:13.386Z"
      },
      {
        "id": "18d5eebb-0e5d-4ee4-b57c-20c22aba4f27",
        "authorId": "user-131",
        "content": "Real ones know.",
        "createdAt": "2026-02-26T16:31:13.386Z"
      }
    ],
    "location": "Los Angeles, CA"
  },
  {
    "id": "post-38",
    "authorId": "user-139",
    "content": "Opened for a band I have been listening to for years last night. Surreal.",
    "createdAt": "2026-02-26T12:31:13.386Z",
    "comments": [],
    "location": "Minneapolis, MN"
  },
  {
    "id": "post-8",
    "authorId": "user-75",
    "content": "Caught an incredible show tonight at a tiny venue. 40 people. Full send energy.",
    "createdAt": "2026-02-26T12:31:13.385Z",
    "comments": [
      {
        "id": "b0d32cfe-bb89-42c5-b81d-1a8b98b02a3f",
        "authorId": "user-110",
        "content": "Needed this reminder. Thank you.",
        "createdAt": "2026-02-26T12:53:13.385Z"
      }
    ],
    "location": "Kansas City, MO"
  },
  {
    "id": "post-23",
    "authorId": "user-63",
    "content": "Three takes, kept the first one. That is the magic of recording.",
    "createdAt": "2026-02-24T12:31:13.386Z",
    "comments": [],
    "location": "Dallas, TX"
  },
  {
    "id": "post-33",
    "authorId": "user-166",
    "content": "Been in a trap spiral this week and I have zero regrets.",
    "createdAt": "2026-02-24T12:31:13.386Z",
    "comments": [],
    "location": "New Orleans, LA"
  },
  {
    "id": "post-6",
    "authorId": "user-152",
    "content": "New strings, fresh patch cables, full pedalboard battery check. Ready.",
    "createdAt": "2026-02-24T12:31:13.385Z",
    "comments": [
      {
        "id": "3b73de42-b954-4d47-8619-2904c277ec50",
        "authorId": "user-154",
        "content": "Where are you recording? Sounds amazing.",
        "createdAt": "2026-02-24T13:10:13.385Z"
      },
      {
        "id": "a3ebbda5-81b5-4d3d-bbb1-a9d8d8591966",
        "authorId": "user-29",
        "content": "Glad someone said it.",
        "createdAt": "2026-02-24T13:27:13.385Z"
      },
      {
        "id": "805bf2bf-a49e-4e83-93ae-b45b3c6611db",
        "authorId": "user-188",
        "content": "Same energy here. Keep going.",
        "createdAt": "2026-02-24T14:21:13.385Z"
      }
    ],
    "location": "Miami, FL"
  },
  {
    "id": "post-48",
    "authorId": "user-111",
    "content": "That post-show feeling. Adrenaline + exhaustion + wanting to do it all again.",
    "createdAt": "2026-02-23T12:31:13.386Z",
    "comments": [
      {
        "id": "7ef684b1-4a98-41ca-8944-57e725160f2c",
        "authorId": "user-85",
        "content": "Following for updates on this project.",
        "createdAt": "2026-02-23T12:46:13.386Z"
      }
    ],
    "location": "Austin, TX"
  },
  {
    "id": "post-35",
    "authorId": "user-113",
    "content": "First rehearsal with a new lineup tonight. Fingers crossed.",
    "createdAt": "2026-02-22T12:31:13.386Z",
    "comments": [
      {
        "id": "7fd1b3ce-8f10-4df2-8f23-05b4301deb0e",
        "authorId": "user-39",
        "content": "That gear find is insane, congrats.",
        "createdAt": "2026-02-22T13:10:13.386Z"
      },
      {
        "id": "11d6f166-05d6-4dd9-a4ee-7d407e4d21fa",
        "authorId": "user-49",
        "content": "Real ones know.",
        "createdAt": "2026-02-22T14:11:13.386Z"
      },
      {
        "id": "88013c6b-3560-4845-a2e2-79fac5e91129",
        "authorId": "user-9",
        "content": "Yes!! So needed to hear this today.",
        "createdAt": "2026-02-22T15:01:13.386Z"
      }
    ],
    "location": "Newark, DE"
  },
  {
    "id": "post-39",
    "authorId": "user-10",
    "content": "Wrote a full song today. Melody, lyrics, arrangement. Rare day.",
    "createdAt": "2026-02-22T12:31:13.386Z",
    "comments": [
      {
        "id": "1d928dd7-d9de-40de-a387-9b9ba2fd78d6",
        "authorId": "user-55",
        "content": "You are going to crush it.",
        "createdAt": "2026-02-22T13:31:13.386Z"
      }
    ],
    "location": "New Orleans, LA"
  },
  {
    "id": "post-5",
    "authorId": "user-12",
    "content": "Nothing beats a packed basement show. Trap is alive and well.",
    "createdAt": "2026-02-22T12:31:13.385Z",
    "comments": [],
    "location": "Austin, TX"
  },
  {
    "id": "post-17",
    "authorId": "user-118",
    "content": "The best riff ideas always come at the worst times. 2am, shower, driving — never when you are actually set up.",
    "createdAt": "2026-02-21T12:31:13.386Z",
    "comments": [
      {
        "id": "7c7c9dd7-ffd5-42b5-ae45-bebb0a8fea0e",
        "authorId": "user-15",
        "content": "Following for updates on this project.",
        "createdAt": "2026-02-21T13:07:13.386Z"
      },
      {
        "id": "b6232448-fdce-47a8-aa4c-95fa3532ba13",
        "authorId": "user-130",
        "content": "Glad someone said it.",
        "createdAt": "2026-02-21T13:40:13.386Z"
      },
      {
        "id": "a4c18ae4-6f92-4290-9dab-3078bc66292b",
        "authorId": "user-183",
        "content": "Same. Every single time.",
        "createdAt": "2026-02-21T15:34:13.386Z"
      },
      {
        "id": "a8bd85b0-810d-479f-8790-a3bf9094f76a",
        "authorId": "user-109",
        "content": "You are inspiring me to actually finish something.",
        "createdAt": "2026-02-21T15:51:13.386Z"
      }
    ],
    "location": "Houston, TX"
  },
  {
    "id": "post-24",
    "authorId": "user-67",
    "content": "That post-show feeling. Adrenaline + exhaustion + wanting to do it all again.",
    "createdAt": "2026-02-21T12:31:13.386Z",
    "comments": [],
    "location": "Los Angeles, CA"
  },
  {
    "id": "post-44",
    "authorId": "user-191",
    "content": "Played a gig last night. Small crowd but they were INTO it. Best kind of show.",
    "createdAt": "2026-02-21T12:31:13.386Z",
    "comments": [
      {
        "id": "8687019a-7af0-4fa8-92d1-c659b8d3764a",
        "authorId": "user-126",
        "content": "Real ones know.",
        "createdAt": "2026-02-21T13:07:13.386Z"
      },
      {
        "id": "2f8aecb6-fbba-4a8f-8b86-5ab936f07632",
        "authorId": "user-27",
        "content": "Yes!! So needed to hear this today.",
        "createdAt": "2026-02-21T13:25:13.386Z"
      },
      {
        "id": "175d5ed5-65d4-4dca-a43c-8879cdb2173e",
        "authorId": "user-105",
        "content": "I felt this deeply.",
        "createdAt": "2026-02-21T15:10:13.386Z"
      }
    ],
    "location": "St. Louis, MO"
  },
  {
    "id": "post-45",
    "authorId": "user-104",
    "content": "First rehearsal with a new lineup tonight. Fingers crossed.",
    "createdAt": "2026-02-21T12:31:13.386Z",
    "comments": [],
    "location": "Columbus, OH"
  },
  {
    "id": "post-14",
    "authorId": "user-45",
    "content": "Three takes, kept the first one. That is the magic of recording.",
    "createdAt": "2026-02-20T12:31:13.386Z",
    "comments": [
      {
        "id": "45d707fb-4c0c-441b-9341-68d73c0c7e50",
        "authorId": "user-171",
        "content": "Where are you recording? Sounds amazing.",
        "createdAt": "2026-02-20T12:51:13.386Z"
      },
      {
        "id": "0dfd3bb6-6779-43f6-a7f9-06b0b9fa0f83",
        "authorId": "user-33",
        "content": "The struggle is real but so is the music.",
        "createdAt": "2026-02-20T14:15:13.386Z"
      }
    ],
    "location": "Minneapolis, MN"
  },
  {
    "id": "post-52",
    "authorId": "user-58",
    "content": "Played a gig last night. Small crowd but they were INTO it. Best kind of show.",
    "createdAt": "2026-02-20T12:31:13.386Z",
    "comments": [
      {
        "id": "a71aba8a-dfd4-4e88-8472-ee22611ee5da",
        "authorId": "user-45",
        "content": "Yes!! So needed to hear this today.",
        "createdAt": "2026-02-20T13:31:13.386Z"
      }
    ],
    "location": "Washington, DC"
  },
  {
    "id": "post-26",
    "authorId": "user-184",
    "content": "Broke a string mid-set. Kept playing. Most punk thing I have ever done.",
    "createdAt": "2026-02-18T12:31:13.386Z",
    "comments": [
      {
        "id": "0867e2fb-f4a4-43db-bd46-d4ba28c4e704",
        "authorId": "user-173",
        "content": "This is giving me motivation to pick up my instrument tonight.",
        "createdAt": "2026-02-18T13:07:13.386Z"
      },
      {
        "id": "53ef115a-2a95-4fce-8ec7-425bb84834f1",
        "authorId": "user-10",
        "content": "This is giving me motivation to pick up my instrument tonight.",
        "createdAt": "2026-02-18T13:28:13.386Z"
      },
      {
        "id": "83a72004-b89e-463b-a921-47a10214f555",
        "authorId": "user-22",
        "content": "Where are you recording? Sounds amazing.",
        "createdAt": "2026-02-18T13:39:13.386Z"
      }
    ],
    "location": "Cleveland, OH"
  },
  {
    "id": "post-47",
    "authorId": "user-140",
    "content": "Practice does not make perfect. It makes permanent. Choose your habits carefully.",
    "createdAt": "2026-02-17T12:31:13.386Z",
    "comments": [
      {
        "id": "bb8d4b58-eb26-4e37-a96d-9cccf3655dba",
        "authorId": "user-62",
        "content": "This made my day.",
        "createdAt": "2026-02-17T13:17:13.386Z"
      },
      {
        "id": "48eb4582-9e92-4a4b-8e42-f74bc65a8b1d",
        "authorId": "user-140",
        "content": "Say less, I am in.",
        "createdAt": "2026-02-17T13:55:13.386Z"
      },
      {
        "id": "3bd54337-c100-4228-ade1-606c23280d05",
        "authorId": "user-201",
        "content": "Same. Every single time.",
        "createdAt": "2026-02-17T14:07:13.386Z"
      }
    ],
    "location": "Detroit, MI"
  },
  {
    "id": "post-20",
    "authorId": "user-145",
    "content": "Just laid down some country tracks at home. Raw and rough but feeling it.",
    "createdAt": "2026-02-16T12:31:13.386Z",
    "comments": [
      {
        "id": "f9993753-03fc-4c49-8cae-de0a246e13bd",
        "authorId": "user-144",
        "content": "This is exactly what the scene needs.",
        "createdAt": "2026-02-16T13:32:13.386Z"
      },
      {
        "id": "44d9ab37-eca5-43c7-aa80-6c1c7045ee73",
        "authorId": "user-108",
        "content": "Glad someone said it.",
        "createdAt": "2026-02-16T14:03:13.386Z"
      },
      {
        "id": "34a5826a-cf30-444b-bb81-d594ce053dc4",
        "authorId": "user-59",
        "content": "Let me know when you gig next, I will be there.",
        "createdAt": "2026-02-16T14:25:13.386Z"
      },
      {
        "id": "2e2ba9a0-9239-4a18-a05c-21e72e870e35",
        "authorId": "user-64",
        "content": "The struggle is real but so is the music.",
        "createdAt": "2026-02-16T15:43:13.386Z"
      }
    ],
    "location": "Houston, TX"
  },
  {
    "id": "post-27",
    "authorId": "user-205",
    "content": "New recording rig is finally set up. Expect some trap content soon.",
    "createdAt": "2026-02-16T12:31:13.386Z",
    "comments": [
      {
        "id": "862954b9-4e29-4ed5-ad57-58874960dfe0",
        "authorId": "user-63",
        "content": "Been there. It gets better.",
        "createdAt": "2026-02-16T13:28:13.386Z"
      },
      {
        "id": "5ed9a742-9946-4b5a-a1b6-d4d8046de92f",
        "authorId": "user-101",
        "content": "Agreed 100%.",
        "createdAt": "2026-02-16T13:49:13.386Z"
      },
      {
        "id": "3ca8354f-8d06-4eae-8155-e3c72015900d",
        "authorId": "user-16",
        "content": "Let me know if you need a collaborator on that.",
        "createdAt": "2026-02-16T14:19:13.386Z"
      }
    ],
    "location": "San Francisco, CA"
  },
  {
    "id": "post-10",
    "authorId": "user-44",
    "content": "Finished mixing a demo I have been sitting on for months. Might actually release this one.",
    "createdAt": "2026-02-16T12:31:13.385Z",
    "comments": [],
    "location": "Columbus, OH"
  }
];

export const MOCK_BANDS: Band[] = [
  {
    id: 'band-1',
    name: 'The White Clay Creekers',
    location: 'Newark, DE',
    genres: ['Indie Folk', 'Americana'],
    description: 'A collection of Newark locals playing songs about the creek and the valley.',
    imageUrl: 'https://lh3.googleusercontent.com/g2GYRdzdl1j6L1B2AquVhOw7W5SSJFWIIwspdZUdMMNWXRfJ1Vrm_77YH2Bh_oeqQuR0dThzWfy5Xw=w544-h544-p-l90-rj',
    gifUrl: 'https://media1.tenor.com/m/27lt1OraEGwAAAAd/metal-crabcore.gif',
    adminId: 'user-7',
    members: [{ userId: 'user-7', status: 'accepted' }],
    customization: { accentColor: '#27ae60' },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'band-2',
    name: 'Weezer',
    location: 'Newark, DE',
    genres: ['Punk', 'Garage Rock'],
    description: 'Loud, fast, and local. Catch us at the next house show.',
    imageUrl: 'https://m.media-amazon.com/images/I/61uiv0AYlvL._UF1000,1000_QL80_.jpg',
    gifUrl: 'https://media1.tenor.com/m/-Wy_5x1LpDsAAAAC/weezer-undone-the-sweater-song.gif',
    adminId: 'user-8',
    members: [{ userId: 'user-8', status: 'accepted' }],
    customization: { accentColor: '#e74c3c' },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'band-3',
    name: 'Nirvana',
    location: 'Newark, DE',
    genres: ['College Rock', 'Alternative'],
    description: 'Born in the dorms of UD, now playing venues across the tristate area.',
    imageUrl: 'https://townsquare.media/site/366/files/2014/11/Nirvana.jpg',
    gifUrl: 'https://media1.tenor.com/m/CDkx4D2SZAkAAAAd/nirvana-kurt-cobain.gif',
    adminId: 'user-1',
    members: [{ userId: 'user-1', status: 'accepted' }],
    customization: { accentColor: '#2980b9' },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'band-4',
    name: 'Kublai Khan TX',
    location: 'Newark, DE',
    genres: ['Synth-Pop', 'Electronic'],
    description: 'Melodic synthesizers and drum machines from the heart of Delaware.',
    imageUrl: 'https://yt3.googleusercontent.com/bkOtWaixO16DVxGfcRQSIdYtp2lkCVN3tA_-sxYhbPY_0or72jK4Fdlg4aGFmpzaDn9TGtRTCGE=s900-c-k-c0x00ffffff-no-rj',
    gifUrl: 'https://media1.tenor.com/m/WG9Cx9bgkZgAAAAC/kublai-khan-tx.gif',
    adminId: 'user-4',
    members: [{ userId: 'user-4', status: 'accepted' }],
    customization: { accentColor: '#1abc9c' },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'band-5',
    name: 'Iron Hill Sludge',
    location: 'Newark, DE',
    genres: ['Metal', 'Doom'],
    description: 'Heavy riffs inspired by the dark woods of Iron Hill Park.',
    imageUrl: '',
    gifUrl: '',
    adminId: 'user-6',
    members: [{ userId: 'user-6', status: 'accepted' }],
    customization: { accentColor: '#34495e' },
    createdAt: new Date().toISOString(),
  },
  {
    id: 'band-6',
    name: 'The Blue Hen Quartet',
    location: 'Newark, DE',
    genres: ['Jazz', 'Swing'],
    description: 'Sophisticated jazz for your upscale events and late-night lounges.',
    imageUrl: '',
    gifUrl: '',
    adminId: 'user-5',
    members: [{ userId: 'user-5', status: 'accepted' }],
    customization: { accentColor: '#f1c40f' },
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_SHOWS: Show[] = [
  {
    id: 'show-1',
    title: 'Tire Shop',
    date: '2026-03-01',
    city: 'Newark, DE',
    address: null,
    venueInstagram: 'tire_shop_venue',
    ageRestriction: '18+',
    authorId: 'user-1',
    flyerUrl: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/643553935_17928160182215601_5572520148635889892_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=Mzg0MTQ5MzgyNDg0MTgxNzA4Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzNTB4MTY4OC5zZHIuQzMifQ%3D%3D&_nc_ohc=M0lWLwQNDaAQ7kNvwHPMswZ&_nc_oc=Adn-JFXfvFxoJbQYLhIkWF8W9IYECHstmN0E5QyEfD3-xvkZO1di5JvMnvmCiVWA8qQ&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=w7UMxwNgrGI7kUL4AET-HA&_nc_ss=8&oh=00_AfuLe31gnm97ZouFjaruDv5Ay1wQchxVYvnNOWesuJTsMw&oe=69AA00E8',
    comments: [],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'show-2',
    title: 'The Woods',
    date: '2026-02-27',
    city: 'Newark, DE',
    address: null,
    venueInstagram: 'thewoodsnewark',
    ageRestriction: '18+',
    authorId: 'user-3',
    flyerUrl: 'https://scontent-lga3-1.cdninstagram.com/v/t51.82787-15/634831782_17874161043533409_941701912504563359_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzgzNTQ0NTQwNTEyNzY1NDc5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEzODd4MTc0NS5zZHIuQzMifQ%3D%3D&_nc_ohc=2tkrGPM63vcQ7kNvwHI0y2x&_nc_oc=AdmbeZqtenavCuhVkjZj695MQ2FPzQVhn6zPwIfwFYD5kyrCjwxqCNq968VQBwif3d4&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_gid=eZlkdoIErsjF1CbE-d6Dow&_nc_ss=8&oh=00_AfsgRVgbcBEgBaLG8fIPs2fGITsUVTUJ01d4BE23XzMyNg&oe=69A9E69E',
    comments: [],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'show-3',
    title: 'The Woods',
    date: '2026-02-13',
    city: 'Newark, DE',
    address: null,
    venueInstagram: 'thewoodsnewark',
    ageRestriction: '18+',
    authorId: 'user-3',
    flyerUrl: 'https://scontent-lga3-1.cdninstagram.com/v/t51.82787-15/627807052_17873009274533409_4249651812878410671_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=102&ig_cache_key=MzgyOTYyODY2MzQwNzE2MDU0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxMC5zZHIuQzMifQ%3D%3D&_nc_ohc=6n_rGnPPhu8Q7kNvwEwNyKU&_nc_oc=Admh4mIBLdhn4lec-ClAgEbiOGvlhkl5sirAtGh1Frp-Ku5jRLbKfD3NTxFS06JLO34&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_gid=eZlkdoIErsjF1CbE-d6Dow&_nc_ss=8&oh=00_Afu-74qSYKHUkJ2ZaXFypYNvRX7Y39nWdl5Nu6zooordVQ&oe=69A9DC88',
    comments: [],
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'show-4',
    title: 'Tire Shop',
    date: '2026-02-06',
    city: 'Newark, DE',
    address: null,
    venueInstagram: 'tire_shop_venue',
    ageRestriction: '18+',
    authorId: 'user-1',
    flyerUrl: 'https://scontent-lga3-1.cdninstagram.com/v/t51.82787-15/624718248_17925175308215601_1068150435550582376_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=MzgyMzIyNTM3NjEzOTUxNTAxMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxMS5zZHIuQzMifQ%3D%3D&_nc_ohc=Kqe9ds3BtQUQ7kNvwETmF4v&_nc_oc=AdnyqFGlrwc-Ac7uL4_SdCDVLr2AJlCwRdY_RE92DYK-kxRdg2jJUZcTKzTVXqPJ6Uk&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_gid=w7UMxwNgrGI7kUL4AET-HA&_nc_ss=8&oh=00_Afs625rkxKAaEmWxq1zBZbwWRn3owfQQtlPdkl8vBmOIiA&oe=69A9DDC9',
    comments: [],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'show-5',
    title: 'Newark Bike Project',
    date: '2026-02-21',
    city: 'Newark, DE',
    address: '543 Bike St',
    venueInstagram: 'newarkbikeproject',
    ageRestriction: 'All Ages',
    authorId: 'user-1',
    flyerUrl: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/631500736_17959230813049969_8115531884649633899_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzgyODUxNTE3OTQ2MjQ4MDkyNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTg2NC5zZHIuQzMifQ%3D%3D&_nc_ohc=hNPIzdCBtL0Q7kNvwHV3Wu2&_nc_oc=AdmATkZuWBzkggZUfzUFR25ZQPA87oicgra4poHTwNJW8ZIrOQqlhhHVYXDtTtreJrw&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=8OJjMNKfwItaG8Vn_UNO6w&_nc_ss=8&oh=00_AftHy2pbkhtWEQ0EB-1d6g2YB20VTr3-9qMqL9ZWP4xO6g&oe=69A9F5D0',
    comments: [],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'show-6',
    title: 'Newark Bike Project',
    date: '2026-03-06',
    city: 'Newark, DE',
    address: '543 Bike St',
    venueInstagram: 'newarkbikeproject',
    ageRestriction: 'All Ages',
    authorId: 'user-1',
    flyerUrl: 'https://scontent-lga3-2.cdninstagram.com/v/t51.82787-15/641382747_17960851389049969_254261182847388297_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzgzOTE5NzQ0ODExNjIwNjA5NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgzMy5zZHIuQzMifQ%3D%3D&_nc_ohc=7ht2ZkCNOg0Q7kNvwHIV76c&_nc_oc=Adn49sfCpDmXYCbcQRaQrxko6qgN6gQCZx8IKCwsxwaT2kcswSh6mL20QcyyKmNvlnI&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-lga3-2.cdninstagram.com&_nc_gid=8OJjMNKfwItaG8Vn_UNO6w&_nc_ss=8&oh=00_AfvOp-vUij1WVqEFlHbM94XnIREK6RoBsRVWsdUgqoumxg&oe=69A9CDF6',
    comments: [],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'show-7',
    title: 'Tower Records',
    date: '1993-01-11',
    city: 'Newark, DE',
    address: '452 Schism St',
    venueInstagram: 'toolmusic',
    ageRestriction: '21+',
    authorId: 'user-1',
    flyerUrl: 'https://visiblevibrations.com/wp-content/uploads/2016/07/p-9134-01_tool_sb_fgx-scaled.jpg',
    comments: [],
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export const MOCK_VENUE_POSTS: VenuePost[] = [
  {
    id: 'venue-1',
    authorId: 'user-3',
    venueName: 'The Underground',
    city: 'Newark, DE',
    instagram: 'theundergroundde',
    description: 'Basement venue for the best local talent.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-2',
    authorId: 'user-3',
    venueName: 'The Deer Park Tavern',
    city: 'Newark, DE',
    instagram: 'deerparktavern',
    description: 'Historic spot with live music every weekend.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-3',
    authorId: 'user-3',
    venueName: 'Home Grown Café',
    city: 'Newark, DE',
    instagram: 'homegrowncafe',
    description: 'Live music and great food on Main St.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-4',
    authorId: 'user-3',
    venueName: 'Brewed Awakenings',
    city: 'Newark, DE',
    instagram: 'brewedawakeningsde',
    description: 'Cozy coffee shop vibe for acoustic acts.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-5',
    authorId: 'user-3',
    venueName: 'The Grotto',
    city: 'Newark, DE',
    instagram: 'thegrottode',
    description: 'Loud music and late-night pizza.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-6',
    authorId: 'user-3',
    venueName: 'Rainbow Records',
    city: 'Newark, DE',
    instagram: 'rainbow_records_de',
    description: 'Record store hosting intimate live sessions.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-7',
    authorId: 'user-3',
    venueName: 'Caffé Gelato',
    city: 'Newark, DE',
    instagram: 'caffegelato',
    description: 'Fine dining with a side of jazz.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-8',
    authorId: 'user-3',
    venueName: 'Iron Hill Brewery',
    city: 'Newark, DE',
    instagram: 'ironhillbrewery',
    description: 'Great beers and live bands.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'venue-9',
    authorId: 'user-3',
    venueName: 'The Little Goat Coffee Roasting',
    city: 'Newark, DE',
    instagram: 'littlegoatcoffee',
    description: 'Art and music in a relaxed atmosphere.',
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_PHOTOGRAPHER_POSTS: PhotographerPost[] = [
  {
    id: 'photo-1',
    authorId: 'user-2',
    images: [],
    description: 'Concert photographer focused on Newark and Wilmington scenes.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-2',
    authorId: 'user-2',
    images: [],
    description: 'Action shots for punk and metal bands.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-3',
    authorId: 'user-2',
    images: [],
    description: 'Film photography for a vintage indie aesthetic.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-4',
    authorId: 'user-2',
    images: [],
    description: 'Videographer for music videos and live sessions.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-5',
    authorId: 'user-2',
    images: [],
    description: 'Behind the scenes and studio photography.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-6',
    authorId: 'user-2',
    images: [],
    description: 'Live performance and event coverage.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-7',
    authorId: 'user-2',
    images: [],
    description: 'High-energy concert shots for social media.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-8',
    authorId: 'user-2',
    images: [],
    description: 'Documentary style band photography.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'photo-9',
    authorId: 'user-2',
    images: [],
    description: 'Professional press shots and portraits.',
    lookingForBands: true,
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_ARTIST_POSTS: ArtistPost[] = [
  {
    id: 'artist-1',
    authorId: 'user-1',
    mediums: ['Digital Art', 'Poster Design'],
    description: 'Creating vibrant gig posters for the Newark music scene.',
    instagram: 'bluehengraphics',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-2',
    authorId: 'user-2',
    mediums: ['Illustration', 'Merch Design'],
    description: 'Custom t-shirt and merch designs for local bands.',
    instagram: 'delawaredesigns',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-3',
    authorId: 'user-3',
    mediums: ['Street Art', 'Painting'],
    description: 'Bringing color to the walls of Main Street.',
    instagram: 'mainstmuralist',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-4',
    authorId: 'user-4',
    mediums: ['Collage', 'Digital Art'],
    description: 'Album artwork inspired by old sci-fi novels.',
    instagram: 'paperbackcovers',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-5',
    authorId: 'user-5',
    mediums: ['Ink Drawing', 'Printmaking'],
    description: 'Hand-drawn illustrations for posters and zines.',
    instagram: 'newarkink',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-6',
    authorId: 'user-6',
    mediums: ['Digital Art', '3D Modeling'],
    description: 'Futuristic visuals for electronic and synth-pop acts.',
    instagram: 'pixelpunch',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-7',
    authorId: 'user-7',
    mediums: ['Graphic Design', 'Branding'],
    description: 'Helping bands build their visual identity.',
    instagram: 'vinylvibes',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'artist-8',
    authorId: 'user-8',
    mediums: ['Abstract Painting', 'Mixed Media'],
    description: 'Expressive artwork for experimental and noise projects.',
    instagram: 'abstractnewark',
    createdAt: new Date().toISOString(),
  },
];