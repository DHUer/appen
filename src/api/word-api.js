
var dictMap = new Map();


module.exports.search_word = function (word) {
    return new Promise((resolve) => {

        let tmp = word.split(' ');
        let target = tmp[tmp.length - 1];
        if(target == "") resolve("");
        //查询单词, 如果最后一个单词是一个完整的单词说明应该推算下一个可能的单词
        if(dictMap.has(target)) {
            let highFre = 0;
            dictMap.forEach((value, key) => {
                let str = String(key);
                let tmp = str.split(" ");
                console.log(tmp);
                let index = tmp.indexOf(target);
                if(tmp.length > 1&& index < tmp.length - 1 && index >= 0 && value > highFre) {
                    resolve(" " + tmp[index + 1]);
                    return;
                }
            })
            resolve("");
        }
        //补全单词, 如果最后一个单词不是一个完整的单词说明应该补全单词
        let res = "", freq = 0;
        let re = new RegExp('^' + target + '+');
        dictMap.forEach((value, key) => {
            if(re.test(key) && target != key && value > freq ) {
                // flag = value;
                freq = value;
                res = key;
            }
        })
        resolve(res.substr(target.length))
    })
}

module.exports.addFrequency = function (word) {
    word.forEach((ele) => {
        dictMap.set(ele, (dictMap.get(ele) + 1) || 1);
        console.log(dictMap.get(ele));
    })
    //把整个句子放到map里面
    dictMap.set(word.join(" "), (dictMap.get(word) + 1) || 1);
}