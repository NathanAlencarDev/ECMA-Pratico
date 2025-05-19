# 📦 ECMAScript Modules (ESM)

## Por que devemos modularizar?

À medida que um projeto cresce, o código tende a se tornar mais complexo. Isso pode gerar diversos problemas, como:

❌ Dificuldade de manutenção  
❌ Baixa legibilidade  
❌ Dificuldade para implementar novas funcionalidades ou realizar mudanças  

A **modularização** é uma prática essencial para manter o código organizado, reutilizável e mais fácil de entender e modificar.

---

## 🧱 Exemplo teórico de modularização

Imagine que você tem um sistema com várias funcionalidades. Em vez de manter todo o código em um único arquivo, podemos separá-lo em diferentes blocos:

📂 Um bloco principal com a lógica central da funcionalidade  
📄 Outros arquivos separados com funcionalidades auxiliares ou complementares  

---

## 🎯 Vantagens da modularização

✅ Manutenção facilitada  
✅ Melhor organização  
✅ Refatorações mais rápidas e seguras  

---

## 🔹 ECMAScript Modules (ESM)

```js
// Importação
import { elem } from './module.js';

// Exportação
export const elem = {
  // Conteúdo...
};
```

---

✅ Sintaxe moderna e padronizada (import / export)
⚡ Carregamento assíncrono
🌐 Suporte nativo em navegadores
📄 Carregamento estático (melhor para ferramentas como bundlers)

---

| Característica             | ECMAScript Modules (ESM)      |
| -------------------------- | ----------------------------- |
| **Sintaxe**                | `import` / `export`           |
| **Carregamento**           | Assíncrono                    |
| **Suporte em Navegadores** | ✅ Sim                         |
| **Suporte no Node.js**     | ✅ Sim (mais recente)          |
| **Carregamento Dinâmico**  | 🚫 Limitado                   |
| **Análise Estática**       | ✅ Sim                         |
| **Uso recomendado**        | Front-end / Projetos modernos |

---


