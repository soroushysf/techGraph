/**
 * Created by soroush on 12/10/16.
 */

var menuItems = [
    {
        title : "Home",
        href : '#/Home',
        id : "item1",
        icon : "icon-home"
    },
    {
        title : "View",
        href : '#/graphTable',
        id : "item2",
        icon : "fa fa-bar-chart"

    },
    {
        title : "Settings",
        href : '/',
        id : "item3",
        icon : "fa fa-cog"

    }
];


var nodes = [
    {"id": "TechMining"          },
    {"id": "DataMining"        },
    {"id": "CMOS" },
    {"id": "Logic"    },
    {"id": "OrientDB"    },
    {"id": "AngularJs"        },
    {"id": "Visualization"    },
    {"id": "LowPower"        },
    {"id": "Algorithm"           },
    {"id": "textMining"          },
    {"id": "SQL"         },
    {"id": "JAVA"         },
    {"id": "NodeJs"      },
    {"id": "distributedSystems"         },
    {"id": "cloudComputing"         },
    {"id": "MOSFET"         },
    {"id": "javascript"       },
    {"id": "NLP"       },
    {"id": "loadBalancing"         },
    {"id": "D3"     },
    {"id": "AWS"       }
];
var links = [
    {"source": "AWS", "target": "loadBalancing", "value": 1},
    {"source": "D3", "target": "javascript", "value": 2},
    {"source": "loadBalancing", "target": "NodeJs", "value": 3},
    {"source": "NLP", "target": "textMining", "value": 2},
    {"source": "javascript", "target": "AngularJs", "value": 1},
    {"source": "javascript", "target": "NodeJs", "value": 1},
    {"source": "MOSFET", "target": "CMOS", "value": 1},
    {"source": "MOSFET", "target": "LowPower", "value": 1},
    {"source": "CMOS", "target": "LowPower", "value": 2},
    {"source": "distributedSystems", "target": "OrientDB", "value": 1},
    {"source": "distributedSystems", "target": "NodeJs", "value": 1},
    {"source": "JAVA", "target": "SQL", "value": 3},
    {"source": "Algorithm", "target": "JAVA", "value": 3},
    {"source": "Visualization", "target": "AngularJs", "value": 3},
    {"source": "Logic", "target": "LowPower", "value": 1},
    {"source": "TechMining", "target": "DataMining", "value": 1},
    {"source": "TechMining", "target": "textMining", "value": 1},
    {"source": "DataMining", "target": "textMining", "value": 1},
    {"source": "AWS", "target": "NodeJs", "value": 2},
    {"source": "LowPower", "target": "NodeJs", "value": 2},
    {"source": "Algorithm", "target": "javascript", "value": 2},
    {"source": "TechMining", "target": "OrientDB", "value": 2},
    {"source": "cloudComputing", "target": "JAVA", "value": 2}
];

var newNodes = [
    {
        "id": "1",
        "term_title": "Application Service Providers",
        "results_returned": "24823",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "2",
        "term_title": "Business Tools",
        "results_returned": "28131",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "3",
        "term_title": "Communications Software",
        "results_returned": "100032",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "4",
        "term_title": "Artificial Intelligence",
        "results_returned": "39129",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "5",
        "term_title": "Biometrics",
        "results_returned": "8973",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "6",
        "term_title": "Databases",
        "results_returned": "83477",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "7",
        "term_title": "Cloud computing",
        "results_returned": "41382",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "8",
        "term_title": "Embeded Softwares",
        "results_returned": "138",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "9",
        "term_title": "Nanotechnology",
        "results_returned": "12231",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "10",
        "term_title": "Data Compression",
        "results_returned": "28711",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "11",
        "term_title": "3-D Graphics",
        "results_returned": "6955",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "12",
        "term_title": "Handhelds",
        "results_returned": "307",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "13",
        "term_title": "Wireless Communication",
        "results_returned": "113302",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "14",
        "term_title": "e-Commerce",
        "results_returned": "4962",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "15",
        "term_title": "Programming Tools",
        "results_returned": "87822",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "16",
        "term_title": "Online Services",
        "results_returned": "62198",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "17",
        "term_title": "Virtual Reality",
        "results_returned": "15466",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "18",
        "term_title": "Computer Entertainment",
        "results_returned": "6948",
        "completed": "Yes",
        "fis_status": "5"
    },
    {
        "id": "19",
        "term_title": "Semantic Web",
        "results_returned": "16534",
        "completed": "Yes",
        "fis_status": "5"
    }
]

