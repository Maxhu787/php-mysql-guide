---
title: Week 3 - MySQL語法、phpMyAdmin、Database Design
sidebar_position: 3
---

# Week 3 - MySQL 語法、phpMyAdmin、Database Design

## 介紹內容

- Database Design
- MySQL (語法)
- phpMyAdmin

---

# Database Design

## Database Design

- Database design is an **art form** with its own skills and experience.
- Our goal: **avoid bad mistakes** and design clear, easily understood databases.
- Performance tuning can be done later.
- Database design often **starts with a picture (schema diagram)**.

:::note
你可以在這裡補上一張 ERD 或 Schema 的圖。
:::

---

## Building a Data Model

- Draw a picture of the **data objects** for your application.
- Then figure out how to represent the **objects and their relationships**.
- Basic rule: **Don’t duplicate string data** — use a relationship instead.
- When there is one thing in the "real world," there should be **one copy** of that thing in the database.

---

## For each "piece of info"

- Is the column an **object** or an **attribute** of another object?
- Once we define objects, we need to define the **relationships** between them.

---

## Database Normalization

- Do not replicate data — **reference it** instead.
- Use **integers** for keys and references.
- Add a special **key column** to each table which will be used in relationships.

---

## Integer Reference Pattern

:::note
這裡可以插入一張 **table schema 的圖**，展示 `id` 指向另一個 table 的情況。
:::

---

## Terminology of Keys

### Three Kinds of Keys

- **Primary Key** → usually an integer auto-increment field
- **Logical Key** → what the outside world uses for lookup (like email, username)
- **Foreign Key** → points to a row in another table (usually an integer id)

---

## Primary Key Rules

- Never use your **logical key** as the primary key.
- String-based relationships are far less efficient than integer-based ones.

---

## Foreign Keys

- A **foreign key** points to a **primary key** in another table.
- Both primary keys and foreign keys are usually **integers / ids**.

---

# Relationship Building (in tables)

:::note
這裡可以補上一張 DB schema 的圖，顯示多表格關聯。
:::

---

# MySQL 基礎語法

## MySQL 是什麼？

- 一種 **關聯式資料庫管理系統 (RDBMS)**
- 使用 **SQL (Structured Query Language)** 操作資料
- 功能：
  - 儲存與查詢資料
  - 建立關聯表
  - 管理使用者與權限

---

## Creating our Book Database

```sql
CREATE DATABASE Book
    DEFAULT CHARACTER SET utf8mb4;

USE Book;
```

---

## 建立資料表 (範例)

```sql
CREATE TABLE Books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(100),
    published_year INT
);
```

---

# phpMyAdmin

## 1. 什麼是 phpMyAdmin？

- 基於 Web 的 MySQL 管理工具
- 提供圖形化介面，方便操作資料庫

---

## 2. 登入與介面介紹

- 如何進入 (通常 [http://localhost/phpmyadmin](http://localhost/phpmyadmin))
- 介面各區塊：資料庫列表、SQL 執行區、匯入匯出工具

---

## How to run queries

在 SQL 區塊直接輸入查詢：

```sql
SELECT * FROM Books;
```

---

## Inserting data to our Book database

```sql
INSERT INTO Books (title, author, published_year)
VALUES ('Clean Code', 'Robert C. Martin', 2008);
```

---

## Retrieving data from our Book database

```sql
SELECT title, author FROM Books;
```

---

## Using JOIN Across Tables

### The JOIN Operation

- JOIN links across several tables in a `SELECT` query.
- You must tell the JOIN how to use the keys that connect tables with an `ON` clause.

```sql
SELECT b.title, a.name
FROM Books b
JOIN Authors a
ON b.author_id = a.id;
```

---

## ON DELETE CASCADE

刪除時會自動影響關聯表：

```sql
DELETE FROM Genre WHERE genre_name = 'Metal';
```

---

## ON DELETE Choices

- **RESTRICT (Default)** → 不允許破壞外鍵關聯
- **CASCADE** → 刪除或更新時，自動套用到子表
- **SET NULL** → 子表的外鍵欄位設為 `NULL`

---

## Many-to-Many Relationships

Example:

```
Course <-> Course_Member <-> User
course_id <-> (course_id, user_id) <-> user_id
```

透過 **中介表 (join table)** 來建立多對多關係。

---

# End! 🙂

刷題時間 👉 [https://freecodecamp.org/](https://freecodecamp.org/)
