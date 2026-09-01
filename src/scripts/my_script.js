/* ---------------- CONFIG ---------------- */
// TIERS = the three top-level categories from your Human-Centred R&D taxonomy.
// Each has a colour (used for markers/badges/numbers) and a list of sub-fields
// used for the finer-grained filter chips in the Legend tab.
const TIERS = {
    human_science: {
        label: "Human Science",
        color: "#35d6b0",
        order: 1,
        subfields: ["Neuroergonomics", "Human Factors", "Human Performance", "Neurotechnology"]
    },
    interaction_ai: {
        label: "Interaction & AI",
        color: "#f2b53c",
        order: 2,
        subfields: ["HMI", "HRI", "HAI", "XR/VR/AR", "BCI"]
    },
    systems_tech: {
        label: "Systems & Technology",
        color: "#4d9bff",
        order: 3,
        subfields: ["Robotics", "Autonomy", "Embedded Systems", "AI/ML", "Computer Vision", "Human Spaceflight"]
    },
};
const TYPE_LABEL = {
    lab: "Academic / Lab",
    gov: "Government",
    startup: "Startup",
    private: "Private company"
};

// APPLICATIONS = a separate filter dimension: real-world domains a site's work
// applies to. A site can belong to several. Keywords are shown as context tags
// in the popup only — not individually filterable (that's a lot of surface
// area for a sidebar). Filtering happens at the domain level, in Legend.
const APPLICATIONS = {
    aviation: {
        label: "Aviation",
        keywords: ["Cockpit & Flight Deck", "Pilot Performance", "Pilot–Automation Interaction", "Flight Safety", "Air Traffic Control", "UAV & Drone Operations", "Flight Simulation", "Fatigue & Vigilance", "Situation Awareness", "Human–Autonomy Teaming"]
    },
    consumer: {
        label: "Consumer Technology & Products",
        keywords: ["Human–Computer Interaction", "User Experience", "Usability", "Accessibility", "Wearable Technology", "AR/VR/XR", "Multimodal Interaction", "Voice & Conversational Interfaces", "Personalized Systems", "Human–AI Interaction", "Smart Devices"]
    },
    defense: {
        label: "Defense & Security",
        keywords: ["Soldier Performance", "Human–Machine Teaming", "Human–Autonomy Teaming", "Autonomous Systems", "Drone & Swarm Operations", "Command & Control", "Situational Awareness", "Cognitive Workload", "Decision-Making", "Mission Planning", "Defense Robotics", "Operational Safety"]
    },
    healthcare: {
        label: "Healthcare & Assistive Technology",
        keywords: ["Medical Devices", "Clinical Decision Support", "Digital Health", "Rehabilitation", "Neurorehabilitation", "Assistive Robotics", "Prosthetics & Exoskeletons", "Brain–Computer Interfaces", "Patient Monitoring", "Healthcare Accessibility", "Human–AI Interaction", "Human–Robot Interaction"]
    },
    industry: {
        label: "Industry & Manufacturing",
        keywords: ["Human–Robot Collaboration", "Industrial Automation", "Operator Performance", "Industrial HMI", "Industry 4.0", "Smart Manufacturing", "AR/VR Training", "Worker Safety", "Physical & Cognitive Ergonomics", "Predictive Maintenance", "Remote Operations", "Human–Autonomy Teaming"]
    },
    nuclear: {
        label: "Nuclear & Safety-Critical Operations",
        keywords: ["Nuclear Control Rooms", "Operator Performance", "Safety-Critical Systems", "Alarm Management", "Human Reliability", "Situation Awareness", "Emergency Response", "Decision Support", "Human–Automation Interaction", "Radiation Environments", "Operational Safety"]
    },
    rescue: {
        label: "Rescue & Disaster Management",
        keywords: ["Search & Rescue", "Emergency Response", "First Responder Performance", "Situational Awareness", "Decision-Making Under Stress", "Cognitive Workload", "Fatigue & Vigilance", "Emergency Command & Control", "Human–Robot Interaction", "Drone-Assisted Rescue", "Autonomous Systems", "Human–Autonomy Teaming", "Remote Operations", "Wearable Technology", "AR/VR & Immersive Systems", "Disaster Evacuation", "Emergency Communication", "Human–Machine Teaming"]
    },
    space: {
        label: "Human Spaceflight, Exploration & Habitation",
        keywords: ["Astronaut Performance", "Crew–Spacecraft Interaction", "Space Operations", "Human–Robot Interaction", "Autonomous Space Systems", "Extravehicular Activity", "Lunar & Planetary Exploration", "Space Habitation", "Habitability", "Isolation & Confinement", "Long-Duration Spaceflight", "Human–Autonomy Teaming"]
    },
    sports: {
        label: "Sports, Performance & Wellbeing",
        keywords: ["Human Performance", "Athlete Monitoring", "Cognitive Performance", "Mental Workload", "Attention & Vigilance", "Fatigue Monitoring", "Stress & Recovery", "Neurophysiology", "Wearable Technology", "Physiological Sensing", "Motion Analysis", "Biomechanics", "Neurofeedback", "Immersive Training", "Performance Optimization"]
    },
    transportation: {
        label: "Transportation & Mobility",
        keywords: ["Automotive HMI", "Advanced Driver Assistance", "Autonomous Vehicles", "Driver Monitoring", "Driver Performance", "Railway Human Factors", "Maritime Human Factors", "Traffic Management", "Transportation Safety", "Human–Autonomy Interaction", "Passenger Experience", "Intelligent Transportation Systems"]
    },
    underwater: {
        label: "Underwater & Diving",
        keywords: ["Diving", "Human Performance", "Diver Safety", "Underwater Robotics", "Submarine Operations", "Teleoperation", "Human–Robot Interaction", "Hyperbaric Environments", "Fatigue & Vigilance", "Situational Awareness", "Extreme Environment Physiology", "Remote Operations"]
    },
};
const TYPE_SHAPE_SVG = {
    gov: `<path d="M11 1 L19 4 V10 Q19 17 11 21 Q3 17 3 10 V4 Z" fill="var(--text-dim)"/>`,
    lab: `<path d="M9 1 H13 V8 L18 20 H4 L9 8 Z" fill="var(--text-dim)"/>`,
    startup: `<path d="M11 1 Q17 6 15 14 L11 21 L7 14 Q5 6 11 1 Z" fill="var(--text-dim)"/>`,
    private: `<rect x="2" y="8" width="18" height="12" rx="2" fill="var(--text-dim)"/><rect x="7" y="4" width="8" height="5" rx="1" fill="none" stroke="var(--text-dim)" stroke-width="1.6"/>`,
};

