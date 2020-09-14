dataSetVersion = "2020-09-14"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group and Units",
    key: "groups",
    tooltip: "Check this to restrict to certain groups.",
    checked: true,
    sub: [
      { name: "1st generation", key: "1gen" },
      { name: "2nd generation", key: "2gen" },
      { name: "3rd generation", key: "3gen" },
      { name: "1st gen graduates", key: "1grad", checked: false },
      { name: "Transferred to Kanji Keyakizaka46", key: "trans", checked: false },
      { name: "Hanachanzu", key: "hana", checked: false },
      { name: "Lima Cantik", key: "lima", checked: false }
    ]
  },
  {
		name: "Filter by Singles",
		key: "single",
		tooltip: "Select this to restrict to sort Singles.",
		checked: false,
		sub:
		[
      { name: "Doremisorashido (Special Edition)", key: "1sing" },
      { name: "Konna ni Suki ni Natchatte Ii no (Special Edition)", key: "2sing" },
      { name: "Kyun (Special Edition)", key: "3sing" },
      { name: "Sonnakotonaiyo (Special Edition)", key: "4sing" }
		]
  },
  {
		name: "Filter by Single (embed BETA)",
		key: "sembed",
		tooltip: "Select this to restric to sort Singles with song samples.",
		checked: false,
		sub:
		[
			{ name: "Doremisorashido (Special Edition)", key: "1sembeds" },
      { name: "Konna ni Suki ni Natchatte Ii no (Special Edition)", key: "2sembeds" },
      { name: "Kyun (Special Edition)", key: "3sembeds" },
      { name: "Sonnakotonaiyo (Special Edition)", key: "4sembeds" }
		]
	}
  /*
  { 
    name: "Filter by Single (embed BETA)",
    key: "sembed",
    tooltip: "Select this to restric to sort Singles with song samples.",
    checked: false,
    sub:
    [
        { name: "1st - 25th Single", key: "sembeds" }
    ]
  }
  */
];

