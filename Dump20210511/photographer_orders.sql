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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `date` varchar(45) NOT NULL,
  `paymode` varchar(45) NOT NULL,
  `pr_name` varchar(45) DEFAULT 'photos',
  `pr_price` int NOT NULL,
  `pr_qty` int NOT NULL,
  `pr_total` int NOT NULL,
  `bill_id` int NOT NULL,
  `iduser` int NOT NULL,
  `bill_amount` int NOT NULL,
  `idorder` int NOT NULL AUTO_INCREMENT,
  `size` varchar(45) NOT NULL DEFAULT '4''X6''',
  PRIMARY KEY (`idorder`),
  KEY `bill_id_idx` (`bill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('Sun May 09 2021','COD',NULL,6,2,12,14,7,12,1,'4\'X6\''),('Sun May 09 2021','COD',NULL,6,9,54,15,7,54,2,'4\'X6\''),('Sun May 09 2021','COD',NULL,5,1,5,16,7,11,3,'4\'X6\''),('Sun May 09 2021','COD',NULL,6,1,6,16,7,11,4,'4\'X6\''),('Mon May 10 2021','COD',NULL,5,1,5,17,7,5,5,'4\'X6\''),('Mon May 10 2021','COD',NULL,6,3,18,18,7,18,6,'4\'X6\''),('Mon May 10 2021','COD',NULL,6,9,54,19,7,54,7,'4\'X6\''),('Mon May 10 2021','COD',NULL,6,8,48,20,7,48,8,'4\'X6\''),('Tue May 11 2021','Online',NULL,40,9,360,23,9,360,9,'4\'X6\'');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
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
