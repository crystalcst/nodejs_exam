'use strict';
const indexModel = require('../models/indexModel');

const indexController = {
    index() {
        return async(ctx,next)=> {
            ctx.body = await ctx.render('index.html',{
                title:"大拇指点赞demo"
            })
        }
    },
    update() {
        return async(ctx,next) => {
            const indexM =  new indexModel(ctx);
            ctx.body = await indexM.updateNum();
        }
    }
}

module.exports = indexController;
