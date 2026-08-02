// Main JavaScript para o Grimório Místico de Jessica Brunele

// 🔮 BANCO DE CARTAS DO TAROT DA ESTRATÉGIA DIGITAL (Fora do DOMContentLoaded para acesso global)
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

// Função chamada diretamente pelo HTML via onclick="revelarCarta(n)"
function revelarCarta(index) {
  const cartas = document.querySelectorAll('.tarot-card');
  
  if (!cartas || cartas.length === 0) return;

  // Virar todas as cartas
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

  // Exibir o painel com o resultado
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

// BANCO DE FEITIÇOS DE CONTEÚDO
const feiticosConteudo = [
  {
    categoria: "🔮 FEITIÇO DE AUTORIDADE",
    texto: "3 erros silenciosos que o seu nicho comete todos os dias (e como a sua marca resolve o 1º)."
  },
  {
    categoria: "✨ POÇÃO DE ENGAJAMENTO",
    texto: "A verdade não contada sobre [sua área de atuação]: O que ninguém te avisa antes de começar."
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

  // Sorteia um feitiço aleatório
  const randomIndex = Math.floor(Math.random() * feiticosConteudo.length);
  const feitico = feiticosConteudo[randomIndex];

  // Efeito de transição
  display.style.opacity = 0;
  display.style.display = "block";

  setTimeout(() => {
    categoryElem.innerText = feitico.categoria;
    textElem.innerText = `"${feitico.texto}"`;
    display.style.transition = "opacity 0.4s ease";
    display.style.opacity = 1;
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  // Hit Counter
  const hitCounter = document.getElementById("hitCounter");
  let count = localStorage.getItem("gothic_visit_count");
  if (!count) {
    count = 1337; // Número místico inicial
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

  // Oracle / Easter Egg
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

  // Countdown to Y2K38
  const countdownEl = document.getElementById("countdown");
  function updateCountdown() {
    if (!countdownEl) return;
    const targetDate = new Date("2038-01-19T03:14:07Z").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownEl.textContent = "O BUG CHEGOU!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M ${String(seconds).padStart(2, '0')}S`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Grimório / Guestbook
  const gbForm = document.getElementById("gbForm");
  const gbName = document.getElementById("gbName");
  const gbMsg = document.getElementById("gbMsg");
  const gbList = document.getElementById("gbList");

  // Load initial entries
  const initialEntries = [
    { name: "Morgana, a Sábia", msg: "Que a luz da lua ilumine sempre a sua gestão e seu caminho!" },
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

  if (gbForm) {
    gbForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nameVal = gbName.value.trim();
      const msgVal = gbMsg.value.trim();

      if (nameVal && msgVal) {
        storedEntries.unshift({ name: nameVal, msg: msgVal });
        localStorage.setItem("gothic_guestbook", JSON.stringify(storedEntries));
        renderGuestbook();
        gbName.value = "";
        gbMsg.value = "";
      }
    });
  }
});
