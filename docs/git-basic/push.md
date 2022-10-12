---
sidebar_position: 5
---

# Git push

Git push digunakan untuk menambahkan perubahan di local remote ke remote server seperti gitlab, github, ataupun bitbucket.

## Yang Perlu Diperhatikan sebelum melakukan push

- lokasi branch yang sedang aktif

  jika ingin melakukan push ke main branch (bisa main ataupun master) maka untuk menjalankan git push bisa menggunakan

  ```bash
  git push
  ```

  Apabila ingin melakukan push ke branch fitur atau personal branch, untuk menjalankan command git push bisa menggunakan

  ```bash
  git push nama_remote nama_branch
  ```
