// Main JavaScript para o Grimório Místico de Jessica Brunele

// Main JavaScript para o Grimório Místico de Jessica Brunele

// ==========================================
// 🔮 FUNÇÕES GLOBAIS (Acessíveis pelo HTML)
// ==========================================

// 1. Alternar entre as Abas (Tarot x Gerador)
function alternarAba(abaId, btn) {
  const tarotTab = document.getElementById('tarotTab');
  const spellTab = document.getElementById('spellTab');

  if (tarotTab && spellTab) {
    tarotTab.style.display = 'none';
    spellTab.style.display = 'none';
  }

  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(b => b.classList.remove('active'));

  const abaSelecionada = document.getElementById(abaId);
  if (abaSelecionada) {
    abaSelecionada.style.display = 'block';
  }
  if (btn) {
    btn.classList.add('active');
  }
}

// 2. Banco e Lógica do Tarot
const baralhoTarot = [
  {
    nome: "🃏 O Alquimista de Conteúdo",
    icone: "⚗️",
    mensagem: "Sua marca precisa de transmutação! Hora de unir dados e narrativas marcantes para transformar seguidores casuais em uma comunidade engajada."
  },
  {
    nome: "🌙 A Estrela da Vanguarda",
    icone: "✨",
    mensagem: "O algoritmo favorece a autenticidade. Teste novos formatos de Reels e explore ferramentas de IA generativa para acelerar seus fluxos."
  },
  {
    nome: "🔮 O Oráculo do Posicionamento",
    icone: "👁️",
    mensagem: "A clareza atrai autoridade. Refine a mensagem central do seu perfil e entregue copys diretas que resolvam a dor exata do seu público."
  }
];

function revelarCarta(index) {
  const cartas = document.querySelectorAll('.tarot-card');
  if (!cartas || cartas.length === 0) return;

  cartas.forEach((card, i) => {
    card.classList.add('flipped');
    const backElement = document.getElementById(`back-${i}`);
    if (backElement) {
      backElement.innerHTML = `
        <span style="font-size:2rem;">${baralhoTarot[i].icone}</span>
        <strong style="margin-top:5px; font-size:0.8rem; color:#d4af37;">${baralhoTarot[i].nome}</strong>
      `;
    }
  });

  const resultado = baralhoTarot[index];
  const titleElem = document.getElementById('card-title');
  const meaningElem = document.getElementById('card-meaning');
  const resultBox = document.getElementById('tarot-result');

  if (titleElem && meaningElem && resultBox) {
    titleElem.innerText = resultado.nome;
    meaningElem.innerText = resultado.mensagem;
    resultBox.style.display = 'block';
  }
}

// 3. Banco e Lógica do Gerador de Feitiços
const feiticosConteudo = [
  {
    categoria: "🔮 FEITIÇO DE AUTORIDADE",
    texto: "3 erros silenciosos que o seu nicho comete todos os dias (e como a sua marca resolve o 1º)."
  },
  {
    categoria: "✨ POÇÃO DE ENGAJAMENTO",
    texto: "A verdade não contada sobre sua área: O que ninguém te avisa antes de começar."
  },
  {
    categoria: "🌙 FEITIÇO DE CONVERSÃO",
    texto: "Se você pudesse resolver apenas UM problema da sua marca hoje, qual seria? Responda este post que eu te ajudo."
  },
  {
    categoria: "⚡ ENCANTAMENTO DE RETENÇÃO",
    texto: "O ritual exato que eu uso para organizar meus processos em metade do tempo (Bastidores em Reels)."
  },
  {
    categoria: "⚗️ ALQUIMIA DE CONTEÚDO",
    texto: "Como transformar 1 hora de planejamento em 7 dias de posts estratégicos usando Inteligência Artificial."
  }
];

function conjurarFeitico() {
  const display = document.getElementById("spellDisplay");
  const categoryElem = document.getElementById("spellCategory");
  const textElem = document.getElementById("spellText");

  if (!display || !categoryElem || !textElem) return;

  const randomIndex = Math.floor(Math.random() * feiticosConteudo.length);
  const feitico = feiticosConteudo[randomIndex];

  display.style.opacity = 0;
  display.style.display = "block";

  setTimeout(() => {
    categoryElem.innerText = feitico.categoria;
    textElem.innerText = `"${feitico.texto}"`;
    display.style.transition = "opacity 0.4s ease";
    display.style.opacity = 1;
  }, 150);
}

