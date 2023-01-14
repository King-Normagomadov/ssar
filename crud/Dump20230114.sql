-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ims
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `fathername` varchar(45) DEFAULT NULL,
  `agee` varchar(45) DEFAULT NULL,
  `job` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'Hamed','taher','28','Manager','0700194400');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory`
--

DROP TABLE IF EXISTS `inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `unit` varchar(45) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `invoice` varchar(45) DEFAULT NULL,
  `consideration` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `code` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory`
--

LOCK TABLES `inventory` WRITE;
/*!40000 ALTER TABLE `inventory` DISABLE KEYS */;
INSERT INTO `inventory` VALUES (3,'aPACHE','','LIGHTgun','PK',100,'New','BR-12','0342','ARMY','Done',NULL),(4,'Gul Ahmad','Gun','Used for Army','pk',5,'New','BR-07','84201','Dont use for local affairs','done',NULL),(5,'Green-mixed','Cloth','latest product','pair',10,'New','BG-01','2101','Distribution for locals not allowed','done',NULL),(6,'Mustafa','bomb','Used for Army','pair',5,'used','DF-10','84201','great','pending',NULL),(8,'computer','loptop','for IT team','number',40,'Used','DF-10','0023','only for IT offices','Pending',NULL),(9,'benz','car','top new car','number',2,'new ','america','2139','unboxing','done',NULL),(10,'abdulbasit','bomb','Used for Army','cartoon',0,'Used','BD-05','0023','Dont use for local affairs','Pending',NULL),(12,'QBS','weapon','US army','mil',70,'new ','america','32901','Warning! not for local people','Done','780-1');
/*!40000 ALTER TABLE `inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inventory_grant`
--

DROP TABLE IF EXISTS `inventory_grant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inventory_grant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `person_name` varchar(45) DEFAULT NULL,
  `person_fathername` varchar(45) DEFAULT NULL,
  `person_position` varchar(45) DEFAULT NULL,
  `person_departement` varchar(45) DEFAULT NULL,
  `person_phone` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `item_code` varchar(45) DEFAULT NULL,
  `item_name` varchar(45) DEFAULT NULL,
  `quantity` varchar(45) DEFAULT NULL,
  `consider` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='This table will collect the data of each individual who recieve item from inventory.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inventory_grant`
--

LOCK TABLES `inventory_grant` WRITE;
/*!40000 ALTER TABLE `inventory_grant` DISABLE KEYS */;
INSERT INTO `inventory_grant` VALUES (1,'ملا اخند','ملا شرنگ','صقاکار','مخابرات و تکنالوژی','۰۷۰۰۱۲۳۴۵۶','2012-04-12',NULL,NULL,NULL,NULL,NULL),(2,'آدم خان','ملا خان','قومندان','حوزه امنیتی ','۰۷۱۲۳۴۵۶۷۵','2023-01-12','۲۳-۳۱۱۲','ام فور','۲۰','برای سربازان تحت آموزش','انجام'),(3,'Haji Munir','Gul Ahmad','Counselor','HR','0738234911','2023-01-14','12','QBS','25','test if subtraction update works or not ','pending'),(4,'amir','khan','gernaral','HR','903242923','2023-01-14','12','QBS','25','check the subtraction','pending'),(20,'mula','qodos','askar','MIS','0324294111','2023-01-14','12','QBS','25','check final','done'),(21,'samad','kado','karachi-wan','Sharyali','09823129312','2023-01-14','12','QBS','28','check again','i dont know'),(22,'zohor','zarin','Marketer','Roshan','0721029238','2023-01-14','10','abdul basit','100','congratulations','done !!!'),(23,'zohor','zarin','Marketer','Roshan','0721029238','2023-01-14','10','abdul basit','100','congratulations','done !!!');
/*!40000 ALTER TABLE `inventory_grant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `age` varchar(45) NOT NULL,
  `gender` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'M4-16','Lightgun','100','Female'),(9,'Bg','Boss','34','Female'),(10,'ahmad','Lightgun','333','Female'),(11,'faisal','jan','23','Male'),(12,'majeed',' sar','324','Male'),(13,'usman','shah','324','Male'),(14,'waziq ','khan','32','Male');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-14 14:53:30
