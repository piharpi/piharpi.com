---
title: Pub Notes
permalink: /notes/
layout: page
excerpt: Catatan Public agar enggak usah pusing-pusing mengingat.
comments: false
---

#### Rails 6 db:system:change --to command

Untuk menggunakan Rails 6 `db:system:change`, sederhana saja kamu hanya perlu menentukan database adapter dengan `--to` option.

```bash
rails db:system:change --to=<adapter>
# <adapter> : postgresql, mysql, sqlite3, oracle, sqlserver, dll...
```

Setelah menjalankan perintah diatas, jangan lupa kemungkinan kamu butuh mengubah versi database adapter di `Gemfile`.

---

#### Mematikan Jekyll Server

Mengehentikan server Jekyll dengan tombol <kbd>CTRL</kbd> + <kbd>Z</kbd> tidak mengehentikan proses secara penuh, untuk menangani hal ini matikan `PID` dengan cara ini.

```bash
$ lsof -wni tcp:4000
$ kill -9 <PID of process>
```

Dan lain waktu, gunakan <kbd>CTRL</kbd> + <kbd>C</kbd> untuk menghentikan server.
