/**
 * @websmitherz/contractor-schema-tools
 * Zero-dependency Schema.org JSON-LD generator for local service contractors.
 * License: MIT
 * Maintained by WebSmitherz (https://websmitherz.com)
 */

function generateContractorSchema(options = {}) {
  const {
    type = 'RoofingContractor',
    name = '',
    url = '',
    telephone = '',
    street = '',
    city = '',
    state = '',
    zip = '',
    priceRange = '$$$',
    latitude,
    longitude,
    isEmergency24_7 = false,
    services = []
  } = options;

  if (!name || !url) {
    throw new Error('Contractor schema requires both `name` and `url`.');
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url.replace(/\/$/, '')}/#contractor`,
    name: name,
    url: url,
    telephone: telephone,
    priceRange: priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: street || undefined,
      addressLocality: city,
      addressRegion: state.toUpperCase(),
      postalCode: zip,
      addressCountry: 'US'
    }
  };

  if (latitude && longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: typeof latitude === 'string' ? parseFloat(latitude) : latitude,
      longitude: typeof longitude === 'string' ? parseFloat(longitude) : longitude
    };
  }

  if (isEmergency24_7) {
    schema.openingHoursSpecification = [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ];
  }

  if (Array.isArray(services) && services.length > 0) {
    schema.makesOffer = services.map(service => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service
      }
    }));
  }

  return schema;
}

function formatJsonLdScript(schema) {
  return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
}

module.exports = {
  generateContractorSchema,
  formatJsonLdScript
};
