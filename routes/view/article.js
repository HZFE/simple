import express from 'express'
import { article } from '../../api'

const router = express.Router()
router
    .get('/', async (req, res) => {
        let data = await article.all()
        res.render('index', {
            title: 'index',
            article: data.article,
            meta: data.meta,
            bodyClass: 'home-template'
        })
    })
    .get('/page', async (req, res) => {
        return res.redirect('/')
    })
    .get('/page/:page', async (req, res) => {
        let page = req.params.page
        if (page === null || page === undefined || page === 1) {
            return res.redirect('/')
        }

        let data = await article.all(null, page)
        console.log(data)
        if (!data.article) {
            return res.redirect('/404')
        }

        res.render('index', {
            title: 'index',
            article: data.article,
            meta: data.meta,
            bodyClass: 'article-template'
        })

    })
    .get('/:slug', async (req, res) => {
        let data = await article.oneSlug(req.params.slug)
        
        res.render('article', {
            title: 'article',
            article: data.article,
            meta: data.meta,
            bodyClass: 'article-template'
        })
    })

export default router