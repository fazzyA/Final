const express = require('express')
const Register = require('../../models/Register')
const router = express.Router()

// router.get('/', async (req, res) => {
//     // get posts from posts
//     try {
//         const posts = await Post.find();
//         console.log(posts);
//         res.status(200).json({ success: true, data: posts });
//       } 
//       catch (e) {
//         res.status(404).json({ success: false, error: e.message });
//       }
//     });
// try {
//     const posts = await Post.find();
//     res.json({
//         success: true,
//         status: 200, //ok
//         data: posts
//     })
// } catch (error) {
//     res.json({
//         success: false,
//         status: 400,
//         error: error
//     })
// }

// })
router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    // let { detail, header } = req.body
    try {
        const register = await Register.create(req.body)
        // detail.pid = register._id
        // const detail = await Detail.create(detail)

        res.json({
            success: true,
            status: 201,
            dbid: register._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error: error.message

        })

    }


})
// router.get('/:id', async (req, res) => {
//     const post = await Post.findById(req.params.id);
//     res.json({
//         success: true,
//         status: 200, //ok
//         data: post
//     })

// })
// router.put('/:id', async (req, res) => {
//     try {
//         const post = await Post.findByIdAndUpdate(req.params.id, { title: req.body.title, description: req.body.des});
//    res.json({
//        success: true,
//        status: 200, //ok
//        msg: 'post is updated successfully'
//    })

//    } catch (error) {
//        console.log(error)
//    }

// })

module.exports = router