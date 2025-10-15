# Observações

1. Estou utilizando o docker para manter o ambiente isolado e melhorar a organização.
2 . Nos testes apenas 1 (`Products › mostra filtro aditivo corretamente`) não passou pois o item procurado (`235/55 SU01`) não existe no Mock, não sei se esse foi o intuito. Mas fiz o teste com o item existente e passou.

```bash
Test Suites: 1 failed, 1 total
Tests:       1 failed, 5 passed, 6 total
```

# Utilizando o Docker

1. Precisa instalar o Docker na máquina.
2. Rodar os comandos:
- `docker compose build` - criar o build da aplicação.
- `docker compose up` - subir a aplicação.
- `docker conpose exec frontend npm run test` - para rodar os testes.