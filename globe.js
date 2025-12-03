console.log('=== globe.js loaded ===');
const countryData = {
    'AFG': {
        name: 'Afghanistan',
        description: 'Subject to US invasion, occupation, and covert operations spanning decades.',
        details: {
            'Capital': 'Kabul',
            'Population': '40.1 million',
            'Area': '652,000 km²'
        },
        color: '#FF0000'
    },
    'AGO': {
        name: 'Angola',
        description: 'Site of US-backed proxy war during the Cold War.',
        details: {
            'Capital': 'Luanda',
            'Population': '36.7 million',
            'Area': '1.25 million km²'
        },
        color: '#ff9600'
    },
    'ARG': {
        name: 'Argentina',
        description: 'Received US support for military junta during the Dirty War.',
        details: {
            'Capital': 'Buenos Aires',
            'Population': '45.8 million',
            'Area': '2.78 million km²'
        },
        color: '#ff9600'
    },
    'BOL': {
        name: 'Bolivia',
        description: 'Subject to US-supported coups and counter-insurgency operations.',
        details: {
            'Capital': 'Sucre (constitutional), La Paz (administrative)',
            'Population': '12.1 million',
            'Area': '1.10 million km²'
        },
        color: '#ff9600'
    },
    'BIH': {
        name: 'Bosnia and Herzegovina',
        description: 'Target of NATO bombing campaign during the Bosnian War.',
        details: {
            'Capital': 'Sarajevo',
            'Population': '3.3 million',
            'Area': '51,000 km²'
        },
        color: '#FF0000'
    },
    'BRA': {
        name: 'Brazil',
        description: 'Subject to US-supported military coup in 1964.',
        details: {
            'Capital': 'Brasília',
            'Population': '215 million',
            'Area': '8.5 million km²'
        },
        color: '#ff9600'
    },
    'CHL': {
        name: 'Chile',
        description: 'Target of CIA-backed coup against Salvador Allende.',
        details: {
            'Capital': 'Santiago',
            'Population': '19.5 million',
            'Area': '756,000 km²'
        },
        color: '#ff9600'
    },
    'COL': {
        name: 'Colombia',
        description: 'Major recipient of US military aid through Plan Colombia.',
        details: {
            'Capital': 'Bogotá',
            'Population': '52.1 million',
            'Area': '1.14 million km²'
        },
        color: '#ff9600'
    },
    'COD': {
        name: 'Democratic Republic of the Congo',
        description: 'Site of CIA involvement in coup and assassination of Patrice Lumumba.',
        details: {
            'Capital': 'Kinshasa',
            'Population': '102 million',
            'Area': '2.34 million km²'
        },
        color: '#ff9600'
    },
    'CUB': {
        name: 'Cuba',
        description: 'Subject to US embargo, invasion attempts, and covert operations.',
        details: {
            'Capital': 'Havana',
            'Population': '11.3 million',
            'Area': '109,000 km²'
        },
        color: '#ff9600'
    },
    'DOM': {
        name: 'Dominican Republic',
        description: 'Site of US military intervention during 1965 civil war.',
        details: {
            'Capital': 'Santo Domingo',
            'Population': '11.1 million',
            'Area': '48,000 km²'
        },
        color: '#FF0000'
    },
    'EGY': {
        name: 'Egypt',
        description: 'Major recipient of US military aid supporting various regimes.',
        details: {
            'Capital': 'Cairo',
            'Population': '109 million',
            'Area': '1.01 million km²'
        },
        color: '#ff9600'
    },
    'SLV': {
        name: 'El Salvador',
        description: 'Major recipient of US military aid during civil war.',
        details: {
            'Capital': 'San Salvador',
            'Population': '6.5 million',
            'Area': '21,000 km²'
        },
        color: '#ff9600'
    },
    'DEU': {
        name: 'Germany',
        description: 'Site of US military occupation and ongoing intelligence operations.',
        details: {
            'Capital': 'Berlin',
            'Population': '83 million',
            'Area': '357,000 km²'
        },
        color: '#ffff00'
    },
    'GRC': {
        name: 'Greece',
        description: 'Major recipient of US military aid during civil war.',
        details: {
            'Capital': 'Athens',
            'Population': '10.4 million',
            'Area': '132,000 km²'
        },
        color: '#ff9600'
    },
    'GTM': {
        name: 'Guatemala',
        description: 'Site of CIA-orchestrated coup in 1954 leading to civil war.',
        details: {
            'Capital': 'Guatemala City',
            'Population': '17.1 million',
            'Area': '109,000 km²'
        },
        color: '#ff9600'
    },
    'HTI': {
        name: 'Haiti',
        description: 'Subject to multiple US military interventions and occupations.',
        details: {
            'Capital': 'Port-au-Prince',
            'Population': '11.6 million',
            'Area': '27,000 km²'
        },
        color: '#FF0000'
    },
    'HND': {
        name: 'Honduras',
        description: 'Used as base for US operations and received military support.',
        details: {
            'Capital': 'Tegucigalpa',
            'Population': '10.3 million',
            'Area': '112,000 km²'
        },
        color: '#ff9600'
    },
    'IDN': {
        name: 'Indonesia',
        description: 'Received US support for military coup and subsequent regime.',
        details: {
            'Capital': 'Jakarta',
            'Population': '279 million',
            'Area': '1.91 million km²'
        },
        color: '#ff9600'
    },
    'IRN': {
        name: 'Iran',
        description: 'Subject to CIA coup, sanctions, and ongoing political pressure.',
        details: {
            'Capital': 'Tehran',
            'Population': '88.6 million',
            'Area': '1.65 million km²'
        },
        color: '#ff9600'
    },
    'IRQ': {
        name: 'Iraq',
        description: 'Subject to multiple US invasions, bombing campaigns, and sanctions.',
        details: {
            'Capital': 'Baghdad',
            'Population': '43.5 million',
            'Area': '438,000 km²'
        },
        color: '#FF0000'
    },
    'ITA': {
        name: 'Italy',
        description: 'Target of CIA covert operations to influence elections.',
        details: {
            'Capital': 'Rome',
            'Population': '59.1 million',
            'Area': '301,000 km²'
        },
        color: '#ffff00'
    },
    'JPN': {
        name: 'Japan',
        description: 'Subject to US military occupation and ongoing basing.',
        details: {
            'Capital': 'Tokyo',
            'Population': '125 million',
            'Area': '377,000 km²'
        },
        color: '#ffff00'
    },
    'KOR': {
        name: 'South Korea',
        description: 'Site of US military intervention and ongoing presence.',
        details: {
            'Capital': 'Seoul',
            'Population': '51.7 million',
            'Area': '100,000 km²'
        },
        color: '#FF0000'
    },
    'LAO': {
        name: 'Laos',
        description: 'Subject to massive secret US bombing campaign.',
        details: {
            'Capital': 'Vientiane',
            'Population': '7.5 million',
            'Area': '237,000 km²'
        },
        color: '#FF0000'
    },
    'LBN': {
        name: 'Lebanon',
        description: 'Site of multiple US military interventions and political involvement.',
        details: {
            'Capital': 'Beirut',
            'Population': '5.6 million',
            'Area': '10,000 km²'
        },
        color: '#FF0000'
    },
    'LBY': {
        name: 'Libya',
        description: 'Subject to US bombing campaigns and sanctions.',
        details: {
            'Capital': 'Tripoli',
            'Population': '6.8 million',
            'Area': '1.76 million km²'
        },
        color: '#FF0000'
    },
    'NIC': {
        name: 'Nicaragua',
        description: 'Target of US-backed Contra war and covert operations.',
        details: {
            'Capital': 'Managua',
            'Population': '6.9 million',
            'Area': '130,000 km²'
        },
        color: '#ff9600'
    },
    'PAK': {
        name: 'Pakistan',
        description: 'Partner in covert operations and target of drone strikes.',
        details: {
            'Capital': 'Islamabad',
            'Population': '242 million',
            'Area': '881,000 km²'
        },
        color: '#ff9600'
    },
    'PAN': {
        name: 'Panama',
        description: 'Subject to US military invasion in 1989.',
        details: {
            'Capital': 'Panama City',
            'Population': '4.4 million',
            'Area': '75,000 km²'
        },
        color: '#FF0000'
    },
    'PRY': {
        name: 'Paraguay',
        description: 'Received US support for authoritarian regime during Cold War.',
        details: {
            'Capital': 'Asunción',
            'Population': '6.7 million',
            'Area': '407,000 km²'
        },
        color: '#ff9600'
    },
    'PER': {
        name: 'Peru',
        description: 'Received US military aid and counter-insurgency support.',
        details: {
            'Capital': 'Lima',
            'Population': '34.1 million',
            'Area': '1.29 million km²'
        },
        color: '#ff9600'
    },
    'PHL': {
        name: 'Philippines',
        description: 'Site of US military bases and counter-insurgency support.',
        details: {
            'Capital': 'Manila',
            'Population': '117 million',
            'Area': '300,000 km²'
        },
        color: '#ff9600'
    },
    'PSE': {
        name: 'Palestine',
        description: 'Subject to US diplomatic and military support for Israeli occupation.',
        details: {
            'Capital': 'Jerusalem (claimed), Ramallah (administrative)',
            'Population': '5.4 million',
            'Area': '6,020 km²'
        },
        color: '#ff9600'
    },
    'RUS': {
        name: 'Russia',
        description: 'Subject to US sanctions and ongoing political pressure.',
        details: {
            'Capital': 'Moscow',
            'Population': '144 million',
            'Area': '17.1 million km²'
        },
        color: '#ff9600'
    },
    'SAU': {
        name: 'Saudi Arabia',
        description: 'Major US ally with extensive military cooperation.',
        details: {
            'Capital': 'Riyadh',
            'Population': '36.9 million',
            'Area': '2.15 million km²'
        },
        color: '#ff9600'
    },
    'SOM': {
        name: 'Somalia',
        description: 'Subject to US military intervention and drone strikes.',
        details: {
            'Capital': 'Mogadishu',
            'Population': '17.1 million',
            'Area': '638,000 km²'
        },
        color: '#FF0000'
    },
    'ZAF': {
        name: 'South Africa',
        description: 'Received US engagement with apartheid regime during Cold War.',
        details: {
            'Capital': 'Pretoria (Executive), Cape Town (Legislative), Bloemfontein (Judicial)',
            'Population': '60 million',
            'Area': '1.22 million km²'
        },
        color: '#ffff00'
    },
    'SYR': {
        name: 'Syria',
        description: 'Subject to US sanctions, bombing campaigns, and covert operations.',
        details: {
            'Capital': 'Damascus',
            'Population': '22.1 million',
            'Area': '185,000 km²'
        },
        color: '#FF0000'
    },
    'TLS': {
        name: 'Timor-Leste',
        description: 'Subject to US support for Indonesian occupation.',
        details: {
            'Capital': 'Dili',
            'Population': '1.3 million',
            'Area': '15,000 km²'
        },
        color: '#ff9600'
    },
    'URY': {
        name: 'Uruguay',
        description: 'Received US support for military-civilian dictatorship.',
        details: {
            'Capital': 'Montevideo',
            'Population': '3.4 million',
            'Area': '176,000 km²'
        },
        color: '#ff9600'
    },
    'VEN': {
        name: 'Venezuela',
        description: 'Subject to US sanctions and political pressure.',
        details: {
            'Capital': 'Caracas',
            'Population': '28.2 million',
            'Area': '916,000 km²'
        },
        color: '#ff9600'
    },
    'VNM': {
        name: 'Vietnam',
        description: 'Site of massive US military intervention and bombing campaigns.',
        details: {
            'Capital': 'Hanoi',
            'Population': '98.2 million',
            'Area': '331,000 km²'
        },
        color: '#FF0000'
    },
    'YEM': {
        name: 'Yemen',
        description: 'Subject to US drone strikes and support for Saudi-led campaign.',
        details: {
            'Capital': "Sana'a",
            'Population': '33.7 million',
            'Area': '528,000 km²'
        },
        color: '#FF0000'
    }
};