dataSet[dataSetVersion].characterData = [
  //gen1
  {
    name: "Ushio Sarina",
    img: "ppV1M7I.jpg",
    opts: {
      groups: ["1gen","lima"],
    },
  },
  {
    name: "Yuka Kageyama",
    img: "Rxk84ub.jpg",
    opts: {
      groups: ["1gen"],
    },
  },
  {
    name: "Shiho Kato",
    img: "NO8eWjz.jpg",
    opts: {
      groups: ["1gen","lima"]
    },
  },
  {
    name: "Kyoko Saito",
    img: "GHQg6Vx.jpg",
    opts: {
      groups: ["1gen","lima"]
    },
  },
  {
    name: "Kumi Sasaki",
    img: "H64RxHa.jpg",
    opts: {
      groups: ["1gen","lima"]
    },
  },
  {
    name: "Mirei Sasaki",
    img: "WImQ5g9.jpg",
    opts: {
      groups: ["1gen"]
    },
  },
  {
    name: "Mana Takase",
    img: "ZfYOdzB.jpg",
    opts: {
      groups: ["1gen"]
    },
  },
  {
    name: "Ayaka Takamoto",
    img: "0rHTRFv.jpg",
    opts: {
      groups: ["1gen","lima"]
    },
  },
  {
    name: "Mei Higashimura",
    img: "i7S0xkk.jpg",
    opts: {
      groups: ["1gen"]
    },
  },

  //gen2
  {
    name: "Akari Nibu",
    img: "ajQ8AA5.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Hiyori Hamagashi",
    img: "Zh672zv.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Kanemura Miku",
    img: "SdtRonm.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Kawata Hina",
    img: "41NkEvs.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Konoka Matsuda",
    img: "d82pQoV.jpg",
    opts: {
      groups: ["2gen","hana"],
    },
  },
  {
    name: "Miho Watanabe",
    img: "9VWuxRI.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Miyata Manamo",
    img: "orgb4CD.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Nao Kosaka",
    img: "nsLKIT5.jpg",
    opts: {
      groups: ["2gen"],
    },
  },
  {
    name: "Tomita Suzuka",
    img: "pWgkbaR.jpg",
    opts: {
      groups: ["2gen","hana"],
    },
  },

  //gen 3
  {
    name: "Haruyo Yamaguchi",
    img: "yzpyq9e.jpg",
    opts: {
      groups: ["3gen"],
    },
  },
  {
    name: "Hinano Kamimura",
    img: "Y6A6eaj.jpg",
    opts: {
      groups: ["3gen"],
    },
  },
  {
    name: "Marii Morimoto",
    img: "oTd8tk7.jpg",
    opts: {
      groups: ["3gen"],
    },
  },
  {
    name: "Mikuni Takahashi",
    img: "TsVHNqm.jpg",
    opts: {
      groups: ["3gen"],
    },
  },

  //gen1 grad
  {
    name: "Iguchi Mao",
    img: "fKMowLd.jpg",
    opts: {
      groups: ["1grad"],
    },
  },
  {
    name: "Kakizaki Memi",
    img: "Oguraj5.jpg",
    opts: {
      groups: ["1grad"],
    },
  },

  //transfer to keyakizaka46
  {
    name: "Neru Nagahama",
    img: "tJPOvI3.jpg",
    opts: {
      groups: ["trans"],
    },
  },

  //single 1
  {
    name: "Doremisolasido",
    img: "ZrTe1l5.jpg",
    opts: {
      single: ["1sing"],
      sembed: ["1sembeds"]
    },
    song: "https://open.spotify.com/embed/track/1j1V3ZWAmMrWKWPWF3VpbB"
  },
  {
    name: "Kitsune",
    img: "ZrTe1l5.jpg",
    opts: {
      single: ["1sing"],
      sembed: ["1sembeds"]
    },
    song: "https://open.spotify.com/embed/track/2OpC5IPCkUAh65Qhwf9qRL"
  },
  {
    name: "My God",
    img: "ZrTe1l5.jpg",
    opts: {
      single: ["1sing"],
      sembed: ["1sembeds"]
    },
    song: "https://open.spotify.com/embed/track/29OvVKGmWsfhNOb16quGTn"
  },
  {
    name: "Cage",
    img: "ZrTe1l5.jpg",
    opts: {
      single: ["1sing"],
      sembed: ["1sembeds"]
    },
    song: "https://open.spotify.com/embed/track/5CDC5q7ZJhgG3CsFH6n5ch"
  },
  {
    name: "Yasashiga Jamaosuru",
    img: "ZrTe1l5.jpg",
    opts: {
      single: ["1sing"],
      sembed: ["1sembeds"]
    },
    song: "https://open.spotify.com/embed/track/0V0pT70SZUgsezPB73fu4S"
  },
  {
    name: "Dash & Rush",
    img: "ZrTe1l5.jpg",
    opts: {
      single: ["1sing"],
      sembed: ["1sembeds"]
    },
    song: "https://open.spotify.com/embed/track/7tu5qeKS0kpBgVDghfXgF9"
  },

  //single 2
  {
    name: "Konna ni Suki ni Natchatte Ii no",
    img: "o8d2peA.jpg",
    opts: {
      single: ["2sing"],
      sembed: ["2sembeds"]
    },
    song: "https://open.spotify.com/embed/track/1pwM6pt4XiEw8R9sYPf3De"
  },
  {
    name: "Honto no Jikan",
    img: "o8d2peA.jpg",
    opts: {
      single: ["2sing"],
      sembed: ["2sembeds"]
    },
    song: "https://open.spotify.com/embed/track/2lbfPVOw6ADwQIOWi2ZQur"
  },
  {
    name: "Masaka Gūzen...",
    img: "o8d2peA.jpg",
    opts: {
      single: ["2sing"],
      sembed: ["2sembeds"]
    },
    song: "https://open.spotify.com/embed/track/0nXUlqFW78AUqjuPPUF5ZI"
  },
  {
    name: "Ichiban Sukida to Minna ni Itte ita Shōsetsu no Taitoru o Omoidasenai",
    img: "o8d2peA.jpg",
    opts: {
      single: ["2sing"],
      sembed: ["2sembeds"]
    },
    song: "https://open.spotify.com/embed/track/77A46cljOv4Hj8gvjrwnNH"
  },
  {
    name: "Mama no Dress",
    img: "o8d2peA.jpg",
    opts: {
      single: ["2sing"],
      sembed: ["2sembeds"]
    },
    song: "https://open.spotify.com/embed/track/5BupH2gdED8E2kAnllxUv8"
  },
  {
    name: "Kawa wa Nagareru",
    img: "o8d2peA.jpg",
    opts: {
      single: ["2sing"],
      sembed: ["2sembeds"]
    },
    song: "https://open.spotify.com/embed/track/5pK4TM8O016kjahgyxb7KO"
  },

  //single 3
  {
    name: "Kyun",
    img: "upztSXR.jpg",
    opts: {
      single: ["3sing"],
      sembed: ["3sembeds"]
    },
    song: "https://open.spotify.com/embed/track/7oQZR3Bq6HMrTdkqcbCJNf"
  },
  {
    name: "Joyful Love",
    img: "upztSXR.jpg",
    opts: {
      single: ["3sing"],
      sembed: ["3sembeds"]
    },
    song: "https://open.spotify.com/embed/track/35pziJC6t8sxpaudu9JJdR"
  },
  {
    name: "Mimini Ochiru Namida",
    img: "upztSXR.jpg",
    opts: {
      single: ["3sing"],
      sembed: ["3sembeds"]
    },
    song: "https://open.spotify.com/embed/track/6GFK3wLjTqPPJkDs6e0G3V"
  },
  {
    name: "Footsteps",
    img: "upztSXR.jpg",
    opts: {
      single: ["3sing"],
      sembed: ["3sembeds"]
    },
    song: "https://open.spotify.com/embed/track/7J6p2fFXsAjxKwxyUMXsvE"
  },
  {
    name: "Tokimekisou",
    img: "upztSXR.jpg",
    opts: {
      single: ["3sing"],
      sembed: ["3sembeds"]
    },
    song: "https://open.spotify.com/embed/track/6xJA4itU75XGbXW8URVHBa"
  },
  {
    name: "Chinmokuga Ai Nara",
    img: "upztSXR.jpg",
    opts: {
      single: ["3sing"],
      sembed: ["3sembeds"]
    },
    song: "https://open.spotify.com/embed/track/3e1VxoXHooNboP5hRrPPBh"
  },

  //single 4
  {
    name: "Sonna Koto Nai yo",
    img: "8zqrFWT.jpg",
    opts: {
      single: ["4sing"],
      sembed: ["4sembeds"]
    },
    song: "https://open.spotify.com/embed/track/2MlTQUQhEPpQgL4AIQraWb"
  },
  {
    name: "Seishun no Uma",
    img: "8zqrFWT.jpg",
    opts: {
      single: ["4sing"],
      sembed: ["4sembeds"]
    },
    song: "https://open.spotify.com/embed/track/5r3fsRsdnkxooFisN813Vf"
  },
  {
    name: "Suki to Iu Koto wa...",
    img: "8zqrFWT.jpg",
    opts: {
      single: ["4sing"],
      sembed: ["4sembeds"]
    },
    song: "https://open.spotify.com/embed/track/0iJw4eK5tBgFiu4sTdtwzi"
  },
  {
    name: "Mado o Akenakute mo",
    img: "8zqrFWT.jpg",
    opts: {
      single: ["4sing"],
      sembed: ["4sembeds"]
    },
    song: "https://open.spotify.com/embed/track/3BFm5KDoy4EJ2n1nQrt59O"
  },
  {
    name: "Naze-",
    img: "8zqrFWT.jpg",
    opts: {
      single: ["4sing"],
      sembed: ["4sembeds"]
    },
    song: "https://open.spotify.com/embed/track/5oaOmQzCTo7ZrVAfoI406N"
  },
  {
    name: "Kimi no Tame Nani ga Dekiru Darō",
    img: "8zqrFWT.jpg",
    opts: {
      single: ["4sing"],
      sembed: ["4sembeds"]
    },
    song: "https://open.spotify.com/embed/track/6KLgF5Hr7UCr92XkAegSBp"
  }
]
