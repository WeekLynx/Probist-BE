'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

const Interview = require('./models/inter.js');

async function seed() {
  await Interview.create({
    intervieweeName: 'test_user1',
    topic: 'playgrounds',
    goal: 'is it fun?',
    tone: 'curious',
  });


  await Interview.create({
    intervieweeName: 'test_user2',
    topic: 'pools',
    goal: 'larger than the ocean',
    tone: 'agressive',
  });


  await Interview.create({
    intervieweeName: 'test_user2',
    topic: 'birds',
    goal: 'are not real',
    tone: 'neutral',
  });

  mongoose.disconnect();
}

seed();