// 4. Contagem Regressiva para a Próxima Lua Cheia (28 de Agosto de 2026)
function atualizarContagemLua() {
  // Formato numérico universal compatível com todos os navegadores e celulares
  const dataAlvo = new Date(2026, 7, 28, 4, 18, 0).getTime(); 
  const agora = new Date().getTime();
  const diferenca = dataAlvo - agora;

  const elementoContador = document.getElementById('countdown');
  if (!elementoContador) return;

  if (diferenca <= 0) {
    elementoContador.innerHTML = "🌕 LUA CHEIA EM SEU ÁPICE 🌕";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  elementoContador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}


// ==========================================
// 📜 EVENTOS AO CARREGAR A PÁGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Hit Counter
  const hitCounter = document.getElementById("hitCounter");
  let count = localStorage.getItem("gothic_visit_count");
  if (!count) {
    count = 1337;
  } else {
    count = parseInt(count) + 1;
  }
  localStorage.setItem("gothic_visit_count", count);
  if (hitCounter) {
    hitCounter.textContent = String(count).padStart(6, '0');
  }

  // Footer Year
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Easter Egg
  const insertCoinBtn = document.getElementById("insertCoin");
  const eggMsg = document.getElementById("eggMsg");
  const oracleQuotes = [
    "🔮 'Sob a luz da Lua Cheia, novos processos organizados florescerão.'",
    "🐈‍⬛ 'O Gato Preto sussurra: Seus dados estão protegidos e em ordem.'",
    "🌙 'A fase da lua favorece a automação e a gestão perfeita.'",
    "✨ 'A magia da eficiência habita na atenção aos detalhes.'",
    "🗝️ 'Uma nova oportunidade se abrirá na próxima conjunção astral!'"
  ];

  if (insertCoinBtn && eggMsg) {
    insertCoinBtn.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * oracleQuotes.length);
      eggMsg.style.opacity = 0;
      setTimeout(() => {
        eggMsg.textContent = oracleQuotes[randomIndex];
        eggMsg.style.transition = "opacity 0.5s ease";
        eggMsg.style.opacity = 1;
      }, 200);
    });
  }

  // Inicializa a Contagem da Lua Cheia em tempo real
  atualizarContagemLua();
  setInterval(atualizarContagemLua, 1000);

  // Grimório / Guestbook
  const gbForm = document.getElementById("gbForm");
  const gbName = document.getElementById("gbName");
  const gbPhone = document.getElementById("gbPhone");
  const gbMsg = document.getElementById("gbMsg");
  const gbList = document.getElementById("gbList");

  const initialEntries = [
    { name: "Morgana, a Sábia 🧙‍♀️", msg: "Que a luz da lua ilumine sempre a sua gestão e seu caminho!" },
    { name: "O Gato Guardião 🐈‍⬛", msg: "Aprovado por todos os felinos da casa. Vibe impecável!" }
  ];

  let storedEntries = JSON.parse(localStorage.getItem("gothic_guestbook")) || initialEntries;

  function renderGuestbook() {
    if (!gbList) return;
    gbList.innerHTML = "";
    storedEntries.forEach(entry => {
      const li = document.createElement("li");
      li.className = "gb-item";
      li.innerHTML = `<div class="gb-item-author">✦ ${escapeHtml(entry.name)}:</div><p class="gb-item-text">"${escapeHtml(entry.msg)}"</p>`;
      gbList.appendChild(li);
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  renderGuestbook();

  // Envio via Formspree + atualização na tela
  if (gbForm) {
    gbForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nameVal = gbName ? gbName.value.trim() : "";
      const phoneVal = gbPhone ? gbPhone.value.trim() : "";
      const msgVal = gbMsg ? gbMsg.value.trim() : "";

      if (nameVal && msgVal) {
        const formData = new FormData(gbForm);

        try {
          const response = await fetch(gbForm.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          if (response.ok) {
            storedEntries.unshift({ name: nameVal, msg: msgVal });
            localStorage.setItem("gothic_guestbook", JSON.stringify(storedEntries));
            renderGuestbook();

            gbName.value = "";
            if (gbPhone) gbPhone.value = "";
            gbMsg.value = "";
            alert("✨ Sua assinatura foi selada no Grimório e enviada com sucesso!");
          } else {
            alert("⚠️ Houve um problema ao enviar seu feitiço. Tente novamente!");
          }
        } catch (error) {
          alert("⚠️ Erro de conexão ao enviar a mensagem.");
        }
      }
    });
  }
});
