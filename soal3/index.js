const data = require("./data.json");
// 1.	Find items in Meeting Room.
const itemInMeetRoom = data.filter(
  (item) => item.placement.name.toLowerCase() === "Meeting Room".toLowerCase()
);
console.log(itemInMeetRoom);

// 2.	Find all electronic devices.
const itemElectronis = data.filter(
  (item) => item.type.toLowerCase() === "electronic".toLowerCase()
);
console.log(itemElectronis);

// 3.	Find all furnitures.
const itemFurnitures = data.filter(
  (item) => item.type.toLowerCase() === "furniture".toLowerCase()
);
console.log(itemFurnitures);

// 4.	Find all items was purchased at 16 Januari 2020.
const itemBasedDate = data.filter(
  (item) =>
    new Date(item.purchased_at).toLocaleDateString() ==
    new Date("2020-1-16").toLocaleDateString()
);
console.log(itemBasedDate);

// 5.	Find all items with brown color.
const itemBasedTags = data.filter((item) =>
  item.tags.some((tag) => tag.toLowerCase().includes("brown"))
);
console.log(itemBasedTags);
