const ThemeController = require('../controllers/theme')
const router = require('koa-router')()


router.get('/',(ctx)=>{
    ctx.body="welcome"
});

router.get('/theme',ThemeController.allTheme);

module.exports = router