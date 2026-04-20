
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 25 vragen, mobiel‑vriendelijk, survey‑stijl
const questions = [
  { id: 1, text: "Ik vind het leuk om te begrijpen waarom systemen zich gedragen zoals ze doen.", fields: { neuro: 1 } },
  { id: 2, text: "Ik werk graag mechanismen stap voor stap uit.", fields: { molecular: 1 } },
  { id: 3, text: "Ik kan goed omgaan met onzekerheid en onvolledige antwoorden.", fields: { neuro: 1 } },
  { id: 4, text: "Ik werk graag met veel detail en precisie.", fields: { molecular: 1 } },
  { id: 5, text: "Ik leg graag verbanden tussen genen, cellen en patiënten.", fields: { immunology: 1 } },


  { id: 6, text: "Ik ben gefascineerd door hoe de hersenen gedrag en emoties voortbrengen.", fields: { neuro: 1 } },
  { id: 7, text: "Ik ben nieuwsgierig naar hoe het lichaam infecties en kanker herkent.", fields: { immunology: 1 } },
  { id: 8, text: "Ik denk vaak na over of iets schadelijk of toxisch kan zijn.", fields: { toxicology: 1 } },
  { id: 9, text: "Ik leer graag over genen, mutaties en moleculaire pathways.", fields: { molecular: 1 } },
  { id: 10, text: "Ik voel me aangetrokken tot goed verklaarbare ziekte­mechanismen.", fields: { molecular: 1 } },

  { id: 11, text: "Ik werk graag praktisch in een laboratoriumomgeving.", fields: { neuro: 1, immunology: 1, molecular: 1 } },
  { id: 12, text: "Ik vind het leuk om data en patronen te analyseren.", fields: { neuro: 1, molecular: 1 } },
  { id: 13, text: "Voor mij is nauwkeurigheid belangrijker dan snelheid.", fields: { toxicology: 1 } },
  { id: 14, text: "Ik werk graag in een gestructureerde omgeving met duidelijke regels.", fields: { toxicology: 1 } },
  { id: 15, text: "Ik vind het belangrijk dat wetenschap direct toepasbaar is in de praktijk.", fields: { immunology: 1 } },


  { id: 16, text: "Het beschermen van mensen tegen mogelijke schade motiveert mij sterk.", fields: { toxicology: 1 } },
  { id: 17, text: "Ik kan goed omgaan met risico‑batenafwegingen.", fields: { toxicology: 1 } },
  { id: 18, text: "Ik word gemotiveerd door het verbeteren van gezondheid op lange termijn.", fields: { neuro: 1, immunology: 1 } },
  { id: 19, text: "Ik denk veel na over veiligheid voor verschillende groepen mensen.", fields: { toxicology: 1 } },
  { id: 20, text: "Ik denk graag na over onbedoelde gevolgen van interventies.", fields: { immunology: 1, toxicology: 1 } },


  { id: 21, text: "Ik kan mij voorstellen dat ik (direct of indirect) in een ziekenhuis werk.", fields: { neuro: 1 } },
  { id: 22, text: "Ik zou graag in de farmaceutische of biotechnologische industrie werken.", fields: { molecular: 1, toxicology: 1 } },
  { id: 23, text: "Ik voel mij aangetrokken tot regelgevende of toezichthoudende functies.", fields: { toxicology: 1 } },
  { id: 24, text: "Ik ben geïnteresseerd in nieuwe en baanbrekende technologieën.", fields: { neuro: 1, molecular: 1 } },
  { id: 25, text: "Ik wil graag werken op het snijvlak van wetenschap en geneeskunde.", fields: { immunology: 1, molecular: 1 } },
];


export default function Survey() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const current = questions[index];


  const handleAnswer = (value) => {
    setAnswers({ ...answers, [current.id]: value });
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      setShowResult(true);
    }
  };

  const scores = { neuro: 0, immunology: 0, toxicology: 0, molecular: 0 };
  questions.forEach(q => {
    const value = answers[q.id] || 0;
    Object.keys(q.fields).forEach(field => {
      scores[field] += value;
    });
  });

  if (showResult) {
    return (      <div className="max-w-md mx-auto p-4">
        <Card className="rounded-2xl shadow">
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-bold">Jouw resultaat</h2>
            <p>🧠 Neurobiologie & Klinische Neurowetenschappen: {scores.neuro}</p>
            <p>🦠 Immunologie & Gastheerafweer: {scores.immunology}</p>
            <p>⚠️ Geneesmiddelveiligheid & Toxicologie: {scores.toxicology}</p>
            <p>🧬 Moleculaire Geneeskunde: {scores.molecular}</p>
            <p className="text-sm text-gray-600 mt-2">De hoogste score geeft je beste match aan.</p>
          </CardContent>
        </Card>
      </div>
    );
  }


  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="rounded-2xl shadow">
        <CardContent className="p-4 space-y-4">
          <p className="text-sm text-gray-500">Vraag {index + 1} van {questions.length}</p>
          <h2 className="text-lg font-semibold">{current.text}</h2>
          <div className="grid grid-cols-1 gap-2">
            {[1,2,3,4,5].map(v => (
              <Button key={v} size="lg" variant="outline" onClick={() => handleAnswer(v)}>
                {v === 1 && "Helemaal oneens"}
                {v === 2 && "Oneens"}
                {v === 3 && "Neutraal"}
                {v === 4 && "Eens"}
                {v === 5 && "Helemaal eens"}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
