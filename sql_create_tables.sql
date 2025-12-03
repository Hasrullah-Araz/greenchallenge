CREATE DATABASE IF NOT EXISTS green_challenge;
USE green_challenge;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(191) UNIQUE NOT NULL,
  email VARCHAR(191) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  points INT DEFAULT 0,
  proofs INT DEFAULT 0,
  badges INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS challenges (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  reward_points INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS proofs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  challenge_id INT,
  image_url TEXT,
  file_name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE SET NULL
);

INSERT INTO challenges (title,description,reward_points) VALUES
('Reduce Plastic Use','Kurangi penggunaan plastik seminggu',30),
('Plant 1 Tree','Menanam satu pohon',50),
('Walk 5000 Steps','Berjalan kaki 5000 langkah',20)
ON DUPLICATE KEY UPDATE title=VALUES(title);
