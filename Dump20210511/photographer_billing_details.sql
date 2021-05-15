-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: photographer
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `billing_details`
--

DROP TABLE IF EXISTS `billing_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `billing_details` (
  `name` varchar(45) NOT NULL,
  `district` varchar(45) NOT NULL,
  `contactNumber` int NOT NULL,
  `iduser` int NOT NULL,
  `date` varchar(45) NOT NULL,
  `total` int NOT NULL,
  ` paymode` varchar(45) NOT NULL DEFAULT 'online',
  `status` varchar(45) DEFAULT NULL,
  `bill_id` int NOT NULL AUTO_INCREMENT,
  `adrs` varchar(45) NOT NULL,
  `paymode` varchar(45) NOT NULL,
  PRIMARY KEY (`bill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billing_details`
--

LOCK TABLES `billing_details` WRITE;
/*!40000 ALTER TABLE `billing_details` DISABLE KEYS */;
INSERT INTO `billing_details` VALUES ('naina kumari','prayagraj',87654,7,'Sun May 09 2021',18,'online','completed',9,'jhalwa prayagraj','COD'),('naina kumari','prayagraj',6785,7,'Sun May 09 2021',18,'online','shipped',10,'jhalwa','COD'),('naina kumari','prayagraj',87654,7,'Sun May 09 2021',18,'online','Pending',11,'jhalwa prayagraj','COD'),('naina kumari','prayagraj',4567,7,'Sun May 09 2021',18,'online','Pending',12,'jhalwa','COD'),('bhu','bh',578,7,'Sun May 09 2021',18,'online','Pending',13,'bh','COD'),('kk','kk',99,7,'Sun May 09 2021',12,'online','Pending',14,'kk','COD'),('kk','kk',11,7,'Sun May 09 2021',54,'online','completed',15,'kk','COD'),('naina','pryagraj',870,7,'Sun May 09 2021',11,'online','Pending',16,'jhalwa','COD'),('n,','ddddddddddd',333333,7,'Mon May 10 2021',5,'online','Pending',17,'de','COD'),('ehjknm,','dddd',11111111,7,'Mon May 10 2021',18,'online','Pending',18,'nbx','COD'),('Sh','sh',11,7,'Mon May 10 2021',54,'online','Pending',19,'sh','COD'),('ll','ll',11,7,'Mon May 10 2021',48,'online','Pending',20,'ll','COD'),('shruti','ghu',20,9,'Tue May 11 2021',360,'online','Pending',21,'guh','Online'),('Shruti','g',2,9,'Tue May 11 2021',40,'online','Pending',22,'g','Online'),('sfr','s',1,9,'Tue May 11 2021',360,'online','Pending',23,'dd','Online'),('Shruti Nanda','Prayagraj',122,9,'Tue May 11 2021',350,'online','shipped',24,'Jhalwa','Online'),('Shruti Nanda','Prayagraj',12345,9,'Tue May 11 2021',140,'online','Shipped',25,'jhalwa','Online'),('Shruti Nanda','Gaya',99316236,2,'Tue May 11 2021',120,'online','Pending',26,'manpur','COD');
/*!40000 ALTER TABLE `billing_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-11 22:19:21
