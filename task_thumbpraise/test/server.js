const request = require('supertest');
const app = require('../app.js');

describe('测试路由',()=>{
    it('点赞',(done)=>{
        request(app.listen())
            .get('/index/update')
            .expect(200)
            .end((err,res)=>{
                if(res.data == 1) {
                    return done(err);
                }
                done();
            });
    });
});
