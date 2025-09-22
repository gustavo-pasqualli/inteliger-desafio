# 📖 Dev Finder

Aplicação Angular para busca de usuários do GitHub, exibindo informações de perfil e repositórios.  
Construída com **Angular 20** e **PrimeNG**.

## 🚀 Requisitos

Antes de começar, verifique se você possui instalado:

- **Node.js**: `>=20.x`  
- **NPM**: `>=10.x` (ou use Yarn, se preferir, mas o projeto está configurado para NPM)  
- **Angular CLI**: `^20.1.5`  

> ⚠️ Recomendado usar **NVM** (Node Version Manager) para gerenciar versões de Node.

## 📦 Instalação do projeto

Clone o repositório:

```bash
git clone https://github.com/gustavo-pasqualli/inteliger-desafio.git
cd inteliger-desafio
```

Instale as dependências com NPM:

```bash
npm install
```

## 🖥️ Rodando em ambiente de desenvolvimento

Execute o comando:

```bash
npm start
```

Isso roda internamente:

```bash
ng serve
```

A aplicação ficará disponível em:  
👉 [http://localhost:4200](http://localhost:4200)

## 🏗️ Build para deploy

Para gerar os arquivos otimizados para produção:

```bash
npm run build
```

Os artefatos ficarão disponíveis na pasta:

```
dist/inteliger-desafio/
```

Esses arquivos podem ser servidos por qualquer servidor HTTP (Nginx, Apache, Vercel, etc.).

## 📜 Scripts disponíveis

- `npm start` → inicia o ambiente de desenvolvimento  
- `npm run build` → gera a build de produção  
- `npm run watch` → build contínua no modo desenvolvimento  
- `npm test` → roda os testes unitários  

## 🛠️ Tecnologias principais

- [Angular 20](https://angular.dev/)  
- [PrimeNG 20](https://primeng.org/)  
- [PrimeIcons](https://www.primefaces.org/primeicons/)  
- [RxJS](https://rxjs.dev/)  
