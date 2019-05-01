const ThemeController = require('../controllers/theme')
const LinelistController = require('../controllers/linelist')
const router = require('koa-router')();

router.get('/',(ctx)=>{
    ctx.body="welcome"
});

router.get('/theme',ThemeController.allTheme);

router.get('/linelist', LinelistController.allLine);

module.exports = router
