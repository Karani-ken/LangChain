import { config } from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
config();
const chatModel = new ChatOpenAI(process.env.OPENAI_API_KEY);

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer."],
    ["user", "{input}"],
]);

const chain = prompt.pipe(chatModel);

(async () =>{
    try{
        const result = await chain.invoke({
            input: "What is LangSmith?",
        })
        console.log(result);
    }catch(error){
        console.error("Error", error)
    }
})();


 
  