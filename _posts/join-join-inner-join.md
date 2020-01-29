---
title: SQL JOINs!
date: 2020-01-26 11:58:47 +07:00
# modified: 2020-01-15 09:45:47 +07:00
tags: [database, sql]
description: Shell adalah sebuah command-line interpreter; program yang berperan sebagai penerjemah perintah yang diinputkan oleh User yang melalui terminal, sehingga perintah tersebut bisa dimengerti oleh si Kernel.
image: "/assets/img/posts/shell_evolution.png"
---

**Enggak**, ini bukan bahas itu.

Bingung dengan relasi database? _sama_, ya udin mari bingung bareng, _enggak_ mari belajar bahas relasi ini, relasi yang gak tau harus dikemanain [#eh](#udin)!

<figure id="udin">
<img src="/assets/img/posts/weird_guyyy.gif" alt="installing nginx in ubuntu">
<figcaption>Fig 1. si_udin_lagi_seneng_banget_joged.mp3</figcaption>
</figure>

Tulisan ini cuma mau bahas `inner join` aja sih, soalnya nyoba nulis [kemarin](/blog/apa-itu-shell/) kepanjangan 😂 bahasa juga kaku banget, biasa aja ya?

So, si [Udin](#udin) ini mahasiwa di A\*\*KOM, pada semester 4 udin cuma dibolehin ambil `satu kosentrasi` aja nih, udin anak jurusan informatika mempunyai 3 kosentrasi(pemprograman, jaringanm)pilihan, begitu pula dengan teman2nya(ucup, bambang, tejo).

Katakanlah, Udin dan temenya sebagai mahasiswa yang akan mengambil kosentrasi dan which is setiap mahasiswa hanya satu kosentrasi saja, so gambaranya seperti ini.

```sql
SELECT mahasiswa.id, kosentrasi.name
FROM mahasiswa
JOIN konsentrasi ON mahasiswa.id = konsentrasi.id;
```

Sekian penjelasan ini semoga bisa dipahami, dan saling memahami ea... _sae jomblo!_

Next kita bahas left join dan kawanya.

https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/
https://academy.vertabelo.com/blog/illustrated-guide-multiple-join/
https://towardsdatascience.com/sql-join-8212e3eb9fde
https://jiscollege.ac.in/pdf/projectcasestudy.pdf
