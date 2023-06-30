'use strict';

console.log('Am I... alive?');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const app = express();
const Interview = require('./models/interviews.js');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => console.log(`listening on ${PORT}`));
mongoose.connect(process.env.MONGO_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

app.post('/getInterview', runOpenAI);

async function runOpenAI(request, response, next) {
  console.log(request.body);
  try {
    const aiResponse = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `Provide a list of 10 ${request.body.tone} questions that a journalist would ask ${request.body.intervieweeName} centered around the following topics :${request.body.topics}. The goal of this interview is ${request.body.goal}.`,
      max_tokens: 500,
      temperature: 0.9,
    });
    response.status(200).send(aiResponse.data.choices[0].text);
  } catch (error) {
    next(error);
  }

  // const chat_completion = await openai.createChatCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: [
  //     { role: "user", content: "Hello world" }
  //   ],
  // });

  // console.log(chat_completion);

}

app.post('/interviews', createInterview);

async function createInterview(request, response, next) {
  try {
    const { name, topic, goal, tone, question } = request.body;
    const email = request.user.email;

    let createdInterview = await Interview.create({
      name,
      topic,
      goal,
      tone,
      question,
      email,
    });

    response.status(200).send(createdInterview);
  } catch (error) {
    next(error);
  }
}

app.get('/interviews', getAllInterviews);

async function getAllInterviews(request, response, next) {
  try {
    let interviews = await Interview.find();

    if (interviews.length === 0) {
      response.status(404).send('No Interviews found');
      return;
    }
    response.status(200).send(interviews);
  } catch (error) {
    next(error);
  }
}

app.get('/interviews/:interviewId', getInterviewById);

async function getInterviewById(request, response, next) {
  try {
    let interview = await Interview.findById(request.params.interviewId);

    if (!interview) {
      response.status(404).send('Interview not found!');
      return;
    }

    response.status(200).send(interview);
  } catch (error) {
    next(error);
  }
}

app.put('/interviews/:interviewId', updateInterview);

async function updateInterview(request, response, next) {
  try {
    let interview = await Interview.findByIdAndUpdate(
      request.params.interviewId,
      request.body,
      { new: true }
    );

    if (!interview) {
      response.status(404).send('Interview not found!');
      return;
    }

    response.status(200).send(interview);
  } catch (error) {
    next(error);
  }
}

app.delete('/interviews/:interviewId', deleteInterview);

async function deleteInterview(request, response, next) {
  try {
    let interview = await Interview.findByIdAndDelete(request.params.interviewId);

    if (!interview) {
      response.status(404).send('Interview not found!');
      return;
    }

    response.status(200).send(`Interview with ID ${interview._id} was deleted`);
  } catch (error) {
    next(error);
  }
}


app.get('/', (request, response) => {
  response.status(200).send('Test!');
});

app.get('*', (request, response) => {
  response.status(404).send('Sorry, page not found');
});

app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
