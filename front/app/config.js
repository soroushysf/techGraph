/**
 * Created by soroush on 12/10/16.
 */

var menuItems = [
    {
        title : "Home",
        href : '#/searchBar',
        id : "item1"
    },
    {
        title : "View",
        href : '/',
        id : "item2"

    },
    {
        title : "Settings",
        href : '/',
        id : "item3"

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