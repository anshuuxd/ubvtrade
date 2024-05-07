var petsData = [
    {name: "The Sun", d: 2300000.0, displaytype: "true", rarity: "Mythic", filtertype: "Skins", imageUrl: "./PetImagesFolder/Shadow Dragon.png"},
    {name: "Shadow Boss (SB)", d: 1450000.0, displaytype: "true", rarity: "Mythic", filtertype: "Effects", imageUrl: "https://i.ibb.co/VjPnrpW/shadowboss.png"},
    {name: "Crimson Eclipse (CE)", d: 1450000.0, displaytype: "true", rarity: "Mythic", filtertype: "Effects", imageUrl: "https://i.ibb.co/n147Cs5/crimson-eclipse.png"},
    {name: "Purple Eye (PE)", d: 1200000.0, displaytype: "true", rarity: "Legendary", filtertype: "Skins", imageUrl: "https://i.ibb.co/6sc1NJJ/purple-eye.png"},
    {name: "Roaring Star (RS)", d: 1150000.0, displaytype: "true", rarity: "Mythic", filtertype: "Effects", imageUrl: "https://i.ibb.co/2y8tM6K/Untitled-1.png"},
    {name: "Enchanted (Ench)", d: 850000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/rbJKFrd/Enchanted.png"},
    {name: "Haunted Thunder (HT)", d: 500000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/8Nz6rXB/Haunted-Thunder.png"},
    {name: "Glowing Pumpkin (GP)", d: 450000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Evil Unicorn.png"},
    {name: "Skeleton Stare (Skele)", d: 350000.0, displaytype: "true", rarity: "legendary", filtertype: "Banner", imageUrl: "https://i.ibb.co/bJ1bYWZ/skeleton.png"},
    {name: "Glacier", d: 250000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "https://i.ibb.co/SsVsrzJ/icon-glacier.png"},
    {name: "Helios (HL)", d: 215000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/86QRFb1/helios.png"},
    {name: "Dark Matter (DM)", d: 200000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Monkey King.png"},
    {name: "Blood Moon (BM)", d: 200000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Albino Monkey.png"},
    {name: "Overseer (os)", d: 175000.0,  displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Turtle.png"},
    {name: "Dribbling Pumpkins (DP)", d: 150000.0,displaytype: "true", rarity: "legendary", filtertype: "banner", imageUrl: "https://i.ibb.co/gwCYhKG/dribble.png"},
    {name: "Hot and Cold (HNC)", d: 135000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/D9q8PL2/hncv.png"},
    {name: "Cyborg (Cy)", d: 100000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Diamond Hamster.png"},
    {name: "Snowy Night (SN)", d: 85000.0 , displaytype: "true", rarity: "legendary", filtertype: "banner", imageUrl: "https://i.ibb.co/Vvv1Cw2/snowy.png"},
    {name: "Fireplace (FP)", d: 85000.0, displaytype: "true", rarity: "legendary", filtertype: "banner", imageUrl: "https://i.ibb.co/gmnsjzS/fireplace.png"},
    {name: "Power Blast (PB)", d: 85000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/bNYyfWT/Untitled-11.png"},
    {name: "Timescape (TS)", d: 75000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/R7bwJnc/timescape.png"},
    {name: "Meridian (Merd)", d: 65000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "https://i.ibb.co/56BGN68/meridian.png"},
    {name: "Demon", d: 55000.0, displaytype: "true", rarity: "Epic", filtertype: "Effects", imageUrl: "https://i.ibb.co/zs57DZp/Demon.png"},
    {name: "Thunder God (TG)", d: 50000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/rGnQL9C/thunder.png"},
    {name: "Sleigh", d: 50000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/kKkPj5Q/14.png"},
    {name: "Water Slam (WS)", d: 50000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/PCQ54H3/water-slam.png"},
    {name: "Meteor Strike (MS)", d: 50000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/JR7jBmK/Untitled-3.png"},
    {name: "Hollow Purple (HP)", d: 45000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/qN2Ffx9/Hollow-Purple.png"},
    {name: "Cupid's Bow (CB)", d: 45000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/LSFRHMq/cupid-bow.png"},
    {name: "Festive Lights", d: 40000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "https://i.ibb.co/RDq83tP/festivelights-icon.png"},
    {name: "Magma", d: 35000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "https://i.ibb.co/V9pJYZn/magma.png"},
    {name: "Lightning", d: 30000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Halloween White Ghost Dragon.png"},
    {name: "Spiked", d: 30000.0, displaytype: "true", rarity: "legendary", filtertype: "skins", imageUrl: "./PetImagesFolder/Dimorphodon.png"},
    {name: "Bats", d: 30000.0, displaytype: "true", rarity: "epic", filtertype: "Effects", imageUrl: "https://i.ibb.co/xgGfdf1/Bats.png"},
    {name: "Hex", d: 25000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "./PetImagesFolder/Midnight Dragon.png"},
    {name: "Phoenix Cannon (PC)", d: 25000.0, displaytype: "ture", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/R7z5B3q/Phoenix-Cannon.png"},
    {name: "RGB", d: 20000.0, displaytype: "true", rarity: "legendary", filtertype: "Skins", imageUrl: "https://i.ibb.co/8s4hX4F/rgb.png"},
    {name: "Airstrike (Air)", d: 20000.0, displaytype: "true", rarity: "legendary", filtertype: "Effects", imageUrl: "https://i.ibb.co/hZx5djp/airstrike.png"},
    {name: "Money Counter (MC)", d: 15000.0, displaytype: "true", rarity: "legendary", filtertype: "banner", imageUrl: "https://i.ibb.co/jJ4B4jt/Capture.png"},
    {name: "Neon Triangle (NT", d: 15000.0, displaytype: "ture", rarity: "legendary", filtertype: "banner", imageUrl: "./PetImagesFolder/TiÃ³ De Nadal.png"},
   
    ]
    