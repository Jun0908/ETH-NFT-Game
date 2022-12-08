// constants.js
const CONTRACT_ADDRESS = "0xF9B1c67aD324F8E7B3CA8796D926fE100CDd8eD0";

//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
  // 変数を constants.js 以外の場所でも使えるようにします。
  export { CONTRACT_ADDRESS, transformCharacterData };