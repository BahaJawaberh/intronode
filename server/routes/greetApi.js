
import express from "express"





//Create in Databases

app.post("/greet/:user/:msg?", function (req, res) {
    const msg = req.body;
    msg.id = Date.now();
    msgs.push(msg);
    res.send({ msg: "your msg has been saved" });
  });
  
  // Retreive
  app.get("/greet/:user/", function (req, res) {
    res.send(msgs);
  });
  
  // Delete
  app.delete("/greet/:user/:id", function (req, res) {
    const { id } = req.params;
    console.log(id);
    const index = msgs.findIndex((m) => m.id == id);
    console.log(index);
    const [msg] = msgs.splice(index, 1);
    console.log(msg);
    res.send({ msg: "msg with id: " + msg.id + "  has been deleted" });
  });
  
  // Update 
  app.put("/greet/:user/",auth, function (req ,res){
    const{ id, newMsg } = req.body;
    const msg =msgs.find((m) => m.id == id);
    if (msg) {
      msg.msg = newMsg;
      res.send({ msg: "done"});
    }
  });