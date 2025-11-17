// Country data with sample information
const countryData = {
    'USA': {
        name: 'United States',
        description: 'A federal republic in North America with diverse geography and economy.',
        details: {
            'Capital': 'Washington, D.C.',
            'Population': '331 million',
            'Area': '9.8 million km²',
            'Currency': 'US Dollar (USD)'
        },
        color: '#ff6b6b'
    },
    'CHN': {
        name: 'China',
        description: 'The world\'s most populous country located in East Asia.',
        details: {
            'Capital': 'Beijing',
            'Population': '1.4 billion',
            'Area': '9.6 million km²',
            'Currency': 'Chinese Yuan (CNY)'
        },
        color: '#ff8c42'
    },
    'IND': {
        name: 'India',
        description: 'A diverse country in South Asia with rich cultural heritage.',
        details: {
            'Capital': 'New Delhi',
            'Population': '1.4 billion',
            'Area': '3.3 million km²',
            'Currency': 'Indian Rupee (INR)'
        },
        color: '#ffd93d'
    },
    'DEU': {
        name: 'Germany',
        description: 'A central European country known for engineering and culture.',
        details: {
            'Capital': 'Berlin',
            'Population': '83 million',
            'Area': '357,000 km²',
            'Currency': 'Euro (EUR)'
        },
        color: '#6bcf7f'
    },
    'FRA': {
        name: 'France',
        description: 'A Western European country famous for art, culture, and cuisine.',
        details: {
            'Capital': 'Paris',
            'Population': '67 million',
            'Area': '643,000 km²',
            'Currency': 'Euro (EUR)'
        },
        color: '#4d96ff'
    },
    'GBR': {
        name: 'United Kingdom',
        description: 'An island nation off the coast of Western Europe.',
        details: {
            'Capital': 'London',
            'Population': '67 million',
            'Area': '243,000 km²',
            'Currency': 'British Pound (GBP)'
        },
        color: '#9d4edd'
    },
    'JPN': {
        name: 'Japan',
        description: 'An island nation in East Asia known for technology and culture.',
        details: {
            'Capital': 'Tokyo',
            'Population': '125 million',
            'Area': '377,000 km²',
            'Currency': 'Japanese Yen (JPY)'
        },
        color: '#ff1493'
    },
    'AUS': {
        name: 'Australia',
        description: 'A country and continent in the Southern Hemisphere.',
        details: {
            'Capital': 'Canberra',
            'Population': '25 million',
            'Area': '7.7 million km²',
            'Currency': 'Australian Dollar (AUD)'
        },
        color: '#00d4ff'
    },
    'BRA': {
        name: 'Brazil',
        description: 'The largest country in South America with the Amazon rainforest.',
        details: {
            'Capital': 'Brasília',
            'Population': '215 million',
            'Area': '8.5 million km²',
            'Currency': 'Brazilian Real (BRL)'
        },
        color: '#90ee90'
    },
    'ZAF': {
        name: 'South Africa',
        description: 'A country at the southern tip of Africa with diverse landscapes.',
        details: {
            'Capital': 'Pretoria (Executive), Cape Town (Legislative), Bloemfontein (Judicial)',
            'Population': '60 million',
            'Area': '1.2 million km²',
            'Currency': 'South African Rand (ZAR)'
        },
        color: '#ffa500'
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
        .hexBinResolution(2)
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
        .labelDotRadius(0.9)
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
