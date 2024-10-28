// Import necessary packages
import OpenAI from "openai";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const openAIClient = new OpenAI({
});

// Function to transcribe audio
async function transcribeAudio(filePath) {
    try {
        const audioFile = fs.createReadStream(filePath); // Read the audio file

        const transcription = await openAIClient.audio.transcriptions.create({
            file: audioFile,
            model: "whisper-1", // Whisper model name
            response_format: "text", // Output format
        });

        console.log("Transcription:", transcription);
        createTodoList(transcription);
    } catch (error) {
        console.error("Error transcribing audio:", error);
    }
}

async function createTodoList(text) {
    try {
        const response = await openAIClient.chat.completions.create({
            model: "gpt-4",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful assistant that summarizes text and organizes it into a to-do list."
                },
                {
                    role: "user",
                    content: `Please summarize the following text into a concise "to-do list" in JSON format with the only the name of the task:\n\n${text}`
                }
            ]
        });

        // Extract the to-do list from the response
        const todoList = response.choices[0].message.content;
        console.log("------------------------------------------\n");
        console.log(todoList);
        // Save the to-do list to a JSON file
        fs.writeFileSync("todo_list.json", todoList);

        console.log("To-Do list saved to todo_list.json");
    } catch (error) {
        console.error("Error creating to-do list:", error);
    }
}

// Example usage
transcribeAudio("audio.ogg");

