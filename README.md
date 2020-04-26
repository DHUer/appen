# appen-job task 
全前端Vue项目，未使用后端，词库存放在内存中，每次刷新或者重新打开界面都会删掉词库
## 使用说明

### 补全单词
每次输入单词之后，单机右侧的提交按钮，即可更新词库。之后每次输入相近的单词会从之前提交的词库中找到提交次数最多的词，来做为提示词。如下图所示：
![avatar](src/images/demo.png)

### 补全句子
每次输入完整的单词后，会根据之前提交的句子来提示下一个单词，功能如下图所示:
![avatar](src/images/iShot2020-04-26下午02.12.42.png)
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
