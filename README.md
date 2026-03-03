# 🖥️ Simulado — Processo Seletivo · Técnico em Informática

> Simulado online para candidatos ao cargo de **Técnico em Informática**, com banco de **100 questões** e sorteio aleatório de **25 questões** por tentativa.

---

## 📋 Sobre o Projeto

Este é um simulado desenvolvido em HTML, CSS e JavaScript puro (sem frameworks ou dependências de servidor), pensado para ajudar candidatos a se prepararem para o processo seletivo do cargo de Técnico em Informática.

### ✨ Funcionalidades

- 📚 **Banco com 100 questões** distribuídas em 10 tópicos
- 🎲 **Sorteio aleatório** de 25 questões por tentativa (sem repetir questões já usadas)
- ✅ Questões de **resposta única** (radio) e **múltipla escolha** (checkbox)
- 📊 **Barra de progresso** em tempo real
- 🗺️ **Mapa de questões** para navegar entre elas
- 📝 **Revisão de erros** com gabarito e explicações ao final
- 📄 **Exportação em PDF** da prova completa com gabarito individual
- 💾 **Histórico de tentativas** salvo localmente no navegador (localStorage)
- 🔄 Opção de **refazer o simulado** com novas questões automaticamente

---

## 📖 Tópicos Abordados

| # | Tópico | Qtd. de Questões |
|---|--------|-----------------|
| 1 | Sistemas Operacionais | 10 |
| 2 | Hardware | 8 |
| 3 | Manutenção de Computador | 8 |
| 4 | Softwares Mais Comuns | 7 |
| 5 | Pacote Office | 12 |
| 6 | Ferramentas Corporativas | 7 |
| 7 | Serviços de Internet | 8 |
| 8 | Redes de Computadores | 10 |
| 9 | Atalhos do Windows, Office e Navegadores | 8 |
| 10 | Segurança da Informação | 12 |
| 11 | Suporte Técnico | 5 |
| 12 | Atendimento ao Usuário | 5 |
| **Total** | | **100** |

---

## 🎮 Como Usar o Simulado

### Passo a Passo

1. **Abra o arquivo `index.html`** no seu navegador
2. **Digite seu nome completo** no campo indicado
3. Clique em **🚀 Iniciar Simulado**
4. Responda as **25 questões** sorteadas aleatoriamente
   - Questões de **resposta única**: marque apenas uma alternativa
   - Questões de **múltipla escolha**: você pode marcar mais de uma
5. Use o **mapa de questões** (botão "📋 Ver Mapa de Questões") para navegar livremente
6. Na última questão, clique em **✅ Confirmar Entrega**
7. Revise o resumo e confirme para ver seu resultado
8. Ao final, confira seu **percentual de acerto**, **quais questões errou** e **as explicações**
9. Opcionalmente, clique em **📄 Baixar Prova em PDF** para salvar um comprovante

### 🏆 Critério de Aprovação

| Resultado | Critério |
|-----------|----------|
| ✅ Aprovado | 80% ou mais de acertos (20 ou mais questões) |
| ❌ Não atingiu a média | Menos de 80% de acertos |

### 💡 Dicas de Uso

- O **histórico de tentativas** fica salvo no navegador. Ao digitar seu nome novamente, o sistema exibe todas as tentativas anteriores
- O sistema **não repete questões** já respondidas nas tentativas anteriores — após esgotar o banco, ele reinicia o ciclo automaticamente
- Você pode **voltar e avançar** entre questões livremente antes de confirmar a entrega
- Um aviso aparece se você tentar avançar sem responder uma questão, mas não impede a navegação

---

## 🚀 Como Executar Localmente

Este projeto **não precisa de servidor** ou instalação de dependências. É um projeto estático com HTML, CSS e JavaScript puro.

### Opção 1 — Abrir diretamente no navegador (mais simples)

1. Faça o download ou clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/processo_seletivo.git
   ```
2. Abra a pasta do projeto
3. Dê um duplo clique no arquivo `index.html`
4. O simulado abrirá diretamente no seu navegador padrão ✅

> ⚠️ **Atenção:** Ao abrir pelo protocolo `file://`, algumas funcionalidades de segurança do navegador podem bloquear o `localStorage`. Se isso acontecer, use a **Opção 2**.

---

### Opção 2 — Servidor local com VS Code (recomendado)

Se você usa o **Visual Studio Code**, utilize a extensão **Live Server**:

1. Instale o VS Code: [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Instale a extensão **Live Server** (por Ritwick Dey)
3. Abra a pasta do projeto no VS Code
4. Clique com o botão direito no `index.html` e selecione **"Open with Live Server"**
5. O navegador abrirá automaticamente em `http://127.0.0.1:5500` ✅

---

### Opção 3 — Servidor local com Python

Se você tiver o **Python** instalado:

```bash
# Python 3
cd caminho/para/a/pasta/processo_seletivo
python -m http.server 8080
```

Depois acesse: [http://localhost:8080](http://localhost:8080) ✅

---

### Opção 4 — Servidor local com Node.js

Se você tiver o **Node.js** instalado:

```bash
# Instale o serve globalmente (apenas uma vez)
npm install -g serve

# Execute na pasta do projeto
cd caminho/para/a/pasta/processo_seletivo
serve .
```

Depois acesse o endereço exibido no terminal (geralmente `http://localhost:3000`) ✅

---

## 🗂️ Estrutura de Arquivos

```
processo_seletivo/
├── index.html    # Estrutura HTML da aplicação (4 telas/etapas)
├── main.css      # Estilos visuais (tema escuro com acentos azuis)
├── main.js       # Lógica da aplicação e banco de questões
└── README.md     # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estrutura das páginas |
| CSS3 | Estilização e animações |
| JavaScript (ES6+) | Lógica do simulado |
| [jsPDF](https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js) | Geração do PDF (CDN) |
| [Google Fonts](https://fonts.google.com/) | Tipografia (Barlow + Source Sans 3) |
| localStorage | Persistência do histórico de tentativas |

> **Sem backend, sem banco de dados, sem instalação!** Tudo roda no navegador do usuário.

---

## 🌐 Compatibilidade

| Navegador | Suporte |
|-----------|---------|
| Google Chrome | ✅ Recomendado |
| Microsoft Edge | ✅ Recomendado |
| Mozilla Firefox | ✅ Suportado |
| Opera | ✅ Suportado |
| Safari | ✅ Suportado |
| Internet Explorer | ❌ Não suportado |

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de preparação para processos seletivos. Sinta-se libre para utilizá-lo e adaptá-lo conforme necessidade.

---

*Desenvolvido com 💙 para auxiliar candidatos ao processo seletivo — Cargo: Técnico em Informática*
