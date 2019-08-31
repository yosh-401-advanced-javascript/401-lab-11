'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');


/** This is a route to post a signup
 * @name authRouter
 * @route POST /signup
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 - request token
 */
authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      req.token = user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.cookie('auth', req.token);
      res.send(req.token);
    }).catch(next);
});

/**
 * This is a route to post a sign in
 * @name authRouter
 * @route POST /signin
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 - request token
 */
authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});

module.exports = authRouter;



