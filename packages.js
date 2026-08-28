const WHATSAPP_NUMBER = "919810788986";

const packageDefinitions = {
  101: {
    name: "Crispy Classics",
    section: "starters",
    categories: [
      { name: "Crispy Selection", max: 3, rule: "Choose Any 3", options: ["Spring Rolls", "Hara Bhara Kebab", "Molten Cheese Balls", "Dahi ke Kebab", "French Fries"] }
    ],
    sides: "Mint Chutney, Spicy Dip, Toothpicks & Napkins"
  },
  102: {
    name: "Tandoori Temptations",
    section: "starters",
    categories: [
      { name: "Tandoori Selection", max: 3, rule: "Choose Any 3", options: ["Paneer Tikka", "Stuff Tandoori Aloo", "Masala Chaap", "Malai Chaap", "Mushroom Tikka", "Tandoori Momos"] }
    ],
    sides: "Mint Chutney, Chaat Masala, Lemon, Toothpicks & Napkins"
  },
  103: {
    name: "Wok Collection",
    section: "starters",
    categories: [
      { name: "Wok Selection", max: 3, rule: "Choose Any 3", options: ["Hakka Noodles", "Fried Rice", "Chilli Potato", "Steam Momos", "Veg Manchurian"] }
    ],
    sides: "Red Spicy Chutney, Signature Dip, Cutlery & Napkins"
  },
  1: {
    name: "Classic Package",
    section: "maincourse",
    categories: [
      { name: "Choice of Dal", max: 1, rule: "Choose Any 1", options: ["Dal Tadka", "Dal Makhni", "Kadhi Pakoda"] },
      { name: "Choice of Paneer", max: 1, rule: "Choose Any 1", options: ["Kadhai Paneer", "Matar Paneer", "Paneer Lababdaar"] },
      { name: "Choice of Tarkari", max: 1, rule: "Choose Any 1", options: ["Aloo Jeera", "Seasonal Veg", "Aloo Matar (Dry/Gravy)"] },
      { name: "Choice of Breads", max: 1, rule: "Choose Any 1", options: ["Tawa Roti", "Tandoori Roti"] },
      { name: "Choice of Rice", max: 1, rule: "Choose Any 1", options: ["Steam Rice", "Jeera Rice"] },
      { name: "Choice of Raita", max: 1, rule: "Choose Any 1", options: ["Boondi Raita", "Mix Veg Raita"] },
      { name: "Choice of Sweets", max: 1, rule: "Choose Any 1", options: ["Gulab Jamun"] }
    ],
    sides: "Onion, Mint Chutney, Achaar"
  },
  2: {
    name: "Celebration Package",
    section: "maincourse",
    categories: [
      { name: "Choice of Dal", max: 1, rule: "Choose Any 1", options: ["Dal Tadka", "Dal Makhni", "Kadhi Pakoda", "Chole", "Rajma"] },
      { name: "Choice of Paneer", max: 1, rule: "Choose Any 1", options: ["Kadhai Paneer", "Matar Paneer", "Paneer Lababdaar", "Shahi Paneer", "Paneer Butter Masala"] },
      { name: "Choice of Tarkari", max: 1, rule: "Choose Any 1", options: ["Aloo Jeera", "Seasonal Veg", "Aloo Matar (Dry/Gravy)", "Mix Veg", "Bhindi Masala"] },
      { name: "Choice of Breads", max: 2, rule: "Choose Any 2", options: ["Tawa Roti", "Tandoori Roti", "Butter Naan", "Poori"] },
      { name: "Choice of Rice", max: 1, rule: "Choose Any 1", options: ["Steam Rice", "Jeera Rice", "Pulao"] },
      { name: "Choice of Raita", max: 1, rule: "Choose Any 1", options: ["Boondi Raita", "Mix Veg Raita"] },
      { name: "Choice of Sweets", max: 1, rule: "Choose Any 1", options: ["Gulab Jamun", "Rasbari", "Rasgulla"] }
    ],
    sides: "Salad, Onion, Mint Chutney, Achaar, Papad"
  },
  3: {
    name: "Royal Package",
    section: "maincourse",
    categories: [
      { name: "Dal", max: 1, rule: "Choose Any 1", options: ["Dal Tadka", "Dal Makhni", "Kadhi Pakoda", "Chole", "Rajma", "Panchratan Dal"] },
      { name: "Paneer", max: 1, rule: "Choose Any 1", options: ["Kadhai Paneer", "Matar Paneer", "Paneer Lababdaar", "Shahi Paneer", "Paneer Butter Masala", "Do Pyaza"] },
      { name: "Dry Sabzi", max: 1, rule: "Choose Any 1", options: ["Mushroom Masala", "Tawa Roast Veg", "Seasonal Veg", "Mix Veg"] },
      { name: "Exotic Curry", max: 1, rule: "Choose Any 1", options: ["Navratan Korma", "Malai Kofta", "Matar Mushroom", "Kaju Curry", "Kashmiri Dum Aloo"] },
      { name: "Breads", max: 3, rule: "Choose Any 3", options: ["Tawa Roti", "Tandoori Roti", "Butter Naan", "Poori", "Laccha", "Missi", "Chur Chur"] },
      { name: "Rice", max: 2, rule: "Choose Any 2", options: ["Veg Biryani", "Jeera Rice", "Matar Pulao", "Veg Pulao", "Angoori Pulao"] },
      { name: "Raita", max: 2, rule: "Choose Any 2", options: ["Boondi Raita", "Mix Veg Raita", "Burani Raita", "Pineapple Raita", "Dahi Bhalley"] },
      { name: "Sweets", max: 2, rule: "Choose Any 2", options: ["Gulab Jamun", "Kesar Bati", "Rasmalai", "Jalebi Rabdi"] }
    ],
    sides: "Garden Salad, Mint Chutney, Achaar, Papad, Sirka Onion & Mouth Freshner"
  },
  4: {
    name: "Basic Utility Package",
    section: "maincourse",
    categories: [
      { name: "Dal", max: 1, rule: "Choose Any 1", options: ["Dal Tadka", "Dal Fry", "Dal Makhni"] },
      { name: "Dry Sabzi", max: 1, rule: "Choose Any 1", options: ["Aloo Jeera", "Seasonal Veg", "Mix Veg"] },
      { name: "Breads", max: 1, rule: "Choose Any 1", options: ["Tawa Roti"] },
      { name: "Rice", max: 1, rule: "Choose Any 1", options: ["Steam Rice"] },
      { name: "Raita", max: 1, rule: "Choose Any 1", options: ["Boondi Raita"] }
    ],
    sides: "Salad, Onion, Achaar"
  },
  5: {
    name: "Jain Special Package",
    section: "maincourse",
    categories: [
      { name: "Dal", max: 2, rule: "Choose Any 2", options: ["Dal Tadka", "Dal Makhni", "Kadhi Pakoda"] },
      { name: "Paneer", max: 1, rule: "Choose Any 1", options: ["Kadhai Paneer", "Matar Paneer", "Paneer Lababdaar"] },
      { name: "Dry Sabzi", max: 1, rule: "Choose Any 1", options: ["Seasonal Veg", "Kaju Curry", "Mix Veg"] },
      { name: "Breads", max: 2, rule: "Choose Any 2", options: ["Tawa Roti", "Tandoori Roti", "Butter Naan"] },
      { name: "Rice", max: 1, rule: "Choose Any 1", options: ["Steam Rice", "Jeera Rice", "Veg Pulaon"] },
      { name: "Raita", max: 1, rule: "Choose Any 1", options: ["Boondi Raita", "Mix Veg raita", "Pineapple Raita"] },
      { name: "Sweets", max: 1, rule: "Choose Any 1", options: ["Gulab Jamun", "Moongdal Halwa", "Rasgulla"] }
    ],
    sides: "Salad, Mouth Freshner, Mint Chutney, Achaar"
  },
  6: {
    name: "The Bhojan Co. Thali (The Deal Breaker)",
    section: "maincourse",
    categories: [
      { name: "Dal", max: 1, rule: "Choose Any 1", options: ["Dal Tadka", "Dal Fry", "Dal Makhni"] },
      { name: "Dry Sabzi / Paneer", max: 1, rule: "Choose Any 1", options: ["Seasonal Veg", "Kadhai Paneer", "Paneer Lababdaar"] },
      { name: "Breads", max: 1, rule: "Choose Any 1", options: ["Tawa Roti (4)", "Tandoori Roti (3)", "Butter Naan (3)"] },
      { name: "Rice", max: 1, rule: "Choose Any 1", options: ["Steam Rice", "Jeera Rice"] },
      { name: "Raita", max: 1, rule: "Choose Any 1", options: ["Boondi Raita"] }
    ],
    sides: "Salad, Onion, Achaar"
  }
};

