export const users: {
  id: number;
  employee: {
    avatarURL: string;
    first_name: string;
    last_name: string;
    projects: {
      name: string;
      hours: number;
      start_date: string;
      end_date: string;
    }[];
  };
}[] = [
  {
    id: 1,
    employee: {
      avatarURL: "http://dummyimage.com/109x112.png/ff4444/ffffff",
      first_name: "Yalonda",
      last_name: "Filippi",
      projects: [],
    },
  },
  {
    id: 2,
    employee: {
      avatarURL: "http://dummyimage.com/225x167.png/ff4444/ffffff",
      first_name: "Beauregard",
      last_name: "Wimmer",
      projects: [
        {
          name: "Job",
          hours: 6,
          start_date: "2022-06-14T16:30:58Z",
          end_date: "2022-11-21T11:20:31Z",
        },
      ],
    },
  },
  {
    id: 3,
    employee: {
      avatarURL: "http://dummyimage.com/240x101.png/ff4444/ffffff",
      first_name: "Blondie",
      last_name: "Filyaev",
      projects: [
        {
          name: "Veribet",
          hours: 4,
          start_date: "2022-01-24T19:33:36Z",
          end_date: "2022-07-23T00:09:29Z",
        },
      ],
    },
  },
  {
    id: 4,
    employee: {
      avatarURL: "http://dummyimage.com/197x197.png/ff4444/ffffff",
      first_name: "Fanechka",
      last_name: "McAvey",
      projects: [
        {
          name: "Waaran",
          hours: 4,
          start_date: "2022-12-14T00:33:36Z",
          end_date: "2023-03-23T00:09:29Z",
        },
      ],
    },
  },
  {
    id: 5,
    employee: {
      avatarURL: "http://dummyimage.com/100x159.png/cc0000/ffffff",
      first_name: "Abdel",
      last_name: "Leyden",
      projects: [
        {
          name: "Viva",
          hours: 2,
          start_date: "2022-10-16T17:06:41Z",
          end_date: "2023-03-12T08:34:48Z",
        },
        {
          name: "Veribet",
          hours: 4,
          start_date: "2022-02-10T18:28:52Z",
          end_date: "2023-06-23T02:43:23Z",
        },
        {
          name: "Prodder",
          hours: 5,
          start_date: "2022-08-16T00:15:22Z",
          end_date: "2023-06-18T13:08:31Z",
        },
      ],
    },
  },
  {
    id: 6,
    employee: {
      avatarURL: "http://dummyimage.com/210x239.png/ff4444/ffffff",
      first_name: "Dennie",
      last_name: "Scottrell",
      projects: [],
    },
  },
  {
    id: 7,
    employee: {
      avatarURL: "http://dummyimage.com/154x196.png/ff4444/ffffff",
      first_name: "Janette",
      last_name: "Mangeot",
      projects: [
        {
          name: "Ronstring",
          hours: 3,
          start_date: "2022-04-01T16:40:21Z",
          end_date: "2023-02-02T22:56:58Z",
        },
        {
          name: "Jobs",
          hours: 3,
          start_date: "2022-04-04T20:12:29Z",
          end_date: "2023-01-06T10:34:04Z",
        },
        {
          name: "Bitwolf",
          hours: 1,
          start_date: "2021-03-15T13:46:51Z",
          end_date: "2023-02-23T01:46:40Z",
        },
      ],
    },
  },
  {
    id: 8,
    employee: {
      avatarURL: "http://dummyimage.com/228x193.png/cc0000/ffffff",
      first_name: "Kaylee",
      last_name: "Ebbins",
      projects: [
        {
          name: "Fintone",
          hours: 1,
          start_date: "2022-12-03T22:37:33Z",
          end_date: "2023-11-19T10:29:17Z",
        },
        {
          name: "Stronghold",
          hours: 1,
          start_date: "2022-07-22T16:15:49Z",
          end_date: "2023-04-20T19:06:38Z",
        },
        {
          name: "Hatity",
          hours: 6,
          start_date: "2022-01-15T04:12:56Z",
          end_date: "2023-02-06T06:19:06Z",
        },
      ],
    },
  },
  {
    id: 9,
    employee: {
      avatarURL: "http://dummyimage.com/211x114.png/dddddd/000000",
      first_name: "Kailey",
      last_name: "Semered",
      projects: [
        {
          name: "Toughjoyfax",
          hours: 3,
          start_date: "2022-03-22T20:20:44Z",
          end_date: "2023-11-12T01:34:47Z",
        },
      ],
    },
  },
  {
    id: 10,
    employee: {
      avatarURL: "http://dummyimage.com/218x205.png/5fa2dd/ffffff",
      first_name: "Gusta",
      last_name: "Benzies",
      projects: [],
    },
  },
];
