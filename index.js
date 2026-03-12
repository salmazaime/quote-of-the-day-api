const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Liste de citations (dev + motivantes + funnies)
const quotes = [
  { id: 1, text: "Talk is cheap. Show me the code.", author: "Linus Torvalds", category: "dev" },
  { id: 2, text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler", category: "dev" },
  { id: 3, text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan", category: "dev" },
  { id: 4, text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House", category: "dev" },
  { id: 5, text: "First, solve the problem. Then, write the code.", author: "John Johnson", category: "motivation" },
  { id: 6, text: "Programmer: A machine that turns coffee into code.", author: "Anonymous", category: "fun" },
  { id: 7, text: "When I wrote this code, only God and I understood what I did. Now, God only knows.", author: "Anonymous", category: "fun" },
  { id: 8, text: "It's not a bug — it's an undocumented feature.", author: "Anonymous", category: "fun" },
  { id: 9, text: "The best error message is the one that never shows up.", author: "Thomas Fuchs", category: "dev" },
  { id: 10, text: "Code never lies, comments sometimes do.", author: "Ron Jeffries", category: "dev" },
  { id: 11, text: "new quote added", author: "salma zaime", category: "test" },

];

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/quotes/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json(quotes[randomIndex]);
});

app.get('/quotes/category/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = quotes.filter(q => q.category.toLowerCase() === category);
  
  if (filtered.length === 0) {
    return res.status(404).json({ message: `Aucune citation dans la catégorie "${category}"` });
  }
  
  res.json(filtered);
});

app.post('/quotes', (req, res) => {
  const { text, author, category } = req.body;
  
  if (!text) {
    return res.status(400).json({ message: "Le champ 'text' est obligatoire" });
  }
  
  const newQuote = {
    id: quotes.length + 1,
    text,
    author: author || "Anonyme",
    category: category || "general"
  };
  
  quotes.push(newQuote);
  res.status(201).json(newQuote);
});

app.listen(port, () => {
  console.log(`Quote of the Day API démarrée sur http://localhost:${port}`);
});