let selectedPackageIds = { starters: 101, maincourse: 1 };
let packageCustomizations = {};
let map = null, marker = null, selectedLatLng = null, selectedResolvedAddress = "", searchDebounceTimer = null;

function togglePackageSelection(pkgId) {
  const pkg = packageDefinitions[pkgId];
  if (!pkg) return;
  selectedPackageIds[pkg.section] = selectedPackageIds[pkg.section] === pkgId ? null : pkgId;
  updatePackageCardStyles();
  renderQuotationSummary();
}

function removePackageFromCart(pkgId) {
  const pkg = packageDefinitions[pkgId];
  if (pkg && selectedPackageIds[pkg.section] === pkgId) {
    selectedPackageIds[pkg.section] = null;
  }
  updatePackageCardStyles();
  renderQuotationSummary();
}

function updatePackageCardStyles() {
  Object.keys(packageDefinitions).forEach(id => {
    const numId = parseInt(id, 10);
    const card = document.getElementById(`pkg-card-${numId}`);
    const actionBtn = document.getElementById(`pkg-btn-${numId}`);
    const badge = document.getElementById(`pkg-status-${numId}`);
    const isSelected = selectedPackageIds.starters === numId || selectedPackageIds.maincourse === numId;

    if (card) {
      if (isSelected) {
        card.className = "rounded-2xl sm:rounded-3xl border border-gold-500 ring-2 ring-gold-400/60 bg-gradient-to-b from-[#faf4e6] to-[#f4ecd8] shadow-lg shadow-gold-500/10 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300";
      } else {
        card.className = "rounded-2xl sm:rounded-3xl border border-gold-300/80 bg-gradient-to-b from-[#fbf8f0] to-[#f5ebd6] shadow-sm hover:border-gold-400 p-4 sm:p-6 flex flex-col justify-between transition-all duration-300";
      }
    }
    if (badge) badge.classList.toggle('hidden', !isSelected);
    if (actionBtn) {
      if (isSelected) {
        actionBtn.className = "flex-1 py-3 rounded-xl font-extrabold uppercase tracking-wider text-xs transition active:scale-95 flex items-center justify-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-300 shadow-2xs";
        actionBtn.innerText = "✕ Remove from Quotation";
      } else {
        actionBtn.className = "flex-1 py-3 rounded-xl font-extrabold uppercase tracking-wider text-xs transition active:scale-95 flex items-center justify-center gap-1.5 btn-luxury-primary text-charcoal-950 border border-gold-300 shadow-sm";
        actionBtn.innerText = "+ Add to Quotation";
      }
    }
  });
}

