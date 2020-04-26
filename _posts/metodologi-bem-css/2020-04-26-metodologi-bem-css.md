---
layout: post
title: Metodologi BEM dan finally everybody knows what you did.
date: 2020-04-26 01:00 +0700
description: Konvensi penamaan suatu hal pada pemprograman — memang terkadang menjadi masalah, sering membuat kerumitan programmer dan koléga-nya, termasuk memberi nama class selector CSS, hal yang sepele tapi ternyata bisa menjadi senjata makan tuan ketika bekerja dengan skala file CSS yang besar.
tag:
  - css
  - cleancode
image: /metodologi-bem-css/ilustrasi-bem-css.png
---

> There are only two hard things in Computer Science: cache invalidation and naming things.
> -- Phil Karlton.

## TL;DR

Konvensi penamaan suatu hal pada pemprograman — memang terkadang menjadi masalah, sering membuat kerumitan programmer dan koléga-nya, termasuk memberi nama class selector CSS, hal yang sepele tapi ternyata bisa menjadi senjata makan tuan ketika bekerja dengan skala file CSS yang besar.

Sering terjadi; beberapa waktu tidak membuka file project yang semula kita paham dengan baris kode yang ditulis seketika lupa apa maksud baris kode tersebut, dikarenakan ke**tidak** strukturan kode dan penamaan yang tidak konsisten, sehingga hanya Tuhan saja yang mengetahui maksud baris kode tersebut.

Beruntungnya terdapat beberapa metodologi CSS yang bisa digunakan SMACSS, OOCSS, SUITCSS, Atomic dan **BEM** yang mana akan dibahas tulisan ini.

