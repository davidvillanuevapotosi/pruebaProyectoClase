const ctxVentas = document.getElementById("graficoVentas");

new Chart(ctxVentas,{
    type: "bar",
    data:{
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            label: "Ventas en pesos",
            data: [2500000, 3000000, 2800000, 4200000, 3900000, 5200000],
            backgroundColor: "#DD403A",
        }]
    },

    Options: {
        responsive: true,
        Plugins:{
            legend:{
                display:true
            },
            tittle:{
                display:false
            }
        }
    }
});

const ctxServicios = document.getElementById("graficosServicios");

new Chart(ctxServicios,{
    type: "doughnut",
    data:{
        labels: ["Consulta", "Vacionación", "Baño", "Peluqueria", "Urgencias"],
        datasets: [{
            label: "Servicios",
            data: [35, 25, 20, 15, 5],
            backgroundColor: ["#DD403A",
             "#2EEF",
             "#E9C",
             "#3add91",
             "#7f77ee",
            ]
        }]
    },

    Options:{
        responsive: true,
        cotout: "55%",
        plugins:{
            legend:{
                position: "botton"
            }
        }
    }
})