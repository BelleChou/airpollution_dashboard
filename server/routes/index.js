const ThemeController = require('../controllers/theme')
const LinelistController = require('../controllers/linelist')
const CityController= require('../controllers/city')
const DiseaseController = require('../controllers/disease')
const router = require('koa-router')();

router.get('/',(ctx)=>{
    ctx.body="welcome"
});

router.get('/theme',ThemeController.allTheme);

router.get('/linelist', LinelistController.allLine);

router.get('/city',CityController.allCity);

router.get('/disease', DiseaseController.allDisease);

module.exports = router
