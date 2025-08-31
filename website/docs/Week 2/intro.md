---
title: Week 2 - PHP語法、form、$_GET、$_POST
sidebar_position: 2
---

# Week 2 - PHP 語法、form、$_GET、$\_POST

## 介紹內容

- PHP 基礎語法
- HTML form 表單
- $\_GET
- $\_POST

---

# PHP 基礎語法

## PHP 是什麼？

- **PHP: Hypertext Preprocessor**
- 一種在伺服器端執行的腳本語言
- 主要用途：
  - 動態生成 HTML
  - 與資料庫交互
  - 處理表單和使用者資料

---

## 如何在 HTML 中加入 PHP？

- PHP 程式碼必須放在 `<?php ?>` 之間
- 瀏覽器看不到 PHP 原始碼，只會看到輸出結果

```php
<!DOCTYPE html>
<html>
  <body>
    <h1>Hi!</h1>
    <?php
      echo "現在時間是: " . date("Y-m-d H:i:s");
    ?>
  </body>
</html>
```

---

## PHP 常用函數例子

```php
<?php
  $str = "apple,banana,orange";
  $arr = explode(",", $str); // ["apple", "banana", "orange"]

  echo count($arr); // 3
  echo strtoupper("hello"); // HELLO
?>
```

---

## 等一下，還有更多

👉 [PHP 官方函數文件](https://www.php.net/manual/en/funcref.php)

---

# HTML Form 表單

## 為什麼要有表單？

- 讓使用者輸入資料並提交給伺服器
- 常見用途：登入、註冊、留言、搜尋

---

## Form 的基本結構

```html
<form action="submit.php" method="GET">
  <label for="username">使用者名稱</label>
  <input type="text" id="username" name="username" />

  <button type="submit">送出</button>
</form>
```

### 重點：

- **`action`**：指定資料要送到哪個 PHP 頁面處理
- **`method`**：`GET` 或 `POST`
- **`label for`**：標籤對應到輸入框
- **`input name`**：決定送出的欄位名稱（PHP 用它來取值）

---

# PHP 取得表單資料

## $\_GET

- 當表單用 **GET** 方法提交時，資料會出現在網址後方
- 在 PHP 中用 `$_GET['欄位名稱']` 取得資料

```php
<?php
  echo "你好, " . $_GET['username'];
?>
```

網址可能像這樣：

```
http://localhost/submit.php?username=Max
```

---

## $\_POST

- 當表單用 **POST** 方法提交時，資料不會顯示在網址
- 在 PHP 中用 `$_POST['欄位名稱']` 取得資料

```php
<?php
  echo "你好, " . $_POST['username'];
?>
```

---

## $\_GET 與 $\_POST 是什麼？

- **全域變數 (Superglobals)**
- 不需額外宣告就能使用
- 用來接收來自表單或網址的資料

---

# 小範例：GET & POST

## form.html

```html
<form action="submit.php" method="GET">
  <label for="name">姓名：</label>
  <input type="text" id="name" name="name" />
  <button type="submit">用 GET 送出</button>
</form>

<form action="submit.php" method="POST">
  <label for="age">年齡：</label>
  <input type="number" id="age" name="age" />
  <button type="submit">用 POST 送出</button>
</form>
```

## submit.php

```php
<?php
  if (!empty($_GET['name'])) {
    echo "GET 收到姓名: " . $_GET['name'] . "<br/>";
  }
  if (!empty($_POST['age'])) {
    echo "POST 收到年齡: " . $_POST['age'];
  }
?>
```

---

# End! 🙂

刷題時間 👉 [https://freecodecamp.org/](https://freecodecamp.org/)

---

## References

- [wa4e materials](https://www.wa4e.com/materials)
- [wa4e lessons PHP forms](https://www.wa4e.com/lessons/php-forms)
- [wa4e lessons PHP intro](https://www.wa4e.com/lessons/php-intro)

```

```
