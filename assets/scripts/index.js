'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const ui = require('./auth/ui.js') // may not need

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const blogEvents = require('../scripts/auth/events.js')

$(() => {
  $('#log-out').hide()
  $('#blog-history').hide()
  $('#submit-blog').hide()
  $('#new-blog-title').hide()
  $('#new-blog-content').hide()
  $('#change-password').hide()
  $('#sign-up').on('submit', blogEvents.onSignUp)
  $('#sign-in').on('submit', blogEvents.onSignIn)
  $('#change-password').on('submit', blogEvents.onChangePassword)
  $('#log-out').on('click', blogEvents.onLogOut)
  $('#submit-blog').on('click', blogEvents.onSubmitBlog)
  $('#blog-history').on('click', blogEvents.onBlogHistory)
})

$(document).on('click', '.btnDeleteBlog', blogEvents.onBlogDelete)
// update button
$(document).on('click', '#blogUpdateButton', blogEvents.onBlogEdit)
// edit button
$(document).on('show.bs.modal', (e) => {
  let blogId = e.relatedTarget.dataset.id
  console.log(blogId)
  $('.btnUpdateBlog').attr('data-id', `${blogId}`)
})
