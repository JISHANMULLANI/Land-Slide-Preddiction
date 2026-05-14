async function predictLandslide() {

    const rainfall =
        parseFloat(
            document.getElementById('rainfall').value
        );

    const slope =
        parseFloat(
            document.getElementById('slope').value
        );

    const soil =
        parseFloat(
            document.getElementById('soil').value
        );

    try {

        const response = await fetch(
            'http://127.0.0.1:5000/predict',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({
                    rainfall: rainfall,
                    slope: slope,
                    soil: soil
                })
            }
        );

        const data = await response.json();


        /* Show Prediction */

        document.getElementById('result').innerHTML =
            data.prediction;


        /* Result Colors */

        if (
            data.prediction === "Landslide Risk"
        ) {

            document.getElementById('result').style.color =
                "red";

        } else {

            document.getElementById('result').style.color =
                "lightgreen";
        }


        /* Update Map */

        updateMap(
            rainfall,
            slope,
            soil,
            data.prediction
        );

    } catch (error) {

        console.log(error);

        document.getElementById('result').innerHTML =
            "Prediction Error";
    }
}