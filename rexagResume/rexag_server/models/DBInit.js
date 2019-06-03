let User = "CREATE TABLE `rexag`.`user1`  ( `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',`nickname` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户昵称'," +
  "`username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '登录账号',`password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '登录密码'," +
  "`sex` varchar(6) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '性别',`phone` char(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号'," +
  "`email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '邮箱', `createtime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '注册时间'," +
  "`updatetime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '账号更新时间',`enable` char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号是否注销'," +
  "`headpic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户头像url',`autograph` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '签名'," +
  "PRIMARY KEY (`id`) USING BTREE,UNIQUE INDEX `username`(`username`) USING BTREE,UNIQUE INDEX `phone`(`phone`) USING BTREE,UNIQUE INDEX `email`(`email`) USING BTREE) " +
  "ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;";
let 