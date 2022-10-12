---
sidebar_position: 2
---

# Git Add

`git add` adalah basic command pada git yang digunakan untuk menambahkan file ke local staged. Dengan menggunakan command ini, maka file yang sudah dibuat atau dirubah akan naik ke local staged dan siap untuk ditambahkan commit message lalu akan ditambahkan ke remote staged dan siap untuk di push ke cloud staged seperti gitlab atau github.

## Command pada add

Pada umumnya, untuk menambahkan file menggunakan git add ada 2 command yaitu

- `git add .` untuk menambahkan semua file perubahan atau penambahan
- `git add namafile.extension` untuk menambahkan 1 file saja

## Bagaimana jika ingin membatalkan file yang sudah di staged?

jika ingin membatalkan file yang sudah di add sebelumnya, maka bisa menggunakan command `git reset "File path"` untuk membatalkan 1 file dan menggunakan command `git reset` untuk membatalkan semua file yang sudah di staged
