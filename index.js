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
app.post('/students', async (req, res) => {
  const { error } = await supabase
  .from('students')
  .insert({ "id": 4, "full-name": 'Овечкин Максим Андреевич', "group": "23/9-1", "birthday": "2007-04-05", "phone-number": "+7(654)324-43-23", "gender" : "М"})

  res.json("Студент добавлен!")
})
app.delete('/students/:id', async (req, res) => {
  const response = await supabase
  .from('students')
  .delete()
  .eq('id', req.params.id)

  res.json("Студент с id= " + req.params.id + " удален!")

})
app.put('/students', async (req, res) => {
  const response = await supabase
  .from('students')
  .update({ "full-name": "Газманов Рамазан Олегович" })
  .eq('id', req.params.id)

  res.send(`full-name студента с id ${req.params.id} изменен`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})