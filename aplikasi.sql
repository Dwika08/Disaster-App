/*
 Navicat Premium Data Transfer

 Source Server         : Local
 Source Server Type    : MySQL
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : aplikasi

 Target Server Type    : MySQL
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 01/12/2022 20:35:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id_admin` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `image` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_admin`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (1, 'Dwika Julian azhar', 'Admin123', 'admin123', 'dwika-julian-azhar.jpeg', 'zembelldwika@gmail.com');

-- ----------------------------
-- Table structure for bencana_detail
-- ----------------------------
DROP TABLE IF EXISTS `bencana_detail`;
CREATE TABLE `bencana_detail`  (
  `id_bencana_detail` int(11) NOT NULL AUTO_INCREMENT,
  `bencana` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_bencana_detail`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of bencana_detail
-- ----------------------------
INSERT INTO `bencana_detail` VALUES (1, 'Banjir');
INSERT INTO `bencana_detail` VALUES (2, 'Kebakaran');
INSERT INTO `bencana_detail` VALUES (3, 'Tanah Longsor');
INSERT INTO `bencana_detail` VALUES (4, 'Angin Kencang');
INSERT INTO `bencana_detail` VALUES (5, 'Gempa');

-- ----------------------------
-- Table structure for desa_detail
-- ----------------------------
DROP TABLE IF EXISTS `desa_detail`;
CREATE TABLE `desa_detail`  (
  `id_desa_detail` int(11) NOT NULL AUTO_INCREMENT,
  `desa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `id_kec_detail` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_desa_detail`) USING BTREE,
  INDEX `des_kec`(`id_kec_detail`) USING BTREE,
  CONSTRAINT `des_kec` FOREIGN KEY (`id_kec_detail`) REFERENCES `kec_detail` (`id_kec_detail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 280 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of desa_detail
-- ----------------------------
INSERT INTO `desa_detail` VALUES (1, 'Berta', 17);
INSERT INTO `desa_detail` VALUES (2, 'Derik', 17);
INSERT INTO `desa_detail` VALUES (3, 'Gumelem Wetan', 17);
INSERT INTO `desa_detail` VALUES (4, 'Gumelem Kulon', 17);
INSERT INTO `desa_detail` VALUES (5, 'Penarusan Wetan', 17);
INSERT INTO `desa_detail` VALUES (6, 'Penarusan Kulon', 17);
INSERT INTO `desa_detail` VALUES (7, 'Brengkok', 17);
INSERT INTO `desa_detail` VALUES (8, 'Pekikiran', 17);
INSERT INTO `desa_detail` VALUES (9, 'Piasa Wetan', 17);
INSERT INTO `desa_detail` VALUES (10, 'Karangsalam', 17);
INSERT INTO `desa_detail` VALUES (11, 'Kemranggon', 17);
INSERT INTO `desa_detail` VALUES (12, 'Susukan', 17);
INSERT INTO `desa_detail` VALUES (13, 'Dermasari', 17);
INSERT INTO `desa_detail` VALUES (14, 'Kedawung', 17);
INSERT INTO `desa_detail` VALUES (15, 'Karangjati', 17);
INSERT INTO `desa_detail` VALUES (16, 'Pagak', 1);
INSERT INTO `desa_detail` VALUES (17, 'Kaliwinasuh', 1);
INSERT INTO `desa_detail` VALUES (18, 'Sirkandi', 1);
INSERT INTO `desa_detail` VALUES (19, 'Kecitran', 1);
INSERT INTO `desa_detail` VALUES (20, 'Kalilandak', 1);
INSERT INTO `desa_detail` VALUES (21, 'Purwareja', 1);
INSERT INTO `desa_detail` VALUES (22, 'Kalimandi', 1);
INSERT INTO `desa_detail` VALUES (23, 'Klampok', 1);
INSERT INTO `desa_detail` VALUES (24, 'Jalatunda', 2);
INSERT INTO `desa_detail` VALUES (25, 'Somawangi', 2);
INSERT INTO `desa_detail` VALUES (26, 'Kaliwungu', 2);
INSERT INTO `desa_detail` VALUES (27, 'Kebanaran', 2);
INSERT INTO `desa_detail` VALUES (28, 'Glempang', 2);
INSERT INTO `desa_detail` VALUES (29, 'Salamerta', 2);
INSERT INTO `desa_detail` VALUES (30, 'Purwasaba', 2);
INSERT INTO `desa_detail` VALUES (31, 'Blimbing', 2);
INSERT INTO `desa_detail` VALUES (32, 'Panggisari', 2);
INSERT INTO `desa_detail` VALUES (33, 'Candiwulan', 2);
INSERT INTO `desa_detail` VALUES (34, 'Simbang', 2);
INSERT INTO `desa_detail` VALUES (35, 'Kertayasa', 2);
INSERT INTO `desa_detail` VALUES (36, 'Banjengan', 2);
INSERT INTO `desa_detail` VALUES (37, 'Mandiraja Kulon', 2);
INSERT INTO `desa_detail` VALUES (38, 'Kebakalan', 2);
INSERT INTO `desa_detail` VALUES (39, 'Mandiraja Wetan', 2);
INSERT INTO `desa_detail` VALUES (40, 'Kalitengah', 18);
INSERT INTO `desa_detail` VALUES (41, 'Merden', 18);
INSERT INTO `desa_detail` VALUES (42, 'Karanganyar', 18);
INSERT INTO `desa_detail` VALUES (43, 'Kaliajir', 18);
INSERT INTO `desa_detail` VALUES (44, 'Petir', 18);
INSERT INTO `desa_detail` VALUES (45, 'Pucungbedug', 18);
INSERT INTO `desa_detail` VALUES (46, 'Parakan', 18);
INSERT INTO `desa_detail` VALUES (47, 'Mertasari', 18);
INSERT INTO `desa_detail` VALUES (48, 'Danaraja', 18);
INSERT INTO `desa_detail` VALUES (49, 'Purwonegoro', 18);
INSERT INTO `desa_detail` VALUES (50, 'Kalipelus', 18);
INSERT INTO `desa_detail` VALUES (51, 'Gumiwang', 18);
INSERT INTO `desa_detail` VALUES (52, 'Kutawuluh', 18);
INSERT INTO `desa_detail` VALUES (53, 'Wanadri', 3);
INSERT INTO `desa_detail` VALUES (54, 'Kebondalem', 3);
INSERT INTO `desa_detail` VALUES (55, 'Majalengka', 3);
INSERT INTO `desa_detail` VALUES (56, 'Wiramastra', 3);
INSERT INTO `desa_detail` VALUES (57, 'Kutayasa', 3);
INSERT INTO `desa_detail` VALUES (58, 'Winong', 3);
INSERT INTO `desa_detail` VALUES (59, 'Depok', 3);
INSERT INTO `desa_detail` VALUES (60, 'Watuurip', 3);
INSERT INTO `desa_detail` VALUES (61, 'Masaran', 3);
INSERT INTO `desa_detail` VALUES (62, 'Serang', 3);
INSERT INTO `desa_detail` VALUES (63, 'Mantrianom', 3);
INSERT INTO `desa_detail` VALUES (64, 'Binorong', 3);
INSERT INTO `desa_detail` VALUES (65, 'Joho', 3);
INSERT INTO `desa_detail` VALUES (66, 'Bawang', 3);
INSERT INTO `desa_detail` VALUES (67, 'Bandingan', 3);
INSERT INTO `desa_detail` VALUES (68, 'Blambangan', 3);
INSERT INTO `desa_detail` VALUES (69, 'Gemuruh', 3);
INSERT INTO `desa_detail` VALUES (70, 'Pucang', 3);
INSERT INTO `desa_detail` VALUES (71, 'Argasoka', 19);
INSERT INTO `desa_detail` VALUES (72, 'Karangtengah', 19);
INSERT INTO `desa_detail` VALUES (73, 'Wangon', 19);
INSERT INTO `desa_detail` VALUES (74, 'Semampir', 19);
INSERT INTO `desa_detail` VALUES (75, 'Sokanandi', 19);
INSERT INTO `desa_detail` VALUES (76, 'Parakancanggah', 19);
INSERT INTO `desa_detail` VALUES (77, 'Semarang', 19);
INSERT INTO `desa_detail` VALUES (78, 'Krandegan', 19);
INSERT INTO `desa_detail` VALUES (79, 'Kutabanjarnegara', 19);
INSERT INTO `desa_detail` VALUES (80, 'Ampelsari', 19);
INSERT INTO `desa_detail` VALUES (81, 'Tlagawera', 19);
INSERT INTO `desa_detail` VALUES (82, 'Cendana', 19);
INSERT INTO `desa_detail` VALUES (83, 'Sokayasa', 19);
INSERT INTO `desa_detail` VALUES (84, 'Kalibenda', 4);
INSERT INTO `desa_detail` VALUES (85, 'Pringamba', 4);
INSERT INTO `desa_detail` VALUES (86, 'Sawal', 4);
INSERT INTO `desa_detail` VALUES (87, 'Panawaren', 4);
INSERT INTO `desa_detail` VALUES (88, 'Tunggara', 4);
INSERT INTO `desa_detail` VALUES (89, 'Randegan', 4);
INSERT INTO `desa_detail` VALUES (90, 'Bojanegara', 4);
INSERT INTO `desa_detail` VALUES (91, 'Bandingan', 4);
INSERT INTO `desa_detail` VALUES (92, 'Prigi', 4);
INSERT INTO `desa_detail` VALUES (93, 'Gembongan', 4);
INSERT INTO `desa_detail` VALUES (94, 'Kemiri', 4);
INSERT INTO `desa_detail` VALUES (95, 'Karangmangu', 4);
INSERT INTO `desa_detail` VALUES (96, 'Wanacipta', 4);
INSERT INTO `desa_detail` VALUES (97, 'Sigaluh', 4);
INSERT INTO `desa_detail` VALUES (98, 'Singamerta', 4);
INSERT INTO `desa_detail` VALUES (99, 'Kenteng', 5);
INSERT INTO `desa_detail` VALUES (100, 'Rejasa', 5);
INSERT INTO `desa_detail` VALUES (101, 'Limbangan', 5);
INSERT INTO `desa_detail` VALUES (102, 'Penawangan', 5);
INSERT INTO `desa_detail` VALUES (103, 'Talunamba', 5);
INSERT INTO `desa_detail` VALUES (104, 'Madukara', 5);
INSERT INTO `desa_detail` VALUES (105, 'Kutayasa', 5);
INSERT INTO `desa_detail` VALUES (106, 'Pekauman', 5);
INSERT INTO `desa_detail` VALUES (107, 'Pagelak', 5);
INSERT INTO `desa_detail` VALUES (108, 'Dawuhan', 5);
INSERT INTO `desa_detail` VALUES (109, 'Bantarwaru', 5);
INSERT INTO `desa_detail` VALUES (110, 'Sered', 5);
INSERT INTO `desa_detail` VALUES (111, 'Petambakan', 5);
INSERT INTO `desa_detail` VALUES (112, 'Rakitan', 5);
INSERT INTO `desa_detail` VALUES (113, 'Blitar', 5);
INSERT INTO `desa_detail` VALUES (114, 'Kaliurip', 5);
INSERT INTO `desa_detail` VALUES (115, 'Karanganyar', 5);
INSERT INTO `desa_detail` VALUES (116, 'Gununggiana', 5);
INSERT INTO `desa_detail` VALUES (117, 'Clapar', 5);
INSERT INTO `desa_detail` VALUES (118, 'Pakelen', 5);
INSERT INTO `desa_detail` VALUES (119, 'Jenggawur', 20);
INSERT INTO `desa_detail` VALUES (120, 'Banjarkulon', 20);
INSERT INTO `desa_detail` VALUES (121, 'Banjarmangu', 20);
INSERT INTO `desa_detail` VALUES (122, 'Rejasari', 20);
INSERT INTO `desa_detail` VALUES (123, 'Kesenet', 20);
INSERT INTO `desa_detail` VALUES (124, 'Kalilunjar', 20);
INSERT INTO `desa_detail` VALUES (125, 'Sijeruk', 20);
INSERT INTO `desa_detail` VALUES (126, 'Kendaga', 20);
INSERT INTO `desa_detail` VALUES (127, 'Gripit', 20);
INSERT INTO `desa_detail` VALUES (128, 'Pekandangan', 20);
INSERT INTO `desa_detail` VALUES (129, 'Sigeblog', 20);
INSERT INTO `desa_detail` VALUES (130, 'Paseh', 20);
INSERT INTO `desa_detail` VALUES (131, 'Sipedang', 20);
INSERT INTO `desa_detail` VALUES (132, 'Sijenggung', 20);
INSERT INTO `desa_detail` VALUES (133, 'Beji', 20);
INSERT INTO `desa_detail` VALUES (134, 'Prendengan', 20);
INSERT INTO `desa_detail` VALUES (135, 'Majatengah', 20);
INSERT INTO `desa_detail` VALUES (136, 'Kasilib', 6);
INSERT INTO `desa_detail` VALUES (137, 'Tapen', 6);
INSERT INTO `desa_detail` VALUES (138, 'Karangjambe', 6);
INSERT INTO `desa_detail` VALUES (139, 'Wanadadi', 6);
INSERT INTO `desa_detail` VALUES (140, 'Wanakarsa', 6);
INSERT INTO `desa_detail` VALUES (141, 'Lemahjaya', 6);
INSERT INTO `desa_detail` VALUES (142, 'Karangkemiri', 6);
INSERT INTO `desa_detail` VALUES (143, 'Kandangwangi', 6);
INSERT INTO `desa_detail` VALUES (144, 'Medayu', 6);
INSERT INTO `desa_detail` VALUES (145, 'Linggasari', 6);
INSERT INTO `desa_detail` VALUES (146, 'Gumingsir', 6);
INSERT INTO `desa_detail` VALUES (147, 'Pingit', 7);
INSERT INTO `desa_detail` VALUES (148, 'Situwangi', 7);
INSERT INTO `desa_detail` VALUES (149, 'Gelang', 7);
INSERT INTO `desa_detail` VALUES (150, 'Rakit', 7);
INSERT INTO `desa_detail` VALUES (151, 'Adipasir', 7);
INSERT INTO `desa_detail` VALUES (152, 'Bandingan', 7);
INSERT INTO `desa_detail` VALUES (153, 'Kincang', 7);
INSERT INTO `desa_detail` VALUES (154, 'Badamita', 7);
INSERT INTO `desa_detail` VALUES (155, 'Tanjunganom', 7);
INSERT INTO `desa_detail` VALUES (156, 'Luwung', 7);
INSERT INTO `desa_detail` VALUES (157, 'Lengkong', 7);
INSERT INTO `desa_detail` VALUES (158, 'Sambong', 8);
INSERT INTO `desa_detail` VALUES (159, 'Danakerta', 8);
INSERT INTO `desa_detail` VALUES (160, 'Klapa', 8);
INSERT INTO `desa_detail` VALUES (161, 'Kecepit', 8);
INSERT INTO `desa_detail` VALUES (162, 'Karangsari', 8);
INSERT INTO `desa_detail` VALUES (163, 'Tribuana', 8);
INSERT INTO `desa_detail` VALUES (164, 'Sawangan', 8);
INSERT INTO `desa_detail` VALUES (165, 'Sidarata', 8);
INSERT INTO `desa_detail` VALUES (166, 'Badakarya', 8);
INSERT INTO `desa_detail` VALUES (167, 'Punggelan', 8);
INSERT INTO `desa_detail` VALUES (168, 'Jembangan', 8);
INSERT INTO `desa_detail` VALUES (169, 'Purwasana', 8);
INSERT INTO `desa_detail` VALUES (170, 'Petuguran', 8);
INSERT INTO `desa_detail` VALUES (171, 'Bondolharjo', 8);
INSERT INTO `desa_detail` VALUES (172, 'Tanjungtirta', 8);
INSERT INTO `desa_detail` VALUES (173, 'Tlaga', 8);
INSERT INTO `desa_detail` VALUES (174, 'Mlaya', 8);
INSERT INTO `desa_detail` VALUES (175, 'Paweden', 9);
INSERT INTO `desa_detail` VALUES (176, 'Gumelar', 9);
INSERT INTO `desa_detail` VALUES (177, 'Purwodadi', 9);
INSERT INTO `desa_detail` VALUES (178, 'Sampang', 9);
INSERT INTO `desa_detail` VALUES (179, 'Slatri', 9);
INSERT INTO `desa_detail` VALUES (180, 'Pagerpelah', 9);
INSERT INTO `desa_detail` VALUES (181, 'Pasuruhan', 9);
INSERT INTO `desa_detail` VALUES (182, 'Karanggondang', 9);
INSERT INTO `desa_detail` VALUES (183, 'Jlegong', 9);
INSERT INTO `desa_detail` VALUES (184, 'Ambal', 9);
INSERT INTO `desa_detail` VALUES (185, 'Binangun', 9);
INSERT INTO `desa_detail` VALUES (186, 'Karangkobar', 9);
INSERT INTO `desa_detail` VALUES (187, 'Leksana', 9);
INSERT INTO `desa_detail` VALUES (188, 'Larangan', 10);
INSERT INTO `desa_detail` VALUES (189, 'Karangnangka', 10);
INSERT INTO `desa_detail` VALUES (190, 'Aribaya', 10);
INSERT INTO `desa_detail` VALUES (191, 'Nagasari', 10);
INSERT INTO `desa_detail` VALUES (192, 'Gumingsir', 10);
INSERT INTO `desa_detail` VALUES (193, 'Sokaraja', 10);
INSERT INTO `desa_detail` VALUES (194, 'Kayuares', 10);
INSERT INTO `desa_detail` VALUES (195, 'Metawana', 10);
INSERT INTO `desa_detail` VALUES (196, 'Kalitlaga', 10);
INSERT INTO `desa_detail` VALUES (197, 'Karekan', 10);
INSERT INTO `desa_detail` VALUES (198, 'Plumbungan', 10);
INSERT INTO `desa_detail` VALUES (199, 'Pagentan', 10);
INSERT INTO `desa_detail` VALUES (200, 'Kasmaran', 10);
INSERT INTO `desa_detail` VALUES (201, 'Majasari', 10);
INSERT INTO `desa_detail` VALUES (202, 'Babadan', 10);
INSERT INTO `desa_detail` VALUES (203, 'Tegaljeruk', 10);
INSERT INTO `desa_detail` VALUES (204, 'Kalilunjar', 11);
INSERT INTO `desa_detail` VALUES (205, 'Karangsari', 11);
INSERT INTO `desa_detail` VALUES (206, 'Sarwodadi', 11);
INSERT INTO `desa_detail` VALUES (207, 'Grogol', 11);
INSERT INTO `desa_detail` VALUES (208, 'Giritirta', 11);
INSERT INTO `desa_detail` VALUES (209, 'Biting', 11);
INSERT INTO `desa_detail` VALUES (210, 'Tlahab', 11);
INSERT INTO `desa_detail` VALUES (211, 'Darmayasa', 11);
INSERT INTO `desa_detail` VALUES (212, 'Pejawaran', 11);
INSERT INTO `desa_detail` VALUES (213, 'Penusupan', 11);
INSERT INTO `desa_detail` VALUES (214, 'Ratamba', 11);
INSERT INTO `desa_detail` VALUES (215, 'Sidengok', 11);
INSERT INTO `desa_detail` VALUES (216, 'Pegundungan', 11);
INSERT INTO `desa_detail` VALUES (217, 'Beji', 11);
INSERT INTO `desa_detail` VALUES (218, 'Semangkung', 11);
INSERT INTO `desa_detail` VALUES (219, 'Condongcampur', 11);
INSERT INTO `desa_detail` VALUES (220, 'Gembol', 11);
INSERT INTO `desa_detail` VALUES (221, 'Batur', 12);
INSERT INTO `desa_detail` VALUES (222, 'Sumberejo', 12);
INSERT INTO `desa_detail` VALUES (223, 'Pasurenan', 12);
INSERT INTO `desa_detail` VALUES (224, 'Pekasiran', 12);
INSERT INTO `desa_detail` VALUES (225, 'Kepakisan', 12);
INSERT INTO `desa_detail` VALUES (226, 'Bakal', 12);
INSERT INTO `desa_detail` VALUES (227, 'Karangtengah', 12);
INSERT INTO `desa_detail` VALUES (228, 'Dieng Kulon', 12);
INSERT INTO `desa_detail` VALUES (229, 'Karangtengah', 13);
INSERT INTO `desa_detail` VALUES (230, 'Suwidak', 13);
INSERT INTO `desa_detail` VALUES (231, 'Bantar', 13);
INSERT INTO `desa_detail` VALUES (232, 'Pandansari', 13);
INSERT INTO `desa_detail` VALUES (233, 'Pagergunung', 13);
INSERT INTO `desa_detail` VALUES (234, 'Dawuhan', 13);
INSERT INTO `desa_detail` VALUES (235, 'Kubang', 13);
INSERT INTO `desa_detail` VALUES (236, 'Susukan', 13);
INSERT INTO `desa_detail` VALUES (237, 'Wanayasa', 13);
INSERT INTO `desa_detail` VALUES (238, 'Pesantren', 13);
INSERT INTO `desa_detail` VALUES (239, 'Balun', 13);
INSERT INTO `desa_detail` VALUES (240, 'Tempuran', 13);
INSERT INTO `desa_detail` VALUES (241, 'Wanaraja', 13);
INSERT INTO `desa_detail` VALUES (242, 'Jatilawang', 13);
INSERT INTO `desa_detail` VALUES (243, 'Legoksayem', 13);
INSERT INTO `desa_detail` VALUES (244, 'Kasimpar', 13);
INSERT INTO `desa_detail` VALUES (245, 'Penanggungan', 13);
INSERT INTO `desa_detail` VALUES (246, 'Kalibening', 14);
INSERT INTO `desa_detail` VALUES (247, 'Asinan', 14);
INSERT INTO `desa_detail` VALUES (248, 'Sembawa', 14);
INSERT INTO `desa_detail` VALUES (249, 'Kalibombong', 14);
INSERT INTO `desa_detail` VALUES (250, 'Majatengah', 14);
INSERT INTO `desa_detail` VALUES (251, 'Kalisat Kidul', 14);
INSERT INTO `desa_detail` VALUES (252, 'Sirukem', 14);
INSERT INTO `desa_detail` VALUES (253, 'Kertosari', 14);
INSERT INTO `desa_detail` VALUES (254, 'Sidakangen', 14);
INSERT INTO `desa_detail` VALUES (255, 'Sikumpul', 14);
INSERT INTO `desa_detail` VALUES (256, 'Gununglangit', 14);
INSERT INTO `desa_detail` VALUES (257, 'Bedana', 14);
INSERT INTO `desa_detail` VALUES (258, 'Sirukun', 14);
INSERT INTO `desa_detail` VALUES (259, 'Karanganyar', 14);
INSERT INTO `desa_detail` VALUES (260, 'Plorengan', 14);
INSERT INTO `desa_detail` VALUES (261, 'Kasinoman', 14);
INSERT INTO `desa_detail` VALUES (262, 'Pandanarum', 15);
INSERT INTO `desa_detail` VALUES (263, 'Sinduaji', 15);
INSERT INTO `desa_detail` VALUES (264, 'Pasegeran', 15);
INSERT INTO `desa_detail` VALUES (265, 'Pingit Lor', 15);
INSERT INTO `desa_detail` VALUES (266, 'Lawen', 15);
INSERT INTO `desa_detail` VALUES (267, 'Sirongge', 15);
INSERT INTO `desa_detail` VALUES (268, 'Pringamba', 15);
INSERT INTO `desa_detail` VALUES (269, 'Beji', 15);
INSERT INTO `desa_detail` VALUES (270, 'Pagedongan', 16);
INSERT INTO `desa_detail` VALUES (271, 'Gunungjati', 16);
INSERT INTO `desa_detail` VALUES (272, 'Twelagiri', 16);
INSERT INTO `desa_detail` VALUES (273, 'Kebutuhduwur', 16);
INSERT INTO `desa_detail` VALUES (274, 'Kebutuhjurang', 16);
INSERT INTO `desa_detail` VALUES (275, 'Pesangkalan', 16);
INSERT INTO `desa_detail` VALUES (276, 'Duren', 16);
INSERT INTO `desa_detail` VALUES (277, 'Lebakwangi', 16);
INSERT INTO `desa_detail` VALUES (278, 'Gentansari', 16);

-- ----------------------------
-- Table structure for kec_detail
-- ----------------------------
DROP TABLE IF EXISTS `kec_detail`;
CREATE TABLE `kec_detail`  (
  `id_kec_detail` int(11) NOT NULL AUTO_INCREMENT,
  `kecamatan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_kec_detail`) USING BTREE,
  INDEX `kecamatan`(`kecamatan`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 27 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kec_detail
-- ----------------------------
INSERT INTO `kec_detail` VALUES (20, 'Banjarmangu');
INSERT INTO `kec_detail` VALUES (19, 'Banjarnegara');
INSERT INTO `kec_detail` VALUES (12, 'Batur');
INSERT INTO `kec_detail` VALUES (3, 'Bawang');
INSERT INTO `kec_detail` VALUES (14, 'Kalibening');
INSERT INTO `kec_detail` VALUES (9, 'Karangkobar');
INSERT INTO `kec_detail` VALUES (5, 'Madukara');
INSERT INTO `kec_detail` VALUES (2, 'Mandiraja');
INSERT INTO `kec_detail` VALUES (16, 'Pagedongan');
INSERT INTO `kec_detail` VALUES (10, 'Pagentan');
INSERT INTO `kec_detail` VALUES (15, 'Pandanarum');
INSERT INTO `kec_detail` VALUES (11, 'Pejawaran');
INSERT INTO `kec_detail` VALUES (8, 'Punggelan');
INSERT INTO `kec_detail` VALUES (18, 'Purwanegara');
INSERT INTO `kec_detail` VALUES (1, 'Purworeja Klampok');
INSERT INTO `kec_detail` VALUES (7, 'Rakit');
INSERT INTO `kec_detail` VALUES (4, 'Sigaluh');
INSERT INTO `kec_detail` VALUES (17, 'Susukan');
INSERT INTO `kec_detail` VALUES (6, 'Wanadadi');
INSERT INTO `kec_detail` VALUES (13, 'Wanayasa');

-- ----------------------------
-- Table structure for kritik_saran
-- ----------------------------
DROP TABLE IF EXISTS `kritik_saran`;
CREATE TABLE `kritik_saran`  (
  `id_kritik` int(11) NOT NULL AUTO_INCREMENT,
  `kritik` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_kritik`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kritik_saran
-- ----------------------------
INSERT INTO `kritik_saran` VALUES (1, 'adad adada');
INSERT INTO `kritik_saran` VALUES (2, '');
INSERT INTO `kritik_saran` VALUES (3, '');
INSERT INTO `kritik_saran` VALUES (4, 'Dhdgdv');

-- ----------------------------
-- Table structure for rekap_bencana
-- ----------------------------
DROP TABLE IF EXISTS `rekap_bencana`;
CREATE TABLE `rekap_bencana`  (
  `id_rekap` int(11) NOT NULL AUTO_INCREMENT,
  `tgl_kejadian` date NULL DEFAULT NULL,
  `id_bencana_detail` int(11) NULL DEFAULT NULL,
  `nama_kk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `jumlah_jiwa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rt` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rw` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `id_desa_detail` int(11) NULL DEFAULT NULL,
  `rusak_berat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rusak_sedang` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rusak_ringan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `terancam` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `meninggal_dunia` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `luka_luka` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `kronologi` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `kerugian` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `gambar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `latitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `longitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id_rekap`) USING BTREE,
  INDEX `bencana_detail`(`id_bencana_detail`) USING BTREE,
  INDEX `desa_detail`(`id_desa_detail`) USING BTREE,
  CONSTRAINT `bencana_detail` FOREIGN KEY (`id_bencana_detail`) REFERENCES `bencana_detail` (`id_bencana_detail`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `des_kec_dtl` FOREIGN KEY (`id_desa_detail`) REFERENCES `desa_detail` (`id_desa_detail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rekap_bencana
-- ----------------------------
INSERT INTO `rekap_bencana` VALUES (1, '2022-01-01', 3, 'Nurdiyanto', '4', '5', '3', 190, NULL, NULL, NULL, '1', NULL, NULL, 'Terjadi bencana gerakan tanah jenis debris slide dan pensesaran susulan pada lokasi desa aribaya serta gerakan tanah susulan bebrapa titik lokasi . Pada wilayah pegunungan serayu utara, lokasi tersebut trdapat pada kelompok formasi rambatan merupakan daerah yang mempunyai morfologi perbukitan lereng sedang sampai lereng curam. Tersusun oleh pelapukan batuan breksi vulkanik, pasir tufaan, serpih, batu lempung. Daerah trsb dihuni warga desa yang mayoritas petani salak bercocok tanam disekitar wilayah tersebut', NULL, 'aribaya.png', '-7.3346617', '109.7538133', 1);
INSERT INTO `rekap_bencana` VALUES (2, '2022-01-06', 2, 'Nimron', '2', '1', '3', 64, NULL, '1', NULL, NULL, NULL, NULL, 'Sumber api kebakaran diduga dari tungku yang ditinggalkan saat memasak nasi. Api menjalar ke dinding rumàh non permanen ukuran 4 x 5 M yang terbuat dari kayu dan membakar seluruh bangunan bagian dapur habis terbakar.', 'Rp. 10.000.000', 'binorong.png', '-7.410847', '109.6075', 1);
INSERT INTO `rekap_bencana` VALUES (3, '2022-01-10', 3, 'Kamal', '4', '3', '4', 246, NULL, NULL, NULL, '1', NULL, NULL, 'Hujan yang mengakibatkan tanah longsor belakang rumah bpk Kamal dengan tinggi tebing 3m lebar 10m dan tidak ada korban jiwa maupun luka', NULL, 'binangun.png', '-7.217948', '109.635046', 0);
INSERT INTO `rekap_bencana` VALUES (4, '2022-01-11', 3, 'Misrun', '5', '5', '2', 247, NULL, NULL, '1', NULL, NULL, NULL, 'Hujan deras dengan intensitas tinggi yang mengguyur wilayah Kabupaten Banjarnegara bagian atas pada hari Selasa 11 Januari 2022 Sehingga talud yg semi permanen longsor', 'Rp. 21.000.000', 'asinan.png', '-7.27162', '109.65689', 0);
INSERT INTO `rekap_bencana` VALUES (5, '2022-01-11', 3, 'Tarmo', '5', '1', '1', 253, NULL, NULL, '1', NULL, NULL, NULL, 'Hujan yang cukup lebat dan pada saat Saksi 2 sedang derada di ruangan depan rumah, selanjutnya saksi 2 mendengar suara gemuruh dari belakang rumah, selanjutnya saksi 2 melihat ke arah belakang rumah di bagian dapur dan sudah terdapat longsoran tanah dari tebing di belakang rumah milik Saksi 1 dengan ukuran tinggi sekira 5 meter dan lebar sekira 7 meter, selajutnya saksi 2 memberitahukan peristiwa tersebut kepada Saksi 1 yang sedang berada di rumah saodaranya yang masih tinggal tidak jauh dari rumah saksi 1.', 'Rp. 7.250.000', 'kertosari.png', '-7.218212', '109.672551', 0);
INSERT INTO `rekap_bencana` VALUES (6, '2022-01-13', 3, 'Darmanto', '4', '1', '5', 256, NULL, NULL, '1', '', NULL, NULL, 'Hujan deras dengan intensitas tinggi yang mengguyur wilayah Kabupaten Banjarnegara bagian atas', NULL, 'gununglangit.png', '-7.209834', '109.629442', 0);
INSERT INTO `rekap_bencana` VALUES (7, '2022-01-11', 3, 'Hadi', '4', '1', '1', 250, NULL, NULL, '1', NULL, NULL, NULL, 'Curah hujan tinggi menyebabkan tebing longsor dan menimpa rumah milik Bapak Hadi sehingga tembok dapur jebol.', 'Rp.3.500.000', 'majatengah', '-7.222251', '109.64814', 0);
INSERT INTO `rekap_bencana` VALUES (8, '2022-01-11', 3, 'Sukiswo', '5', '1', '5', 268, NULL, '1', NULL, NULL, NULL, NULL, 'Intensitas hujan yang tinggi sehingga air sungai sokaraja Desa Pringamba meluap dan terjadi abrasi yang mengakibatkan talud pengaman rumah yang berada ditepian sungai sokaraja, talud berukuran +- P : 15 m dan L : 3 m mengalami ambruk dan mengancam rumah warga.', 'Rp. 30.000.000', 'pringamba.pnh', '-7.243883', '109.601042', 0);
INSERT INTO `rekap_bencana` VALUES (9, '2022-01-11', 3, 'Mundori', '4', '2', '1', 269, NULL, '1', NULL, NULL, NULL, NULL, 'Intensitas hujan yang tinggi memicu terjadinya talud pengaman rumah berukuran +- P : 15 m T : m ambruk, hal ini juga dipicu kurangnya suling2 pada Talud tersebut dan kurangnya penataan saluran pembuangan air rumah tangga.', 'Rp. 50.000.000', 'beji.png', '-7.252993', '109.603951', 0);
INSERT INTO `rekap_bencana` VALUES (10, '2022-01-14', 2, 'Priyono', '6', '1', '4', 237, NULL, '1', NULL, NULL, NULL, NULL, 'Pada pukul 11.00 wib pemilik dan beberapa karyawan meninggalkan ruang setelah selesai memproduksi tahu namun saat ditinggal untuk beristirahat bara api ditungku belum mati/padam seluruhnya.\r\nDimungkinkan percikan sisa bara api mengenai tumpukan kayu disamping tungku dan menimbulkan kobaran api yang kemudian menjalar keseluruh ruang produksi tahu.\r\nKobaran api baru diketahui oleh salah satu warga atas nama Ardi (33) yang baru pulang dari luar kota pada pukul 00.30 WIB kemudian saksi mata membangunkan warga untuk melakukan pemadaman dengan menggunakan peralatan seadanya. Pemadaman selesai pada pukul 02.00 WIB', 'Rp. 8.000.000', 'wanayasa.png', '-7.248573', '109.745965', 0);
INSERT INTO `rekap_bencana` VALUES (11, '2022-02-09', 1, 'danaraja', NULL, '4', '3', 48, NULL, NULL, NULL, '1', NULL, NULL, 'Hujan deras dengan intensitas tinggi dari jam 14:30 -16:00 mengakibatkan sebagian rumah warga di Desa Dieng kulon terendam banjir setinggi 30 - 50cm. Drainase yg kurang memadai menjadi penyebab meluapnya air', NULL, NULL, '-7.445817', '109.538561', 1);
INSERT INTO `rekap_bencana` VALUES (12, '2022-02-03', 1, 'Jl Prov', NULL, '1', '2', 226, NULL, NULL, NULL, '1', NULL, NULL, 'Hujan deras dengan intensitas tinggi dari jam 11:30 -15:00 mengakibatkan sebagian rumah warga di Desa Bakal terendam banjir setinggi 30 - 50cm. Drainase yg kurang memadai menjadi penyebab meluapnya air dari selokan warga & aliran air dari gunung.', NULL, NULL, '-7.2196788', '109.8788694', 0);
INSERT INTO `rekap_bencana` VALUES (13, '2022-01-09', 1, 'Jl Desa', NULL, '1', '4', 225, NULL, NULL, NULL, '1', NULL, NULL, 'Hujan deras dengan intensitas tinggi dari jam 14:30 -16:00 mengakibatkan sebagian rumah warga di Desa Kepakisan terendam banjir setinggi 30 - 50cm. Drainase yg kurang memadai menjadi penyebab meluapnya air dari selokan warga & aliran air dari gunung.', NULL, NULL, '-7.1985662', '109.8741785', 1);
INSERT INTO `rekap_bencana` VALUES (14, '2022-02-09', 5, 'Rumah Warga', NULL, '1', '1', 270, NULL, NULL, NULL, '1', NULL, NULL, NULL, NULL, NULL, '-7.438977', '109.681291', 0);
INSERT INTO `rekap_bencana` VALUES (15, '2022-01-26', 2, 'Sugianto', '6', '1', '4', 145, NULL, NULL, '1', NULL, NULL, NULL, 'Sekitar pukul 20:20 Wib .warga melihat api di samping rumahnya pak sugianto ,kemudian berteriak,serta melakukan pemadaman dengan menyiram air dari kolam dibantu oleh warga sekitar.', 'Rp. 1.750.000', 'linggasari.png', '-7.374762', '109.658307', 1);
INSERT INTO `rekap_bencana` VALUES (17, '2022-01-01', 2, '$nama_kk', '$jumlah_jiwa', '$rt', '$rw', 1, '$rusak_berat', '$rusak_sedang', '$rusak_ringan', '$terancam', '$meninggal_dunia', '$luka_luka', '$kronologi', '$kerugian', '$file', '$lat', '$lng', 0);
INSERT INTO `rekap_bencana` VALUES (18, '2022-11-29', 2, 'Afs', '5', '58', '8', 8, '2', '0', '5', '22', '1', '8', 'Zjfdgv', '805698', 'rn_image_picker_lib_temp_046e5ffc-7a67-4b4b-90cb-aa22399eb73f.jpg', '-7.40494322010039', '109.28081374615431', 0);
INSERT INTO `rekap_bencana` VALUES (19, '2022-11-29', 2, 'Afs', '5', '58', '8', 8, '2', '0', '5', '22', '1', '8', 'Zjfdgv', '805698', 'rn_image_picker_lib_temp_046e5ffc-7a67-4b4b-90cb-aa22399eb73f.jpg', '-7.40494322010039', '109.28081374615431', 0);
INSERT INTO `rekap_bencana` VALUES (20, '2022-11-29', 2, 'Afs', '5', '58', '8', 8, '2', '0', '5', '22', '1', '8', 'Zjfdgv', '805698', 'rn_image_picker_lib_temp_046e5ffc-7a67-4b4b-90cb-aa22399eb73f.jpg', '-7.40494322010039', '109.28081374615431', 0);
INSERT INTO `rekap_bencana` VALUES (21, '2022-11-29', 3, 'ada', '5', '6', '8', 12, '5', '0', '0', '1', '3', '0', 'dadadqd', '225452', 'rn_image_picker_lib_temp_d3c95cab-d097-4150-b535-984b3f0a0027.jpg', '-7.500173762828205', '109.3794583529234', 0);
INSERT INTO `rekap_bencana` VALUES (22, '2022-11-29', 3, 'ada', '5', '6', '8', 12, '5', '0', '0', '1', '3', '0', 'dadadqd', '225452', 'rn_image_picker_lib_temp_d3c95cab-d097-4150-b535-984b3f0a0027.jpg', '-7.500173762828205', '109.3794583529234', 0);
INSERT INTO `rekap_bencana` VALUES (23, '2022-11-29', 3, 'ada', '5', '6', '8', 12, '5', '0', '0', '1', '3', '0', 'dadadqd', '225452', 'rn_image_picker_lib_temp_d3c95cab-d097-4150-b535-984b3f0a0027.jpg', '-7.500173762828205', '109.3794583529234', 0);
INSERT INTO `rekap_bencana` VALUES (24, '2022-11-10', 2, 'ada', '5', '6', '8', 8, '5', '0', '0', '0', '0', '9', 'Agsf', '82000', 'rn_image_picker_lib_temp_9a4ac5ad-eadb-4b3c-afdb-a6a829b313fb.jpg', '-7.501734081588775', '109.3766239285469', 0);
INSERT INTO `rekap_bencana` VALUES (25, '2022-11-10', 2, 'ada', '5', '6', '8', 8, '5', '0', '0', '0', '0', '9', 'Agsf', '82000', 'rn_image_picker_lib_temp_9a4ac5ad-eadb-4b3c-afdb-a6a829b313fb.jpg', '-7.501734081588775', '109.3766239285469', 0);
INSERT INTO `rekap_bencana` VALUES (26, '2022-11-10', 2, 'ada', '5', '6', '8', 8, '5', '0', '0', '0', '0', '9', 'Agsf', '82000', 'rn_image_picker_lib_temp_9a4ac5ad-eadb-4b3c-afdb-a6a829b313fb.jpg', '-7.501734081588775', '109.3766239285469', 0);
INSERT INTO `rekap_bencana` VALUES (27, '2022-11-10', 2, 'ada', '5', '6', '8', 8, '5', '0', '0', '0', '0', '9', 'Agsf', '82000', 'rn_image_picker_lib_temp_9a4ac5ad-eadb-4b3c-afdb-a6a829b313fb.jpg', '-7.501734081588775', '109.3766239285469', 0);
INSERT INTO `rekap_bencana` VALUES (28, '2022-11-10', 2, 'ada', '5', '6', '8', 8, '5', '0', '0', '0', '0', '9', 'Agsf', '82000', 'rn_image_picker_lib_temp_9a4ac5ad-eadb-4b3c-afdb-a6a829b313fb.jpg', '-7.501734081588775', '109.3766239285469', 0);
INSERT INTO `rekap_bencana` VALUES (29, '0000-00-00', 2, 'ada', '31', '3', '12', 121, '58', '2', '2', '3', '0', '0', 'adqdasd', '124124', 'rn_image_picker_lib_temp_081dcdca-7c7a-4ad3-9774-82ce6eee6862.jpg', '-7.50033065921563', '109.37683012336493', 0);
INSERT INTO `rekap_bencana` VALUES (30, '0000-00-00', 2, 'ada', '31', '3', '12', 121, '58', '2', '2', '3', '0', '0', 'adqdasd', '124124', 'rn_image_picker_lib_temp_081dcdca-7c7a-4ad3-9774-82ce6eee6862.jpg', '-7.50033065921563', '109.37683012336493', 0);
INSERT INTO `rekap_bencana` VALUES (31, '2022-12-01', 2, 'Tf', '8', '6', '0', 124, '6', '5', '6', '3', '5', '2', 'Dgf', '25', 'rn_image_picker_lib_temp_3cdffbfc-c9b9-488d-8fa6-fa268d092005.jpg', '-7.501739400092237', '109.3766138702631', 0);

SET FOREIGN_KEY_CHECKS = 1;
