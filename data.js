var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "Hall",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5183587433019703,
          "pitch": -0.09733158856558788,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": 0.13098512673110818,
          "pitch": 0.04654048965674207,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.4379337988806498,
          "pitch": 0.028175005620454385,
          "rotation": 0,
          "target": "3-bed-room-1"
        },
        {
          "yaw": 3.0242199821425775,
          "pitch": 0.019482428136623042,
          "rotation": 0,
          "target": "2-swimming-pool"
        },
        {
          "yaw": -2.0318477440727243,
          "pitch": -0.4135330308665175,
          "rotation": 0,
          "target": "8-upstairs-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 300,
      "initialViewParameters": {
        "yaw": 0.5183239645981885,
        "pitch": 0.017329748660428024,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.9970701221486546,
          "pitch": 0.06502959718411105,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": 3.1395071742913743,
          "pitch": 0.039879377159074636,
          "rotation": 0,
          "target": "3-bed-room-1"
        },
        {
          "yaw": 2.2299609935652933,
          "pitch": 0.020070039592685163,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-swimming-pool",
      "name": "Swimming Pool",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8633386172170123,
          "pitch": 0.007657438590273458,
          "rotation": 0,
          "target": "6-room-outside"
        },
        {
          "yaw": -1.9916990862982473,
          "pitch": -0.015668068133788182,
          "rotation": 0,
          "target": "4-common-bathroom"
        },
        {
          "yaw": 3.136809054154244,
          "pitch": 0.02424480958861963,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bed-room-1",
      "name": "Bed Room 1",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.47172120864435385,
          "pitch": -0.1164287659233576,
          "rotation": 0,
          "target": "1-entrance"
        },
        {
          "yaw": -3.0760063924065584,
          "pitch": -0.06407137054667444,
          "rotation": 0,
          "target": "6-room-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6365365637342979,
          "pitch": 0.03491451360052622,
          "title": "Attached Bath Room",
          "text": "similar to upstairs room bathroom"
        }
      ]
    },
    {
      "id": "4-common-bathroom",
      "name": "Common BathRoom",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8903610660062338,
          "pitch": 0.18270167509744795,
          "rotation": 0,
          "target": "2-swimming-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3047947244946805,
          "pitch": 0.015297315595152128,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room-outside",
      "name": "Room Outside",
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
        }
      ],
      "faceSize": 843.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.19903374785419814,
          "pitch": 0.005298507433524335,
          "rotation": 0,
          "target": "4-common-bathroom"
        },
        {
          "yaw": -0.2500071908483861,
          "pitch": 0.13590339767265824,
          "rotation": 0,
          "target": "2-swimming-pool"
        },
        {
          "yaw": -1.4775238547355762,
          "pitch": -0.07153421849001163,
          "rotation": 0,
          "target": "3-bed-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-attached-bathroom",
      "name": "Attached BathRoom",
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
        }
      ],
      "faceSize": 875,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9121883626387675,
          "pitch": 0.12155166323592859,
          "rotation": 0,
          "target": "8-upstairs-bed-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-upstairs-bed-room",
      "name": "Upstairs Bed Room",
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
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8144576579613698,
          "pitch": -0.15518256948416287,
          "rotation": 0,
          "target": "7-attached-bathroom"
        },
        {
          "yaw": -1.8219879821268385,
          "pitch": 0.1654902708958481,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "sample interior project 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
