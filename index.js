import { config } from "dotenv";
import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
config();
const chatModel = new ChatOpenAI(process.env.OPENAI_API_KEY);

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a world class technical documentation writer."],
    ["user", "{input}"],
]);

const outputParser = new StringOutputParser();
const llmChain = prompt.pipe(chatModel).pipe(outputParser);

(async () =>{
    try{
        const result = await llmChain.invoke({
            input: "What is LangSmith?",            
        })
        console.log(result);
    }catch(error){
        console.error("Error", error)
    }
})();


 
  