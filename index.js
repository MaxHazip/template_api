const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://cloxomsbfwihntfvlepw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsb3hvbXNiZndpaG50ZnZsZXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NzgwMDIsImV4cCI6MjA2MDM1NDAwMn0.pKdrP2ldYNJsU4zHPJYNRPW0zLc2rJQCrf0eTd-IdFc')

const express = require('express')
const app = express()
const port = 3000


app.get('/students', async (req, res) => {
  const { data, error } = await supabase
  .from('students')
  .select()

  res.json(data)
})
app.post('/students', (req, res) => {
  res.send('Добавление студентов')
})
app.delete('/students', (req, res) => {
  res.send('Удаление студентов')
})
app.put('/students', (req, res) => {
  res.send('Изменение студентов')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})