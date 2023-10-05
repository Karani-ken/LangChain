import {config} from "dotenv"

config();
import {Configuration, OpenAI } from "openai";

const configuration = new Configuration({
    openAIApiKey:process.env.API_KEY
})

const openai = new OpenAI(configuration);
  
async function chat(input){
    const messages = [{role:"user", content: input}];

    const response = await openai.createChatCompletion({
        model
    })
}

 
  