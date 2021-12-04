const entitiesConfig = [
  {
    name: 'zombieTemplateMale',
    changes: [
      {
        // Disable zombie ladder climbing
        selector: Selectors.CanClimbLadders,
        set: {
          value: false,
        },
      },
    ],
  },
  {
    name: 'zombieFemaleFat',
    changes: [
      {
        selector: Selectors.CanClimbLadders,
        set: {
          value: false,
        },
      },
    ],
  },
  {
    name: 'zombieSteveCrawler',
    changes: [
      {
        selector: Selectors.CanClimbLadders,
        set: {
          value: false,
        },
      },
    ],
  },
  {
    name: 'zombieWightRadiated',
    changes: [
      {
        selector: Selectors.HealthMax,
        set: {
          value: 5000,
        },
      },
      {
        selector: Selectors.ExperienceGain,
        set: {
          value: 5000,
        },
      },
      {
        selector: Selectors.LootDropProbability,
        set: {
          value: '.8',
        },
      },
    ],
  },
];

module.exports = { entitiesConfig };
