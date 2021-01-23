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