const express = require("express");
const router = express.Router();
const members = require("../Memberinos");
const uuid = require("uuid");


// get all members
router.get("/", (req, res) => {
    res.json(members)
});

// get single member
router.get("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else {
        res.status(400).json({msg: `No member with the id with the id of ${req.params.id}`});
    }
    
});

// create member

router.post("/", (req, res) => {
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: "ative"
    }

    if(!newMember.name || !newMember.email) {
        res.status(400).json({ msg: "please include a name an email" });
    }

    else {
        members.push(newMember);
    res.json(members);
    }

});

// update member

router.put("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;

                res.json({msg: `member updated`, member});
            }
        });
    }
    else {
        res.status(400).json({msg: `No member with the id with the id of ${req.params.id}`});
    }
    
});

// delete member
router.delete("/:id", (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if(found) {
        res.json({ msg: "member deleted" , members: members.filter(member => member.id !== parseInt(req.params.id))});
    }
    else {
        res.status(400).json({msg: `No member with the id with the id of ${req.params.id}`});
    }
    
});

module.exports = router;