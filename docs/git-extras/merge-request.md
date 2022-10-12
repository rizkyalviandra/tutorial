---
sidebar_position: 1
---

# Merge Request

Merge Request pada umumnya digunakan untuk menyatukan perubahan pada fitur branch atau personal branch ke main branch. untuk membuat merge request biasanya developer harus membuat merge request secara manual melalui website gitlab.

## Bagaimana untuk membuat merge request melalui command line?

untuk membuat merge request melalui command line dapat menjalankan command berikut:

```bash
git push -o merge_request.create -o merge_request.target=main_branch nama_remote nama_branch
```

> Untuk case diatas, menggunakan gitlab

## Perlu Diingat

- ketika menggunakan command diatas, sudah tidak perlu menggunakan command `git push` karena command diatas sudah melakukan push dan langsung membuat merge request pada gitlab
- Ketika sudah membuat merge request, maka dapat menjalankan `git push` untuk memperbarui branch yang sedang dibuatkan merge request (pada case tertentu seperti memperbaiki conflict dari local)