const SEED = [{
        id: "nimhans-nrc",
        name: "NIMHANS Neurobiology Research Centre",
        city: "Bengaluru, India",
        lat: 12.9406,
        lng: 77.5988,
        tier: "human_science",
        subfield: "Neuroergonomics",
        type: "lab",
        founded: 2007,
        site: "https://nimhans.ac.in",
        applications: ["healthcare"],
        appKeywords: ["Clinical Decision Support", "Digital Health"],
        desc: "Specialised neuroscience research centre on the NIMHANS campus, housing 14 labs spanning electrophysiology, brain imaging and cognitive neuroscience — foundational work for neuroergonomics."
    },
    {
        id: "iisc-rbccps-hci",
        name: "IISc — RBCCPS Human‑Computer Interaction Group",
        city: "Bengaluru, India",
        lat: 13.0219,
        lng: 77.5671,
        tier: "interaction_ai",
        subfield: "HMI",
        type: "lab",
        founded: 2016,
        site: "https://cps.iisc.ac.in",
        applications: ["consumer"],
        appKeywords: ["Human–Computer Interaction", "Multimodal Interaction"],
        desc: "Research group under IISc's Robert Bosch Centre for Cyber‑Physical Systems, working on adaptive interfaces, natural user interfaces and assistive technology."
    },
    {
        id: "iiitb",
        name: "IIIT Bangalore",
        city: "Electronics City, Bengaluru, India",
        lat: 12.8447,
        lng: 77.6631,
        tier: "interaction_ai",
        subfield: "HMI",
        type: "lab",
        founded: 1998,
        site: "https://www.iiitb.ac.in",
        applications: ["consumer"],
        appKeywords: ["Human–Computer Interaction", "Accessibility"],
        desc: "Deemed university with active human‑centred computing and interaction‑design research groups feeding into HMI and cyber‑physical systems work."
    },
    {
        id: "nexstem",
        name: "Nexstem",
        city: "Bengaluru North, India",
        lat: 13.0450,
        lng: 77.5950,
        tier: "interaction_ai",
        subfield: "BCI",
        type: "startup",
        founded: 2020,
        site: "https://www.nexstem.ai",
        applications: ["healthcare", "consumer"],
        appKeywords: ["Brain–Computer Interfaces", "Wearable Technology"],
        desc: "Neurotech startup building a modular EEG headset (Instinct) for real‑time brain‑signal decoding aimed at research, neurofeedback and adaptive interfaces."
    },
    {
        id: "skybrain",
        name: "SkyBrain Neurotech",
        city: "Bengaluru, India",
        lat: 12.9352,
        lng: 77.6146,
        tier: "interaction_ai",
        subfield: "BCI",
        type: "startup",
        founded: 2021,
        site: "https://www.skybrain.in",
        applications: ["healthcare", "sports"],
        appKeywords: ["Brain–Computer Interfaces", "Neurofeedback"],
        desc: "Neurotechnology company using EEG and AI for real‑time brain‑activity monitoring, aimed at focus and relaxation feedback applications."
    },
    {
        id: "hsfc",
        name: "Human Space Flight Centre (ISRO)",
        city: "Bengaluru, India",
        lat: 13.0353,
        lng: 77.5711,
        tier: "systems_tech",
        subfield: "Human Spaceflight",
        type: "gov",
        founded: 2019,
        site: "https://www.hsfc.gov.in",
        applications: ["space"],
        appKeywords: ["Astronaut Performance", "Crew–Spacecraft Interaction"],
        desc: "ISRO's nodal centre for the Gaganyaan programme — mission planning, crew‑survival engineering, astronaut selection and training for India's human spaceflight effort."
    },
    {
        id: "ursc",
        name: "U R Rao Satellite Centre (ISRO)",
        city: "Bengaluru, India",
        lat: 13.0300,
        lng: 77.6410,
        tier: "systems_tech",
        subfield: "Human Spaceflight",
        type: "gov",
        founded: 1972,
        site: "https://www.ursc.gov.in",
        applications: ["space"],
        appKeywords: ["Space Operations", "Autonomous Space Systems"],
        desc: "ISRO's satellite design and integration centre — spacecraft systems engineering relevant to crewed and uncrewed missions alike."
    },
    {
        id: "istrac",
        name: "ISTRAC (ISRO Telemetry, Tracking & Command Network)",
        city: "Bengaluru, India",
        lat: 13.0270,
        lng: 77.5490,
        tier: "systems_tech",
        subfield: "Human Spaceflight",
        type: "gov",
        founded: 1980,
        site: "https://www.istrac.gov.in",
        applications: ["space"],
        appKeywords: ["Space Operations", "Human–Autonomy Teaming"],
        desc: "ISRO's ground‑segment network for satellite tracking, telemetry and mission operations, including human‑spaceflight ground support."
    },
    {
        id: "drdo-diprocw",
        name: "DRDO — Defence Bioengineering & Electromedical Laboratory",
        city: "Bengaluru, India",
        lat: 12.9634,
        lng: 77.5855,
        tier: "human_science",
        subfield: "Human Factors",
        type: "gov",
        founded: 1971,
        site: "https://www.drdo.gov.in",
        applications: ["defense"],
        appKeywords: ["Soldier Performance", "Operational Safety"],
        desc: "DRDO lab working on human‑factors, ergonomics and bioengineering for defence systems — directly adjacent to neuroergonomics application areas."
    },
];

/* ---------------- STATE ---------------- */
let sites = [];
let activeApplications = new Set(Object.keys(APPLICATIONS));
let activeTiers = new Set(Object.keys(TIERS));
let activeTypes = new Set(Object.keys(TYPE_LABEL));
// Composite keys "categoryKey|Subfield" so identically-named subfields in
// different categories (unlikely here, but safe) don't collide.
let activeSubfields = new Set(
    Object.entries(TIERS).flatMap(([key, t]) => t.subfields.map(sf => `${key}|${sf}`))
);
let markers = {};
let clickedLatLng = null;
let editingSiteId = null;

/* ---------------- STORAGE ---------------- */
const STORAGE_KEY = 'neuro-field-map:sites';
const GITHUB_CONFIG_KEY = 'neuro-field-map:github';
const DEFAULT_GITHUB_CONFIG = {
    owner: '',
    repo: '',
    branch: 'main',
    path: 'sites.json'
};

function getGitHubConfig() {
    try {
        const raw = localStorage.getItem(GITHUB_CONFIG_KEY);
        if (!raw) return { ...DEFAULT_GITHUB_CONFIG };
        return { ...DEFAULT_GITHUB_CONFIG, ...JSON.parse(raw) };
    } catch (e) {
        return { ...DEFAULT_GITHUB_CONFIG };
    }
}

function setGitHubConfig(config) {
    try {
        localStorage.setItem(GITHUB_CONFIG_KEY, JSON.stringify({ ...DEFAULT_GITHUB_CONFIG, ...config }));
    } catch (e) {
        console.warn('GitHub config could not be saved to localStorage.', e);
    }
}

function encodeBase64(str) {
    if (typeof btoa === 'function') {
        return btoa(unescape(encodeURIComponent(str)));
    }
    return Buffer.from(str, 'utf8').toString('base64');
}

async function fetchRemoteSites() {
    const config = getGitHubConfig();
    if (!config.owner || !config.repo) return null;

    const url = `https://raw.githubusercontent.com/${config.owner}/${config.repo}/${config.branch}/${config.path}`;
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) {
        throw new Error(`GitHub data file not found (${response.status})`);
    }
    const data = await response.json();
    if (!Array.isArray(data)) {
        throw new Error('The GitHub data file must contain a JSON array of sites.');
    }
    return data;
}

async function loadData() {
    try {
        const remoteSites = await fetchRemoteSites();
        if (remoteSites) {
            sites = remoteSites;
            saveData();
            return;
        }
    } catch (e) {
        console.warn('Could not load shared GitHub data, falling back to local copy.', e);
    }

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            sites = JSON.parse(raw);
            return;
        }
    } catch (e) {
        /* no saved data yet, or storage blocked */ }
    sites = SEED.slice();
    saveData();
}

function saveData() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
    } catch (e) {
        console.warn('localStorage unavailable — changes will not persist after refresh.', e);
    }
}

/* ---------------- MAP ---------------- */
const map = L.map('map', {
    zoomControl: true,
    attributionControl: true
}).setView([16.5, 78.5], 5);

const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    subdomains: 'abc',
    maxZoom: 19
});
tileLayer.addTo(map);

// If tiles fail to load (e.g. blocked network/CDN), fall back to a light no-key basemap instead of a blank background.
let tileLoadFailures = 0,
    fallbackApplied = false;
tileLayer.on('tileerror', () => {
    tileLoadFailures++;
    if (tileLoadFailures > 4 && !fallbackApplied) {
        fallbackApplied = true;
        map.removeLayer(tileLayer);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap &copy; CARTO',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);
    }
});

function shapeSvg(type, color, number) {
    const shapes = {
        gov: `<path d="M11 1 L19 4 V10 Q19 17 11 21 Q3 17 3 10 V4 Z" fill="${color}" stroke="#04101f" stroke-width="1.2"/>`,
        lab: `<path d="M9 1 H13 V8 L18 20 H4 L9 8 Z" fill="${color}" stroke="#04101f" stroke-width="1.2" stroke-linejoin="round"/>`,
        startup: `<path d="M11 1 Q17 6 15 14 L11 21 L7 14 Q5 6 11 1 Z" fill="${color}" stroke="#04101f" stroke-width="1.2" stroke-linejoin="round"/>`,
        private: `<g><rect x="2" y="8" width="18" height="12" rx="2" fill="${color}" stroke="#04101f" stroke-width="1.2"/><rect x="7" y="4" width="8" height="5" rx="1" fill="none" stroke="${color}" stroke-width="1.6"/></g>`,
    };
    // Each symbolic shape's visual mass sits at a different point than the 11,11 bounding-box centre, so the number is nudged per shape to land inside the solid fill.
    const numPos = {
        gov: {
            x: 11,
            y: 10.5
        },
        lab: {
            x: 11,
            y: 15
        },
        startup: {
            x: 11,
            y: 11.5
        },
        private: {
            x: 11,
            y: 14
        },
    } [type];
    const label = number != null ?
        `<text x="${numPos.x}" y="${numPos.y}" text-anchor="middle" dominant-baseline="middle"
        font-family="'IBM Plex Mono', monospace" font-size="9" font-weight="700" fill="#04101f">${number}</text>` :
        '';
    return `<svg width="26" height="26" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 0 5px ${color}99)">${shapes[type]}${label}</svg>`;
}

function makeIcon(site) {
    const tierKey = getSiteTiers(site)[0] || site.tier || Object.keys(TIERS)[0];
    const tier = TIERS[tierKey] || TIERS[Object.keys(TIERS)[0]];
    return L.divIcon({
        className: '',
        html: shapeSvg(site.type, tier.color, tier.order),
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -11]
    });
}

function domainFrom(url) {
    try {
        return new URL(url).hostname.replace('www.', '');
    } catch (e) {
        return null;
    }
}

