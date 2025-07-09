const express = require('express');
const User = require('./models/user.model')
const jwt = require('jsonwebtoken');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000
const MONGO = process.env.MONGODB;