function openCustomizeModal(pkgId) {
  const pkg = packageDefinitions[pkgId];
  if (!pkg) return;
  if (selectedPackageIds[pkg.section] !== pkgId) {
    selectedPackageIds[pkg.section] = pkgId;
    updatePackageCardStyles();
  }

  document.getElementById('modalPkgTitle').innerText = `Customize: ${pkg.name}`;
  if (!packageCustomizations[pkgId]) packageCustomizations[pkgId] = {};

  const container = document.getElementById('modalCategoriesContainer');
  container.innerHTML = pkg.categories.map((cat, catIdx) => {
    const selected = packageCustomizations[pkgId][cat.name] || [];
    return `
      <div class="bg-stone-50/80 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-gold-200/80">
        <div class="flex justify-between items-center mb-2 sm:mb-3">
          <span class="font-bold font-serif text-xs sm:text-sm text-charcoal-950">${cat.name}</span>
          <span class="text-[9px] sm:text-[10px] font-bold text-gold-800 bg-gold-100 px-2 py-0.5 rounded-full border border-gold-300">${cat.rule}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
          ${cat.options.map(opt => `
            <label class="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-gold-100 cursor-pointer hover:border-gold-300 transition active:scale-98">
              <input type="checkbox" ${selected.includes(opt) ? 'checked' : ''} onchange="handleDishCheckbox(this, ${pkgId}, '${cat.name}', ${cat.max})" class="w-4 h-4 rounded text-gold-600 focus:ring-gold-500 border-gold-300" value="${opt}" />
              <span class="text-xs text-stone-800 font-medium">${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('customizeModal').classList.remove('hidden');
}

function closeCustomizeModal() {
  document.getElementById('customizeModal').classList.add('hidden');
  renderQuotationSummary();
}

function handleDishCheckbox(cb, pkgId, catName, maxAllowed) {
  if (!packageCustomizations[pkgId]) packageCustomizations[pkgId] = {};
  if (!packageCustomizations[pkgId][catName]) packageCustomizations[pkgId][catName] = [];
  let list = packageCustomizations[pkgId][catName];
  if (cb.checked) {
    if (list.length >= maxAllowed) {
      alert(`You can only select up to ${maxAllowed} item(s) for "${catName}".`);
      cb.checked = false;
      return;
    }
    list.push(cb.value);
  } else {
    packageCustomizations[pkgId][catName] = list.filter(i => i !== cb.value);
  }
}

function handleFormGuestChange(val) {
  let num = parseInt(val, 10);
  if (isNaN(num) || num < 20) num = 20;
  if (num % 5 !== 0) num = Math.ceil(num / 5) * 5;
  document.getElementById('custGuests').value = num;
  renderQuotationSummary();
}

function renderQuotationSummary() {
  const listContainer = document.getElementById('quotationItemsList');
  const selectedPkgLabel = document.getElementById('selectedPkgLabel');
  const guestCount = document.getElementById('custGuests') ? document.getElementById('custGuests').value : 20;

  const activePkgs = Object.values(selectedPackageIds)
    .filter(Boolean)
    .map(id => ({ id, ...packageDefinitions[id] }));

  if (selectedPkgLabel) {
    selectedPkgLabel.innerText = activePkgs.length === 0 ? "None Selected" : activePkgs.map(p => p.name).join(" + ");
  }
  if (!listContainer) return;

  if (activePkgs.length === 0) {
    listContainer.innerHTML = `
      <div class="p-4 bg-amber-50/60 rounded-xl border border-amber-200/80 text-amber-900 text-xs text-center space-y-1">
        <p class="font-bold">No Package Selected</p>
        <p class="text-[11px] text-stone-500">Please select up to 1 Starter and 1 Main Course package above.</p>
      </div>
    `;
    return;
  }

  listContainer.innerHTML = activePkgs.map(pkg => {
    const selections = packageCustomizations[pkg.id] || {};
    const selectedEntries = Object.entries(selections).filter(([_, v]) => v && v.length > 0);
    let selectionsHtml = selectedEntries.length > 0 
      ? `<div class="mt-2 pt-2 border-t border-gold-100 text-[10px] sm:text-[11px] text-stone-600 space-y-0.5">
          <span class="font-bold text-gold-800 uppercase tracking-wider text-[9px]">Custom Varieties Picked:</span>
          ${selectedEntries.map(([cat, dishes]) => `<div class="truncate"><span class="font-semibold text-charcoal-900">• ${cat}:</span> ${dishes.join(', ')}</div>`).join('')}
         </div>`
      : `<button type="button" onclick="openCustomizeModal(${pkg.id})" class="mt-1.5 text-[10px] sm:text-[11px] text-gold-700 font-bold underline block">+ Choose specific dishes for this package</button>`;

    return `
      <div class="p-3.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gold-100 shadow-2xs space-y-2">
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${pkg.section === 'starters' ? 'bg-amber-100 text-amber-900' : 'bg-gold-100 text-gold-900'}">${pkg.section === 'starters' ? 'Starters' : 'Main Course'}</span>
              <h5 class="font-bold text-xs sm:text-sm text-charcoal-950 font-serif">${pkg.name}</h5>
            </div>
            <p class="text-[11px] text-stone-500 mt-0.5">${guestCount} Guests • Custom Rate on Submission</p>
          </div>
          <div class="flex items-center gap-2">
            <button type="button" onclick="openCustomizeModal(${pkg.id})" class="text-[10px] sm:text-[11px] text-gold-700 font-bold underline">Edit</button>
            <button type="button" onclick="removePackageFromCart(${pkg.id})" class="text-[10px] sm:text-[11px] text-red-600 hover:text-red-800 font-bold underline">Remove</button>
          </div>
        </div>
        ${selectionsHtml}
      </div>
    `;
  }).join('');
}

function openLocationModal() {
  document.getElementById('locationModal').classList.remove('hidden');
  setTimeout(() => {
    if (!map) {
      const defaultLat = 28.4744, defaultLng = 77.5040;
      map = L.map('mapContainer').setView([defaultLat, defaultLng], 14);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);
      marker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(map);
      selectedLatLng = { lat: defaultLat, lng: defaultLng };
      updateModalLocationDisplay(defaultLat, defaultLng);

      map.on('click', e => {
        selectedLatLng = e.latlng;
        marker.setLatLng(e.latlng);
        updateModalLocationDisplay(e.latlng.lat, e.latlng.lng);
      });
      marker.on('dragend', e => {
        const pos = e.target.getLatLng();
        selectedLatLng = pos;
        updateModalLocationDisplay(pos.lat, pos.lng);
      });
    } else {
      map.invalidateSize();
    }
  }, 250);
}

function closeLocationModal() {
  document.getElementById('locationModal').classList.add('hidden');
}

function updateModalLocationDisplay(lat, lng, addressString = null) {
  document.getElementById('modalCoordsText').innerText = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
  if (addressString) {
    selectedResolvedAddress = addressString;
    document.getElementById('modalAddressText').innerText = selectedResolvedAddress;
    return;
  }
  document.getElementById('modalAddressText').innerText = "Fetching address...";
  fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`)
    .then(res => res.json())
    .then(data => {
      selectedResolvedAddress = data.display_name || `Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      document.getElementById('modalAddressText').innerText = selectedResolvedAddress;
    })
    .catch(() => {
      selectedResolvedAddress = `Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
      document.getElementById('modalAddressText').innerText = selectedResolvedAddress;
    });
}

function handleLocationSearch(query) {
  const clearBtn = document.getElementById('clearSearchBtn');
  const resultsContainer = document.getElementById('searchResultsList');
  if (!query || query.trim().length < 3) {
    if (clearBtn) clearBtn.classList.add('hidden');
    if (resultsContainer) resultsContainer.classList.add('hidden');
    return;
  }
  clearBtn.classList.remove('hidden');
  clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(() => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query.trim())}&countrycodes=in&limit=5`)
      .then(res => res.json())
      .then(places => {
        if (!places.length) {
          resultsContainer.innerHTML = '<div class="p-3 text-xs text-stone-500 text-center">No matching locations. Tap map to pin.</div>';
          resultsContainer.classList.remove('hidden');
          return;
        }
        resultsContainer.innerHTML = places.map(p => `
          <div onclick="selectSearchResult(${p.lat}, ${p.lon}, '${p.display_name.replace(/'/g, "\\'")}')" class="p-2.5 hover:bg-gold-50 cursor-pointer text-xs flex items-start gap-2">
            <span>📍</span>
            <div class="truncate">
              <p class="font-bold text-charcoal-950 truncate">${p.name || p.display_name.split(',')[0]}</p>
              <p class="text-[11px] text-stone-500 truncate">${p.display_name}</p>
            </div>
          </div>
        `).join('');
        resultsContainer.classList.remove('hidden');
      });
  }, 350);
}

