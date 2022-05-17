--
-- Table structure for table `geo_zone`
--

DROP TABLE IF EXISTS `geo_zone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `geo_zone` (
  `geo_zone_id` int NOT NULL AUTO_INCREMENT,
  `store_id` int unsigned DEFAULT NULL,
  `date_added` datetime DEFAULT NULL,
  `date_modified` datetime DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `description_alt` varchar(250) DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`geo_zone_id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `geo_zone`
--

LOCK TABLES `geo_zone` WRITE;
/*!40000 ALTER TABLE `geo_zone` DISABLE KEYS */;
INSERT INTO `geo_zone` VALUES (3,NULL,'2009-01-06 23:26:25','2010-02-26 22:33:24','UK VAT',NULL,'UK VAT Zone'),(5,NULL,'2015-05-29 15:23:14','2019-04-07 00:40:22','ส่งลงทะเบียน Registered รับสินค้าภายใน5-7วัน *ไม่รวมวันเตรียมสินค้า','Registered shipment, get by 5-7 days. *After goods preparation done','ส่งลงทะเบียน Registered รับสินค้าภายใน5-7วัน *ไม่รวมวันเตรียมสินค้า'),(6,NULL,'2015-05-29 15:35:01','2019-04-26 11:45:26','ส่ง Kerry รับสินค้าภายใน 1-3วัน *ไม่รวมวันเตรียมสินค้า','Shipping by Kerry express, get by 1-3 days. *After goods preparation done','ส่ง Kerry รับสินค้าภายใน 1-3วัน *ไม่รวมวันเตรียมสินค้า'),(7,NULL,'2015-05-29 15:35:56','2016-05-16 23:46:42','ส่ง EMS ได้รับสินค้าภายใน 1-3 วัน *ไม่รวมวันเตรียมสินค้า','EMS shipment, get by 1-3 days. *After goods preparation done','ส่ง EMS ได้รับสินค้าภายใน 1-3 วัน *ไม่รวมวันเตรียมสินค้า'),(9,NULL,'2015-06-05 22:04:50','2015-06-08 16:44:28','DHL Global Mail - Asia / Rest of Asia / Middle East',NULL,'DHL Global Mail-Asia,Mid. East'),(10,NULL,'2015-06-05 22:07:12','2015-06-08 16:44:04','DHL Courier Express - Asia / Rest of Asia / Middle East',NULL,'DHL Courier Express-Asia,MiEast'),(11,NULL,'2015-06-05 22:09:45','2015-06-08 15:25:37','DHL Global Mail - Oceania / Europe / Africa',NULL,'DHL Global Mail-Europe, Africa'),(12,NULL,'2015-06-05 22:11:46','2015-06-08 22:03:46','DHL Courier Express - Oceania / Europe / Africa',NULL,'DHL Courier Express-Europe,Afri'),(13,NULL,'2015-06-05 22:14:50','2015-06-08 15:48:37','DHL Global Mail - USA / Canada / Central &amp; South America',NULL,'DHL Global Mail-N.&amp;S.America'),(14,NULL,'2015-06-05 22:22:20','2015-06-08 15:44:24','DHL Courier Express - USA / Canada / Central &amp; South America',NULL,'DHL Courier Express-N.S.America'),(15,2,'2015-09-25 13:48:26','0000-00-00 00:00:00','DHL Express - Zone A',NULL,'DHL Express - Zone A'),(16,2,'2015-09-25 13:56:53','0000-00-00 00:00:00','DHL Express - Zone B',NULL,'DHL Express - Zone B'),(17,2,'2015-09-25 13:59:30','0000-00-00 00:00:00','DHL Express - Zone C',NULL,'DHL Express - Zone C'),(18,2,'2015-09-25 14:01:29','0000-00-00 00:00:00','DHL Express - Zone D',NULL,'DHL Express - Zone D'),(19,2,'2015-09-25 14:07:59','0000-00-00 00:00:00','DHL Express - Zone E',NULL,'DHL Express - Zone E'),(20,NULL,'2015-09-25 14:16:13','0000-00-00 00:00:00','DHL Express - Zone F',NULL,'DHL Express - Zone F'),(21,NULL,'2015-09-25 15:16:16','0000-00-00 00:00:00','DHL Express - Zone G',NULL,'DHL Express - Zone G'),(33,NULL,'2021-11-24 11:27:54','2021-11-24 11:27:54','North  East Zone',NULL,'North East Zone'),(35,36,'2022-03-11 15:58:44','2022-03-22 13:31:46','Provide shipping Bangkok Zone 2',NULL,'Bangkok Zone 2'),(39,36,'2022-03-15 10:46:20','2022-03-15 10:46:20',' North East Zone',NULL,' North East Zone'),(40,33,'2022-03-30 17:19:35','2022-03-30 17:19:35','Center City',NULL,'Center '),(41,38,'2022-03-31 15:01:35','2022-03-31 15:01:46','nick',NULL,'nick'),(42,40,'2022-04-01 17:02:03','2022-04-01 17:02:03','Center',NULL,'Center');
/*!40000 ALTER TABLE `geo_zone` ENABLE KEYS */;
UNLOCK TABLES;
