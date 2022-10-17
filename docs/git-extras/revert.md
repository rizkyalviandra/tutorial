---
sidebar_position: 2
---

# Git Revert

Git Revert akan mengembalikan kondisi branch sebelumnya, dan akan digabungkan dengan _commit_ yang ada saat ini. Git Revert lebih aman digunakan dibandingkan `git reset`, karena perintah ini tidak akan menghapus catatan log git sebelumnya.

## Perintah Git Revert

Untuk menjalankan git revert, maka bisa menjalankan dengan perintah:

```bash
git revert commit_code
```
