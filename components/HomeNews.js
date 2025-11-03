import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function HomeNews() {
  const news =   [
  {
    "id": 1,
    "bashliq": "Elon Musk və onun pişiyi: Rahatlıq və ilham qaynağı",
    "shekil": "https://images.pexels.com/photos/2194261/pexels-photo-2194261.jpeg",
    "etrafli": "Elon Musk, heyvanlara olan sevgisi ilə tanınır. O, xüsusilə pişikləri sevdiyini və onların ona işdə ilham verdiyini bildirib. Musk deyir ki, heyvanlarla ünsiyyət stressi azaldır və yaradıcılığı artırır."
  },
  {
    "id": 2,
    "bashliq": "Taylor Swift və köpəkləri: Dostluq və sevgi",
    "shekil": "https://images.pexels.com/photos/1909802/pexels-photo-1909802.jpeg",
    "etrafli": "Taylor Swift sosial şəbəkələrdə tez-tez itləri ilə şəkillərini paylaşır. O, heyvanları ilə vaxt keçirməyin ona rahatlıq və xoşbəxtlik gətirdiyini deyir. Swift üçün heyvanlar yalnız dost deyil, həm də ailə üzvüdür."
  },
  {
    "id": 3,
    "bashliq": "Leonardo DiCaprio: Ekoloji məsuliyyət və heyvanlar",
    "shekil": "https://images.pexels.com/photos/1386422/pexels-photo-1386422.jpeg",
    "etrafli": "Leonardo DiCaprio heyvanların qorunmasına böyük diqqət göstərir. O, tez-tez vəhşi təbiət və it, pişik kimi ev heyvanları haqqında məlumat paylaşır. Aktyor heyvanların hüquqlarını müdafiə etməyin hər kəsin borcu olduğunu vurğulayır."
  },
  {
    "id": 4,
    "bashliq": "Ariana Grande və ev heyvanları: Sevgi dolu anlar",
    "shekil": "https://images.pexels.com/photos/1452717/pexels-photo-1452717.jpeg",
    "etrafli": "Ariana Grande heyvanları ilə bağlı sosial mediada çox aktivdir. O, pişik və köpəkləri ilə çəkdirdiyi şəkilləri paylaşaraq, fanatlarına heyvan sevgisini təbliğ edir. Grande heyvanların həyatında sevgi və xoşbəxtlik qaynağı olduğunu bildirir."
  },
  {
    "id": 5,
    "bashliq": "Chris Evans: Heyvan sevgisi və məsuliyyət",
    "shekil": "https://images.pexels.com/photos/1643456/pexels-photo-1643456.jpeg",
    "etrafli": "Chris Evans heyvanları çox sevir və tez-tez onları himayəyə götürməyə təşviq edir. O, ev heyvanları ilə vaxt keçirməyin psixoloji sağlamlıq üçün faydalı olduğunu qeyd edir və fanatlarını heyvanlara diqqətli davranmağa çağırır."
  }
]
 const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex(prev => (prev + 1) % news.length);
//     }, 10000); // 5 saniyə

//     // Cleanup - vacibdir, intervali dayandırmaq üçün
//     return () => clearInterval(interval);
//   }, []);


  return (
    <View style={{paddingTop:10, display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <View style={{
            position:'relative',
            width:'90%',
            height:128,  
        }}
        className='justify-end'
        >
            <View style={{
                position:'absolute',
                top:0,
                left:0,
                bottom:0,
                right:0,
                borderRadius:20
            }}>
                <Image style={{width:'100%', height:128, borderRadius:10}} resizeMode='cover' source={{uri:news[index].shekil}} />
                
            </View>
            <View className='w-full'>
                <Text className='text-white text-2xl px-1 font-bold'>{news[index].bashliq}</Text>
            </View>

        </View>
    </View>
  )
}