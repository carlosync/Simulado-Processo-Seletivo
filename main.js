/* ===== BANCO DE QUESTÕES ===== */
const BANCO_QUESTOES = [
    // === Sistemas Operacionais (10 questões: 1-10) ===
    { id: 1, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "Qual sistema de arquivos é utilizado por padrão no Windows 10 para novas instalações?", alternativas: { A: "FAT32", B: "exFAT", C: "NTFS", D: "EXT4", E: "ReFS" }, correta: ["C"], explicacao: "O Windows 10 usa NTFS por padrão, que oferece journaling, permissões de arquivo e suporte a volumes grandes." },
    { id: 2, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "No Windows 11, qual é o requisito obrigatório de segurança de hardware para instalação?", alternativas: { A: "GPU dedicada", B: "Memória ECC", C: "TPM 2.0", D: "Processador ARM", E: "Leitor biométrico" }, correta: ["C"], explicacao: "O Windows 11 exige TPM 2.0 (Trusted Platform Module) como requisito de segurança para instalação." },
    { id: 3, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "Qual comando no Linux exibe o conteúdo de um arquivo de texto no terminal?", alternativas: { A: "ls", B: "cat", C: "mkdir", D: "rm", E: "chmod" }, correta: ["B"], explicacao: "O comando 'cat' (concatenate) exibe o conteúdo de arquivos de texto no terminal Linux." },
    { id: 4, topico: "Sistemas Operacionais", tipo: "multipla", enunciado: "Marque todas as alternativas que são edições válidas do Windows 10:", alternativas: { A: "Home", B: "Professional", C: "Enterprise", D: "Server", E: "Ultimate" }, correta: ["A", "B", "C"], explicacao: "As edições válidas do Windows 10 são Home, Pro (Professional) e Enterprise. 'Server' é Windows Server e 'Ultimate' foi edição do Windows 7." },
    { id: 5, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "No Linux, qual diretório contém os arquivos de configuração do sistema?", alternativas: { A: "/home", B: "/etc", C: "/var", D: "/tmp", E: "/bin" }, correta: ["B"], explicacao: "O diretório /etc contém os arquivos de configuração do sistema no Linux." },
    { id: 6, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "Qual utilitário do Windows permite gerenciar partições de disco de forma gráfica?", alternativas: { A: "Prompt de Comando", B: "Gerenciador de Dispositivos", C: "Gerenciamento de Disco", D: "Editor de Registro", E: "Agendador de Tarefas" }, correta: ["C"], explicacao: "O Gerenciamento de Disco (diskmgmt.msc) permite criar, excluir e redimensionar partições graficamente." },
    { id: 7, topico: "Sistemas Operacionais", tipo: "multipla", enunciado: "Assinale as afirmativas corretas sobre o Windows Update:", alternativas: { A: "Permite atualizar o sistema operacional com patches de segurança", B: "Pode ser completamente desabilitado na edição Home sem ferramentas adicionais", C: "Atualizações de drivers podem ser distribuídas pelo Windows Update", D: "Funciona apenas com conexões de rede cabeadas", E: "Pode ser configurado para agendar reinicializações em horários específicos" }, correta: ["A", "C", "E"], explicacao: "O Windows Update distribui patches de segurança e drivers, e permite agendar reinicializações. Na edição Home, não pode ser totalmente desabilitado sem ferramentas adicionais, e funciona em qualquer conexão de rede." },
    { id: 8, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "Qual é a combinação de teclas para abrir a janela 'Executar' no Windows?", alternativas: { A: "Ctrl + R", B: "Win + R", C: "Alt + R", D: "Shift + R", E: "Win + E" }, correta: ["B"], explicacao: "Win + R abre a caixa de diálogo 'Executar', permitindo abrir programas e utilitários rapidamente." },
    { id: 9, topico: "Sistemas Operacionais", tipo: "unica", enunciado: "O que é o Registro do Windows (regedit)?", alternativas: { A: "Um antivírus nativo do sistema", B: "Um banco de dados hierárquico que armazena configurações do sistema e aplicativos", C: "Uma ferramenta de backup de arquivos", D: "O gerenciador de inicialização do Windows", E: "Um editor de texto avançado" }, correta: ["B"], explicacao: "O Registro do Windows é um banco de dados hierárquico que armazena configurações de baixo nível do sistema, hardware, software e preferências do usuário." },
    { id: 10, topico: "Sistemas Operacionais", tipo: "multipla", enunciado: "Assinale as ferramentas nativas do Windows para solução de problemas:", alternativas: { A: "SFC (System File Checker)", B: "DISM (Deployment Image Servicing and Management)", C: "CCleaner", D: "Solucionador de Problemas do Windows", E: "WinRAR" }, correta: ["A", "B", "D"], explicacao: "SFC, DISM e o Solucionador de Problemas são ferramentas nativas do Windows. CCleaner e WinRAR são softwares de terceiros." },
    // === Hardware (8 questões: 11-18) ===
    { id: 11, topico: "Hardware", tipo: "unica", enunciado: "O que significa a sigla BIOS em um computador?", alternativas: { A: "Basic Input/Output System", B: "Binary Integrated Operating Software", C: "Basic Integrated Output System", D: "Built-In Operating Software", E: "Binary Input/Output System" }, correta: ["A"], explicacao: "BIOS significa Basic Input/Output System. É o firmware responsável por inicializar o hardware antes do carregamento do sistema operacional." },
    { id: 12, topico: "Hardware", tipo: "unica", enunciado: "Qual tipo de memória é volátil e perde seus dados quando o computador é desligado?", alternativas: { A: "SSD", B: "ROM", C: "RAM", D: "HD", E: "Flash" }, correta: ["C"], explicacao: "A memória RAM (Random Access Memory) é volátil — seus dados são perdidos quando o computador é desligado." },
    { id: 13, topico: "Hardware", tipo: "multipla", enunciado: "Marque todos os componentes que são considerados dispositivos de entrada:", alternativas: { A: "Teclado", B: "Monitor", C: "Mouse", D: "Impressora", E: "Scanner" }, correta: ["A", "C", "E"], explicacao: "Teclado, mouse e scanner são dispositivos de entrada. Monitor e impressora são dispositivos de saída." },
    { id: 14, topico: "Hardware", tipo: "unica", enunciado: "Qual componente do computador é responsável pelo processamento gráfico?", alternativas: { A: "CPU", B: "GPU", C: "RAM", D: "Chipset", E: "Fonte de alimentação" }, correta: ["B"], explicacao: "A GPU (Graphics Processing Unit) é o componente dedicado ao processamento gráfico, aliviando a CPU dessa tarefa." },
    { id: 15, topico: "Hardware", tipo: "unica", enunciado: "Quantos bytes existem em 1 Kilobyte (KB) na notação binária?", alternativas: { A: "100", B: "500", C: "1000", D: "1024", E: "2048" }, correta: ["D"], explicacao: "Na notação binária, 1 KB = 1024 bytes (2^10)." },
    { id: 16, topico: "Hardware", tipo: "multipla", enunciado: "Assinale as afirmativas corretas sobre memória SSD:", alternativas: { A: "É mais rápida que um HD convencional", B: "Utiliza discos magnéticos para armazenamento", C: "Não possui partes mecânicas móveis", D: "Consome mais energia que um HD tradicional", E: "Oferece tempos de acesso inferiores aos do HD" }, correta: ["A", "C", "E"], explicacao: "SSDs são mais rápidos, não possuem partes móveis e têm tempos de acesso menores que HDs. Usam memória flash (não discos magnéticos) e consomem menos energia." },
    { id: 17, topico: "Hardware", tipo: "unica", enunciado: "Qual padrão de conexão é mais utilizado atualmente para conectar periféricos como teclado, mouse e pendrives?", alternativas: { A: "PS/2", B: "Serial RS-232", C: "USB", D: "Paralela LPT", E: "FireWire" }, correta: ["C"], explicacao: "O USB (Universal Serial Bus) é o padrão mais utilizado atualmente para conexão de periféricos diversos." },
    { id: 18, topico: "Hardware", tipo: "unica", enunciado: "O que é o chipset da placa-mãe?", alternativas: { A: "O processador principal do computador", B: "A memória cache do sistema", C: "O conjunto de circuitos que gerencia a comunicação entre CPU, memória e periféricos", D: "O sistema de refrigeração do processador", E: "O módulo de rede wireless integrado" }, correta: ["C"], explicacao: "O chipset é o conjunto de circuitos integrados que gerenciam o fluxo de dados entre o processador, a memória e os periféricos na placa-mãe." },
    // === Manutenção de Computador (8 questões: 19-26) ===
    { id: 19, topico: "Manutenção de Computador", tipo: "unica", enunciado: "Qual ferramenta nativa do Windows verifica e corrige erros no sistema de arquivos de um disco?", alternativas: { A: "DISM", B: "SFC /scannow", C: "CHKDSK", D: "DISKPART", E: "DEFRAG" }, correta: ["C"], explicacao: "O CHKDSK (Check Disk) verifica a integridade do sistema de arquivos e corrige erros lógicos e físicos no disco." },
    { id: 20, topico: "Manutenção de Computador", tipo: "unica", enunciado: "Para que serve a pasta térmica aplicada entre o processador e o cooler?", alternativas: { A: "Aumentar a velocidade do processador", B: "Proteger contra curto-circuito", C: "Melhorar a condução de calor entre o processador e o dissipador", D: "Isolar eletricamente os componentes", E: "Reduzir o consumo de energia" }, correta: ["C"], explicacao: "A pasta térmica melhora a condução de calor entre a superfície do processador e o dissipador, otimizando a refrigeração." },
    { id: 21, topico: "Manutenção de Computador", tipo: "multipla", enunciado: "Assinale as práticas corretas ao realizar manutenção interna em um computador:", alternativas: { A: "Utilizar pulseira antiestática", B: "Abrir o gabinete com o computador ligado na tomada", C: "Limpar componentes com ar comprimido", D: "Utilizar pano úmido com água diretamente nos circuitos", E: "Desligar e desconectar o cabo de energia antes de abrir o gabinete" }, correta: ["A", "C", "E"], explicacao: "Deve-se usar pulseira antiestática, ar comprimido para limpeza e desconectar o cabo de energia. Nunca abra com o PC ligado ou use pano úmido nos circuitos." },
    { id: 22, topico: "Manutenção de Computador", tipo: "unica", enunciado: "O comando 'sfc /scannow' no Windows serve para:", alternativas: { A: "Formatar o disco rígido", B: "Verificar e reparar arquivos de sistema corrompidos", C: "Desfragmentar o disco", D: "Atualizar drivers de dispositivos", E: "Limpar arquivos temporários" }, correta: ["B"], explicacao: "O SFC (System File Checker) verifica a integridade dos arquivos de sistema do Windows e substitui versões corrompidas por cópias corretas." },
    { id: 23, topico: "Manutenção de Computador", tipo: "unica", enunciado: "O que é o Modo Seguro (Safe Mode) do Windows?", alternativas: { A: "Um modo de economia de energia", B: "Um modo de inicialização que carrega apenas drivers essenciais para diagnóstico", C: "Um antivírus integrado do Windows", D: "Um modo de criptografia de arquivos", E: "Uma ferramenta de backup automático" }, correta: ["B"], explicacao: "O Modo Seguro inicia o Windows com um conjunto mínimo de drivers e serviços, permitindo diagnosticar e resolver problemas." },
    { id: 24, topico: "Manutenção de Computador", tipo: "multipla", enunciado: "Marque todas as situações que podem indicar a necessidade de substituição de um HD:", alternativas: { A: "Ruídos de clique constantes vindos do disco", B: "Erros frequentes de leitura/escrita reportados pelo CHKDSK", C: "Lentidão ao abrir o navegador", D: "SMART (Self-Monitoring) indicando falha iminente", E: "Tela azul ao iniciar o Windows e que desaparece ao remover o disco" }, correta: ["A", "B", "D"], explicacao: "Ruídos de clique, erros de leitura/escrita e alertas SMART indicam falha no HD. Lentidão no navegador e tela azul podem ter outras causas." },
    { id: 25, topico: "Manutenção de Computador", tipo: "unica", enunciado: "Qual utilitário do Windows é usado para remover programas instalados?", alternativas: { A: "Gerenciador de Tarefas", B: "Painel de Controle > Programas e Recursos", C: "Explorador de Arquivos", D: "Editor de Registro", E: "Gerenciamento de Disco" }, correta: ["B"], explicacao: "O 'Programas e Recursos' (ou 'Aplicativos' no Windows 10/11) no Painel de Controle permite desinstalar programas corretamente." },
    { id: 26, topico: "Manutenção de Computador", tipo: "unica", enunciado: "O que é desfragmentação de disco e quando ela é necessária?", alternativas: { A: "É a exclusão de arquivos duplicados, necessária mensalmente", B: "É o reagrupamento de fragmentos de arquivos no disco para melhorar o desempenho, recomendada para HDs", C: "É a formatação rápida do disco para liberar espaço", D: "É a verificação de vírus no disco rígido", E: "É a compactação de todos os arquivos do sistema" }, correta: ["B"], explicacao: "A desfragmentação reorganiza dados fragmentados no HD para que arquivos sejam lidos de forma contígua. Não é necessária em SSDs." },
    // === Softwares Mais Comuns (7 questões: 27-33) ===
    { id: 27, topico: "Softwares Mais Comuns", tipo: "unica", enunciado: "Qual é a diferença entre software proprietário e software livre?", alternativas: { A: "Software proprietário é sempre gratuito", B: "Software livre permite acesso ao código-fonte e redistribuição", C: "Software proprietário é mais seguro que software livre", D: "Software livre não pode ser utilizado em empresas", E: "Não existe diferença prática entre eles" }, correta: ["B"], explicacao: "Software livre garante ao usuário acesso ao código-fonte, liberdade de uso, modificação e redistribuição. Software proprietário restringe essas liberdades." },
    { id: 28, topico: "Softwares Mais Comuns", tipo: "multipla", enunciado: "Marque todos os softwares que são navegadores de internet:", alternativas: { A: "Google Chrome", B: "Mozilla Firefox", C: "Microsoft Access", D: "Microsoft Edge", E: "Adobe Photoshop" }, correta: ["A", "B", "D"], explicacao: "Chrome, Firefox e Edge são navegadores de internet. Access é um gerenciador de banco de dados e Photoshop é um editor de imagens." },
    { id: 29, topico: "Softwares Mais Comuns", tipo: "unica", enunciado: "O que é um software antivírus?", alternativas: { A: "Um programa que acelera a velocidade da internet", B: "Um programa que detecta, previne e remove softwares maliciosos", C: "Um sistema operacional especializado em segurança", D: "Uma extensão do navegador para bloquear anúncios", E: "Um tipo de firewall de hardware" }, correta: ["B"], explicacao: "Um antivírus é um software projetado para detectar, prevenir e remover malwares (vírus, trojans, ransomware etc.) do computador." },
    { id: 30, topico: "Softwares Mais Comuns", tipo: "unica", enunciado: "O que significa a extensão .PDF em um arquivo?", alternativas: { A: "Programmable Data File", B: "Portable Document Format", C: "Personal Data Folder", D: "Protected Document File", E: "Public Data Format" }, correta: ["B"], explicacao: "PDF significa Portable Document Format, formato criado pela Adobe para representar documentos de forma independente de software e hardware." },
    { id: 31, topico: "Softwares Mais Comuns", tipo: "multipla", enunciado: "Assinale os formatos de arquivo considerados compactados/comprimidos:", alternativas: { A: ".ZIP", B: ".DOCX", C: ".RAR", D: ".7Z", E: ".EXE" }, correta: ["A", "C", "D"], explicacao: "ZIP, RAR e 7Z são formatos de compactação. DOCX é um documento Word (embora use compactação internamente) e EXE é um executável." },
    { id: 32, topico: "Softwares Mais Comuns", tipo: "unica", enunciado: "O que é uma licença OEM de software?", alternativas: { A: "Licença que permite instalar em qualquer computador", B: "Licença vinculada ao hardware original, vendida junto com o equipamento", C: "Licença temporária de avaliação", D: "Licença de código aberto", E: "Licença que permite revender o software" }, correta: ["B"], explicacao: "OEM (Original Equipment Manufacturer) é uma licença vinculada ao hardware em que foi originalmente instalada, não podendo ser transferida para outro computador." },
    { id: 33, topico: "Softwares Mais Comuns", tipo: "unica", enunciado: "Qual tipo de software converte um programa escrito em linguagem de programação para código executável?", alternativas: { A: "Sistema operacional", B: "Compilador", C: "Navegador", D: "Antivírus", E: "Driver" }, correta: ["B"], explicacao: "O compilador traduz código-fonte escrito em linguagem de programação para código de máquina executável pelo computador." },
    // === Pacote Office (12 questões: 34-45) ===
    { id: 34, topico: "Pacote Office", tipo: "unica", enunciado: "No Microsoft Excel, qual função retorna o maior valor em um intervalo de células?", alternativas: { A: "=SOMA()", B: "=MÉDIA()", C: "=MÁXIMO()", D: "=MAIOR()", E: "=TOPO()" }, correta: ["C"], explicacao: "A função =MÁXIMO() retorna o maior valor numérico em um intervalo. =MAIOR() retorna o k-ésimo maior valor." },
    { id: 35, topico: "Pacote Office", tipo: "unica", enunciado: "No Microsoft Word, qual atalho aplica negrito ao texto selecionado?", alternativas: { A: "Ctrl + I", B: "Ctrl + N", C: "Ctrl + B", D: "Ctrl + U", E: "Ctrl + S" }, correta: ["B"], explicacao: "No Word em português, Ctrl+N aplica negrito (na versão em inglês é Ctrl+B). Ctrl+I aplica itálico e Ctrl+S salva o documento." },
    { id: 36, topico: "Pacote Office", tipo: "multipla", enunciado: "Assinale as funções válidas do Microsoft Excel:", alternativas: { A: "=SOMA()", B: "=PROCV()", C: "=SE()", D: "=DELETAR()", E: "=CONT.SE()" }, correta: ["A", "B", "C", "E"], explicacao: "SOMA, PROCV, SE e CONT.SE são funções válidas do Excel. DELETAR não é uma função do Excel." },
    { id: 37, topico: "Pacote Office", tipo: "unica", enunciado: "No PowerPoint, o que é um slide mestre?", alternativas: { A: "O primeiro slide de uma apresentação", B: "Um modelo que define o layout e formatação padrão para todos os slides", C: "Um slide que não pode ser editado", D: "O slide de encerramento da apresentação", E: "Um recurso exclusivo da versão online" }, correta: ["B"], explicacao: "O Slide Mestre define o layout, fontes, cores e posicionamento padrão para todos os slides da apresentação." },
    { id: 38, topico: "Pacote Office", tipo: "unica", enunciado: "No Excel, o que acontece ao pressionar F2 em uma célula?", alternativas: { A: "Exclui o conteúdo da célula", B: "Entra no modo de edição da célula", C: "Formata a célula como moeda", D: "Insere uma nova coluna", E: "Abre a ajuda do Excel" }, correta: ["B"], explicacao: "A tecla F2 no Excel coloca a célula ativa em modo de edição, permitindo alterar seu conteúdo diretamente." },
    { id: 39, topico: "Pacote Office", tipo: "multipla", enunciado: "Marque todas as extensões de arquivo válidas do Microsoft Office:", alternativas: { A: ".docx", B: ".xlsx", C: ".pptx", D: ".html", E: ".accdb" }, correta: ["A", "B", "C", "E"], explicacao: ".docx (Word), .xlsx (Excel), .pptx (PowerPoint) e .accdb (Access) são extensões do Office. HTML é formato web." },
    { id: 40, topico: "Pacote Office", tipo: "unica", enunciado: "No Microsoft Outlook, qual pasta armazena e-mails enviados pelo usuário?", alternativas: { A: "Caixa de Entrada", B: "Rascunhos", C: "Itens Enviados", D: "Lixeira", E: "Spam" }, correta: ["C"], explicacao: "A pasta 'Itens Enviados' armazena uma cópia de todos os e-mails enviados pelo usuário no Outlook." },
    { id: 41, topico: "Pacote Office", tipo: "unica", enunciado: "No Excel, qual é a fórmula para calcular a média dos valores nas células A1 até A10?", alternativas: { A: "=SOMA(A1:A10)/10", B: "=MÉDIA(A1:A10)", C: "=MED(A1:A10)", D: "=AVG(A1:A10)", E: "=MEDIA(A1:A10)" }, correta: ["B"], explicacao: "=MÉDIA(A1:A10) calcula a média aritmética dos valores no intervalo. Embora =SOMA(A1:A10)/10 funcione, MÉDIA é a função dedicada." },
    { id: 42, topico: "Pacote Office", tipo: "unica", enunciado: "No Word, qual recurso permite criar sumários automáticos baseados nos estilos de título?", alternativas: { A: "Índice Remissivo", B: "Tabela de Conteúdo (Sumário Automático)", C: "Notas de Rodapé", D: "Cabeçalho e Rodapé", E: "Marca d'água" }, correta: ["B"], explicacao: "A Tabela de Conteúdo gera um sumário automático baseado nos estilos de título (Título 1, Título 2, etc.) aplicados no documento." },
    { id: 43, topico: "Pacote Office", tipo: "multipla", enunciado: "Assinale as funcionalidades disponíveis no Microsoft Word:", alternativas: { A: "Mala direta para envio de correspondências personalizadas", B: "Criação de macros com VBA", C: "Controle de alterações e revisões colaborativas", D: "Compilação de código-fonte", E: "Inserção de gráficos e tabelas" }, correta: ["A", "B", "C", "E"], explicacao: "Word oferece mala direta, macros VBA, controle de alterações e inserção de gráficos/tabelas. Compilação de código não é funcionalidade do Word." },
    { id: 44, topico: "Pacote Office", tipo: "unica", enunciado: "No Excel, a referência absoluta $A$1 significa que:", alternativas: { A: "A célula será excluída ao copiar a fórmula", B: "A referência não mudará ao copiar a fórmula para outras células", C: "A célula está protegida contra edição", D: "O valor será convertido para moeda", E: "A fórmula será recalculada automaticamente" }, correta: ["B"], explicacao: "O símbolo $ torna a referência absoluta, impedindo que ela se ajuste ao copiar a fórmula para outras posições." },
    { id: 45, topico: "Pacote Office", tipo: "unica", enunciado: "No PowerPoint, qual atalho inicia a apresentação desde o primeiro slide?", alternativas: { A: "F5", B: "F7", C: "Ctrl + F5", D: "Shift + F5", E: "Alt + F5" }, correta: ["A"], explicacao: "F5 inicia a apresentação desde o primeiro slide. Shift+F5 inicia a partir do slide atual." },
    // === Ferramentas Corporativas (7 questões: 46-52) ===
    { id: 46, topico: "Ferramentas Corporativas", tipo: "multipla", enunciado: "Assinale as funcionalidades disponíveis no Microsoft Teams:", alternativas: { A: "Videoconferência com múltiplos participantes", B: "Edição colaborativa de documentos Office", C: "Gerenciamento de projetos com diagrama de Gantt nativo", D: "Troca de mensagens instantâneas entre usuários", E: "Compartilhamento de tela durante reuniões" }, correta: ["A", "B", "D", "E"], explicacao: "O Teams oferece videoconferência, chat, integração com Office e compartilhamento de tela. O diagrama de Gantt nativo é funcionalidade do MS Project." },
    { id: 47, topico: "Ferramentas Corporativas", tipo: "unica", enunciado: "O que é o Active Directory no contexto de redes corporativas?", alternativas: { A: "Um software de edição de documentos", B: "Um serviço de diretório da Microsoft para gerenciamento centralizado de usuários, grupos e políticas", C: "Um antivírus corporativo", D: "Um navegador de internet seguro", E: "Um serviço de armazenamento em nuvem" }, correta: ["B"], explicacao: "O Active Directory (AD) é o serviço de diretório da Microsoft que permite gerenciar de forma centralizada usuários, computadores, grupos e políticas de segurança na rede." },
    { id: 48, topico: "Ferramentas Corporativas", tipo: "unica", enunciado: "No Google Workspace, qual ferramenta é equivalente ao Microsoft Excel?", alternativas: { A: "Google Docs", B: "Google Sheets", C: "Google Slides", D: "Google Forms", E: "Google Sites" }, correta: ["B"], explicacao: "Google Sheets é a ferramenta de planilhas do Google Workspace, equivalente ao Microsoft Excel." },
    { id: 49, topico: "Ferramentas Corporativas", tipo: "multipla", enunciado: "Marque todas as afirmativas corretas sobre Políticas de Grupo (GPO) no Active Directory:", alternativas: { A: "Permitem definir configurações de segurança para múltiplos computadores simultaneamente", B: "Só podem ser aplicadas a usuários, não a computadores", C: "Podem restringir a instalação de softwares em estações de trabalho", D: "São configuradas pelo console GPMC (Group Policy Management Console)", E: "Funcionam apenas em redes sem domínio" }, correta: ["A", "C", "D"], explicacao: "GPOs permitem configurar políticas para usuários E computadores, restringir softwares e são gerenciadas pelo GPMC. Funcionam em redes com domínio Active Directory." },
    { id: 50, topico: "Ferramentas Corporativas", tipo: "unica", enunciado: "O que é o OneDrive for Business?", alternativas: { A: "Um gerenciador de tarefas corporativo", B: "Uma rede social corporativa", C: "Um serviço de armazenamento e sincronização de arquivos em nuvem da Microsoft para empresas", D: "Um sistema de e-mail corporativo", E: "Um software de videoconferência" }, correta: ["C"], explicacao: "O OneDrive for Business é o serviço de armazenamento em nuvem da Microsoft integrado ao Microsoft 365, permitindo sincronizar e compartilhar arquivos na empresa." },
    { id: 51, topico: "Ferramentas Corporativas", tipo: "unica", enunciado: "O que é o SharePoint?", alternativas: { A: "Um editor de planilhas online", B: "Uma plataforma de colaboração e gerenciamento de conteúdo/documentos da Microsoft", C: "Um software de design gráfico", D: "Um sistema de backup em nuvem", E: "Um gerenciador de senhas corporativo" }, correta: ["B"], explicacao: "O SharePoint é uma plataforma da Microsoft para colaboração em equipe, gerenciamento de documentos, intranets e sites internos." },
    { id: 52, topico: "Ferramentas Corporativas", tipo: "multipla", enunciado: "Assinale as ferramentas do Google Workspace:", alternativas: { A: "Google Drive", B: "Google Meet", C: "Google Docs", D: "Windows Defender", E: "Google Calendar" }, correta: ["A", "B", "C", "E"], explicacao: "Google Drive, Meet, Docs e Calendar fazem parte do Google Workspace. Windows Defender é uma ferramenta da Microsoft." },
    // === Serviços de Internet (8 questões: 53-60) ===
    { id: 53, topico: "Serviços de Internet", tipo: "unica", enunciado: "Qual protocolo é utilizado para o envio de e-mails entre servidores de correio eletrônico?", alternativas: { A: "IMAP", B: "POP3", C: "SMTP", D: "FTP", E: "HTTP" }, correta: ["C"], explicacao: "O SMTP (Simple Mail Transfer Protocol) é usado para envio de e-mails. POP3 e IMAP são usados para recebimento/leitura." },
    { id: 54, topico: "Serviços de Internet", tipo: "unica", enunciado: "O que significa a sigla HTTP?", alternativas: { A: "HyperText Transfer Protocol", B: "High Technology Transfer Program", C: "HyperText Transmission Protocol", D: "Host Terminal Transfer Protocol", E: "Hybrid Text Transfer Protocol" }, correta: ["A"], explicacao: "HTTP significa HyperText Transfer Protocol, o protocolo base para comunicação na World Wide Web." },
    { id: 55, topico: "Serviços de Internet", tipo: "multipla", enunciado: "Marque todas as alternativas que representam serviços de armazenamento em nuvem:", alternativas: { A: "Google Drive", B: "Dropbox", C: "Microsoft Teams", D: "OneDrive", E: "iCloud" }, correta: ["A", "B", "D", "E"], explicacao: "Google Drive, Dropbox, OneDrive e iCloud são serviços de armazenamento em nuvem. Microsoft Teams é uma ferramenta de comunicação." },
    { id: 56, topico: "Serviços de Internet", tipo: "unica", enunciado: "O que é FTP?", alternativas: { A: "Um protocolo de transferência de arquivos entre computadores em rede", B: "Um tipo de firewall", C: "Um formato de arquivo de texto", D: "Um sistema operacional para servidores", E: "Um padrão de criptografia" }, correta: ["A"], explicacao: "FTP (File Transfer Protocol) é um protocolo usado para transferir arquivos entre um cliente e um servidor em uma rede TCP/IP." },
    { id: 57, topico: "Serviços de Internet", tipo: "unica", enunciado: "Qual é a porta padrão utilizada pelo protocolo HTTPS?", alternativas: { A: "21", B: "25", C: "80", D: "443", E: "8080" }, correta: ["D"], explicacao: "HTTPS usa a porta 443 por padrão. A porta 80 é do HTTP, 21 é FTP, 25 é SMTP e 8080 é uma porta alternativa." },
    { id: 58, topico: "Serviços de Internet", tipo: "multipla", enunciado: "Assinale as afirmativas corretas sobre computação em nuvem:", alternativas: { A: "Permite acessar recursos computacionais pela internet sem infraestrutura local", B: "IaaS, PaaS e SaaS são modelos de serviço em nuvem", C: "A nuvem elimina completamente a necessidade de profissionais de TI", D: "AWS, Azure e Google Cloud são provedores de nuvem pública", E: "A computação em nuvem sempre garante 100% de disponibilidade" }, correta: ["A", "B", "D"], explicacao: "A nuvem oferece recursos pela internet em modelos IaaS/PaaS/SaaS, com provedores como AWS, Azure e GCP. Porém, ainda requer profissionais de TI e nenhum serviço garante 100% de uptime." },
    { id: 59, topico: "Serviços de Internet", tipo: "unica", enunciado: "Qual a diferença entre POP3 e IMAP para e-mails?", alternativas: { A: "POP3 é mais seguro que IMAP", B: "IMAP sincroniza e-mails no servidor; POP3 baixa e pode remover do servidor", C: "POP3 é usado para enviar, IMAP para receber", D: "Não há diferença, são o mesmo protocolo", E: "IMAP só funciona com o Outlook" }, correta: ["B"], explicacao: "IMAP mantém os e-mails sincronizados no servidor, permitindo acesso de múltiplos dispositivos. POP3 baixa os e-mails para o dispositivo local e pode removê-los do servidor." },
    { id: 60, topico: "Serviços de Internet", tipo: "unica", enunciado: "O que é um certificado SSL/TLS em um site?", alternativas: { A: "Um documento fiscal digital", B: "Um certificado que garante a criptografia da comunicação entre navegador e servidor", C: "Uma licença de uso de software", D: "Um registro de domínio", E: "Uma permissão de acesso ao banco de dados" }, correta: ["B"], explicacao: "O certificado SSL/TLS criptografa a comunicação entre o navegador e o servidor web, garantindo confidencialidade e autenticidade (indicado pelo cadeado e HTTPS)." },
    // === Redes de Computadores (10 questões: 61-70) ===
    { id: 61, topico: "Redes de Computadores", tipo: "multipla", enunciado: "Marque todas as alternativas que representam endereços IP de redes privadas (RFC 1918):", alternativas: { A: "10.0.0.1", B: "172.16.5.10", C: "192.168.1.100", D: "200.150.10.5", E: "8.8.8.8" }, correta: ["A", "B", "C"], explicacao: "Os blocos privados são: 10.0.0.0/8, 172.16.0.0/12 e 192.168.0.0/16." },
    { id: 62, topico: "Redes de Computadores", tipo: "unica", enunciado: "Qual é a função do protocolo DHCP em uma rede?", alternativas: { A: "Criptografar dados na rede", B: "Atribuir endereços IP automaticamente aos dispositivos", C: "Traduzir nomes de domínio em endereços IP", D: "Gerenciar o tráfego de e-mail", E: "Controlar o acesso à rede Wi-Fi" }, correta: ["B"], explicacao: "O DHCP (Dynamic Host Configuration Protocol) atribui automaticamente endereços IP, máscara, gateway e DNS aos dispositivos na rede." },
    { id: 63, topico: "Redes de Computadores", tipo: "unica", enunciado: "O que é DNS e qual sua principal função?", alternativas: { A: "Um tipo de firewall que protege servidores", B: "Um sistema que traduz nomes de domínio (ex: google.com) em endereços IP", C: "Um protocolo de transferência de arquivos", D: "Um dispositivo de rede que conecta redes diferentes", E: "Um software para monitorar tráfego de rede" }, correta: ["B"], explicacao: "O DNS (Domain Name System) traduz nomes de domínio legíveis por humanos em endereços IP numéricos usados pelos computadores." },
    { id: 64, topico: "Redes de Computadores", tipo: "multipla", enunciado: "Assinale as topologias válidas de redes de computadores:", alternativas: { A: "Estrela", B: "Barramento", C: "Anel", D: "Diagonal", E: "Malha (Mesh)" }, correta: ["A", "B", "C", "E"], explicacao: "Estrela, Barramento, Anel e Malha são topologias de rede. 'Diagonal' não é uma topologia de rede." },
    { id: 65, topico: "Redes de Computadores", tipo: "unica", enunciado: "O que é uma máscara de sub-rede?", alternativas: { A: "Um filtro de conteúdo para sites", B: "Um valor numérico que define qual parte do IP é rede e qual é host", C: "O nome do roteador na rede", D: "Uma técnica de criptografia de dados", E: "Um tipo de cabo de rede" }, correta: ["B"], explicacao: "A máscara de sub-rede (ex: 255.255.255.0) define quais bits do endereço IP correspondem à rede e quais correspondem ao host." },
    { id: 66, topico: "Redes de Computadores", tipo: "unica", enunciado: "Qual equipamento de rede opera na camada 3 (rede) do modelo OSI?", alternativas: { A: "Hub", B: "Switch", C: "Roteador", D: "Repetidor", E: "Modem" }, correta: ["C"], explicacao: "O roteador opera na camada 3 (Rede) do modelo OSI, sendo responsável pelo roteamento de pacotes entre redes diferentes." },
    { id: 67, topico: "Redes de Computadores", tipo: "multipla", enunciado: "Marque todas as camadas que pertencem ao modelo OSI:", alternativas: { A: "Física", B: "Enlace de Dados", C: "Compilação", D: "Transporte", E: "Aplicação" }, correta: ["A", "B", "D", "E"], explicacao: "As 7 camadas do modelo OSI são: Física, Enlace de Dados, Rede, Transporte, Sessão, Apresentação e Aplicação. 'Compilação' não é uma camada." },
    { id: 68, topico: "Redes de Computadores", tipo: "unica", enunciado: "Qual é a diferença fundamental entre TCP e UDP?", alternativas: { A: "TCP é mais rápido que UDP", B: "UDP oferece entrega confiável e ordenada de dados; TCP não", C: "TCP oferece entrega confiável com controle de erros; UDP é mais rápido mas sem garantia de entrega", D: "Não existe diferença entre os dois", E: "TCP só funciona em redes cabeadas" }, correta: ["C"], explicacao: "TCP é orientado a conexão com entrega confiável e controle de erros. UDP é sem conexão, mais rápido, mas sem garantia de entrega — usado em streaming e jogos." },
    { id: 69, topico: "Redes de Computadores", tipo: "unica", enunciado: "O que é um endereço MAC?", alternativas: { A: "O endereço IP do computador na rede", B: "Um endereço físico único atribuído à placa de rede pelo fabricante", C: "O nome do computador na rede", D: "O endereço do servidor DNS", E: "Um endereço de e-mail empresarial" }, correta: ["B"], explicacao: "O endereço MAC (Media Access Control) é um identificador físico único de 48 bits atribuído pelo fabricante a cada interface de rede." },
    { id: 70, topico: "Redes de Computadores", tipo: "unica", enunciado: "O que é um gateway padrão em uma rede?", alternativas: { A: "O primeiro computador conectado à rede", B: "O servidor de e-mail da rede", C: "O endereço do roteador que conecta a rede local à internet ou a outras redes", D: "A senha de acesso à rede Wi-Fi", E: "O nome do domínio local" }, correta: ["C"], explicacao: "O gateway padrão é o endereço IP do roteador que serve como ponto de saída da rede local para outras redes (como a internet)." },
    // === Atalhos do Windows, Office e Navegadores (8 questões: 71-78) ===
    { id: 71, topico: "Atalhos do Windows", tipo: "unica", enunciado: "Qual atalho de teclado no Windows abre o Gerenciador de Tarefas diretamente (sem tela intermediária)?", alternativas: { A: "Ctrl + Alt + Del", B: "Ctrl + Shift + Esc", C: "Win + R", D: "Alt + F4", E: "Ctrl + Alt + Tab" }, correta: ["B"], explicacao: "Ctrl+Shift+Esc abre o Gerenciador de Tarefas diretamente. Ctrl+Alt+Del abre a tela de opções do sistema." },
    { id: 72, topico: "Atalhos do Windows", tipo: "multipla", enunciado: "Marque todos os atalhos válidos do Windows:", alternativas: { A: "Win + L (bloquear tela)", B: "Win + D (mostrar área de trabalho)", C: "Win + P (opções de projeção)", D: "Win + Z (abrir calculadora)", E: "Win + E (abrir Explorador de Arquivos)" }, correta: ["A", "B", "C", "E"], explicacao: "Win+L bloqueia, Win+D mostra a área de trabalho, Win+P projeta e Win+E abre o Explorador. Win+Z não abre a calculadora (em Win11 mostra snap layouts)." },
    { id: 73, topico: "Atalhos do Windows", tipo: "unica", enunciado: "Qual atalho de teclado seleciona todo o conteúdo (texto, arquivos, etc.) no Windows?", alternativas: { A: "Ctrl + C", B: "Ctrl + V", C: "Ctrl + A", D: "Ctrl + Z", E: "Ctrl + X" }, correta: ["C"], explicacao: "Ctrl+A seleciona tudo. Ctrl+C copia, Ctrl+V cola, Ctrl+Z desfaz e Ctrl+X recorta." },
    { id: 74, topico: "Atalhos do Windows", tipo: "unica", enunciado: "No navegador, qual atalho abre uma nova aba?", alternativas: { A: "Ctrl + N", B: "Ctrl + T", C: "Ctrl + W", D: "Alt + Tab", E: "F5" }, correta: ["B"], explicacao: "Ctrl+T abre uma nova aba. Ctrl+N abre uma nova janela, Ctrl+W fecha a aba atual e F5 atualiza a página." },
    { id: 75, topico: "Atalhos do Windows", tipo: "multipla", enunciado: "Marque todos os atalhos corretos para os navegadores Chrome, Edge ou Firefox:", alternativas: { A: "Ctrl + H (histórico)", B: "Ctrl + D (adicionar aos favoritos)", C: "Ctrl + Shift + T (reabrir aba fechada)", D: "Ctrl + K (abrir terminal)", E: "F12 (ferramentas de desenvolvedor)" }, correta: ["A", "B", "C", "E"], explicacao: "Ctrl+H abre histórico, Ctrl+D favorita, Ctrl+Shift+T reabre aba e F12 abre DevTools. Ctrl+K não abre terminal nos navegadores." },
    { id: 76, topico: "Atalhos do Windows", tipo: "unica", enunciado: "Qual atalho no Windows captura apenas a janela ativa como screenshot?", alternativas: { A: "Print Screen", B: "Alt + Print Screen", C: "Win + Print Screen", D: "Ctrl + Print Screen", E: "Shift + Print Screen" }, correta: ["B"], explicacao: "Alt+Print Screen captura apenas a janela ativa. Print Screen captura a tela inteira. Win+Print Screen salva automaticamente em um arquivo." },
    { id: 77, topico: "Atalhos do Windows", tipo: "unica", enunciado: "No Excel, qual atalho insere a data atual na célula ativa?", alternativas: { A: "Ctrl + ;", B: "Ctrl + D", C: "Ctrl + T", D: "Ctrl + Shift + ;", E: "Ctrl + H" }, correta: ["A"], explicacao: "Ctrl+; insere a data atual. Ctrl+Shift+; insere a hora atual. Ctrl+D copia o conteúdo da célula acima." },
    { id: 78, topico: "Atalhos do Windows", tipo: "unica", enunciado: "Qual atalho do Windows abre as Configurações (Settings)?", alternativas: { A: "Win + S", B: "Win + I", C: "Win + U", D: "Win + G", E: "Win + A" }, correta: ["B"], explicacao: "Win+I abre as Configurações do Windows. Win+S abre a pesquisa, Win+U as configurações de acessibilidade e Win+A o Centro de Ações." },
    // === Segurança da Informação (12 questões: 79-90) ===
    { id: 79, topico: "Segurança da Informação", tipo: "multipla", enunciado: "Assinale as práticas corretas de segurança da informação para um Técnico de Suporte:", alternativas: { A: "Nunca compartilhar senhas de acesso administrativo por e-mail", B: "Utilizar a senha do usuário para agilizar o atendimento", C: "Manter o sistema operacional atualizado com patches de segurança", D: "Desabilitar o firewall para facilitar a instalação de softwares", E: "Realizar backups periódicos dos dados críticos" }, correta: ["A", "C", "E"], explicacao: "Senhas não devem ser compartilhadas. O firewall nunca deve ser desabilitado sem justificativa técnica. Atualizações e backups são práticas essenciais." },
    { id: 80, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é phishing?", alternativas: { A: "Um tipo de malware que criptografa arquivos", B: "Uma técnica de engenharia social que usa mensagens fraudulentas para obter dados confidenciais", C: "Um software de proteção contra vírus", D: "Um protocolo de rede seguro", E: "Uma técnica de compressão de dados" }, correta: ["B"], explicacao: "Phishing é uma técnica de engenharia social em que criminosos enviam mensagens fraudulentas (e-mails, SMS) imitando empresas legítimas para roubar dados pessoais." },
    { id: 81, topico: "Segurança da Informação", tipo: "multipla", enunciado: "Marque todas as características de uma senha forte:", alternativas: { A: "Ter pelo menos 8 caracteres", B: "Combinar letras maiúsculas, minúsculas, números e símbolos", C: "Usar o nome do usuário como base", D: "Ser diferente para cada serviço/sistema", E: "Ser anotada em um post-it no monitor" }, correta: ["A", "B", "D"], explicacao: "Senhas fortes devem ter 8+ caracteres, combinar tipos diversos e ser únicas por serviço. Nunca usar dados pessoais como base ou anotar em locais visíveis." },
    { id: 82, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é ransomware?", alternativas: { A: "Um programa de backup em nuvem", B: "Um malware que criptografa os dados da vítima e exige pagamento de resgate", C: "Um software de monitoramento de rede", D: "Uma atualização crítica do sistema operacional", E: "Um tipo de firewall" }, correta: ["B"], explicacao: "Ransomware é um tipo de malware que criptografa os arquivos da vítima e exige pagamento (geralmente em criptomoeda) para restaurar o acesso." },
    { id: 83, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é autenticação de dois fatores (2FA)?", alternativas: { A: "Login com dois nomes de usuário diferentes", B: "Uma camada adicional de segurança que exige dois tipos de verificação para acessar uma conta", C: "Uma técnica de criptografia de disco", D: "O uso de dois antivírus simultaneamente", E: "Login em dois dispositivos ao mesmo tempo" }, correta: ["B"], explicacao: "2FA exige dois fatores de autenticação distintos (ex: senha + código SMS/app), adicionando uma camada extra de segurança além da senha." },
    { id: 84, topico: "Segurança da Informação", tipo: "multipla", enunciado: "Assinale as afirmativas corretas sobre backup de dados:", alternativas: { A: "Backup incremental copia apenas os dados alterados desde o último backup", B: "É recomendável manter cópias de backup em local diferente do original", C: "Backup completo deve ser feito a cada hora, sem exceção", D: "A estratégia 3-2-1 recomenda 3 cópias em 2 mídias diferentes com 1 fora do local", E: "Backups nunca precisam ser testados, basta realizá-los" }, correta: ["A", "B", "D"], explicacao: "Backup incremental copia apenas alterações. A estratégia 3-2-1 é recomendada. Backups devem ser armazenados em locais distintos e testados regularmente." },
    { id: 85, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é um firewall?", alternativas: { A: "Um tipo de vírus de computador", B: "Um dispositivo ou software que monitora e controla o tráfego de rede com base em regras de segurança", C: "Um programa de edição de imagens", D: "Um tipo de memória RAM", E: "Um protocolo de e-mail" }, correta: ["B"], explicacao: "Firewall é um sistema de segurança que monitora e filtra o tráfego de rede, permitindo ou bloqueando conexões com base em regras predefinidas." },
    { id: 86, topico: "Segurança da Informação", tipo: "multipla", enunciado: "Marque todos os tipos de malware:", alternativas: { A: "Vírus", B: "Trojan (Cavalo de Tróia)", C: "Worm", D: "Spreadsheet", E: "Spyware" }, correta: ["A", "B", "C", "E"], explicacao: "Vírus, Trojan, Worm e Spyware são tipos de malware. Spreadsheet (planilha) é um tipo de arquivo/software." },
    { id: 87, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é criptografia de dados?", alternativas: { A: "O processo de compactar arquivos para economizar espaço", B: "O processo de converter dados legíveis em formato codificado, legível apenas com a chave de descriptografia", C: "A exclusão permanente de dados do disco rígido", D: "A duplicação de arquivos para backup", E: "A organização de dados em tabelas" }, correta: ["B"], explicacao: "Criptografia converte dados legíveis (texto plano) em formato codificado (texto cifrado), protegendo sua confidencialidade contra acessos não autorizados." },
    { id: 88, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é um ataque de força bruta (brute force)?", alternativas: { A: "Um ataque físico ao servidor", B: "Uma tentativa de adivinhar senha testando todas as combinações possíveis", C: "Um tipo de vírus que destrói o hardware", D: "A interceptação de e-mails em trânsito", E: "Uma técnica de engenharia social por telefone" }, correta: ["B"], explicacao: "Ataque de força bruta tenta descobrir senhas testando sistematicamente todas as combinações possíveis até encontrar a correta." },
    { id: 89, topico: "Segurança da Informação", tipo: "multipla", enunciado: "Assinale as medidas eficazes contra ataques de phishing:", alternativas: { A: "Verificar o remetente e o endereço de e-mail antes de clicar em links", B: "Responder o e-mail pedindo confirmação ao suposto remetente", C: "Não clicar em links suspeitos ou baixar anexos de fontes desconhecidas", D: "Utilizar filtros antispam no servidor de e-mail", E: "Compartilhar o e-mail suspeito com colegas para verificação" }, correta: ["A", "C", "D"], explicacao: "Verificar remetentes, evitar links/anexos suspeitos e usar filtros antispam são medidas eficazes. Responder ao criminoso ou encaminhar e-mails suspeitos não é recomendado." },
    { id: 90, topico: "Segurança da Informação", tipo: "unica", enunciado: "O que é o princípio do menor privilégio?", alternativas: { A: "Cada usuário deve ter acesso total ao sistema para facilitar o trabalho", B: "Cada usuário deve receber apenas as permissões mínimas necessárias para realizar suas tarefas", C: "Apenas o administrador pode usar o computador", D: "Todos os funcionários devem compartilhar a mesma conta de administrador", E: "O sistema deve ser configurado sem senha para agilizar o acesso" }, correta: ["B"], explicacao: "O princípio do menor privilégio determina que cada usuário deve ter apenas as permissões estritamente necessárias para suas funções, reduzindo riscos de segurança." },
    // === Suporte Técnico (5 questões: 91-95) ===
    { id: 91, topico: "Suporte Técnico", tipo: "unica", enunciado: "O que é um SLA (Service Level Agreement)?", alternativas: { A: "Um tipo de licença de software", B: "Um acordo que define os níveis de serviço esperados entre provedor e cliente, incluindo tempos de resposta", C: "Um protocolo de rede para transferência de dados", D: "Um formato de arquivo de backup", E: "Uma ferramenta de diagnóstico de hardware" }, correta: ["B"], explicacao: "SLA é um acordo formal que define métricas de qualidade do serviço, como tempo de resposta, tempo de resolução e disponibilidade." },
    { id: 92, topico: "Suporte Técnico", tipo: "multipla", enunciado: "Marque todas as informações essenciais ao registrar um chamado de suporte técnico:", alternativas: { A: "Nome e setor do solicitante", B: "Descrição detalhada do problema", C: "Cor preferida do solicitante", D: "Data e hora da abertura do chamado", E: "Categoria e prioridade do problema" }, correta: ["A", "B", "D", "E"], explicacao: "Nome, setor, descrição do problema, data/hora e classificação são dados essenciais de um chamado. Cor preferida não é informação relevante." },
    { id: 93, topico: "Suporte Técnico", tipo: "unica", enunciado: "Em uma estrutura de suporte em níveis, qual é a função do Nível 1 (N1)?", alternativas: { A: "Desenvolver novos softwares para a empresa", B: "Realizar o primeiro atendimento, triagem e resolver problemas simples", C: "Substituir equipamentos de rede", D: "Gerenciar o data center da empresa", E: "Auditar a segurança dos sistemas" }, correta: ["B"], explicacao: "O Nível 1 é o primeiro ponto de contato, responsável por atendimento inicial, triagem, registro de chamados e resolução de problemas simples e conhecidos." },
    { id: 94, topico: "Suporte Técnico", tipo: "unica", enunciado: "O que é uma base de conhecimento (Knowledge Base) no contexto de suporte técnico?", alternativas: { A: "Um banco de dados de senhas dos usuários", B: "Um repositório organizado de soluções, procedimentos e informações técnicas para consulta", C: "Um software de antivírus", D: "Um tipo de backup em nuvem", E: "O organograma da empresa de TI" }, correta: ["B"], explicacao: "A base de conhecimento é um repositório estruturado com artigos, procedimentos e soluções documentadas que auxiliam técnicos a resolver problemas de forma eficiente." },
    { id: 95, topico: "Suporte Técnico", tipo: "multipla", enunciado: "Assinale as ferramentas comumente usadas para acesso remoto em suporte técnico:", alternativas: { A: "TeamViewer", B: "AnyDesk", C: "Microsoft Paint", D: "Conexão de Área de Trabalho Remota (RDP)", E: "Windows Media Player" }, correta: ["A", "B", "D"], explicacao: "TeamViewer, AnyDesk e RDP são ferramentas de acesso remoto. Microsoft Paint é um editor de imagens e Windows Media Player é um player de mídia." },
    // === Atendimento ao Usuário (5 questões: 96-100) ===
    { id: 96, topico: "Atendimento ao Usuário", tipo: "unica", enunciado: "Ao receber um chamado de suporte, qual é a primeira ação mais adequada para o técnico realizar?", alternativas: { A: "Reiniciar o computador do usuário imediatamente", B: "Registrar o chamado e coletar informações sobre o problema relatado", C: "Informar ao usuário que o problema será resolvido em 48 horas", D: "Escalar o chamado para o nível 2 sem análise prévia", E: "Instalar um novo sistema operacional como medida preventiva" }, correta: ["B"], explicacao: "O correto é registrar o chamado e coletar informações (sintomas, quando começou, o que foi feito) antes de qualquer intervenção." },
    { id: 97, topico: "Atendimento ao Usuário", tipo: "multipla", enunciado: "Assinale as atitudes que demonstram postura profissional no atendimento ao usuário de TI:", alternativas: { A: "Ouvir atentamente a descrição do problema pelo usuário", B: "Usar linguagem técnica complexa para impressionar o usuário", C: "Manter o usuário informado sobre o andamento do chamado", D: "Resolver o problema sem explicar o que foi feito", E: "Ser educado e paciente mesmo diante de usuários insatisfeitos" }, correta: ["A", "C", "E"], explicacao: "Escutar, comunicar o progresso e manter postura educada são comportamentos profissionais. Linguagem excessivamente técnica e omitir explicações comprometem o atendimento." },
    { id: 98, topico: "Atendimento ao Usuário", tipo: "unica", enunciado: "O que significa escalonamento (escalation) de um chamado de suporte?", alternativas: { A: "Fechar o chamado sem resolução", B: "Transferir o chamado para um nível de suporte superior com mais expertise", C: "Ignorar o chamado até o usuário desistir", D: "Pedir ao usuário para resolver o problema sozinho", E: "Registrar o chamado como duplicata" }, correta: ["B"], explicacao: "Escalonamento é a transferência de um chamado para um nível de suporte superior quando o nível atual não consegue resolvê-lo." },
    { id: 99, topico: "Atendimento ao Usuário", tipo: "unica", enunciado: "Por que é importante documentar a solução aplicada em cada chamado de suporte?", alternativas: { A: "Para aumentar o número de chamados resolvidos nas estatísticas", B: "Para criar um histórico que facilita a resolução de problemas futuros semelhantes", C: "Porque é obrigatório por lei em todos os países", D: "Para justificar o salário do técnico", E: "Não é importante, apenas opcional" }, correta: ["B"], explicacao: "Documentar soluções cria uma base de conhecimento que acelera a resolução de problemas semelhantes e facilita a continuidade do suporte por outros técnicos." },
    { id: 100, topico: "Atendimento ao Usuário", tipo: "multipla", enunciado: "Marque todas as afirmativas corretas sobre boas práticas em suporte técnico presencial:", alternativas: { A: "Identificar-se ao chegar ao local e explicar o motivo da visita", B: "Mexer nos pertences pessoais do usuário sem autorização para acessar o equipamento", C: "Solicitar permissão antes de acessar arquivos ou configurações do computador do usuário", D: "Testar a solução aplicada antes de encerrar o atendimento", E: "Sair do local sem comunicar ao usuário o que foi feito" }, correta: ["A", "C", "D"], explicacao: "Identificar-se, pedir permissão e testar a solução são boas práticas. Nunca mexer em pertences pessoais sem autorização ou sair sem comunicar as ações realizadas." }
];
let nomeAtual = '';
let questoesDaTentativa = [];
let respostasCandidato = {};
let questaoAtualIdx = 0;

/* ===== NAVEGAÇÃO DE TELAS ===== */
function mostrarTela(n) {
    document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
    document.getElementById('tela' + n).classList.add('ativa');
    window.scrollTo(0, 0);
}

/* ===== TOAST ===== */
function mostrarToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('visivel');
    setTimeout(() => t.classList.remove('visivel'), 3000);
}

/* ===== LOCAL STORAGE ===== */
function getChave(nome) { return 'sesc_simulado_candidato_' + nome.toLowerCase().replace(/\s+/g, '_'); }

function getDados(nome) {
    try {
        const d = localStorage.getItem(getChave(nome));
        return d ? JSON.parse(d) : { nome: nome, tentativas: [], questoesUsadas: [] };
    } catch (e) { return { nome: nome, tentativas: [], questoesUsadas: [] }; }
}

function salvarDados(nome, dados) {
    try { localStorage.setItem(getChave(nome), JSON.stringify(dados)); } catch (e) { console.warn('localStorage indisponível'); }
}

/* ===== HISTÓRICO ===== */
function atualizarHistorico() {
    const nome = document.getElementById('inputNome').value.trim();
    const container = document.getElementById('historicoContainer');
    if (!nome) { container.innerHTML = ''; return; }
    const dados = getDados(nome);
    if (dados.tentativas.length === 0) { container.innerHTML = ''; return; }
    let html = '<h3>📊 Histórico de Tentativas</h3>';
    dados.tentativas.forEach(t => {
        const cls = t.percentual >= 80 ? 'aprovado' : 'reprovado';
        const dt = new Date(t.data).toLocaleDateString('pt-BR');
        html += `<div class="historico-item"><span>Tentativa ${t.numero} — ${dt}</span><span class="perc ${cls}">${t.percentual}% (${t.acertos}/25)</span></div>`;
    });
    container.innerHTML = html;
}

document.getElementById('inputNome').addEventListener('input', atualizarHistorico);

/* ===== SORTEIO ===== */
function sortearQuestoes(nome) {
    const dados = getDados(nome);
    let disponiveis = BANCO_QUESTOES.filter(q => !dados.questoesUsadas.includes(q.id));
    if (disponiveis.length < 25) {
        dados.questoesUsadas = [];
        salvarDados(nome, dados);
        disponiveis = [...BANCO_QUESTOES];
    }
    for (let i = disponiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [disponiveis[i], disponiveis[j]] = [disponiveis[j], disponiveis[i]];
    }
    return disponiveis.slice(0, 25);
}

/* ===== INICIAR SIMULADO ===== */
function iniciarSimulado() {
    const nome = document.getElementById('inputNome').value.trim();
    if (!nome) { mostrarToast('⚠️ Por favor, digite seu nome completo.'); return; }
    nomeAtual = nome;
    questoesDaTentativa = sortearQuestoes(nome);
    respostasCandidato = {};
    questaoAtualIdx = 0;
    renderizarQuestao();
    atualizarMapa();
    atualizarProgresso();
    mostrarTela(2);
}

/* ===== RENDERIZAR QUESTÃO ===== */
function renderizarQuestao() {
    const q = questoesDaTentativa[questaoAtualIdx];
    const resp = respostasCandidato[q.id] || [];
    const tipo = q.tipo === 'multipla' ? 'checkbox' : 'radio';
    const name = 'q' + q.id;
    let html = `<span class="topico-badge">${q.topico}</span>`;
    html += `<div class="enunciado"><strong>Questão ${questaoAtualIdx + 1}.</strong> ${q.enunciado}</div>`;
    html += '<ul class="alternativas">';
    for (const letra of ['A', 'B', 'C', 'D', 'E']) {
        const checked = resp.includes(letra) ? 'checked' : '';
        const sel = resp.includes(letra) ? ' selecionada' : '';
        html += `<li class="alternativa${sel}" onclick="selecionarAlt(event, this,'${letra}','${tipo}','${name}')">`;
        html += `<input type="${tipo}" name="${name}" id="${name}_${letra}" value="${letra}" ${checked} tabindex="-1">`;
        html += `<span class="alternativa-letra">${letra})</span>`;
        html += `<label for="${name}_${letra}">${q.alternativas[letra]}</label></li>`;
    }
    html += '</ul>';
    document.getElementById('questaoCard').innerHTML = html;
    document.getElementById('btnAnterior').disabled = questaoAtualIdx === 0;
    document.getElementById('btnProxima').style.display = questaoAtualIdx === 24 ? 'none' : '';
    document.getElementById('btnEntrega').style.display = questaoAtualIdx === 24 ? '' : 'none';
    atualizarMapa();
    atualizarProgresso();
}

/* ===== SELEÇÃO DE ALTERNATIVA ===== */
function selecionarAlt(event, el, letra, tipo, name) {
    event.preventDefault(); // Evita chamadas duplicadas por clique em label/input
    const q = questoesDaTentativa[questaoAtualIdx];
    if (!respostasCandidato[q.id]) respostasCandidato[q.id] = [];
    if (tipo === 'radio') {
        respostasCandidato[q.id] = [letra];
        document.querySelectorAll(`[name="${name}"]`).forEach(inp => inp.closest('.alternativa').classList.remove('selecionada'));
        document.querySelectorAll(`[name="${name}"]`).forEach(inp => { inp.checked = false; });
        el.querySelector('input').checked = true;
        el.classList.add('selecionada');
    } else {
        const inp = el.querySelector('input');
        inp.checked = !inp.checked;
        if (inp.checked) {
            if (!respostasCandidato[q.id].includes(letra)) {
                respostasCandidato[q.id].push(letra);
            }
            el.classList.add('selecionada');
        } else {
            respostasCandidato[q.id] = respostasCandidato[q.id].filter(l => l !== letra);
            el.classList.remove('selecionada');
        }
    }
    atualizarMapa();
    atualizarProgresso();
}

/* ===== NAVEGAÇÃO ===== */
function navegar(dir) {
    const q = questoesDaTentativa[questaoAtualIdx];
    const resp = respostasCandidato[q.id] || [];
    if (dir === 1 && resp.length === 0) mostrarToast('⚠️ Questão não respondida. Você pode voltar depois.');
    questaoAtualIdx += dir;
    if (questaoAtualIdx < 0) questaoAtualIdx = 0;
    if (questaoAtualIdx > 24) questaoAtualIdx = 24;
    renderizarQuestao();
}

function irParaQuestao(idx) { questaoAtualIdx = idx; renderizarQuestao(); }

/* ===== PROGRESSO E MAPA ===== */
function atualizarProgresso() {
    const respondidas = questoesDaTentativa.filter(q => (respostasCandidato[q.id] || []).length > 0).length;
    const perc = Math.round((respondidas / 25) * 100);
    document.getElementById('progLabel').textContent = `Questão ${questaoAtualIdx + 1} de 25`;
    document.getElementById('progPerc').textContent = perc + '% respondido';
    document.getElementById('progFill').style.width = perc + '%';
}

function atualizarMapa() {
    let html = '';
    questoesDaTentativa.forEach((q, i) => {
        const resp = respostasCandidato[q.id] || [];
        let cls = '';
        if (i === questaoAtualIdx) cls = 'atual';
        else if (resp.length > 0) cls = 'respondida';
        html += `<button class="mapa-btn ${cls}" onclick="irParaQuestao(${i})" title="Questão ${i + 1}">${i + 1}</button>`;
    });
    document.getElementById('mapaQuestoes').innerHTML = html;
}

function toggleMapa() {
    document.getElementById('mapaContainer').classList.toggle('oculto');
}

/* ===== ENTREGA ===== */
function tentarEntregar() {
    const respondidas = questoesDaTentativa.filter(q => (respostasCandidato[q.id] || []).length > 0).length;
    const emBranco = 25 - respondidas;
    document.getElementById('confirmRespondidas').textContent = respondidas;
    document.getElementById('confirmMsg').textContent = `de 25 questões respondidas`;
    const alerta = document.getElementById('confirmAlerta');
    if (emBranco > 0) {
        alerta.textContent = `⚠️ Atenção: ${emBranco} questão(ões) ainda não foi(ram) respondida(s)!`;
        alerta.style.display = 'block';
    } else { alerta.style.display = 'none'; }
    mostrarTela(3);
}

function voltarRevisar() { mostrarTela(2); }

/* ===== RESULTADO ===== */
function calcularResultado() {
    let acertos = 0;
    const erros = [];
    questoesDaTentativa.forEach(q => {
        const respUnica = Array.from(new Set(respostasCandidato[q.id] || []));
        const resp = respUnica.slice().sort().join(',');
        const corr = q.correta.slice().sort().join(',');
        if (resp === corr) acertos++;
        else erros.push({ questao: q, marcado: respUnica });
    });
    return { acertos, erros, total: 25, percentual: Math.round((acertos / 25) * 100) };
}

function confirmarEntrega() {
    const resultado = calcularResultado();
    const aprovado = resultado.percentual >= 80;
    // Salvar tentativa
    const dados = getDados(nomeAtual);
    const tentNum = dados.tentativas.length + 1;
    const ids = questoesDaTentativa.map(q => q.id);
    dados.tentativas.push({
        numero: tentNum, data: new Date().toISOString(), questoesIds: ids,
        respostas: { ...respostasCandidato }, acertos: resultado.acertos,
        erros: resultado.erros.length, percentual: resultado.percentual
    });
    dados.questoesUsadas = [...new Set([...dados.questoesUsadas, ...ids])];
    salvarDados(nomeAtual, dados);
    // Exibir
    document.getElementById('resultNome').textContent = '👤 ' + nomeAtual;
    document.getElementById('resultPerc').textContent = resultado.percentual + '%';
    document.getElementById('resultPerc').className = 'resultado-perc ' + (aprovado ? 'aprovado' : 'reprovado');
    document.getElementById('resultStatus').textContent = aprovado ? '✅ Aprovado' : '❌ Não atingiu a média';
    document.getElementById('resultStatus').className = 'resultado-status ' + (aprovado ? 'aprovado' : 'reprovado');
    document.getElementById('resultAcertos').textContent = resultado.acertos;
    document.getElementById('resultErros').textContent = resultado.erros.length;
    // Erros
    let html = '';
    if (resultado.erros.length > 0) {
        html = '<h3>📝 Questões que você errou</h3>';
        resultado.erros.forEach(e => {
            const q = e.questao;
            const marcadas = e.marcado.length > 0 ? e.marcado.join(', ') : 'Nenhuma';
            html += '<div class="erro-item">';
            html += `<span class="topico-badge">${q.topico}</span>`;
            html += `<div class="erro-enunciado">${q.enunciado}</div>`;
            html += `<div class="erro-resposta erro-marcada">❌ Sua resposta: ${marcadas}${e.marcado.length > 0 ? ' — ' + e.marcado.map(l => q.alternativas[l]).join('; ') : ''}</div>`;
            html += `<div class="erro-resposta erro-correta">✅ Correta: ${q.correta.join(', ')} — ${q.correta.map(l => q.alternativas[l]).join('; ')}</div>`;
            if (q.explicacao) html += `<div class="erro-explicacao">💡 ${q.explicacao}</div>`;
            html += '</div>';
        });
    }
    document.getElementById('errosSection').innerHTML = html;
    mostrarTela(4);
}

/* ===== REFAZER ===== */
function refazerSimulado() {
    questoesDaTentativa = sortearQuestoes(nomeAtual);
    respostasCandidato = {};
    questaoAtualIdx = 0;
    renderizarQuestao();
    atualizarMapa();
    atualizarProgresso();
    mostrarTela(2);
}

/* ===== PDF ===== */
function gerarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const dados = getDados(nomeAtual);
    const tentativa = dados.tentativas[dados.tentativas.length - 1];
    const resultado = calcularResultado();
    const pw = 170; // 210mm (A4 width) - 40mm margins
    let y = 20;
    function checkPage(need) { if (y + need > 275) { doc.addPage(); y = 20; } }
    // Cabeçalho
    doc.setFontSize(18); doc.setFont("helvetica", "bold");
    doc.text('SESC - Simulado Tecnico em Informatica', 20, y); y += 10;
    doc.setFontSize(11); doc.setFont("helvetica", "normal");
    doc.text(`Candidato: ${nomeAtual}`, 20, y); y += 6;
    doc.text(`Tentativa: ${tentativa.numero} | Data: ${new Date(tentativa.data).toLocaleDateString('pt-BR')}`, 20, y); y += 6;
    const statusTxt = resultado.percentual >= 80 ? 'APROVADO' : 'NÃO ATINGIU A MÉDIA';
    doc.text(`Resultado: ${resultado.acertos}/25 (${resultado.percentual}%) — ${statusTxt}`, 20, y); y += 12;
    doc.setDrawColor(200); doc.line(20, y, 190, y); y += 8;
    // Questões
    questoesDaTentativa.forEach((q, idx) => {
        const respUnica = Array.from(new Set(respostasCandidato[q.id] || []));
        const resp = respUnica.slice().sort().join(',');
        const corr = q.correta.slice().sort().join(',');
        const acertou = resp === corr;
        checkPage(60);
        doc.setFontSize(11); doc.setFont("helvetica", "bold");
        const icon = acertou ? '[OK]' : '[X]';
        const headerLines = doc.splitTextToSize(`${icon} Questão ${idx + 1} (${q.topico})`, pw);
        doc.text(headerLines, 20, y); y += headerLines.length * 5 + 2;
        doc.setFont("helvetica", "normal"); doc.setFontSize(10);
        const enumLines = doc.splitTextToSize(q.enunciado, pw);
        doc.text(enumLines, 20, y); y += enumLines.length * 4.5 + 4;
        for (const letra of ['A', 'B', 'C', 'D', 'E']) {
            checkPage(12);
            let prefix = `  ${letra}) `;
            const marcou = (respostasCandidato[q.id] || []).includes(letra);
            const eCorreta = q.correta.includes(letra);
            if (marcou) prefix += '[MARCADA] ';
            if (eCorreta) prefix += '[CORRETA] ';
            const altLines = doc.splitTextToSize(prefix + q.alternativas[letra], pw - 5);
            doc.text(altLines, 22, y); y += altLines.length * 4.5 + 1;
        }
        y += 6;
    });
    // Página final
    doc.addPage(); y = 30;
    doc.setFontSize(18); doc.setFont("helvetica", "bold");
    doc.text('Resumo do Resultado', 20, y); y += 12;
    doc.setFontSize(14); doc.setFont("helvetica", "normal");
    doc.text(`Candidato: ${nomeAtual}`, 20, y); y += 8;
    doc.text(`Acertos: ${resultado.acertos} de 25`, 20, y); y += 8;
    doc.text(`Erros: ${resultado.erros.length} de 25`, 20, y); y += 8;
    doc.text(`Percentual: ${resultado.percentual}%`, 20, y); y += 10;
    doc.setFontSize(16); doc.setFont("helvetica", "bold");
    doc.text(resultado.percentual >= 80 ? 'APROVADO' : 'NAO ATINGIU A MEDIA', 20, y);
    // Rodapé (número de páginas)
    const pages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
        doc.setPage(i);
        doc.setFontSize(9); doc.setFont("helvetica", "normal");
        doc.text(`Pagina ${i} de ${pages}`, 105, 290, { align: 'center' });
    }
    doc.save(`simulado_sesc_${nomeAtual.replace(/\s+/g, '_')}.pdf`);
}
