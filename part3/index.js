const express = require("express");
const app = express();
app.use(express.json());

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];
-
app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  response.send(
    `
        <p>Phonebook has info for ${persons.length} people</p>
        <p>${new Date()}</p>
    `
  );
});

app.get('/api/persons/:id',(req,res) => {
    const id = req.params.id;
    const person = persons.find(person => person.id===id);
    if(person){
        res.json(person);
    }else{
        res.status(404).end();
    }
})

app.delete('/api/persons/:id',(req,res) => {
    const id = req.params.id;
    persons = persons.filter(person => person.id!==id);
    res.status(204).end();
})

const bigRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1000000);
    return new String(randomNumber);
}
app.post('/api/persons',(req,res) => {
    const body = req.body;
    const name = body.name;
    const number = body.number;
    if(!number || !name){
        return res.status(404).json({"error":"body missing"});
    }

    if(persons.find(person => person.name===name)){
        return res.status(404).json({ error: 'name must be unique' });
    }
    const person = {
        id : bigRandomNumber(),
        name: body.name,
        number: body.number 
    }
    persons = persons.concat(person);
    console.log(person);
    res.json(person);
})
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
