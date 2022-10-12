---
sidebar_position: 6
---

# Git Pull

Seperti halnya git push, git pull digunakan untuk menarik perubahan dari remote server ke local remote seperti gitlab, github, ataupun bitbucket.

## Yang Perlu Diperhatikan sebelum melakukan push

- lokasi branch yang sedang aktif

  jika ingin melakukan pull dari main branch (bisa main ataupun master) ke personal branch ataupun branch fitur maka untuk menjalankan git pull bisa menggunakan

  ```bash
  git pull nama_remote nama_main_branch
  ```

  Apabila ingin melakukan pull dari main branch ke main branch local, untuk menjalankan command git pull bisa menggunakan

  ```bash
  git pull
  ```
