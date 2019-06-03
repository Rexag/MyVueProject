import db from './db'

// 文章表
let artacil = "CREATE TABLE `rexag`.`artacil`  (`id` int(11) NOT NULL COMMENT '主键'," +
  "`author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '作者'," +
  "`user_id` int(11) NOT NULL COMMENT '作者ID'," +
  "`title` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题'," +
  "`firstmenu` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章一级分类'," +
  "`secondmenu` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章二级分类'," +
  "`content` mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '文章内容'," +
  "`create_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '创建日期'," +
  "`update_by` int(11) NULL DEFAULT NULL COMMENT '更新人ID'," +
  "`update_date` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '更新日期'," +
  "`version` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '版本号，乐观锁'," +
  "`original_link` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '原始链接'," +
  "`is_top` tinyint(1) NULL DEFAULT NULL COMMENT '是否置顶'," +
  "`is_original` tinyint(1) NULL DEFAULT NULL COMMENT '是否原创'," +
  "`is_public` tinyint(1) NULL DEFAULT NULL COMMENT '是否公开'," +
  "`is_enable` tinyint(1) NULL DEFAULT NULL COMMENT '是否删除'," +
  "`is_complete` tinyint(1) NULL DEFAULT NULL COMMENT '是否编辑完成'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 文章评论表
let articlcomment = "CREATE TABLE `rexag`.`articlcomment`  (`id` int(11) NOT NULL COMMENT '评论ID'," +
  "`user_id` int(11) NOT NULL COMMENT '用户id'," +
  "`artacil_id` int(11) NOT NULL COMMENT '文章ID'," +
  "`comment` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容'," +
  "`comment_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论时间'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '是否有效'," +
  "`comment_to` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '给谁评论（评论文章/评论文章的评论）'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 文章分类表
let articletype = "CREATE TABLE `rexag`.`articletype`  (`id` int(11) NOT NULL COMMENT '博客详细分类ID'," +
  "`type_router` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博客分类路由名称'," +
  "`type_zhname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博客分类中文名称'," +
  "`type_enname` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '博客分类英文名称'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '是否有效'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 文章详细分类表
let articltypedetail = "CREATE TABLE `rexag`.`articltypedetail`  (`id` int(11) NOT NULL COMMENT 'ID'," +
  "`typeid` int(11) NOT NULL COMMENT '类型ID'," +
  "`detail_entype` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '详细类型英文名称'," +
  "`detail_zhtype` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '详细类型中文名称'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '是否有效'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 聊天群组表
let chatgroup = "CREATE TABLE `rexag`.`chatgroup`  (`id` int(11) NOT NULL COMMENT '聊天ID'," +
  "`group_name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '群组名称'," +
  "`create_userid` int(11) NOT NULL COMMENT '群组创建者id'," +
  "`createtime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '群组创建时间'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '是否有效'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 聊天群组详细表 
let chatgroupdetail = "CREATE TABLE `rexag`.`chatgroupdetail`  (`id` int(11) NOT NULL COMMENT '群组详细id'," +
  "`group_id` int(11) NULL DEFAULT NULL COMMENT '群组id'," +
  "`userid` int(11) NOT NULL COMMENT '用户id'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '是否有效'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 聊天消息表
let news = "CREATE TABLE `rexag`.`news`  (`id` int(11) NOT NULL COMMENT '消息ID'," +
  "`send_id` int(11) NOT NULL COMMENT '发送消息的用户ID'," +
  "`accept_id` int(11) NOT NULL COMMENT '接收消息的用户ID'," +
  "`send_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息发送时间'," +
  "`accept_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息接收时间'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '是否接收'," +
  "`messages` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '消息内容'," +
  "`send_user` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '发送者昵称'," +
  "`accpet_user` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '接收者昵称'," +
  "PRIMARY KEY (`id`) USING BTREE) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"

// 用户表
let users = "CREATE TABLE `rexag`.`users`  (`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id'," +
  "`nickname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称'," +
  "`username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '登录账号'," +
  "`userpwd` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '登录密码'," +
  "`sex` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '性别'," +
  "`phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号'," +
  "`email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '邮箱'," +
  "`createtime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '注册时间'," +
  "`updatetime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号更新时间'," +
  "`is_enable` tinyint(1) NOT NULL COMMENT '账号是否注销'," +
  "`headpic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户头像url'," +
  "`autograph` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '签名'," +
  "`group_id` int(11) NOT NULL COMMENT '用户所处的权限组'," +
  "PRIMARY KEY (`id`) USING BTREE," +
  "UNIQUE INDEX `username`(`username`) USING BTREE," +
  "UNIQUE INDEX `phone`(`phone`) USING BTREE," +
  "UNIQUE INDEX `email`(`email`) USING BTREE) " +
  "ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;"


// 初始化建表
db.query(artacil)
db.query(articlcomment)
db.query(articletype)
db.query(articltypedetail)
db.query(chatgroup)
db.query(chatgroupdetail)
db.query(news)
db.query(users)













