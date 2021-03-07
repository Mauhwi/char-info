
import React from 'react';
import './CharPage.css';
import Armor from '../data/armor.json';


function Armory({char}) {

    function GetArmor(id) {
        const armor = Armor.find(armor  =>
            armor.id == id
        )
        return armor.name
    }


    function GetLocation(id) {
        const armor = Armor.find(armor  =>
            armor.id == id
        )
        return armor.location
    }

    function handleClick(event) {
        let elements = document.querySelectorAll('.Armory li');
        elements.forEach(
            (element) => element.classList[event.target==element?'toggle':'remove']('active')
          )
        
    } 



    return (
        <div className='Armory'>
            <ul>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.head_slot.id)} Head</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.head_slot.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.shoulder_slot.id)} Shoulders</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.shoulder_slot.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.body_slot.id)} Body</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.body_slot.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.waist_slot.id)} Waist</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.waist_slot.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.hand_slot.id)} Hands</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.hand_slot.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.leg_slot.id)} Legs</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.leg_slot.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.boot_slot.id)} Boots</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.boot_slot.id)}</p>
                </li>              
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.ring_1.id)} Ring</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.ring_1.id)}</p>
                </li> 
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.ring_2.id)} Ring</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.ring_2.id)}</p>
                </li>
                <li onClick={handleClick}>
                    <p><span class="armor">{GetArmor(char.armor.neck_slot.id)} Neck</span><span>{char.armor.head_slot.trait}</span><span>{char.armor.head_slot.enchantment}</span></p>
                    <p className="location">{GetLocation(char.armor.neck_slot.id)}</p>
                </li>
            </ul>
        </div>
    )
}

export default Armory