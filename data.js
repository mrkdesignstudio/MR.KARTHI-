var APP_DATA = {
  "scenes": [
    {
      "id": "0-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.004441463501958509,
        "pitch": 0.04141999055382328,
        "fov": 1.3825166222326657
      },
      "linkHotspots": [
        {
          "yaw": -1.6428224395214066,
          "pitch": 0.10012356925037125,
          "rotation": 1.5707963267948966,
          "target": "2-pooja"
        },
        {
          "yaw": -2.0625977833900926,
          "pitch": 0.14555661727367308,
          "rotation": 4.71238898038469,
          "target": "1-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8143740516833518,
          "pitch": 0.08934782675294883,
          "rotation": 0,
          "target": "2-pooja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pooja",
      "name": "Pooja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.519450706185503,
          "pitch": 0.35741878002338545,
          "rotation": 0.7853981633974483,
          "target": "1-living"
        },
        {
          "yaw": 1.826268986593651,
          "pitch": 0.29219340546101336,
          "rotation": 10.995574287564278,
          "target": "0-foyer"
        },
        {
          "yaw": 0.4170879412338788,
          "pitch": 0.11373224275987504,
          "rotation": 10.995574287564278,
          "target": "5-gmaster-bed"
        },
        {
          "yaw": -1.8218832060319556,
          "pitch": 0.1236580391781601,
          "rotation": 1.5707963267948966,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7849101941373107,
          "pitch": 0.21940520639466143,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": -1.3418542803147613,
          "pitch": 0.27122837474335526,
          "rotation": 10.995574287564278,
          "target": "2-pooja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4828132525186053,
          "pitch": 0.3704716029849937,
          "rotation": 5.497787143782138,
          "target": "3-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-gmaster-bed",
      "name": "G.Master bed",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5536293042067193,
          "pitch": 0.047785167723032984,
          "rotation": 1.5707963267948966,
          "target": "2-pooja"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Mr.Karthik - 360 -26.02.2025",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
