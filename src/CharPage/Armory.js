import React from 'react'
import './CharPage.css'
import Armor from '../data/armor.json'


function Armory({char}) {

    function FindArmor(id) {
        const armor = Armor.find(armor  =>
            armor.id == id
        )
        return armor.name
    }


    return (
        <div className='Armory'>
            <ul>
                <li>{FindArmor(char.armor.head_slot)} Head</li>
                <li>{FindArmor(char.armor.shoulder_slot)} Shoulders</li>
                <li>{FindArmor(char.armor.body_slot)} Body</li>
                <li>{FindArmor(char.armor.waist_slot)} Waist</li>
                <li>{FindArmor(char.armor.hand_slot)} Hands</li>
                <li>{FindArmor(char.armor.leg_slot)} Legs</li>
                <li>{FindArmor(char.armor.boot_slot)} Boots</li>
                <li>{FindArmor(char.armor.ring_1)} Ring</li>
                <li>{FindArmor(char.armor.ring_2)} Ring</li>
                <li>{FindArmor(char.armor.neck_slot)} Neck</li>
            </ul>
        </div>
    )
}

export default Armory