const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

exports.send = async (req, res) => {
  try {
    // Extract data from the request body
    const {message} = req.body;
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    res.send(completion.data.choices[0].message.content);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error generating message");
  }
};
