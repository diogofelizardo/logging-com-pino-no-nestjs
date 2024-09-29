# Logging no NestJs

Este repositório contém um exemplo de implementação de sistema de logs no NestJs, demonstrando como configurar, customizar e utilizar interceptadores para monitorar operações em uma aplicação backend.

## 📦 Estrutura do Projeto

```
src/
├── cats/
│   ├── cats.controller.ts
│   ├── cats.service.ts
│   └── dto/
│       └── create-cat.dto.ts
├── custom-logger.service.ts
├── logging.interceptor.ts
├── main.ts
└── app.module.ts
```

## 🚀 Começando

### 🛠 Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/diogofelizardo/logging-no-nestjs.git
   cd logging-no-nestjs
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

### ▶️ Executando a Aplicação

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`.

## 📝 Funcionalidades

- **Logging Básico:** Utilização do `Logger` padrão do NestJs para registrar mensagens.
- **Logger Customizado:** Implementação de um `CustomLogger` para personalizar o formato e o destino dos logs.
- **Interceptadores de Logging:** Uso de interceptadores para logar requisições e respostas HTTP automaticamente.
- **Validação de DTOs:** Utilização de `class-validator` e `class-transformer` para validar dados de entrada.

## 📚 Referências

- [Documentação Oficial do NestJs - Logging](https://docs.nestjs.com/techniques/logger)
- [NestJs Interceptors](https://docs.nestjs.com/interceptors)
- [Class Validator](https://github.com/typestack/class-validator)

---

Este README fornece uma visão geral clara e concisa do projeto, facilitando para que outros desenvolvedores entendam e utilizem o repositório.