// Initialize globe using globe.gl library
async function initializeGlobe() {
    console.log('=== initializeGlobe() called ===');
    const canvas = document.getElementById('canvas-container');

    // Create globe instance with globe.gl
    const world = Globe()
        .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg')
        .bumpImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
        .backgroundColor('#000011')
        .showAtmosphere(true)
        .atmosphereColor('#4ecdc4')
        .atmosphereAltitude(0.15)
        .onGlobeReady(() => {
            console.log('Globe ready');
        })
        (canvas);

    // Use world countries dataset instead of limited countryCoordinates
    const countryCoordinates = worldCountries;
    // Create hex bin data points
    const countryPoints = [];
    Object.entries(countryCoordinates).forEach(([code, coords]) => {
        const country = countryData[code];
        // Add point for every country, whether it has metadata or not
        // Use exact coordinates to align with labels
        countryPoints.push({
            lat: coords.lat,
            lng: coords.lng,
            countryCode: code,
            countryName: country?.name || code
        });
    });

    // Track hovered hex
    let hoveredCountry = null;

    // Add circular pins using points layer (simpler and no THREE.js conflicts)
    world
        .pointsData(countryPoints)
        .pointLat(d => d.lat)
        .pointLng(d => d.lng)
        .pointColor(d => {
            const countryCode = d.countryCode;
            // Highlight on hover
            if (hoveredCountry && countryCode === hoveredCountry) {
                return '#08FF08'; // Yellow highlight
            }
            const country = countryData[countryCode];
            return country?.color || '#cccccc';
        })
        .pointAltitude(.15)
        .pointRadius(0.7)
        .pointLabel(d => d.countryName)
        .onPointHover((point) => {
            if (point && point.countryCode) {
                canvas.style.cursor = 'pointer';
                hoveredCountry = point.countryCode;
                // Refresh colors by updating data
                world.pointsData(world.pointsData());
            } else {
                canvas.style.cursor = 'default';
                if (hoveredCountry) {
                    hoveredCountry = null;
                    world.pointsData(world.pointsData());
                }
            }
        })
        .onPointClick((point) => {
            if (point && point.countryCode) {
                const countryCode = point.countryCode;
                if (countryData[countryCode]) {
                    showCountryInfo(countryCode, world);
                }
            }
        });

    // Add country labels
    const countryLabels = Object.entries(countryCoordinates)
        .filter(([code]) => countryData[code]) // Only include countries in countryData
        .map(([code, coords]) => {
            const country = countryData[code];
            return {
                lat: coords.lat,
                lng: coords.lng,
                text: country.name.substring(0, 3).toUpperCase(),
                countryCode: code
            };
        });

    world
        .labelsData(countryLabels)
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelText(d => d.text)
        .labelSize(0.7)
        .labelDotRadius(1)  // Increased from 0.8 to 1.5 for easier clicking
        .labelColor(() => '#ffffff')
        .onLabelClick((label, event) => {
            if (label && label.countryCode) {
                showCountryInfo(label.countryCode, world);
            }
        });

    // Configure orbit controls
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 2;
    world.controls().enableZoom = true;
    world.controls().enablePan = true;

    // Stop auto-rotation on user interaction
    world.controls().addEventListener('start', () => {
        world.controls().autoRotate = false;
    });

    // Resume auto-rotation when user stops interacting
    world.controls().addEventListener('end', () => {
        setTimeout(() => {
            world.controls().autoRotate = true;
        }, 15000);
    });

    // Hide loading
    document.getElementById('loading').classList.add('hidden');

    return world;
}

