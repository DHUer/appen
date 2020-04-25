
var dictMap = new Map();


module.exports.search_word = function (word) {
    return new Promise((resolve) => {

        let tmp = word.split(' ');
        let target = tmp[tmp.length - 1];
        //查询单词, 如果最后一个单词是一个完整的单词说明应该推算下一个可能的单词
        // let sentenceReg = new RegExp(target);
        // if(dictMap.has(target)) {
            // dictMap.forEach((value, key) => {
                // // 通过正则表达式找到出现频率最高的句子中的下一个单词
                // if(sentenceReg.test(target)) {
                    // let tmp = key.split(' ');
                    // if(tmp.length - 1 > tmp.indexOf(target)) {
                        
                    // }
                // }
            // })
        // }
        //补全单词, 如果最后一个单词不是一个完整的单词说明应该补全单词
        if(target == "") resolve("");
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
    console.log(word)
    word.forEach((ele) => {
        dictMap.set(ele, (dictMap.get(ele) + 1) || 1);
        console.log(dictMap.get(ele));
    })
    dictMap.set(word, (dictMap.get(word) + 1) || 1);
}