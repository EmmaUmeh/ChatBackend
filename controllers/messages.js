const Message = require('../model/Message');

// Controller logic for handling messages
const messageController = {
  // Create a new message
  createMessage: async (req, res) => {
    try {
      const { text, userId } = req.body;
      console.log("R===", { text, userId })
      const message = await Message.create({ text, userId });
      
      return res.status(201).json(message);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create message' });
    }
  },

  // Get all messages
  getAllMessages: async (req, res) => {
    try {
      const messages = await Message.findAll();
      return res.status(200).json(messages);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch messages' });
    }
  },

  // Delete a message by ID
  deleteMessage: async (req, res) => {
    try {
      const { id } = req.params;
      const message = await Message.findByPk(id);
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      await message.destroy();
      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete message' });
    }
  },
};

module.exports = messageController;
