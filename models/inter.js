'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const InterviewSchema = new Schema({
  intervieweeName: { type: String, required: true },
  topic: { type: String, required: true },
  goal: { type: String, required: true },
  tone: { type: String, required: true },
  questions: { type: Array },
  user: { type: String },
  email: { type: String }
});

const Interview = mongoose.model('interview', InterviewSchema);
// console.log("book.js - " + Book);

module.exports = Interview;
