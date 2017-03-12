/**
 * Created by soroush on 12/10/16.
 */

var menuItems = [
    {
        title : "Home",
        href : '#/Home',
        id : "item1",
        icon : "fa fa-home"
    },
    {
        title : "Graph Table",
        href : '#/graphTable',
        id : "item2",
        icon : "fa fa-table"

    },
    {
        title : "Settings",
        href : '/',
        id : "item3",
        icon : "fa fa-cogs"

    }
];




var newNodes = [
    {
        "id": "1",
        "title": "Application Service Providers",
        "results_returned": "24823",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "2",
        "title": "Business Tools",
        "results_returned": "28131",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "3",
        "title": "Communications Software",
        "results_returned": "100032",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "4",
        "title": "Artificial Intelligence",
        "results_returned": "39129",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "5",
        "title": "Biometrics",
        "results_returned": "8973",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "6",
        "title": "Databases",
        "results_returned": "83477",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "7",
        "title": "Cloud computing",
        "results_returned": "41382",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "8",
        "title": "Embeded Softwares",
        "results_returned": "138",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "9",
        "title": "Nanotechnology",
        "results_returned": "12231",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "10",
        "title": "Data Compression",
        "results_returned": "28711",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "11",
        "title": "3-D Graphics",
        "results_returned": "6955",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "12",
        "title": "Handhelds",
        "results_returned": "307",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "13",
        "title": "Wireless Communication",
        "results_returned": "113302",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "14",
        "title": "e-Commerce",
        "results_returned": "4962",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "15",
        "title": "Programming Tools",
        "results_returned": "87822",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "16",
        "title": "Online Services",
        "results_returned": "62198",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "17",
        "title": "Virtual Reality",
        "results_returned": "15466",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "18",
        "title": "Computer Entertainment",
        "results_returned": "6948",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "19",
        "title": "Semantic Web",
        "results_returned": "16534",
        "completed": "Yes",
        "fis_status": "5"
    }
];

