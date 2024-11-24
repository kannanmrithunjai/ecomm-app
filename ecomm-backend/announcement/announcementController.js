const { announcement } = require("./announcementModel");

module.exports = {
  announcement: async (req, res) => {
    try {
      const announcements = await announcement();
      res.status(200).json(announcements);
    } catch (error) {
      res.status(500).json({ message: "Error in getting Announcement" });
    }
  },
};
