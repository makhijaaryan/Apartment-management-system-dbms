-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: app
-- ------------------------------------------------------
-- Server version	8.0.29

-- Table structure for table `auth`

DROP TABLE IF EXISTS `auth`;
CREATE TABLE `auth` (
  `user_id` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL DEFAULT '12345678',
  `id` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `auth`

LOCK TABLES `auth` WRITE;
INSERT INTO `auth` VALUES ('a-123','12345678',101),('a-124','12345678',102),('a-909','12345678',103),('e-123','12345678',701),('e-456','12345678',702),('e-909','12345678',703),('o-123','12345678',501),('o-124','12345678',502),('o-456','12345678',503),('o-909','12345678',504),('t-123','12345678',601),('t-124','12345678',602),('t-145','12345678',603),('t-190','12345678',604),('t-345','12345678',605);
UNLOCK TABLES;

-- Temporary view structure for view `avt`
DROP TABLE IF EXISTS `avt`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = @saved_cs_client;

-- Table structure for table `block`

DROP TABLE IF EXISTS `block`;
CREATE TABLE `block` (
  `block_no` int NOT NULL,
  `block_name` varchar(10) DEFAULT NULL,
  `complaints` varchar(100) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  PRIMARY KEY (`block_no`),
  KEY `fk_r` (`room_no`),
  CONSTRAINT `fk_r` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `block`

LOCK TABLES `block` WRITE;
INSERT INTO `block` VALUES (1,'kaveri','Water problem',11),(2,'Narmadha','Plumbing work',12),(3,'yamuna','tenant issue',13),(4,'jamuna',NULL,21);
UNLOCK TABLES;

-- Table structure for table `block_admin`

DROP TABLE IF EXISTS `block_admin`;
CREATE TABLE `block_admin` (
  `admin_id` int NOT NULL,
  `admin_name` varchar(20) DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`admin_id`),
  KEY `block_no` (`block_no`),
  CONSTRAINT `block_admin_ibfk_1` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `block_admin`

LOCK TABLES `block_admin` WRITE;
INSERT INTO `block_admin` VALUES (101,'shiva',1),(102,'rajaa',NULL);
UNLOCK TABLES;


-- Table structure for table `employee`

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `emp_id` int NOT NULL,
  `emp_name` varchar(30) DEFAULT NULL,
  `salary` int DEFAULT NULL,
  `emp_type` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  KEY `block_no` (`block_no`),
  CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `employee`

LOCK TABLES `employee` WRITE;
INSERT INTO `employee` VALUES (701,'Muthu',20000,'Plumber',20,4),(702,'krishanan',5000,'Gardener',30,3),(703,'raman surya',4000,'Electrician ',21,NULL);
UNLOCK TABLES;

-- Table structure for table `identity`

DROP TABLE IF EXISTS `identity`;
CREATE TABLE `identity` (
  `proof` varchar(15) DEFAULT NULL,
  `owner_id` int DEFAULT NULL,
  `tenant_id` int DEFAULT NULL,
  UNIQUE KEY `proof` (`proof`),
  KEY `owner_id` (`owner_id`),
  KEY `fk_t` (`tenant_id`),
  CONSTRAINT `fk_t` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`),
  CONSTRAINT `identity_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`owner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `identity`

LOCK TABLES `identity` WRITE;
INSERT INTO `identity` VALUES ('1234567890',501,NULL),('987654321',502,NULL),('2764724628',503,NULL),('9876543456',504,NULL),('6789876987',NULL,601),('4567898769',NULL,602),('9876567888',NULL,603),('2345676543',NULL,604),('7657876788',NULL,605);
UNLOCK TABLES;

-- Temporary view structure for view `o`

DROP TABLE IF EXISTS `o`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = @saved_cs_client;

-- Temporary view structure for view `oo`

DROP TABLE IF EXISTS `oo`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = @saved_cs_client;

-- Table structure for table `owner`

DROP TABLE IF EXISTS `owner`;
CREATE TABLE `owner` (
  `owner_id` int NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `aggrement_status` varchar(20) NOT NULL,
  `room_no` int DEFAULT NULL,
  `dob` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`owner_id`),
  KEY `FK_rrno` (`room_no`),
  CONSTRAINT `FK_rrno` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `owner`

LOCK TABLES `owner` WRITE;
INSERT INTO `owner` VALUES (501,'yuvarraj S',19,'yes',11,'17-aug-2002'),(502,'Tharun',19,'yes',13,'21-may-2002'),(503,'Surya DK',20,'no',21,'23-sep-2001'),(504,'Shivanesh',21,'no',31,'24-jan-2002');
UNLOCK TABLES;

-- Table structure for table `rental`

DROP TABLE IF EXISTS `rental`;
CREATE TABLE `rental` (
  `doj` varchar(20) DEFAULT NULL,
  `monthly_rent` int DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `tenant_id` int DEFAULT NULL,
  KEY `tenant_id` (`tenant_id`),
  KEY `FK_rno` (`room_no`),
  CONSTRAINT `FK_rno` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`),
  CONSTRAINT `rental_ibfk_1` FOREIGN KEY (`tenant_id`) REFERENCES `tenant` (`tenant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `rental`

LOCK TABLES `rental` WRITE;
INSERT INTO `rental` VALUES ('02-jan-2021',25000,11,601),('03-jan-2021',25000,12,602),('03-jan-2021',35000,13,603),('06-jan-2021',15000,21,604),('07-jan-2021',15000,31,605);
UNLOCK TABLES;

-- Table structure for table `room`

DROP TABLE IF EXISTS `room`;
CREATE TABLE `room` (
  `room_no` int NOT NULL,
  `type` varchar(10) DEFAULT NULL,
  `floor` int DEFAULT NULL,
  `parking_slot` varchar(10) DEFAULT NULL,
  `reg_no` int DEFAULT NULL,
  `block_no` int DEFAULT NULL,
  PRIMARY KEY (`room_no`),
  UNIQUE KEY `parking_slot` (`parking_slot`),
  UNIQUE KEY `reg_no` (`reg_no`),
  KEY `block_no` (`block_no`),
  CONSTRAINT `room_ibfk_1` FOREIGN KEY (`block_no`) REFERENCES `block` (`block_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `room`

LOCK TABLES `room` WRITE;

INSERT INTO `room` VALUES (11,'3bhk',2,'B-123',1234,1),(12,'2bhk',2,'B-124',12345,2),(13,'3bhk',2,'B-125',123,1),(21,'1bhk',3,'B-234',456,4),(31,'4bhk',4,'B-789',2345,4),(67,'1bhk',7,'B-890',654,3);
UNLOCK TABLES;

-- Temporary view structure for view `tav`

DROP TABLE IF EXISTS `tav`;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = @saved_cs_client;
-- Table structure for table `tenant`

DROP TABLE IF EXISTS `tenant`;
CREATE TABLE `tenant` (
  `tenant_id` int NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `dob` varchar(10) DEFAULT NULL,
  `stat` varchar(10) DEFAULT NULL,
  `room_no` int DEFAULT NULL,
  `age` int DEFAULT NULL,
  PRIMARY KEY (`tenant_id`),
  KEY `fk_rn` (`room_no`),
  CONSTRAINT `fk_rn` FOREIGN KEY (`room_no`) REFERENCES `room` (`room_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table `tenant`

LOCK TABLES `tenant` WRITE;
INSERT INTO `tenant` VALUES (601,'nithin','01-apr-02','no',11,19),(602,'rohith','23-aug-02','not paid',12,23),(603,'mothi','12-jun-02','not paid',13,41),(604,'abu danish','23-apr-02','not paid',21,35),(605,'Hari','30-sep-02','not paid',31,56);
UNLOCK TABLES;