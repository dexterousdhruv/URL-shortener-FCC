const ShortUniqueId = require('short-unique-id');
const shortID = new ShortUniqueId({ length: 6 })
const Url = require('../models/url.js')

const isValidUrl = (url) => {
  return (url.includes('http:') || url.includes('https:'))
}

const generateNewShortUrl = async (req, res) => {
  const { body : { url} } = req
  
  if (isValidUrl(url)) {
    const shortId = shortID.rnd()
    await Url({
      original_url: url,
      short_url: shortId
    }).save()

    return res.status(201).json({
      original_url: url,
      short_url: shortId
    })
  }
  
  return res.status(400).json({ error: 'Invalid url' })
    
}

module.exports = { 
  generateNewShortUrl
}