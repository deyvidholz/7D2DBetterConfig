const { generateTag } = require('../helpers/tags');
const { ItemNames } = require('./itemNamesEnum');
const { Selectors } = require('./selectorsEnum');

const itemsConfig = [
  {
    name: ItemNames.HammerClaw,
    changes: [
      {
        // Claw Hammer repair blocks with one rightclick
        selector: Selectors.Action1UpgradeHit,
        set: {
          value: -3,
        },
      },
    ],
  },
  {
    name: ItemNames.AxeFireaxe,
    changes: [
      {
        // Increasing damage
        selector: Selectors.EntityDamage,
        set: {
          value: 55.1,
        },
      },
      {
        // Applying multiplier to damage when target gets a headshot
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.AxeSteel,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 60.9,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.HammerStone,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 22.5,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.HammerStone,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 22.5,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.HammerIron,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 33,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.HammerSteel,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 48,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.Chainsaw,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 40,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 10 }),
      },
    ],
  },
  {
    name: ItemNames.Auger,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 16,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.KnifeHunting,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 14.5,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 10 }),
      },
    ],
  },
  {
    name: ItemNames.KnifeBladeMachete,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 32,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 7 }),
      },
    ],
  },
  {
    name: ItemNames.ClubWooden,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 32,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 7 }),
      },
    ],
  },
  {
    name: ItemNames.BatonStun,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 13.4,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.BatonPlasma,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 13.4,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.SpearStone,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 15.3,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.SpearIron,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 19.5,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.SpearSteel,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 24.6,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 3 }),
      },
    ],
  },
  {
    name: ItemNames.KnucklesLeather,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 7,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.KnucklesIron,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 12,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.KnucklesSteel,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 17,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 2 }),
      },
    ],
  },
  {
    name: ItemNames.SledgeJunk,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 15,
        },
      },
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 3 }),
      },
    ],
  },
  {
    name: ItemNames.BowPrimitive,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.BowWooden,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 10 }),
      },
    ],
  },
  {
    name: ItemNames.BowCompound,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 10 }),
      },
    ],
  },
  {
    name: ItemNames.BowCrossbow,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 15 }),
      },
    ],
  },
  {
    name: ItemNames.BowCrossbowCompound,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 15 }),
      },
    ],
  },
  {
    name: ItemNames.ammoArrowIron,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 37,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoArrowSteelAP,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 48,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoArrowFlaming,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 36,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoArrowExploding,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 90,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoArrowExploding,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 90,
        },
      },
    ],
  },

  {
    name: ItemNames.ammoCrossbowBoltIron,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 40,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoCrossbowBoltSteelAP,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 52,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoCrossbowBoltFlaming,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 40,
        },
      },
    ],
  },
  {
    name: ItemNames.ammoCrossbowBoltExploding,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 100,
        },
      },
    ],
  },
  {
    name: ItemNames.ammo44mm,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 91,
        },
      },
    ],
  },
  {
    name: ItemNames.ammo44mmHP,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 91,
        },
      },
    ],
  },
  {
    name: ItemNames.ammo44mmAP,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 70,
        },
      },
    ],
  },
  {
    name: ItemNames.explosiveGrenade,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 3000,
        },
      },
    ],
  },
  {
    name: ItemNames.explosiveGrenade,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 3000,
        },
      },
    ],
  },
  {
    name: ItemNames.explosiveC4,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 2500,
        },
      },
    ],
  },
  {
    name: ItemNames.explosiveDynamite,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 5000,
        },
      },
    ],
  },
  {
    name: ItemNames.explosiveMolotov,
    changes: [
      {
        selector: Selectors.EntityDamage,
        set: {
          value: 50,
        },
      },
    ],
  },
  {
    name: ItemNames.gunHandgunT1Pistol,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunHandgunT3SMG5,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunHandgunT2Magnum44,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunHandgunT3DesertVulture,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunShotgunT0Blunderbuss,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunShotgunT1DoubleBarrel,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunShotgunT2PumpShotgun,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunShotgunT3AutoShotgun,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunRifleT1HuntingRifle,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunRifleT2MarksmanRifle,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunRifleT3SniperRifle,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunMGT1AK47,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunMGT2TacticalAR,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
  {
    name: ItemNames.gunMGT3M60,
    changes: [
      {
        selector: Selectors.Headshot,
        containerSelector: Selectors.EffectGroup,
        tag: generateTag('DamageModifier', { value: 5 }),
      },
    ],
  },
];

module.exports = { itemsConfig };
