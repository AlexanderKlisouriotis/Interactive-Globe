const countryData = {
    'AFG': {
        name: 'Afghanistan',
        description: 'Subject to US invasion, occupation, and covert operations spanning decades.',
        details: {
            'Capital': 'Kabul',
            'Population': '40.1 million',
            'Area': '652,000 km²'
        },
        color: '#ff6b6b'
    },
    'AGO': {
        name: 'Angola',
        description: 'Site of US-backed proxy war during the Cold War.',
        details: {
            'Capital': 'Luanda',
            'Population': '36.7 million',
            'Area': '1.25 million km²'
        },
        color: '#ff8c42'
    },
    'ARG': {
        name: 'Argentina',
        description: 'Received US support for military junta during the Dirty War.',
        details: {
            'Capital': 'Buenos Aires',
            'Population': '45.8 million',
            'Area': '2.78 million km²'
        },
        color: '#ff8c42'
    },
    'BOL': {
        name: 'Bolivia',
        description: 'Subject to US-supported coups and counter-insurgency operations.',
        details: {
            'Capital': 'Sucre (constitutional), La Paz (administrative)',
            'Population': '12.1 million',
            'Area': '1.10 million km²'
        },
        color: '#ff8c42'
    },
    'BIH': {
        name: 'Bosnia and Herzegovina',
        description: 'Target of NATO bombing campaign during the Bosnian War.',
        details: {
            'Capital': 'Sarajevo',
            'Population': '3.3 million',
            'Area': '51,000 km²'
        },
        color: '#ff6b6b'
    },
    'BRA': {
        name: 'Brazil',
        description: 'Subject to US-supported military coup in 1964.',
        details: {
            'Capital': 'Brasília',
            'Population': '215 million',
            'Area': '8.5 million km²'
        },
        color: '#ff8c42'
    },
    'CHL': {
        name: 'Chile',
        description: 'Target of CIA-backed coup against Salvador Allende.',
        details: {
            'Capital': 'Santiago',
            'Population': '19.5 million',
            'Area': '756,000 km²'
        },
        color: '#ff8c42'
    },
    'COL': {
        name: 'Colombia',
        description: 'Major recipient of US military aid through Plan Colombia.',
        details: {
            'Capital': 'Bogotá',
            'Population': '52.1 million',
            'Area': '1.14 million km²'
        },
        color: '#ff8c42'
    },
    'COD': {
        name: 'Democratic Republic of the Congo',
        description: 'Site of CIA involvement in coup and assassination of Patrice Lumumba.',
        details: {
            'Capital': 'Kinshasa',
            'Population': '102 million',
            'Area': '2.34 million km²'
        },
        color: '#ff8c42'
    },
    'CUB': {
        name: 'Cuba',
        description: 'Subject to US embargo, invasion attempts, and covert operations.',
        details: {
            'Capital': 'Havana',
            'Population': '11.3 million',
            'Area': '109,000 km²'
        },
        color: '#ff8c42'
    },
    'DOM': {
        name: 'Dominican Republic',
        description: 'Site of US military intervention during 1965 civil war.',
        details: {
            'Capital': 'Santo Domingo',
            'Population': '11.1 million',
            'Area': '48,000 km²'
        },
        color: '#ff6b6b'
    },
    'EGY': {
        name: 'Egypt',
        description: 'Major recipient of US military aid supporting various regimes.',
        details: {
            'Capital': 'Cairo',
            'Population': '109 million',
            'Area': '1.01 million km²'
        },
        color: '#ff8c42'
    },
    'SLV': {
        name: 'El Salvador',
        description: 'Major recipient of US military aid during civil war.',
        details: {
            'Capital': 'San Salvador',
            'Population': '6.5 million',
            'Area': '21,000 km²'
        },
        color: '#ff8c42'
    },
    'DEU': {
        name: 'Germany',
        description: 'Site of US military occupation and ongoing intelligence operations.',
        details: {
            'Capital': 'Berlin',
            'Population': '83 million',
            'Area': '357,000 km²'
        },
        color: '#ffd93d'
    },
    'GRC': {
        name: 'Greece',
        description: 'Major recipient of US military aid during civil war.',
        details: {
            'Capital': 'Athens',
            'Population': '10.4 million',
            'Area': '132,000 km²'
        },
        color: '#ff8c42'
    },
    'GTM': {
        name: 'Guatemala',
        description: 'Site of CIA-orchestrated coup in 1954 leading to civil war.',
        details: {
            'Capital': 'Guatemala City',
            'Population': '17.1 million',
            'Area': '109,000 km²'
        },
        color: '#ff8c42'
    },
    'HTI': {
        name: 'Haiti',
        description: 'Subject to multiple US military interventions and occupations.',
        details: {
            'Capital': 'Port-au-Prince',
            'Population': '11.6 million',
            'Area': '27,000 km²'
        },
        color: '#ff6b6b'
    },
    'HND': {
        name: 'Honduras',
        description: 'Used as base for US operations and received military support.',
        details: {
            'Capital': 'Tegucigalpa',
            'Population': '10.3 million',
            'Area': '112,000 km²'
        },
        color: '#ff8c42'
    },
    'IDN': {
        name: 'Indonesia',
        description: 'Received US support for military coup and subsequent regime.',
        details: {
            'Capital': 'Jakarta',
            'Population': '279 million',
            'Area': '1.91 million km²'
        },
        color: '#ff8c42'
    },
    'IRN': {
        name: 'Iran',
        description: 'Subject to CIA coup, sanctions, and ongoing political pressure.',
        details: {
            'Capital': 'Tehran',
            'Population': '88.6 million',
            'Area': '1.65 million km²'
        },
        color: '#ff8c42'
    },
    'IRQ': {
        name: 'Iraq',
        description: 'Subject to multiple US invasions, bombing campaigns, and sanctions.',
        details: {
            'Capital': 'Baghdad',
            'Population': '43.5 million',
            'Area': '438,000 km²'
        },
        color: '#ff6b6b'
    },
    'ITA': {
        name: 'Italy',
        description: 'Target of CIA covert operations to influence elections.',
        details: {
            'Capital': 'Rome',
            'Population': '59.1 million',
            'Area': '301,000 km²'
        },
        color: '#ffd93d'
    },
    'JPN': {
        name: 'Japan',
        description: 'Subject to US military occupation and ongoing basing.',
        details: {
            'Capital': 'Tokyo',
            'Population': '125 million',
            'Area': '377,000 km²'
        },
        color: '#ffd93d'
    },
    'KOR': {
        name: 'South Korea',
        description: 'Site of US military intervention and ongoing presence.',
        details: {
            'Capital': 'Seoul',
            'Population': '51.7 million',
            'Area': '100,000 km²'
        },
        color: '#ff6b6b'
    },
    'LAO': {
        name: 'Laos',
        description: 'Subject to massive secret US bombing campaign.',
        details: {
            'Capital': 'Vientiane',
            'Population': '7.5 million',
            'Area': '237,000 km²'
        },
        color: '#ff6b6b'
    },
    'LBN': {
        name: 'Lebanon',
        description: 'Site of multiple US military interventions and political involvement.',
        details: {
            'Capital': 'Beirut',
            'Population': '5.6 million',
            'Area': '10,000 km²'
        },
        color: '#ff6b6b'
    },
    'LBY': {
        name: 'Libya',
        description: 'Subject to US bombing campaigns and sanctions.',
        details: {
            'Capital': 'Tripoli',
            'Population': '6.8 million',
            'Area': '1.76 million km²'
        },
        color: '#ff6b6b'
    },
    'NIC': {
        name: 'Nicaragua',
        description: 'Target of US-backed Contra war and covert operations.',
        details: {
            'Capital': 'Managua',
            'Population': '6.9 million',
            'Area': '130,000 km²'
        },
        color: '#ff8c42'
    },
    'PAK': {
        name: 'Pakistan',
        description: 'Partner in covert operations and target of drone strikes.',
        details: {
            'Capital': 'Islamabad',
            'Population': '242 million',
            'Area': '881,000 km²'
        },
        color: '#ff8c42'
    },
    'PAN': {
        name: 'Panama',
        description: 'Subject to US military invasion in 1989.',
        details: {
            'Capital': 'Panama City',
            'Population': '4.4 million',
            'Area': '75,000 km²'
        },
        color: '#ff6b6b'
    },
    'PRY': {
        name: 'Paraguay',
        description: 'Received US support for authoritarian regime during Cold War.',
        details: {
            'Capital': 'Asunción',
            'Population': '6.7 million',
            'Area': '407,000 km²'
        },
        color: '#ff8c42'
    },
    'PER': {
        name: 'Peru',
        description: 'Received US military aid and counter-insurgency support.',
        details: {
            'Capital': 'Lima',
            'Population': '34.1 million',
            'Area': '1.29 million km²'
        },
        color: '#ff8c42'
    },
    'PHL': {
        name: 'Philippines',
        description: 'Site of US military bases and counter-insurgency support.',
        details: {
            'Capital': 'Manila',
            'Population': '117 million',
            'Area': '300,000 km²'
        },
        color: '#ff8c42'
    },
    'PSE': {
        name: 'Palestine',
        description: 'Subject to US diplomatic and military support for Israeli occupation.',
        details: {
            'Capital': 'Jerusalem (claimed), Ramallah (administrative)',
            'Population': '5.4 million',
            'Area': '6,020 km²'
        },
        color: '#ff8c42'
    },
    'RUS': {
        name: 'Russia',
        description: 'Subject to US sanctions and ongoing political pressure.',
        details: {
            'Capital': 'Moscow',
            'Population': '144 million',
            'Area': '17.1 million km²'
        },
        color: '#ff8c42'
    },
    'SAU': {
        name: 'Saudi Arabia',
        description: 'Major US ally with extensive military cooperation.',
        details: {
            'Capital': 'Riyadh',
            'Population': '36.9 million',
            'Area': '2.15 million km²'
        },
        color: '#ff8c42'
    },
    'SOM': {
        name: 'Somalia',
        description: 'Subject to US military intervention and drone strikes.',
        details: {
            'Capital': 'Mogadishu',
            'Population': '17.1 million',
            'Area': '638,000 km²'
        },
        color: '#ff6b6b'
    },
    'ZAF': {
        name: 'South Africa',
        description: 'Received US engagement with apartheid regime during Cold War.',
        details: {
            'Capital': 'Pretoria (Executive), Cape Town (Legislative), Bloemfontein (Judicial)',
            'Population': '60 million',
            'Area': '1.22 million km²'
        },
        color: '#ffd93d'
    },
    'SYR': {
        name: 'Syria',
        description: 'Subject to US sanctions, bombing campaigns, and covert operations.',
        details: {
            'Capital': 'Damascus',
            'Population': '22.1 million',
            'Area': '185,000 km²'
        },
        color: '#ff6b6b'
    },
    'TLS': {
        name: 'Timor-Leste',
        description: 'Subject to US support for Indonesian occupation.',
        details: {
            'Capital': 'Dili',
            'Population': '1.3 million',
            'Area': '15,000 km²'
        },
        color: '#ff8c42'
    },
    'URY': {
        name: 'Uruguay',
        description: 'Received US support for military-civilian dictatorship.',
        details: {
            'Capital': 'Montevideo',
            'Population': '3.4 million',
            'Area': '176,000 km²'
        },
        color: '#ff8c42'
    },
    'VEN': {
        name: 'Venezuela',
        description: 'Subject to US sanctions and political pressure.',
        details: {
            'Capital': 'Caracas',
            'Population': '28.2 million',
            'Area': '916,000 km²'
        },
        color: '#ff8c42'
    },
    'VNM': {
        name: 'Vietnam',
        description: 'Site of massive US military intervention and bombing campaigns.',
        details: {
            'Capital': 'Hanoi',
            'Population': '98.2 million',
            'Area': '331,000 km²'
        },
        color: '#ff6b6b'
    },
    'YEM': {
        name: 'Yemen',
        description: 'Subject to US drone strikes and support for Saudi-led campaign.',
        details: {
            'Capital': "Sana'a",
            'Population': '33.7 million',
            'Area': '528,000 km²'
        },
        color: '#ff6b6b'
    }
};

