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

// GeoJSON data for countries (using natural earth data structure)
let countriesGeoJson = [];

// Fetch GeoJSON data for world countries
async function loadWorldGeoJson() {
    try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        if (!response.ok) throw new Error('Failed to load GeoJSON');
        
        const data = await response.json();
        
        // Convert topojson to geojson (simplified approach)
        // For production, use topojson-client library
        // This is a workaround using world data
        const countries = data.objects.countries.geometries.map((geom, idx) => ({
            id: idx,
            geometry: geom,
            properties: { name: 'Country ' + idx }
        }));
        
        return countries;
    } catch (error) {
        console.warn('Could not load world GeoJSON, using fallback');
        return [];
    }
}

// Alternative: Use simplified country polygons with globe.gl hex-polygons
async function initializeGlobe() {
    const canvas = document.getElementById('canvas-container');
    
    // Initialize globe using globe.gl library
    const world = Globe()
        .globeImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-day.jpg')
        .bumpImageUrl('//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png')
        .backgroundColor('#000011')
        .showAtmosphere(true)
        .atmosphereColor('#4ecdc4')
        .atmosphereAltitude(0.15)
        (canvas);

    // Add countries as hex-polygons
    const countriesWithData = Object.entries(countryData).map(([code, data]) => ({
        countryCode: code,
        ...data
    }));

    // Sample points within countries for hex visualization
    const countryPoints = [];
    
    // Define approximate center points for major countries
    const countryCoordinates = {
        'USA': [{ lat: 37.0902, lng: -95.7129, country: 'USA' }],
        'CHN': [{ lat: 35.8617, lng: 104.1954, country: 'CHN' }],
        'IND': [{ lat: 20.5937, lng: 78.9629, country: 'IND' }],
        'DEU': [{ lat: 51.1657, lng: 10.4515, country: 'DEU' }],
        'FRA': [{ lat: 46.2276, lng: 2.2137, country: 'FRA' }],
        'GBR': [{ lat: 55.3781, lng: -3.4360, country: 'GBR' }],
        'JPN': [{ lat: 36.2048, lng: 138.2529, country: 'JPN' }],
        'AUS': [{ lat: -25.2744, lng: 133.7751, country: 'AUS' }],
        'BRA': [{ lat: -14.2350, lng: -51.9253, country: 'BRA' }],
        'ZAF': [{ lat: -30.5595, lng: 22.9375, country: 'ZAF' }]
    };

    // Expand each country point into a cluster for hex bin visualization
    Object.entries(countryCoordinates).forEach(([code, coords]) => {
        const country = countryData[code];
        if (country && coords.length > 0) {
            const baseCoord = coords[0];
            
            // Create multiple points around the country center for hex binning
            for (let i = 0; i < 5; i++) {
                const angle = (i / 5) * Math.PI * 2;
                const distance = 2;
                const lat = baseCoord.lat + Math.cos(angle) * distance;
                const lng = baseCoord.lng + Math.sin(angle) * distance;
                
                countryPoints.push({
                    lat,
                    lng,
                    countryCode: code,
                    countryName: country.name
                });
            }
        }
    });

    // Use hex bin layer to visualize countries
    world
        .hexBinPointsData(countryPoints)
        .hexBinPointLat(d => d.lat)
        .hexBinPointLng(d => d.lng)
        .hexBinResolution(3)
        .hexMargin(0.3)
        .hexTopColor(d => {
            const countryCode = d.points[0]?.countryCode;
            if (countryCode && countryData[countryCode]) {
                return countryData[countryCode].color;
            }
            return '#cccccc';
        })
        .hexSideColor(() => '#666666')
        .hexAltitude(d => Math.sqrt(d.sumWeight) * 0.04)
        .onHexHover(hexagon => {
            if (hexagon && hexagon.points && hexagon.points.length > 0) {
                const countryCode = hexagon.points[0].countryCode;
                canvas.style.cursor = 'pointer';
            } else {
                canvas.style.cursor = 'default';
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

    // Add labels for countries
    const countryLabels = Object.entries(countryCoordinates).map(([code, coords]) => {
        const country = countryData[code];
        if (country && coords.length > 0) {
            const coord = coords[0];
            return {
                lat: coord.lat,
                lng: coord.lng,
                text: country.name.split(' ')[0],
                countryCode: code
            };
        }
        return null;
    }).filter(Boolean);

    world
        .labelsData(countryLabels)
        .labelLat(d => d.lat)
        .labelLng(d => d.lng)
        .labelText(d => d.text)
        .labelSize(0.8)
        .labelDotRadius(0.4)
        .labelColor(() => '#e0e0e0')
        .onLabelClick((label, event) => {
            if (label && label.countryCode) {
                showCountryInfo(label.countryCode, world);
            }
        });

    // Setup orbit controls (automatic via globe.gl)
    world.controls().autoRotate = true;
    world.controls().autoRotateSpeed = 2;
    
    // Disable camera auto-rotation on interaction
    world.controls().addEventListener('start', () => {
        world.controls().autoRotate = false;
    });

    // Hide loading screen
    document.getElementById('loading').classList.add('hidden');

    return world;
}

function showCountryInfo(countryCode, world) {
    const country = countryData[countryCode];
    if (!country) return;

    // Populate info panel
    document.getElementById('country-name').textContent = country.name;
    document.getElementById('country-description').textContent = country.description;

    // Clear and populate details
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

    // Animate camera to country
    const coords = getCountryCoordinates(countryCode);
    if (coords && world) {
        world.pointOfView({ lat: coords.lat, lng: coords.lng, altitude: 2 }, 800);
    }
}

function getCountryCoordinates(countryCode) {
    const coords = {
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
    return coords[countryCode];
}

function closeInfoPanel(world) {
    const panel = document.getElementById('info-panel');
    panel.classList.remove('visible');
    panel.classList.add('hidden');

    // Reset camera
    if (world) {
        world.pointOfView({ lat: 0, lng: 0, altitude: 3 }, 800);
        world.controls().autoRotate = true;
    }
}

// Setup close button
document.addEventListener('DOMContentLoaded', async () => {
    const world = await initializeGlobe();
    
    document.getElementById('close-btn').addEventListener('click', () => {
        closeInfoPanel(world);
    });

    // Pause rotation on info panel interaction
    document.getElementById('info-panel').addEventListener('mouseenter', () => {
        world.controls().autoRotate = false;
    });

    document.getElementById('info-panel').addEventListener('mouseleave', () => {
        world.controls().autoRotate = true;
    });
});
