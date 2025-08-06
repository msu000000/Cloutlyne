import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { topic } = req.body
  const prompt = `Create a short viral social media hook about: ${topic}`

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }]
    })
    const hook = completion.choices[0].message.content.trim()
    res.status(200).json({ hook })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
