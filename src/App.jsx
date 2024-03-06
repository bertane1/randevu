import { useState } from 'react'
import './index.css'
import './App.css'

const phrases = [
  "Hayır",
  "Emin misin?",
  "Gerçekten emin misin?",
  "Tekrar düşünn!",
  "Bu son şans!",
  "Yok canım cevabın bu değildir?",
  "Bak pişman olma sonra!",
  "Bir daha mı düşünsen acaba!",
  "Harbiden baya ciddi ciddi mi eminsin?",
  "Bu bir hata olabilir!",
  "Yazık değil mi ya bana!",
  "Nolursun ya!",
  "Ani bir fikir değişikliği?",
  "Tekrar düşünmez misin?",
  "Bu son cevabın mı?",
  "Paramparçayım ;(",
]

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">OLEY!!!</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Randevu alabilir miyim?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Evet
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "Hayır" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default App