function initials(name) {
    return name.split(/\s+/).filter(w => /[A-Za-z]/.test(w[0])).slice(0, 2).map(w => w[0].toUpperCase()).join('');
}

function getSiteTiers(site) {
    if (Array.isArray(site.tiers) && site.tiers.length) return site.tiers.filter(t => TIERS[t]);
    if (site.tier && TIERS[site.tier]) return [site.tier];
    return [];
}

function getSiteSubfieldEntries(site) {
    if (Array.isArray(site.subfields) && site.subfields.length) {
        return site.subfields
            .map(item => {
                if (typeof item === 'string') return { tier: site.tier || Object.keys(TIERS)[0], subfield: item };
                if (item && item.subfield && TIERS[item.tier || site.tier]) return { tier: item.tier || site.tier, subfield: item.subfield };
                return null;
            })
            .filter(Boolean);
    }
    if (site.subfield && site.tier && TIERS[site.tier]) return [{ tier: site.tier, subfield: site.subfield }];
    return [];
}

function getSiteSubfieldKeys(site) {
    return getSiteSubfieldEntries(site).map(({ tier, subfield }) => `${tier}|${subfield}`);
}

function popupHtml(site) {
    const tiers = getSiteTiers(site);
    const primaryTier = tiers.length
        ? tiers[0]
        : (site.tier && TIERS[site.tier]
            ? site.tier
            : Object.keys(TIERS)[0]);

    const color = TIERS[primaryTier].color;

    const years = site.founded
        ? new Date().getFullYear() - Number(site.founded)
        : null;


    const subfields = getSiteSubfieldEntries(site);
    console.log("SITE:", site);
    console.log("SUBFIELDS:", subfields);

    return `
        <div class="pop">

            <div class="pop-head">

                <div class="pop-logo">
                    <span class="fallback"
                          style="color:${color}">
                        ${initials(site.name)}
                    </span>
                </div>

                <div>
                    <div class="pop-name">
                        ${site.name}
                    </div>

                    <div class="pop-city">
                        ${site.city || ''}
                    </div>
                </div>

            </div>

            <div class="pop-badges">
                ${tiers.map(tierKey => `
                    <span
                        class="badge tier"
                        style="background:${TIERS[tierKey].color}">
                        ${TIERS[tierKey].order}
                        ·
                        ${TIERS[tierKey].label}
                    </span>
                `).join('')}

                ${subfields.length ? `
                    <div class="pop-subfields">
                        ${subfields.map(({ subfield }) => `
                            <span class="badge subfield-badge">
                                ${subfield}
                            </span>
                        `).join('')}
                    </div>
                ` : ''}

                <span class="badge">
                    ${TYPE_LABEL[site.type] || site.type}
                </span>
            </div>

            ${site.applications?.length ? `
                <div class="pop-badges">
                    ${site.applications.map(a =>
                        APPLICATIONS[a]
                            ? `<span class="badge app">
                                ${APPLICATIONS[a].label}
                               </span>`
                            : ''
                    ).join('')}
                </div>
            ` : ''}

            ${site.appKeywords?.length ? `
                <div class="pop-keywords">
                    ${site.appKeywords.map(k => `
                        <span class="kw-tag">${k}</span>
                    `).join('')}
                </div>
            ` : ''}

            <div class="pop-desc">
                ${site.desc || ''}
            </div>

            ${years !== null ? `
                <div class="pop-years">
                    Founded ${site.founded}
                    ·
                    ${years} year${years === 1 ? '' : 's'} in the field
                </div>
            ` : ''}

            ${site.site ? `
                <a
                    class="pop-link"
                    href="${site.site}"
                    target="_blank"
                    rel="noopener">
                    Visit website ↗
                </a>
            ` : ''}

            <button
                class="btn secondary site-edit-btn"
                data-site-id="${site.id}"
                type="button">
                Edit site details
            </button>

        </div>
    `;
}

function constrainPopupDimensions() {
    const popupEl = document.querySelector('.leaflet-popup-content');
    const wrapperEl = document.querySelector('.leaflet-popup-content-wrapper');
    if (!popupEl) return;

    const maxPopupWidth = Math.min(290, Math.max(220, window.innerWidth - 32));
    const maxPopupHeight = Math.min(440, Math.max(220, window.innerHeight * 0.58));

    popupEl.style.width = `${maxPopupWidth}px`;
    popupEl.style.maxWidth = `${maxPopupWidth}px`;
    popupEl.style.maxHeight = `${maxPopupHeight}px`;
    popupEl.style.overflowY = 'auto';
    popupEl.style.overflowX = 'hidden';

    if (wrapperEl) {
        wrapperEl.style.maxWidth = `${Math.min(320, window.innerWidth - 24)}px`;
        wrapperEl.style.overflow = 'hidden';
    }
}

/* Testing function to render markers without popups for debugging the issue */
/*
function renderMarkers() {
    Object.values(markers).forEach(m => map.removeLayer(m));
    markers = {};

    sites.forEach(site => {

        const m = L.marker(
            [site.lat, site.lng],
            {
                icon: makeIcon(site)
            }
        ).addTo(map);

        m.bindPopup(
            `<div style="padding:20px; background:white; color:black;">
                <h3>${site.name}</h3>
                <p>TEST POPUP WORKING</p>
            </div>`,
            {
                maxWidth: 300,
                autoPan: true
            }
        );

        markers[site.id] = m;
    });
}*/

function renderMarkers() {
    Object.values(markers).forEach(m => map.removeLayer(m));
    markers = {};
    sites.forEach(site => {
        const tiers = getSiteTiers(site);
        if (!tiers.length || !tiers.some(tier => activeTiers.has(tier))) return;
        if (!activeTypes.has(site.type)) return;
        const subfieldKeys = getSiteSubfieldKeys(site);
        if (subfieldKeys.length && !subfieldKeys.some(key => activeSubfields.has(key))) return;
        if (site.applications && site.applications.length && !site.applications.some(a => activeApplications.has(a))) return;
        const m = L.marker([site.lat, site.lng], {
            icon: makeIcon(site)
        }).addTo(map);

        /*m.bindPopup(`
           <div class="pop">
                <div class="pop-name">${site.name}</div>
                <div class="pop-city">${site.city || ''}</div>
                <div class="pop-desc">${site.desc || ''}</div>
            </div>
            `, {
                maxWidth: 320
            });*/
        m.bindPopup(popupHtml(site));
        m.on('popupopen', () => {
            constrainPopupDimensions();
            const button = document.querySelector(`.site-edit-btn[data-site-id="${site.id}"]`);
            if (!button) return;
            button.addEventListener('click', () => {
                populateSiteForm(site);
                document.querySelector('.tab-btn[data-tab="add"]').click();
            });
        });
        
        markers[site.id] = m;
    });
}

function renderLegend() {
    renderTierList();
    renderTypeList();
    renderApplicationList();
}

function renderTierList() {
    const counts = {};
    const subCounts = {};
    Object.keys(TIERS).forEach(t => counts[t] = 0);
    sites.forEach(s => {
        getSiteTiers(s).forEach(tier => {
            if (counts[tier] !== undefined) counts[tier]++;
        });
        getSiteSubfieldEntries(s).forEach(({ tier, subfield }) => {
            const k = `${tier}|${subfield}`;
            subCounts[k] = (subCounts[k] || 0) + 1;
        });
    });

    const el = document.getElementById('tierList');
    const sortedTiers = Object.entries(TIERS).sort((a, b) => a[1].order - b[1].order);
    el.innerHTML = sortedTiers.map(([key, t]) => `
    <div class="tier-row ${activeTiers.has(key)?'':'off'}" data-tier="${key}" style="color:${t.color}">
      <span class="tier-num" style="background:${t.color}">${t.order}</span>
      <span style="color:var(--text)">${t.label}</span>
      <span class="cnt">${counts[key]}</span>
    </div>
    <div class="subfield-row">
      ${t.subfields.map(sf=>{
        const skey = `${key}|${sf}`;
        const n = subCounts[skey] || 0;
        return `<span class="subfield-chip ${activeSubfields.has(skey)?'':'off'}" data-subkey="${skey}" style="border-color:${t.color}66">${sf}${n?` (${n})`:''}</span>`;
      }).join('')}
    </div>`).join('');
    el.querySelectorAll('.tier-row').forEach(row => {
        row.addEventListener('click', () => {
            const key = row.dataset.tier;
            if (activeTiers.has(key)) activeTiers.delete(key);
            else activeTiers.add(key);
            renderLegend();
            renderMarkers();
        });
    });
    el.querySelectorAll('.subfield-chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = chip.dataset.subkey;
            if (activeSubfields.has(key)) activeSubfields.delete(key);
            else activeSubfields.add(key);
            renderLegend();
            renderMarkers();
        });
    });
}

