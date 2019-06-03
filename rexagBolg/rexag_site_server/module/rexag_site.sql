/*
 Navicat Premium Data Transfer

 Source Server         : rexag_mysql
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3396
 Source Schema         : rexag_site

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 29/05/2019 18:20:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for apply
-- ----------------------------
DROP TABLE IF EXISTS `apply`;
CREATE TABLE `apply`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `from_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '申请方id',
  `to_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '接受方id',
  `group_id` int(11) NULL DEFAULT NULL COMMENT '组id',
  `type` tinyint(1) NULL DEFAULT 0 COMMENT '类型(0 用户 1 组群)',
  `status` tinyint(1) NULL DEFAULT 0 COMMENT '状态(0 待处理  1 已同意 2 已拒绝)',
  `apply_message` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '附加消息',
  `reply` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '回复消息',
  `createtime` datetime(6) NULL DEFAULT NULL COMMENT '创建时间',
  `updatetime` datetime(6) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '申请表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for artacil
-- ----------------------------
DROP TABLE IF EXISTS `artacil`;
CREATE TABLE `artacil`  (
  `id` int(11) NOT NULL COMMENT '主键',
  `author` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '作者',
  `user_id` int(11) NOT NULL COMMENT '作者ID',
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '标题',
  `firstmenu` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章一级分类',
  `secondmenu` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章二级分类',
  `content` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章内容',
  `createtime` datetime(6) NOT NULL COMMENT '创建日期',
  `updatetime` datetime(6) NOT NULL COMMENT '更新日期',
  `keywords` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章关键词',
  `is_top` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否置顶(0 不置顶 1 置顶)',
  `is_original` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否原创(0 非原创 1 原创)',
  `is_public` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否公开(0 私密 1 公开)',
  `is_enable` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否删除(0 未删除 1 删除)',
  `is_complete` tinyint(1) NOT NULL DEFAULT 0 COMMENT '是否编辑完成(0 未完成 1 完成)',
  `version` char(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '版本号，乐观锁',
  `original_link` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '原始链接',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for articlcomment
-- ----------------------------
DROP TABLE IF EXISTS `articlcomment`;
CREATE TABLE `articlcomment`  (
  `id` int(11) NOT NULL COMMENT '评论表id',
  `user_id` int(11) NOT NULL COMMENT '评论用户id',
  `artacil_id` int(11) NOT NULL COMMENT '被评论文章ID',
  `comment_to` int(11) NOT NULL COMMENT '给谁评论（评论文章/评论文章的评论）',
  `comment` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '评论内容',
  `comment_time` datetime(6) NOT NULL COMMENT '评论时间',
  `is_enable` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否删除(0 评论被删除，1 评论有效)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for articletype
-- ----------------------------
DROP TABLE IF EXISTS `articletype`;
CREATE TABLE `articletype`  (
  `id` int(11) NOT NULL COMMENT '博客详细分类ID',
  `type_zhname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章分类中文名称',
  `type_enname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文章分类英文名称',
  `is_enable` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否有效(0 无效 1 有效)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articletype
-- ----------------------------
INSERT INTO `articletype` VALUES (1, '首页', 'home', 1);
INSERT INTO `articletype` VALUES (2, '前端', 'fondend', 1);
INSERT INTO `articletype` VALUES (3, '后端', 'backend', 1);
INSERT INTO `articletype` VALUES (4, '数据库', 'database', 1);
INSERT INTO `articletype` VALUES (5, '工具', 'tools', 1);
INSERT INTO `articletype` VALUES (6, '随笔', 'essay', 1);

-- ----------------------------
-- Table structure for articltypedetail
-- ----------------------------
DROP TABLE IF EXISTS `articltypedetail`;
CREATE TABLE `articltypedetail`  (
  `id` int(11) NOT NULL COMMENT '详细分类id',
  `typeid` int(11) NOT NULL COMMENT '分类id',
  `detail_entype` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '详细类型英文名称',
  `detail_zhtype` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '详细类型中文名称',
  `is_enable` tinyint(1) NOT NULL DEFAULT 1 COMMENT '是否有效(0 无效 1 有效)',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articltypedetail
-- ----------------------------
INSERT INTO `articltypedetail` VALUES (1, 2, 'HTML', 'HTML', 1);
INSERT INTO `articltypedetail` VALUES (2, 2, 'CSS', 'CSS', 1);
INSERT INTO `articltypedetail` VALUES (3, 2, 'JavaScript', 'JavaScript', 1);
INSERT INTO `articltypedetail` VALUES (4, 2, 'TypeScript', 'TypeScript', 1);
INSERT INTO `articltypedetail` VALUES (5, 2, 'Vue', 'Vue', 1);
INSERT INTO `articltypedetail` VALUES (6, 2, 'React', 'React', 1);
INSERT INTO `articltypedetail` VALUES (7, 2, 'Angular', 'Angular', 1);
INSERT INTO `articltypedetail` VALUES (8, 2, 'JQuery', 'JQuery', 1);
INSERT INTO `articltypedetail` VALUES (9, 2, 'ECMAScript', 'ECMAScript', 1);
INSERT INTO `articltypedetail` VALUES (10, 3, 'C#', 'C#', 1);
INSERT INTO `articltypedetail` VALUES (11, 3, 'PHP', 'PHP', 1);
INSERT INTO `articltypedetail` VALUES (12, 3, 'Python', 'Python', 1);
INSERT INTO `articltypedetail` VALUES (13, 3, 'Java', 'Java', 1);
INSERT INTO `articltypedetail` VALUES (14, 3, 'C', 'C', 1);
INSERT INTO `articltypedetail` VALUES (15, 3, 'C++', 'C++', 1);
INSERT INTO `articltypedetail` VALUES (16, 4, 'Orcale', 'Orcale', 1);
INSERT INTO `articltypedetail` VALUES (17, 4, 'SQL Server', 'SQL Server', 1);
INSERT INTO `articltypedetail` VALUES (18, 4, 'MySql', 'MySql', 1);
INSERT INTO `articltypedetail` VALUES (19, 4, 'MongoDB', 'MongoDB', 1);
INSERT INTO `articltypedetail` VALUES (20, 4, 'Redis', 'Redis', 1);
INSERT INTO `articltypedetail` VALUES (21, 4, 'Neo4j', 'Neo4j', 1);
INSERT INTO `articltypedetail` VALUES (22, 4, 'InfluxDB', 'InfluxDB', 1);
INSERT INTO `articltypedetail` VALUES (23, 5, 'IDE', 'IDE', 1);
INSERT INTO `articltypedetail` VALUES (24, 5, 'Plugin', 'Plugin', 1);
INSERT INTO `articltypedetail` VALUES (25, 5, 'App', 'App', 1);

-- ----------------------------
-- Table structure for group
-- ----------------------------
DROP TABLE IF EXISTS `group`;
CREATE TABLE `group`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `avatar` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '群头像',
  `name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '群组名',
  `desc` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '群介绍',
  `create_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '群主id',
  `createtime` datetime(6) NULL DEFAULT NULL COMMENT '创建时间',
  `updatetime` datetime(6) NULL DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '群组表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for message
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `send_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '发送用户id',
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '发送内容',
  `type` tinyint(1) NULL DEFAULT 0 COMMENT '类型(0 用户 1 组群)',
  `receive_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '接收用户id',
  `group_id` int(11) NULL DEFAULT NULL COMMENT '接收组id',
  `createtime` datetime(6) NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '消息表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_friend
-- ----------------------------
DROP TABLE IF EXISTS `user_friend`;
CREATE TABLE `user_friend`  (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `friend_id` int(11) NOT NULL COMMENT '好友id',
  PRIMARY KEY (`user_id`, `friend_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户好友列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_group
-- ----------------------------
DROP TABLE IF EXISTS `user_group`;
CREATE TABLE `user_group`  (
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `group_id` int(11) NOT NULL COMMENT '组id',
  PRIMARY KEY (`user_id`, `group_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户组群列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user_message
-- ----------------------------
DROP TABLE IF EXISTS `user_message`;
CREATE TABLE `user_message`  (
  `send_id` int(11) NOT NULL COMMENT '发送用户id',
  `message_id` int(11) NOT NULL COMMENT '消息id',
  `user_id` int(11) NULL DEFAULT NULL COMMENT '接收用户id',
  `group_id` int(11) NULL DEFAULT NULL COMMENT '接收群组id',
  `is_read` tinyint(1) NULL DEFAULT 0 COMMENT '是否读过(0 没有 1 读过)',
  PRIMARY KEY (`send_id`, `message_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户消息列表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `nickname` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户昵称',
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `salt` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '加密的盐',
  `userpwd` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '加密后的登录密码',
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '状态(0 离线 1 在线 2 隐身)',
  `sex` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '性别',
  `phone` char(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号',
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '邮箱',
  `createtime` datetime(6) NOT NULL COMMENT '注册时间',
  `updatetime` datetime(6) NOT NULL COMMENT '注册时间',
  `is_enable` tinyint(1) NOT NULL DEFAULT 1 COMMENT '账号是否注销(0 注销 1 未注销)',
  `headpic` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户头像url',
  `autograph` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '签名',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `phone`(`phone`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Procedure structure for getpages
-- ----------------------------
DROP PROCEDURE IF EXISTS `getpages`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getpages`(
	in tb_name varchar(50),#表名
	in sql_where varchar(300), #where条件和order by
	in page_index int, #查询页数
	in page_size int, #分页大小
	out page_total int, #总的页数
	out rows_total int #总记录书
)
begin
	set @where ='';
	if page_index < 1 then set page_index = 1;end if;
	if page_size < 1 then set page_size = 1;end if;
	if (sql_where is not null and length(sql_where) > 0) 
		then set @where = concat(' where ',sql_where);
	end if;
	
	set @rowstart = (page_index - 1) * page_size;
	set @pgsize = page_size;
	set @sql = concat('select SQL_CALC_FOUND_ROWS* from ', tb_name, @where, ' limit ?,?');
	
	prepare sql_page from @sql; #准备好sql语句，以便传参执行
	execute sql_page using @rowstart, @pgsize; #执行sql
	deallocate prepare sql_page; #释放掉
	set rows_total = found_rows();
	set page_total = ceil(rows_total/page_size);
end
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table apply
-- ----------------------------
DROP TRIGGER IF EXISTS `apply_insert`;
delimiter ;;
CREATE TRIGGER `apply_insert` BEFORE INSERT ON `apply` FOR EACH ROW begin
if (new.`createtime` = 0 or new.`createtime` is null)
	then set new.`createtime` = now();
end if;
if (new.`updatetime` = 0 or new.`updatetime` is null)
	then set new.`updatetime` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table apply
-- ----------------------------
DROP TRIGGER IF EXISTS `apply_update`;
delimiter ;;
CREATE TRIGGER `apply_update` BEFORE UPDATE ON `apply` FOR EACH ROW begin
if ((new.`status` <> old.`status`) or (new.`status` is not null and old.`status` is null) 
	or (new.`reply` <> old.`reply`) or (new.`reply` is not null and old.`reply` is null))
	then set new.`updatetime` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table artacil
-- ----------------------------
DROP TRIGGER IF EXISTS `artacil_insert`;
delimiter ;;
CREATE TRIGGER `artacil_insert` BEFORE INSERT ON `artacil` FOR EACH ROW begin
if (new.`createtime` = 0 or new.`createtime` is null)
	then set new.`createtime` = now();
end if;
if (new.`updatetime` = 0 or new.`updatetime` is null)
	then set new.`updatetime` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table artacil
-- ----------------------------
DROP TRIGGER IF EXISTS `artacil_update`;
delimiter ;;
CREATE TRIGGER `artacil_update` BEFORE UPDATE ON `artacil` FOR EACH ROW begin
if ((new.`title` <> old.`title`) or (new.`title` is not null and old.`title` is null) 
	or (new.`firstmenu` <> old.`firstmenu`) or (new.`firstmenu` is not null and old.`firstmenu` is null)
	or (new.`secondmenu` <> old.`secondmenu`) or (new.`secondmenu` is not null and old.`secondmenu` is null)
	or (new.`content` <> old.`content`) or (new.`content` is not null and old.`content` is null)
	or (new.`keywords` <> old.`keywords`) or (new.`keywords` is not null and old.`keywords` is null))
		then set new.`updatetime` = unix_timestamp(now());
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table articlcomment
-- ----------------------------
DROP TRIGGER IF EXISTS `comment_insert`;
delimiter ;;
CREATE TRIGGER `comment_insert` BEFORE INSERT ON `articlcomment` FOR EACH ROW begin
if (new.`comment_time` = 0 or new.`comment_time` is null)
	then set new.`comment_time` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table group
-- ----------------------------
DROP TRIGGER IF EXISTS `group_insert`;
delimiter ;;
CREATE TRIGGER `group_insert` BEFORE INSERT ON `group` FOR EACH ROW begin
if (new.`createtime` = 0 or new.`createtime` is null)
	then set new.`createtime` = now();
end if;
if (new.`updatetime` = 0 or new.`updatetime` is null)
	then set new.`updatetime` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table group
-- ----------------------------
DROP TRIGGER IF EXISTS `group_update`;
delimiter ;;
CREATE TRIGGER `group_update` BEFORE UPDATE ON `group` FOR EACH ROW begin
if ((new.`avatar` <> old.`avatar`) or (new.`avatar` is not null and old.`avatar` is null) 
	or (new.`name` <> old.`name`) or (new.`name` is not null and old.`name` is null)
	or (new.`desc` <> old.`desc`) or (new.`desc` is not null and old.`desc` is null))
	then set new.`updatetime` = unix_timestamp(now());
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table message
-- ----------------------------
DROP TRIGGER IF EXISTS `message_insert`;
delimiter ;;
CREATE TRIGGER `message_insert` BEFORE INSERT ON `message` FOR EACH ROW begin
if (new.`createtime` = 0 or new.`createtime` is null)
	then set new.`createtime` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table users
-- ----------------------------
DROP TRIGGER IF EXISTS `users_insert`;
delimiter ;;
CREATE TRIGGER `users_insert` BEFORE INSERT ON `users` FOR EACH ROW begin
if (new.`createtime` = 0 or new.`createtime` is null)
	then set new.`createtime` = now();
end if;
if (new.`updatetime` = 0 or new.`updatetime` is null)
	then set new.`updatetime` = now();
end if;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table users
-- ----------------------------
DROP TRIGGER IF EXISTS `users_update`;
delimiter ;;
CREATE TRIGGER `users_update` BEFORE UPDATE ON `users` FOR EACH ROW begin
if ((new.`nickname` <> old.`nickname`) or (new.`nickname` is not null and old.`nickname` is null) 
	or (new.`salt` <> old.`salt`) or (new.`salt` is not null and old.`salt` is null)
	or (new.`userpwd` <> old.`userpwd`) or (new.`userpwd` is not null and old.`userpwd` is null)
	or (new.`phone` <> old.`phone`) or (new.`phone` is not null and old.`phone` is null)
	or (new.`email` <> old.`email`) or (new.`email` is not null and old.`email` is null)
	or (new.`autograph` <> old.`autograph`) or (new.`autograph` is not null and old.`autograph` is null)
	or (new.`headpic` <> old.`headpic`) or (new.`headpic` is not null and old.`headpic` is null))
		then set new.`updatetime` = now();
end if;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
