const openai = require("../configs/openai");

module.exports = {
    get: async (req, res) => {
        const prompts = req.body.prompt;

        const formattedPrompt = prompts
            .split("\n")
            .map((prompt, index) => {
                return `${index + 1}: ${prompt}`;
            })
            .join("\n");

        const text = `Classify the sentiment in these tweets: \n${formattedPrompt} \nSentiment:`;

        try {
            const completion = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: text,
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.5,
                presence_penalty: 0.0,
            });

            const result = completion.data?.choices[0].text?.split("\n");

            result.shift();

            const finalResult = result.map((data) => data.split(" ")[1]);

            return res.json({ data: finalResult });
        } catch (error) {
            console.log(error);
            return res.json({ error: error });
        }
    },
};
