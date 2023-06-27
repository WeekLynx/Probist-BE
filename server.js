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

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3004;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

async function runOpenAI() {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello world" }],
  });

  console.log(chat_completion);
}

app.use(express.json());


// Define your endpoint handlers
app.post('/interviews', createInterview);

async function createInterview(request, response, next) {
  try {
    let createdInterview = await Interview.create(request.body);
    response.status(200).send(createdInterview);
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/', (request, response)=>{
  response.status(200).send('Test!');
});

app.get('*', (request, response) => {
  response.status(404).send('Sorry, page not found');
});

app.use((error, request, response, next) => {
  console.log(error.message);
  response.status(500).send(error.message);
});