function renderTypeList() {
    const counts = {};
    Object.keys(TYPE_LABEL).forEach(t => counts[t] = 0);
    sites.forEach(s => {
        if (counts[s.type] !== undefined) counts[s.type]++;
    });

    const el = document.getElementById('typeList');
    el.innerHTML = Object.entries(TYPE_LABEL).map(([key, label]) => `
    <div class="type-row ${activeTypes.has(key)?'':'off'}" data-type="${key}">
      <span class="type-shape"><svg width="15" height="15" viewBox="0 0 22 22">${TYPE_SHAPE_SVG[key]}</svg></span>
      <span style="color:var(--text)">${label}</span>
      <span class="cnt">${counts[key]}</span>
    </div>`).join('');
    el.querySelectorAll('.type-row').forEach(row => {
        row.addEventListener('click', () => {
            const key = row.dataset.type;
            if (activeTypes.has(key)) activeTypes.delete(key);
            else activeTypes.add(key);
            renderLegend();
            renderMarkers();
        });
    });
}

function renderApplicationList() {
    const counts = {};
    Object.keys(APPLICATIONS).forEach(a => counts[a] = 0);
    sites.forEach(s => {
        (s.applications || []).forEach(a => {
            if (counts[a] !== undefined) counts[a]++;
        });
    });

    const el = document.getElementById('appList');
    const sortedApps = Object.entries(APPLICATIONS).sort((a, b) => a[1].label.localeCompare(b[1].label));
    el.innerHTML = sortedApps.map(([key, a]) => `
    <div class="type-row ${activeApplications.has(key)?'':'off'}" data-app="${key}">
      <span style="color:var(--text)">${a.label}</span>
      <span class="cnt">${counts[key]}</span>
    </div>`).join('');
    el.querySelectorAll('[data-app]').forEach(row => {
        row.addEventListener('click', () => {
            const key = row.dataset.app;
            if (activeApplications.has(key)) activeApplications.delete(key);
            else activeApplications.add(key);
            renderLegend();
            renderMarkers();
        });
    });

    const total = Object.keys(APPLICATIONS).length;
    const activeCount = activeApplications.size;
    const summaryEl = document.getElementById('appDropdownSummary');
    summaryEl.textContent = activeCount === total ?
        `All ${total} domains shown — click to filter` :
        activeCount === 0 ?
        'No domains selected — click to filter' :
        `${activeCount} of ${total} domains shown — click to filter`;
}

/* Applications dropdown open/close */
const appDropdownToggle = document.getElementById('appDropdownToggle');
const appDropdownSummaryEl = document.getElementById('appDropdownSummary');
const appDropdownArrow = document.getElementById('appDropdownArrow');
const appListBody = document.getElementById('appList');

function toggleAppDropdown() {
    const isOpen = appListBody.classList.toggle('open');
    appDropdownArrow.classList.toggle('open', isOpen);
}
appDropdownToggle.addEventListener('click', toggleAppDropdown);
appDropdownSummaryEl.addEventListener('click', toggleAppDropdown);

/* ---------------- TABS ---------------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

/* ---------------- ADD SITE ---------------- */
/*
map.on('click', (e) => {
    const clickPoint = map.latLngToContainerPoint(e.latlng);
    const hitMarker = Object.values(markers).some(marker => {
        const markerPoint = map.latLngToContainerPoint(marker.getLatLng());
        return Math.hypot(clickPoint.x - markerPoint.x, clickPoint.y - markerPoint.y) < 18;
    });
    if (hitMarker) {
        return;
    }

    const target = e.originalEvent && e.originalEvent.target;
    if (target && (
        target.closest('.leaflet-popup') ||
        target.closest('.leaflet-popup-content') ||
        target.closest('.leaflet-popup-close-button') ||
        target.closest('.site-edit-btn')
    )) {
        return;
    }

    clickedLatLng = e.latlng;
    document.getElementById('f-lat').value = e.latlng.lat.toFixed(5);
    document.getElementById('f-lng').value = e.latlng.lng.toFixed(5);
    document.querySelector('.tab-btn[data-tab="add"]').click();
});*/

function parseGoogleMapsCoordinates(url) {
    try {
        const parsed = new URL(url);
        const raw = parsed.searchParams.get('q') || parsed.searchParams.get('query') || parsed.searchParams.get('ll');
        if (raw && /-?\d+(?:\.\d+)?[,\s]-?\d+(?:\.\d+)?/.test(raw)) {
            const [lat, lng] = raw.split(/[\s,]+/).map(Number).filter(v => Number.isFinite(v));
            if (lat && lng) return { lat, lng, city: '' };
        }

        const text = `${parsed.pathname || ''} ${parsed.search || ''}`;
        const match = text.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/i) ||
            text.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/i);
        if (match) {
            const [, lat, lng] = match;
            const city = (raw && !/^-?\d/.test(raw) ? raw : '').replace(/\+/g, ' ').trim();
            return { lat: Number(lat), lng: Number(lng), city };
        }

        if (raw && /@/.test(raw)) {
            const latLngMatch = raw.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/i);
            if (latLngMatch) {
                const city = (!/^-?\d/.test(raw) ? raw : '').replace(/\+/g, ' ').trim();
                return { lat: Number(latLngMatch[1]), lng: Number(latLngMatch[2]), city };
            }
        }

        if (raw && !/^-?\d/.test(raw)) {
            return { lat: null, lng: null, city: raw.replace(/\+/g, ' ').trim() };
        }
    } catch (e) {
        // ignored; handled by the fallback path below.
    }
    return null;
}

async function resolveGoogleMapsShareUrl(url) {
    const trimmed = (url || '').trim();
    if (!trimmed) return null;

    const lower = trimmed.toLowerCase();
    const isGoogleMapsShare = /maps\.app\.goo\.gl|maps\.google\.|google\.[a-z]+\/maps|goo\.gl\/maps/.test(lower);
    if (!isGoogleMapsShare) return null;

    const directCoords = parseGoogleMapsCoordinates(trimmed);
    if (directCoords && (Number.isFinite(directCoords.lat) || Number.isFinite(directCoords.lng))) {
        return directCoords;
    }

    try {
        const response = await fetch(trimmed, { method: 'GET', redirect: 'follow' });
        const finalUrl = response.url || trimmed;
        const resolved = parseGoogleMapsCoordinates(finalUrl);
        if (resolved && (Number.isFinite(resolved.lat) || Number.isFinite(resolved.lng))) {
            return resolved;
        }
    } catch (e) {
        // Browser CORS / redirect restrictions block many Google Maps short links, so fallback to a proxy.
    }

    try {
        const proxyUrl = `https://r.jina.ai/http://${trimmed.replace(/^https?:\/\//i, '')}`;
        const response = await fetch(proxyUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0'
            }
        });
        if (!response.ok) return null;
        const html = await response.text();
        const shortText = `${html} ${trimmed}`;
        const match = shortText.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/i) ||
            shortText.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/i) ||
            shortText.match(/[?&](?:q|query|ll)=([^&]+)/i);
        if (match) {
            if (match[1] && match[2]) {
                return { lat: Number(match[1]), lng: Number(match[2]), city: '' };
            }
            const raw = decodeURIComponent(match[1] || '').replace(/\+/g, ' ');
            if (raw.includes(',')) {
                const parts = raw.split(',').map(p => Number(p.trim())).filter(v => Number.isFinite(v));
                if (parts.length >= 2) {
                    return { lat: parts[0], lng: parts[1], city: '' };
                }
            }
        }
    } catch (e) {
        return null;
    }

    return null;
}

function extractCityFromAddress(address) {
    if (!address || typeof address !== 'object') return '';
    const cityCandidates = [
        address.city,
        address.town,
        address.village,
        address.hamlet,
        address.municipality,
        address.suburb,
        address.county,
        address.state,
        address.country
    ];
    return cityCandidates.find(value => value && value.trim()) || '';
}

