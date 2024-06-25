const { Router } = require("express");
const { generateNewShortUrl } = require("../controllers/url");
const Url = require("../models/url");

const router = Router()

router.post('/api/shorturl', generateNewShortUrl)

router.get('/api/shorturl/:short_url', async (req, res) => {
  const { params: { short_url } } = req
  const entry = await Url.findOne({ short_url })
  
  if(!entry) return res.status(400).json({ error: 'Invalid url' })
    
  res.status(200).redirect(entry.original_url)
})

module.exports = router