function showCountryInfo(countryCode, world) {
    const country = countryData[countryCode];
    if (!country) return;

    // Update info panel
    document.getElementById('country-name').textContent = country.name;
    document.getElementById('country-description').textContent = country.description;

    const detailsList = document.getElementById('country-details');
    detailsList.innerHTML = '';
    Object.entries(country.details).forEach(([key, value]) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${key}:</strong> ${value}`;
        detailsList.appendChild(li);
    });

    // Populate sources
    const sourcesList = document.getElementById('sources-list');
    sourcesList.innerHTML = '';

    // Placeholder sources
    const sources = [
        { name: 'Country Report 2024.pdf', url: '#' },
        { name: 'Historical Analysis.docx', url: '#' },
        { name: 'External Reference Link', url: '#' }
    ];

    sources.forEach(source => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = source.url;
        a.textContent = source.name;
        a.target = '_blank';
        li.appendChild(a);
        sourcesList.appendChild(li);
    });

    // Reset dropdown state
    const sourcesToggle = document.getElementById('sources-toggle');
    const sourcesListEl = document.getElementById('sources-list');

    if (sourcesToggle && sourcesListEl) {
        sourcesToggle.classList.remove('active');
        sourcesListEl.classList.add('hidden');
    }

    // Show panel
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
    panel.classList.add('visible');

    // Stop auto-rotation when panel is open
    if (world) {
        world.controls().autoRotate = false;
    }

    // Move camera to country
    const countryCoordinates = worldCountries;

    console.log('Country Code:', countryCode);
    console.log('World Countries:', countryCoordinates);
    const coords = countryCoordinates[countryCode];
    console.log('Coords for', countryCode, ':', coords);
    console.log('World object:', world);

    if (coords && world) {
        console.log('Moving camera to:', { lat: coords.lat, lng: coords.lng, altitude: 2 });
        world.pointOfView({ lat: coords.lat, lng: coords.lng, altitude: 2 }, 800);
    } else {
        console.log('Camera NOT moving - coords:', coords, 'world:', world);
    }
}

function closeInfoPanel(world) {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('visible');
    panel.classList.add('hidden');

    if (world) {
        world.pointOfView({ lat: 0, lng: 0, altitude: 3 }, 800);
        world.controls().autoRotate = true;
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', async () => {
    const world = await initializeGlobe();

    document.getElementById('close-btn').addEventListener('click', () => {
        closeInfoPanel(world);
    });

    // Control rotation when hovering over info panel
    document.getElementById('info-panel').addEventListener('mouseenter', () => {
        world.controls().autoRotate = false;
    });

    // Sources toggle
    const sourcesToggle = document.getElementById('sources-toggle');
    const sourcesList = document.getElementById('sources-list');

    if (sourcesToggle && sourcesList) {
        sourcesToggle.addEventListener('click', () => {
            sourcesToggle.classList.toggle('active');
            sourcesList.classList.toggle('hidden');
        });
    }
});
