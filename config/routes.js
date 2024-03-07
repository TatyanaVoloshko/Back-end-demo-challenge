const express = require('express')
const routes = express.Router()
const articleFun = require('../controller/postController')

routes.get('/', articleFun.getHomePage)
routes.get('/addNew', articleFun.getAddNew)

routes.post('/add-new', articleFun.createArticle)

routes.get("/fullArticle/:id", articleFun.getFullArticle)

routes.post("/delete-article/:id", articleFun.deleteArticle)

routes.get("/update-article/:id", articleFun.getUpdateArticle);
routes.post("/updateArticle/:id", articleFun.editArticle);




module.exports = routes