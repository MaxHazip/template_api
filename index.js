const express = require('express')
const app = express()
const port = 3000

// const { creation } = "require"
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kkwuqmvyweilqfythrbh.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})