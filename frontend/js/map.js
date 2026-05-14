var map = L.map('map').setView([18.5204, 73.8567], 7);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '© OpenStreetMap contributors'
    }
).addTo(map);


/* Default Marker */

var marker = L.marker([18.5204, 73.8567]).addTo(map);

var circle = L.circle(
    [18.5204, 73.8567],
    {
        color: 'green',
        fillColor: '#00ff00',
        fillOpacity: 0.4,
        radius: 20000
    }
).addTo(map);


/* Dynamic Map Update */

function updateMap(rainfall, slope, soil, prediction) {

    let lat = 18.5204;
    let lng = 73.8567;

    let locationName = "Pune";

    let color = "red";

    let radius = 20000;


    /* HIGH RISK */

    if (
        rainfall > 140 &&
        slope > 20 &&
        soil > 60
    ) {

        lat = 17.6805;
        lng = 74.0183;

        locationName = "Satara";

        color = "red";

        radius = 50000;
    }

    /* MEDIUM RISK */

    else if (
        rainfall > 100 &&
        slope > 10
    ) {

        lat = 19.9975;
        lng = 73.7898;

        locationName = "Nashik";

        color = "orange";

        radius = 35000;
    }

    /* LOW RISK */

    else {

        lat = 19.0760;
        lng = 72.8777;

        locationName = "Mumbai";

        color = "green";

        radius = 20000;
    }


    /* Move Marker */

    marker
        .setLatLng([lat, lng])

        .bindPopup(
            `
            <b>${locationName}</b><br>
            ${prediction}
            `
        )

        .openPopup();


    /* Update Circle */

    circle.setLatLng([lat, lng]);

    circle.setStyle({
        color: color,
        fillColor: color
    });

    circle.setRadius(radius);


    /* Move Map */

    map.setView([lat, lng], 8);
}