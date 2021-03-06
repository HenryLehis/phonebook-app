const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require('fs');
const path = require('path');

const filePath = path.join(path.dirname(require.main.filename), 'data', 'phones.json');

module.exports = class Phone {
    constructor(phone){
        this.description = phone;
    }

    saveTask(){
        fs.readFile(filePath, (error, fileContent) => {
            let phone = [];

            if(!error){
                phones = JSON.parse(fileContent);
            } else {
                console.log(error);
            }

            phones.push(this);
            fs.writeFile(filePath, JSON.stringify(phones), (error) => {
                console.log(error);
            });
        }); 
    }

    static fetchPhones(callBack){
        fs.readFile(filePath, (error, fileContent) => {
            if(error){
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
    }

    static deletePhone(taskDescription){
        fs.readFile(filePath, (error, fileContent) => {
            let phones = [];
            if(!error){
                phones = JSON.parse(fileContent);
            }

            for(let i = 0; i < phones.length; i++) {
                if(phones[i].description === phoneDescription){
                    phones.splice(i, 1);
                    break;
                }
            }
            
            fs.writeFile(filePath, JSON.stringify(phones), (error) => {
                console.log('error from writing');
            });

        });
    }
}

//{"description": "Task One"} - json
//{description: "Task One"} - js object