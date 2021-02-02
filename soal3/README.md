### Soal JSON Manipulation

data json berasal dari
`https://gist.github.com/dhamanutd/97aa0d2131903ea8c071721032c7b2a3`

Jalankan/run `node index` pada terminal untuk memulai

##### 1. Find items in Meeting Room.

Jawaban :

```bash
[
  {
    inventory_id: 9382,
    name: 'Brown Chair',
    type: 'furniture',
    tags: [ 'chair', 'furniture', 'brown' ],
    purchased_at: 1579190471,
    placement: { room_id: 3, name: 'Meeting Room' }
  },
  {
    inventory_id: 9380,
    name: 'Big Desk',
    type: 'furniture',
    tags: [ 'desk', 'furniture', 'brown' ],
    purchased_at: 1579190642,
    placement: { room_id: 3, name: 'Meeting Room' }
  }
]
```

##### 2. Find all electronic devices.

Jawaban :

```bash
[
  {
    inventory_id: 2932,
    name: 'LG Monitor 50 inch',
    type: 'electronic',
    tags: [ 'monitor' ],
    purchased_at: 1579017842,
    placement: { room_id: 3, name: 'Lavender' }
  },
  {
    inventory_id: 232,
    name: 'Sharp Pendingin Ruangan 2PK',
    type: 'electronic',
    tags: [ 'ac' ],
    purchased_at: 1578931442,
    placement: { room_id: 5, name: 'Dhanapala' }
  }
]
```

##### 3. Find all furnitures.

Jawaban :

```bash
[
  {
    inventory_id: 9382,
    name: 'Brown Chair',
    type: 'furniture',
    tags: [ 'chair', 'furniture', 'brown' ],
    purchased_at: 1579190471,
    placement: { room_id: 3, name: 'Meeting Room' }
  },
  {
    inventory_id: 9380,
    name: 'Big Desk',
    type: 'furniture',
    tags: [ 'desk', 'furniture', 'brown' ],
    purchased_at: 1579190642,
    placement: { room_id: 3, name: 'Meeting Room' }
  }
]
```

##### 4. Find all items was purchased at 16 Januari 2020.

Jawaban :

```bash
[]
```

##### 5. Find all items with brown color.

Jawaban :

```bash
[
  {
    inventory_id: 9382,
    name: 'Brown Chair',
    type: 'furniture',
    tags: [ 'chair', 'furniture', 'brown' ],
    purchased_at: 1579190471,
    placement: { room_id: 3, name: 'Meeting Room' }
  },
  {
    inventory_id: 9380,
    name: 'Big Desk',
    type: 'furniture',
    tags: [ 'desk', 'furniture', 'brown' ],
    purchased_at: 1579190642,
    placement: { room_id: 3, name: 'Meeting Room' }
  }
]
```