function selectSearchResult(lat, lng, address) {
  selectedLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) };
  if (map) {
    map.setView([lat, lng], 17);
    marker.setLatLng([lat, lng]);
  }
  updateModalLocationDisplay(parseFloat(lat), parseFloat(lng), address);
  document.getElementById('searchResultsList').classList.add('hidden');
  document.getElementById('mapSearchInput').value = address.split(',')[0] || address;
}

function clearLocationSearch() {
  document.getElementById('mapSearchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('searchResultsList').classList.add('hidden');
}

function locateUserGPS() {
  if (!navigator.geolocation) return alert("Geolocation not supported.");
  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude, lng = pos.coords.longitude;
    selectedLatLng = { lat, lng };
    if (map) {
      map.setView([lat, lng], 16);
      marker.setLatLng([lat, lng]);
    }
    updateModalLocationDisplay(lat, lng);
  });
}

function confirmLocationSelection() {
  if (selectedLatLng) {
    if (selectedResolvedAddress) document.getElementById('custAddress').value = selectedResolvedAddress;
    document.getElementById('mapCoordinatesBadge').classList.remove('hidden');
    document.getElementById('coordsDisplay').innerText = `${selectedLatLng.lat.toFixed(4)}, ${selectedLatLng.lng.toFixed(4)}`;
  }
  closeLocationModal();
}

