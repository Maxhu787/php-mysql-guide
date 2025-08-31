---
title: Week 4 - $_SESSION、$_COOKIE、pdo
sidebar_position: 3
---

## Week 4 - `$_SESSION`、`$_COOKIE`、PDO

### 課程目標

- 學會使用 `$_SESSION` 和 `$_COOKIE` 來保存使用者狀態
- 理解兩者的差異與適用情境
- 使用 PDO 進行安全的資料庫操作 (避免 SQL Injection)

---

### 課程大綱

#### 1. `$_SESSION` (伺服端儲存資料)

- **定義**：
  Session 是存在伺服器端的暫存資料，通常用來保存使用者登入狀態、購物車等資訊。

- **常用方法**：

  ```php
  <?php
  session_start(); // 啟動 Session，一定要放在最上方
  $_SESSION['username'] = "Max"; // 設定 Session
  echo $_SESSION['username']; // 讀取 Session
  unset($_SESSION['username']); // 刪除某個 Session
  session_destroy(); // 清除所有 Session
  ?>
  ```

- **使用情境**：

  - 使用者登入後保存帳號資訊
  - 電商網站的購物車

---

#### 2. `$_COOKIE` (瀏覽器端儲存資料)

- **定義**：
  Cookie 是存在使用者瀏覽器端的小型資料，常用來保存設定或記住使用者資訊。

- **常用方法**：

  ```php
  <?php
  setcookie("language", "zh-TW", time() + 3600); // 設定 Cookie (存活一小時)
  echo $_COOKIE["language"]; // 讀取 Cookie
  setcookie("language", "", time() - 3600); // 刪除 Cookie
  ?>
  ```

- **使用情境**：

  - 記住使用者的語言偏好
  - 記住登入帳號（例如 "Remember Me" 功能）

---

#### 3. Session vs Cookie

| 特性     | Session (伺服端) | Cookie (瀏覽器端)  |
| -------- | ---------------- | ------------------ |
| 儲存位置 | 伺服器           | 使用者瀏覽器       |
| 安全性   | 較高             | 較低 (可能被竄改)  |
| 適合用途 | 登入狀態、購物車 | 偏好設定、追蹤用戶 |

---

#### 4. PDO (PHP Data Objects)

- **定義**：
  PDO 是 PHP 連接資料庫的標準方式，支援多種資料庫，並能透過 prepared statements 避免 SQL Injection。

- **基本使用**：

  ```php
  <?php
  // 建立連線
  $dsn = "mysql:host=localhost;dbname=test;charset=utf8";
  $user = "root";
  $password = "";

  try {
      $pdo = new PDO($dsn, $user, $password);
      $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

      // 使用 prepared statement
      $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
      $stmt->execute(['username' => "Max"]);
      $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

      print_r($result);
  } catch (PDOException $e) {
      echo "資料庫連線失敗：" . $e->getMessage();
  }
  ?>
  ```

- **好處**：

  - 支援多種資料庫 (MySQL, PostgreSQL, SQLite…)
  - 使用 prepared statement 避免 SQL Injection
  - 錯誤處理簡單 (Exception)

---

### 本週作業

1. 實作一個簡單的登入系統：

   - 使用 `$_SESSION` 保存登入狀態
   - 使用 PDO 檢查帳號密碼

2. 新增「記住我」功能：

   - 使用 `$_COOKIE` 保存帳號，下次自動填入