function inferSiteNameFromQuery(query, result) {
    const queryName = (query || '').trim();
    if (!queryName) return '';
    if (/^https?:\/\//i.test(queryName)) return '';

    if (result && result.address) {
        const nameCandidates = [
            result.address.amenity,
            result.address.building,
            result.address.cafe,
            result.address.restaurant,
            result.address.school,
            result.address.hospital,
            result.address.university,
            result.address.office,
            result.name
        ];
        const match = nameCandidates.find(value => value && value.trim());
        if (match) return String(match).trim();
    }

    const cleaned = queryName.replace(/\s*,\s*.*$/, '').trim();
    return cleaned || '';
}

function inferWebsiteFromQuery(query, result) {
    const trimmed = (query || '').trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    if (result && result.licence) {
        const domain = result.display_name && /https?:\/\/[^\s]+/i.test(result.display_name) ? result.display_name.match(/https?:\/\/[^\s]+/i)[0] : '';
        if (domain) return domain;
    }
    return '';
}

function applyAutoFilledSiteData(resultData) {
    const nameField = document.getElementById('f-name');
    const cityField = document.getElementById('f-city');
    const websiteField = document.getElementById('f-site');
    const foundedField = document.getElementById('f-founded');
    const descField = document.getElementById('f-desc');
    const latField = document.getElementById('f-lat');
    const lngField = document.getElementById('f-lng');

    if (resultData.name && !nameField.value.trim()) {
        nameField.value = resultData.name;
    }
    if (resultData.city && !cityField.value.trim()) {
        cityField.value = resultData.city;
    }
    if (resultData.website && !websiteField.value.trim()) {
        websiteField.value = resultData.website;
    }
    if (resultData.founded && foundedField && !foundedField.value.trim()) {
        foundedField.value = resultData.founded;
    }
    if (resultData.desc && descField && !descField.value.trim()) {
        descField.value = resultData.desc;
    }
    if (Number.isFinite(resultData.lat) && !latField.value.trim()) {
        latField.value = Number(resultData.lat).toFixed(5);
    }
    if (Number.isFinite(resultData.lng) && !lngField.value.trim()) {
        lngField.value = Number(resultData.lng).toFixed(5);
    }
}

function normalizeMetadataText(value) {
    return (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
}

function extractMetadataFromText(rawText, fallbackUrl = '') {
    const text = normalizeMetadataText(rawText || '');
    if (!text) {
        return {};
    }

    const titleMatch = text.match(/(?:^|\n)Title:\s*([^\n]+)/i);
    const title = titleMatch ? normalizeMetadataText(titleMatch[1]
        .replace(/\s+(?:URL Source|Published Time|Warning|Markdown Content):.*$/gi, '')
        .replace(/\s*[-|–]\s*.*$/, '')) : '';

    const urlSourceMatch = text.match(/URL Source:\s*(https?:\/\/[^\s]+)/i);
    const website = urlSourceMatch ? urlSourceMatch[1].trim() : fallbackUrl;

    const markdownIndex = text.indexOf('Markdown Content:');
    const markdownText = markdownIndex >= 0 ? text.slice(markdownIndex + 'Markdown Content:'.length) : text;
    const cleanedMarkdown = markdownText
        .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
        .replace(/https?:\/\/[^\s]+/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim();

    const description = cleanedMarkdown
        ? cleanedMarkdown.split(/(?<=[.!?])\s+/).find(part => part.length > 20) || cleanedMarkdown.slice(0, 220)
        : '';

    const foundedMatch = text.match(/(?:founded|established|founded in|founded in\s+the year|est\.|year founded)\s*[: ]*(\d{4})/i) ||
        text.match(/\b(?:since|year)\s*[: ]*(\d{4})\b/i);
    const founded = foundedMatch ? foundedMatch[1] : '';

    return {
        name: title || '',
        website: website || '',
        desc: description || '',
        founded: founded || ''
    };
}

async function fetchSiteMetadata(website) {
    const trimmed = (website || '').trim();
    if (!trimmed) {
        return {};
    }

    try {
        const parsedUrl = new URL(trimmed.includes('://') ? trimmed : `https://${trimmed}`);
        const target = `${parsedUrl.hostname}${parsedUrl.port ? ':' + parsedUrl.port : ''}${parsedUrl.pathname || ''}${parsedUrl.search || ''}`;
        const candidateUrls = [
            `https://r.jina.ai/http://${target}`,
            `https://r.jina.ai/http://https://${target}`
        ];

        for (const proxyUrl of candidateUrls) {
            try {
                const response = await fetch(proxyUrl, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0'
                    }
                });
                if (!response.ok) continue;

                const content = await response.text();
                const metadata = extractMetadataFromText(content, parsedUrl.href);
                if (metadata.name || metadata.website || metadata.desc || metadata.founded) {
                    return metadata;
                }
            } catch (e) {
                console.warn('Metadata fetch failed for proxy URL:', proxyUrl, e);
            }
        }
    } catch (e) {
        console.warn('Website metadata lookup rejected the URL:', trimmed, e);
    }

    return {};
}

async function lookupLocationCoordinates() {
    const explicitQuery = document.getElementById('f-location-search').value.trim();
    const siteName = document.getElementById('f-name').value.trim();
    const cityValue = document.getElementById('f-city').value.trim();
    const combinedQuery = [explicitQuery || siteName, cityValue].filter(Boolean).join(', ');
    const query = combinedQuery || explicitQuery;

    if (!query) {
        alert('Enter the site website, exact site name, city, or a Google Maps link so we can find the details.');
        return;
    }

    const statusText = document.getElementById('publishStatus') || null;
    if (statusText) statusText.textContent = 'Looking up the site details…';

    try {
        const websiteField = document.getElementById('f-site');
        const nameField = document.getElementById('f-name');
        const cityField = document.getElementById('f-city');
        const foundedField = document.getElementById('f-founded');
        const descField = document.getElementById('f-desc');

        if (/^https?:\/\//i.test(query) && websiteField && !websiteField.value.trim()) {
            websiteField.value = query.trim();
        }

        const websiteMetadata = (websiteField && websiteField.value.trim() && /^https?:\/\//i.test(websiteField.value.trim())) ? await fetchSiteMetadata(websiteField.value.trim()) : {};

        const mapShareCoords = await resolveGoogleMapsShareUrl(query);
        if (mapShareCoords) {
            if (Number.isFinite(mapShareCoords.lat) && Number.isFinite(mapShareCoords.lng)) {
                document.getElementById('f-lat').value = Number(mapShareCoords.lat).toFixed(5);
                document.getElementById('f-lng').value = Number(mapShareCoords.lng).toFixed(5);
            }
            if (mapShareCoords.city && cityField && !cityField.value.trim()) {
                cityField.value = mapShareCoords.city;
            }
            if (!nameField.value.trim() && explicitQuery && !/^https?:\/\//i.test(explicitQuery)) {
                nameField.value = explicitQuery.split(',')[0].trim();
            }
            if (websiteMetadata.name && !nameField.value.trim()) {
                nameField.value = websiteMetadata.name;
            }
            if (websiteMetadata.website && websiteField && !websiteField.value.trim()) {
                websiteField.value = websiteMetadata.website;
            }
            if (websiteMetadata.founded && foundedField && !foundedField.value.trim()) {
                foundedField.value = websiteMetadata.founded;
            }
            if (websiteMetadata.desc && descField && !descField.value.trim()) {
                descField.value = websiteMetadata.desc;
            }
            if (statusText) statusText.textContent = 'Google Maps site details filled.';
            return;
        }

        const searchQueries = Array.from(new Set([
            query,
            explicitQuery,
            siteName,
            cityValue,
            (siteName && cityValue) ? `${siteName}, ${cityValue}` : '',
            (siteName && cityValue) ? `${cityValue}, ${siteName}` : '',
            cityValue || siteName || ''
        ].filter(Boolean)));

        let match = null;
        for (const searchQuery of searchQueries) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&addressdetails=1&q=${encodeURIComponent(searchQuery)}`, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            if (!response.ok) continue;
            const results = await response.json();
            if (results && results.length) {
                match = results.find(item => item.type !== 'city') || results[0];
                break;
            }
        }

        if (!match) {
            const fallbackResult = {
                name: websiteMetadata.name || '',
                city: cityValue || '',
                website: websiteField && websiteField.value.trim() ? websiteField.value.trim() : websiteMetadata.website || '',
                founded: websiteMetadata.founded || '',
                desc: websiteMetadata.desc || ''
            };
            if (fallbackResult.name || fallbackResult.website || fallbackResult.founded || fallbackResult.desc) {
                applyAutoFilledSiteData(fallbackResult);
                if (statusText) statusText.textContent = 'Website metadata was filled from the provided URL.';
                return;
            }
            const shortMapsLink = /maps\.app\.goo\.gl|goo\.gl\/maps/i.test((explicitQuery || query || '').toLowerCase());
            if (shortMapsLink) {
                alert('That Google Maps share link could not be resolved directly in the browser. Please paste the full Google Maps URL or use the site name + city instead.');
            } else {
                alert('No matching site was found. Try the website, full name + city, or a Google Maps link.');
            }
            return;
        }

        const cityFromAddress = extractCityFromAddress(match.address);
        const inferredName = inferSiteNameFromQuery(searchQueries[0], match);
        const inferredWebsite = inferWebsiteFromQuery(searchQueries[0], match);

        const metadataResult = {
            name: inferredName || websiteMetadata.name || '',
            city: cityFromAddress || '',
            website: inferredWebsite || websiteMetadata.website || (websiteField ? websiteField.value.trim() : ''),
            founded: websiteMetadata.founded || '',
            desc: websiteMetadata.desc || '',
            lat: Number(match.lat),
            lng: Number(match.lon)
        };

        applyAutoFilledSiteData(metadataResult);

        if (!document.getElementById('f-lat').value.trim()) {
            document.getElementById('f-lat').value = Number(match.lat).toFixed(5);
        }
        if (!document.getElementById('f-lng').value.trim()) {
            document.getElementById('f-lng').value = Number(match.lon).toFixed(5);
        }

        if (statusText) statusText.textContent = 'Site details filled from the search result. You can adjust any field before saving.';
    } catch (error) {
        console.error(error);
        alert('Could not find that site. Please use the website, name + city, or a Google Maps link, or enter lat/lng manually.');
    }
}

document.getElementById('locationLookupBtn').addEventListener('click', lookupLocationCoordinates);
document.getElementById('f-location-search').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        lookupLocationCoordinates();
    }
});
document.getElementById('f-name').addEventListener('blur', () => {
    const siteName = document.getElementById('f-name').value.trim();
    const city = document.getElementById('f-city').value.trim();
    if (!siteName || !city) return;
    const currentLat = document.getElementById('f-lat').value.trim();
    const currentLng = document.getElementById('f-lng').value.trim();
    if (currentLat || currentLng) return;
    lookupLocationCoordinates();
});

document.getElementById('f-site').addEventListener('blur', async () => {
    const website = document.getElementById('f-site').value.trim();
    if (!website || !/^https?:\/\//i.test(website)) return;

    const metadata = await fetchSiteMetadata(website);
    if (!metadata || Object.keys(metadata).length === 0) return;

    const nameField = document.getElementById('f-name');
    const foundedField = document.getElementById('f-founded');
    const descField = document.getElementById('f-desc');

    if (metadata.name && !nameField.value.trim()) {
        nameField.value = metadata.name;
    }
    if (metadata.founded && foundedField && !foundedField.value.trim()) {
        foundedField.value = metadata.founded;
    }
    if (metadata.desc && descField && !descField.value.trim()) {
        descField.value = metadata.desc;
    }
});

/* ---------------- CATEGORY → SUB-FIELD MULTISELECT ---------------- */
const fTierGrid = document.getElementById('f-tier');
const fSubfieldGrid = document.getElementById('f-subfield');

function getCheckedGridValues(container) {
    return Array.from(container.querySelectorAll('input:checked')).map(cb => cb.value);
}

function normalizeSiteText(value) {
    return (value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function normalizeSiteUrl(value) {
    const text = (value || '').trim();
    if (!text) return '';
    try {
        return new URL(text.includes('://') ? text : `https://${text}`).hostname.replace(/^www\./i, '').toLowerCase();
    } catch (e) {
        return normalizeSiteText(text);
    }
}

function isSiteDuplicate(candidate) {
    const candidateName = normalizeSiteText(candidate.name);
    const candidateWebsite = normalizeSiteUrl(candidate.site);
    const candidateLat = Number(candidate.lat);
    const candidateLng = Number(candidate.lng);

    return sites.some(existing => {
        const existingName = normalizeSiteText(existing.name);
        const existingWebsite = normalizeSiteUrl(existing.site);
        const existingLat = Number(existing.lat);
        const existingLng = Number(existing.lng);

        const nameMatch = candidateName && existingName && candidateName === existingName;
        const websiteMatch = candidateWebsite && existingWebsite && candidateWebsite === existingWebsite;
        const sameLocation = Number.isFinite(candidateLat) && Number.isFinite(candidateLng) && Number.isFinite(existingLat) && Number.isFinite(existingLng) &&
            Math.abs(candidateLat - existingLat) < 0.0005 && Math.abs(candidateLng - existingLng) < 0.0005;

        return nameMatch || websiteMatch || sameLocation;
    });
}

function findMatchingSite(candidate, ignoreId = null) {
    return sites.find(existing => {
        if (ignoreId && existing.id === ignoreId) return false;
        const candidateName = normalizeSiteText(candidate.name);
        const existingName = normalizeSiteText(existing.name);
        const candidateWebsite = normalizeSiteUrl(candidate.site);
        const existingWebsite = normalizeSiteUrl(existing.site);
        const candidateLat = Number(candidate.lat);
        const candidateLng = Number(candidate.lng);
        const existingLat = Number(existing.lat);
        const existingLng = Number(existing.lng);

        const nameMatch = candidateName && existingName && candidateName === existingName;
        const websiteMatch = candidateWebsite && existingWebsite && candidateWebsite === existingWebsite;
        const sameLocation = Number.isFinite(candidateLat) && Number.isFinite(candidateLng) && Number.isFinite(existingLat) && Number.isFinite(existingLng) &&
            Math.abs(candidateLat - existingLat) < 0.0005 && Math.abs(candidateLng - existingLng) < 0.0005;

        return nameMatch || websiteMatch || sameLocation;
    });
}

function summarizeSiteDetails(site) {
    const lines = [site.name || 'Untitled site'];
    if (site.city) lines.push(`City: ${site.city}`);
    if (site.site) lines.push(`Website: ${site.site}`);
    if (Number.isFinite(Number(site.lat)) && Number.isFinite(Number(site.lng))) {
        lines.push(`Location: ${Number(site.lat).toFixed(5)}, ${Number(site.lng).toFixed(5)}`);
    }
    return lines.join('\n');
}

function renderTierGrid() {
    fTierGrid.innerHTML = Object.entries(TIERS)
        .sort((a, b) => a[1].order - b[1].order)
        .map(([key, tier]) => `
        <label class="app-checkbox-row">
          <input type="checkbox" value="${key}" ${key === 'human_science' ? 'checked' : ''}> ${tier.label}
        </label>`).join('');
    renderSubfieldGrid();
}

function renderSubfieldGrid(selectedValues = []) {
    const selectedTiers = getCheckedGridValues(fTierGrid);
    const tierOptions = selectedTiers.length ?
        selectedTiers.flatMap(tierKey => TIERS[tierKey].subfields.map(subfield => ({ tierKey, subfield }))) :
        [];
    const selectedSet = new Set(selectedValues);

    fSubfieldGrid.innerHTML = tierOptions.length ? tierOptions.map(({ tierKey, subfield }) => `
        <label class="app-checkbox-row">
          <input type="checkbox" value="${tierKey}|${subfield}" ${selectedSet.has(`${tierKey}|${subfield}`) || selectedSet.size === 0 ? 'checked' : ''}> ${subfield}
        </label>`).join('') : `
        <div class="app-checkbox-row" style="color:var(--text-dim)">Select one or more categories to choose sub-fields.</div>`;
}

function populateSiteForm(site) {
    const selectedTiers = site.tiers && site.tiers.length ? site.tiers : (site.tier ? [site.tier] : [Object.keys(TIERS)[0]]);
    renderTierGrid();
    fTierGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = selectedTiers.includes(cb.value);
    });

    const selectedSubValues = (site.subfields && site.subfields.length ? site.subfields : (site.subfield && site.tier ? [{ tier: site.tier, subfield: site.subfield }] : []))
        .map(item => `${item.tier || site.tier}|${item.subfield}`)
        .filter(Boolean);
    renderSubfieldGrid(selectedSubValues);

    document.getElementById('f-name').value = site.name || '';
    document.getElementById('f-city').value = site.city || '';
    document.getElementById('f-lat').value = site.lat != null ? Number(site.lat).toFixed(5) : '';
    document.getElementById('f-lng').value = site.lng != null ? Number(site.lng).toFixed(5) : '';
    document.getElementById('f-type').value = site.type || 'lab';
    document.getElementById('f-founded').value = site.founded || '';
    document.getElementById('f-site').value = site.site || '';
    document.getElementById('f-desc').value = site.desc || '';
    document.getElementById('f-keywords').value = (site.appKeywords || []).join(', ');
    document.getElementById('f-location-search').value = site.city || '';

    fAppGrid.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = (site.applications || []).includes(cb.value);
    });

    editingSiteId = site.id;
    const addBtn = document.getElementById('addBtn');
    addBtn.textContent = 'Save changes';

    const editFormHeader = document.getElementById('edit-form-header');
    if (editFormHeader) {
        editFormHeader.textContent = `Editing: ${site.name || 'Selected site'}`;
        editFormHeader.style.display = 'block';
    }

    const deleteSiteBtn = document.getElementById('deleteSiteBtn');
    if (deleteSiteBtn) {
        deleteSiteBtn.style.display = 'inline-block';
        deleteSiteBtn.dataset.siteId = site.id;
    }
}

