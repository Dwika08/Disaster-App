/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MariaDB
 Source Server Version : 100414
 Source Host           : localhost:3306
 Source Schema         : aplikasi

 Target Server Type    : MariaDB
 Target Server Version : 100414
 File Encoding         : 65001

 Date: 19/11/2022 14:33:45
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

-- ----------------------------
-- Table structure for desa_detail
-- ----------------------------
DROP TABLE IF EXISTS `desa_detail`;
CREATE TABLE `desa_detail`  (
  `id_desa_detail` int(11) NOT NULL AUTO_INCREMENT,
  `desa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `kecamatan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_desa_detail`) USING BTREE,
  INDEX `kecamatan`(`kecamatan`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 324 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of desa_detail
-- ----------------------------
INSERT INTO `desa_detail` VALUES (1, 'Berta', 'Susukan');
INSERT INTO `desa_detail` VALUES (2, 'Derik', 'Susukan');
INSERT INTO `desa_detail` VALUES (3, 'Gumelem Wetan', 'Susukan');
INSERT INTO `desa_detail` VALUES (4, 'Gumelem Kulon', 'Susukan');
INSERT INTO `desa_detail` VALUES (5, 'Penarusan Wetan', 'Susukan');
INSERT INTO `desa_detail` VALUES (6, 'Penarusan Kulon', 'Susukan');
INSERT INTO `desa_detail` VALUES (7, 'Brengkok', 'Susukan');
INSERT INTO `desa_detail` VALUES (8, 'Pekikiran', 'Susukan');
INSERT INTO `desa_detail` VALUES (9, 'Piasa Wetan', 'Susukan');
INSERT INTO `desa_detail` VALUES (10, 'Karangsalam', 'Susukan');
INSERT INTO `desa_detail` VALUES (11, 'Kemranggon', 'Susukan');
INSERT INTO `desa_detail` VALUES (12, 'Susukan', 'Susukan');
INSERT INTO `desa_detail` VALUES (13, 'Dermasari', 'Susukan');
INSERT INTO `desa_detail` VALUES (14, 'Kedawung', 'Susukan');
INSERT INTO `desa_detail` VALUES (15, 'Karangjati', 'Susukan');
INSERT INTO `desa_detail` VALUES (16, 'Pagak', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (17, 'Kaliwinasuh', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (18, 'Sirkandi', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (19, 'Kecitran', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (20, 'Kalilandak', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (21, 'Purwareja', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (22, 'Kalimandi', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (23, 'Klampok', 'Purworeja Klampok');
INSERT INTO `desa_detail` VALUES (24, 'Jalatunda', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (25, 'Somawangi', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (26, 'Kaliwungu', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (27, 'Kebanaran', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (28, 'Glempang', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (29, 'Salamerta', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (30, 'Purwasaba', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (31, 'Blimbing', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (32, 'Panggisari', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (33, 'Candiwulan', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (34, 'Simbang', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (35, 'Kertayasa', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (36, 'Banjengan', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (37, 'Mandiraja Kulon', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (38, 'Kebakalan', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (39, 'Mandiraja Wetan', 'Mandiraja');
INSERT INTO `desa_detail` VALUES (40, 'Kalitengah', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (41, 'Merden', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (42, 'Karanganyar', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (43, 'Kaliajir', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (44, 'petir', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (45, 'Pucungbedug', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (46, 'Parakan', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (47, 'Mertasari', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (48, 'Danaraja', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (49, 'Purwonegoro', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (50, 'Kalipelus', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (51, 'Gumiwang', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (52, 'Kutawuluh', 'Purwanegara');
INSERT INTO `desa_detail` VALUES (53, 'Wanadri', 'Bawang');
INSERT INTO `desa_detail` VALUES (54, 'Kebondalem', 'Bawang');
INSERT INTO `desa_detail` VALUES (55, 'Majalengka', 'Bawang');
INSERT INTO `desa_detail` VALUES (56, 'Wiramastra', 'Bawang');
INSERT INTO `desa_detail` VALUES (57, 'Kutayasa', 'Bawang');
INSERT INTO `desa_detail` VALUES (58, 'Winong', 'Bawang');
INSERT INTO `desa_detail` VALUES (59, 'Depok', 'Bawang');
INSERT INTO `desa_detail` VALUES (60, 'Watuurip', 'Bawang');
INSERT INTO `desa_detail` VALUES (61, 'Masaran', 'Bawang');
INSERT INTO `desa_detail` VALUES (62, 'Serang', 'Bawang');
INSERT INTO `desa_detail` VALUES (63, 'Mantrianom', 'Bawang');
INSERT INTO `desa_detail` VALUES (64, 'Binorong', 'Bawang');
INSERT INTO `desa_detail` VALUES (65, 'Joho', 'Bawang');
INSERT INTO `desa_detail` VALUES (66, 'Bawang', 'Bawang');
INSERT INTO `desa_detail` VALUES (67, 'Bandingan', 'Bawang');
INSERT INTO `desa_detail` VALUES (68, 'Blambangan', 'Bawang');
INSERT INTO `desa_detail` VALUES (69, 'Gemuruh', 'Bawang');
INSERT INTO `desa_detail` VALUES (70, 'Pucang', 'Bawang');
INSERT INTO `desa_detail` VALUES (71, 'Argasoka', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (72, 'Karangtengah', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (73, 'Wangon', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (74, 'Semampir', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (75, 'Sokanandi', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (76, 'Parakancanggah', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (77, 'Semarang', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (78, 'Krandegan', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (79, 'Kutabanjarnegara', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (80, 'Ampelsari', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (81, 'Tlagawera', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (82, 'Cendana', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (83, 'Sokayasa', 'Banjarnegara');
INSERT INTO `desa_detail` VALUES (84, 'Kalibenda', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (85, 'Pringamba', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (86, 'sawal', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (87, 'Panawaren', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (88, 'Tunggara', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (89, 'Randegan', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (90, 'Bojanegara', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (91, 'Bandingan', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (92, 'Prigi', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (93, 'Gembongan', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (94, 'Kemiri', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (95, 'Karangmangu', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (96, 'Wanacipta', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (97, 'Sigaluh', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (98, 'Singamerta', 'Sigaluh');
INSERT INTO `desa_detail` VALUES (99, 'Kenteng', 'Madukara');
INSERT INTO `desa_detail` VALUES (100, 'Rejasa', 'Madukara');
INSERT INTO `desa_detail` VALUES (101, 'Limbangan', 'Madukara');
INSERT INTO `desa_detail` VALUES (102, 'Penawangan', 'Madukara');
INSERT INTO `desa_detail` VALUES (103, 'Talunamba', 'Madukara');
INSERT INTO `desa_detail` VALUES (104, 'Madukara', 'Madukara');
INSERT INTO `desa_detail` VALUES (105, 'Kutayasa', 'Madukara');
INSERT INTO `desa_detail` VALUES (106, 'Pekauman', 'Madukara');
INSERT INTO `desa_detail` VALUES (107, 'Pagelak', 'Madukara');
INSERT INTO `desa_detail` VALUES (108, 'Dawuhan', 'Madukara');
INSERT INTO `desa_detail` VALUES (109, 'Bantarwaru', 'Madukara');
INSERT INTO `desa_detail` VALUES (110, 'Sered', 'Madukara');
INSERT INTO `desa_detail` VALUES (111, 'Petambakan', 'Madukara');
INSERT INTO `desa_detail` VALUES (112, 'Rakitan', 'Madukara');
INSERT INTO `desa_detail` VALUES (113, 'Blitar', 'Madukara');
INSERT INTO `desa_detail` VALUES (114, 'Kaliurip', 'Madukara');
INSERT INTO `desa_detail` VALUES (115, 'Karanganyar', 'Madukara');
INSERT INTO `desa_detail` VALUES (116, 'Gununggiana', 'Madukara');
INSERT INTO `desa_detail` VALUES (117, 'Clapar', 'Madukara');
INSERT INTO `desa_detail` VALUES (118, 'Pakelen', 'Madukara');
INSERT INTO `desa_detail` VALUES (119, 'Jenggawur', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (120, 'Banjarkulon', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (121, 'Banjarmangu', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (122, 'Rejasari', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (123, 'Kesenet', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (124, 'Kalilunjar', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (125, 'Sijeruk', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (126, 'Kendaga', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (127, 'Gripit', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (128, 'Pekandangan', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (129, 'Sigeblog', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (130, 'Paseh', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (131, 'Sipedang', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (132, 'Sijenggung', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (133, 'Beji', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (134, 'Prendengan', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (135, 'Majatengah', 'Banjarmangu');
INSERT INTO `desa_detail` VALUES (136, 'Kasilib', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (137, 'Tapen', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (138, 'Karangjambe', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (139, 'Wanadadi', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (140, 'Wanakarsa', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (141, 'Lemahjaya', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (142, 'Karangkemiri', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (143, 'Kandangwangi', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (144, 'Medayu', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (145, 'Linggasari', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (146, 'Gumingsir', 'Wanadadi');
INSERT INTO `desa_detail` VALUES (147, 'Pingit', 'Rakit');
INSERT INTO `desa_detail` VALUES (148, 'Situwangi', 'Rakit');
INSERT INTO `desa_detail` VALUES (149, 'Gelang', 'Rakit');
INSERT INTO `desa_detail` VALUES (150, 'Rakit', 'Rakit');
INSERT INTO `desa_detail` VALUES (151, 'Adipasir', 'Rakit');
INSERT INTO `desa_detail` VALUES (152, 'Bandingan', 'Rakit');
INSERT INTO `desa_detail` VALUES (153, 'Kincang', 'Rakit');
INSERT INTO `desa_detail` VALUES (154, 'Badamita', 'Rakit');
INSERT INTO `desa_detail` VALUES (155, 'Tanjunganom', 'Rakit');
INSERT INTO `desa_detail` VALUES (156, 'Luwung', 'Rakit');
INSERT INTO `desa_detail` VALUES (157, 'Lengkong', 'Rakit');
INSERT INTO `desa_detail` VALUES (158, 'Sambong', 'Punggelan');
INSERT INTO `desa_detail` VALUES (159, 'Danakerta', 'Punggelan');
INSERT INTO `desa_detail` VALUES (160, 'Klapa', 'Punggelan');
INSERT INTO `desa_detail` VALUES (161, 'Kecepit', 'Punggelan');
INSERT INTO `desa_detail` VALUES (162, 'Karangsari', 'Punggelan');
INSERT INTO `desa_detail` VALUES (163, 'Tribuana', 'Punggelan');
INSERT INTO `desa_detail` VALUES (164, 'Sawangan', 'Punggelan');
INSERT INTO `desa_detail` VALUES (165, 'Sidarata', 'Punggelan');
INSERT INTO `desa_detail` VALUES (166, 'Badakarya', 'Punggelan');
INSERT INTO `desa_detail` VALUES (167, 'Punggelan', 'Punggelan');
INSERT INTO `desa_detail` VALUES (168, 'Jembangan', 'Punggelan');
INSERT INTO `desa_detail` VALUES (169, 'Purwasana', 'Punggelan');
INSERT INTO `desa_detail` VALUES (170, 'Petuguran', 'Punggelan');
INSERT INTO `desa_detail` VALUES (171, 'Bondolharjo', 'Punggelan');
INSERT INTO `desa_detail` VALUES (172, 'Tanjungtirta', 'Punggelan');
INSERT INTO `desa_detail` VALUES (173, 'Tlaga', 'Punggelan');
INSERT INTO `desa_detail` VALUES (174, 'Mlaya', 'Punggelan');
INSERT INTO `desa_detail` VALUES (175, 'Paweden', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (176, 'Gumelar', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (177, 'Purwodadi', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (178, 'Sampang', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (179, 'Slatri', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (180, 'Pagerpelah', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (181, 'Pasuruhan', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (182, 'Karanggondang', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (183, 'Jlegong', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (184, 'Ambal', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (185, 'Binangun', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (186, 'Karangkobar', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (187, 'Leksana', 'Karangkobar');
INSERT INTO `desa_detail` VALUES (188, 'Larangan', 'Pagentan');
INSERT INTO `desa_detail` VALUES (189, 'Karangnangka', 'Pagentan');
INSERT INTO `desa_detail` VALUES (190, 'Aribaya', 'Pagentan');
INSERT INTO `desa_detail` VALUES (191, 'Nagasari', 'Pagentan');
INSERT INTO `desa_detail` VALUES (192, 'Gumingsir', 'Pagentan');
INSERT INTO `desa_detail` VALUES (193, 'Sokaraja', 'Pagentan');
INSERT INTO `desa_detail` VALUES (194, 'Kayuares', 'Pagentan');
INSERT INTO `desa_detail` VALUES (195, 'Metawana', 'Pagentan');
INSERT INTO `desa_detail` VALUES (196, 'Kalitlaga', 'Pagentan');
INSERT INTO `desa_detail` VALUES (197, 'Karekan', 'Pagentan');
INSERT INTO `desa_detail` VALUES (198, 'Plumbungan', 'Pagentan');
INSERT INTO `desa_detail` VALUES (199, 'Pagentan', 'Pagentan');
INSERT INTO `desa_detail` VALUES (200, 'Kasmaran', 'Pagentan');
INSERT INTO `desa_detail` VALUES (201, 'Majasari', 'Pagentan');
INSERT INTO `desa_detail` VALUES (202, 'Babadan', 'Pagentan');
INSERT INTO `desa_detail` VALUES (203, 'Tegaljeruk', 'Pagentan');
INSERT INTO `desa_detail` VALUES (204, 'Kalilunjar', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (205, 'Karangsari', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (206, 'Sarwodadi', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (207, 'Grogol', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (208, 'Giritirta', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (209, 'Biting', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (210, 'Tlahab', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (211, 'Darmayasa', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (212, 'Pejawaran', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (213, 'Penusupan', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (214, 'Ratamba', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (215, 'Sidengok', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (216, 'Pegundungan', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (217, 'Beji', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (218, 'Semangkung', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (219, 'Condongcampur', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (220, 'Gembol', 'Pejawaran');
INSERT INTO `desa_detail` VALUES (221, 'Batur', 'Batur');
INSERT INTO `desa_detail` VALUES (222, 'Sumberejo', 'Batur');
INSERT INTO `desa_detail` VALUES (223, 'Pasurenan', 'Batur');
INSERT INTO `desa_detail` VALUES (224, 'Pekasiran', 'Batur');
INSERT INTO `desa_detail` VALUES (225, 'Kepakisan', 'Batur');
INSERT INTO `desa_detail` VALUES (226, 'Bakal', 'Batur');
INSERT INTO `desa_detail` VALUES (227, 'Karangtengah', 'Batur');
INSERT INTO `desa_detail` VALUES (228, 'Dieng Kulon', 'Batur');
INSERT INTO `desa_detail` VALUES (229, 'Karangtengah', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (230, 'Suwidak', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (231, 'Bantar', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (232, 'Pandansari', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (233, 'Pagergunung', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (234, 'Dawuhan', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (235, 'Kubang', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (236, 'Susukan', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (237, 'Wanayasa', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (238, 'Pesantren', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (239, 'Balun', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (240, 'Tempuran', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (241, 'Wanaraja', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (242, 'Jatilawang', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (243, 'Legoksayem', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (244, 'Kasimpar', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (245, 'Penanggungan', 'Wanayasa');
INSERT INTO `desa_detail` VALUES (246, 'Kalibening', 'Kalibening');
INSERT INTO `desa_detail` VALUES (247, 'Asinan', 'Kalibening');
INSERT INTO `desa_detail` VALUES (248, 'Sembawa', 'Kalibening');
INSERT INTO `desa_detail` VALUES (249, 'Kalibombong', 'Kalibening');
INSERT INTO `desa_detail` VALUES (250, 'Majatengah', 'Kalibening');
INSERT INTO `desa_detail` VALUES (251, 'Kalisat Kidul', 'Kalibening');
INSERT INTO `desa_detail` VALUES (252, 'Sirukem', 'Kalibening');
INSERT INTO `desa_detail` VALUES (253, 'Kertosari', 'Kalibening');
INSERT INTO `desa_detail` VALUES (254, 'Sidakangen', 'Kalibening');
INSERT INTO `desa_detail` VALUES (255, 'Sikumpul', 'Kalibening');
INSERT INTO `desa_detail` VALUES (256, 'Gununglangit', 'Kalibening');
INSERT INTO `desa_detail` VALUES (257, 'Bedana', 'Kalibening');
INSERT INTO `desa_detail` VALUES (258, 'Sirukun', 'Kalibening');
INSERT INTO `desa_detail` VALUES (259, 'Karanganyar', 'Kalibening');
INSERT INTO `desa_detail` VALUES (260, 'Plorengan', 'Kalibening');
INSERT INTO `desa_detail` VALUES (261, 'Kasinoman', 'Kalibening');
INSERT INTO `desa_detail` VALUES (262, 'Pandanarum', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (263, 'Sinduaji', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (264, 'Pasegeran', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (265, 'Pingit Lor', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (266, 'Lawen', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (267, 'Sirongge', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (268, 'Pringamba', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (269, 'Beji', 'Pandanarum');
INSERT INTO `desa_detail` VALUES (270, 'Pagedongan', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (271, 'Gunungjati', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (272, 'Twelagiri', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (273, 'kebutuhduwur', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (274, 'Kebutuhjurang', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (275, 'Pesangkalan', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (276, 'Duren', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (277, 'Lebakwangi', 'Pagedongan');
INSERT INTO `desa_detail` VALUES (278, 'Gentansari', 'Pagedongan');

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
-- Table structure for tbl_bencana
-- ----------------------------
DROP TABLE IF EXISTS `tbl_bencana`;
CREATE TABLE `tbl_bencana`  (
  `id_bencana` int(11) NOT NULL AUTO_INCREMENT,
  `id_bencana_detail` int(11) NULL DEFAULT NULL,
  `tgl_bencana` date NULL DEFAULT NULL,
  `id_desa_detail` int(11) NULL DEFAULT NULL,
  `penyebab_kejadian` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `rusak_ringan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rusak_sedang` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `rusak_berat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `md` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `lb` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `pengungsi_jiwa` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `pengungsi_kk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `nama_pelapor` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tlp_darurat` char(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `kondisi_umum` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `tindakan` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `kendala` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `gambar` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `latitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `longitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `status` int(11) NULL DEFAULT 0,
  PRIMARY KEY (`id_bencana`) USING BTREE,
  INDEX `desa`(`id_desa_detail`) USING BTREE,
  INDEX `bcn_detail`(`id_bencana_detail`) USING BTREE,
  CONSTRAINT `bcn_detail` FOREIGN KEY (`id_bencana_detail`) REFERENCES `bencana_detail` (`id_bencana_detail`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `desa` FOREIGN KEY (`id_desa_detail`) REFERENCES `desa_detail` (`id_desa_detail`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 219 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tbl_bencana
-- ----------------------------
INSERT INTO `tbl_bencana` VALUES (4, 3, '2021-01-12', 41, 'Hujan intensitas sedang hingga lebat dan berdurasi panjang menjadi salah satu pemicu terjadinya longsor', NULL, '', '', NULL, NULL, NULL, '2', '1', 'Suprihno', NULL, '- Hujan intensitas sedang hingga lebat dan berdurasi panjang menjadi salah satu pemicu terjadinya longsor', 'Tindakan yang sudah dilakukan\r\n- Pelaporan awal\r\n- Tim BPBD melaksanakan Asesment\r\n- Koordinasi dengan Pemerintah Desa dan Destana\r\n\r\nSaran tindak lanjut\r\n- Evakuasi pembersihan material longsor\r\n- Mengalihkan dan mengendalikan aliran air hujan tidak mengarah ke tebing longsor\r\n- Menutup tebing longsor dengan terpal\r\n- Mengeringkan dan menutup Kolam ikan yang berada di atas tebing\r\n- Pemangkasan tebing secara teras iring\r\n- Menghimbau kepada pemilik rumah untuk selalu waspada saat musim hujan dan mengungsi sementara ketika situasi menghawatirkan', '1. Kebutuhan\r\n- Alkon untuk pembersihan material longsor\r\n- Terpal untuk penutup tebing longsor\r\n- Tenaga sukarelawan untuk kerjabhakti\r\n- Logistik permakanan untuk kerjabakti\r\n2. Potensi ancaman\r\nMasih bisa terjadi longsor susulan selama musim penghujan\r\n3. Kebutuhan\r\n- Alkon untuk pembersihan material longsor\r\n- Terpal untuk penutup tebing longsor\r\n- Tenaga sukarelawan untuk kerjabhakti\r\n- Logistik permakanan untuk kerjabakti', '', '-7.4756263', '109.4706236', 0);
INSERT INTO `tbl_bencana` VALUES (5, 3, '2021-01-12', 44, ' Instensitas hujan dari siang sampai malam sehingga mengakibatkan tebing samping rumah longsor dengan ketinggian tebing sekitar 15 meter.', NULL, '1 Rumah', NULL, NULL, NULL, NULL, '', NULL, 'Bapak Ratun kasi kesra desa petir', '0852-2652-2211', 'Terjadi tanah longsor menimpa sebagian dapur rumah Bpk. Murtajah/Ibu lani di karenakan instensitas hujan dari siang sampai malam sehingga mengakibatkan tebing samping rumah longsor dengan ketinggian tebing sekitar 15 meter.', 'Babinsa Serka Andri berkordinasi bersama BPK Lurah pihak RT/RW. Beserta masyarakat setempat Dan melaporkan ke Komandan Ramil 08/Pwg. Lettu Inf Bahrul Anam.', NULL, '', '-7.4841662', '109.5172662', 0);
INSERT INTO `tbl_bencana` VALUES (6, 3, '2021-01-12', 270, 'Hujan intensitas sedang hingga lebat ', '1 Rumah', '1 Rumah', '1 Rumah', NULL, NULL, NULL, '7', '2', 'Daryoto', NULL, 'Hujan intensitas sedang hingga lebat terjadi sejak pukul 16.00, WIB mengakibatkan tebing setinggi 8m longsor.', 'Tindakan yang sudah dilakukan\r\n- Pelaporan awal\r\n- Tim BPBD melaksanakan Asesment\r\n- Koordinasi dengan Pemerintah Desa\r\nSARAN TINDAK LANJUT\r\n- Evakuasi pembersihan material longsor\r\n- Menutup tebing longsor dengan terpal\r\n- Menghimbau kepada pemilik rumah untuk selalu waspada saat musim hujan dan mengungsi sementara.', 'KEBUTUHAN\r\n- Tenaga sukarelawan untuk kerja bakti\r\n- Logistik permakanan untuk kerja bakti\r\nPOTENSI ANCAMAN\r\nMasih bisa terjadi longsor susulan', '', '-7.4380619', '109.6746419', 0);
INSERT INTO `tbl_bencana` VALUES (7, 3, '2021-01-15', 246, 'Hujan Dengan Itensitas Lebat Mengakibatkan\r\nRetakan tanah', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 'pak kades kalibening', '081326405042', '- Hujan Dengan Itensitas Lebat Mengakibatkan\r\nRetakan tanah di lahan Ratno RT 02/06 dan pak Sutono RT 01/02 dusun mangunan', '- Assestment Pada Lokasi Kejadian\r\n- pemasanganEWS', 'Saran TL / Kebutuhan\r\n- Kajian geologi terkait lumpur hitam dan mata air baru\r\nPotensi Ancaman\r\nApa bila terjadi hujan lebat masih bisa terjadi pergerakan tanah susulan', '', '-7.2389571', '109.5626442', 0);
INSERT INTO `tbl_bencana` VALUES (41, 3, '2021-03-02', 247, 'karena adanya pergerakan tanah dan bangunan yang sudah mengalami pelapukan.', '1 Rumah', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Heru Purwoko ( kades )', '081325587322', 'Pada hari selasa ( 2/3/21), pada pukul 09.30 Wib, bangunan rumah atas nama Bp.Tusman ( 52/ 6 jiwa /2 KK), mengalami kerusakan.\r\nKerusakan terjadi pada unit rumah bagian dapur dan kamar mandi dengan luas bangunan rusak 5 x 6 m.\r\nKejadian disebabkan karena adanya pergerakan tanah dan bangunan yang sudah mengalami pelapukan.', 'Tindakan yang sudah dilakukan\r\n- Melakukan asesment\r\n- Distribusi logistik permakanan dan non makanan antara lain :\r\nBeras 5 kg\r\nMie instant 1 dus\r\nPeralatan makan 2 box\r\nKecap 2 botol\r\nGula 2 kg\r\nMinyak goreng 2 ltr\r\n\r\n- Pembersihan material longsor oleh warga.\r\n- Pembangunan talud kembali oleh pemilik rumah secara mandiri\r\n- Himbauan kepada pemilik rumah untuk meningkatkan kewaspadaan mengingat curah hujan masih tinggi', 'Kebutuhan\r\n- Diusulkan Bansos', '', '-7.2664689', '109.5775231', 0);
INSERT INTO `tbl_bencana` VALUES (43, 3, '2021-03-07', 272, 'Hujan intensitas sedang hingga lebat ', '1 Rumah', NULL, NULL, NULL, NULL, NULL, '', NULL, 'Kades Twelagiri', '+6285327225224', 'Hujan intensitas sedang hingga lebat Yang Terjadi di wilayah Desa Twelagiri kec.pagedongan mengakibatkan talud setinggi -+10meter Lebar -+6 meter longsor menimpa dapur rumah milik Bpk kirno 55th,Serta Mengancam 2 Unit Rumah Milik Bpk Kusen Dan Bpk Admin', '-Pelaporan kejadian ,oleh Pemdes Twelagiri\r\n-Asesmen oleh petugas BPBD\r\n-Himbauan oleh petugas BPBD', 'Kebutuhan\r\n-Koordinasi Dengan Pihak Pemdes\r\n-logistik permakanan dan Peralatan Dapur serta Terpal\r\n-chainsaw\r\n\r\nPotensi Ancaman\r\nCurah hujan masih tinggi serta Saluran/Drainese yang tidak terkondisikan dg baik dapat mengakibatkan terjadinya longsor susulan.', '', '-7.4176915', '109.6108168', 1);
INSERT INTO `tbl_bencana` VALUES (109, 3, '2021-12-21', 42, 'Hujan intensitas sedang hingga lebat terjadi di wilayah tersebut dengan durasi yang cukup lama.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Mahmudin/ Kades', '085290034100', 'Hujan intensitas sedang hingga lebat terjadi di wilayah kec Purwanegara dengan durasi yang lama.\r\nTerjadi tanah longsor di beberapa titik akses penghubung antar dusun.', 'Warga masyarakat bergotongroyong membuka ases secara manual untuk membuka jalur KR 2.\r\nKerja bakti pembersihan dan penanganan menggunakan alat berat karena akses jalan utama, jika hujan lebat bisa terjadi longsor susulan / putus total karena karena tanah labil dan membentuk tapal kuda\r\n', '', '', '-7.4765314', '109.4875121', 0);
INSERT INTO `tbl_bencana` VALUES (111, 3, '2021-12-23', 212, 'Hujan intensitas sedang hingga lebat terjadi di wilayah tersebut dengan durasi yang cukup lama.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Suryono', NULL, 'Hujan intensitas sedang hingga lebat terjadi di wilayah Pejawaran, sehingga talud belakang rumah mengalami longsoran setinggi -+3 meter mengalami abrasi dan menyebabkan bagian bangunan tembok bagian belakang rumah dengan kerusakan 15%.', '- Pelaporan kepada instansi terkait.\r\n- Asesmen\r\n- Koordinasi dengan Pemerintah Desa Pejawaran\r\n- Kerja bakti pembuatan talud yang dilakukan oleh masyarakat sekitar\r\n- Pemberian Logistik Bahan Bangunan dan Sembako', NULL, '', '-7.2590162', '109.741678', 0);
INSERT INTO `tbl_bencana` VALUES (112, 3, '2021-12-28', 251, 'Hujan intensitas sedang hingga lebat terjadi di wilayah tersebut dengan durasi yang cukup lama.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Alam syah tri Putra', NULL, 'Akibat hujan deras yang mengguyur wilayah Kec. Kalibening selama -+3 jam mengakibatkan tebing setinggi 5m longsor menimpa tembok rumah a/n Bpk. Anggit (Kalisat Kidul 01/04) sehingga mengakibatkan tembok rumah retak.', '- Cek lokasi\r\n- Kerja Bakti untuk pembersihanTanah longsor', NULL, '', '-7.2482944', '109.6258821', 0);
INSERT INTO `tbl_bencana` VALUES (121, 4, '2021-04-03', 208, 'Hujan intensitas sedang hingga lebat disertai angin kencang, sehingga mengakibatkan Pohon Tumbang', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, 'Sunanto (Pemilik Rumah)', NULL, 'Karena angin kencang yang terjadi sejak tadi pagi mengakibatkan longsor rumpun bambu menimpa rumah milik Bpk.Sunanto dan Bpk.Nikmat (rumah di huni 2KK berjumlah 5jiwa)', '-Melaporkan kepada instansi terkait.\r\n-Assestment\r\n-Pembersihan rumpun bambu oleh warga\r\n-Giat kerja bakti oleh warga sekitar', 'Kebutuhan\r\n- Akan di lakukan kerja bakti besok pada tanggal 04-04-2021\r\n- Logistik permakanan untuk kerja bakti\r\n- Alat dapur, Seng, Kalsibot, Kaso/Reng kayu\r\nPotensi Ancaman\r\n- Masih memungkinkan longsor karena kayu besar di sekitar rumah karena angin kencang.', '', '-7.2519632', '109.7151709', 0);
INSERT INTO `tbl_bencana` VALUES (122, 4, '2021-04-03', 240, 'Hujan intensitas sedang hingga lebat disertai angin kencang, sehingga mengakibatkan Pohon Tumbang', NULL, '1 Rumah', NULL, NULL, NULL, NULL, '', NULL, 'Sukirno (Perangkat Desa)', NULL, 'Akibat angin kencang yang terjadi dari sekitar pukul 01.00 WIB dini hari sampai saat ini mengakibatkan atap rumah Bp Sutrino (6jiwa) terlepas dari kerangka bangunan.', '- Evakuasi material yang masih bisa di gunakan.\r\n- Evakuasi barang2 perabot\r\n- Perbaikan atap rumah oleh relawan DESTANA dan warga masyarakat\r\n- Distribusi logistik', 'Saran TL / Kebutuhan\r\n- Asesment\r\n- Distribusi lagistik permakanan dan non permakanan', '', '-7.2378349', '109.6761388', 0);
INSERT INTO `tbl_bencana` VALUES (123, 4, '2021-04-03', 222, 'Hujan intensitas sedang hingga lebat disertai angin kencang, sehingga mengakibatkan Pohon Tumbang', '1 Rumah', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Daryoto', NULL, 'Angin kencang yag terjadi di wilayah kec. Batur mengakibatkan Sebagian atap terlepas dan kaca salah satu pintu pecah.', 'Melaporkan ke instansi terkait\r\n- Cek lokasi', NULL, '', '-7.2064271', '109.7618379', 0);
INSERT INTO `tbl_bencana` VALUES (124, 4, '2021-04-03', 237, 'Akibat angin kencang', NULL, NULL, '2 kandang ayam', NULL, NULL, NULL, NULL, NULL, 'Icuk', NULL, 'Akibat angin kencang yang terjadi dari sekitar pukul 01.00 WIB dini hari sampai saat ini mengakibatkan bangunan kandang ayam luas 8 mtr x 40 mtr dengan kapasitas 5000 ekor ambruk. ayam2 yang terjebak dibawah bangunan baru berusia 4 hari dan sampai saat ini belum bisa dievakuasi karena bangunan lain masih rawan roboh mengingat angin masih kencang.\r\n', 'Tindakan yang sudah dilakukan\r\n- Assesmen kelokasi kejadian\r\n- Kordinasi dengan pengelola peternakan\r\n- Evakuasi menunggu angin reda.', NULL, '', '-7.2475099', '109.6861505', 0);
INSERT INTO `tbl_bencana` VALUES (144, 1, '2021-02-12', 256, 'Hujan intensitas sedang hingga tinggi terjadi sejak beberapa pekan terakhir', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Kades gunung langit', '082 329 336 440', 'Hujan dengan intensitas lebat yang menguyur di kecamatan kalibening', 'Melaporkan ke dinas terkait', NULL, '', '-7.2012547', '109.5604694', 1);
INSERT INTO `tbl_bencana` VALUES (148, 2, '2021-12-23', 270, 'rumah sengaja di bakar oleh Jamingan (ODGJ) pemilik rumah.', NULL, '1 Rumah', NULL, NULL, NULL, NULL, NULL, NULL, 'Wahyu', NULL, 'pada pukul 02.30 rumah sengaja di bakar oleh Jamingan (ODGJ) pemilik rumah', '- Pemadaman titik api yang masih nyala\r\n- Pendinginn Material', NULL, '', '-7.4464546', '109.5968662', 0);
INSERT INTO `tbl_bencana` VALUES (180, 2, '2022-11-22', 2, 'adada', 'adad', 'adad', 'adad', 'adad', 'adad', 'adad', 'adad', 'adad', 'adada', 'asdada', 'asdasda', 'asdasd', 'adsadad', '', '-7.495001', '109.445563', 1);
INSERT INTO `tbl_bencana` VALUES (181, 3, '2022-10-29', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '-7.4231092', '109.4829359', 1);
INSERT INTO `tbl_bencana` VALUES (182, 3, '2022-10-20', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '-7.2724898', '109.6544121', 1);
INSERT INTO `tbl_bencana` VALUES (214, 1, '2021-07-30', 1, '212', '121', '121', '212', '121', '1212', '1', '12', '212', '211', '212', '1dsqd', 'sdadad', '212', '', '-7.436596887931947', '109.58167136434305', 1);
INSERT INTO `tbl_bencana` VALUES (218, 1, '2022-11-16', 122, 'asdad', 'asdasd', 'asdad', 'asda', 'asdad', 'dasda', 'asda', 'asdasd', 'dasda', 'asdasd', 'asdad', 'adad', 'asda', 'asdad', '335995.jpg', '-7.434848923812011', '109.51603527336478', 0);

SET FOREIGN_KEY_CHECKS = 1;