var newLinks =
[
        {
            "id": "1",
            "term_id1": "1",
            "term_id2": "2",
            "common_fis": "0.583355",
            "common_twin": "0.126984",
            "common_triple": "0",
            "weighted_similarity": "0.139554"
        },
        {
            "id": "2",
            "term_id1": "1",
            "term_id2": "3",
            "common_fis": "0.572137",
            "common_twin": "0.111111",
            "common_triple": "0",
            "weighted_similarity": "0.132393"
        },
        {
            "id": "3",
            "term_id1": "1",
            "term_id2": "4",
            "common_fis": "0.536655",
            "common_twin": "0.111111",
            "common_triple": "0",
            "weighted_similarity": "0.12648"
        },
        {
            "id": "4",
            "term_id1": "1",
            "term_id2": "5",
            "common_fis": "0.486564",
            "common_twin": "0.103175",
            "common_triple": "0",
            "weighted_similarity": "0.115486"
        },
        {
            "id": "5",
            "term_id1": "1",
            "term_id2": "6",
            "common_fis": "0.561962",
            "common_twin": "0.0873016",
            "common_triple": "0",
            "weighted_similarity": "0.122761"
        },
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
            "id": "7",
            "term_id1": "1",
            "term_id2": "8",
            "common_fis": "0.294808",
            "common_twin": "0.0238095",
            "common_triple": "0",
            "weighted_similarity": "0.0570712"
        },
        {
            "id": "8",
            "term_id1": "1",
            "term_id2": "9",
            "common_fis": "0.457083",
            "common_twin": "0.0238095",
            "common_triple": "0",
            "weighted_similarity": "0.084117"
        },
        {
            "id": "9",
            "term_id1": "1",
            "term_id2": "10",
            "common_fis": "0.540047",
            "common_twin": "0.119048",
            "common_triple": "0",
            "weighted_similarity": "0.12969"
        },
        {
            "id": "10",
            "term_id1": "1",
            "term_id2": "11",
            "common_fis": "0.48839",
            "common_twin": "0.0873016",
            "common_triple": "0",
            "weighted_similarity": "0.110499"
        },
        {
            "id": "11",
            "term_id1": "1",
            "term_id2": "12",
            "common_fis": "0.491521",
            "common_twin": "0.0714286",
            "common_triple": "0",
            "weighted_similarity": "0.10573"
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
            "id": "13",
            "term_id1": "1",
            "term_id2": "14",
            "common_fis": "0.552048",
            "common_twin": "0.142857",
            "common_triple": "0",
            "weighted_similarity": "0.139627"
        },
        {
            "id": "14",
            "term_id1": "1",
            "term_id2": "15",
            "common_fis": "0.549439",
            "common_twin": "0.0714286",
            "common_triple": "0",
            "weighted_similarity": "0.115383"
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
            "id": "16",
            "term_id1": "1",
            "term_id2": "17",
            "common_fis": "0.519958",
            "common_twin": "0.0873016",
            "common_triple": "0",
            "weighted_similarity": "0.11576"
        },
        {
            "id": "17",
            "term_id1": "1",
            "term_id2": "18",
            "common_fis": "0.528046",
            "common_twin": "0.0714286",
            "common_triple": "0",
            "weighted_similarity": "0.111817"
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
            "id": "19",
            "term_id1": "2",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
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
            "id": "22",
            "term_id1": "2",
            "term_id2": "5",
            "common_fis": "0.481915",
            "common_twin": "0.0795455",
            "common_triple": "0",
            "weighted_similarity": "0.106834"
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
            "id": "25",
            "term_id1": "2",
            "term_id2": "8",
            "common_fis": "0.28991",
            "common_twin": "0.0340909",
            "common_triple": "0",
            "weighted_similarity": "0.059682"
        },
        {
            "id": "26",
            "term_id1": "2",
            "term_id2": "9",
            "common_fis": "0.48409",
            "common_twin": "0.0454545",
            "common_triple": "0",
            "weighted_similarity": "0.0958332"
        },
        {
            "id": "27",
            "term_id1": "2",
            "term_id2": "10",
            "common_fis": "0.519173",
            "common_twin": "0.125",
            "common_triple": "0",
            "weighted_similarity": "0.128196"
        },
        {
            "id": "28",
            "term_id1": "2",
            "term_id2": "11",
            "common_fis": "0.487626",
            "common_twin": "0.0909091",
            "common_triple": "0",
            "weighted_similarity": "0.111574"
        },
        {
            "id": "29",
            "term_id1": "2",
            "term_id2": "12",
            "common_fis": "0.487626",
            "common_twin": "0.0795455",
            "common_triple": "0",
            "weighted_similarity": "0.107786"
        },
        {
            "id": "30",
            "term_id1": "2",
            "term_id2": "13",
            "common_fis": "0.524069",
            "common_twin": "0.0795455",
            "common_triple": "0",
            "weighted_similarity": "0.11386"
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
            "id": "34",
            "term_id1": "2",
            "term_id2": "17",
            "common_fis": "0.545553",
            "common_twin": "0.102273",
            "common_triple": "0",
            "weighted_similarity": "0.125016"
        },
        {
            "id": "35",
            "term_id1": "2",
            "term_id2": "18",
            "common_fis": "0.5548",
            "common_twin": "0.102273",
            "common_triple": "0",
            "weighted_similarity": "0.126558"
        },
        {
            "id": "36",
            "term_id1": "2",
            "term_id2": "19",
            "common_fis": "0.566766",
            "common_twin": "0.125",
            "common_triple": "0",
            "weighted_similarity": "0.136128"
        },
        {
            "id": "37",
            "term_id1": "3",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "38",
            "term_id1": "3",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "39",
            "term_id1": "3",
            "term_id2": "4",
            "common_fis": "0.546138",
            "common_twin": "0.106383",
            "common_triple": "0",
            "weighted_similarity": "0.126484"
        },
        {
            "id": "40",
            "term_id1": "3",
            "term_id2": "5",
            "common_fis": "0.487299",
            "common_twin": "0.0744681",
            "common_triple": "0",
            "weighted_similarity": "0.106039"
        },
        {
            "id": "41",
            "term_id1": "3",
            "term_id2": "6",
            "common_fis": "0.544583",
            "common_twin": "0.0957447",
            "common_triple": "0",
            "weighted_similarity": "0.122679"
        },
        {
            "id": "42",
            "term_id1": "3",
            "term_id2": "7",
            "common_fis": "0.549767",
            "common_twin": "0.12766",
            "common_triple": "0",
            "weighted_similarity": "0.134181"
        },
        {
            "id": "43",
            "term_id1": "3",
            "term_id2": "8",
            "common_fis": "0.297823",
            "common_twin": "0.0319149",
            "common_triple": "0",
            "weighted_similarity": "0.0602754"
        },
        {
            "id": "44",
            "term_id1": "3",
            "term_id2": "9",
            "common_fis": "0.493002",
            "common_twin": "0.0425532",
            "common_triple": "0",
            "weighted_similarity": "0.0963513"
        },
        {
            "id": "45",
            "term_id1": "3",
            "term_id2": "10",
            "common_fis": "0.531104",
            "common_twin": "0.0957447",
            "common_triple": "0",
            "weighted_similarity": "0.120432"
        },
        {
            "id": "46",
            "term_id1": "3",
            "term_id2": "11",
            "common_fis": "0.490928",
            "common_twin": "0.0851064",
            "common_triple": "0",
            "weighted_similarity": "0.11019"
        },
        {
            "id": "47",
            "term_id1": "3",
            "term_id2": "12",
            "common_fis": "0.495075",
            "common_twin": "0.0638298",
            "common_triple": "0",
            "weighted_similarity": "0.103789"
        },
        {
            "id": "48",
            "term_id1": "3",
            "term_id2": "13",
            "common_fis": "0.543805",
            "common_twin": "0.0851064",
            "common_triple": "0",
            "weighted_similarity": "0.119003"
        },
        {
            "id": "49",
            "term_id1": "3",
            "term_id2": "14",
            "common_fis": "0.52592",
            "common_twin": "0.138298",
            "common_triple": "0",
            "weighted_similarity": "0.133753"
        },
        {
            "id": "50",
            "term_id1": "3",
            "term_id2": "15",
            "common_fis": "0.56817",
            "common_twin": "0.12766",
            "common_triple": "0",
            "weighted_similarity": "0.137248"
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
            "id": "52",
            "term_id1": "3",
            "term_id2": "17",
            "common_fis": "0.541213",
            "common_twin": "0.0744681",
            "common_triple": "0",
            "weighted_similarity": "0.115025"
        },
        {
            "id": "53",
            "term_id1": "3",
            "term_id2": "18",
            "common_fis": "0.56169",
            "common_twin": "0.0851064",
            "common_triple": "0",
            "weighted_similarity": "0.121984"
        },
        {
            "id": "54",
            "term_id1": "3",
            "term_id2": "19",
            "common_fis": "0.531363",
            "common_twin": "0.117021",
            "common_triple": "0",
            "weighted_similarity": "0.127568"
        },
        {
            "id": "55",
            "term_id1": "4",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "56",
            "term_id1": "4",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "57",
            "term_id1": "4",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "58",
            "term_id1": "4",
            "term_id2": "5",
            "common_fis": "0.492651",
            "common_twin": "0.153846",
            "common_triple": "0",
            "weighted_similarity": "0.133391"
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
            "id": "61",
            "term_id1": "4",
            "term_id2": "8",
            "common_fis": "0.301318",
            "common_twin": "0.0461538",
            "common_triple": "0",
            "weighted_similarity": "0.0656042"
        },
        {
            "id": "62",
            "term_id1": "4",
            "term_id2": "9",
            "common_fis": "0.498479",
            "common_twin": "0.0461538",
            "common_triple": "0",
            "weighted_similarity": "0.0984645"
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
            "id": "65",
            "term_id1": "4",
            "term_id2": "12",
            "common_fis": "0.474658",
            "common_twin": "0.0923077",
            "common_triple": "0",
            "weighted_similarity": "0.109879"
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
            "id": "68",
            "term_id1": "4",
            "term_id2": "15",
            "common_fis": "0.542575",
            "common_twin": "0.138462",
            "common_triple": "0",
            "weighted_similarity": "0.136583"
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
            "id": "70",
            "term_id1": "4",
            "term_id2": "17",
            "common_fis": "0.541561",
            "common_twin": "0.138462",
            "common_triple": "0",
            "weighted_similarity": "0.136414"
        },
        {
            "id": "71",
            "term_id1": "4",
            "term_id2": "18",
            "common_fis": "0.556513",
            "common_twin": "0.138462",
            "common_triple": "0",
            "weighted_similarity": "0.138906"
        },
        {
            "id": "72",
            "term_id1": "4",
            "term_id2": "19",
            "common_fis": "0.509377",
            "common_twin": "0.153846",
            "common_triple": "0",
            "weighted_similarity": "0.136178"
        },
        {
            "id": "73",
            "term_id1": "5",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "74",
            "term_id1": "5",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "75",
            "term_id1": "5",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "76",
            "term_id1": "5",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
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
            "id": "78",
            "term_id1": "5",
            "term_id2": "7",
            "common_fis": "0.500958",
            "common_twin": "0.102804",
            "common_triple": "0",
            "weighted_similarity": "0.117761"
        },
        {
            "id": "79",
            "term_id1": "5",
            "term_id2": "8",
            "common_fis": "0.313543",
            "common_twin": "0.0186916",
            "common_triple": "0",
            "weighted_similarity": "0.0584877"
        },
        {
            "id": "80",
            "term_id1": "5",
            "term_id2": "9",
            "common_fis": "0.488099",
            "common_twin": "0.0186916",
            "common_triple": "0",
            "weighted_similarity": "0.0875803"
        },
        {
            "id": "81",
            "term_id1": "5",
            "term_id2": "10",
            "common_fis": "0.549658",
            "common_twin": "0.121495",
            "common_triple": "0",
            "weighted_similarity": "0.132108"
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
            "id": "83",
            "term_id1": "5",
            "term_id2": "12",
            "common_fis": "0.484268",
            "common_twin": "0.046729",
            "common_triple": "0",
            "weighted_similarity": "0.0962877"
        },
        {
            "id": "84",
            "term_id1": "5",
            "term_id2": "13",
            "common_fis": "0.516005",
            "common_twin": "0.102804",
            "common_triple": "0",
            "weighted_similarity": "0.120269"
        },
        {
            "id": "85",
            "term_id1": "5",
            "term_id2": "14",
            "common_fis": "0.510534",
            "common_twin": "0.0841122",
            "common_triple": "0",
            "weighted_similarity": "0.113126"
        },
        {
            "id": "86",
            "term_id1": "5",
            "term_id2": "15",
            "common_fis": "0.521477",
            "common_twin": "0.0654206",
            "common_triple": "0",
            "weighted_similarity": "0.10872"
        },
        {
            "id": "87",
            "term_id1": "5",
            "term_id2": "16",
            "common_fis": "0.550752",
            "common_twin": "0.0841122",
            "common_triple": "0",
            "weighted_similarity": "0.119829"
        },
        {
            "id": "88",
            "term_id1": "5",
            "term_id2": "17",
            "common_fis": "0.532148",
            "common_twin": "0.0747664",
            "common_triple": "0",
            "weighted_similarity": "0.113613"
        },
        {
            "id": "89",
            "term_id1": "5",
            "term_id2": "18",
            "common_fis": "0.560328",
            "common_twin": "0.0934579",
            "common_triple": "0",
            "weighted_similarity": "0.124541"
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
            "id": "91",
            "term_id1": "6",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "92",
            "term_id1": "6",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "93",
            "term_id1": "6",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "94",
            "term_id1": "6",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "95",
            "term_id1": "6",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
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
            "id": "97",
            "term_id1": "6",
            "term_id2": "8",
            "common_fis": "0.297718",
            "common_twin": "0.0277778",
            "common_triple": "0",
            "weighted_similarity": "0.0588789"
        },
        {
            "id": "98",
            "term_id1": "6",
            "term_id2": "9",
            "common_fis": "0.469526",
            "common_twin": "0.0416667",
            "common_triple": "0",
            "weighted_similarity": "0.0921432"
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
            "id": "101",
            "term_id1": "6",
            "term_id2": "12",
            "common_fis": "0.473288",
            "common_twin": "0.0833333",
            "common_triple": "0",
            "weighted_similarity": "0.106659"
        },
        {
            "id": "102",
            "term_id1": "6",
            "term_id2": "13",
            "common_fis": "0.512917",
            "common_twin": "0.0833333",
            "common_triple": "0",
            "weighted_similarity": "0.113264"
        },
        {
            "id": "103",
            "term_id1": "6",
            "term_id2": "14",
            "common_fis": "0.517933",
            "common_twin": "0.125",
            "common_triple": "0",
            "weighted_similarity": "0.127989"
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
            "id": "106",
            "term_id1": "6",
            "term_id2": "17",
            "common_fis": "0.521946",
            "common_twin": "0.138889",
            "common_triple": "0",
            "weighted_similarity": "0.133287"
        },
        {
            "id": "107",
            "term_id1": "6",
            "term_id2": "18",
            "common_fis": "0.536494",
            "common_twin": "0.111111",
            "common_triple": "0",
            "weighted_similarity": "0.126453"
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
            "id": "109",
            "term_id1": "7",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "110",
            "term_id1": "7",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "111",
            "term_id1": "7",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "112",
            "term_id1": "7",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "113",
            "term_id1": "7",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "114",
            "term_id1": "7",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "115",
            "term_id1": "7",
            "term_id2": "8",
            "common_fis": "0.307692",
            "common_twin": "0.0201342",
            "common_triple": "0",
            "weighted_similarity": "0.0579935"
        },
        {
            "id": "116",
            "term_id1": "7",
            "term_id2": "9",
            "common_fis": "0.488392",
            "common_twin": "0.0402685",
            "common_triple": "0",
            "weighted_similarity": "0.0948214"
        },
        {
            "id": "117",
            "term_id1": "7",
            "term_id2": "10",
            "common_fis": "0.566154",
            "common_twin": "0.107383",
            "common_triple": "0",
            "weighted_similarity": "0.130153"
        },
        {
            "id": "118",
            "term_id1": "7",
            "term_id2": "11",
            "common_fis": "0.504895",
            "common_twin": "0.0805369",
            "common_triple": "0",
            "weighted_similarity": "0.110995"
        },
        {
            "id": "119",
            "term_id1": "7",
            "term_id2": "12",
            "common_fis": "0.517762",
            "common_twin": "0.0872483",
            "common_triple": "0",
            "weighted_similarity": "0.115376"
        },
        {
            "id": "120",
            "term_id1": "7",
            "term_id2": "13",
            "common_fis": "0.572308",
            "common_twin": "0.100671",
            "common_triple": "0",
            "weighted_similarity": "0.128942"
        },
        {
            "id": "121",
            "term_id1": "7",
            "term_id2": "14",
            "common_fis": "0.564476",
            "common_twin": "0.0872483",
            "common_triple": "0",
            "weighted_similarity": "0.123162"
        },
        {
            "id": "122",
            "term_id1": "7",
            "term_id2": "15",
            "common_fis": "0.568112",
            "common_twin": "0.0671141",
            "common_triple": "0",
            "weighted_similarity": "0.117057"
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
            "id": "124",
            "term_id1": "7",
            "term_id2": "17",
            "common_fis": "0.55021",
            "common_twin": "0.0738255",
            "common_triple": "0",
            "weighted_similarity": "0.11631"
        },
        {
            "id": "125",
            "term_id1": "7",
            "term_id2": "18",
            "common_fis": "0.558042",
            "common_twin": "0.0604027",
            "common_triple": "0",
            "weighted_similarity": "0.113141"
        },
        {
            "id": "126",
            "term_id1": "7",
            "term_id2": "19",
            "common_fis": "0.561119",
            "common_twin": "0.0872483",
            "common_triple": "0",
            "weighted_similarity": "0.122603"
        },
        {
            "id": "127",
            "term_id1": "8",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "128",
            "term_id1": "8",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "129",
            "term_id1": "8",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "130",
            "term_id1": "8",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "131",
            "term_id1": "8",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "132",
            "term_id1": "8",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "133",
            "term_id1": "8",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
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
            "id": "145",
            "term_id1": "9",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "146",
            "term_id1": "9",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "147",
            "term_id1": "9",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "148",
            "term_id1": "9",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "149",
            "term_id1": "9",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "150",
            "term_id1": "9",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "151",
            "term_id1": "9",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "152",
            "term_id1": "9",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
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
            "id": "157",
            "term_id1": "9",
            "term_id2": "14",
            "common_fis": "0.40932",
            "common_twin": "0.157895",
            "common_triple": "0",
            "weighted_similarity": "0.120852"
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
            "id": "160",
            "term_id1": "9",
            "term_id2": "17",
            "common_fis": "0.46625",
            "common_twin": "0.157895",
            "common_triple": "0",
            "weighted_similarity": "0.13034"
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
            "id": "162",
            "term_id1": "9",
            "term_id2": "19",
            "common_fis": "0.40932",
            "common_twin": "0.157895",
            "common_triple": "0",
            "weighted_similarity": "0.120852"
        },
        {
            "id": "163",
            "term_id1": "10",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "164",
            "term_id1": "10",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "165",
            "term_id1": "10",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "166",
            "term_id1": "10",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "167",
            "term_id1": "10",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "168",
            "term_id1": "10",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "169",
            "term_id1": "10",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "170",
            "term_id1": "10",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "171",
            "term_id1": "10",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
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
            "id": "173",
            "term_id1": "10",
            "term_id2": "12",
            "common_fis": "0.463576",
            "common_twin": "0.0916031",
            "common_triple": "0",
            "weighted_similarity": "0.107797"
        },
        {
            "id": "174",
            "term_id1": "10",
            "term_id2": "13",
            "common_fis": "0.530747",
            "common_twin": "0.19084",
            "common_triple": "0.25",
            "weighted_similarity": "0.277071"
        },
        {
            "id": "175",
            "term_id1": "10",
            "term_id2": "14",
            "common_fis": "0.451041",
            "common_twin": "0.0687023",
            "common_triple": "0",
            "weighted_similarity": "0.0980742"
        },
        {
            "id": "176",
            "term_id1": "10",
            "term_id2": "15",
            "common_fis": "0.490776",
            "common_twin": "0.0610687",
            "common_triple": "0",
            "weighted_similarity": "0.102152"
        },
        {
            "id": "177",
            "term_id1": "10",
            "term_id2": "16",
            "common_fis": "0.516556",
            "common_twin": "0.129771",
            "common_triple": "0",
            "weighted_similarity": "0.12935"
        },
        {
            "id": "178",
            "term_id1": "10",
            "term_id2": "17",
            "common_fis": "0.481079",
            "common_twin": "0.0763359",
            "common_triple": "0",
            "weighted_similarity": "0.105625"
        },
        {
            "id": "179",
            "term_id1": "10",
            "term_id2": "18",
            "common_fis": "0.493377",
            "common_twin": "0.0839695",
            "common_triple": "0",
            "weighted_similarity": "0.110219"
        },
        {
            "id": "180",
            "term_id1": "10",
            "term_id2": "19",
            "common_fis": "0.466651",
            "common_twin": "0.137405",
            "common_triple": "0",
            "weighted_similarity": "0.123577"
        },
        {
            "id": "181",
            "term_id1": "11",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "182",
            "term_id1": "11",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "183",
            "term_id1": "11",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "184",
            "term_id1": "11",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "185",
            "term_id1": "11",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "186",
            "term_id1": "11",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "187",
            "term_id1": "11",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "188",
            "term_id1": "11",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "189",
            "term_id1": "11",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "190",
            "term_id1": "11",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "191",
            "term_id1": "11",
            "term_id2": "12",
            "common_fis": "0.414177",
            "common_twin": "0.1",
            "common_triple": "0",
            "weighted_similarity": "0.102363"
        },
        {
            "id": "192",
            "term_id1": "11",
            "term_id2": "13",
            "common_fis": "0.464333",
            "common_twin": "0.171429",
            "common_triple": "0.0909091",
            "weighted_similarity": "0.179986"
        },
        {
            "id": "193",
            "term_id1": "11",
            "term_id2": "14",
            "common_fis": "0.40058",
            "common_twin": "0.1",
            "common_triple": "0",
            "weighted_similarity": "0.100097"
        },
        {
            "id": "194",
            "term_id1": "11",
            "term_id2": "15",
            "common_fis": "0.446277",
            "common_twin": "0.114286",
            "common_triple": "0",
            "weighted_similarity": "0.112475"
        },
        {
            "id": "195",
            "term_id1": "11",
            "term_id2": "16",
            "common_fis": "0.443602",
            "common_twin": "0.1",
            "common_triple": "0",
            "weighted_similarity": "0.107267"
        },
        {
            "id": "196",
            "term_id1": "11",
            "term_id2": "17",
            "common_fis": "0.482167",
            "common_twin": "0.142857",
            "common_triple": "0",
            "weighted_similarity": "0.12798"
        },
        {
            "id": "197",
            "term_id1": "11",
            "term_id2": "18",
            "common_fis": "0.481944",
            "common_twin": "0.157143",
            "common_triple": "0",
            "weighted_similarity": "0.132705"
        },
        {
            "id": "198",
            "term_id1": "11",
            "term_id2": "19",
            "common_fis": "0.410834",
            "common_twin": "0.157143",
            "common_triple": "0.0909091",
            "weighted_similarity": "0.166308"
        },
        {
            "id": "199",
            "term_id1": "12",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "200",
            "term_id1": "12",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "201",
            "term_id1": "12",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "202",
            "term_id1": "12",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "203",
            "term_id1": "12",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "204",
            "term_id1": "12",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "205",
            "term_id1": "12",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "206",
            "term_id1": "12",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "207",
            "term_id1": "12",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "208",
            "term_id1": "12",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "209",
            "term_id1": "12",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "210",
            "term_id1": "12",
            "term_id2": "13",
            "common_fis": "0.62281",
            "common_twin": "0.428571",
            "common_triple": "0",
            "weighted_similarity": "0.246659"
        },
        {
            "id": "211",
            "term_id1": "12",
            "term_id2": "14",
            "common_fis": "0.540117",
            "common_twin": "0.214286",
            "common_triple": "0",
            "weighted_similarity": "0.161448"
        },
        {
            "id": "212",
            "term_id1": "12",
            "term_id2": "15",
            "common_fis": "0.574239",
            "common_twin": "0.214286",
            "common_triple": "0",
            "weighted_similarity": "0.167135"
        },
        {
            "id": "213",
            "term_id1": "12",
            "term_id2": "16",
            "common_fis": "0.612665",
            "common_twin": "0.285714",
            "common_triple": "0",
            "weighted_similarity": "0.197349"
        },
        {
            "id": "214",
            "term_id1": "12",
            "term_id2": "17",
            "common_fis": "0.588995",
            "common_twin": "0.357143",
            "common_triple": "0",
            "weighted_similarity": "0.217213"
        },
        {
            "id": "215",
            "term_id1": "12",
            "term_id2": "18",
            "common_fis": "0.611436",
            "common_twin": "0.285714",
            "common_triple": "0",
            "weighted_similarity": "0.197144"
        },
        {
            "id": "216",
            "term_id1": "12",
            "term_id2": "19",
            "common_fis": "0.543191",
            "common_twin": "0.285714",
            "common_triple": "0",
            "weighted_similarity": "0.18577"
        },
        {
            "id": "217",
            "term_id1": "13",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "218",
            "term_id1": "13",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "219",
            "term_id1": "13",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "220",
            "term_id1": "13",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "221",
            "term_id1": "13",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "222",
            "term_id1": "13",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "223",
            "term_id1": "13",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "224",
            "term_id1": "13",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "225",
            "term_id1": "13",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "226",
            "term_id1": "13",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "227",
            "term_id1": "13",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "228",
            "term_id1": "13",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "229",
            "term_id1": "13",
            "term_id2": "14",
            "common_fis": "0.440966",
            "common_twin": "0.057554",
            "common_triple": "0",
            "weighted_similarity": "0.0926789"
        },
        {
            "id": "230",
            "term_id1": "13",
            "term_id2": "15",
            "common_fis": "0.476577",
            "common_twin": "0.0431655",
            "common_triple": "0",
            "weighted_similarity": "0.0938181"
        },
        {
            "id": "231",
            "term_id1": "13",
            "term_id2": "16",
            "common_fis": "0.51912",
            "common_twin": "0.0863309",
            "common_triple": "0",
            "weighted_similarity": "0.115297"
        },
        {
            "id": "232",
            "term_id1": "13",
            "term_id2": "17",
            "common_fis": "0.476577",
            "common_twin": "0.057554",
            "common_triple": "0",
            "weighted_similarity": "0.0986142"
        },
        {
            "id": "233",
            "term_id1": "13",
            "term_id2": "18",
            "common_fis": "0.489723",
            "common_twin": "0.057554",
            "common_triple": "0",
            "weighted_similarity": "0.100805"
        },
        {
            "id": "234",
            "term_id1": "13",
            "term_id2": "19",
            "common_fis": "0.448614",
            "common_twin": "0.0647482",
            "common_triple": "0",
            "weighted_similarity": "0.0963517"
        },
        {
            "id": "235",
            "term_id1": "14",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "236",
            "term_id1": "14",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "237",
            "term_id1": "14",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "238",
            "term_id1": "14",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "239",
            "term_id1": "14",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "240",
            "term_id1": "14",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "241",
            "term_id1": "14",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "242",
            "term_id1": "14",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "243",
            "term_id1": "14",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "244",
            "term_id1": "14",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "245",
            "term_id1": "14",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "246",
            "term_id1": "14",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "247",
            "term_id1": "14",
            "term_id2": "14",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "248",
            "term_id1": "14",
            "term_id2": "15",
            "common_fis": "0.575121",
            "common_twin": "0.115942",
            "common_triple": "0",
            "weighted_similarity": "0.134501"
        },
        {
            "id": "249",
            "term_id1": "14",
            "term_id2": "16",
            "common_fis": "0.657484",
            "common_twin": "0.246377",
            "common_triple": "0",
            "weighted_similarity": "0.191706"
        },
        {
            "id": "250",
            "term_id1": "14",
            "term_id2": "17",
            "common_fis": "0.553536",
            "common_twin": "0.115942",
            "common_triple": "0",
            "weighted_similarity": "0.130903"
        },
        {
            "id": "251",
            "term_id1": "14",
            "term_id2": "18",
            "common_fis": "0.582505",
            "common_twin": "0.130435",
            "common_triple": "0",
            "weighted_similarity": "0.140562"
        },
        {
            "id": "252",
            "term_id1": "14",
            "term_id2": "19",
            "common_fis": "0.575689",
            "common_twin": "0.217391",
            "common_triple": "0",
            "weighted_similarity": "0.168412"
        },
        {
            "id": "253",
            "term_id1": "15",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "254",
            "term_id1": "15",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "255",
            "term_id1": "15",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "256",
            "term_id1": "15",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "257",
            "term_id1": "15",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "258",
            "term_id1": "15",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "259",
            "term_id1": "15",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "260",
            "term_id1": "15",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "261",
            "term_id1": "15",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "262",
            "term_id1": "15",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "263",
            "term_id1": "15",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "264",
            "term_id1": "15",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "265",
            "term_id1": "15",
            "term_id2": "14",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "266",
            "term_id1": "15",
            "term_id2": "15",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "267",
            "term_id1": "15",
            "term_id2": "16",
            "common_fis": "0.581591",
            "common_twin": "0.114286",
            "common_triple": "0",
            "weighted_similarity": "0.135027"
        },
        {
            "id": "268",
            "term_id1": "15",
            "term_id2": "17",
            "common_fis": "0.553799",
            "common_twin": "0.128571",
            "common_triple": "0",
            "weighted_similarity": "0.135157"
        },
        {
            "id": "269",
            "term_id1": "15",
            "term_id2": "18",
            "common_fis": "0.575217",
            "common_twin": "0.157143",
            "common_triple": "0",
            "weighted_similarity": "0.14825"
        },
        {
            "id": "270",
            "term_id1": "15",
            "term_id2": "19",
            "common_fis": "0.525242",
            "common_twin": "0.142857",
            "common_triple": "0",
            "weighted_similarity": "0.135159"
        },
        {
            "id": "271",
            "term_id1": "16",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "272",
            "term_id1": "16",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "273",
            "term_id1": "16",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "274",
            "term_id1": "16",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "275",
            "term_id1": "16",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "276",
            "term_id1": "16",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "277",
            "term_id1": "16",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "278",
            "term_id1": "16",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "279",
            "term_id1": "16",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "280",
            "term_id1": "16",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "281",
            "term_id1": "16",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "282",
            "term_id1": "16",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "283",
            "term_id1": "16",
            "term_id2": "14",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "284",
            "term_id1": "16",
            "term_id2": "15",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "285",
            "term_id1": "16",
            "term_id2": "16",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "286",
            "term_id1": "16",
            "term_id2": "17",
            "common_fis": "0.516995",
            "common_twin": "0.116883",
            "common_triple": "0",
            "weighted_similarity": "0.125127"
        },
        {
            "id": "287",
            "term_id1": "16",
            "term_id2": "18",
            "common_fis": "0.539815",
            "common_twin": "0.116883",
            "common_triple": "0",
            "weighted_similarity": "0.12893"
        },
        {
            "id": "288",
            "term_id1": "16",
            "term_id2": "19",
            "common_fis": "0.541003",
            "common_twin": "0.298701",
            "common_triple": "0.5",
            "weighted_similarity": "0.439734"
        },
        {
            "id": "289",
            "term_id1": "17",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "290",
            "term_id1": "17",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "291",
            "term_id1": "17",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "292",
            "term_id1": "17",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "293",
            "term_id1": "17",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "294",
            "term_id1": "17",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "295",
            "term_id1": "17",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "296",
            "term_id1": "17",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "297",
            "term_id1": "17",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "298",
            "term_id1": "17",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "299",
            "term_id1": "17",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "300",
            "term_id1": "17",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "301",
            "term_id1": "17",
            "term_id2": "14",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "302",
            "term_id1": "17",
            "term_id2": "15",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "303",
            "term_id1": "17",
            "term_id2": "16",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "304",
            "term_id1": "17",
            "term_id2": "17",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "305",
            "term_id1": "17",
            "term_id2": "18",
            "common_fis": "0.601595",
            "common_twin": "0.168675",
            "common_triple": "0",
            "weighted_similarity": "0.156491"
        },
        {
            "id": "306",
            "term_id1": "17",
            "term_id2": "19",
            "common_fis": "0.474269",
            "common_twin": "0.144578",
            "common_triple": "0",
            "weighted_similarity": "0.127238"
        },
        {
            "id": "307",
            "term_id1": "18",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "308",
            "term_id1": "18",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "309",
            "term_id1": "18",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "310",
            "term_id1": "18",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "311",
            "term_id1": "18",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "312",
            "term_id1": "18",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "313",
            "term_id1": "18",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "314",
            "term_id1": "18",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "315",
            "term_id1": "18",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "316",
            "term_id1": "18",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "317",
            "term_id1": "18",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "318",
            "term_id1": "18",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "319",
            "term_id1": "18",
            "term_id2": "14",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "320",
            "term_id1": "18",
            "term_id2": "15",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "321",
            "term_id1": "18",
            "term_id2": "16",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "322",
            "term_id1": "18",
            "term_id2": "17",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "323",
            "term_id1": "18",
            "term_id2": "18",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "324",
            "term_id1": "18",
            "term_id2": "19",
            "common_fis": "0.483262",
            "common_twin": "0.255814",
            "common_triple": "0",
            "weighted_similarity": "0.165815"
        },
        {
            "id": "325",
            "term_id1": "19",
            "term_id2": "2",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "326",
            "term_id1": "19",
            "term_id2": "3",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "327",
            "term_id1": "19",
            "term_id2": "4",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "328",
            "term_id1": "19",
            "term_id2": "5",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "329",
            "term_id1": "19",
            "term_id2": "6",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "330",
            "term_id1": "19",
            "term_id2": "7",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "331",
            "term_id1": "19",
            "term_id2": "8",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "332",
            "term_id1": "19",
            "term_id2": "9",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "333",
            "term_id1": "19",
            "term_id2": "10",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "334",
            "term_id1": "19",
            "term_id2": "11",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "335",
            "term_id1": "19",
            "term_id2": "12",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "336",
            "term_id1": "19",
            "term_id2": "13",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "337",
            "term_id1": "19",
            "term_id2": "14",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "338",
            "term_id1": "19",
            "term_id2": "15",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "339",
            "term_id1": "19",
            "term_id2": "16",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "340",
            "term_id1": "19",
            "term_id2": "17",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "341",
            "term_id1": "19",
            "term_id2": "18",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        },
        {
            "id": "342",
            "term_id1": "19",
            "term_id2": "19",
            "common_fis": "0",
            "common_twin": "0",
            "common_triple": "0",
            "weighted_similarity": "0"
        }
    ]