fTierGrid.addEventListener('change', (event) => {
    if (event.target.matches('input[type="checkbox"]')) {
        renderSubfieldGrid();
    }
});
renderTierGrid();

/* ---------------- APPLICATIONS CHECKBOX GRID ---------------- */
const fAppGrid = document.getElementById('f-applications');
fAppGrid.innerHTML = Object.entries(APPLICATIONS)
    .sort((a, b) => a[1].label.localeCompare(b[1].label))
    .map(([key, a]) => `
    <label class="app-checkbox-row">
      <input type="checkbox" value="${key}"> ${a.label}
    </label>`).join('');

async function enrichSiteDetails(site) {
    if (!site || !site.site) return site;

    const website = (site.site || '').trim();
    if (!website || !/^https?:\/\//i.test(website)) return site;

    try {
        const metadata = await fetchSiteMetadata(website);
        if (!metadata || Object.keys(metadata).length === 0) return site;

        return {
            ...site,
            name: site.name || metadata.name || site.name,
            site: site.site || metadata.website || site.site,
            city: site.city || '',
            founded: site.founded || metadata.founded || site.founded,
            desc: site.desc || metadata.desc || site.desc,
            websiteMetadata: metadata
        };
    } catch (error) {
        console.warn('Site metadata enrichment failed:', error);
        return site;
    }
}

document.getElementById('deleteSiteBtn').addEventListener('click', async () => {
    if (!editingSiteId) return;

    const siteToDelete = sites.find(site => site.id === editingSiteId);
    if (!siteToDelete) {
        alert('This site could not be found to delete.');
        return;
    }

    const confirmed = confirm(`Delete "${siteToDelete.name || 'this site'}" from the map? This cannot be undone.`);
    if (!confirmed) return;

    sites = sites.filter(site => site.id !== editingSiteId);
    await saveData();
    renderLegend();
    renderMarkers();
    resetAddForm();
    alert('Site deleted.');
});

document.getElementById('addBtn').addEventListener('click', async () => {
    const name = document.getElementById('f-name').value.trim();
    const website = document.getElementById('f-site').value.trim();
    const lat = parseFloat(document.getElementById('f-lat').value);
    const lng = parseFloat(document.getElementById('f-lng').value);

    if (!name) {
        alert('Name is required.');
        return;
    }
    if (!website) {
        alert('Website is required.');
        return;
    }
    if (isNaN(lat) || isNaN(lng)) {
        alert('Location is required: latitude and longitude must be provided.');
        return;
    }

    try {
        new URL(website.includes('://') ? website : `https://${website}`);
    } catch (e) {
        alert('Website must be a valid URL, for example https://example.com');
        return;
    }

    const tiers = getCheckedGridValues(fTierGrid);
    if (!tiers.length) {
        alert('Please select at least one category for this site.');
        return;
    }

    const subfields = getCheckedGridValues(fSubfieldGrid).map(value => {
        const [tierKey, ...rest] = value.split('|');
        return {
            tier: tierKey,
            subfield: rest.join('|')
        };
    }).filter(item => item.subfield && TIERS[item.tier]);

    const applications = Array.from(fAppGrid.querySelectorAll('input:checked')).map(cb => cb.value);
    const appKeywords = document.getElementById('f-keywords').value.split(',').map(s => s.trim()).filter(Boolean);
    const site = {
        id: editingSiteId || 'user-' + Date.now(),
        name,
        lat,
        lng,
        city: document.getElementById('f-city').value.trim(),
        tier: tiers[0],
        subfield: (subfields[0] && subfields[0].subfield) || '',
        tiers,
        subfields,
        type: document.getElementById('f-type').value,
        founded: document.getElementById('f-founded').value.trim(),
        site: website,
        desc: document.getElementById('f-desc').value.trim(),
        applications,
        appKeywords,
    };

    const enrichedSite = await enrichSiteDetails(site);
    if (editingSiteId) {
        const existingIndex = sites.findIndex(item => item.id === editingSiteId);
        if (existingIndex === -1) {
            alert('The selected site could not be found for updating.');
            return;
        }
        const duplicate = findMatchingSite(enrichedSite, editingSiteId);
        if (duplicate) {
            const message = `A similar site already exists:\n\n${summarizeSiteDetails(duplicate)}\n\nThis would create a duplicate. Please confirm whether you want to keep the existing record and discard the update.`;
            if (!confirm(message)) return;
        }
        sites[existingIndex] = {
            ...sites[existingIndex],
            ...enrichedSite,
            id: editingSiteId,
            name: enrichedSite.name || sites[existingIndex].name,
            site: enrichedSite.site || sites[existingIndex].site,
            city: enrichedSite.city || sites[existingIndex].city,
            lat: (enrichedSite.lat !== null && typeof enrichedSite.lat !== 'undefined') ? enrichedSite.lat : sites[existingIndex].lat,
            lng: (enrichedSite.lng !== null && typeof enrichedSite.lng !== 'undefined') ? enrichedSite.lng : sites[existingIndex].lng,
            tier: enrichedSite.tier || sites[existingIndex].tier,
            tiers: enrichedSite.tiers && enrichedSite.tiers.length ? enrichedSite.tiers : (sites[existingIndex].tiers || [sites[existingIndex].tier]),
            subfield: enrichedSite.subfield || sites[existingIndex].subfield,
            subfields: enrichedSite.subfields && enrichedSite.subfields.length ? enrichedSite.subfields : (sites[existingIndex].subfields || (sites[existingIndex].subfield ? [{ tier: sites[existingIndex].tier, subfield: sites[existingIndex].subfield }] : [])),
            type: enrichedSite.type || sites[existingIndex].type,
            founded: enrichedSite.founded || sites[existingIndex].founded,
            desc: enrichedSite.desc || sites[existingIndex].desc,
            applications: enrichedSite.applications && enrichedSite.applications.length ? enrichedSite.applications : (sites[existingIndex].applications || []),
            appKeywords: enrichedSite.appKeywords && enrichedSite.appKeywords.length ? enrichedSite.appKeywords : (sites[existingIndex].appKeywords || [])
        };
        await saveData();
        renderLegend();
        renderMarkers();
        map.setView([sites[existingIndex].lat, sites[existingIndex].lng], 11);
        resetAddForm();
        alert('Site details were updated.');
        return;
    }

    const duplicate = isSiteDuplicate(enrichedSite);
    if (duplicate) {
        const existing = findMatchingSite(enrichedSite);
        if (!existing) {
            alert('A matching site already exists. No duplicate was added.');
            return;
        }

        const message = `A similar site already exists:\n\n${summarizeSiteDetails(existing)}\n\nDo you want to update this existing site with the new details?`;
        const shouldUpdate = confirm(message);
        if (!shouldUpdate) return;

        const mergedSite = {
            ...existing,
            ...enrichedSite,
            id: existing.id,
            name: enrichedSite.name || existing.name,
            site: enrichedSite.site || existing.site,
            city: enrichedSite.city || existing.city,
            lat: (enrichedSite.lat !== null && typeof enrichedSite.lat !== 'undefined') ? enrichedSite.lat : existing.lat,
            lng: (enrichedSite.lng !== null && typeof enrichedSite.lng !== 'undefined') ? enrichedSite.lng : existing.lng,
            tier: enrichedSite.tier || existing.tier,
            tiers: enrichedSite.tiers && enrichedSite.tiers.length ? enrichedSite.tiers : (existing.tiers || [existing.tier]),
            subfield: enrichedSite.subfield || existing.subfield,
            subfields: enrichedSite.subfields && enrichedSite.subfields.length ? enrichedSite.subfields : (existing.subfields || (existing.subfield ? [{ tier: existing.tier, subfield: existing.subfield }] : [])),
            type: enrichedSite.type || existing.type,
            founded: enrichedSite.founded || existing.founded,
            desc: enrichedSite.desc || existing.desc,
            applications: enrichedSite.applications && enrichedSite.applications.length ? enrichedSite.applications : (existing.applications || []),
            appKeywords: enrichedSite.appKeywords && enrichedSite.appKeywords.length ? enrichedSite.appKeywords : (existing.appKeywords || [])
        };

        sites = sites.map(item => item.id === existing.id ? mergedSite : item);
        await saveData();
        renderLegend();
        renderMarkers();
        map.setView([mergedSite.lat, mergedSite.lng], 11);
        resetAddForm();
        alert('Existing site was updated with the new details.');
        return;
    }

    sites.push(enrichedSite);
    await saveData();
    renderLegend();
    renderMarkers();
    map.setView([lat, lng], 11);
    resetAddForm();
});

function resetAddForm() {
    editingSiteId = null;
    const addBtn = document.getElementById('addBtn');
    const editFormHeader = document.getElementById('edit-form-header');
    const deleteSiteBtn = document.getElementById('deleteSiteBtn');
    addBtn.textContent = 'Add to map';
    if (editFormHeader) {
        editFormHeader.textContent = '';
        editFormHeader.style.display = 'none';
    }
    if (deleteSiteBtn) {
        deleteSiteBtn.style.display = 'none';
        deleteSiteBtn.dataset.siteId = '';
    }
    ['f-name', 'f-lat', 'f-lng', 'f-city', 'f-location-search', 'f-founded', 'f-site', 'f-desc', 'f-keywords'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('f-type').value = 'lab';
    fAppGrid.querySelectorAll('input:checked').forEach(cb => cb.checked = false);
    renderTierGrid();
}

/* ---------------- EXPORT / RESET ---------------- */
document.getElementById('exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(sites, null, 2)], {
        type: 'application/json'
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'field-map-sites.json';
    a.click();
});
document.getElementById('resetBtn').addEventListener('click', async () => {
    if (!confirm('Reset to the original seed dataset? This removes any sites you added.')) return;
    sites = SEED.slice();
    await saveData();
    renderLegend();
    renderMarkers();
});

/* ---------------- IMPORT JSON ---------------- */
const importFileInput = document.getElementById('importFileInput');
const importPreview = document.getElementById('importPreview');
const importPreviewText = document.getElementById('importPreviewText');
const importStatus = document.getElementById('importStatus');
let pendingImport = null; // parsed + validated array waiting for merge/overwrite choice

function slugifyId(name, takenIds) {
    const base = (name || 'site').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'site';
    let slug = base,
        n = 2;
    while (takenIds.has(slug)) {
        slug = `${base}-${n}`;
        n++;
    }
    return slug;
}

function validateImportedArray(raw) {
    const valid = [];
    let invalidCount = 0;
    raw.forEach(item => {
        const name = (item && item.name || '').toString().trim();
        const lat = Number(item && item.lat);
        const lng = Number(item && item.lng);
        if (!name || !isFinite(lat) || !isFinite(lng)) {
            invalidCount++;
            return;
        }

        const tiers = Array.isArray(item.tiers) ? item.tiers.filter(t => TIERS[t]) : (TIERS[item.tier] ? [item.tier] : []);
        const primaryTier = tiers[0] || 'human_science';

        const subfieldEntries = Array.isArray(item.subfields) ? item.subfields : (item.subfield ? [{ tier: primaryTier, subfield: item.subfield }] : []);
        const normalizedSubfields = subfieldEntries
            .map(entry => {
                if (typeof entry === 'string') return { tier: primaryTier, subfield: entry };
                if (entry && entry.subfield && TIERS[entry.tier || primaryTier]) return { tier: entry.tier || primaryTier, subfield: entry.subfield };
                return null;
            })
            .filter(Boolean);

        valid.push({
            id: (item.id || '').toString().trim() || undefined, // filled in later if missing
            name,
            lat,
            lng,
            city: item.city || '',
            tier: primaryTier,
            subfield: (normalizedSubfields[0] && normalizedSubfields[0].subfield) || item.subfield || '',
            tiers,
            subfields: normalizedSubfields,
            type: TYPE_LABEL[item.type] ? item.type : 'lab',
            founded: item.founded !== undefined ? String(item.founded) : '',
            site: item.site || '',
            desc: item.desc || '',
            applications: Array.isArray(item.applications) ? item.applications.filter(a => APPLICATIONS[a]) : [],
            appKeywords: Array.isArray(item.appKeywords) ? item.appKeywords : [],
        });
    });
    return {
        valid,
        invalidCount
    };
}

document.getElementById('importBtn').addEventListener('click', () => {
    importFileInput.value = '';
    importFileInput.click();
});

importFileInput.addEventListener('change', () => {
    const file = importFileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        let raw;
        try {
            const parsed = JSON.parse(reader.result);
            raw = Array.isArray(parsed) ? parsed : [parsed];
        } catch (e) {
            importStatus.textContent = 'Could not parse that file as JSON.';
            return;
        }
        const {
            valid,
            invalidCount
        } = validateImportedArray(raw);
        if (valid.length === 0) {
            importStatus.textContent = `No valid sites found in that file${invalidCount ? ` (${invalidCount} entr${invalidCount===1?'y':'ies'} missing name/lat/lng)` : ''}.`;
            return;
        }
        pendingImport = valid;
        importStatus.textContent = '';
        importPreviewText.textContent = `Found ${valid.length} valid site${valid.length===1?'':'s'} in "${file.name}"` +
            (invalidCount ? ` (skipping ${invalidCount} invalid entr${invalidCount===1?'y':'ies'}).` : '.') +
            ' Choose how to apply them:';
        importPreview.style.display = 'block';
    };
    reader.readAsText(file);
});

