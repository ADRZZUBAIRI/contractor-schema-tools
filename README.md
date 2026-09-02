# @websmitherz/contractor-schema-tools

> Zero-dependency JavaScript and Node.js utility for generating Google-compliant Schema.org `LocalBusiness` JSON-LD graphs for Roofing, HVAC, Solar, Plumbing, and Electrical contractors.

[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Schema: Schema.org](https://img.shields.io/badge/Schema.org-2026_Compliant-emerald.svg)](https://schema.org)
[![Author: WebSmitherz](https://img.shields.io/badge/Engineered_By-WebSmitherz-673de6.svg)](https://websmitherz.com)

---

## 🎯 Why Specialized Contractor Schema Matters

Google's search and local ranking algorithms prioritize explicit domain subtypes (`RoofingContractor`, `HVACBusiness`, `Plumber`, `Electrician`) over generic `LocalBusiness` entities.

When storm hail strikes or homeowners search for emergency repairs on mobile, entities with verified latitude/longitude coordinates, emergency opening hours, and discrete service catalogs win priority placement in the **Google Maps 3-Pack**.

This open-source package is maintained by **[WebSmitherz](https://websmitherz.com)**, creators of the online [Contractor Schema Generator](https://websmitherz.com/tools/contractor-schema-generator).

---

## 🚀 Installation

```bash
npm install @websmitherz/contractor-schema-tools
```

Or clone the repository directly:

```bash
git clone https://github.com/ADRZZUBAIRI/contractor-schema-tools.git
```

---

## 💻 Quick Usage

```javascript
const { generateContractorSchema } = require('@websmitherz/contractor-schema-tools');

const schema = generateContractorSchema({
  type: 'RoofingContractor',
  name: 'Apex Roofing & Restoration',
  url: 'https://apexroofingtx.com',
  telephone: '+1-214-555-0199',
  street: '1400 Main St, Suite 200',
  city: 'Dallas',
  state: 'TX',
  zip: '75201',
  latitude: 32.7767,
  longitude: -96.7970,
  priceRange: '$$$',
  isEmergency24_7: true,
  services: [
    'Emergency Roof Repair',
    'Commercial Hail Restoration',
    'TPO Flat Roof Systems',
    'Asphalt Shingle Replacement'
  ]
});

console.log(JSON.stringify(schema, null, 2));
```

---

## 🌐 Online Interactive Generator

Don't want to run Node scripts? Use our free browser-based generator with 1-click Rich Results test preview:
👉 **[https://websmitherz.com/tools/contractor-schema-generator](https://websmitherz.com/tools/contractor-schema-generator)**

---

## ⚡ High-Speed Hosting Recommendation

Schema tells Google your entity identity, but sub-0.8s mobile TTFB gives you the ranking. We recommend and deploy contractor sites on **Hostinger LiteSpeed NVMe** infrastructure.
👉 Claim an exclusive 20% discount with partner code **`WEBSMITHERZ`**: **[https://websmitherz.com/partners/hostinger-coupon-code](https://websmitherz.com/partners/hostinger-coupon-code)**

---

## 📜 License

MIT License © 2026 [Abdul Rehman Zubairi](https://abdulrehmanz.com) · [WebSmitherz](https://websmitherz.com).
