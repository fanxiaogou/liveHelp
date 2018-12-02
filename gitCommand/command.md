# 一.新建代码库
* 在当前目录新建一个Git代码库  
  git init  
* 新建一个目录，将其初始化为Git代码库  
  git init [project-name]  
* 下载一个项目  
  git clone [克隆地址]

# 二.配置  
（git的设置文件为 .gitconfig)  
* 显示当前git 配置  
  git config --list  
* 编辑git 配置文件  
  git config -e [--global]  
* 设置git 账户和密码  
  git config --global user.name "[name]"  
  git config --gloabal user.email "[email]"  
* 查看git 账户和密码  
  git config user.name  
  git config user.email


# 三.增加/删除文件  
* 添加指定文件到暂存区  
  git add [file]  
* 添加当前目录的所有文件到暂存区  
  ** git add .  **
* 删除工作区文件，并将文件放入暂存区  
  git rm [file]  

# 四.代码提交  

* 提交暂存区到仓库区  
  ** git commit -m [message] ** 
* 提交暂存区的指定文件到仓库区  
  git commit [file1]  -m [message] 
* 提交时显示所有diff信息  
  git commit -v

# 五.分支  
* 显示所有本地分支  
  git branch
* 显示所有本地分支和远程分支  
  ** git branch -a **
* 新建一个分支，并切换到那个分支上  
  ** git checkout -b [branch] ** 
* 切换到指定分支  
  git checkout [branch-name]
* 把其他分支的内容合并到当前分支  
  ** git merge [branch] **
* 清空当前分支的内容
  ** git checkout -- . **

**   


	如果当前分支 beta暂存区存在内容，又不需要提交上去，可以使用  
	git checkout -- .  
   	然后使用  
	git status 
	查看状态，beta文件还存在，那就先把文件提上去 使用   
	1. git add .
	2. git commit -m "news"
	再切换到其他分支上
	git checkout master  
	再删除beta上的内容  
	git branch -d beta  
	之后再回到beta上进行push 

 
**