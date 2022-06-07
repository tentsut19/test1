-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: 10.10.60.224    Database: ecommerce
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(40) DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `email` varchar(96) DEFAULT NULL,
  `firstname` varchar(32) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `ip` varchar(40) DEFAULT NULL,
  `lastname` varchar(32) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `salt` varchar(9) DEFAULT NULL,
  `status` tinyint DEFAULT NULL,
  `store_id` int DEFAULT NULL,
  `user_group_id` int DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `type` varchar(40) DEFAULT 'seller',
  `country_id` int DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `username` (`username`),
  KEY `password` (`password`),
  KEY `email` (`email`),
  KEY `user_group_id` (`user_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'ADMIN','2015-05-25 20:48:20','tidanan@ctc-g.co.th','Super','','127.0.0.1','Admin','dstXiFfM8E+9YpII84tLnQ==','759b176a0',1,0,1,'densoadmin','admin',0),(6,'SELLER0001','2021-07-13 15:53:55','ryansatc@gmail.com','admin','pic','127.0.0.1','admin111','JqIcqxSqKNXEYpm9durBOA==','ZN07u0Ve',1,1,1,'adminadmin','seller',NULL),(10,NULL,'2021-11-10 18:48:44','ss@gmail.com','nick11a','http://localhost:8443/admin/files/1636544918790_1636544923267.png','127.0.0.1','nick22a','vOXkadExsZu7n+HAKxcXGA==','cjkNSKeo',1,2,11,'nickpisit3','seller',6),(15,NULL,'2021-11-17 21:24:58','test@gmail.com','nick3','http://10.10.60.224:8088/admin/files/webapps','127.0.0.1','pisit','JsGGmMDcZ+a5TfqXnewa9A==','MLRvQ7WT',1,2,11,'nick3','seller',100),(16,NULL,'2022-01-26 19:01:27','nick-admin@gmail.com','nick','http://localhost:8443/admin/files/1643198464500_1643198486999.png','127.0.0.1','admin','NTCHSQOyujA5nrMtMlIMOg==','jUEIuASp',1,0,1,'nickadmin','admin',0),(17,NULL,'2022-01-26 19:03:16','nick-ogc@gmail.com','nick','http://localhost:8443/admin/files/1643198577730_1643198595470.png','127.0.0.1','ogc','h3fCglikz2AZzkecaECHLA==','rs4C0PIz',1,0,1,'nickogc','ogc',209),(18,NULL,'2022-01-26 19:04:48','nick-seller@gmail.com','nick','http://localhost:8443/admin/files/1643198675024_1643198688203.png','127.0.0.1','seller','h3fCglikz2AZzkecaECHLA==','rs4C0PIz',1,2,4,'nickseller','seller',209),(24,NULL,'2022-03-08 16:52:26','limdragon.t@gmail.com ','Tidanan ','http://10.10.60.224:8088/admin/files/1646733118958_1646733145533.png','127.0.0.1','Boonchaeng ','c5SMXGIsfEvRzq1raEq7Gg==','gXIumDSf',1,0,26,'TB','ogc',209),(30,NULL,'2022-03-08 17:48:00','tidanan@ctc-g.co.th ','Peerayuth','http://10.10.60.224:8088/admin/files/1646736426364_1646736479670.png','127.0.0.1','Keawkosum','b5sijiFAUI6nGUvLqIGogA==','fw1ieUtn',1,31,25,'Peerayuth.K','seller',209),(31,NULL,'2022-03-08 22:33:38','limdragon.t@gmail.com','ธิดานันท์',NULL,'127.0.0.1','บุญแจ้ง','XRkNsEpPErF0OjDtaH8jFA==','sftA1OL0',1,32,29,'MalayG','seller',129),(32,NULL,'2022-03-09 16:48:50','tidanan@ctc-g.co.th','Manop',NULL,'127.0.0.1','Boonpasertsuk','usK3Jkp3QikXv+8Hu/Repg==','liL6Dwyd',1,36,25,'Manop.B','seller',209),(33,NULL,'2022-03-09 16:51:30','tidananb@gmail.com','Tengku',NULL,'127.0.0.1','Che ','UIYocWHFgz7E75Btjzb00g==','J9f4wZam',1,33,29,'Tengku.Che ','seller',129),(35,NULL,'2022-03-09 17:47:13','tidanan@ctc-g.co.th','Piyaporn','http://10.10.60.224:8088/admin/files/1646822827677_1646822832736.png','127.0.0.1','Limpanadusadee','5wejByd3lZgHgw9mam7UoA==','Zu9U5PXk',1,0,26,'Piyaporn.L','ogc',209),(36,NULL,'2022-03-09 17:54:20','tidanan@ctc-g.co.th','Surapapra','http://10.10.60.224:8088/admin/files/1646823126337_1646823259973.png','127.0.0.1','Longpanaditsakul','B+GtpjqJIA7V0qyHa59ofA==','31iaEfFY',1,36,25,'Surapapra.L','seller',209),(37,NULL,'2022-03-09 18:02:05','tidnaan@ctc-g.co.th','Sompong','http://10.10.60.224:8088/admin/files/1646823718292_1646823724943.png','127.0.0.1','Lim','5hUV4oKxsVRj5P2zUvgxMQ==','LeccaZPO',1,38,35,'Sompong.L','seller',209),(38,NULL,'2022-03-09 18:09:58','tidanan@ctc-g.com','Tidanan','http://10.10.60.224:8088/admin/files/1646824190885_1646824197446.png','127.0.0.1','Boonchaeng','LrVs1UxAj8GibKH4zM3/yQ==','9glqVM3a',1,0,26,'Tidanan.B','ogc',209),(39,NULL,'2022-03-09 18:46:01','nick2@gmail.com','nick2',NULL,'127.0.0.1','test2','V1vLgAqnD+m83fy7BNqqZw==','DWV3rlbD',1,0,11,'nick02','ogc',209),(40,NULL,'2022-03-10 11:42:46','nickogc03@gmail.com','nickogc03',NULL,'127.0.0.1','nickogc03','jROhYYZ8mhetuyVpWYFSgg==','vtb4uaTi',1,0,22,'nickogc03','ogc',209),(41,NULL,'2022-03-10 13:39:34','tidanan@ctc-g.co.th','Super','','127.0.0.1','Admin ','zARzx2n/rdCEq59Hf0oWCQ==','l9ibMKgw',1,0,32,'SuperAdmin','admin',0),(42,NULL,'2022-03-10 13:40:55','tidanan@ctc-g.co.th','OGC',NULL,'127.0.0.1','Admin','AWJJrkdCTJle+cniepM2Fw==','ym5YVDXw',1,0,26,'OGCAdmin','ogc',209),(43,NULL,'2022-03-10 13:45:52','tidanan@ctc-g.co.th','Seller',NULL,'127.0.0.1','Admin','bTpdrGFDyRFj9F5Kd+isHQ==','wNr6fr4L',1,33,29,'SellerMA','seller',129),(44,NULL,'2022-03-10 13:47:04','tidanan@ctc-g.co.th','Seller','http://10.10.60.224:8088/admin/files/1646980717868_1646980719522.png','127.0.0.1','Admin','lzLF/A7m1o8rLpV1EmGhIw==','QiNWDPbK',1,0,25,'SellerTH','seller',0),(45,NULL,'2022-03-10 13:48:31','tidanan@ctc-g.co.th','Seller',NULL,'127.0.0.1','Admin','Qsgs2i751hTbg0JIQBYjOA==','gUEfLckw',1,21,33,'SellerMY','seller',146),(46,NULL,'2022-03-10 14:08:03','tidanan@ctc-g.co.th','OGC',NULL,'127.0.0.1','Admin','7EP89XdG66I2bU8MfOk+kw==','26pdbp9Y',1,0,29,'OGCMA','ogc',129),(47,NULL,'2022-03-10 15:38:10','tidanan@ctc-g.co.th','Thanakrit','','127.0.0.1','Watthana','g/00e1ZV1UaN9B16NTeLZQ==','Ju6sXDhL',1,0,26,'ThanakritW.','ogc',209),(49,NULL,'2022-03-14 09:38:54','tidnaanb@gmail.com','Rungsiwut','http://10.10.60.224:8088/admin/files/1647225531455_1647225533673.png','127.0.0.1','TT','fMhusXRJ/r/3gdWoFl6H2Q==','gKez6gYt',1,38,35,'Rungsiwut.T','seller',209),(50,NULL,'2022-03-14 16:01:39','tidanan@ctc-g.co.th','TEA','http://10.10.60.224:8088/admin/files/1647248486231_1647248498842.png','127.0.0.1','ZEN','xuYsiRfpLfyBtw7I/pJ4mA==','LNSJGShB',0,36,25,'TEAZEN','seller',209),(53,NULL,'2022-03-17 16:30:16','limdragon.t@gmail.com','Seller101','http://10.10.60.224:8088/admin/files/1647509411524_1647509415694.png','127.0.0.1','Yoo','McWaRCj6bK52+A2hWfVk7Q==','Tsel6CQY',1,0,35,'Seller101','admin',0),(54,NULL,'2022-03-17 21:43:14','mt.dragonfang07@gmail.com','MARK T','http://10.10.60.224:8088/admin/files/1647527929319_1647528193772.png','127.0.0.1','TUAN T','yfkN6FQT01s2z1nyQvQl2g==','OKOQswjk',1,36,31,'M.TUAN','seller',209),(55,NULL,'2022-03-24 15:09:10','limdragon.t@gmail.com','JB','http://10.10.60.224:8088/admin/files/1648109345263_1648109349816.png','127.0.0.1','Seller','K48GSxgUYuxA78CZWONIWg==','fKOwtB2F',1,0,35,'JBSeller101','admin',0),(56,NULL,'2022-03-26 00:24:17','limdragon.t@gmail.com','Manop','http://10.10.60.224:8088/admin/files/1648229049850_1648229057198.png','127.0.0.1','Tanut','V0QI0DSXhpmpO7ymAjXoKQ==','sKqitBKh',1,0,26,'MT.007','ogc',209),(57,NULL,'2022-03-28 09:40:30','tidananb@gmail.com ','Nara','http://10.10.60.224:8088/admin/files/1648435224621_1648435230038.png','127.0.0.1','Nuna','RNp74zETRiwA+KAttixIOQ==','bHzgNbSr',1,33,29,'SellerMA0','seller',129),(58,NULL,'2022-03-28 13:49:44','tidananb@gmail.com','Admin','http://10.10.60.224:8088/admin/files/1648450175272_1648450184070.png','127.0.0.1','Seller101','E7DpHnkwys3PuG/tbkEtYw==','vUOq8qjA',1,38,35,'AdminSeller101','seller',209),(59,NULL,'2022-03-30 14:06:48','limdragon.t@gmail.com','JB',NULL,'127.0.0.1','Seller','VOZd3cSD6c3HYrG7v3SUpg==','lEmKK4j7',1,38,35,'JBSeller1011','seller',209),(60,NULL,'2022-04-01 17:01:30','limdragon.t@gmail.com','Seller200','http://10.10.60.224:8088/admin/files/1648807282703_1648807289548.png','127.0.0.1','Seller200','mI4xl66udnVfbUCXQiw70Q==','uIeX98ZZ',1,40,37,'Seller200','seller',209),(61,NULL,'2022-04-01 22:11:33','tidananb@gmail.com','OGCMA0','http://10.10.60.224:8088/admin/files/1648826512935_1648826514623.png','127.0.0.1','OGCMA0','n3RIcxL+dnijPnb5dv4xFQ==','QV0pYyTc',1,0,39,'OGCMA01','ogc',129),(62,NULL,'2022-04-01 22:29:22','tidanan@ctc-g.co.th','FANG','http://10.10.60.224:8088/admin/files/1648826954558_1648826962183.png','127.0.0.1','OGC','NTpl6hLaXEXcaFnbqYHWlA==','1bo2mm7l',1,0,26,'FANG-OGC','ogc',209),(63,NULL,'2022-04-01 22:30:42','tidanan@ctc-g.co.th ','Seller200','http://10.10.60.224:8088/admin/files/1648827033246_1648827041424.png','127.0.0.1','TH','QCEO8elspxFac0cSWSsmFA==','83CTXxYJ',1,40,37,'Seller200TH','seller',209),(64,NULL,'2022-04-01 22:33:03','tidanan@ctc-g.co.th','FANG','http://10.10.60.224:8088/admin/files/1648827177540_1648827183021.png','127.0.0.1','200','F+UDf5dcqAnNozPajst0Ug==','URmJjKAJ',0,40,37,'FANG200','seller',209),(65,NULL,'2022-04-04 20:59:19','tidananb@gmail.com','Super','http://10.10.60.224:8088/admin/files/1649080751142_1649080759005.png','127.0.0.1','Admin','w7cYqETyohLVPx8x4GS69w==','tYgNAP7r',1,0,47,'SuperAdminTH','admin',0),(66,NULL,'2022-04-04 21:03:47','tidananb@gmail.com','MT','http://10.10.60.224:8088/admin/files/1649081009949_1649081026768.png','127.0.0.1','OGC Thailand','Z1LFxf19pBq/KwNas2h+Xg==','lbLhd62U',1,0,49,'MTOGC','ogc',209),(67,NULL,'2022-04-04 21:09:52','tidananb@gmail.com','Seller23','http://10.10.60.224:8088/admin/files/1649081373450_1649081391819.png','127.0.0.1','Thailand','ZC4bOYAgdlakFCeq2J0ILQ==','c5TDSIp1',1,38,50,'Seller23TH','seller',209),(68,NULL,'2022-04-04 21:20:49','tidananb@gmail.com','FANG',NULL,'127.0.0.1','TB','plEv8A6S+Ck59V8wMIZlaw==','pWx43uvX',1,36,51,'FANGSeller','seller',209),(69,NULL,'2022-04-04 21:27:49','tidananb@gmail.com','YJ','','127.0.0.1','Thailand','EphRVdTNAA0YIk1n1czclA==','QxKlCefb',1,0,50,'YJOGC','ogc',209),(70,NULL,'2022-04-05 09:41:33','tidananb@gmail.com','Arissara',NULL,'127.0.0.1','Chujai','bG4lrRoJWtXZI2yf5BJtYg==','UJe866oy',1,0,26,'Arissara.C','ogc',209),(71,NULL,'2022-04-05 15:31:50','tidananb@gmail.com','Seller','http://10.10.60.224:8088/admin/files/1649147503085_1649147509987.png','127.0.0.1','50','wpuTBEZcHQCVdvj+3w/YzQ==','B5aHr4Fk',1,42,58,'Seller50','seller',209),(72,NULL,'2022-04-05 21:33:24','tidananb@gmail.com','Seller','http://10.10.60.224:8088/admin/files/1649169197123_1649169204179.png','127.0.0.1','JY1','QYvN1O3vNfzIZZbjgwoi8Q==','rh6Bj0QS',1,36,25,'SellerJY1','seller',209),(73,NULL,'2022-04-05 21:42:39','limdragon.t@gmail.com','TB','','127.0.0.1','SuperAdmin','S09wxKYzdJYx65phPBPAmw==','Bz5ok8W9',1,0,1,'TBSuperAdmin','admin',0),(74,NULL,'2022-04-05 21:44:52','limdragon.t@gmail.com ','TB',NULL,'127.0.0.1','OGC','MkIe1sH7DALSEHjcOL3Cdw==','beZAMELB',1,0,55,'TBOGC','ogc',209),(75,NULL,'2022-04-05 21:46:33','tidananb@gmail.com','TB',NULL,'127.0.0.1','Seller','kFSTCwkIqjA2QQerZaJMWA==','QHHaaK2z',1,36,25,'TBSeller','seller',209),(76,NULL,'2022-04-05 22:01:04','limdragon.t@gmail.com','New','','127.0.0.1','Super Admin','G76TfqlS6i7GxfUvsO8V8Q==','MJRUQtCn',1,0,59,'NewSuperAdmin','admin',0),(77,NULL,'2022-04-08 13:36:24','tidananb@gmail.com','BB',NULL,'127.0.0.1','Seller','pj+4RyT/G9UZp8VbkeR/Jw==','J1MjGdSQ',1,36,57,'ฺฺBBseller','seller',209),(78,NULL,'2022-04-08 14:02:08','tidananb@gmail.com','BB','','127.0.0.1','Super Admin','LmgvQxjAzKw3MGbcPu6ORw==','WKqJ9Pg7',1,0,60,'BBSuperAdmin','admin',0),(79,NULL,'2022-04-08 14:03:50','katsiri@gmail.com','BB',NULL,'127.0.0.1','OGC','7GDf4dg5zc0KxxwcS8yrOw==','ty5g8lyp',1,0,61,'BBOGC','ogc',209),(80,NULL,'2022-04-08 14:05:36','limdragon.t@gmail.com','TT',NULL,'127.0.0.1','Seller','pnmQmhH9BuSPKhovEgB0yg==','oV1IrYl6',1,36,57,'TTSeller','seller',209),(81,NULL,'2022-04-08 14:27:32','limdragon.t@gmail.com','JJ',NULL,'127.0.0.1','OGC','gwPraognqaTKzg2StJFZZQ==','sYbuXDqM',1,0,26,'๋๋JJOGC','ogc',209),(82,NULL,'2022-04-08 14:54:09','nickpisit1@gmail.com','nick',NULL,'127.0.0.1','pisit','hLjrJQ/+1XdDVFGbHFSkuQ==','uvjBcwst',1,0,26,'nick-ogc-2','ogc',209),(83,NULL,'2022-04-08 16:16:40','tidananb@gmail.com','TEST',NULL,'127.0.0.1','OGC','mLfqr0+Ytqd7ond1DGHYzg==','zVaxSoY2',1,0,55,'TESTOGC','ogc',209),(84,NULL,'2022-04-08 16:17:57','tidananb@gmail.com','OGC',NULL,'127.0.0.1','MA','Jq4q+V5Pde6tu7PFvp879w==','ukYs0ofH',1,0,39,'OGC MA','ogc',129),(85,NULL,'2022-04-08 17:14:06','limdragon.t@gmail.com','OGC',NULL,'127.0.0.1','MA0','OmNJpHBtj89hkTccW8ti+g==','mE12dj7B',1,0,39,'OGCMA0','ogc',129);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-07 16:09:32