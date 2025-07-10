import {Router} from "express"
import Model from "../models/usermodels.js"

const router = Router()


//GET all blogs /api/blog
router.get("/", async (req, res) =>{
    try {
        const blogs = await Blog.find()
        res.status(200).json({
            blogs: blogs,
            message: "Blogs found successfully"
        })
    } catch (error) {
        console.status(500).json({
            message: "Error could not retrieve blogs"
        })
        
    }
})

//GET student by ID  /api/blog/:id
router.get("/:id", async (req, res) => {
    
})