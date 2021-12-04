<h1 align="center"> 
  🧟‍♀️ 7 Days to Die - Better Config 🧟‍♂️
</h1>

This project generates a new config to 7 Days to Die and also allows to edit weapons damage,
zombies max health and others in an easier way. It comes with a pre-defined configuration.

## What changed?

- Disable Zombies ladders climbing
- Increase guns, bows and white guns damage
- Greatly increase the damage of headshots (most zombies will get instakill).
- Increase the damage of headshots by spears, knives, machetes and other white guns.
- Bring back the old Claw Hammer, which repairs blocks with one click.
- Increase loot drop chance for Wight Radiated zombie.

## Where to edit the configuration?

It can be changed on `src/config` folder.

## How to edit?

A simple example of increasing damage of an item:

```
{
  name: 'meleeToolAxeT1IronFireaxe', // this is the item ID, it can be found in items.xml
  changes: [
    {
      // Increasing damage
      selector: Selectors.EntityDamage, // there are some selectors pre-defined to help with the configuration
      set: {
        value: 55.1, // it will set the property "value" of the selector '[name="EntityDamage"]' to 55.1
      },
    },
    {
      // If you want to increase headshot damages, use this (damage x value):
      selector: Selectors.Headshot,
      containerSelector: Selectors.EffectGroup,
      tag: generateTag('DamageModifier', { value: 5 }),
    },
  ],
},
```

More examples can be found on `src/config/items.js`.

## How to use it in my game?

There are a few steps to generate your own configuration.

- Go to your 7 Days to Die installation directory (`Steam/steamapps/common/7 Days To Die`)
- Go to the configuration directory (`Data/Config`) and copy all the files.
- Paste the files on the project folder: `src/default_config`
- Use the command `npm run generate` or `node src/index`
- Once the code ran, a folder named `generated_config` will be created. Copy and paste all the files inside this folder to your configuration directory(`Data/Config`)