document.getElementById('importCancelBtn').addEventListener('click', () => {
    pendingImport = null;
    importPreview.style.display = 'none';
    importStatus.textContent = 'Import cancelled.';
});

document.getElementById('importMergeBtn').addEventListener('click', async () => {
    if (!pendingImport) return;
    const existingIds = new Set(sites.map(s => s.id));
    const nameIndex = new Map(sites.map((s, i) => [s.name.trim().toLowerCase(), i]));
    let added = 0,
        updated = 0;
    pendingImport.forEach(item => {
        const key = item.name.trim().toLowerCase();
        if (nameIndex.has(key)) {
            const idx = nameIndex.get(key);
            const keepId = sites[idx].id;
            sites[idx] = {
                ...item,
                id: keepId
            };
            updated++;
        } else {
            const id = item.id && !existingIds.has(item.id) ? item.id : slugifyId(item.name, existingIds);
            existingIds.add(id);
            sites.push({
                ...item,
                id
            });
            nameIndex.set(key, sites.length - 1);
            added++;
        }
    });
    await saveData();
    renderLegend();
    renderMarkers();
    importPreview.style.display = 'none';
    pendingImport = null;
    importStatus.textContent = `Merged: added ${added}, updated ${updated}. Map now has ${sites.length} site(s).`;
});