Metodologi BEM hadir bertujuan untuk menyelesaikan permasalahan diatas yaitu naming convention dan struktur pada classes di HTML dan CSS, sehingga kode dapat dipahami dengan mudah oleh developer, BEM ini [dikembangkan](http://bem.info) oleh Yandex perusahaan teknologi asal Rusia, BEM termasuk metode yang sering dipakai para developer saat ini karena memilki beberapa benefits: modularity, reusabililty dan structure.

### Dive in BEM

BEM sendiri merupakan singkatan dari **B**lock, **E**lement, **M**odifier dari **tiga kata** tersebut miliki konsep kerja masing-masing, namun sebelum menjalaskan konsep itu, akan saya berikan ilustrasi pengimplementasianya supaya lebih mudah dipahami.

---

[Katakanlah](#kembali) saya akan membuat sebuah komponen **card** yang mana komponen ini memiliki gambar **background,** user **avatar,** **deskripsi** singkat dan **footer** yang berisi external **link** (github, twitter), berikut ini ilustrasi dalam gambar.

<figure>
  <img src="/metodologi-bem-css/bem-css.png" alt="Konsep yang akan diterapkan dengan BEM CSS.">
  <figcaption>Fig 1. Konsep yang akan diterapkan dengan BEM CSS.</figcaption>
</figure>

Dari gambar diatas dapat dijelaskan bahwa:

**Block** merupkan entity yang berdiri sendiri, memiliki makna dirinya sendiri, pada gambar diatas bahwa card bertindak sebagai wrapper(pembungkus) dari element yang didalamnya, aturan penamaan block ialah `.namablock`, maka block card menjadi `.card`

---

**Element** bagian dari **Block** yang tidak berdiri sendiri dan secara _semantic_ bergatung pada **Block**, contoh pada gambar diatas : background, avatar, title, description, footer merupakan bagian-bagian dari `.card`, karena posisinya berada didalam **Block** `.card`, aturan penamaan menggunakan double underline(\_\_) setelah nama block diikuti nama element `.namablock__namaelement` maka masing-masing element tersebut`.card__background` `.card__avatar` `.card__title` `.card__description` `.card__footer`.

---

**Modifier** sebuah state yang ditugaskan untuk melakukan pengubahan _behaviour_ (bentuk, penampilan, ukuran) dari **Block** ataupun **Element**. Katakanlah saya ingin mengubah penampilan yang semula avatar kotak menjadi avatar berbentuk radius circle/melingkar, aturan penamaan modifier ini menggunakan double dashes(—) setelah nama **Block** atau juga **Element,** dan diikuti nama modifiernya `.namablock__namaelement--namamodifier` maka yang dihasilkan `.card__avatar--circle`.

**\*)** Aturan *naming/*penamaan ini sudah menjadi ketentuan dari metodologi BEM.

<figure>
  <img src="/metodologi-bem-css/ilustrasi-bem-css.png" alt="Ilustrasi implementasi BEM CSS.">
  <figcaption>Fig 2. Ilustrasi implementasi BEM CSS.</figcaption>
</figure>

Jika kita tuliskan di CSS, struktur akan lebih terlihat tegas, mempunyai makna yang jelas, karena setiap class selector memilki peran dan saling berkaitan.

```scss
// CSS
// Block tanpa ada simbol apapun,
// sebagai inti komponen
.card {}

// Element adalah bagian dari Block
// Element tanda underscore 2 kali
// diikuti nama element setelah block
.card__background {}
.card__avatar {}
.card__title {}
.card__description {}
.card__footer {}

// Block lagi
.link {}

// Modifier mengubah behaviour Block atapun Element
// Penamaan Block dengan Modifier,
// 2 dashes setelah block ataupun setelah element
.link--blue {}
.link--light {}

// Block dan Element dan Modifier jika digabung
.card__avatar--circle {}
.card__avatar--rounded {}
```

## Pros and Cons

**Pro,** BEM jelas less-confusing, dengan adanya **Block** sebagai inti komponen(wrapper), **Element** bagian dari block, dan **Modifier** sebagai pengubah behaviour, kita bisa mengerti peran masing-masing class selector dan setiap class selector memilki penamaan *unique/*unik, sehingga kita tidak lagi mengalami konflik dengan nama class selector yang lain (**Modularity**), Jika suatu nama block sudah tersedia maka harusnya itu dapat digunakan kembali dan itu akan mengurangi jumlah baris css yang ditulis (**Reusabilty**), struktur yang sederhana tetapi jelas, mempermudah developer untuk bisa mengingat kembali kode yang ia tulis ataupun pada saat prosses debugging (**Structure**).

**Kontra,** harus melakukan _nesting/repeated_ penamaan, dan harus memberikan double-underscore(\_\_) atau double-dashes(—) pada saat pemberian nama classes yang membuat beberapa orang tidak menyukai itu, dan suatu saat nama class selector akan semakin panjang tergantung pada nama elemen dan block.

**Solusi Kontra,** dapat diatasi dengan menggunakan [Sass](https://sass-lang.com/) jika kalian biasa menggunakanya itu akan lebih baik.

```scss
// SCSS
.card {
  &__background {}
  &__avatar {
    &--circle {}
    &--rounded {}
  }
  &__title {}
  &__description {}
  &__footer {}
}

.link {
  &--blue {}
  &--light {}
}
```

Implementasi pada HTML, bisa ditebak apa yang terjadi dengan `.card__avatar--circle`? dapat dijelaskan disini, `--circle` akan mengubah elemen `.__avatar` yang dimiliki oleh block `.card` menjadi bulat, cukup meaningful bukan?

```html
<!-- Block .card sebuah component card -->
<div class="card">
  <!-- Element .card__background bagian dari block .card -->
  <div class="card__background"></div>

  <!-- Element .card__avatar bagian dari block .card -->
  <!-- Modifier .card__avatar--circle 
  mengubah bentuk Element .card__avatar menjadi bulat -->
  <img
    class="card__avatar card__avatar--circle"
    src="https://harpi.rocks/assets/img/avatar.jpg"
    alt="Mahendrata Harpi"
  />

  <!-- Element .card__title bagian dari block .card -->
  <h1 class="card__title">Mahendrata Harpi</h1>

  <!-- Element .card__description bagian dari block .card -->
  <p class="card__description">
    He's write in Bahasa about what interests him and as a journal for
    documentation things that he learned.
  </p>

  <!-- Element .**card__footer** bagian dari block .card -->
  <div class="**card__footer**">
    Follow me on

    <!-- Block .link component -->
    <!-- Modifier .link--light mengubah warna .link menjadi putih -->
    <a
      class="link link--light"
      href="http://github.com/piharpi"
      target="_blank"
      rel="noopener noreferrer"
      >GitHub</a
    >
    or
    <!-- Block .link component -->
    <!-- Modifier .link--blue mengubah warna .link menjadi biru -->
    <a
      class="link link--blue"
      href="http://twitter.com/piharpi"
      target="_blank"
      rel="noopener noreferrer"
      >Twitter</a
    >
  </div>
</div>
```

## Output Learning

Gambar dibawah ini merupakan hasil komponen card yang saya buat berdasarkan konsep diatas, sengaja tidak saya lampirkan CSS karena terlalu panjang nantinya, namun hasil diatas dan source code bisa diakses pada [disini](https://codesandbox.io/s/bem-css-y55p2?file=/index.html).

<figure>
  <img src="/metodologi-bem-css/implementing-bem-css.png" alt="Hasil dari metodologi BEM CSS">
  <figcaption>Fig 3. Hasil dari metodologi BEM CSS </figcaption>
</figure>

### Conclusion

BEM adalah sebuah metode _naming convention_ yang bertujuan menulis secara jelas classes sehingga memiliki makna yang tegas, tujuan dapat diprediksi(_predictable)_, sehingga sesama kolega mempunyai standar penulisan yang jelas, dan tidak saling membingungkan.

<u>Sekarang bukan cuma kamu dan Tuhan saja yang paham kodemu, tapi semua orang tahu apa yang kamu lakukan dan kamu maksud dari kode CSS tersebut. Finally everybody knows what you did.</u>

Yah, tentu saja ada yang menganggap bahwa BEM ini tidak terlalu penting, menggunakan BEM memang **bukan** sebuah keharusan, kembali pada hal yang dikerjakan apakah sebuah pekerjaan skala kecil dan apakah tanpa BEM pekerjaan bisa _maintainable_ atau sebaliknya, juga tergantung kesepakatan sesama kolega.

**Namun**, menggunakan BEM ini menurut saya rasa membantu dalam pengembangan sehingga kode memilki aturan penulisan sama antar kolega, mencegah terjadinya redundansi kode css dan tingkat [specifity](https://specificity.keegan.st/) yang jelas sehingga mencegah terjadinya [error](https://www.phase2technology.com/blog/used-and-abused-css).

Masih pengen gali lebih dalam? [kunjungi](https://en.bem.info/methodology/quick-start/)


##### Resources

- [http://getbem.com/introduction/](http://getbem.com/introduction/)
- [https://en.bem.info/methodology/](https://en.bem.info/methodology/)
- [https://css-tricks.com/bem-101/](https://css-tricks.com/bem-101/)