const Folder = require("../../models/folder");

// Create New Folder
const createFolder = async (req, res) => {
  try {
    const { name, parent, user, path } = req.body;
    if (!name) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newFolder = new Folder({
      name,
      parent,
      user,
      path,
    });
    const savedFolder = await newFolder.save();
    res.status(200).json({ data: savedFolder });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get All Folders
const getAllFolders = async (req, res) => {
  try {
    const folders = await Folder.find();
    res.status(200).json({ data: folders });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get Folder Email
const getFolderEmail = async (req, res) => {
  console.log(req.params);
  try {
    const { email, parent } = req.params;
    const folder = await Folder.find({ user: email, parent });
    res.status(200).json({ data: folder });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get folder by id
const getFolderById = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await Folder.findById(id);
    res.status(200).json({ data: folder });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update folder
const updateFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, parent, user, path } = req.body;
    const folder = await Folder.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ data: folder });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete folder
const deleteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const folder = await Folder.findByIdAndDelete(id);
    res.status(200).json({ data: folder });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  createFolder,
  getAllFolders,
  getFolderEmail,
  getFolderById,
  updateFolder,
  deleteFolder,
};
