'use strict';

const express = require('express');
const router = express.Router();
const auth = require('../auth/middleware');

/** this is a route to get books
 * @route GET /books
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 - request token
 */
router.get('/books', auth, handleGetAll);

/** this is a route to get books by id
 * @route GET /books/:id
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 - request token
 */
router.get('/books/:id', auth,  handleGetOne);

// Route Handlers


function handleGetAll(req, res, next) {
  let books = {
    count: 3,
    results: [
      { title:'Moby Dick' },
      { title:'Little Women' },
      { title: 'Eloquent Javascript' },
    ],
  };
  res.status(200).json(books);
}

/** this function gets one book object
 * @function handleGetOne
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {object} 200 - request token
 */
function handleGetOne(req, res, next) {
  let book = {
    title:'Moby Dick',
  };
  res.status(200).json(book);
}

module.exports = router;
