---
title: Membuat discord bot dengan bahasa ruby
date: 2019-6-20 8:28:47 +07:00
modified: 2019-6-20 11:45:47 +07:00
categories: tips
tags: [semver, versioning]
image: "/assets/img/posts/blog/osi_keyhole_300X300_90ppi_0.png"
---
Pada saat kita merilis suatu paket atau ingin menginstall suatu paket pasti tidak luput dari sistem penomoran versi. nah sistem penomoran ini disebut SemVer(Semantic Versioning).

Mengetahui penomoran suatu rilis sangat penting untuk mencegah hal yang tidak diinginkan saat akan menggunakan paket atau <i>"Dependency hell" </i><sup>[[1](#dependency-hell)]</sup> istilahnya, maka berikut ini penjelasan mengenai Semantic Versioning.

<figure>
<img src="/assets/img/posts/tips/semver.png">
<figcaption>Image from perlhacks.com</figcaption>
</figure>
<!-- <sup id="dependency-hell">[1]</sup><small> <i>include software performing abnormally, bugs, errors messages when trying to run or install software, or the software ceasing to function.<small> -->

## Semantic Versioning
Semantic Versioning adalah sistem penomoran yang memiliki pembagian tiga elemen versi yaitu `MAJOR.MINOR.PATH` dan contoh versi sebuah paket adalah `3.17.2` bisa kita artikan bahwa angka `3 = MAJOR`, `17 = MINOR`, `2 = PATH`.

Apa itu versi major.minor.path ? 
- __MAJOR__ version adalah ketika kita melakukan perubahan secara mayoritas / drastis, membuat suatu hal yang krusial, pengimplimentasian versi sekarang sudah tidak sama lagi dengan versi sebelumnya, contoh perubahan API incompatible.
- __MINOR__ version adalah ketika kita melakukan perubahan secara minoritas, contoh penambahan fungsionalitas namun pengimplementasi masih sama dengan versi sebelumnya. 
- __PATCH__ version adalah ketika kita melakukan pembenahan, bug fixing misalnya.

Dan berikut merupakan contoh dari pengimplementasian Semver agar terdapat gambaran, contoh ini saya kutip dari [guide rubygems](https://guides.rubygems.org/patterns/#pessimistic-version-constraint) dan saya tambahkan sedikit penjelasan.
```
VERSIONS | KETERANGAN
  2.1.0  | Baseline # Versi awal rilis
  2.2.0  | Introduced some new (backward compatible) features # Mengenalkan suatu fitur baru
  2.2.1  | Removed some bugs # Pembenahan bugs
  2.2.2  | Streamlined your code # Mengefisienkan kode atau Refactoring
  2.3.0  | More new features (but still backwards compatible). # Menambahkan fitur baru lagi
  3.0.0  | Reworked the interface. Code written to version 2.x might not work. # Perubahan Major, kemungkinan versi sebelumnya tidak bekerja
```
#### Perincian SemVer
Berikut adalah __beberapa__ perincian dari semantic versioning.
- Versi normal dari sebuah semantic versioning yaitu X.Y.Z dimana X adalah major, Y minor, Z patch format, angka bukan negative integer, tidak harus berawalan 0 (zeroes). setiap nomor harus menambah secara angka. contoh `1.9.0 -> 1.10.0 -> 1.11.0`.
- Setiap ada perubahan berarti merilis adalah versi baru.
- Versi major  0.y.z adalah versi yang menjelaskan <i>initial development</i> / awal pengembangan, paket belum benar-benar stabil, versi dapat berubah suatu saat. 
- Ketika Z berubah / naik y menjadi 0.
- ketika X berubah / naik maka y dan z menjadi 0.

Untuk lebih lanjut dan penjelasan lengkap bisa dibaca [disini](https://semver.org/#semantic-versioning-specification-semver).

Dengan SemVer ini kita dapat mengetahui pengembangan sistem, baik dari segi pengembang paket maupun pengguna paket, sehingga dapat mengetahui kapan dia harus menghindari atau menggunakan versi MAJOR.

dalam contoh ini saya akan membirikan contoh menggunakan pake humanize dan rails yang paket tidak kompatible
 

##### Reference
- https://semver.org/