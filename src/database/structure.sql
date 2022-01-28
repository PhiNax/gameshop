CREATE DATABASE IF NOT EXIST `areshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- areshop.users definition

CREATE TABLE IF NOT EXIST `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `avatar` varchar(255) NULL DEFAULT 'avatar.png',
  `access` int NOT NULL DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nickname` (`nickname`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-- areshop.games definition

CREATE TABLE `games` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `coverImage` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `price` float NOT NULL,
  `gamecategoryId` int DEFAULT NULL,
  `gameplatformId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gamecategoryId` (`gamecategoryId`),
  KEY `gameplatformId` (`gameplatformId`),
  CONSTRAINT `games_ibfk_1` FOREIGN KEY (`gamecategoryId`) REFERENCES `gamecategories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `games_ibfk_2` FOREIGN KEY (`gameplatformId`) REFERENCES `gameplatforms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- areshop.gameplatforms definition

CREATE TABLE `gameplatforms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- areshop.gamecategories definition

CREATE TABLE `gamecategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;