require('dotenv').config();
const cohere = require('cohere-ai');
const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require('../errors')

const fs = require('fs')

let rawdata = fs.readFileSync('data.json')
let examples = JSON.parse(rawdata)

//console.log(examples)

cohere.init(process.env.COHERE_API);

const classify = async (req, res) => {
  const input = req.body.input

  //Evaluate the emotion
  const findEmotion = await cohere.classify({ 
    model: 'large', 
    inputs: [input], 
    examples: examples.exampleProblems
  }); 

  const emotion = findEmotion.body.classifications[0]["prediction"]

  //Evaluate the severity
  const findSeverity = await cohere.classify({ 
    model: 'large', 
    inputs: [input], 
    examples: examples.exampleSeverity
  }); 

  const severity = findSeverity.body.classifications[0]["prediction"]

  console.log(`Prediction: ${emotion}, ${severity}`);

  const response = await cohere.generate({ 
    model: 'xlarge', 
    prompt: `${examples.sampleInputs}Input: ${input}\nProblem: ${emotion}\nSeverity: ${severity}\nAdvice:`, 
    max_tokens: 100, 
    temperature: 0.8, 
    k: 0, 
    p: 1, 
    frequency_penalty: 0, 
    presence_penalty: 0, 
    stop_sequences: ["--"], 
    return_likelihoods: 'NONE' 
  }); 
  const reply = response.body.generations[0].text

  res.status(StatusCodes.OK).json({ "msg": {"response": reply, "issue": [emotion, severity] }}) 

} 

module.exports = {
  classify
}
