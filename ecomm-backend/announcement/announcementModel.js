//imports all announcements from different files/ Databases
const promo = require("../data/promoAnnouncement");
const sales = require("../data/salesAnnouncement");

module.exports = {
  announcement: async () => {
    let dynamicAnnouncement = promo; //change DB here

    try {
      return dynamicAnnouncement;
    } catch (error) {
      console.log("Error in retrieving");
    }
  },
};
