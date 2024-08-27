// // async programming 
// const fs = require('fs');
// fs.readFile('./node.txt', "utf8", (er,data)=>{
// if(er){
// console.log(er)
// }
// console.log(data)
// })

// const http = require('http');
// const server = http.createServer((req, res)=>{
//     res.write('hello world');
//     res.end();
// })

// server.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })

// express programming
const express = require('express')
const app = express();
const PORT = 3000;
app.get('/', (req, res)=>{
    res.send("Hello world");
});

app.get('/about', (req, res)=>{
    res.send('about page')
});


// app.get('/contact /id:', (req, res=>{
//     const id =req.params.id;
//     res.send(id)
// }))

// app.get('/name'/'juna:',(req, res)=>{
//     const name = req.params.juna
//     res.send(`my name is $(name)`)
// })
 const contactList = [
    {
        id: 1,    
     name: 'juna shrestha',
       email: 'juna@gmail.com',
     },

   {
        id:2,
         name:'jane doe',
        email : 'Jane@gmail.com'
     },
    

    {
        id:3,
        name:'Rita',        email : 'Rita@gmail.com'
        
    }
] 
app.get('/contacts', (req, res)=>{
     res.send(contactList)
})

// app.use(express.json());

// // Route to add a new contact
// app.post('/contacts', (req, res) => {
//   const contact = req.body;
//   contactList.

//   // Validate that both name and email fields are provided
//   if (!name || !email) {
//     return res.status(400).json({ error: "Name and email are required." });
//   }

//   // Generate a unique ID for the new contact
//   const newContact = {
//     id: contacts.length + 1,
//     name: "Alice Smith",
//     email:"Alice@gmail.com",
//   };

//   // Add the new contact to the contacts array
//   contacts.push(newContact);

//   // Send back a success message and the newly added contact
//   res.status(201).json(newContact);
// });

app.post('/post-user', (req,res)=>{
    res.status(200).json("post request is send");
})

















app.listen(3000,()=>{
    console.log(    `Server is running on port 3000`)
})

