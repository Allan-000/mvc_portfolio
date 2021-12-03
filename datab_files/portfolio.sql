-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2021 at 10:20 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `languages`
--

INSERT INTO `languages` (`id`, `name`, `logo`, `description`) VALUES
(1, 'Javascript', 'javascript.jpg', 'Javascript is een programeer taal die wordt gebruikt wordt om de websites interactief te maken en webapplicaties te ontwikkelen.'),
(2, 'C#', 'c-sharp-logo.png', 'C# of C-sharp hoe je het uitspreekt, komt uit C falmilie.\r\nHet is een van de populairste object georienteerd programeer talen, en het is de porgrameer taal van Unity games engine.'),
(3, 'bootstrap', 'bootstrap-logo.jpg', 'Bootstrap is een pre-styled combinatie van CSS, HTML en JavaScrpit, die het creëren van websites sneller en eenvoudiger maakt.\r\nHet is gemaakt door Twitter en het is tegenwoordig een van de populairste framworks.'),
(4, 'CSS', 'css-logo.jpg', 'CSS staat voor cascing style sheets,\r\nen het voegt styling aan een website.'),
(5, 'HTML', 'HTML-logo.png', 'HTML staat voor hyper text marking language, En daarmee wordt de structuur van een website gemaakt.\r\nHet is de basis van elke website die je bezoekt.');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `github_link` varchar(255) DEFAULT NULL,
  `page_link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `name`, `picture`, `description`, `github_link`, `page_link`) VALUES
(1, 'Hoger Lager', 'cards1.jpg', 'Deze project heet de Card Game, waaronder twee spelletjes vallen, een higher lower spel en een dobble stenen spel. deze project is uitgevoerd met C# programmer taal.', 'https://github.com/Allan-000/Hoger-lager-game', NULL),
(2, 'Reken Tool', 'rekenmachine.jpg', 'De reken tool is een programmatje, waarmee een paar eenvoudige berekeningen uitgevoerd kunnen worden.', NULL, 'https://allan-000.github.io/Rekentool/index.html'),
(3, 'Boter Kaas en Eiren', 'tic-tac-toe.png', 'Boter kaas en eiren oftewel tic tac toe, is een traditionele spel die gespeeld wordt met twee spelers.\r\nDe eerste speler die een lijn tekent,wint en krijgt een punt.\r\nDeze project is gemaakt met javascript.', NULL, 'https://allan-000.github.io/tic-tac-toe-/index.html'),
(4, 'De buienrader', 'buienrader.jpg', 'benieuwed hoe het weer is nu ... check mijn buienrader app, ontwikkeld met javascript programeer taal', NULL, 'https://allan-000.github.io/buienrader/index.html'),
(5, 'Interaction design', 'interaction_design.png', 'Met deze project heb ik geleerd hoe ik vanaf een probleemstelling tot meerdere oplossing kom en het beste ervan kiezen.\r\nDeze concnept is een informatie referentie voor de opleiding tot Software Developer.', NULL, 'https://allan-000.github.io/interaction-design/index.html');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
