-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: sertificatedb
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `config` (
  `idConfig` bigint NOT NULL AUTO_INCREMENT,
  `config` json NOT NULL,
  `userId` bigint NOT NULL,
  `pageId` bigint NOT NULL,
  PRIMARY KEY (`idConfig`),
  KEY `userId` (`userId`),
  KEY `pageId` (`pageId`),
  CONSTRAINT `config_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `config_ibfk_2` FOREIGN KEY (`pageId`) REFERENCES `page` (`idPage`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (1,'\"{\\\"head\\\":[],\\\"title\\\":\\\" Физические лица\\\",\\\"uridicalLink\\\":{\\\"id\\\":1672319092135.7156,\\\"link\\\":\\\"/Uridicals\\\",\\\"title\\\":\\\"Для юридических лиц\\\"},\\\"logo\\\":{\\\"url\\\":\\\"http://localhost:8080/images/logo_green.png\\\",\\\"alt\\\":\\\"evrooptLogo\\\",\\\"title\\\":\\\"logo\\\",\\\"href\\\":\\\"/Phisicals\\\"},\\\"links\\\":[{\\\"id\\\":1672319092135.5586,\\\"link\\\":\\\"\\\",\\\"title\\\":\\\"Чем полезен\\\",\\\"htmlElementId\\\":\\\"#polezen\\\"},{\\\"id\\\":1672319092135.7073,\\\"link\\\":\\\"\\\",\\\"title\\\":\\\"Клиенты\\\",\\\"htmlElementId\\\":\\\"#clientBlock\\\"},{\\\"lid\\\":1672319092135.8005,\\\"ink\\\":\\\"\\\",\\\"title\\\":\\\"Вопрос-ответ\\\",\\\"htmlElementId\\\":\\\"#faqBlock\\\"}],\\\"content\\\":[{\\\"id\\\":1672319092135.1086,\\\"title\\\":\\\"Подарочные сертификаты на покупки в магазинах «Евроопт» и «Хит!»\\\",\\\"description\\\":\\\"Подарочный сертификат на покупку продуктов и товаров в любом магазине «Евроопт» и «Хит!» - это полезный подарок, который точно понравится каждому! По любому поводу, в любое время!\\\",\\\"underDescription\\\":\\\"Подарочный сертификат - это подарок, полный приятных сюрпризов\\\"},{\\\"id\\\":1672319092135.5193,\\\"title\\\":\\\"ВРЕМЯ ПОЛЕЗНЫХ ПОДАРКОВ!\\\",\\\"description\\\":\\\"Подарочный сертификат - подарок, который подойдет и понравистя всем! Не угадывайте с подарком. Подарите выгоду комфортных покупок в «Евроопте»\\\"}],\\\"rectImage\\\":{\\\"id\\\":1672319092135.833,\\\"url\\\":\\\"./Rectangle 1.png\\\",\\\"title\\\":\\\"rectImage\\\",\\\"alt\\\":\\\"rectImage\\\"},\\\"smallImage\\\":{\\\"id\\\":1672319092135.0593,\\\"url\\\":\\\"./Rectangle 7.png\\\",\\\"title\\\":\\\"presentImage\\\",\\\"alt\\\":\\\"presentImage\\\"},\\\"carousel\\\":[{\\\"id\\\":1672319092135.0034,\\\"url\\\":\\\"./Rectangle 9.png\\\",\\\"title\\\":\\\"carouselImg1\\\",\\\"alt\\\":\\\"carouselImg1\\\"},{\\\"id\\\":1672319092135.687,\\\"url\\\":\\\"./Rectangle 9.png\\\",\\\"title\\\":\\\"carouselImg2\\\",\\\"alt\\\":\\\"carouselImg2\\\"},{\\\"url\\\":\\\"./Rectangle 9.png\\\",\\\"alt\\\":\\\"carouselImg3\\\",\\\"title\\\":\\\"carouselImg3\\\",\\\"id\\\":1672319092135.6792}],\\\"addresses\\\":[{\\\"id\\\":1672320984303.036,\\\"address\\\":\\\"Минский район, Щомыслицкий сельсовет\\\",\\\"description\\\":\\\"dssdgsdg\\\",\\\"longitude\\\":27.40190507812483,\\\"latitude\\\":53.85780499220591},{\\\"id\\\":1672321123203.9956,\\\"address\\\":\\\"Минск, Октябрьский район\\\",\\\"description\\\":\\\";ljjlk\\\",\\\"longitude\\\":27.54472734374985,\\\"latitude\\\":53.84400119031944}],\\\"faq\\\":[{\\\"img\\\":{\\\"url\\\":\\\"http://localhost:8080/images/Rectangle 7.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1682962212664.464},\\\"id\\\":1672319092135.0806,\\\"title\\\":\\\"Возможно ли отоваривать сертификат не на всю сумму единовременно?\\\",\\\"content\\\":\\\"Нет, сертификат отоваривается только на всю сумму единожды.\\\"},{\\\"img\\\":{\\\"url\\\":\\\"\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1682962145299.564},\\\"id\\\":1672319092135.2507,\\\"title\\\":\\\"Как узнать срок действия сертификата?\\\",\\\"content\\\":\\\"Провести проверку на странице проверки сертификата.\\\"},{\\\"img\\\":{\\\"url\\\":\\\"\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1682962160956.7134},\\\"id\\\":1672319092135.4155,\\\"title\\\":\\\"Сколько стоит сертификат?\\\",\\\"content\\\":\\\"Существуют сертификаты: 10,50,100 рублей.\\\"},{\\\"id\\\":1672319092135.3386,\\\"title\\\":\\\"Где можно отоварить подарочный сертификат?\\\",\\\"content\\\":\\\"Подарочный сертификат на покупку продуктов и товаров в любом магазине «Евроопт» и «Хит!» - это полезный подарок, который точно понравится каждому! По любому поводу, в любое время!\\\",\\\"img\\\":{\\\"url\\\":\\\"./Rectangle 7.png\\\",\\\"alt\\\":\\\" \\\",\\\"title\\\":\\\" \\\"}},{\\\"img\\\":{\\\"url\\\":\\\"\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1682962187227.728},\\\"id\\\":1672319092135.5017,\\\"title\\\":\\\"Что можно приобрести за подарочный сертификат?\\\",\\\"content\\\":\\\"Любой товар в магазине сети \\\\\\\"Евроопт\\\\\\\".\\\"},{\\\"img\\\":{\\\"url\\\":\\\"\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1682962185505.5466},\\\"id\\\":1672319092135.78,\\\"title\\\":\\\"Могу ли я передать сертификат другому человеку?\\\",\\\"content\\\":\\\"Да, сертификаты можно передать/подарить другим людям.\\\"}],\\\"footerLinks\\\":[{\\\"id\\\":1672319092135.8057,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Facebook.png\\\"},{\\\"id\\\":1672319092135.1294,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Вконтакте.png\\\"},{\\\"id\\\":1672319092135.3638,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Instagram.png\\\"},{\\\"id\\\":1672319092135.396,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Youtube.png\\\"},{\\\"id\\\":1672319092135.342,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Одноклассники.png\\\"}],\\\"footerLogo\\\":{\\\"url\\\":\\\"./logo_green.png\\\",\\\"alt\\\":\\\"evrooptLogoFooter\\\",\\\"title\\\":\\\"footerLogo\\\"}}\"',1,1),(2,'\"{\\\"head\\\":[],\\\"title\\\":\\\"Обратная связь\\\",\\\"uridicalLink\\\":{\\\"id\\\":1672293697005.069,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"Для юридических лиц\\\"},\\\"logo\\\":{\\\"url\\\":\\\"http://localhost:8080/images/logo_green.png\\\",\\\"alt\\\":\\\"evrooptLogo\\\",\\\"title\\\":\\\"logo\\\",\\\"href\\\":\\\"/\\\"},\\\"links\\\":[],\\\"footerLinks\\\":[{\\\"id\\\":1672293697005.1096,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Facebook.png\\\"},{\\\"id\\\":1672293697005.1394,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Вконтакте.png\\\"},{\\\"id\\\":1672293697005.0247,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Instagram.png\\\"},{\\\"id\\\":1672293697005.8477,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Youtube.png\\\"},{\\\"id\\\":1672293697005.5317,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Одноклассники.png\\\"}],\\\"footerLogo\\\":{\\\"url\\\":\\\"http://localhost:8080/images/logo_green.png\\\",\\\"alt\\\":\\\"evrooptLogoFooter\\\",\\\"title\\\":\\\"footerLogo\\\"}}\"',1,4),(3,'\"{\\\"head\\\":[],\\\"title\\\":\\\"Проверка сетификата\\\",\\\"header\\\":\\\"Подарочный сертификат\\\",\\\"uridicalLink\\\":{\\\"id\\\":1672310905639.8284,\\\"link\\\":\\\"/Uridicals\\\",\\\"title\\\":\\\"Для юридических лиц\\\"},\\\"logo\\\":{\\\"url\\\":\\\"http://localhost:8080/images/logo_green.png\\\",\\\"alt\\\":\\\"evrooptLogo\\\",\\\"title\\\":\\\"logo\\\",\\\"href\\\":\\\"/\\\"},\\\"links\\\":[],\\\"description\\\":[\\\"Подарочные карты номинала 10, 15, 20, 25, 30, 50, 100 руб. доступны на кассах магазинов Евроопт и Хит! \\\",\\\"Обаладатели сертификатов могут использовать из сразу же с момента получения в любом магазине «Евроопт» и «Хит!» по всей Беларуси. Сертификат действителен в течение 3-х месяцев с момента приобретения. \\\",\\\"При оплате покупки с использованием подарочного сертификата «Евроопт» можно воспользоваться бонусной картой «Е-плюс» для получения скидки на товары \\\"],\\\"formImage\\\":{\\\"id\\\":1672310905639.4932,\\\"url\\\":\\\"./Rectangle 7.png\\\",\\\"title\\\":\\\"rect 7\\\"},\\\"footerLinks\\\":[{\\\"id\\\":1672310905639.2075,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Facebook.png\\\"},{\\\"id\\\":1672310905639.1687,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Вконтакте.png\\\"},{\\\"id\\\":1672310905639.163,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Instagram.png\\\"},{\\\"id\\\":1672310905639.4739,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Youtube.png\\\"},{\\\"id\\\":1672310905639.415,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"./Одноклассники.png\\\"}],\\\"footerLogo\\\":{\\\"url\\\":\\\"./logo_green.png\\\",\\\"alt\\\":\\\"evrooptLogoFooter\\\",\\\"title\\\":\\\"footerLogo\\\"},\\\"hereLink\\\":\\\"herelink\\\"}\"',1,3),(6,'\"{\\\"head\\\":[],\\\"title\\\":\\\"Юридические лица\\\",\\\"uridicalLink\\\":{\\\"id\\\":1672293607990.3306,\\\"title\\\":\\\"Для физических лиц\\\",\\\"link\\\":\\\"/Phisicals\\\"},\\\"logo\\\":{\\\"url\\\":\\\"./logo_green.png\\\",\\\"alt\\\":\\\"logo\\\",\\\"title\\\":\\\"evrooptLogo\\\"},\\\"links\\\":[{\\\"id\\\":1672293607990.4956,\\\"title\\\":\\\"Как получить сертификат\\\",\\\"link\\\":\\\"\\\",\\\"htmlElementId\\\":\\\"#stepsBlock\\\"},{\\\"id\\\":1672293607990.7676,\\\"title\\\":\\\"Памятка\\\",\\\"link\\\":\\\"\\\",\\\"htmlElementId\\\":\\\"#memoryUser\\\"}],\\\"bigImage\\\":{\\\"id\\\":1672293607990.476,\\\"url\\\":\\\"./Rectangle 5.png\\\"},\\\"firstContent\\\":{\\\"underDescription\\\":\\\"Подарочный сертификат - это подарок, полный приятных сюрпризов\\\",\\\"description\\\":\\\"Подарочный сертификат на покупку продуктов и товаров в любом магазине «Евроопт» и «Хит!» - это полезный подарок, который точно понравится каждому! По любому поводу, в любое время!\\\",\\\"title\\\":\\\"Подарочный сертификат\\\",\\\"id\\\":1672312926250.6108},\\\"secondContent\\\":{\\\"header\\\":\\\"ЧТО ТАКОЕ ПОДАРОЧНЫЙ СЕРТИФИКАТ «ЕВРООПТ»\\\",\\\"content\\\":[{\\\"id\\\":1672293607990.7476,\\\"title\\\":\\\"Универсальный\\\",\\\"description\\\":\\\"подарок\\\",\\\"underDescription\\\":\\\"Из широкого ассортимента товаров магазинов «Евроопт» и «Хит!» владелец сертификата выберет то, что ему действительно необходимо.\\\"},{\\\"id\\\":1672293607990.129,\\\"title\\\":\\\"Удобный\\\",\\\"description\\\":\\\"подарок\\\",\\\"underDescription\\\":\\\"Вы можете выбрать удобный для вас номинал сертификата: 10 рублей, 15 рублей, 20 рублей, 25 рублей, 30 рублей или 50 рублей.\\\"},{\\\"id\\\":1672293607990.0637,\\\"title\\\":\\\"Практичный\\\",\\\"description\\\":\\\"подарок\\\",\\\"underDescription\\\":\\\"Обладатели сертификатов могут использовать их сразу же с момента получения в любом магазине «Евроопт» и «Хит!» по всей Беларуси.\\\"}]},\\\"thirtContent\\\":{\\\"header\\\":\\\"КАК ПОЛУЧИТЬ СЕРТИФИКАТ ЮРИДИЧЕСКОМУ ЛИЦУ\\\",\\\"image\\\":{\\\"id\\\":1672293607990.467,\\\"url\\\":\\\"./Rectangle 6.png\\\"}},\\\"fourthContent\\\":{\\\"header\\\":\\\"КЛИЕНТЫ\\\",\\\"descriptions\\\":[\\\"Наши подарочные сертификаты служат прекрасным подарком уже более чем в 1000 Организаций\\\",\\\"Мы направлены на развитие долгосрочных отношений с партнерами, поэтому во взаимовыгодном сотрудничестве стремимся у укруплению доверия, основанному на честном и ответственном отношении к исполнению своих обязательств.\\\"],\\\"images\\\":[{\\\"url\\\":\\\"http://localhost:8080/images/card 2.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.6165},{\\\"url\\\":\\\"http://localhost:8080/images/Handshake.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.5786},{\\\"url\\\":\\\"http://localhost:8080/images/MasterCard Credit Card.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.9158},{\\\"url\\\":\\\"http://localhost:8080/images/security 1.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.354},{\\\"url\\\":\\\"http://localhost:8080/images/surprise 2.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.1614},{\\\"url\\\":\\\"http://localhost:8080/images/shopping-cart 1.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.784},{\\\"url\\\":\\\"http://localhost:8080/images/surprise 1.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.301},{\\\"url\\\":\\\"http://localhost:8080/images/Laptop E-Mail.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.457},{\\\"url\\\":\\\"http://localhost:8080/images/card 1.png\\\",\\\"alt\\\":\\\" \\\",\\\"title\\\":\\\" \\\",\\\"id\\\":1672314299693.309}]},\\\"fivesContent\\\":{\\\"image\\\":{\\\"url\\\":\\\"http://localhost:8080/images/Rectangle 8.png\\\",\\\"alt\\\":\\\"\\\",\\\"title\\\":\\\"\\\",\\\"id\\\":1672293607990.8857},\\\"content\\\":{\\\"underDescription\\\":\\\"При оплате покупки с использованием сертификата «Евроопт» можно воспользоватсья дисконтной картой «Е-плюс» для получения скидки на товары.\\\",\\\"description\\\":\\\"Сертификат действителен в течение 3-х месяцев с момента приобретения. Подробную информацию о подарочных сертификатах можно узнать здесь.\\\",\\\"title\\\":\\\"ПАМЯТКА ВЛАДЕЛЬЦУ ПОДАРОЧНОГО СЕРТИФИКАТА\\\",\\\"id\\\":1682963903821.182}},\\\"footerLogo\\\":{\\\"url\\\":\\\"./logo_green.png\\\"},\\\"footerLinks\\\":[{\\\"id\\\":1672293607990.1858,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Facebook.png\\\"},{\\\"id\\\":1672293607990.4402,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Вконтакте.png\\\"},{\\\"id\\\":1672293607990.5464,\\\"link\\\":\\\"#\\\",\\\"title\\\":\\\"http://localhost:8080/images/Instagram.png\\\"}],\\\"footerLink\\\":{\\\"id\\\":1672293607990.3542,\\\"title\\\":\\\"podari_sertifikat@eurotorg.by\\\",\\\"link\\\":\\\"podari_sertifikat@eurotorg.by\\\"},\\\"phones\\\":[\\\"+375 (44) 587-91-01\\\",\\\"+375 (44) 529-14-44\\\"]}\"',1,2);
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `page`
--

DROP TABLE IF EXISTS `page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `page` (
  `idPage` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`idPage`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `page`
--

LOCK TABLES `page` WRITE;
/*!40000 ALTER TABLE `page` DISABLE KEYS */;
INSERT INTO `page` VALUES (1,'physical'),(2,'uridical'),(3,'checkform'),(4,'buyingpage');
/*!40000 ALTER TABLE `page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `idUser` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','$2b$10$c/JD09gQhhfk.YF8EpRqtOCxmtODS8Ojx4SyemFIorZOIauWOTSDC'),(2,'copchenitt','$2b$10$AHiVUc3cYaobVPCFfx2XRe95gfVEG7pVHxQ10ypCdszGWzwv2UWZK'),(3,'gsfk','$2b$10$7XuoZC/5NQNaVCBG2Kq/xu7f4kboe/GdlAKdr.M/i1YnRpTgPPPjy');
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

-- Dump completed on 2023-05-01 21:02:49