function clearMapLocation() {
  selectedLatLng = null;
  selectedResolvedAddress = "";
  document.getElementById('mapCoordinatesBadge').classList.add('hidden');
  document.getElementById('coordsDisplay').innerText = "";
}

function sendToWhatsApp(e) {
  e.preventDefault();
  const activePkgs = Object.values(selectedPackageIds).filter(Boolean).map(id => ({ id, ...packageDefinitions[id] }));
  if (!activePkgs.length) return alert("Please select at least one package.");

  const name = document.getElementById('custName').value.trim();
  const phone = document.getElementById('custPhone').value.trim();
  const estimatedGuests = document.getElementById('custGuests').value.trim();
  const deliveryDate = document.getElementById('custDate').value.trim();
  const deliveryTime = document.getElementById('custTime').value.trim();
  const address = document.getElementById('custAddress').value.trim();
  const notes = document.getElementById('custNotes').value.trim() || 'None';

  let mapText = selectedLatLng ? `📍 *Location Map:* https://maps.google.com/?q=${selectedLatLng.lat.toFixed(6)},${selectedLatLng.lng.toFixed(6)}\n` : "";
  let pkgText = activePkgs.map((pkg, i) => {
    const dishes = packageCustomizations[pkg.id] || {};
    const entries = Object.entries(dishes).filter(([_, v]) => v && v.length);
    const dishList = entries.length ? entries.map(([c, d]) => `   🔹 *${c}:* ${d.join(', ')}`).join('\n') : "   🔹 _(Dishes to be finalized via chat)_";
    return `\n📦 *PACKAGE ${i + 1} [${pkg.section.toUpperCase()}]:* ${pkg.name}\n*Dish Choices:*\n${dishList}\n🥗 *Complimentary Sides:* _${pkg.sides}_\n`;
  }).join('\n');

  const msg = `⚜️ *THE BHOJAN CORPORATION* ⚜️\n_Pure Vegetarian Catering Request_\n━━━━━━━━━━━━━━━━━━━━━\n👤 *Host:* ${name}\n📞 *Contact:* ${phone}\n👥 *Guests:* ${estimatedGuests} Guests\n📅 *Date:* ${deliveryDate} at ${deliveryTime}\n🏢 *Venue:* ${address}\n${mapText}━━━━━━━━━━━━━━━━━━━━━\n🍽️ *SELECTED PACKAGES*${pkgText}\n━━━━━━━━━━━━━━━━━━━━━\n📝 *Notes:* "${notes}"\n━━━━━━━━━━━━━━━━━━━━━\n💬 _Kindly share official rate quotation and availability confirmation._`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  updatePackageCardStyles();
  renderQuotationSummary();
});