import { defineDapp } from '@0xobelisk/sui-common';

export const dubheConfig = defineDapp({
  name: 'example',
  description: 'example',
  enums: {
    Status: ['Missed', 'Caught', 'Fled'],
    Direction: ['North', 'East', 'South', 'West'],
    AssetType: ['Lp', 'Wrapped', 'Private', 'Package']
  },
  components: {
    // Only has a key
    component0: {},
    component1: {
      fields: {
        player: 'address'
      },
      keys: ['player']
    },
    component2: {
      fields: {
        player_id: 'u32'
      },
      keys: ['player_id']
    },

    // Only has a key and a value
    component3: 'u32',
    component4: {
      fields: {
        player: 'address',
        value: 'u32'
      },
      keys: ['player']
    },
    component5: {
      fields: {
        value: 'u32'
      }
    },
    // Only has a key and some fields
    component6: {
      fields: {
        attack: 'u32',
        hp: 'u32'
      }
    },
    component7: {
      fields: {
        monster: 'address',
        attack: 'u32',
        hp: 'u32'
      },
      keys: ['monster']
    },

    // Enum
    component8: 'Direction',
    component9: {
      fields: {
        direction: 'Direction'
      }
    },
    component10: {
      fields: {
        player: 'address',
        direction: 'Direction'
      },
      keys: ['player']
    },
    component11: {
      fields: {
        player: 'address',
        value: 'u32',
        direction: 'Direction'
      },
      keys: ['player']
    },
    component12: {
      fields: {
        direction: 'Direction',
        player: 'address',
        value: 'u32'
      },
      keys: ['direction']
    },

    // Offchain
    component13: {
      offchain: true,
      fields: {
        player: 'address',
        value: 'u32'
      },
      keys: ['player']
    },
    component14: {
      offchain: true,
      fields: {
        result: 'Direction'
      }
    },
  },
  resources: {
    // Only has a value
    resource0: 'u32',
    resource1: {
      fields: {
        player: 'address',
        value: 'u32'
      }
    },
    resource2: {
      fields: {
        player: 'address',
        value: 'u32',
        direction: 'Direction'
      }
    },
    resource3: 'Direction',

    // Has a key and a value
    resource4: {
      fields: {
        player: 'address',
        value: 'u32'
      },
      keys: ['player']
    },
    resource5: {
      fields: {
        player: 'address',
        id: 'u32',
        value: 'u32'
      },
      keys: ['player', 'id']
    },
    resource6: {
      fields: {
        player: 'address',
        id1: 'u32',
        id2: 'u32',
        value1: 'u32',
        value2: 'u32'
      },
      keys: ['player', 'id1', 'id2']
    },

    // Offchain
    resource7: {
      offchain: true,
      fields: {
        player: 'address',
        value: 'u32'
      }
    },
  }
})
