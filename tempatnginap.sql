/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : taoktindok

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 31/01/2020 22:12:55
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for fasilitas
-- ----------------------------
DROP TABLE IF EXISTS `fasilitas`;
CREATE TABLE `fasilitas`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `jenis_fasilitas` enum('lain-lain') CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `nama_fasilitas` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gambar_fasilitas` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for fasilitas_kamar
-- ----------------------------
DROP TABLE IF EXISTS `fasilitas_kamar`;
CREATE TABLE `fasilitas_kamar`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_kamar` int(11) NOT NULL,
  `id_fasilitas` int(11) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for gambar_kamar
-- ----------------------------
DROP TABLE IF EXISTS `gambar_kamar`;
CREATE TABLE `gambar_kamar`  (
  `id_gambar_kamar` int(11) NOT NULL AUTO_INCREMENT,
  `id_kamar` int(11) NOT NULL,
  `gambar` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gambar_utama` tinyint(1) NULL DEFAULT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id_gambar_kamar`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of gambar_kamar
-- ----------------------------
INSERT INTO `gambar_kamar` VALUES (9, 11, 'e609f3c9b8722b47f25b7cc5d4bcbf0f.JPG', 1, '2020-01-03 03:43:40', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (10, 11, 'b210dc3eb2f0a9f2d54fed0696ed9839.jpg', 0, '2020-01-03 03:43:40', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (11, 12, 'fde6c5ec2b81471285a7a55485de69d8.jpg', 1, '2020-01-03 04:27:17', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (12, 12, 'f16bab499829e4630d4763ec6b763dbc.JPG', 0, '2020-01-03 04:27:17', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (13, 13, '7cbad2eda4967763fc8ff9377828ce9d.jpg', 1, '2020-01-03 05:30:39', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (14, 13, '412338b06a15b60ae3c476506ea50a01.JPG', 0, '2020-01-03 05:30:39', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (15, 15, '1592f842c6668c8b0de0e3f77fd0f1f0.jpg', 1, '2020-01-04 02:40:35', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (16, 15, '51c6c37e36a09d183ba0b0edd53886ce.jpg', 0, '2020-01-04 02:40:35', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (17, 15, '67ac92ab50cb0413cc1361437ea2db7d.jpeg', 0, '2020-01-04 02:40:35', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (18, 15, 'fb13035c399334a844f385103ee3b770.jpeg', 0, '2020-01-04 02:40:35', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (19, 16, '3f5fd148283f5dcfe1d18f5f495849d1.jpg', 1, '2020-01-04 03:21:41', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (20, 17, 'fa4795ed8a4cccd3c729da571e9009b6.jpg', 1, '2020-01-04 03:47:36', '0000-00-00 00:00:00');
INSERT INTO `gambar_kamar` VALUES (21, 17, 'd3cca0073bc7df818664f11b92d11ee2.jpg', 0, '2020-01-04 03:47:36', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for harga_kamar
-- ----------------------------
DROP TABLE IF EXISTS `harga_kamar`;
CREATE TABLE `harga_kamar`  (
  `id_harga_kamar` int(11) NOT NULL AUTO_INCREMENT,
  `id_kamar` int(11) NOT NULL,
  `harga` int(11) NOT NULL,
  `durasi` enum('perjam','perhari','perminggu','perbulan','pertahun') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id_harga_kamar`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 16 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of harga_kamar
-- ----------------------------
INSERT INTO `harga_kamar` VALUES (6, 11, 700000, 'perbulan', '2020-01-03 03:43:40', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (7, 12, 1000000, 'perbulan', '2020-01-03 04:27:17', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (8, 13, 200000, 'perhari', '2020-01-03 05:30:39', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (9, 15, 899998, 'perbulan', '2020-01-04 02:40:35', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (11, 16, 15000000, 'pertahun', '2020-01-04 03:21:41', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (12, 17, 150000, 'perhari', '2020-01-04 03:47:36', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (13, 17, 600000, 'perminggu', '2020-01-04 03:47:36', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (14, 17, 2000000, 'perbulan', '2020-01-04 03:47:36', '0000-00-00 00:00:00');
INSERT INTO `harga_kamar` VALUES (15, 18, 100000, 'perjam', '2020-01-12 18:22:03', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for kamar
-- ----------------------------
DROP TABLE IF EXISTS `kamar`;
CREATE TABLE `kamar`  (
  `id_kamar` int(11) NOT NULL AUTO_INCREMENT,
  `id_kategori_kamar` int(11) NULL DEFAULT NULL,
  `jenis_kamar` enum('kos','vila','hotel','penginapan','rumahan') CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nama_kamar` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `slug` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `keterangan` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `alamat` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `nomor_handphone` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `regency_id` int(11) NULL DEFAULT NULL,
  `latitude` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `longitude` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `stok` int(3) NULL DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id_kamar`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kamar
-- ----------------------------
INSERT INTO `kamar` VALUES (13, 0, 'vila', 'Vila Premiere', 'vila-premiere', '', 'Jalan maulana hasanudin', '0895331261219', 3671, '-6.15099247840584', '106.94824763264313', 1, 4, 1, '2020-01-03 05:30:38', '0000-00-00 00:00:00');
INSERT INTO `kamar` VALUES (14, 0, 'penginapan', 'tes penginapan', 'tes-penginapan', '', 'jalan mulu nikah kaga', '08952331261219', 5203, '-8.532159264823889', '117.14173037958881', 1, 8, 1, '2020-01-03 08:43:57', '0000-00-00 00:00:00');
INSERT INTO `kamar` VALUES (15, 3, 'kos', 'Kontrakan Ibu Iyam', 'kontrakan-ibu-iyam', 'Dekat pusdiklantas', 'Jl. Bhayangkara Gg. Bungur Kp. Dongkal', '0895331261219', 3674, '-6.300835228581505', '106.7047592656088', 5, 4, 1, '2020-01-04 02:40:35', '0000-00-00 00:00:00');
INSERT INTO `kamar` VALUES (16, 0, 'rumahan', 'Rumah murah tangerang selatan disewakan', 'rumah-murah-tangerang-selatan-disewakan', 'Dekat komplek pertamina perbatasan ciputat timur dengan ciputat selatan', 'Menjangan raya no. 19 komplek pertamina ciputat tangerang selatan', '089112324255', 3674, '-6.298931561634191', '106.70443420534156', 10, 4, 1, '2020-01-04 03:21:41', '2020-01-04 03:33:10');
INSERT INTO `kamar` VALUES (17, 0, 'hotel', 'Narita Hotel', 'narita-hotel', 'Hotel murah kota tangerang', 'Jalan Kyai Haji Hasyim Ashari, Jl. Cipondoh Raya No.63-65, RT.006/RW.010, Cipondoh, Karang Tengah, Kota Tangerang, Banten 15157', '087771223456', 3671, '-6.182420969469305', '106.62660667641359', 50, 4, 1, '2020-01-04 03:47:36', '2020-01-12 18:32:21');

-- ----------------------------
-- Table structure for kategori_kamar
-- ----------------------------
DROP TABLE IF EXISTS `kategori_kamar`;
CREATE TABLE `kategori_kamar`  (
  `id_kategori_kamar` int(255) NOT NULL AUTO_INCREMENT,
  `nama_kategori_kamar` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `slug` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  `created_at` datetime(0) NOT NULL,
  `updated_at` datetime(0) NOT NULL,
  PRIMARY KEY (`id_kategori_kamar`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kategori_kamar
-- ----------------------------
INSERT INTO `kategori_kamar` VALUES (1, 'Kos Putri', 'kos-putri', 1, '2020-01-02 16:27:25', '2020-01-12 18:12:17');
INSERT INTO `kategori_kamar` VALUES (2, 'Kos Putra', 'kos-putra', 1, '2020-01-02 16:27:36', '0000-00-00 00:00:00');
INSERT INTO `kategori_kamar` VALUES (3, 'Kos Putra Putri', 'kos-putra-putri', 1, '2020-01-02 16:27:48', '0000-00-00 00:00:00');
INSERT INTO `kategori_kamar` VALUES (5, 'Penginapan Murah', '', 1, '2020-01-12 16:43:55', '2020-01-12 18:12:24');

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member`  (
  `id_member` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `alamat` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `regency_id` int(11) NOT NULL,
  `email` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `nomor_handphone` varchar(15) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `gambar` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `status` int(1) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id_member`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES (3, 'Irfan Rifai', 'jalan mulu jadian kaga', 0, 'qcutterz@gmail.com', '0895331261219', NULL, 1, 4, NULL, '2019-12-30 07:36:36');
INSERT INTO `member` VALUES (4, 'Irfan', 'kp. dongkal', 0, 'irfan@gmail.com', '0895331261219', NULL, 1, 5, NULL, NULL);
INSERT INTO `member` VALUES (5, 'Dzakiyyah Studio', 'Jl. Maulana Hasanudin', 3671, 'dzakiyyah@gmail.com', '0895331261218', NULL, 1, 7, NULL, NULL);
INSERT INTO `member` VALUES (6, 'Siti Ucu Fatimah', 'kp. dongkal RT02/04/ kp. dongkal', 3674, 'siti_ucu@gmail.com', '089111222333', NULL, 1, 8, NULL, '2020-01-03 08:36:14');

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `url` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `icon` varchar(50) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `parent_id` int(11) NULL DEFAULT NULL,
  `sequence` varchar(11) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `description` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `status` int(1) NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 24 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menus
-- ----------------------------
INSERT INTO `menus` VALUES (1, 'Menu Utama', NULL, NULL, NULL, NULL, NULL, 1, '2019-12-29 13:01:10', '2019-12-29 13:01:12');
INSERT INTO `menus` VALUES (2, 'Member', 'member', 'fas fa-users', 1, NULL, NULL, 1, '2019-12-29 14:57:28', '2019-12-29 14:57:34');
INSERT INTO `menus` VALUES (3, 'Penginapan', '', 'far fa-building', 1, '', '', 1, '2019-12-29 19:27:47', '2020-01-02 16:04:44');
INSERT INTO `menus` VALUES (4, 'Kategori Penginapan', 'kategori-penginapan', '', 3, '', '', 1, '2019-12-29 19:38:01', '2020-01-02 16:04:04');
INSERT INTO `menus` VALUES (5, 'Penginapan', 'penginapan', '', 3, '', '', 1, '2019-12-29 19:38:06', '2020-01-02 16:05:40');
INSERT INTO `menus` VALUES (6, 'Pengaturan Pengguna', '', NULL, NULL, NULL, NULL, 1, '2019-12-29 19:57:40', '2019-12-29 19:57:43');
INSERT INTO `menus` VALUES (7, 'Menu & Hak Akses', NULL, 'fas fa-users-cog', 6, NULL, NULL, 1, '2019-12-29 20:44:00', NULL);
INSERT INTO `menus` VALUES (8, 'Menu', 'menu', NULL, 7, NULL, NULL, 1, '2019-12-29 20:44:03', NULL);
INSERT INTO `menus` VALUES (9, 'Hak Akses', 'role', 'fas fa-cog', 7, NULL, 'Hak akses', 1, '2019-12-29 20:44:06', '2020-01-01 08:48:59');
INSERT INTO `menus` VALUES (10, 'Hak Akses Pengguna', 'role-permission', '', 7, '', '', 1, '2019-12-29 20:44:09', '2020-01-01 15:05:35');
INSERT INTO `menus` VALUES (12, 'Autentikasi', NULL, NULL, NULL, NULL, NULL, 1, '2019-12-29 20:44:15', NULL);
INSERT INTO `menus` VALUES (13, 'Keluar', 'authentication/logout', 'fas fa-sign-out-alt', 12, '', NULL, 1, '2019-12-29 20:45:26', NULL);
INSERT INTO `menus` VALUES (22, 'Pengguna', 'user', 'fas fa-user-friends', 6, '', '', 1, '2020-01-06 01:17:56', NULL);

-- ----------------------------
-- Table structure for permission_roles
-- ----------------------------
DROP TABLE IF EXISTS `permission_roles`;
CREATE TABLE `permission_roles`  (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`role_id`, `permission_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permission_roles
-- ----------------------------
INSERT INTO `permission_roles` VALUES (1, 1);
INSERT INTO `permission_roles` VALUES (1, 2);
INSERT INTO `permission_roles` VALUES (1, 3);
INSERT INTO `permission_roles` VALUES (1, 4);
INSERT INTO `permission_roles` VALUES (1, 5);
INSERT INTO `permission_roles` VALUES (1, 10);
INSERT INTO `permission_roles` VALUES (1, 11);
INSERT INTO `permission_roles` VALUES (1, 12);
INSERT INTO `permission_roles` VALUES (1, 13);
INSERT INTO `permission_roles` VALUES (1, 14);
INSERT INTO `permission_roles` VALUES (1, 40);
INSERT INTO `permission_roles` VALUES (1, 41);
INSERT INTO `permission_roles` VALUES (1, 42);
INSERT INTO `permission_roles` VALUES (1, 43);
INSERT INTO `permission_roles` VALUES (1, 44);
INSERT INTO `permission_roles` VALUES (1, 45);
INSERT INTO `permission_roles` VALUES (1, 46);
INSERT INTO `permission_roles` VALUES (1, 47);
INSERT INTO `permission_roles` VALUES (1, 52);
INSERT INTO `permission_roles` VALUES (1, 53);
INSERT INTO `permission_roles` VALUES (1, 54);
INSERT INTO `permission_roles` VALUES (1, 55);
INSERT INTO `permission_roles` VALUES (1, 56);
INSERT INTO `permission_roles` VALUES (1, 57);
INSERT INTO `permission_roles` VALUES (1, 58);
INSERT INTO `permission_roles` VALUES (1, 59);
INSERT INTO `permission_roles` VALUES (1, 84);
INSERT INTO `permission_roles` VALUES (1, 85);
INSERT INTO `permission_roles` VALUES (1, 86);
INSERT INTO `permission_roles` VALUES (1, 87);
INSERT INTO `permission_roles` VALUES (2, 1);
INSERT INTO `permission_roles` VALUES (2, 56);
INSERT INTO `permission_roles` VALUES (2, 57);
INSERT INTO `permission_roles` VALUES (2, 58);
INSERT INTO `permission_roles` VALUES (2, 59);
INSERT INTO `permission_roles` VALUES (3, 1);
INSERT INTO `permission_roles` VALUES (6, 1);

-- ----------------------------
-- Table structure for permissions
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NULL DEFAULT NULL,
  `name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `display_name` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `description` tinytext CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 96 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES (1, NULL, 'index-dashboard', 'Dashboard', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (2, 2, 'index-member', 'Member', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (3, 2, 'create-member', 'Create Member', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (4, 2, 'edit-member', 'Edit Member', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (5, 2, 'delete-member', 'Delete Member', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (10, 8, 'index-menu', 'Menu', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (11, 8, 'create-menu', 'Create Menu', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (12, 8, 'edit-menu', 'Edit Menu', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (13, 8, 'adjust-menu', 'Adjust Menu', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (14, 8, 'delete-menu', 'Delete Menu', NULL, 1, NULL, NULL, NULL);
INSERT INTO `permissions` VALUES (40, 9, 'index-role', 'Hak Akses', NULL, 1, NULL, '2020-01-01 08:48:59', NULL);
INSERT INTO `permissions` VALUES (41, 9, 'create-role', 'Create Hak Akses', NULL, 1, NULL, '2020-01-01 08:48:59', NULL);
INSERT INTO `permissions` VALUES (42, 9, 'edit-role', 'Edit Hak Akses', NULL, 1, NULL, '2020-01-01 08:48:59', NULL);
INSERT INTO `permissions` VALUES (43, 9, 'delete-role', 'Delete Hak Akses', NULL, 1, NULL, '2020-01-01 08:48:59', NULL);
INSERT INTO `permissions` VALUES (44, 10, 'index-role-permission', 'Hak Akses Pengguna', NULL, 1, NULL, '2020-01-01 15:05:35', NULL);
INSERT INTO `permissions` VALUES (45, 10, 'create-role-permission', 'Create Hak Akses Pengguna', NULL, 1, NULL, '2020-01-01 15:05:35', NULL);
INSERT INTO `permissions` VALUES (46, 10, 'edit-role-permission', 'Edit Hak Akses Pengguna', NULL, 1, NULL, '2020-01-01 15:05:35', NULL);
INSERT INTO `permissions` VALUES (47, 10, 'delete-role-permission', 'Delete Hak Akses Pengguna', NULL, 1, NULL, '2020-01-01 15:05:35', NULL);
INSERT INTO `permissions` VALUES (52, 4, 'index-kategori-penginapan', 'Kategori Penginapan', NULL, 1, NULL, '2020-01-02 16:04:04', NULL);
INSERT INTO `permissions` VALUES (53, 4, 'create-kategori-penginapan', 'Create Kategori Penginapan', NULL, 1, NULL, '2020-01-02 16:04:04', NULL);
INSERT INTO `permissions` VALUES (54, 4, 'edit-kategori-penginapan', 'Edit Kategori Penginapan', NULL, 1, NULL, '2020-01-02 16:04:04', NULL);
INSERT INTO `permissions` VALUES (55, 4, 'delete-kategori-penginapan', 'Delete Kategori Penginapan', NULL, 1, NULL, '2020-01-02 16:04:04', NULL);
INSERT INTO `permissions` VALUES (56, 5, 'index-penginapan', 'Penginapan', NULL, 1, NULL, '2020-01-02 16:05:40', NULL);
INSERT INTO `permissions` VALUES (57, 5, 'create-penginapan', 'Create Penginapan', NULL, 1, NULL, '2020-01-02 16:05:40', NULL);
INSERT INTO `permissions` VALUES (58, 5, 'edit-penginapan', 'Edit Penginapan', NULL, 1, NULL, '2020-01-02 16:05:40', NULL);
INSERT INTO `permissions` VALUES (59, 5, 'delete-penginapan', 'Delete Penginapan', NULL, 1, NULL, '2020-01-02 16:05:40', NULL);
INSERT INTO `permissions` VALUES (84, 22, 'index-user', 'Pengguna', NULL, 1, '2020-01-06 01:17:56', NULL, NULL);
INSERT INTO `permissions` VALUES (85, 22, 'create-user', 'Create Pengguna', NULL, 1, '2020-01-06 01:17:56', NULL, NULL);
INSERT INTO `permissions` VALUES (86, 22, 'edit-user', 'Edit Pengguna', NULL, 1, '2020-01-06 01:17:56', NULL, NULL);
INSERT INTO `permissions` VALUES (87, 22, 'delete-user', 'Delete Pengguna', NULL, 1, '2020-01-06 01:17:56', NULL, NULL);

-- ----------------------------
-- Table structure for regencies
-- ----------------------------
DROP TABLE IF EXISTS `regencies`;
CREATE TABLE `regencies`  (
  `id` char(4) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `province_id` char(2) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `regencies_province_id_index`(`province_id`) USING BTREE,
  CONSTRAINT `regencies_province_id_foreign` FOREIGN KEY (`province_id`) REFERENCES `provinces` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of regencies
-- ----------------------------
INSERT INTO `regencies` VALUES ('1101', '11', 'KABUPATEN SIMEULUE');
INSERT INTO `regencies` VALUES ('1102', '11', 'KABUPATEN ACEH SINGKIL');
INSERT INTO `regencies` VALUES ('1103', '11', 'KABUPATEN ACEH SELATAN');
INSERT INTO `regencies` VALUES ('1104', '11', 'KABUPATEN ACEH TENGGARA');
INSERT INTO `regencies` VALUES ('1105', '11', 'KABUPATEN ACEH TIMUR');
INSERT INTO `regencies` VALUES ('1106', '11', 'KABUPATEN ACEH TENGAH');
INSERT INTO `regencies` VALUES ('1107', '11', 'KABUPATEN ACEH BARAT');
INSERT INTO `regencies` VALUES ('1108', '11', 'KABUPATEN ACEH BESAR');
INSERT INTO `regencies` VALUES ('1109', '11', 'KABUPATEN PIDIE');
INSERT INTO `regencies` VALUES ('1110', '11', 'KABUPATEN BIREUEN');
INSERT INTO `regencies` VALUES ('1111', '11', 'KABUPATEN ACEH UTARA');
INSERT INTO `regencies` VALUES ('1112', '11', 'KABUPATEN ACEH BARAT DAYA');
INSERT INTO `regencies` VALUES ('1113', '11', 'KABUPATEN GAYO LUES');
INSERT INTO `regencies` VALUES ('1114', '11', 'KABUPATEN ACEH TAMIANG');
INSERT INTO `regencies` VALUES ('1115', '11', 'KABUPATEN NAGAN RAYA');
INSERT INTO `regencies` VALUES ('1116', '11', 'KABUPATEN ACEH JAYA');
INSERT INTO `regencies` VALUES ('1117', '11', 'KABUPATEN BENER MERIAH');
INSERT INTO `regencies` VALUES ('1118', '11', 'KABUPATEN PIDIE JAYA');
INSERT INTO `regencies` VALUES ('1171', '11', 'KOTA BANDA ACEH');
INSERT INTO `regencies` VALUES ('1172', '11', 'KOTA SABANG');
INSERT INTO `regencies` VALUES ('1173', '11', 'KOTA LANGSA');
INSERT INTO `regencies` VALUES ('1174', '11', 'KOTA LHOKSEUMAWE');
INSERT INTO `regencies` VALUES ('1175', '11', 'KOTA SUBULUSSALAM');
INSERT INTO `regencies` VALUES ('1201', '12', 'KABUPATEN NIAS');
INSERT INTO `regencies` VALUES ('1202', '12', 'KABUPATEN MANDAILING NATAL');
INSERT INTO `regencies` VALUES ('1203', '12', 'KABUPATEN TAPANULI SELATAN');
INSERT INTO `regencies` VALUES ('1204', '12', 'KABUPATEN TAPANULI TENGAH');
INSERT INTO `regencies` VALUES ('1205', '12', 'KABUPATEN TAPANULI UTARA');
INSERT INTO `regencies` VALUES ('1206', '12', 'KABUPATEN TOBA SAMOSIR');
INSERT INTO `regencies` VALUES ('1207', '12', 'KABUPATEN LABUHAN BATU');
INSERT INTO `regencies` VALUES ('1208', '12', 'KABUPATEN ASAHAN');
INSERT INTO `regencies` VALUES ('1209', '12', 'KABUPATEN SIMALUNGUN');
INSERT INTO `regencies` VALUES ('1210', '12', 'KABUPATEN DAIRI');
INSERT INTO `regencies` VALUES ('1211', '12', 'KABUPATEN KARO');
INSERT INTO `regencies` VALUES ('1212', '12', 'KABUPATEN DELI SERDANG');
INSERT INTO `regencies` VALUES ('1213', '12', 'KABUPATEN LANGKAT');
INSERT INTO `regencies` VALUES ('1214', '12', 'KABUPATEN NIAS SELATAN');
INSERT INTO `regencies` VALUES ('1215', '12', 'KABUPATEN HUMBANG HASUNDUTAN');
INSERT INTO `regencies` VALUES ('1216', '12', 'KABUPATEN PAKPAK BHARAT');
INSERT INTO `regencies` VALUES ('1217', '12', 'KABUPATEN SAMOSIR');
INSERT INTO `regencies` VALUES ('1218', '12', 'KABUPATEN SERDANG BEDAGAI');
INSERT INTO `regencies` VALUES ('1219', '12', 'KABUPATEN BATU BARA');
INSERT INTO `regencies` VALUES ('1220', '12', 'KABUPATEN PADANG LAWAS UTARA');
INSERT INTO `regencies` VALUES ('1221', '12', 'KABUPATEN PADANG LAWAS');
INSERT INTO `regencies` VALUES ('1222', '12', 'KABUPATEN LABUHAN BATU SELATAN');
INSERT INTO `regencies` VALUES ('1223', '12', 'KABUPATEN LABUHAN BATU UTARA');
INSERT INTO `regencies` VALUES ('1224', '12', 'KABUPATEN NIAS UTARA');
INSERT INTO `regencies` VALUES ('1225', '12', 'KABUPATEN NIAS BARAT');
INSERT INTO `regencies` VALUES ('1271', '12', 'KOTA SIBOLGA');
INSERT INTO `regencies` VALUES ('1272', '12', 'KOTA TANJUNG BALAI');
INSERT INTO `regencies` VALUES ('1273', '12', 'KOTA PEMATANG SIANTAR');
INSERT INTO `regencies` VALUES ('1274', '12', 'KOTA TEBING TINGGI');
INSERT INTO `regencies` VALUES ('1275', '12', 'KOTA MEDAN');
INSERT INTO `regencies` VALUES ('1276', '12', 'KOTA BINJAI');
INSERT INTO `regencies` VALUES ('1277', '12', 'KOTA PADANGSIDIMPUAN');
INSERT INTO `regencies` VALUES ('1278', '12', 'KOTA GUNUNGSITOLI');
INSERT INTO `regencies` VALUES ('1301', '13', 'KABUPATEN KEPULAUAN MENTAWAI');
INSERT INTO `regencies` VALUES ('1302', '13', 'KABUPATEN PESISIR SELATAN');
INSERT INTO `regencies` VALUES ('1303', '13', 'KABUPATEN SOLOK');
INSERT INTO `regencies` VALUES ('1304', '13', 'KABUPATEN SIJUNJUNG');
INSERT INTO `regencies` VALUES ('1305', '13', 'KABUPATEN TANAH DATAR');
INSERT INTO `regencies` VALUES ('1306', '13', 'KABUPATEN PADANG PARIAMAN');
INSERT INTO `regencies` VALUES ('1307', '13', 'KABUPATEN AGAM');
INSERT INTO `regencies` VALUES ('1308', '13', 'KABUPATEN LIMA PULUH KOTA');
INSERT INTO `regencies` VALUES ('1309', '13', 'KABUPATEN PASAMAN');
INSERT INTO `regencies` VALUES ('1310', '13', 'KABUPATEN SOLOK SELATAN');
INSERT INTO `regencies` VALUES ('1311', '13', 'KABUPATEN DHARMASRAYA');
INSERT INTO `regencies` VALUES ('1312', '13', 'KABUPATEN PASAMAN BARAT');
INSERT INTO `regencies` VALUES ('1371', '13', 'KOTA PADANG');
INSERT INTO `regencies` VALUES ('1372', '13', 'KOTA SOLOK');
INSERT INTO `regencies` VALUES ('1373', '13', 'KOTA SAWAH LUNTO');
INSERT INTO `regencies` VALUES ('1374', '13', 'KOTA PADANG PANJANG');
INSERT INTO `regencies` VALUES ('1375', '13', 'KOTA BUKITTINGGI');
INSERT INTO `regencies` VALUES ('1376', '13', 'KOTA PAYAKUMBUH');
INSERT INTO `regencies` VALUES ('1377', '13', 'KOTA PARIAMAN');
INSERT INTO `regencies` VALUES ('1401', '14', 'KABUPATEN KUANTAN SINGINGI');
INSERT INTO `regencies` VALUES ('1402', '14', 'KABUPATEN INDRAGIRI HULU');
INSERT INTO `regencies` VALUES ('1403', '14', 'KABUPATEN INDRAGIRI HILIR');
INSERT INTO `regencies` VALUES ('1404', '14', 'KABUPATEN PELALAWAN');
INSERT INTO `regencies` VALUES ('1405', '14', 'KABUPATEN S I A K');
INSERT INTO `regencies` VALUES ('1406', '14', 'KABUPATEN KAMPAR');
INSERT INTO `regencies` VALUES ('1407', '14', 'KABUPATEN ROKAN HULU');
INSERT INTO `regencies` VALUES ('1408', '14', 'KABUPATEN BENGKALIS');
INSERT INTO `regencies` VALUES ('1409', '14', 'KABUPATEN ROKAN HILIR');
INSERT INTO `regencies` VALUES ('1410', '14', 'KABUPATEN KEPULAUAN MERANTI');
INSERT INTO `regencies` VALUES ('1471', '14', 'KOTA PEKANBARU');
INSERT INTO `regencies` VALUES ('1473', '14', 'KOTA D U M A I');
INSERT INTO `regencies` VALUES ('1501', '15', 'KABUPATEN KERINCI');
INSERT INTO `regencies` VALUES ('1502', '15', 'KABUPATEN MERANGIN');
INSERT INTO `regencies` VALUES ('1503', '15', 'KABUPATEN SAROLANGUN');
INSERT INTO `regencies` VALUES ('1504', '15', 'KABUPATEN BATANG HARI');
INSERT INTO `regencies` VALUES ('1505', '15', 'KABUPATEN MUARO JAMBI');
INSERT INTO `regencies` VALUES ('1506', '15', 'KABUPATEN TANJUNG JABUNG TIMUR');
INSERT INTO `regencies` VALUES ('1507', '15', 'KABUPATEN TANJUNG JABUNG BARAT');
INSERT INTO `regencies` VALUES ('1508', '15', 'KABUPATEN TEBO');
INSERT INTO `regencies` VALUES ('1509', '15', 'KABUPATEN BUNGO');
INSERT INTO `regencies` VALUES ('1571', '15', 'KOTA JAMBI');
INSERT INTO `regencies` VALUES ('1572', '15', 'KOTA SUNGAI PENUH');
INSERT INTO `regencies` VALUES ('1601', '16', 'KABUPATEN OGAN KOMERING ULU');
INSERT INTO `regencies` VALUES ('1602', '16', 'KABUPATEN OGAN KOMERING ILIR');
INSERT INTO `regencies` VALUES ('1603', '16', 'KABUPATEN MUARA ENIM');
INSERT INTO `regencies` VALUES ('1604', '16', 'KABUPATEN LAHAT');
INSERT INTO `regencies` VALUES ('1605', '16', 'KABUPATEN MUSI RAWAS');
INSERT INTO `regencies` VALUES ('1606', '16', 'KABUPATEN MUSI BANYUASIN');
INSERT INTO `regencies` VALUES ('1607', '16', 'KABUPATEN BANYU ASIN');
INSERT INTO `regencies` VALUES ('1608', '16', 'KABUPATEN OGAN KOMERING ULU SELATAN');
INSERT INTO `regencies` VALUES ('1609', '16', 'KABUPATEN OGAN KOMERING ULU TIMUR');
INSERT INTO `regencies` VALUES ('1610', '16', 'KABUPATEN OGAN ILIR');
INSERT INTO `regencies` VALUES ('1611', '16', 'KABUPATEN EMPAT LAWANG');
INSERT INTO `regencies` VALUES ('1612', '16', 'KABUPATEN PENUKAL ABAB LEMATANG ILIR');
INSERT INTO `regencies` VALUES ('1613', '16', 'KABUPATEN MUSI RAWAS UTARA');
INSERT INTO `regencies` VALUES ('1671', '16', 'KOTA PALEMBANG');
INSERT INTO `regencies` VALUES ('1672', '16', 'KOTA PRABUMULIH');
INSERT INTO `regencies` VALUES ('1673', '16', 'KOTA PAGAR ALAM');
INSERT INTO `regencies` VALUES ('1674', '16', 'KOTA LUBUKLINGGAU');
INSERT INTO `regencies` VALUES ('1701', '17', 'KABUPATEN BENGKULU SELATAN');
INSERT INTO `regencies` VALUES ('1702', '17', 'KABUPATEN REJANG LEBONG');
INSERT INTO `regencies` VALUES ('1703', '17', 'KABUPATEN BENGKULU UTARA');
INSERT INTO `regencies` VALUES ('1704', '17', 'KABUPATEN KAUR');
INSERT INTO `regencies` VALUES ('1705', '17', 'KABUPATEN SELUMA');
INSERT INTO `regencies` VALUES ('1706', '17', 'KABUPATEN MUKOMUKO');
INSERT INTO `regencies` VALUES ('1707', '17', 'KABUPATEN LEBONG');
INSERT INTO `regencies` VALUES ('1708', '17', 'KABUPATEN KEPAHIANG');
INSERT INTO `regencies` VALUES ('1709', '17', 'KABUPATEN BENGKULU TENGAH');
INSERT INTO `regencies` VALUES ('1771', '17', 'KOTA BENGKULU');
INSERT INTO `regencies` VALUES ('1801', '18', 'KABUPATEN LAMPUNG BARAT');
INSERT INTO `regencies` VALUES ('1802', '18', 'KABUPATEN TANGGAMUS');
INSERT INTO `regencies` VALUES ('1803', '18', 'KABUPATEN LAMPUNG SELATAN');
INSERT INTO `regencies` VALUES ('1804', '18', 'KABUPATEN LAMPUNG TIMUR');
INSERT INTO `regencies` VALUES ('1805', '18', 'KABUPATEN LAMPUNG TENGAH');
INSERT INTO `regencies` VALUES ('1806', '18', 'KABUPATEN LAMPUNG UTARA');
INSERT INTO `regencies` VALUES ('1807', '18', 'KABUPATEN WAY KANAN');
INSERT INTO `regencies` VALUES ('1808', '18', 'KABUPATEN TULANGBAWANG');
INSERT INTO `regencies` VALUES ('1809', '18', 'KABUPATEN PESAWARAN');
INSERT INTO `regencies` VALUES ('1810', '18', 'KABUPATEN PRINGSEWU');
INSERT INTO `regencies` VALUES ('1811', '18', 'KABUPATEN MESUJI');
INSERT INTO `regencies` VALUES ('1812', '18', 'KABUPATEN TULANG BAWANG BARAT');
INSERT INTO `regencies` VALUES ('1813', '18', 'KABUPATEN PESISIR BARAT');
INSERT INTO `regencies` VALUES ('1871', '18', 'KOTA BANDAR LAMPUNG');
INSERT INTO `regencies` VALUES ('1872', '18', 'KOTA METRO');
INSERT INTO `regencies` VALUES ('1901', '19', 'KABUPATEN BANGKA');
INSERT INTO `regencies` VALUES ('1902', '19', 'KABUPATEN BELITUNG');
INSERT INTO `regencies` VALUES ('1903', '19', 'KABUPATEN BANGKA BARAT');
INSERT INTO `regencies` VALUES ('1904', '19', 'KABUPATEN BANGKA TENGAH');
INSERT INTO `regencies` VALUES ('1905', '19', 'KABUPATEN BANGKA SELATAN');
INSERT INTO `regencies` VALUES ('1906', '19', 'KABUPATEN BELITUNG TIMUR');
INSERT INTO `regencies` VALUES ('1971', '19', 'KOTA PANGKAL PINANG');
INSERT INTO `regencies` VALUES ('2101', '21', 'KABUPATEN KARIMUN');
INSERT INTO `regencies` VALUES ('2102', '21', 'KABUPATEN BINTAN');
INSERT INTO `regencies` VALUES ('2103', '21', 'KABUPATEN NATUNA');
INSERT INTO `regencies` VALUES ('2104', '21', 'KABUPATEN LINGGA');
INSERT INTO `regencies` VALUES ('2105', '21', 'KABUPATEN KEPULAUAN ANAMBAS');
INSERT INTO `regencies` VALUES ('2171', '21', 'KOTA B A T A M');
INSERT INTO `regencies` VALUES ('2172', '21', 'KOTA TANJUNG PINANG');
INSERT INTO `regencies` VALUES ('3101', '31', 'KABUPATEN KEPULAUAN SERIBU');
INSERT INTO `regencies` VALUES ('3171', '31', 'KOTA JAKARTA SELATAN');
INSERT INTO `regencies` VALUES ('3172', '31', 'KOTA JAKARTA TIMUR');
INSERT INTO `regencies` VALUES ('3173', '31', 'KOTA JAKARTA PUSAT');
INSERT INTO `regencies` VALUES ('3174', '31', 'KOTA JAKARTA BARAT');
INSERT INTO `regencies` VALUES ('3175', '31', 'KOTA JAKARTA UTARA');
INSERT INTO `regencies` VALUES ('3201', '32', 'KABUPATEN BOGOR');
INSERT INTO `regencies` VALUES ('3202', '32', 'KABUPATEN SUKABUMI');
INSERT INTO `regencies` VALUES ('3203', '32', 'KABUPATEN CIANJUR');
INSERT INTO `regencies` VALUES ('3204', '32', 'KABUPATEN BANDUNG');
INSERT INTO `regencies` VALUES ('3205', '32', 'KABUPATEN GARUT');
INSERT INTO `regencies` VALUES ('3206', '32', 'KABUPATEN TASIKMALAYA');
INSERT INTO `regencies` VALUES ('3207', '32', 'KABUPATEN CIAMIS');
INSERT INTO `regencies` VALUES ('3208', '32', 'KABUPATEN KUNINGAN');
INSERT INTO `regencies` VALUES ('3209', '32', 'KABUPATEN CIREBON');
INSERT INTO `regencies` VALUES ('3210', '32', 'KABUPATEN MAJALENGKA');
INSERT INTO `regencies` VALUES ('3211', '32', 'KABUPATEN SUMEDANG');
INSERT INTO `regencies` VALUES ('3212', '32', 'KABUPATEN INDRAMAYU');
INSERT INTO `regencies` VALUES ('3213', '32', 'KABUPATEN SUBANG');
INSERT INTO `regencies` VALUES ('3214', '32', 'KABUPATEN PURWAKARTA');
INSERT INTO `regencies` VALUES ('3215', '32', 'KABUPATEN KARAWANG');
INSERT INTO `regencies` VALUES ('3216', '32', 'KABUPATEN BEKASI');
INSERT INTO `regencies` VALUES ('3217', '32', 'KABUPATEN BANDUNG BARAT');
INSERT INTO `regencies` VALUES ('3218', '32', 'KABUPATEN PANGANDARAN');
INSERT INTO `regencies` VALUES ('3271', '32', 'KOTA BOGOR');
INSERT INTO `regencies` VALUES ('3272', '32', 'KOTA SUKABUMI');
INSERT INTO `regencies` VALUES ('3273', '32', 'KOTA BANDUNG');
INSERT INTO `regencies` VALUES ('3274', '32', 'KOTA CIREBON');
INSERT INTO `regencies` VALUES ('3275', '32', 'KOTA BEKASI');
INSERT INTO `regencies` VALUES ('3276', '32', 'KOTA DEPOK');
INSERT INTO `regencies` VALUES ('3277', '32', 'KOTA CIMAHI');
INSERT INTO `regencies` VALUES ('3278', '32', 'KOTA TASIKMALAYA');
INSERT INTO `regencies` VALUES ('3279', '32', 'KOTA BANJAR');
INSERT INTO `regencies` VALUES ('3301', '33', 'KABUPATEN CILACAP');
INSERT INTO `regencies` VALUES ('3302', '33', 'KABUPATEN BANYUMAS');
INSERT INTO `regencies` VALUES ('3303', '33', 'KABUPATEN PURBALINGGA');
INSERT INTO `regencies` VALUES ('3304', '33', 'KABUPATEN BANJARNEGARA');
INSERT INTO `regencies` VALUES ('3305', '33', 'KABUPATEN KEBUMEN');
INSERT INTO `regencies` VALUES ('3306', '33', 'KABUPATEN PURWOREJO');
INSERT INTO `regencies` VALUES ('3307', '33', 'KABUPATEN WONOSOBO');
INSERT INTO `regencies` VALUES ('3308', '33', 'KABUPATEN MAGELANG');
INSERT INTO `regencies` VALUES ('3309', '33', 'KABUPATEN BOYOLALI');
INSERT INTO `regencies` VALUES ('3310', '33', 'KABUPATEN KLATEN');
INSERT INTO `regencies` VALUES ('3311', '33', 'KABUPATEN SUKOHARJO');
INSERT INTO `regencies` VALUES ('3312', '33', 'KABUPATEN WONOGIRI');
INSERT INTO `regencies` VALUES ('3313', '33', 'KABUPATEN KARANGANYAR');
INSERT INTO `regencies` VALUES ('3314', '33', 'KABUPATEN SRAGEN');
INSERT INTO `regencies` VALUES ('3315', '33', 'KABUPATEN GROBOGAN');
INSERT INTO `regencies` VALUES ('3316', '33', 'KABUPATEN BLORA');
INSERT INTO `regencies` VALUES ('3317', '33', 'KABUPATEN REMBANG');
INSERT INTO `regencies` VALUES ('3318', '33', 'KABUPATEN PATI');
INSERT INTO `regencies` VALUES ('3319', '33', 'KABUPATEN KUDUS');
INSERT INTO `regencies` VALUES ('3320', '33', 'KABUPATEN JEPARA');
INSERT INTO `regencies` VALUES ('3321', '33', 'KABUPATEN DEMAK');
INSERT INTO `regencies` VALUES ('3322', '33', 'KABUPATEN SEMARANG');
INSERT INTO `regencies` VALUES ('3323', '33', 'KABUPATEN TEMANGGUNG');
INSERT INTO `regencies` VALUES ('3324', '33', 'KABUPATEN KENDAL');
INSERT INTO `regencies` VALUES ('3325', '33', 'KABUPATEN BATANG');
INSERT INTO `regencies` VALUES ('3326', '33', 'KABUPATEN PEKALONGAN');
INSERT INTO `regencies` VALUES ('3327', '33', 'KABUPATEN PEMALANG');
INSERT INTO `regencies` VALUES ('3328', '33', 'KABUPATEN TEGAL');
INSERT INTO `regencies` VALUES ('3329', '33', 'KABUPATEN BREBES');
INSERT INTO `regencies` VALUES ('3371', '33', 'KOTA MAGELANG');
INSERT INTO `regencies` VALUES ('3372', '33', 'KOTA SURAKARTA');
INSERT INTO `regencies` VALUES ('3373', '33', 'KOTA SALATIGA');
INSERT INTO `regencies` VALUES ('3374', '33', 'KOTA SEMARANG');
INSERT INTO `regencies` VALUES ('3375', '33', 'KOTA PEKALONGAN');
INSERT INTO `regencies` VALUES ('3376', '33', 'KOTA TEGAL');
INSERT INTO `regencies` VALUES ('3401', '34', 'KABUPATEN KULON PROGO');
INSERT INTO `regencies` VALUES ('3402', '34', 'KABUPATEN BANTUL');
INSERT INTO `regencies` VALUES ('3403', '34', 'KABUPATEN GUNUNG KIDUL');
INSERT INTO `regencies` VALUES ('3404', '34', 'KABUPATEN SLEMAN');
INSERT INTO `regencies` VALUES ('3471', '34', 'KOTA YOGYAKARTA');
INSERT INTO `regencies` VALUES ('3501', '35', 'KABUPATEN PACITAN');
INSERT INTO `regencies` VALUES ('3502', '35', 'KABUPATEN PONOROGO');
INSERT INTO `regencies` VALUES ('3503', '35', 'KABUPATEN TRENGGALEK');
INSERT INTO `regencies` VALUES ('3504', '35', 'KABUPATEN TULUNGAGUNG');
INSERT INTO `regencies` VALUES ('3505', '35', 'KABUPATEN BLITAR');
INSERT INTO `regencies` VALUES ('3506', '35', 'KABUPATEN KEDIRI');
INSERT INTO `regencies` VALUES ('3507', '35', 'KABUPATEN MALANG');
INSERT INTO `regencies` VALUES ('3508', '35', 'KABUPATEN LUMAJANG');
INSERT INTO `regencies` VALUES ('3509', '35', 'KABUPATEN JEMBER');
INSERT INTO `regencies` VALUES ('3510', '35', 'KABUPATEN BANYUWANGI');
INSERT INTO `regencies` VALUES ('3511', '35', 'KABUPATEN BONDOWOSO');
INSERT INTO `regencies` VALUES ('3512', '35', 'KABUPATEN SITUBONDO');
INSERT INTO `regencies` VALUES ('3513', '35', 'KABUPATEN PROBOLINGGO');
INSERT INTO `regencies` VALUES ('3514', '35', 'KABUPATEN PASURUAN');
INSERT INTO `regencies` VALUES ('3515', '35', 'KABUPATEN SIDOARJO');
INSERT INTO `regencies` VALUES ('3516', '35', 'KABUPATEN MOJOKERTO');
INSERT INTO `regencies` VALUES ('3517', '35', 'KABUPATEN JOMBANG');
INSERT INTO `regencies` VALUES ('3518', '35', 'KABUPATEN NGANJUK');
INSERT INTO `regencies` VALUES ('3519', '35', 'KABUPATEN MADIUN');
INSERT INTO `regencies` VALUES ('3520', '35', 'KABUPATEN MAGETAN');
INSERT INTO `regencies` VALUES ('3521', '35', 'KABUPATEN NGAWI');
INSERT INTO `regencies` VALUES ('3522', '35', 'KABUPATEN BOJONEGORO');
INSERT INTO `regencies` VALUES ('3523', '35', 'KABUPATEN TUBAN');
INSERT INTO `regencies` VALUES ('3524', '35', 'KABUPATEN LAMONGAN');
INSERT INTO `regencies` VALUES ('3525', '35', 'KABUPATEN GRESIK');
INSERT INTO `regencies` VALUES ('3526', '35', 'KABUPATEN BANGKALAN');
INSERT INTO `regencies` VALUES ('3527', '35', 'KABUPATEN SAMPANG');
INSERT INTO `regencies` VALUES ('3528', '35', 'KABUPATEN PAMEKASAN');
INSERT INTO `regencies` VALUES ('3529', '35', 'KABUPATEN SUMENEP');
INSERT INTO `regencies` VALUES ('3571', '35', 'KOTA KEDIRI');
INSERT INTO `regencies` VALUES ('3572', '35', 'KOTA BLITAR');
INSERT INTO `regencies` VALUES ('3573', '35', 'KOTA MALANG');
INSERT INTO `regencies` VALUES ('3574', '35', 'KOTA PROBOLINGGO');
INSERT INTO `regencies` VALUES ('3575', '35', 'KOTA PASURUAN');
INSERT INTO `regencies` VALUES ('3576', '35', 'KOTA MOJOKERTO');
INSERT INTO `regencies` VALUES ('3577', '35', 'KOTA MADIUN');
INSERT INTO `regencies` VALUES ('3578', '35', 'KOTA SURABAYA');
INSERT INTO `regencies` VALUES ('3579', '35', 'KOTA BATU');
INSERT INTO `regencies` VALUES ('3601', '36', 'KABUPATEN PANDEGLANG');
INSERT INTO `regencies` VALUES ('3602', '36', 'KABUPATEN LEBAK');
INSERT INTO `regencies` VALUES ('3603', '36', 'KABUPATEN TANGERANG');
INSERT INTO `regencies` VALUES ('3604', '36', 'KABUPATEN SERANG');
INSERT INTO `regencies` VALUES ('3671', '36', 'KOTA TANGERANG');
INSERT INTO `regencies` VALUES ('3672', '36', 'KOTA CILEGON');
INSERT INTO `regencies` VALUES ('3673', '36', 'KOTA SERANG');
INSERT INTO `regencies` VALUES ('3674', '36', 'KOTA TANGERANG SELATAN');
INSERT INTO `regencies` VALUES ('5101', '51', 'KABUPATEN JEMBRANA');
INSERT INTO `regencies` VALUES ('5102', '51', 'KABUPATEN TABANAN');
INSERT INTO `regencies` VALUES ('5103', '51', 'KABUPATEN BADUNG');
INSERT INTO `regencies` VALUES ('5104', '51', 'KABUPATEN GIANYAR');
INSERT INTO `regencies` VALUES ('5105', '51', 'KABUPATEN KLUNGKUNG');
INSERT INTO `regencies` VALUES ('5106', '51', 'KABUPATEN BANGLI');
INSERT INTO `regencies` VALUES ('5107', '51', 'KABUPATEN KARANG ASEM');
INSERT INTO `regencies` VALUES ('5108', '51', 'KABUPATEN BULELENG');
INSERT INTO `regencies` VALUES ('5171', '51', 'KOTA DENPASAR');
INSERT INTO `regencies` VALUES ('5201', '52', 'KABUPATEN LOMBOK BARAT');
INSERT INTO `regencies` VALUES ('5202', '52', 'KABUPATEN LOMBOK TENGAH');
INSERT INTO `regencies` VALUES ('5203', '52', 'KABUPATEN LOMBOK TIMUR');
INSERT INTO `regencies` VALUES ('5204', '52', 'KABUPATEN SUMBAWA');
INSERT INTO `regencies` VALUES ('5205', '52', 'KABUPATEN DOMPU');
INSERT INTO `regencies` VALUES ('5206', '52', 'KABUPATEN BIMA');
INSERT INTO `regencies` VALUES ('5207', '52', 'KABUPATEN SUMBAWA BARAT');
INSERT INTO `regencies` VALUES ('5208', '52', 'KABUPATEN LOMBOK UTARA');
INSERT INTO `regencies` VALUES ('5271', '52', 'KOTA MATARAM');
INSERT INTO `regencies` VALUES ('5272', '52', 'KOTA BIMA');
INSERT INTO `regencies` VALUES ('5301', '53', 'KABUPATEN SUMBA BARAT');
INSERT INTO `regencies` VALUES ('5302', '53', 'KABUPATEN SUMBA TIMUR');
INSERT INTO `regencies` VALUES ('5303', '53', 'KABUPATEN KUPANG');
INSERT INTO `regencies` VALUES ('5304', '53', 'KABUPATEN TIMOR TENGAH SELATAN');
INSERT INTO `regencies` VALUES ('5305', '53', 'KABUPATEN TIMOR TENGAH UTARA');
INSERT INTO `regencies` VALUES ('5306', '53', 'KABUPATEN BELU');
INSERT INTO `regencies` VALUES ('5307', '53', 'KABUPATEN ALOR');
INSERT INTO `regencies` VALUES ('5308', '53', 'KABUPATEN LEMBATA');
INSERT INTO `regencies` VALUES ('5309', '53', 'KABUPATEN FLORES TIMUR');
INSERT INTO `regencies` VALUES ('5310', '53', 'KABUPATEN SIKKA');
INSERT INTO `regencies` VALUES ('5311', '53', 'KABUPATEN ENDE');
INSERT INTO `regencies` VALUES ('5312', '53', 'KABUPATEN NGADA');
INSERT INTO `regencies` VALUES ('5313', '53', 'KABUPATEN MANGGARAI');
INSERT INTO `regencies` VALUES ('5314', '53', 'KABUPATEN ROTE NDAO');
INSERT INTO `regencies` VALUES ('5315', '53', 'KABUPATEN MANGGARAI BARAT');
INSERT INTO `regencies` VALUES ('5316', '53', 'KABUPATEN SUMBA TENGAH');
INSERT INTO `regencies` VALUES ('5317', '53', 'KABUPATEN SUMBA BARAT DAYA');
INSERT INTO `regencies` VALUES ('5318', '53', 'KABUPATEN NAGEKEO');
INSERT INTO `regencies` VALUES ('5319', '53', 'KABUPATEN MANGGARAI TIMUR');
INSERT INTO `regencies` VALUES ('5320', '53', 'KABUPATEN SABU RAIJUA');
INSERT INTO `regencies` VALUES ('5321', '53', 'KABUPATEN MALAKA');
INSERT INTO `regencies` VALUES ('5371', '53', 'KOTA KUPANG');
INSERT INTO `regencies` VALUES ('6101', '61', 'KABUPATEN SAMBAS');
INSERT INTO `regencies` VALUES ('6102', '61', 'KABUPATEN BENGKAYANG');
INSERT INTO `regencies` VALUES ('6103', '61', 'KABUPATEN LANDAK');
INSERT INTO `regencies` VALUES ('6104', '61', 'KABUPATEN MEMPAWAH');
INSERT INTO `regencies` VALUES ('6105', '61', 'KABUPATEN SANGGAU');
INSERT INTO `regencies` VALUES ('6106', '61', 'KABUPATEN KETAPANG');
INSERT INTO `regencies` VALUES ('6107', '61', 'KABUPATEN SINTANG');
INSERT INTO `regencies` VALUES ('6108', '61', 'KABUPATEN KAPUAS HULU');
INSERT INTO `regencies` VALUES ('6109', '61', 'KABUPATEN SEKADAU');
INSERT INTO `regencies` VALUES ('6110', '61', 'KABUPATEN MELAWI');
INSERT INTO `regencies` VALUES ('6111', '61', 'KABUPATEN KAYONG UTARA');
INSERT INTO `regencies` VALUES ('6112', '61', 'KABUPATEN KUBU RAYA');
INSERT INTO `regencies` VALUES ('6171', '61', 'KOTA PONTIANAK');
INSERT INTO `regencies` VALUES ('6172', '61', 'KOTA SINGKAWANG');
INSERT INTO `regencies` VALUES ('6201', '62', 'KABUPATEN KOTAWARINGIN BARAT');
INSERT INTO `regencies` VALUES ('6202', '62', 'KABUPATEN KOTAWARINGIN TIMUR');
INSERT INTO `regencies` VALUES ('6203', '62', 'KABUPATEN KAPUAS');
INSERT INTO `regencies` VALUES ('6204', '62', 'KABUPATEN BARITO SELATAN');
INSERT INTO `regencies` VALUES ('6205', '62', 'KABUPATEN BARITO UTARA');
INSERT INTO `regencies` VALUES ('6206', '62', 'KABUPATEN SUKAMARA');
INSERT INTO `regencies` VALUES ('6207', '62', 'KABUPATEN LAMANDAU');
INSERT INTO `regencies` VALUES ('6208', '62', 'KABUPATEN SERUYAN');
INSERT INTO `regencies` VALUES ('6209', '62', 'KABUPATEN KATINGAN');
INSERT INTO `regencies` VALUES ('6210', '62', 'KABUPATEN PULANG PISAU');
INSERT INTO `regencies` VALUES ('6211', '62', 'KABUPATEN GUNUNG MAS');
INSERT INTO `regencies` VALUES ('6212', '62', 'KABUPATEN BARITO TIMUR');
INSERT INTO `regencies` VALUES ('6213', '62', 'KABUPATEN MURUNG RAYA');
INSERT INTO `regencies` VALUES ('6271', '62', 'KOTA PALANGKA RAYA');
INSERT INTO `regencies` VALUES ('6301', '63', 'KABUPATEN TANAH LAUT');
INSERT INTO `regencies` VALUES ('6302', '63', 'KABUPATEN KOTA BARU');
INSERT INTO `regencies` VALUES ('6303', '63', 'KABUPATEN BANJAR');
INSERT INTO `regencies` VALUES ('6304', '63', 'KABUPATEN BARITO KUALA');
INSERT INTO `regencies` VALUES ('6305', '63', 'KABUPATEN TAPIN');
INSERT INTO `regencies` VALUES ('6306', '63', 'KABUPATEN HULU SUNGAI SELATAN');
INSERT INTO `regencies` VALUES ('6307', '63', 'KABUPATEN HULU SUNGAI TENGAH');
INSERT INTO `regencies` VALUES ('6308', '63', 'KABUPATEN HULU SUNGAI UTARA');
INSERT INTO `regencies` VALUES ('6309', '63', 'KABUPATEN TABALONG');
INSERT INTO `regencies` VALUES ('6310', '63', 'KABUPATEN TANAH BUMBU');
INSERT INTO `regencies` VALUES ('6311', '63', 'KABUPATEN BALANGAN');
INSERT INTO `regencies` VALUES ('6371', '63', 'KOTA BANJARMASIN');
INSERT INTO `regencies` VALUES ('6372', '63', 'KOTA BANJAR BARU');
INSERT INTO `regencies` VALUES ('6401', '64', 'KABUPATEN PASER');
INSERT INTO `regencies` VALUES ('6402', '64', 'KABUPATEN KUTAI BARAT');
INSERT INTO `regencies` VALUES ('6403', '64', 'KABUPATEN KUTAI KARTANEGARA');
INSERT INTO `regencies` VALUES ('6404', '64', 'KABUPATEN KUTAI TIMUR');
INSERT INTO `regencies` VALUES ('6405', '64', 'KABUPATEN BERAU');
INSERT INTO `regencies` VALUES ('6409', '64', 'KABUPATEN PENAJAM PASER UTARA');
INSERT INTO `regencies` VALUES ('6411', '64', 'KABUPATEN MAHAKAM HULU');
INSERT INTO `regencies` VALUES ('6471', '64', 'KOTA BALIKPAPAN');
INSERT INTO `regencies` VALUES ('6472', '64', 'KOTA SAMARINDA');
INSERT INTO `regencies` VALUES ('6474', '64', 'KOTA BONTANG');
INSERT INTO `regencies` VALUES ('6501', '65', 'KABUPATEN MALINAU');
INSERT INTO `regencies` VALUES ('6502', '65', 'KABUPATEN BULUNGAN');
INSERT INTO `regencies` VALUES ('6503', '65', 'KABUPATEN TANA TIDUNG');
INSERT INTO `regencies` VALUES ('6504', '65', 'KABUPATEN NUNUKAN');
INSERT INTO `regencies` VALUES ('6571', '65', 'KOTA TARAKAN');
INSERT INTO `regencies` VALUES ('7101', '71', 'KABUPATEN BOLAANG MONGONDOW');
INSERT INTO `regencies` VALUES ('7102', '71', 'KABUPATEN MINAHASA');
INSERT INTO `regencies` VALUES ('7103', '71', 'KABUPATEN KEPULAUAN SANGIHE');
INSERT INTO `regencies` VALUES ('7104', '71', 'KABUPATEN KEPULAUAN TALAUD');
INSERT INTO `regencies` VALUES ('7105', '71', 'KABUPATEN MINAHASA SELATAN');
INSERT INTO `regencies` VALUES ('7106', '71', 'KABUPATEN MINAHASA UTARA');
INSERT INTO `regencies` VALUES ('7107', '71', 'KABUPATEN BOLAANG MONGONDOW UTARA');
INSERT INTO `regencies` VALUES ('7108', '71', 'KABUPATEN SIAU TAGULANDANG BIARO');
INSERT INTO `regencies` VALUES ('7109', '71', 'KABUPATEN MINAHASA TENGGARA');
INSERT INTO `regencies` VALUES ('7110', '71', 'KABUPATEN BOLAANG MONGONDOW SELATAN');
INSERT INTO `regencies` VALUES ('7111', '71', 'KABUPATEN BOLAANG MONGONDOW TIMUR');
INSERT INTO `regencies` VALUES ('7171', '71', 'KOTA MANADO');
INSERT INTO `regencies` VALUES ('7172', '71', 'KOTA BITUNG');
INSERT INTO `regencies` VALUES ('7173', '71', 'KOTA TOMOHON');
INSERT INTO `regencies` VALUES ('7174', '71', 'KOTA KOTAMOBAGU');
INSERT INTO `regencies` VALUES ('7201', '72', 'KABUPATEN BANGGAI KEPULAUAN');
INSERT INTO `regencies` VALUES ('7202', '72', 'KABUPATEN BANGGAI');
INSERT INTO `regencies` VALUES ('7203', '72', 'KABUPATEN MOROWALI');
INSERT INTO `regencies` VALUES ('7204', '72', 'KABUPATEN POSO');
INSERT INTO `regencies` VALUES ('7205', '72', 'KABUPATEN DONGGALA');
INSERT INTO `regencies` VALUES ('7206', '72', 'KABUPATEN TOLI-TOLI');
INSERT INTO `regencies` VALUES ('7207', '72', 'KABUPATEN BUOL');
INSERT INTO `regencies` VALUES ('7208', '72', 'KABUPATEN PARIGI MOUTONG');
INSERT INTO `regencies` VALUES ('7209', '72', 'KABUPATEN TOJO UNA-UNA');
INSERT INTO `regencies` VALUES ('7210', '72', 'KABUPATEN SIGI');
INSERT INTO `regencies` VALUES ('7211', '72', 'KABUPATEN BANGGAI LAUT');
INSERT INTO `regencies` VALUES ('7212', '72', 'KABUPATEN MOROWALI UTARA');
INSERT INTO `regencies` VALUES ('7271', '72', 'KOTA PALU');
INSERT INTO `regencies` VALUES ('7301', '73', 'KABUPATEN KEPULAUAN SELAYAR');
INSERT INTO `regencies` VALUES ('7302', '73', 'KABUPATEN BULUKUMBA');
INSERT INTO `regencies` VALUES ('7303', '73', 'KABUPATEN BANTAENG');
INSERT INTO `regencies` VALUES ('7304', '73', 'KABUPATEN JENEPONTO');
INSERT INTO `regencies` VALUES ('7305', '73', 'KABUPATEN TAKALAR');
INSERT INTO `regencies` VALUES ('7306', '73', 'KABUPATEN GOWA');
INSERT INTO `regencies` VALUES ('7307', '73', 'KABUPATEN SINJAI');
INSERT INTO `regencies` VALUES ('7308', '73', 'KABUPATEN MAROS');
INSERT INTO `regencies` VALUES ('7309', '73', 'KABUPATEN PANGKAJENE DAN KEPULAUAN');
INSERT INTO `regencies` VALUES ('7310', '73', 'KABUPATEN BARRU');
INSERT INTO `regencies` VALUES ('7311', '73', 'KABUPATEN BONE');
INSERT INTO `regencies` VALUES ('7312', '73', 'KABUPATEN SOPPENG');
INSERT INTO `regencies` VALUES ('7313', '73', 'KABUPATEN WAJO');
INSERT INTO `regencies` VALUES ('7314', '73', 'KABUPATEN SIDENRENG RAPPANG');
INSERT INTO `regencies` VALUES ('7315', '73', 'KABUPATEN PINRANG');
INSERT INTO `regencies` VALUES ('7316', '73', 'KABUPATEN ENREKANG');
INSERT INTO `regencies` VALUES ('7317', '73', 'KABUPATEN LUWU');
INSERT INTO `regencies` VALUES ('7318', '73', 'KABUPATEN TANA TORAJA');
INSERT INTO `regencies` VALUES ('7322', '73', 'KABUPATEN LUWU UTARA');
INSERT INTO `regencies` VALUES ('7325', '73', 'KABUPATEN LUWU TIMUR');
INSERT INTO `regencies` VALUES ('7326', '73', 'KABUPATEN TORAJA UTARA');
INSERT INTO `regencies` VALUES ('7371', '73', 'KOTA MAKASSAR');
INSERT INTO `regencies` VALUES ('7372', '73', 'KOTA PAREPARE');
INSERT INTO `regencies` VALUES ('7373', '73', 'KOTA PALOPO');
INSERT INTO `regencies` VALUES ('7401', '74', 'KABUPATEN BUTON');
INSERT INTO `regencies` VALUES ('7402', '74', 'KABUPATEN MUNA');
INSERT INTO `regencies` VALUES ('7403', '74', 'KABUPATEN KONAWE');
INSERT INTO `regencies` VALUES ('7404', '74', 'KABUPATEN KOLAKA');
INSERT INTO `regencies` VALUES ('7405', '74', 'KABUPATEN KONAWE SELATAN');
INSERT INTO `regencies` VALUES ('7406', '74', 'KABUPATEN BOMBANA');
INSERT INTO `regencies` VALUES ('7407', '74', 'KABUPATEN WAKATOBI');
INSERT INTO `regencies` VALUES ('7408', '74', 'KABUPATEN KOLAKA UTARA');
INSERT INTO `regencies` VALUES ('7409', '74', 'KABUPATEN BUTON UTARA');
INSERT INTO `regencies` VALUES ('7410', '74', 'KABUPATEN KONAWE UTARA');
INSERT INTO `regencies` VALUES ('7411', '74', 'KABUPATEN KOLAKA TIMUR');
INSERT INTO `regencies` VALUES ('7412', '74', 'KABUPATEN KONAWE KEPULAUAN');
INSERT INTO `regencies` VALUES ('7413', '74', 'KABUPATEN MUNA BARAT');
INSERT INTO `regencies` VALUES ('7414', '74', 'KABUPATEN BUTON TENGAH');
INSERT INTO `regencies` VALUES ('7415', '74', 'KABUPATEN BUTON SELATAN');
INSERT INTO `regencies` VALUES ('7471', '74', 'KOTA KENDARI');
INSERT INTO `regencies` VALUES ('7472', '74', 'KOTA BAUBAU');
INSERT INTO `regencies` VALUES ('7501', '75', 'KABUPATEN BOALEMO');
INSERT INTO `regencies` VALUES ('7502', '75', 'KABUPATEN GORONTALO');
INSERT INTO `regencies` VALUES ('7503', '75', 'KABUPATEN POHUWATO');
INSERT INTO `regencies` VALUES ('7504', '75', 'KABUPATEN BONE BOLANGO');
INSERT INTO `regencies` VALUES ('7505', '75', 'KABUPATEN GORONTALO UTARA');
INSERT INTO `regencies` VALUES ('7571', '75', 'KOTA GORONTALO');
INSERT INTO `regencies` VALUES ('7601', '76', 'KABUPATEN MAJENE');
INSERT INTO `regencies` VALUES ('7602', '76', 'KABUPATEN POLEWALI MANDAR');
INSERT INTO `regencies` VALUES ('7603', '76', 'KABUPATEN MAMASA');
INSERT INTO `regencies` VALUES ('7604', '76', 'KABUPATEN MAMUJU');
INSERT INTO `regencies` VALUES ('7605', '76', 'KABUPATEN MAMUJU UTARA');
INSERT INTO `regencies` VALUES ('7606', '76', 'KABUPATEN MAMUJU TENGAH');
INSERT INTO `regencies` VALUES ('8101', '81', 'KABUPATEN MALUKU TENGGARA BARAT');
INSERT INTO `regencies` VALUES ('8102', '81', 'KABUPATEN MALUKU TENGGARA');
INSERT INTO `regencies` VALUES ('8103', '81', 'KABUPATEN MALUKU TENGAH');
INSERT INTO `regencies` VALUES ('8104', '81', 'KABUPATEN BURU');
INSERT INTO `regencies` VALUES ('8105', '81', 'KABUPATEN KEPULAUAN ARU');
INSERT INTO `regencies` VALUES ('8106', '81', 'KABUPATEN SERAM BAGIAN BARAT');
INSERT INTO `regencies` VALUES ('8107', '81', 'KABUPATEN SERAM BAGIAN TIMUR');
INSERT INTO `regencies` VALUES ('8108', '81', 'KABUPATEN MALUKU BARAT DAYA');
INSERT INTO `regencies` VALUES ('8109', '81', 'KABUPATEN BURU SELATAN');
INSERT INTO `regencies` VALUES ('8171', '81', 'KOTA AMBON');
INSERT INTO `regencies` VALUES ('8172', '81', 'KOTA TUAL');
INSERT INTO `regencies` VALUES ('8201', '82', 'KABUPATEN HALMAHERA BARAT');
INSERT INTO `regencies` VALUES ('8202', '82', 'KABUPATEN HALMAHERA TENGAH');
INSERT INTO `regencies` VALUES ('8203', '82', 'KABUPATEN KEPULAUAN SULA');
INSERT INTO `regencies` VALUES ('8204', '82', 'KABUPATEN HALMAHERA SELATAN');
INSERT INTO `regencies` VALUES ('8205', '82', 'KABUPATEN HALMAHERA UTARA');
INSERT INTO `regencies` VALUES ('8206', '82', 'KABUPATEN HALMAHERA TIMUR');
INSERT INTO `regencies` VALUES ('8207', '82', 'KABUPATEN PULAU MOROTAI');
INSERT INTO `regencies` VALUES ('8208', '82', 'KABUPATEN PULAU TALIABU');
INSERT INTO `regencies` VALUES ('8271', '82', 'KOTA TERNATE');
INSERT INTO `regencies` VALUES ('8272', '82', 'KOTA TIDORE KEPULAUAN');
INSERT INTO `regencies` VALUES ('9101', '91', 'KABUPATEN FAKFAK');
INSERT INTO `regencies` VALUES ('9102', '91', 'KABUPATEN KAIMANA');
INSERT INTO `regencies` VALUES ('9103', '91', 'KABUPATEN TELUK WONDAMA');
INSERT INTO `regencies` VALUES ('9104', '91', 'KABUPATEN TELUK BINTUNI');
INSERT INTO `regencies` VALUES ('9105', '91', 'KABUPATEN MANOKWARI');
INSERT INTO `regencies` VALUES ('9106', '91', 'KABUPATEN SORONG SELATAN');
INSERT INTO `regencies` VALUES ('9107', '91', 'KABUPATEN SORONG');
INSERT INTO `regencies` VALUES ('9108', '91', 'KABUPATEN RAJA AMPAT');
INSERT INTO `regencies` VALUES ('9109', '91', 'KABUPATEN TAMBRAUW');
INSERT INTO `regencies` VALUES ('9110', '91', 'KABUPATEN MAYBRAT');
INSERT INTO `regencies` VALUES ('9111', '91', 'KABUPATEN MANOKWARI SELATAN');
INSERT INTO `regencies` VALUES ('9112', '91', 'KABUPATEN PEGUNUNGAN ARFAK');
INSERT INTO `regencies` VALUES ('9171', '91', 'KOTA SORONG');
INSERT INTO `regencies` VALUES ('9401', '94', 'KABUPATEN MERAUKE');
INSERT INTO `regencies` VALUES ('9402', '94', 'KABUPATEN JAYAWIJAYA');
INSERT INTO `regencies` VALUES ('9403', '94', 'KABUPATEN JAYAPURA');
INSERT INTO `regencies` VALUES ('9404', '94', 'KABUPATEN NABIRE');
INSERT INTO `regencies` VALUES ('9408', '94', 'KABUPATEN KEPULAUAN YAPEN');
INSERT INTO `regencies` VALUES ('9409', '94', 'KABUPATEN BIAK NUMFOR');
INSERT INTO `regencies` VALUES ('9410', '94', 'KABUPATEN PANIAI');
INSERT INTO `regencies` VALUES ('9411', '94', 'KABUPATEN PUNCAK JAYA');
INSERT INTO `regencies` VALUES ('9412', '94', 'KABUPATEN MIMIKA');
INSERT INTO `regencies` VALUES ('9413', '94', 'KABUPATEN BOVEN DIGOEL');
INSERT INTO `regencies` VALUES ('9414', '94', 'KABUPATEN MAPPI');
INSERT INTO `regencies` VALUES ('9415', '94', 'KABUPATEN ASMAT');
INSERT INTO `regencies` VALUES ('9416', '94', 'KABUPATEN YAHUKIMO');
INSERT INTO `regencies` VALUES ('9417', '94', 'KABUPATEN PEGUNUNGAN BINTANG');
INSERT INTO `regencies` VALUES ('9418', '94', 'KABUPATEN TOLIKARA');
INSERT INTO `regencies` VALUES ('9419', '94', 'KABUPATEN SARMI');
INSERT INTO `regencies` VALUES ('9420', '94', 'KABUPATEN KEEROM');
INSERT INTO `regencies` VALUES ('9426', '94', 'KABUPATEN WAROPEN');
INSERT INTO `regencies` VALUES ('9427', '94', 'KABUPATEN SUPIORI');
INSERT INTO `regencies` VALUES ('9428', '94', 'KABUPATEN MAMBERAMO RAYA');
INSERT INTO `regencies` VALUES ('9429', '94', 'KABUPATEN NDUGA');
INSERT INTO `regencies` VALUES ('9430', '94', 'KABUPATEN LANNY JAYA');
INSERT INTO `regencies` VALUES ('9431', '94', 'KABUPATEN MAMBERAMO TENGAH');
INSERT INTO `regencies` VALUES ('9432', '94', 'KABUPATEN YALIMO');
INSERT INTO `regencies` VALUES ('9433', '94', 'KABUPATEN PUNCAK');
INSERT INTO `regencies` VALUES ('9434', '94', 'KABUPATEN DOGIYAI');
INSERT INTO `regencies` VALUES ('9435', '94', 'KABUPATEN INTAN JAYA');
INSERT INTO `regencies` VALUES ('9436', '94', 'KABUPATEN DEIYAI');
INSERT INTO `regencies` VALUES ('9471', '94', 'KOTA JAYAPURA');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `display_name` varchar(30) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `description` varchar(500) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT 1,
  `lock` tinyint(1) NULL DEFAULT NULL,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `UK_user_roles_role_Name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (1, 'administrator', 'Administrator', 'admin', 1, 1, NULL, '2020-01-12 18:45:28', NULL);
INSERT INTO `roles` VALUES (2, 'member', 'Member', 'Member', 1, 1, NULL, '2020-01-03 00:13:44', NULL);
INSERT INTO `roles` VALUES (3, 'mitra', 'Mitra', 'Mitra', 1, 1, '2020-01-05 19:33:56', NULL, NULL);
INSERT INTO `roles` VALUES (6, 'creator', 'Creator', '', 1, NULL, '2020-01-05 09:02:41', NULL, NULL);

-- ----------------------------
-- Table structure for roles_menus
-- ----------------------------
DROP TABLE IF EXISTS `roles_menus`;
CREATE TABLE `roles_menus`  (
  `role_menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`role_menu_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 393 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles_menus
-- ----------------------------
INSERT INTO `roles_menus` VALUES (193, 2, 1, '2020-01-03 04:34:04', '2020-01-03 04:34:04');
INSERT INTO `roles_menus` VALUES (194, 2, 3, '2020-01-03 04:34:04', '2020-01-03 04:34:04');
INSERT INTO `roles_menus` VALUES (195, 2, 5, '2020-01-03 04:34:04', '2020-01-03 04:34:04');
INSERT INTO `roles_menus` VALUES (196, 2, 12, '2020-01-03 04:34:04', '2020-01-03 04:34:04');
INSERT INTO `roles_menus` VALUES (197, 2, 13, '2020-01-03 04:34:04', '2020-01-03 04:34:04');
INSERT INTO `roles_menus` VALUES (379, 1, 1, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (380, 1, 2, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (381, 1, 3, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (382, 1, 4, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (383, 1, 5, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (384, 1, 6, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (385, 1, 7, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (386, 1, 8, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (387, 1, 9, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (388, 1, 10, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (389, 1, 12, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (390, 1, 13, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (391, 1, 22, '2020-01-12 18:50:41', '2020-01-12 18:50:41');
INSERT INTO `roles_menus` VALUES (392, 6, 13, '2020-01-12 18:50:55', '2020-01-12 18:50:55');

-- ----------------------------
-- Table structure for roles_users
-- ----------------------------
DROP TABLE IF EXISTS `roles_users`;
CREATE TABLE `roles_users`  (
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`, `role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of roles_users
-- ----------------------------
INSERT INTO `roles_users` VALUES (1, 1);
INSERT INTO `roles_users` VALUES (2, 2);
INSERT INTO `roles_users` VALUES (3, 2);
INSERT INTO `roles_users` VALUES (4, 2);
INSERT INTO `roles_users` VALUES (5, 2);
INSERT INTO `roles_users` VALUES (7, 2);
INSERT INTO `roles_users` VALUES (8, 2);
INSERT INTO `roles_users` VALUES (12, 1);
INSERT INTO `roles_users` VALUES (13, 1);
INSERT INTO `roles_users` VALUES (14, 1);
INSERT INTO `roles_users` VALUES (15, 1);
INSERT INTO `roles_users` VALUES (16, 1);
INSERT INTO `roles_users` VALUES (17, 2);
INSERT INTO `roles_users` VALUES (18, 1);

-- ----------------------------
-- Table structure for tb_lengkap
-- ----------------------------
DROP TABLE IF EXISTS `tb_lengkap`;
CREATE TABLE `tb_lengkap`  (
  `id_user` int(11) NOT NULL,
  `id_kos` int(11) NOT NULL AUTO_INCREMENT,
  `nama_kos` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `keterangan` varchar(600) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `katagori` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `harga` int(255) NOT NULL,
  `stok` int(11) NOT NULL,
  `gambar` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gambar1` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gambar2` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gambar3` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `no_hp` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `alamat` varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `kampus` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `kota` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id_kos`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 42 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_lengkap
-- ----------------------------
INSERT INTO `tb_lengkap` VALUES (4, 27, 'kos mawa', 'dekat dengan kampus universitas hamzanwadi di lengkapi dngan lemari kasur dan ac ', 'kos cewek cowok', 400000, 1, 'Desain-Rumah-Kos-Kosan-Sederhana-2-Lantai-dengan-Kamar-Berukuran-Kecil-dengan-Pagar_vqd4d7.jpg', 'Begini-Cara-Sukses-Bisnis-Sewa-Kost.jpg', '', '', '0895331261219', 'jalan mulu jadian kaga', 'kosong', '', 'Tangerang');
INSERT INTO `tb_lengkap` VALUES (0, 28, 'kos aldi', 'khusus cewek saja yg bisa ngekos', 'kos cewek', 300000, 3, 'Begini-Cara-Sukses-Bisnis-Sewa-Kost1.jpg', '', '', '', '', '', 'kosong', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 29, 'kos bapak udin', 'dekat dengan kampus 1 universitas hamzanwadi di kos only', 'kos cewek', 300000, 1, 'images_(2).jpeg', '', '', '', '', '', 'kosong', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 30, 'paok motong kos', 'berdekatan dengan pltd paokmotong campur cewek cowok', 'kos cewek', 300000, 1, 'Begini-Cara-Sukses-Bisnis-Sewa-Kost2.jpg', '', '', '', '', '', 'full', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 31, 'kos ibu janah 2', 'sudah di lengkapi dengan ac dan kasur lemari tinggal di tempati', 'kos cowok', 400000, 3, 'hipwee-IMG_0705-750x422.jpg', '', '', '', '087763305916', 'lombok tengah', '', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 32, 'inak leha', 'kos saja kosongan', 'lombok timur', 300000, 1, 'images_(1).jpeg', '', '', '', '', '', 'kosong', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 33, 'ibu uyun', 'khusus kos cewek ', 'lombok timur', 3000000, 1, 'FOTO-KOSAN.jpg', '', '', '', '087763305916', 'mataram', '', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 34, 'kos ibu haji', 'kamar mandi di dalam kasur ada dan lemari free wifi khusus wanita', 'lombok barat', 300000, 4, 'images_(2)1.jpeg', '', '', '', '087763305916', 'lombok barat', '', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 35, 'candra kos', 'kamar mandi di dalam kasur ada dan lemari free wifi khusus wanita', 'lombok timur', 400000, 1, 'images_(1)1.jpeg', '', '', '', '087763305916', 'lombok timur', '', '', '');
INSERT INTO `tb_lengkap` VALUES (0, 36, 'andre kos', 'kamar mandi di dalam kasur ada dan lemari free wifi khusus wanita', 'lombok timur', 300000, 1, 'Begini-Cara-Sukses-Bisnis-Sewa-Kost3.jpg', '', '', '', '087763305916', 'lombok timur', '', '', '');
INSERT INTO `tb_lengkap` VALUES (8, 37, 'kos awal', 'fsilitas lengkap wifi free ', 'Lombok timur', 3000000, 0, 'FOTO-KOSAN1.jpg', 'FOTO-KOSAN2.jpg', 'FOTO-KOSAN3.jpg', 'FOTO-KOSAN4.jpg', '', '', 'kosong', '', '');
INSERT INTO `tb_lengkap` VALUES (8, 38, 'kos ojik', 'kamar mandi di dalam kasur ada dan lemari free wifi khusus wanita', 'Lombok timur', 300000, 1, 'FOTO-KOSAN5.jpg', '', '', '', '', '', 'full', '', '');
INSERT INTO `tb_lengkap` VALUES (8, 40, 'kos ibu ela', 'kasur dan lemari', 'kos cowok', 400000, 1, 'images_(1)2.jpeg', '', '', '', '087763305916', 'jalan raya paokmotong ', 'kosong', 'universitas hamzanwadi', 'lombok tengah');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `nama` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `gambar_user` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(256) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `role_id` int(11) NOT NULL,
  `is_active` int(1) NOT NULL,
  `date_created` int(11) NOT NULL,
  `gambar2` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id_user`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (7, 'wahyu lombok', 'wahyu@gmail.com', 'bebas.jpg', '$2y$10$0RUjsqo4suNQzo.uhtJuTOo1O2nNJMtEuGbPpV/X83RniK2D1mYni', 1, 1, 1574574866, 'bebas.jpg');
INSERT INTO `user` VALUES (8, 'WAHYU TAQDIRUL AZIZ', 'wahyudipe6@gmail.com', 'wahyu1.jpg', '$2y$10$kyjrJkPQOCSCI7nqADNwgOqn57dnQwCgUeEpj9a3c4p19bMjRfOJ6', 2, 1, 1574651408, 'bebas.jpg');
INSERT INTO `user` VALUES (9, 'ibuk candra', 'aziz@gmail.com', 'bebas.jpg', '$2y$10$uoduqr0hcDyteOjNZ9NOZuHO0LwDmCi7HbnslduR8ZrYWvvqZ77DG', 2, 1, 1574737411, 'bebas.jpg');
INSERT INTO `user` VALUES (10, 'ojik', 'admin@gmail.com', '', '$2y$10$Iv/koYTotTyZjhTRPsZE8eLgDCVthg6qhh.gfW3761.iH5DTlYCUi', 2, 1, 1574741199, 'bebas.jpg');
INSERT INTO `user` VALUES (11, 'anggi', 'anggi@gmail.com', '', '$2y$10$Fi17NkxLlNrVvBcwGmMotu1g/IeZ7KhC.snH19oRZSRzoh3WYk4sa', 2, 1, 1575796391, 'bebas.jpg');
INSERT INTO `user` VALUES (12, 'ayip', 'lombokcover@gmail.com', '', '$2y$10$iITKtR2c5MaK5pAdu75NdOyk4h4/nvgU43Vbn2VpEYhbWxTzT0fUG', 2, 1, 1576465734, 'bebas.jpg');
INSERT INTO `user` VALUES (13, 'irfan', 'qcutterz@gmail.com', '', '$2y$10$etN7Ojh5B9DZQCWYPS3OzeIfKV8/LaQ7lHRykd0xYh3Ads/1XQQ7S', 1, 1, 1577506888, 'bebas.jpg');

-- ----------------------------
-- Table structure for user_access_menu
-- ----------------------------
DROP TABLE IF EXISTS `user_access_menu`;
CREATE TABLE `user_access_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `menu_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_access_menu
-- ----------------------------
INSERT INTO `user_access_menu` VALUES (1, 1, 1);
INSERT INTO `user_access_menu` VALUES (2, 1, 2);
INSERT INTO `user_access_menu` VALUES (3, 2, 2);
INSERT INTO `user_access_menu` VALUES (6, 1, 3);
INSERT INTO `user_access_menu` VALUES (7, 1, 7);
INSERT INTO `user_access_menu` VALUES (8, 2, 8);
INSERT INTO `user_access_menu` VALUES (9, 2, 9);
INSERT INTO `user_access_menu` VALUES (10, 1, 9);
INSERT INTO `user_access_menu` VALUES (11, 1, 10);

-- ----------------------------
-- Table structure for user_menu
-- ----------------------------
DROP TABLE IF EXISTS `user_menu`;
CREATE TABLE `user_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_menu
-- ----------------------------
INSERT INTO `user_menu` VALUES (1, 'Admin');
INSERT INTO `user_menu` VALUES (2, 'Member');
INSERT INTO `user_menu` VALUES (3, 'menu');
INSERT INTO `user_menu` VALUES (7, 'Data_barang');
INSERT INTO `user_menu` VALUES (8, 'Member_data');
INSERT INTO `user_menu` VALUES (9, 'edit profil\r\n');
INSERT INTO `user_menu` VALUES (10, 'dashboard');

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (1, 'admin');
INSERT INTO `user_role` VALUES (2, 'user');

-- ----------------------------
-- Table structure for user_sub_menu
-- ----------------------------
DROP TABLE IF EXISTS `user_sub_menu`;
CREATE TABLE `user_sub_menu`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL,
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `url` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `icon` varchar(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_active` int(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_sub_menu
-- ----------------------------
INSERT INTO `user_sub_menu` VALUES (1, 1, 'Dashboard', 'Admin', 'fas fa-fw fa-tachometer-alt', 1);
INSERT INTO `user_sub_menu` VALUES (2, 2, 'MY Profile', 'Member', 'fas fa-fw fa-user', 1);
INSERT INTO `user_sub_menu` VALUES (3, 7, 'Tambah kos', 'Data_barang', 'fas fa-fw fa-database', 1);
INSERT INTO `user_sub_menu` VALUES (4, 3, 'menu', 'Menu', 'fas fa-fw fa-folder', 1);
INSERT INTO `user_sub_menu` VALUES (5, 8, 'Data kos', 'Member_data', 'fas fa-fw fa-database', 1);
INSERT INTO `user_sub_menu` VALUES (6, 9, 'edit profil', 'Member/edit', 'fas fa-fw fa-user', 1);
INSERT INTO `user_sub_menu` VALUES (7, 1, 'Dashboard', 'dashboard', 'fas fa-fw fa-tachometer-alt', 1);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `username` varchar(100) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `code` varchar(6) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `picture` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL,
  `is_admin` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` timestamp(0) NULL DEFAULT NULL,
  `updated_at` timestamp(0) NULL DEFAULT NULL,
  `deleted_at` timestamp(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Admin', 'admin', '$2y$10$ZMQOPfEVLtMrp51j9i3JBeKeOrOXEbvK/XZ2NYx48QqdM766dJBB.', '', NULL, 1, 1, NULL, NULL, NULL);
INSERT INTO `users` VALUES (3, 'riky', 'riky@gmail.com', '$2y$10$08eYVwthB.6eDsY4xp/v1.F8m6LsJC2rz5q/yNrZkbLqcGZ.oRJ5S', NULL, NULL, 0, 1, '2019-12-30 03:41:30', NULL, NULL);
INSERT INTO `users` VALUES (4, 'Irfan Rifai', 'qcutterz@gmail.com', '$2y$10$2fB/yYh9mw.MqTpl/W3PkOfF1.C0yrbJw/aZTybYd5dCRDaPM2eeG', NULL, NULL, 0, 1, '2019-12-30 07:30:12', NULL, NULL);
INSERT INTO `users` VALUES (5, 'Irfan', 'irfan@gmail.com', '$2y$10$Ittzfbr6lzvrw6U.VmL9veX7FrfSVucAfQWvKD6qsb8D/KjawQtbq', NULL, NULL, 0, 1, '2019-12-30 10:05:36', NULL, NULL);
INSERT INTO `users` VALUES (7, 'Dzakiyyah Studio', 'dzakiyyah@gmail.com', '$2y$10$DMSp0.dY15q7eBcgb2t69OmFBEUnuC3TD7p68U4/XXQXQvA9K3dWy', NULL, NULL, 0, 1, '2020-01-03 08:15:44', NULL, NULL);
INSERT INTO `users` VALUES (8, 'Siti Ucu Fatimah', 'siti_ucu@gmail.com', '$2y$10$KGQO/dhzPxT8pNNws4SZ6.X8C0aPlWHzTGB7p5FMcI.Wz/oY0Y3GG', NULL, NULL, 0, 1, '2020-01-03 08:35:37', NULL, NULL);
INSERT INTO `users` VALUES (12, 'Irfan Rifai', 'putradongkal', '$2y$10$LGTHPi/cw75GPgAwLk1xy.B8kNjqpIB/pfruLOzdxlSm./rkyy4re', NULL, '505e3d6e99515f9d1404dc25e2fd7d5c.png', 1, 1, '2020-01-05 09:20:42', '2020-01-05 17:25:00', NULL);
INSERT INTO `users` VALUES (13, 'Dzakiyyah Thalita Fairuz', 'dzakiyyah', '$2y$10$RUAbpIf7sVOSREvO7JZyEOlnyVCXdAYNk3kzeRDJoAAhWe/dM1Mv.', NULL, '4e01855af650a138e0a25d29c7ce954e.png', 1, 1, '2020-01-05 09:35:14', '2020-01-05 15:07:40', '2020-01-05 17:25:08');
INSERT INTO `users` VALUES (15, 'Wahyu Ganteng Bukan Kaleng Kaleng', 'wahyu', '$2y$10$8jHrA8kSWfm04ORYd6To7OxO6N7c3qQR/sz5kh9Ni4xC4zEqfivAu', NULL, '7e20479e06f36edbb4cd74b67c1a5229.png', 1, 1, '2020-01-05 15:42:23', '2020-01-05 15:42:55', '2020-01-05 15:43:03');
INSERT INTO `users` VALUES (16, 'Wahyu Ganteng Bukan Kaleng Kaleng', 'wahyu123', '$2y$10$YhDY.29FFSd/x.XCoAmmbebpnzuDfOjQS3qDai9dd5wHFxkUFjVsK', NULL, 'ae7dd20e47b8531a3f93b30e0a8380cb.png', 1, 1, '2020-01-05 15:56:54', '2020-01-05 15:57:15', '2020-01-05 15:57:27');
INSERT INTO `users` VALUES (17, 'operator 1', 'op@mail.com', '$2y$10$yDg6HQFYQhwPVVdWJI4fw.NPKtpPKMAc56sXX4eHDbtKlpRZOyzYC', NULL, NULL, 0, 1, '2020-01-12 18:16:42', NULL, NULL);
INSERT INTO `users` VALUES (18, 'Anita Rahmawati Sintya', 'anita', '$2y$10$RRoE2fxw7TZ7c7Os9lAX8O3rMQxSfijoD58vqyF1TU1LfAZH5n1sm', NULL, '66bf98425b246037dbe16613a3751257.JPG', 1, 1, '2020-01-12 18:53:35', '2020-01-12 18:53:52', '2020-01-12 18:55:32');

SET FOREIGN_KEY_CHECKS = 1;
