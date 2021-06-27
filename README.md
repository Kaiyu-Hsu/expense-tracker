## 介紹 Introduction
簡單的記帳本，有新增、編輯、刪除、篩選類別的功能

## 功能說明 Functions
- 首頁可呈現全部清單和總支出金額，包括類別icon、名稱、日期、金額
- 可透過下拉式選單篩選各個類別的支出清單，選擇後只會看到此類別的總金額
- 可新增、編輯、刪除一筆支出資料

## 工具 Tools
- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構(version: 4.17.1)
- [Express-Handlebars ](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [npm](https://www.npmjs.com/package/npm) - a JavaScript package manager
- [nodemon](https://www.npmjs.com/package/nodemon) - 可讓網頁及時呈現套件
- [method-override](https://www.npmjs.com/package/method-override) - 優化 HTTP Method的套件
- [mongoose](https://mongoosejs.com/docs/) - 資料庫

## 安裝步驟 Installation Steps
1. 按下此頁面Code按鈕後，複製本專案的URL
2. 打開終端機(terminal)，Clone本專案
`git clone https://github.com/Kaiyu-Hsu/Restaurant-List.git `
3. 進入存放專案的資料夾
`cd restaurant_list `
4. 在終端機(terminal)，安裝npm套件
`npm install npm`
5. 在終端機(terminal)，安裝nodemon套件
`npm install nodemon`
6. 在終端機(terminal)，開啟網頁
`nodemon app.js`
7. 當Terminal出現`APP is working on http://localhost:3000`，表示伺服器已啟動，請用瀏覽器開啟 http://localhost:3000 ，即可開始使用程式
8. 套入種子資料
`npm run seed`  
