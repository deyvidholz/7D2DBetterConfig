const Selectors = {
  EntityDamage: '[name="EntityDamage"]',
  BlockDamage: '[name="BlockDamage"]',
  Headshot: '[name="DamageModifier"][tags="head"]',
  EffectGroup: 'effect_group',
  Action1UpgradeHit: '[name="Upgrade_hit_offset"]',
  CanClimbLadders: '[name="CanClimbLadders"]',
  HealthMax: '[name="HealthMax"][operation="base_set"]',
  LootDropProbability: '[name="LootDropProb"]',
  ExperienceGain: '[name="ExperienceGain"]',
};

module.exports = { Selectors };
