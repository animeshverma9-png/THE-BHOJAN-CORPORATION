const FAQ_KNOWLEDGE_BASE = [
  { 
    keywords: ['package', 'packages', 'menu', 'rate', 'price', 'cost', 'pricing', 'quotation', 'quote', 'starter', 'starters', 'main course'], 
    reply: "You can select up to 1 Starter package (Crispy Classics, Tandoori Temptations, Wok Collection) and 1 Main Course package (Classic, Celebration, Royal, Basic Utility, Jain Special, Chef's Thali). Transparent quotations are provided over WhatsApp!" 
  },
  { 
    keywords: ['jain', 'onion', 'garlic', 'satvik', 'veg', 'pure veg', 'ghee', 'shuddh'], 
    reply: "Every single dish is 100% Pure Vegetarian. We offer a specialized Jain Special Package with strictly no onion and no garlic!" 
  },
  { 
    keywords: ['minimum', 'guest', 'guests', 'person', 'people', 'limit', 'count', 'step'], 
    reply: "Our minimum catering booking is 20 guests, with quantities adjustable in multiples of 5 (e.g., 20, 25, 30, 50, 100+ guests)." 
  },
  { 
    keywords: ['location', 'delivery', 'deliver', 'area', 'noida', 'delhi', 'coverage', 'ghaziabad', 'where'], 
    reply: "We deliver across Greater Noida, Noida, Ghaziabad, and the entire Delhi NCR region directly to homes, societies, and event venues." 
  },
  { 
    keywords: ['contact', 'call', 'phone', 'whatsapp', 'helpline', 'number', 'reach'], 
    reply: "You can connect with our live order desk and WhatsApp helpline directly at +91 98107 88986." 
  }
];

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('hidden');
}

function toggleAIChat() {
  const windowEl = document.getElementById('aiChatWindow');
  if (!windowEl) return;
  windowEl.classList.toggle('hidden');
  if (!windowEl.classList.contains('hidden')) {
    setTimeout(() => {
      const input = document.getElementById('chatInput');
      if (input) input.focus();
    }, 150);
  }
}

function quickPrompt(text) {
  const input = document.getElementById('chatInput');
  if (input) {
    input.value = text;
    document.getElementById('aiChatForm').requestSubmit();
  }
}

function appendChatMessage(sender, text) {
  const container = document.getElementById('chatMessages');
  if (!container) return;
  const isAI = sender === 'AI';
  
  const msgWrapper = document.createElement('div');
  msgWrapper.className = `flex items-start gap-2 ${isAI ? '' : 'justify-end'}`;
  msgWrapper.innerHTML = `
    ${isAI ? '<div class="w-6 h-6 rounded-full bg-gold-200 text-gold-900 font-bold flex items-center justify-center text-[10px] shrink-0">AI</div>' : ''}
    <div class="${isAI ? 'bg-white text-stone-700 rounded-tl-none border border-gold-200/70' : 'bg-charcoal-950 text-gold-200 rounded-tr-none'} p-3 rounded-2xl shadow-2xs leading-relaxed max-w-[82%] whitespace-pre-line text-xs">
      ${text}
    </div>
    ${!isAI ? '<div class="w-6 h-6 rounded-full bg-charcoal-900 text-gold-300 font-bold flex items-center justify-center text-[10px] shrink-0">You</div>' : ''}
  `;
  container.appendChild(msgWrapper);
  container.scrollTop = container.scrollHeight;
}

function handleAIChatSubmit(e) {
  e.preventDefault();
  const input = document.getElementById('chatInput');
  const query = input.value.trim();
  if (!query) return;

  appendChatMessage('User', query);
  input.value = '';

  const typingIndicator = document.createElement('div');
  typingIndicator.id = 'aiTyping';
  typingIndicator.className = 'flex items-center gap-1.5 text-stone-400 text-[11px] italic pl-8';
  typingIndicator.innerText = 'Bhojan AI is typing...';
  document.getElementById('chatMessages').appendChild(typingIndicator);
  document.getElementById('chatMessages').scrollTop = document.getElementById('chatMessages').scrollHeight;

  setTimeout(() => {
    const ind = document.getElementById('aiTyping');
    if (ind) ind.remove();
    const cleanQuery = query.toLowerCase();
    
    const match = FAQ_KNOWLEDGE_BASE.find(item => 
      item.keywords.some(keyword => cleanQuery.includes(keyword))
    );

    if (match) {
      appendChatMessage('AI', match.reply);
    } else {
      appendChatMessage('AI', "I'd be glad to help! You can check our Packages page or message our WhatsApp team directly at +91 98107 88986.");
    }
  }, 350);
}

// Scroll-Reveal Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.luxury-card, details').forEach(el => {
    observer.observe(el);
  });
});
