---
sidebar_position: 3
---

# Git Stash

Git stash adalah perintah untuk menyimpan sementara semua perubahan yang ada saat ini. Git stash biasa digunakan ketika perubahan saat ini ada di branch yang salah. perintah yang digunakan untuk mengembalikan perubahan yang disimpan tadi, dapat menjalankan perintah `git stash pop`

## Perintah Git Stash

untuk menjalankan perintah git stash, dapat menjalankan seperti berikut:

```bash
git stash
git checkout feat/branch
git stash pop
```

> case untuk menjalankan perintah diatas adalah perubahan yang dimaksud seharusnya ada di branch "feat/branch" sedangkan branch yang aktif saat perubahan ada di branch "main"
