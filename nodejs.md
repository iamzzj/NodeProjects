# 常见步骤

1. npm init -y
2. npm install nodemon -D
3. npm install express -S
4. npm start



# 配置nodemon

1. npm install nodemon -D

2. 修改package.json 中的启动命令

3. 增加 nodemon.json 配置 指定 特殊的watch的文件

4. DEBUG=*

   ---

# nrm（npm包源的管理）

1. npm install nrm -g

2. nrm current

3. nrm use npm/taobao

   ---

# nvm（nodejs版本管理）

---

   



# nodejs

1.  nvm 管理nodejs版本

2. nrm npm源的问题

3. nodemon 监听文件变化，自动重启服务

   ---

      

# 	Web应用和Express介绍

* 什么是web应用

* Express在web应用中的应用


  ## web应用

  前端 
  ajxa，ws --->服务器（web应用）-->缓存/数据库/



  express： node中的一种 web框架

  接受 req，处理res

  

---

# Route路由

## web服务 如何处理一个请求

* url-->网络-->dns解析-->目标服务器

  ​	 如何响应这个请求-->路由//规则

* 请求的方法区别
  * get
  * post

## 通过uri --》路径

www.baidu.com/a/b/c.html

1. 需要定义一个 api/路由 需要满足 客户端 无论使用什么请求方式（get/post/delete.put）都可以得到响应

   *  app.all  //全响应

   ​         app.all('/demo', (req,res)=>{})

2. 无论客户端使用任何uri，我们额服务都可以响应 --> 日志

   * app.use --> 使用中间件

3. 如何进行路由拆分

   meber

   sku

   order

   

   * express.Router

---

# 中间件的介绍和使用

* 什么是express中间件
* 内置中间件和第三方中间件介绍
* 自定义中间件



1. app 级别的使用
   * 注册的时候，一定是在最顶级的
   * app.use 加载进来
2. router 级别
3. 异常处理 --》 app级别

---

# 异常处理

* 异常捕获

* Express内置异常处理

* 自定义异常处理

  

# Mysql安装

## brew install mysql

## brew services list

## brew services start(stop) mysql

---

# Mysql命令

## mysql -u root

## show databases;(;不可少)

## use database name;

## show tables;

## sql语句

###### 删除表

drop table table_name;

###### 清空表

Delete from table_name;

---

# Sequelize介绍和使用

* 什么事ORM
* Sequelize作用
* 在nodejs应用中集成sequelize

node-app -- ORM(sequelize) -- 驱动（node-mysql) -- mysql db



1. npm install sequelize -S
2. npm install mysql2 -S 
3. npm install sequelize-cli -S
4. npx sequelize-cli init
5. npx sequelize-cli model:generate --name User --attributes name:string
6. npx sequelize-cli db:migrate --env=development

---

# 其他中间件

## body-parser

npm install body-parser -S

