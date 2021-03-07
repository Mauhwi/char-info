export const charData = [

    //--------------------Nightblade------------------------
    {
    "id": 1,
    "char_name": "Ash Maire",
    "char_lvl": 60,
    "char_class": "Nightblade",
    "weapon1": "Dual-wield",
    "weapon2": "Bow",
    "image_file": require("../images/cat.png"),
    "main_stats": 
        {
            "hp": 0,
            "mp": 0,
            "sp": 60
        },
    "armor":
        {
            "head_slot": {
                "id": 5,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "shoulder_slot": {
                "id": 5,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "body_slot": {
                "id": 1,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "waist_slot": {
                "id": 2,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "hand_slot": {
                "id": 2,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "leg_slot": {
                "id": 1,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "boot_slot": {
                "id": 1,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "ring_1": {
                "id": 2,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "ring_2": {
                "id": 2,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
            "neck_slot": {
                "id": 2,
                "trait": "Divines",
                "enchantment": "Stamina"
            },
        },
    "skills": {
            "first_bar": {
                "skill_1": 1,
                "skill_2": 2,
                "skill_3": 3,
                "skill_4": 4,
                "skill_5": 5,
            },
            "second_bar": {
                "skill_1": 1,
                "skill_2": 2,
                "skill_3": 3,
                "skill_4": 4,
                "skill_5": 5,
            }
    }
    

},
//--------------------Necromancer------------------------ 
{
    "id": 2,
    "char_name": "Zephxir",
    "char_lvl": 60,
    "char_class": "Necromancer",
    "weapon1": "Destruction staff",
    "weapon2": "Destruction staff",
    "image_file": require("../images/necr.png"),
    "main_stats": 
        {
            "hp": 0,
            "mp": 60,
            "sp": 0
        },
    "armor":
        {
            "head_slot": 3,
            "shoulder_slot": 3,
            "body_slot": 3,
            "waist_slot": 3,
            "hand_slot": 3,
            "leg_slot": 4,
            "boot_slot": 3,
            "ring_1": 4,
            "ring_2": 4,
            "neck_slot": 4
        }
}, 

//--------------------Templar------------------------
{
    "id": 3,
    "char_name": "Gwynel Brightheart",
    "char_lvl": 60,
    "char_class": "Templar",
    "weapon1": "Healing staff",
    "weapon2": "Destruction staff",
    "image_file": require("../images/templar.png"),
    "main_stats":
        {
            "hp": 0,
            "mp": 60,
            "sp": 0
        },
    "armor":
        {
            "head_slot": 1,
            "shoulder_slot": 1,
            "body_slot": 1,
            "waist_slot": 1,
            "hand_slot": 1,
            "leg_slot": 2,
            "boot_slot": 2,
            "ring_1": 2,
            "ring_2": 2,
            "neck_slot": 2
        }
},

//--------------------Dragonknight------------------------
{
    "id": 4,
    "char_name": "Har-Ja Neethseth",
    "char_lvl": 60,
    "char_class": "Dragon Knight",
    "weapon1": "One-handed & Shield",
    "weapon2": "Destruction staff",
    "image_file": require("../images/lizard.png"),
    "main_stats":
        {
            "hp": 0,
            "mp": 60,
            "sp": 0
        },
    "armor":
        {
            "head_slot": 1,
            "shoulder_slot": 1,
            "body_slot": 1,
            "waist_slot": 1,
            "hand_slot": 1,
            "leg_slot": 2,
            "boot_slot": 2,
            "ring_1": 2,
            "ring_2": 2,
            "neck_slot": 2
        }
}
]

export default charData