var newLinks =
[





        {
            "id": "6",
            "term_id1": "1",
            "term_id2": "7",
            "common_fis": "0.604487",
            "common_twin": "0.246032",
            "common_triple": "0.125",
            "weighted_similarity": "0.245258"
        },





        {
            "id": "12",
            "term_id1": "1",
            "term_id2": "13",
            "common_fis": "0.542656",
            "common_twin": "0.0952381",
            "common_triple": "0.125",
            "weighted_similarity": "0.184689"
        },


        {
            "id": "15",
            "term_id1": "1",
            "term_id2": "16",
            "common_fis": "0.685364",
            "common_twin": "0.365079",
            "common_triple": "0.125",
            "weighted_similarity": "0.29842"
        },


        {
            "id": "18",
            "term_id1": "1",
            "term_id2": "19",
            "common_fis": "0.574485",
            "common_twin": "0.206349",
            "common_triple": "0.375",
            "weighted_similarity": "0.352031"
        },
        {
            "id": "20",
            "term_id1": "2",
            "term_id2": "3",
            "common_fis": "0.603753",
            "common_twin": "0.193182",
            "common_triple": "0",
            "weighted_similarity": "0.165019"
        },
        {
            "id": "21",
            "term_id1": "2",
            "term_id2": "4",
            "common_fis": "0.562959",
            "common_twin": "0.170455",
            "common_triple": "0.142857",
            "weighted_similarity": "0.222073"
        },

        {
            "id": "23",
            "term_id1": "2",
            "term_id2": "6",
            "common_fis": "0.566222",
            "common_twin": "0.147727",
            "common_triple": "0",
            "weighted_similarity": "0.143613"
        },
        {
            "id": "24",
            "term_id1": "2",
            "term_id2": "7",
            "common_fis": "0.573565",
            "common_twin": "0.170455",
            "common_triple": "0",
            "weighted_similarity": "0.152412"
        },






        {
            "id": "31",
            "term_id1": "2",
            "term_id2": "14",
            "common_fis": "0.565135",
            "common_twin": "0.204545",
            "common_triple": "0",
            "weighted_similarity": "0.162371"
        },
        {
            "id": "32",
            "term_id1": "2",
            "term_id2": "15",
            "common_fis": "0.602121",
            "common_twin": "0.193182",
            "common_triple": "0",
            "weighted_similarity": "0.164747"
        },
        {
            "id": "33",
            "term_id1": "2",
            "term_id2": "16",
            "common_fis": "0.633125",
            "common_twin": "0.136364",
            "common_triple": "0",
            "weighted_similarity": "0.150975"
        },
















        {
            "id": "51",
            "term_id1": "3",
            "term_id2": "16",
            "common_fis": "0.600311",
            "common_twin": "0.12766",
            "common_triple": "0",
            "weighted_similarity": "0.142605"
        },





        {
            "id": "59",
            "term_id1": "4",
            "term_id2": "6",
            "common_fis": "0.545109",
            "common_twin": "0.169231",
            "common_triple": "0",
            "weighted_similarity": "0.147262"
        },
        {
            "id": "60",
            "term_id1": "4",
            "term_id2": "7",
            "common_fis": "0.505322",
            "common_twin": "0.184615",
            "common_triple": "0",
            "weighted_similarity": "0.145759"
        },


        {
            "id": "63",
            "term_id1": "4",
            "term_id2": "10",
            "common_fis": "0.531424",
            "common_twin": "0.246154",
            "common_triple": "0",
            "weighted_similarity": "0.170622"
        },
        {
            "id": "64",
            "term_id1": "4",
            "term_id2": "11",
            "common_fis": "0.514952",
            "common_twin": "0.169231",
            "common_triple": "0",
            "weighted_similarity": "0.142236"
        },

        {
            "id": "66",
            "term_id1": "4",
            "term_id2": "13",
            "common_fis": "0.516979",
            "common_twin": "0.169231",
            "common_triple": "0",
            "weighted_similarity": "0.142573"
        },
        {
            "id": "67",
            "term_id1": "4",
            "term_id2": "14",
            "common_fis": "0.517739",
            "common_twin": "0.184615",
            "common_triple": "0",
            "weighted_similarity": "0.147828"
        },

        {
            "id": "69",
            "term_id1": "4",
            "term_id2": "16",
            "common_fis": "0.563102",
            "common_twin": "0.169231",
            "common_triple": "0",
            "weighted_similarity": "0.150261"
        },




        {
            "id": "77",
            "term_id1": "5",
            "term_id2": "6",
            "common_fis": "0.573461",
            "common_twin": "0.102804",
            "common_triple": "0.1",
            "weighted_similarity": "0.179845"
        },




        {
            "id": "82",
            "term_id1": "5",
            "term_id2": "11",
            "common_fis": "0.543092",
            "common_twin": "0.130841",
            "common_triple": "0.1",
            "weighted_similarity": "0.184129"
        },







        {
            "id": "90",
            "term_id1": "5",
            "term_id2": "19",
            "common_fis": "0.49959",
            "common_twin": "0.102804",
            "common_triple": "0.1",
            "weighted_similarity": "0.167533"
        },

        {
            "id": "96",
            "term_id1": "6",
            "term_id2": "7",
            "common_fis": "0.531728",
            "common_twin": "0.263889",
            "common_triple": "0",
            "weighted_similarity": "0.176584"
        },


        {
            "id": "99",
            "term_id1": "6",
            "term_id2": "10",
            "common_fis": "0.574618",
            "common_twin": "0.291667",
            "common_triple": "0.333333",
            "weighted_similarity": "0.359658"
        },
        {
            "id": "100",
            "term_id1": "6",
            "term_id2": "11",
            "common_fis": "0.532481",
            "common_twin": "0.152778",
            "common_triple": "0.666667",
            "weighted_similarity": "0.473006"
        },



        {
            "id": "104",
            "term_id1": "6",
            "term_id2": "15",
            "common_fis": "0.538249",
            "common_twin": "0.152778",
            "common_triple": "0",
            "weighted_similarity": "0.140634"
        },
        {
            "id": "105",
            "term_id1": "6",
            "term_id2": "16",
            "common_fis": "0.575621",
            "common_twin": "0.180556",
            "common_triple": "0",
            "weighted_similarity": "0.156122"
        },


        {
            "id": "108",
            "term_id1": "6",
            "term_id2": "19",
            "common_fis": "0.534236",
            "common_twin": "0.263889",
            "common_triple": "0.333333",
            "weighted_similarity": "0.343669"
        },








        {
            "id": "123",
            "term_id1": "7",
            "term_id2": "16",
            "common_fis": "0.662378",
            "common_twin": "0.147651",
            "common_triple": "0",
            "weighted_similarity": "0.159613"
        },



        {
            "id": "134",
            "term_id1": "8",
            "term_id2": "9",
            "common_fis": "0.658884",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.309814"
        },
        {
            "id": "135",
            "term_id1": "8",
            "term_id2": "10",
            "common_fis": "0.703872",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.317312"
        },
        {
            "id": "136",
            "term_id1": "8",
            "term_id2": "11",
            "common_fis": "0.688497",
            "common_twin": "0.4",
            "common_triple": "0",
            "weighted_similarity": "0.248083"
        },
        {
            "id": "137",
            "term_id1": "8",
            "term_id2": "12",
            "common_fis": "0.667995",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.311333"
        },
        {
            "id": "138",
            "term_id1": "8",
            "term_id2": "13",
            "common_fis": "0.686788",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.314465"
        },
        {
            "id": "139",
            "term_id1": "8",
            "term_id2": "14",
            "common_fis": "0.626993",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.304499"
        },
        {
            "id": "140",
            "term_id1": "8",
            "term_id2": "15",
            "common_fis": "0.665718",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.310953"
        },
        {
            "id": "141",
            "term_id1": "8",
            "term_id2": "16",
            "common_fis": "0.66287",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.310478"
        },
        {
            "id": "142",
            "term_id1": "8",
            "term_id2": "17",
            "common_fis": "0.665148",
            "common_twin": "0.4",
            "common_triple": "0",
            "weighted_similarity": "0.244191"
        },
        {
            "id": "143",
            "term_id1": "8",
            "term_id2": "18",
            "common_fis": "0.688497",
            "common_twin": "0.6",
            "common_triple": "0",
            "weighted_similarity": "0.314749"
        },
        {
            "id": "144",
            "term_id1": "8",
            "term_id2": "19",
            "common_fis": "0.620729",
            "common_twin": "0.4",
            "common_triple": "0",
            "weighted_similarity": "0.236788"
        },
        {
            "id": "153",
            "term_id1": "9",
            "term_id2": "10",
            "common_fis": "0.470814",
            "common_twin": "0.210526",
            "common_triple": "0",
            "weighted_similarity": "0.148644"
        },
        {
            "id": "154",
            "term_id1": "9",
            "term_id2": "11",
            "common_fis": "0.496036",
            "common_twin": "0.263158",
            "common_triple": "0",
            "weighted_similarity": "0.170392"
        },
        {
            "id": "155",
            "term_id1": "9",
            "term_id2": "12",
            "common_fis": "0.422532",
            "common_twin": "0.210526",
            "common_triple": "0",
            "weighted_similarity": "0.140597"
        },
        {
            "id": "156",
            "term_id1": "9",
            "term_id2": "13",
            "common_fis": "0.479462",
            "common_twin": "0.210526",
            "common_triple": "0",
            "weighted_similarity": "0.150086"
        },

        {
            "id": "158",
            "term_id1": "9",
            "term_id2": "15",
            "common_fis": "0.455201",
            "common_twin": "0.210526",
            "common_triple": "0",
            "weighted_similarity": "0.146042"
        },
        {
            "id": "159",
            "term_id1": "9",
            "term_id2": "16",
            "common_fis": "0.45424",
            "common_twin": "0.210526",
            "common_triple": "0",
            "weighted_similarity": "0.145882"
        },

        {
            "id": "161",
            "term_id1": "9",
            "term_id2": "18",
            "common_fis": "0.476339",
            "common_twin": "0.210526",
            "common_triple": "0",
            "weighted_similarity": "0.149565"
        },

        {
            "id": "172",
            "term_id1": "10",
            "term_id2": "11",
            "common_fis": "0.546831",
            "common_twin": "0.137405",
            "common_triple": "0.0833333",
            "weighted_similarity": "0.178607"
        },

        {
            "id": "174",
            "term_id1": "10",
            "term_id2": "13",
            "common_fis": "0.530747",
            "common_twin": "0.19084",
            "common_triple": "0.25",
            "weighted_similarity": "0.277071"
        }
];

