require('dotenv').config();
const cohere = require('cohere-ai');
const { StatusCodes } = require("http-status-codes")
const Chat = require('../models/Chat')

const fs = require('fs')

let rawdata = fs.readFileSync('data.json')
let examples = JSON.parse(rawdata)

cohere.init(process.env.COHERE_API);

const createConversation = async (req,res) => {
  req.body.createdBy = req.user.userId

  const check = await Chat.findOne({createdBy: req.body.createdBy})

  if(!check) {
    const initialize = await Chat.create(req.body)
    res.status(StatusCodes.CREATED).json({initialize})
  } else {
    res.status(StatusCodes.OK).json({check})
  }
}

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

  const response = await cohere.generate({ 
    model: 'xlarge', 
    prompt: `${examples.sampleInputs}Input: ${input}\nProblem: ${emotion}\nSeverity: ${severity}\nAdvice:`, 
    max_tokens: 70, 
    temperature: 1, 
    k: 0, 
    p: 1, 
    frequency_penalty: 0, 
    presence_penalty: 0, 
    stop_sequences: ["--"], 
    return_likelihoods: 'NONE' 
  }); 
  const reply = response.body.generations[0].text

  const msg = await Chat.findOneAndUpdate(
    { createdBy: req.user.userId },
    { $push: { conversation: {user: input, cpu: reply} } },
    { new: true }
  )
  
  console.log(msg)

  res.status(StatusCodes.OK).json({ "msg": {"response": reply, "issue": [emotion, severity]} }) 
} 

module.exports = {
  createConversation,
  classify
}
