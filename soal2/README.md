### Soal JSON Manipulation

data json berasal dari
`https://gist.github.com/dhamanutd/6993984928506eea49908c2e3fcbc628`

Run `node index`

##### 1. Find users who doesn't have any phone numbers.

Jawaban :

```bash
[
  {
    id: 201,
    username: "norisa",
    profile: { full_name: "Noor Annisa", birthday: "1986-08-14", phones: [] },
    "articles:": [[Object], [Object], [Object]],
  },
  {
    id: 201,
    username: "icha",
    profile: {
      full_name: "Annisa Rachmawaty",
      birthday: "1987-12-30",
      phones: [],
    },
    "articles:": [[Object], [Object], [Object]],
  },
]
```

##### 2. Find users who have articles.

Jawaban :

```bash
[
  {
    id: 323,
    username: "rinood30",
    profile: {
      full_name: "Shabrina Fauzan",
      birthday: "1988-10-30",
      phones: [Array],
    },
    "articles:": [[Object], [Object]],
  },
  {
    id: 201,
    username: "norisa",
    profile: { full_name: "Noor Annisa", birthday: "1986-08-14", phones: [] },
    "articles:": [[Object], [Object], [Object]],
  },
  {
    id: 201,
    username: "icha",
    profile: {
      full_name: "Annisa Rachmawaty",
      birthday: "1987-12-30",
      phones: [],
    },
    "articles:": [[Object], [Object], [Object]],
  },
]
```

##### 3. Find users who have "annis" on their name.

Jawaban :

```bash
[
  {
    id: 201,
    username: "norisa",
    profile: { full_name: "Noor Annisa", birthday: "1986-08-14", phones: [] },
    "articles:": [[Object], [Object], [Object]],
  },
  {
    id: 201,
    username: "icha",
    profile: {
      full_name: "Annisa Rachmawaty",
      birthday: "1987-12-30",
      phones: [],
    },
    "articles:": [[Object], [Object], [Object]],
  },
]
```

##### 4. Find users who have articles on year 2020.

Jawaban :

```javascript
[]; //berupa array kosong, karena tidak ada user yang mempublish artikel pada 2020
```

##### 5. Find users who are born on 1986.

Jawaban :

```bash
[
  {
    id: 201,
    username: "norisa",
    profile: { full_name: "Noor Annisa", birthday: "1986-08-14", phones: [] },
    "articles:": [[Object], [Object], [Object]],
  },
  {
    id: 42,
    username: "karina",
    profile: {
      full_name: "Karina Triandini",
      birthday: "1986-04-14",
      phones: [Array],
    },
    "articles:": [],
  },
]
```

##### 6. Find articles that contain "tips" on the title.

Jawaban :

```bash
[
  {
    id: 3,
    title: 'Tips Berbagi Makanan',
    published_at: '2019-01-03T16:00:00'
  },
  {
    id: 39,
    title: 'Tips Berbelanja Bulan Tua',
    published_at: '2019-04-06T07:00:00'
  }
]
```

##### 7. Find articles published before August 2019.

Jawaban :

```bash
[
  {
    id: 3,
    title: 'Tips Berbagi Makanan',
    published_at: '2019-01-03T16:00:00'
  },
  {
    id: 7,
    title: 'Cara Membakar Ikan',
    published_at: '2019-01-07T14:00:00'
  },
  {
    id: 39,
    title: 'Tips Berbelanja Bulan Tua',
    published_at: '2019-04-06T07:00:00'
  },
  {
    id: 43,
    title: 'Cara Memilih Permainan di Steam',
    published_at: '2019-06-11T05:00:00'
  }
]
```
