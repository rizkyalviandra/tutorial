---
sidebar_position: 7
---

# Git Fetch

Git Fetch adalah mengambil commit terbaru dari _remote repository_.

## Perbedaan Git Pull Dan Git Fetch

`Git Fetch` dan `Git pull` secara fungsi sama, akan tetapi ada sedikit perbedaan, yaitu:

- Perintah `git pull` akan mengambil _commit_ terbaru dan otomatis menggabungkan (merge) dengan _branch_ yang saat ini aktif
- Perintah `git fetch` **hanya** akan mengambil _commit_ saja dan tidak akan langsung melakukan _merge_.

## Kapan Harus Menggunakan Git Pull dan Git Fetch?

Git Fetch digunakan ketika di local repository sudah ada perubahan akan tetapi ingin mengambil commit terbaru. Perintah `git fetch` akan mengambil commit terbaru dan menyimpannya di `origin/branch`.

Ketika di lokal repository tidak ada perubahan, maka bisa menggunakan perintah `git pull`.
