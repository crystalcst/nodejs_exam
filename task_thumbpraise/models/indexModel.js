const rq = require('request-promise');

class indexModel {
    constructor(ctx) {
        this.ctx = ctx;
    }
    updateNum() {
        const options = {
            method:'GET',
            uri:"http://localhost:8080/add.php"
        }
        return new Promise((resolve,reject) => {
            rq(options).then(function(result) {
                // console.log(result);
                const info = JSON.parse(result);
                if(info) {
                    resolve({data:info});
                }else {
                    reject({data:'error'});
                }
            });
        });
    }
}

module.exports = indexModel;
