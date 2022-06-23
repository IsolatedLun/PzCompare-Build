# How this parser works
INFO: For vanilla/mods, the item data are stored in txt files located in the scripts folder.

## Workflow
INFO: `parser.py` loops throught the **files** folder and parses the txt files.

INFO: `utils.py` is used to combines many txt files (located in the **toCombine** folder) into 1 that will be placed in the **files** folder after being named.

Files in the **files** folders should be named like this:
{ MOD_NAME }.{ auto || ITEM_TYPE }.{ INDEX }.txt

Only using the **auto** keyword is recommended.

EXAMPLES: 
- Vanilla.weapon.1.txt
- Vanilla.weapon.2.txt
- Hydrocraft.auto.1.txt (the auto keyword lets the parser automatically sort the types)

### Steps
- STEP 0: In order to combine all txt files, put all of them in the **toCombine** folder and run utils.py
    => PzParser/toCombine/... => `python utils.py` => out.txt will be created.
- STEP 1: Rename **out.txt** according to it's package name and move it into the **files** folder.
    => PzParser/files/...
- STEP 2: `python parser.py` => Master.json file gets created.
- Step 3: Copy/Paste the data to frontend => src/data/MasterData.json

#### Valid data
item Saucepan
{
    DisplayCategory = Cooking,
    Weight = 0.7,
    CanStoreWater = TRUE,
    DisplayName = Saucepan,
    ReplaceOnUseOn = WaterSource-WaterSaucepan,
    Icon = SaucepanEmpty,
    MetalValue = 30,
    RainFactor = 0.8,
    StaticModel = SaucePan,
    Tooltip = Tooltip_item_RainFromGround,
    MaxRange = 1,
    ...
}