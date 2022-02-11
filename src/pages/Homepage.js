import Card from "../components/Card";
import Description from "../components/Description";

const HomePage = (props) => {
    const { handleShowFullDescription, showFullDescription } = props;
    const cards = [
        {
            image: {
                src: "https://guru-images-jnvsumit.s3.ap-south-1.amazonaws.com/swami-ji-baburi.JPG",
                alt: "श्री श्री १००८ स्वामी जी महाराज 'परमहंस'"
            },
            title: "श्री श्री १००८ स्वामी जी महाराज 'परमहंस'",
            shortDescription: "this is a desc",
            longDescription: "",
            order: 1,
            id: 1
        },
        {
            image: {
                src: "https://guru-images-jnvsumit.s3.ap-south-1.amazonaws.com/swami-ji-pamhati.JPG",
                alt: "श्री श्री १००८ स्वामी कबीर जी महाराज 'परमहंस'"
            },
            title: "श्री श्री १००८ स्वामी कबीर जी महाराज 'परमहंस'",
            shortDescription: `उत्तर प्रदेश के ग्राम भटरौल थाना साहबगंज तहसील चकिया जिला चंदौली जो कभी कशी का अभिन्न अंग था में श्री माघ पूर्णिमा संवत 1955 सन 1898 ईसवी में सौभाग्यवती रजनी देवी के गर्भ से श्री श्री १००८ श्री स्वामी कबीर जी महाराज 'परमहंस' प्रकट हुए
            आपके पिता श्री जूठन मौर्य तथा आपके दादा श्री अलियार मौर्य थे आप एक बहन दो भाई थ। आपका बचपन का नाम यानी गृहस्थ जीवन का नाम श्री जगन्नाथ मौर्य था आपके पूर्वज काफी संपन्न तथा बड़े भूखंड के मालिक थे साथ ही साथ सैकड़ों गाय भैसे भी थी|
           
           समय विपरीत होने पर संपन्नता विपन्नता में बदल गई इसलिए आपका बचपन अभाव में बिता जिससे शिक्षा नहीं के बराबर यानी संभवतः कक्षा दो तक ही थी आपके पिताजी कोलकाता शहर में चतकल में नौकरी करते थे आप की माता जी खेती कूत पर लेकर करती थी
            छोटे भाई के नादान होने के कारण खेत में आपको ही परिश्रम करना पड़ता था। कभी-कभी अकाल पड़ने पर अन्य गांवों में आम बेचकर  भोजन के लिए जुगाड़ करना पड़ता था आप बचपन से ही बहुत कुशाग्र बुद्धि थे 
           आप लोकगीत बिरहा तथा कजरी के प्रख्यात कवि थे आपका शुभ विवाह सौभाग्यवती विदुषी महिला प्रातः स्मरणीय श्रीमती शिवदासी देवी से हुआ था। आपके नाम तथा गुण में काफी साम्य था अगर यह कहा जाये की वो कलजुग की अनुसुईया थी तो अतिशयोक्ति न होगा। वह ऐसी पतिभक्त थी की एक बार पति के कहने पर ही सदा-सदा के लिए माया का त्याग कर दिया। आपकी एक पुत्र तथा तीन पुत्रियां थी। पुत्र का नाम   राजेंद्र मौर्य तथा पुत्री का नाम गायत्री देवी है। आप एक बार आप बैशाख के महीने में जौ की मड़ाई कर रहे थें। ईश्वर के प्रति आस्थावान तथा आध्यात्मिक रुझान के कारण एकाएक आपके दिमाग में आया की दुनिया में बहुत फल है लेकिन उसको खाया जायेगा तब तो स्वाद मालूम होगा यानि कहने का मूल भाव यह है की इस नस्वर जगत में गुरु तो बहुत है यानि आप श्री स्वामी जी महाराज कुटी बबुरी सद्गुरु हैं इतना ही आया की आप बैलों को छटकाकर कुटी का रास्ता पकड़ लिए और गुरु की परम सेवा करके परमज्ञान प्राप्त किया।`,
            longDescription: `विश्व गुरु भारत महापुरुषों का देश है। सतयुग त्रेता द्वापर कलयुग यानि चारो जुगो में समय-समय पर भारत की पावन धरती पर अनेकों महान विभूतिया अवतरित हुई है। जिन्होंने अपने सद्ज्ञान के आलोक से समूचे विश्व को आलोकित तथा आश्चर्यचकित कर दिया। 
            अवतरित होने के लिए मर्यादा पुरुषोत्तम भगवान श्री रामचंद्र जी तथा लीला पुरुषोत्तम भगवान् श्रीकृष्ण जी ने इस अनुपम भारत भूमि को वरीयता द। प्रकृति ने भी केवल भारत भूमि को ही ६ ऋतुओ तथा ३ मौसमों का अनुपम सौगाद दिया है और तीनों तरफ से जल्द ही इस तपोभूमि का अभिनन्दन एवं पादप्रक्षालन करता है।  
            
            जगतगुरु भारत ही पूरे जगत को मानवता का पाठ पढ़ाया और सत्य अहिंसा तथा विश्व बंधुत्व का अद्वितीय पावन मूल मंत्र दिया तथा सद्ज्ञान का परचम लहराया
            विश्व गुरु की पावन धरा पर कई विभूतियां अवतरित हुई हैं यहां तक कि विश्व कल्याण के लिए अपनी हड्डी का दान देने वाले महर्षि दधीचि एक कपूत की जान बचाने के लिए अपने पुरे शरीर को काट काट कर तराजू के पलड़े पर तौल देने वाले यानि शरणागत की रक्षा करने वाले राजा शिवि, पुराणों की रचना करने वाले महर्षि व्यास, वेद की रचना करने वाले विश्वामित्र, युग परिवर्तन करने वाले श्री राम के गुरु मनुवर वशिष्ठ, ब्रह्मा, विष्णु, शंकर को 6 महीने का बालक बनाने वाली माता अनुसुईया के पति मुनि अत्रि, सत्य के मार्ग से विचलित ना होने वाले सत्यवादी राजा हरिश्चंद्र तथा एक दिन के सम्मान के चलते पूरी जिंदगी को अर्पण करने वाला महादानी कर्ण, आदि ने जन्म लेकर भारत की महानता में चार चाँद जड़ दिया। भारत के महापुरुष ही नहीं यहां की नारिया भी पुरुषों से पीछे नहीं रही। जगत जननी मां जानकी को पतिव्रता धर्म का पाठ पढ़ाने वाली यानी बताने वाली सती अनुसुइया लोपामुद्रा तपस्या के बल पर अपने कुष्ठ रोग को ठीक करने वाली मोनी अत्रि की पुत्री अपाला
            
            राजा जनक की सभा में आए हुए ऋषि मुनियों के बीच में याज्ञवल्क मुनि से सस्त्यार्थ करने वाली गार्गी, सीता, राधा, मीरा, सहजो करमैती ने भारत को गौरवान्वित किया
            
            भारत की महान सती नारियों में एक सती सावित्री ने महान ज्ञानी यमराज को भी घुटने टेकने पर मजबूर कर दिया तथा अपने पति सत्यवान को जिंदा करने पर विवश कर दिया कलयुग में भी इस देव भूमि भारत की पावन धरा पर अनेको संत महापुरुष प्रकट हुए 
            महात्मा बुध्द, आदि गुरु शंकराचार्य, श्री श्री 1008 श्री स्वामी अद्वैता आनंद जी महाराज परमहंस,
            
            श्री श्री 1008 स्वामी स्वरूपानंद जी महाराज परमहंस, 1008 श्री स्वामी विवेकानंद महाराज परमहंस आश्रम गढ़वा घाट, श्री श्री 1008 श्री स्वामी जी महाराज परमहंस बुटीबोरी ने भी इस धरा धाम पर अवतरित होकर अपने सद्ज्ञान से सनातन धर्म को पुष्पित पल्लवित किया अर्थात अनेको भक्त भामनियो को सन्मार्ग दिखलाया
            
            इसी मानव कल्याण की परंपरा को अक्षुण्ण रखने के लिए उत्तर प्रदेश के ग्राम भटरौल थाना साहबगंज तहसील चकिया जिला चंदौली जो कभी कशी का अभिन्न अंग था में श्री माघ पूर्णिमा संवत 1955 सन 1898 ईसवी में सौभाग्यवती रजनी देवी के गर्भ से श्री श्री १००८ श्री स्वामी कबीर जी महाराज परमहंस प्रकट हुए
             आपके पिता श्री जूठन मौर्य तथा आपके दादा श्री अलियार मौर्य थे आप एक बहन दो भाई थ। आपका बचपन का नाम यानी गृहस्थ जीवन का नाम श्री जगन्नाथ मौर्य था आपके पूर्वज काफी संपन्न तथा बड़े भूखंड के मालिक थे साथ ही साथ सैकड़ों गाय भैसे भी थी|
            
            समय विपरीत होने पर संपन्नता विपन्नता में बदल गई इसलिए आपका बचपन अभाव में बिता जिससे शिक्षा नहीं के बराबर यानी संभवतः कक्षा दो तक ही थी आपके पिताजी कोलकाता शहर में चतकल में नौकरी करते थे आप की माता जी खेती कूत पर लेकर करती थी
             छोटे भाई के नादान होने के कारण खेत में आपको ही परिश्रम करना पड़ता था। कभी-कभी अकाल पड़ने पर अन्य गांवों में आम बेचकर  भोजन के लिए जुगाड़ करना पड़ता था आप बचपन से ही बहुत कुशाग्र बुद्धि थे 
            आप लोकगीत बिरहा तथा कजरी के प्रख्यात कवि थे आपका शुभ विवाह सौभाग्यवती विदुषी महिला प्रातः स्मरणीय श्रीमती शिवदासी देवी से हुआ था। आपके नाम तथा गुण में काफी साम्य था अगर यह कहा जाये की वो कलजुग की अनुसुईया थी तो अतिशयोक्ति न होगा। वह ऐसी पतिभक्त थी की एक बार पति के कहने पर ही सदा-सदा के लिए माया का त्याग कर दिया। आपकी एक पुत्र तथा तीन पुत्रियां थी। पुत्र का नाम   राजेंद्र मौर्य तथा पुत्री का नाम गायत्री देवी है। आप एक बार आप बैशाख के महीने में जौ की मड़ाई कर रहे थें। ईश्वर के प्रति आस्थावान तथा आध्यात्मिक रुझान के कारण एकाएक आपके दिमाग में आया की दुनिया में बहुत फल है लेकिन उसको खाया जायेगा तब तो स्वाद मालूम होगा यानि कहने का मूल भाव यह है की इस नस्वर जगत में गुरु तो बहुत है यानि आप श्री स्वामी जी महाराज कुटी बबुरी सद्गुरु हैं इतना ही आया की आप बैलों को छटकाकर कुटी का रास्ता पकड़ लिए और गुरु की सेवा करके परमज्ञान प्राप्त किया।`,
            order: 1,
            id: 2
        },
        {
            image: {
                src: "https://guru-images-jnvsumit.s3.ap-south-1.amazonaws.com/swami-ji-byuri.JPG",
                alt: "श्री श्री १०८ स्वामी नामधनी जी महाराज 'परमहंस'"
            },
            title: "श्री श्री १०८ स्वामी नामधनी जी महाराज 'परमहंस'",
            shortDescription: "this is a desc",
            longDescription: "",
            order: 1,
            id: 3
        }
    ];

    const card = cards.filter(card => card.id === showFullDescription.id ? true : false)[0];


    return (
        <div className="container">
            { showFullDescription.show ? <Description image={card.image} title={card.title} desc={card.longDescription} id={card.id} order={card.order} key={card.id} handleShowFullDescription={handleShowFullDescription} /> :
                cards.map((card)=>{
                    return <Card image={card.image} title={card.title} desc={card.shortDescription} id={card.id} order={card.order} key={card.id} handleShowFullDescription={handleShowFullDescription}/>
                })
            }
        </div>
     );
}
 
export default HomePage;