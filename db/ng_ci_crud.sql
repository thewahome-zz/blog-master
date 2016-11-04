-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2016 at 03:58 AM
-- Server version: 5.6.21
-- PHP Version: 5.5.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ng_ci_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `ci_sessions`
--

CREATE TABLE IF NOT EXISTS `ci_sessions` (
  `session_id` varchar(40) NOT NULL DEFAULT '0',
  `ip_address` varchar(45) NOT NULL DEFAULT '0',
  `user_agent` varchar(120) NOT NULL,
  `last_activity` int(10) unsigned NOT NULL DEFAULT '0',
  `user_data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ci_sessions`
--

INSERT INTO `ci_sessions` (`session_id`, `ip_address`, `user_agent`, `last_activity`, `user_data`) VALUES
('212e00a659e7636adc86470c211e252f', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36', 1561325113, 'a:6:{s:9:"user_data";s:0:"";s:8:"id_users";s:1:"5";s:10:"first_name";s:0:"";s:9:"last_name";s:0:"";s:8:"username";s:9:"thewahome";s:9:"logged_in";b:1;}'),
('ac818a5db2e8747f0ac99feccabd650d', '::1', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36', 1478174924, 'a:6:{s:9:"user_data";s:0:"";s:8:"id_users";s:1:"5";s:10:"first_name";s:0:"";s:9:"last_name";s:0:"";s:8:"username";s:9:"thewahome";s:9:"logged_in";b:1;}'),
('ae7107aeb674102ba11861a0f24f5cac', '::1', 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36', 1478175343, 'a:6:{s:9:"user_data";s:0:"";s:8:"id_users";s:1:"5";s:10:"first_name";s:0:"";s:9:"last_name";s:0:"";s:8:"username";s:9:"thewahome";s:9:"logged_in";b:1;}'),
('e5bca28cb1d8c3bee8a3feb1e0d02525', '::1', 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36', 1478176158, 'a:6:{s:9:"user_data";s:0:"";s:8:"id_users";s:1:"5";s:10:"first_name";s:0:"";s:9:"last_name";s:0:"";s:8:"username";s:9:"thewahome";s:9:"logged_in";b:1;}');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE IF NOT EXISTS `comments` (
`id_comments` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `comment` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_posts` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id_comments`, `id_users`, `comment`, `date_created`, `id_posts`) VALUES
(1, 2, '', '2014-08-15 09:18:10', 0),
(2, 2, 'wow post', '2014-08-15 09:19:15', 0),
(3, 2, 'much post', '2014-08-15 09:20:35', 0),
(4, 2, 'wow wow', '2014-08-15 09:28:17', 1),
(5, 2, 'new wow', '2014-08-15 09:44:01', 1),
(6, 2, 'new wow', '2014-08-15 09:44:26', 1),
(7, 2, 'killa wow', '2014-08-15 09:45:12', 1),
(8, 2, 'lets see how it works', '2014-08-15 09:51:47', 3),
(9, 2, 'wow', '2014-08-15 09:52:49', 2),
(10, 1, 'mammaaa', '2014-08-15 11:29:59', 3),
(11, 2, 'nice stuff', '2016-10-25 21:57:59', 1),
(12, 2, 'New comment dogteeth tetra catfish tenpounder nase scup Ragfish brotula." Codlet brook lamprey pleco, Japanese eel convict cichlid titan triggerfish, plo', '2016-10-29 05:06:06', 5),
(13, 4, 'adding a comment', '2016-10-29 06:05:23', 5),
(14, 5, 'This is awesome', '2016-10-30 22:04:23', 5),
(15, 4, 'new comment maneno', '2016-11-03 02:56:02', 19),
(16, 4, '', '2016-11-03 08:56:19', 19),
(17, 4, 'empty comment', '2016-11-03 08:56:29', 19);

-- --------------------------------------------------------

--
-- Table structure for table `likes_favorites`
--

CREATE TABLE IF NOT EXISTS `likes_favorites` (
`id_likes_favorites` int(11) NOT NULL,
  `id_posts` int(11) NOT NULL,
  `id_users` int(11) NOT NULL,
  `type` char(1) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `likes_favorites`
--

INSERT INTO `likes_favorites` (`id_likes_favorites`, `id_posts`, `id_users`, `type`, `date_created`) VALUES
(4, 1, 2, 'f', '2014-08-15 10:49:26'),
(5, 1, 2, 'f', '2014-08-15 10:49:53'),
(6, 2, 2, 'f', '2014-08-15 10:56:28'),
(7, 8, 2, 'f', '2014-08-15 10:56:44'),
(8, 1, 2, 'f', '2014-08-15 10:57:12'),
(9, 1, 2, 'f', '2014-08-15 10:57:51'),
(11, 1, 2, 'f', '2014-08-15 11:01:24'),
(13, 1, 2, 'f', '2014-08-15 11:02:01'),
(15, 1, 2, 'f', '2014-08-15 11:05:18'),
(18, 3, 2, 'l', '2014-08-15 11:23:16'),
(19, 3, 2, 'f', '2014-08-15 11:23:45'),
(20, 2, 2, 'l', '2014-08-15 11:24:02'),
(21, 2, 1, 'l', '2014-08-15 11:28:44'),
(22, 1, 2, 'l', '2016-10-25 21:58:29'),
(23, 5, 2, 'l', '2016-10-29 05:06:18'),
(24, 5, 4, 'f', '2016-10-29 06:05:17'),
(25, 5, 5, 'f', '2016-10-30 22:04:09'),
(26, 5, 5, 'l', '2016-10-31 07:58:57'),
(27, 17, 4, 'l', '2016-10-31 08:25:56'),
(28, 17, 4, 'f', '2016-10-31 08:26:05');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE IF NOT EXISTS `posts` (
`id_posts` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `details` text NOT NULL,
  `id_users` int(11) NOT NULL,
  `liked` int(11) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id_posts`, `title`, `details`, `id_users`, `liked`, `date_created`, `date_updated`) VALUES
(5, 'Awesome new post', 'Science cuts two ways, of course; its products can be used for both good and evil. But there''s no turning back from science. The early warnings about technological dangers also come from science.\n\nYou know, being a test pilot isn''t always the healthiest business in the world.\n\nCookie jelly beans soufflé icing. Gummi bears tootsie roll powder chupa chups cheesecake chocolate jelly-o lollipop lollipop. Halvah applicake chupa chups. Marshmallow chocolate jujubes icing lollipop gummi bears chupa chups pudding bonbon. Jelly beans jelly soufflé jujubes. Sesame snaps lollipop icing donut lemon drops soufflé.\n\nDonut caramels gingerbread. Sweet roll macaroon pastry cotton candy oat cake sesame snaps biscuit lemon drops dessert. Candy canes carrot cake danish carrot cake soufflé jelly chocolate cake muffin. Topping brownie donut. Oat cake marzipan dragée cheesecake. Donut chocolate cake jujubes tart dragée toffee.\n\nTilefish electric knifefish salmon shark southern Dolly Varden. Pacific argentine tope golden shiner ilisha barreleye loosejaw catla, dogteeth tetra catfish tenpounder nase scup Ragfish brotula." Codlet brook lamprey pleco, Japanese eel convict cichlid titan triggerfish, plownose chimaera topminnow Black scalyfin. Walleye pollock, blue shark Sacramento blackfish prickleback airbreathing catfish yellowfin cutthroat trout, goby southern sandfish. North Pacific daggertooth dorab cepalin weever flying gurnard.', 2, 0, '2016-10-29 04:54:16', '0000-00-00 00:00:00'),
(17, 'Best practices for routes and controllers', 'on our company, we''re currently working on a single page web application. Users can login and fill their profiles with data and share those with other subscribers (it''s a social network-ish application). Now, I''ve imagined this schema:\n\nthe users data are provided by a UserService, using REST APIs to recover profiles information;\nthe profiles related pages are managed by a unique controller (ProfileController);\nmy question is: what''s the best way to associate a route (let''s say "view-profile") to a specific controller method (ProfileController.viewProfile)? Is this a right pattern in AngularJS?\n\nThanks!', 5, 0, '2016-10-31 08:12:12', '0000-00-00 00:00:00'),
(21, '15 Minute Setup', '15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup15 Minute Setup', 5, 0, '2016-11-03 12:16:20', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
`id_users` int(11) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` int(11) NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `activated` tinyint(1) NOT NULL,
  `activation_code` varchar(200) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `first_name`, `last_name`, `email`, `username`, `password`, `role`, `date_created`, `date_updated`, `activated`, `activation_code`) VALUES
(1, '', '', 'wayhome@yahoo.com', 'wayhomey', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 0, '2014-08-13 06:55:41', '0000-00-00 00:00:00', 0, '40y7ixlcqmz2ipkd33dx4ztttcvlyg2dr70sww1v'),
(2, '', '', 'wayhome@mw.com', 'wayhomemw', '40bd001563085fc35165329ea1ff5c5ecbdbbeef', 0, '2014-08-13 07:01:59', '2016-10-29 05:14:25', 0, '4j8ia4isxpa9wy99qzkkdd1ma7r9g2lqc2nzxrpb'),
(3, '', '', 'thewahome@gmail.com', 'wayg', 'd033e22ae348aeb5660fc2140aec35850c4da997', 0, '2016-10-29 06:04:09', '0000-00-00 00:00:00', 0, 'cnhr5t4vcrty8bloetw375qr0lhtu28votbzystq'),
(4, '', '', 'wayhome@gmail.com', 'wayhome', 'd033e22ae348aeb5660fc2140aec35850c4da997', 0, '2016-10-29 06:04:39', '0000-00-00 00:00:00', 0, 'jv0oraeeid5wrq5jyhn759f6n1malh1ycoszx0nq'),
(5, '', '', 'thewahome', 'thewahome', 'd033e22ae348aeb5660fc2140aec35850c4da997', 1, '2016-10-29 06:17:18', '2016-10-31 10:25:06', 0, '6up2ekhm3hvzykhtgbfddpab276xcplvmrqfob79');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ci_sessions`
--
ALTER TABLE `ci_sessions`
 ADD PRIMARY KEY (`session_id`), ADD KEY `last_activity_idx` (`last_activity`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
 ADD PRIMARY KEY (`id_comments`);

--
-- Indexes for table `likes_favorites`
--
ALTER TABLE `likes_favorites`
 ADD PRIMARY KEY (`id_likes_favorites`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
 ADD PRIMARY KEY (`id_posts`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
 ADD PRIMARY KEY (`id_users`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
MODIFY `id_comments` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `likes_favorites`
--
ALTER TABLE `likes_favorites`
MODIFY `id_likes_favorites` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
MODIFY `id_posts` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
MODIFY `id_users` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
