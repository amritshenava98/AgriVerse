export type AgriVerse = {
    "address":"6Cnbn9dN11GXt9dhuR9SNzPQTUnJSApr6DWFrstzs7R4",
    "metadata":{
      "name":"agriverse",
      "version": "0.1.0",
      "spec": "0.1.0"
    },
    "instructions":[
      {
        "name": "initialize_farmer",
        "discriminator": [
          33,
          254,
          50,
          5,
          156,
          85,
          154,
          149
        ],
        "accounts": [
          {
            "name": "farmer",
            "writable": true,
            "signer": true
          },
          {
            "name": "farmer_profile",
            "writable": true
          }
        ],
        "args": []
      },
      {
        "name": "add_crop",
        "discriminator": [
          237,
          107,
          200,
          25,
          206,
          161,
          68,
          200
        ],
        "accounts": [
          {
            "name": "crop_info",
            "writable": true
          },
          {
            "name": "owner",
            "writable": true,
            "signer": true
          },
          {
            "name": "system_program"
          }
        ],
        "args": [
          {
            "name": "crop_name",
            "type": "string"
          },
          {
            "name": "crop_type",
            "type": "string"
          }
        ]
      }
    ],
    "accounts":[
      {
        "name":"FarmerProfile",
        "discriminator": [
          167,
          109,
          11,
          146,
          241,
          174,
          172,
          255
        ]
      },
      {
        "name": "FarmInfo",
        "discriminator": [
          121,
          41,
          216,
          82,
          80,
          123,
          74,
          223
        ]
      }
    ],
    "types":[
      {
        "name":"FarmerProfile",
        "type":{
          "kind":"struct",
          "fields":[
            {
              "name":"authority",
              "type":"pubkey"
            },
            {
              "name":"farm_name",
              "type":"string"
            }
          ]
        }
      },
      {
        "name": "FarmInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "owner",
              "type": "pubkey"
            },
            {
              "name": "farm_name",
              "type": "string"
            },
            {
              "name": "crop_name",
              "type": "string"
            },
            {
              "name": "crop_type",
              "type": "string"
            }
          ]
        }
      }
    ]
  }