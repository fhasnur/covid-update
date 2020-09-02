function main() {

    const getGlobal = () => {
        fetch(`https://covid19.mathdro.id/api/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponMessage(responseJson.message);
                } else {
                    renderGlobal(responseJson);
                }
            })
            .catch(error => {
                showResponMessage(error);
            })
    };
    getGlobal();

    const renderGlobal = (global) => {
        const dataGlobal = document.querySelector("#globalData");
        dataGlobal.innerHTML = "";
        dataGlobal.innerHTML += `
            <div class="row">
                <div class="col s12">
                    <img src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzNzYwNX0" class="covid-image">
                    <ul class="collection with-header">
                        <li class="collection-header">
                            <h5>Global</h5>
                        </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Confirmed</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${global.confirmed.value}</b></div>
                            </div>
                        </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Recovered</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${global.recovered.value}</b></div>
                            </div>
                         </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Deaths</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${global.deaths.value}</b></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> 
            `;
    };

    const getIndonesia = () => {
        fetch(`https://covid19.mathdro.id/api/countries/indonesia/`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponMessage(responseJson.message);
                } else {
                    renderIndonesia(responseJson);
                }
            })
            .catch(error => {
                showResponMessage(error);
            })
    };
    getIndonesia();

    const renderIndonesia = (indonesia) => {
        const dataIndonesia = document.querySelector("#indonesiaData");
        dataIndonesia.innerHTML = "";
        dataIndonesia.innerHTML += `
            <div class="row">
                <div class="col s12">
                <img src="https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEzNzYwNX0" class="covid-image">
                    <ul class="collection with-header">
                        <li class="collection-header">
                            <h5>Indonesia</h5>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Confirmed</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${indonesia.confirmed.value}</b></div>
                            </div>
                        </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Recovered</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${indonesia.recovered.value}</b></div>
                            </div>
                         </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Deaths</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${indonesia.deaths.value}</b></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> `;

    };

    const getSulsel = () => {
        fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponMessage(responseJson.message);
                } else {
                    renderSulsel(responseJson)
                }
            })
            .catch(error => {
                showResponMessage(error);
            })
    };
    getSulsel();

    const renderSulsel = (sulsel) => {
        const dataSulsel = document.querySelector("#sulselData");
        dataSulsel.innerHTML = "";
        dataSulsel.innerHTML = `
            <div class="row">           
                <div class="col s12">
                <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" class="covid-image">
                    <ul class="collection with-header">
                        <li class="collection-header">
                            <h5>Sulawesi Selatan</h5>
                        </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Confirmed</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${sulsel.data[3].kasusPosi}</b></div>
                            </div>
                        </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Recovered</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${sulsel.data[3].kasusSemb}</b></div>
                            </div>
                         </li>
                        <li class="collection-item">
                            <div class="row">
                                <div class="col s7 m5">Deaths</div>
                                <div class="col s1 m2">:</div>
                                <div class="col s3 m5 center-align"><b>${sulsel.data[3].kasusMeni}<b></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> `;
    };

    const getProvinsi = () => {
        fetch(`https://indonesia-covid-19.mathdro.id/api/provinsi`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.error) {
                    showResponMessage(responseJson.message);
                } else {
                    renderAllProvinsi(responseJson);
                }
            })
            .catch(error => {
                showResponMessage(error);
            })
    };
    getProvinsi();

    const renderAllProvinsi = (provinsies) => {
        const allProvinsies = document.querySelector("#allProvinsies");
        allProvinsies.innerHTML = "";

        for (let i = 0; i < provinsies.data.length; i++) {
            allProvinsies.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${provinsies.data[i].provinsi}</td>
                <td class="center-align">${provinsies.data[i].kasusPosi}</td>
                <td class="center-align">${provinsies.data[i].kasusSemb}</td>
                <td class="center-align">${provinsies.data[i].kasusMeni}</td>
            </tr>
            `;
        }
        const imageCovid = document.querySelector("#imageCovid")
        imageCovid.innerHTML = "";
        imageCovid.innerHTML = `<img src="https://covid19.mathdro.id/api/og">`;

    }

    const showResponMessage = (message = "Check your internet connection") => {
        alert(message);
    };

}

export default main;