document.getElementById('importOverwriteBtn').addEventListener('click', async () => {
    if (!pendingImport) return;
    if (!confirm(`This replaces all ${sites.length} current site(s) with the ${pendingImport.length} from this file. Continue?`)) return;
    const takenIds = new Set();
    sites = pendingImport.map(item => {
        const id = item.id && !takenIds.has(item.id) ? item.id : slugifyId(item.name, takenIds);
        takenIds.add(id);
        return {
            ...item,
            id
        };
    });
    await saveData();
    renderLegend();
    renderMarkers();
    importPreview.style.display = 'none';
    pendingImport = null;
    importStatus.textContent = `Overwrote data. Map now has ${sites.length} site(s).`;
});

const ghRepoInput = document.getElementById('gh-repo');
const ghBranchInput = document.getElementById('gh-branch');
const ghPathInput = document.getElementById('gh-path');
const ghTokenInput = document.getElementById('gh-token');
const publishStatusEl = document.getElementById('publishStatus');

function syncGitHubInputs() {
    const config = getGitHubConfig();
    ghRepoInput.value = config.owner && config.repo ? `${config.owner}/${config.repo}` : '';
    ghBranchInput.value = config.branch || 'main';
    ghPathInput.value = config.path || 'sites.json';
}

function readGitHubConfigFromInputs() {
    const repoValue = (ghRepoInput.value || '').trim();
    const [owner, repo] = repoValue.split('/').map(part => part.trim()).filter(Boolean);
    const config = {
        owner: owner || '',
        repo: repo || '',
        branch: (ghBranchInput.value || 'main').trim() || 'main',
        path: (ghPathInput.value || 'sites.json').trim() || 'sites.json'
    };
    setGitHubConfig(config);
    return config;
}

async function publishToGitHub() {
    const config = readGitHubConfigFromInputs();
    const token = (ghTokenInput.value || '').trim();
    if (!config.owner || !config.repo) {
        publishStatusEl.textContent = 'Add your GitHub owner/repo before publishing.';
        return;
    }
    if (!token) {
        publishStatusEl.textContent = 'Enter a GitHub personal access token to publish.';
        return;
    }

    publishStatusEl.textContent = 'Publishing the shared sites.json file…';
    const payload = JSON.stringify(sites, null, 2);
    const endpoint = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${config.path}`;

    try {
        const currentFile = await fetch(`${endpoint}?ref=${encodeURIComponent(config.branch)}`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        if (!currentFile.ok && currentFile.status !== 404) {
            const message = await currentFile.text();
            throw new Error(message || 'Unable to read the current GitHub file.');
        }

        const existing = currentFile.status === 404 ? null : await currentFile.json();
        const response = await fetch(endpoint, {
            method: 'PUT',
            headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': `Bearer ${token}`,
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Update sites data via map',
                branch: config.branch,
                content: encodeBase64(payload),
                sha: existing ? existing.sha : undefined
            })
        });

        if (!response.ok) {
            const message = await response.text();
            throw new Error(message || 'Publish failed.');
        }

        saveData();
        publishStatusEl.textContent = `Published ${sites.length} site(s) to ${config.owner}/${config.repo} on ${config.branch}.`;
    } catch (error) {
        publishStatusEl.textContent = `Publish failed: ${error.message}`;
    }
}

document.getElementById('publishBtn').addEventListener('click', publishToGitHub);
['gh-repo', 'gh-branch', 'gh-path'].forEach(id => document.getElementById(id).addEventListener('change', readGitHubConfigFromInputs));

/* ---------------- INIT ---------------- */
(async () => {
    syncGitHubInputs();
    await loadData();
    renderLegend();
    renderMarkers();
    if (sites.length) {
        const group = new L.featureGroup(Object.values(markers));
        if (group.getLayers().length) map.fitBounds(group.getBounds().pad(0.3));
    }
})();