// Initialize globe using globe.gl library
async function initializeGlobe() {
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
        const angle = 0;
        const distance = 2;
        const lat = coords.lat + Math.cos(angle) * distance;
        const lng = coords.lng + Math.sin(angle) * distance;
        
        countryPoints.push({
            lat,
            lng,
            countryCode: code,
            countryName: country?.name || code
        });
    });

    // Track hovered hex
    let hoveredHex = null;

    // Add hex bin layer
    world
        .hexBinPointsData(countryPoints)
        .hexBinPointLat(d => d.lat)
        .hexBinPointLng(d => d.lng)
        .hexBinResolution(3)
        .hexMargin(0)
        .hexBinMerge(false)
        .hexTopColor(d => {
            // If this is the hovered hex, highlight it
            if (hoveredHex && d.points[0]?.countryCode === hoveredHex) {
                return '#ffff00'; // Yellow highlight
            }
            
            const countryCode = d.points[0]?.countryCode;
            if (countryCode && countryData[countryCode]) {
                return countryData[countryCode].color;
            }
            return '#cccccc';
        })
        .hexSideColor(() => '#666666')
        .hexAltitude(d => Math.sqrt(d.sumWeight) * 0.08)
        .hexLabel(d => {
            if (d.points && d.points.length > 0) {
                return d.points[0].countryName;
            }
            return 'Unknown';
        })
        .onHexHover((hexagon) => {
            if (hexagon && hexagon.points && hexagon.points.length > 0) {
                canvas.style.cursor = 'pointer';
                hoveredHex = hexagon.points[0].countryCode;
                // Refresh colors by updating data
                world.hexBinPointsData(world.hexBinPointsData());
            } else {
                canvas.style.cursor = 'default';
                hoveredHex = null;
                world.hexBinPointsData(world.hexBinPointsData());
            }
        })
        .onHexClick((hexagon, event) => {
            if (hexagon && hexagon.points && hexagon.points.length > 0) {
                const countryCode = hexagon.points[0].countryCode;
                if (countryCode && countryData[countryCode]) {
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
        .labelSize(0.8)
        .labelDotRadius(.8)
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
        }, 3000);
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

    // Show panel
    const panel = document.getElementById('info-panel');
    panel.classList.remove('hidden');
    panel.classList.add('visible');

    // Move camera to country
    const countryCoordinates = {
        'USA': { lat: 37.0902, lng: -95.7129 },
        'CHN': { lat: 35.8617, lng: 104.1954 },
        'IND': { lat: 20.5937, lng: 78.9629 },
        'DEU': { lat: 51.1657, lng: 10.4515 },
        'FRA': { lat: 46.2276, lng: 2.2137 },
        'GBR': { lat: 55.3781, lng: -3.4360 },
        'JPN': { lat: 36.2048, lng: 138.2529 },
        'AUS': { lat: -25.2744, lng: 133.7751 },
        'BRA': { lat: -14.2350, lng: -51.9253 },
        'ZAF': { lat: -30.5595, lng: 22.9375 }
    };

    const coords = countryCoordinates[countryCode];
    if (coords && world) {
        world.pointOfView({ lat: coords.lat, lng: coords.lng, altitude: 2 }, 800);
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

    document.getElementById('info-panel').addEventListener('mouseleave', () => {
        world.controls().autoRotate = true;
    });
});
