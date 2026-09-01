# Human-Centered R&D Atlas

An interactive map and knowledge atlas for discovering and exploring **human-centered research, technology, and R&D organizations** across Europe and India.

This was developed as a personal project for easy navigation across all my areas of interest domains and brings together research laboratories, government organizations, startups, and private R&D groups working across **human science, interaction & AI, and systems & technology**.

---

## Objectives

The main objectives of the project are to:

- Create a visual landscape of human-centered R&D organizations.
- Discover laboratories and organizations working across multiple disciplines.
- Identify connections between human science and emerging technologies.
- Explore research opportunities across Europe and India.
- Categorize organizations according to research domain and application.
- Provide a foundation for identifying potential collaborators, research groups, internships, PhD opportunities, and R&D organizations.

---

## Research Domains

The atlas uses three primary research tiers.


### 1. Human Science 🧠🏋️

Research focused on understanding humans, cognition, performance, and neurotechnology.

![Neuroergonomics](https://img.shields.io/badge/Neuroergonomics-35d6b0?style=flat)
![Human Factors](https://img.shields.io/badge/Human%20Factors-35d6b0?style=flat)
![Human Performance](https://img.shields.io/badge/Human%20Performance-35d6b0?style=flat)
![Neurotechnology](https://img.shields.io/badge/Neurotechnology-35d6b0?style=flat)

### 2. Interaction & AI 🤖

Research focused on interaction between humans and intelligent or immersive systems.

![Human–Machine Interaction](https://img.shields.io/badge/HMI-f2b53c?style=flat)
![Human–Robot Interaction](https://img.shields.io/badge/HRI-f2b53c?style=flat)
![Human–AI Interaction](https://img.shields.io/badge/HAI-f2b53c?style=flat)
![XR / VR / AR](https://img.shields.io/badge/XR%20%2F%20VR%20%2F%20AR-f2b53c?style=flat)
![Brain–Computer Interfaces](https://img.shields.io/badge/BCI-f2b53c?style=flat)

### 3. Systems & Technology 🚀🛠️

Technology domains that enable advanced human-centered systems.

![Robotics](https://img.shields.io/badge/Robotics-d854e0?style=flat)
![Autonomy](https://img.shields.io/badge/Autonomy-d854e0?style=flat)
![Embedded Systems](https://img.shields.io/badge/Embedded%20Systems-d854e0?style=flat)
![AI / ML](https://img.shields.io/badge/AI%20%2F%20ML-d854e0?style=flat)
![Computer Vision](https://img.shields.io/badge/Computer%20Vision-d854e0?style=flat)
![Human Spaceflight](https://img.shields.io/badge/Human%20Spaceflight-d854e0?style=flat)

---

## Application Domains

Research organizations are also categorized according to their application areas:

- ✈️ Aviation
- 🛍️ Consumer
- 🛡️ Defense
- 🏥 Healthcare
- 🏭 Industry
- ⚛️ Nuclear
- 🚨 Rescue
- 🚀 Space
- 🏃 Sports
- 🚗 Transportation
- 🤿 Underwater

---

## Organization Types

The atlas currently supports four organization types:

| Type | Description |
|---|---|
| `lab` | University laboratories, research groups, and research centers |
| `gov` | Government agencies and public-sector research organizations |
| `startup` | Startups developing relevant technologies |
| `private` | Private companies and corporate R&D organizations |

---

## Data Structure

Each research site is represented using a JSON object.

```json
{
  "id": "example-site",
  "name": "Example Research Centre",
  "city": "Bengaluru, India",
  "lat": 12.9716,
  "lng": 77.5946,

  "tier": "human_science",
  "tiers": [
    "human_science"
  ],

  "subfield": "Neuroergonomics",
  "subfields": [
    {
      "tier": "human_science",
      "subfield": "Neuroergonomics"
    }
  ],

  "type": "lab",
  "founded": "2019",
  "site": "https://example.com",
  "desc": "Short description of the organisation or facility.",

  "applications": [
    "healthcare",
    "consumer"
  ],

  "appKeywords": [
    "Digital Health",
    "Human–Computer Interaction"
  ]
}
```
---

## Author

[**Apoorva Busunur Mallikarjuna**](https://apoorvabm6.github.io/)

*Embedded Systems · Neuroergonomics · HMI · Autonomous Systems · Aerospace*
