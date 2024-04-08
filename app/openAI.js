'use server'

import OpenAI from "openai";

const openai = new OpenAI({apiKey: process.env.KEY});

export default async function requestAI(text) {
  console.log("Requesting AI");
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: "DO NOT CHANGE OR EDIT THE FOLLOWING ARTICLE! DO NOT RETURN A BLOCK USING ```, INSTEAD RETURN THE BARE MARKDOWN WRAPPED WITHOUT ANYTHING. (when no link is present, do not use markdowns ability to link, instead, leave it as regular text. Remove/ don't incorporate ARTICLE title if found at the very start). Return a markdown file where headers and other markdown features should be placed: " + text }],
      model: "gpt-3.5-turbo",
    });
    console.log("AI response:", completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error("Error requesting AI:", error);
    throw error;
  }
}